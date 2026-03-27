/**
 * Script que obtiene datos de partidos del Mundial 2026 desde football-data.org
 * y regenera src/data/partidos.ts con los datos actualizados.
 *
 * Uso: FOOTBALL_DATA_API_KEY=tu_clave node scripts/actualizar-partidos.mjs
 * O con .env: npm run actualizar (carga .env automáticamente con --env-file)
 */

import { writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const RUTA_PARTIDOS = resolve(__dirname, '../src/data/partidos.ts')

const API_KEY = process.env.FOOTBALL_DATA_API_KEY
const API_BASE = 'https://api.football-data.org/v4'
const COMPETICION = 'WC'

// ── Zona horaria por defecto para mostrar las horas ──
// El Mundial se juega en Norteamérica; usamos hora del este de EE.UU.
// Cada ciudad tiene su zona, pero la mayoría de sedes están en ET o CT.
// Usamos America/New_York como base y el usuario ve hora consistente.
const ZONA_HORARIA = 'America/Mexico_City'

// ── Mapa de traducción: nombre en inglés → nombre en español ──
const TRADUCCION_EQUIPOS = {
  'Mexico': 'México',
  'South Korea': 'Corea del Sur',
  'Korea Republic': 'Corea del Sur',
  'South Africa': 'Sudáfrica',
  'United States': 'Estados Unidos',
  'USA': 'Estados Unidos',
  'Canada': 'Canadá',
  'Switzerland': 'Suiza',
  'Brazil': 'Brasil',
  'Morocco': 'Marruecos',
  'Haiti': 'Haití',
  'Scotland': 'Escocia',
  'Germany': 'Alemania',
  'Curaçao': 'Curazao',
  'Curacao': 'Curazao',
  'Netherlands': 'Países Bajos',
  'Japan': 'Japón',
  'Ivory Coast': 'Costa de Marfil',
  "Côte d'Ivoire": 'Costa de Marfil',
  'Tunisia': 'Túnez',
  'Spain': 'España',
  'Cape Verde': 'Cabo Verde',
  'Cape Verde Islands': 'Cabo Verde',
  'Belgium': 'Bélgica',
  'Egypt': 'Egipto',
  'Saudi Arabia': 'Arabia Saudita',
  'Iran': 'Irán',
  'IR Iran': 'Irán',
  'New Zealand': 'Nueva Zelanda',
  'France': 'Francia',
  'Norway': 'Noruega',
  'Algeria': 'Argelia',
  'Austria': 'Austria',
  'Jordan': 'Jordania',
  'Portugal': 'Portugal',
  'Colombia': 'Colombia',
  'Uzbekistan': 'Uzbekistán',
  'England': 'Inglaterra',
  'Croatia': 'Croacia',
  'Panama': 'Panamá',
  'Ghana': 'Ghana',
  'Senegal': 'Senegal',
  'Paraguay': 'Paraguay',
  'Ecuador': 'Ecuador',
  'Uruguay': 'Uruguay',
  'Argentina': 'Argentina',
  'Qatar': 'Qatar',
  'Australia': 'Australia',
}

// ── Mapa de estadios: nombre de la API → { estadio, ciudad } ──
const MAPA_ESTADIOS = {
  'Estadio Azteca': { estadio: 'Estadio Azteca', ciudad: 'Ciudad de México' },
  'Azteca Stadium': { estadio: 'Estadio Azteca', ciudad: 'Ciudad de México' },
  'Estadio Akron': { estadio: 'Estadio Akron', ciudad: 'Guadalajara' },
  'Akron Stadium': { estadio: 'Estadio Akron', ciudad: 'Guadalajara' },
  'Estadio BBVA': { estadio: 'Estadio BBVA', ciudad: 'Monterrey' },
  'BBVA Stadium': { estadio: 'Estadio BBVA', ciudad: 'Monterrey' },
  'AT&T Stadium': { estadio: 'AT&T Stadium', ciudad: 'Arlington' },
  'MetLife Stadium': { estadio: 'MetLife Stadium', ciudad: 'East Rutherford' },
  'GEHA Field at Arrowhead Stadium': { estadio: 'GEHA Field at Arrowhead Stadium', ciudad: 'Kansas City' },
  'Arrowhead Stadium': { estadio: 'GEHA Field at Arrowhead Stadium', ciudad: 'Kansas City' },
  'Mercedes-Benz Stadium': { estadio: 'Mercedes-Benz Stadium', ciudad: 'Atlanta' },
  'NRG Stadium': { estadio: 'NRG Stadium', ciudad: 'Houston' },
  "Levi's Stadium": { estadio: "Levi's Stadium", ciudad: 'Santa Clara' },
  'SoFi Stadium': { estadio: 'SoFi Stadium', ciudad: 'Inglewood' },
  'Lincoln Financial Field': { estadio: 'Lincoln Financial Field', ciudad: 'Filadelfia' },
  'Lumen Field': { estadio: 'Lumen Field', ciudad: 'Seattle' },
  'Gillette Stadium': { estadio: 'Gillette Stadium', ciudad: 'Foxborough' },
  'Hard Rock Stadium': { estadio: 'Hard Rock Stadium', ciudad: 'Miami Gardens' },
  'BC Place': { estadio: 'BC Place', ciudad: 'Vancouver' },
  'BMO Field': { estadio: 'BMO Field', ciudad: 'Toronto' },
}

// ── Mapa de estado de la API → nuestro estado ──
const MAPA_ESTADO = {
  'SCHEDULED': 'programado',
  'TIMED': 'programado',
  'IN_PLAY': 'en_juego',
  'PAUSED': 'en_juego',
  'FINISHED': 'finalizado',
  'SUSPENDED': 'en_juego',
  'POSTPONED': 'programado',
  'CANCELLED': 'programado',
  'AWARDED': 'finalizado',
}

// ── Meses en español ──
const MESES = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
]

function traducirEquipo(nombre) {
  if (!nombre) return 'Por definir'
  return TRADUCCION_EQUIPOS[nombre] || nombre
}

function fechaLocal(fechaISO) {
  const fecha = new Date(fechaISO)
  // Convertir a la zona horaria configurada
  const opciones = { timeZone: ZONA_HORARIA }
  const partes = new Intl.DateTimeFormat('es-ES', {
    ...opciones,
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hour12: false
  }).formatToParts(fecha)

  const get = (type) => partes.find(p => p.type === type)?.value
  return {
    dia: parseInt(get('day')),
    mes: parseInt(get('month')) - 1,
    hora: `${get('hour')}:${get('minute')}`,
    fechaTexto: `${parseInt(get('day'))} de ${MESES[parseInt(get('month')) - 1]}`
  }
}

function obtenerEstadio(venue) {
  if (!venue) return null
  const nombre = venue.name || venue
  return MAPA_ESTADIOS[nombre] || { estadio: nombre, ciudad: 'Por confirmar' }
}

function obtenerEstado(status) {
  return MAPA_ESTADO[status] || 'programado'
}

async function obtenerPartidosAPI() {
  console.log('Obteniendo partidos de football-data.org...')

  const respuesta = await fetch(`${API_BASE}/competitions/${COMPETICION}/matches`, {
    headers: { 'X-Auth-Token': API_KEY }
  })

  if (!respuesta.ok) {
    throw new Error(`Error de API: ${respuesta.status} ${respuesta.statusText}`)
  }

  const datos = await respuesta.json()
  return datos.matches || []
}

function transformarPartidos(partidos) {
  const porFecha = new Map()
  let sinEstadio = 0
  let sinTraduccion = new Set()

  for (const p of partidos) {
    const local = fechaLocal(p.utcDate)
    const fecha = local.fechaTexto

    if (!porFecha.has(fecha)) {
      porFecha.set(fecha, [])
    }

    const sedeAPI = obtenerEstadio(p.venue)
    // Si la API no tiene estadio, dejamos "Por confirmar"
    const estadio = sedeAPI?.estadio ?? 'Por confirmar'
    const ciudad = sedeAPI?.ciudad ?? 'Por confirmar'
    if (!sedeAPI) sinEstadio++

    const equipo1 = traducirEquipo(p.homeTeam?.name || p.homeTeam?.shortName)
    const equipo2 = traducirEquipo(p.awayTeam?.name || p.awayTeam?.shortName)

    // Detectar equipos sin traducción
    const nombre1 = p.homeTeam?.name || p.homeTeam?.shortName
    const nombre2 = p.awayTeam?.name || p.awayTeam?.shortName
    if (nombre1 && !TRADUCCION_EQUIPOS[nombre1] && nombre1 !== equipo1) sinTraduccion.add(nombre1)
    if (nombre2 && !TRADUCCION_EQUIPOS[nombre2] && nombre2 !== equipo2) sinTraduccion.add(nombre2)

    porFecha.get(fecha).push({
      fechaUTC: p.utcDate,
      hora: local.hora,
      equipo1,
      equipo2,
      estadio,
      ciudad,
      goles1: p.score?.fullTime?.home ?? null,
      goles2: p.score?.fullTime?.away ?? null,
      estado: obtenerEstado(p.status),
    })
  }

  // Ordenar jornadas cronológicamente y partidos por hora
  const jornadas = []
  for (const [fecha, listaPartidos] of porFecha) {
    listaPartidos.sort((a, b) => a.hora.localeCompare(b.hora))
    jornadas.push({ fecha, partidos: listaPartidos })
  }

  // Warnings
  if (sinEstadio > 0) {
    console.log(`  ⚠ ${sinEstadio} partidos sin estadio asignado en la API (se muestra "Por confirmar")`)
  }
  if (sinTraduccion.size > 0) {
    console.log(`  ⚠ Equipos sin traducción al español: ${[...sinTraduccion].join(', ')}`)
  }

  return jornadas
}

function generarTypescript(jornadas) {
  const partidosJSON = JSON.stringify(jornadas, null, 2)
    .replace(/"(\w+)":/g, '$1:')

  return `export interface Partido {
  fechaUTC: string
  hora: string
  equipo1: string
  equipo2: string
  estadio: string
  ciudad: string
  goles1: number | null
  goles2: number | null
  estado: 'programado' | 'en_juego' | 'finalizado'
}

export interface Jornada {
  fecha: string
  partidos: Partido[]
}

// Última actualización: ${new Date().toISOString()}
// Zona horaria: ${ZONA_HORARIA}
export const jornadas: Jornada[] = ${partidosJSON}
`
}

// ── Main ──
async function main() {
  if (!API_KEY) {
    console.log('⚠ No se encontró FOOTBALL_DATA_API_KEY')
    console.log('  Sin API key, los datos actuales se mantienen sin cambios.')
    console.log('  Para obtener una clave gratuita: https://www.football-data.org/client/register')
    console.log('  Luego: FOOTBALL_DATA_API_KEY=tu_clave npm run actualizar')
    process.exit(0)
  }

  try {
    const partidos = await obtenerPartidosAPI()

    if (partidos.length === 0) {
      console.log('La API no devolvió partidos. Los datos actuales se mantienen.')
      process.exit(0)
    }

    console.log(`Recibidos ${partidos.length} partidos de la API`)

    const jornadas = transformarPartidos(partidos)
    console.log(`Agrupados en ${jornadas.length} jornadas`)

    const contenido = generarTypescript(jornadas)
    writeFileSync(RUTA_PARTIDOS, contenido, 'utf-8')

    console.log(`✓ Archivo actualizado: src/data/partidos.ts`)
    console.log(`  ${partidos.length} partidos en ${jornadas.length} jornadas`)
    console.log(`  Horas en zona: ${ZONA_HORARIA}`)
  } catch (error) {
    console.error('Error al actualizar partidos:', error.message)
    console.log('Los datos actuales se mantienen sin cambios.')
    process.exit(1)
  }
}

main()
