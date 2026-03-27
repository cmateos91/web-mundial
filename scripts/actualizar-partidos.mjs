/**
 * Script de actualización completa del Mundial 2026.
 * Obtiene datos de football-data.org y regenera:
 *   - src/data/partidos.ts (fase de grupos)
 *   - src/data/grupos.ts (equipos confirmados)
 *   - src/data/eliminatorias.ts (bracket de eliminación)
 *
 * Uso: FOOTBALL_DATA_API_KEY=tu_clave node scripts/actualizar-partidos.mjs
 */

import { writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const RUTA_PARTIDOS = resolve(__dirname, '../src/data/partidos.ts')
const RUTA_GRUPOS = resolve(__dirname, '../src/data/grupos.ts')
const RUTA_ELIMINATORIAS = resolve(__dirname, '../src/data/eliminatorias.ts')

const API_KEY = process.env.FOOTBALL_DATA_API_KEY
const API_BASE = 'https://api.football-data.org/v4'
const COMPETICION = 'WC'
const ZONA_HORARIA = 'America/Mexico_City'

// ── Traducción de equipos ──
const TRADUCCION_EQUIPOS = {
  'Mexico': 'México', 'South Korea': 'Corea del Sur', 'Korea Republic': 'Corea del Sur',
  'South Africa': 'Sudáfrica', 'United States': 'Estados Unidos', 'USA': 'Estados Unidos',
  'Canada': 'Canadá', 'Switzerland': 'Suiza', 'Brazil': 'Brasil', 'Morocco': 'Marruecos',
  'Haiti': 'Haití', 'Scotland': 'Escocia', 'Germany': 'Alemania',
  'Curaçao': 'Curazao', 'Curacao': 'Curazao', 'Netherlands': 'Países Bajos', 'Japan': 'Japón',
  'Ivory Coast': 'Costa de Marfil', "Côte d'Ivoire": 'Costa de Marfil',
  'Tunisia': 'Túnez', 'Spain': 'España', 'Cape Verde': 'Cabo Verde',
  'Cape Verde Islands': 'Cabo Verde', 'Belgium': 'Bélgica', 'Egypt': 'Egipto',
  'Saudi Arabia': 'Arabia Saudita', 'Iran': 'Irán', 'IR Iran': 'Irán',
  'New Zealand': 'Nueva Zelanda', 'France': 'Francia', 'Norway': 'Noruega',
  'Algeria': 'Argelia', 'Austria': 'Austria', 'Jordan': 'Jordania',
  'Portugal': 'Portugal', 'Colombia': 'Colombia', 'Uzbekistan': 'Uzbekistán',
  'England': 'Inglaterra', 'Croatia': 'Croacia', 'Panama': 'Panamá',
  'Ghana': 'Ghana', 'Senegal': 'Senegal', 'Paraguay': 'Paraguay',
  'Ecuador': 'Ecuador', 'Uruguay': 'Uruguay', 'Argentina': 'Argentina',
  'Qatar': 'Qatar', 'Australia': 'Australia',
}

// ── Mapa de estadios ──
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

// ── Mapa de estado ──
const MAPA_ESTADO = {
  'SCHEDULED': 'programado', 'TIMED': 'programado',
  'IN_PLAY': 'en_juego', 'PAUSED': 'en_juego', 'SUSPENDED': 'en_juego',
  'FINISHED': 'finalizado', 'AWARDED': 'finalizado',
  'POSTPONED': 'programado', 'CANCELLED': 'programado',
}

// ── Fases de la API → nombre de ronda ──
const MAPA_RONDAS = {
  'LAST_32': 'Dieciseisavos',
  'LAST_16': 'Octavos de final',
  'QUARTER_FINALS': 'Cuartos de final',
  'SEMI_FINALS': 'Semifinales',
  'THIRD_PLACE': 'Tercer puesto',
  'FINAL': 'Final',
}

const MESES = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
]

// ── Utilidades ──

function traducirEquipo(nombre) {
  if (!nombre) return 'Por definir'
  return TRADUCCION_EQUIPOS[nombre] || nombre
}

function fechaLocal(fechaISO) {
  const fecha = new Date(fechaISO)
  const partes = new Intl.DateTimeFormat('es-ES', {
    timeZone: ZONA_HORARIA,
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hour12: false
  }).formatToParts(fecha)
  const get = (type) => partes.find(p => p.type === type)?.value
  return {
    hora: `${get('hour')}:${get('minute')}`,
    fechaTexto: `${parseInt(get('day'))} de ${MESES[parseInt(get('month')) - 1]}`
  }
}

function obtenerEstadio(venue) {
  if (!venue) return null
  const nombre = venue.name || venue
  return MAPA_ESTADIOS[nombre] || { estadio: nombre, ciudad: 'Por confirmar' }
}

// ── Llamadas a la API ──

async function fetchAPI(endpoint) {
  const respuesta = await fetch(`${API_BASE}${endpoint}`, {
    headers: { 'X-Auth-Token': API_KEY }
  })
  if (!respuesta.ok) throw new Error(`API ${endpoint}: ${respuesta.status} ${respuesta.statusText}`)
  return respuesta.json()
}

// ── 1. PARTIDOS (fase de grupos) ──

function transformarPartidos(partidos) {
  const faseGrupos = partidos.filter(p => p.stage === 'GROUP_STAGE')
  const porFecha = new Map()
  let sinEstadio = 0
  const sinTraduccion = new Set()

  for (const p of faseGrupos) {
    const local = fechaLocal(p.utcDate)
    if (!porFecha.has(local.fechaTexto)) porFecha.set(local.fechaTexto, [])

    const sedeAPI = obtenerEstadio(p.venue)
    if (!sedeAPI) sinEstadio++

    const nombre1 = p.homeTeam?.name || p.homeTeam?.shortName
    const nombre2 = p.awayTeam?.name || p.awayTeam?.shortName
    const equipo1 = traducirEquipo(nombre1)
    const equipo2 = traducirEquipo(nombre2)
    if (nombre1 && !TRADUCCION_EQUIPOS[nombre1] && nombre1 !== equipo1) sinTraduccion.add(nombre1)
    if (nombre2 && !TRADUCCION_EQUIPOS[nombre2] && nombre2 !== equipo2) sinTraduccion.add(nombre2)

    porFecha.get(local.fechaTexto).push({
      fechaUTC: p.utcDate,
      hora: local.hora,
      equipo1, equipo2,
      estadio: sedeAPI?.estadio ?? 'Por confirmar',
      ciudad: sedeAPI?.ciudad ?? 'Por confirmar',
      goles1: p.score?.fullTime?.home ?? null,
      goles2: p.score?.fullTime?.away ?? null,
      estado: MAPA_ESTADO[p.status] || 'programado',
    })
  }

  const jornadas = []
  for (const [fecha, lista] of porFecha) {
    lista.sort((a, b) => a.hora.localeCompare(b.hora))
    jornadas.push({ fecha, partidos: lista })
  }

  if (sinEstadio > 0) console.log(`  ⚠ ${sinEstadio} partidos sin estadio asignado`)
  if (sinTraduccion.size > 0) console.log(`  ⚠ Sin traducción: ${[...sinTraduccion].join(', ')}`)

  return jornadas
}

function generarPartidosTS(jornadas) {
  const json = JSON.stringify(jornadas, null, 2).replace(/"(\w+)":/g, '$1:')
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
export const jornadas: Jornada[] = ${json}
`
}

// ── 2. GRUPOS (equipos confirmados) ──

function transformarGrupos(standings) {
  if (!standings?.length) return null

  const grupos = standings.map(s => ({
    nombre: s.group
      ? s.group.replace('GROUP_', 'Grupo ').replace('Group ', 'Grupo ')
      : s.stage,
    equipos: s.table.map(t => traducirEquipo(t.team?.name || t.team?.shortName))
  }))

  // Solo actualizar si hay datos reales (no todo "Por definir")
  const tieneEquiposReales = grupos.some(g =>
    g.equipos.some(e => e !== 'Por definir')
  )
  if (!tieneEquiposReales) return null

  return grupos
}

function generarGruposTS(grupos) {
  const json = JSON.stringify(grupos, null, 2).replace(/"(\w+)":/g, '$1:')
  return `// Última actualización: ${new Date().toISOString()}
export const grupos = ${json}
`
}

// ── 3. ELIMINATORIAS ──

function transformarEliminatorias(partidos) {
  const eliminacion = partidos.filter(p => p.stage !== 'GROUP_STAGE')
  if (eliminacion.length === 0) return null

  const porRonda = new Map()

  for (const p of eliminacion) {
    const nombreRonda = MAPA_RONDAS[p.stage] || p.stage
    if (!porRonda.has(nombreRonda)) porRonda.set(nombreRonda, [])

    porRonda.get(nombreRonda).push({
      equipo1: traducirEquipo(p.homeTeam?.name || p.homeTeam?.shortName),
      equipo2: traducirEquipo(p.awayTeam?.name || p.awayTeam?.shortName),
      goles1: p.score?.fullTime?.home ?? null,
      goles2: p.score?.fullTime?.away ?? null,
      estado: MAPA_ESTADO[p.status] || 'programado',
    })
  }

  // Ordenar rondas en el orden correcto del bracket
  const ordenRondas = ['Dieciseisavos', 'Octavos de final', 'Cuartos de final', 'Semifinales', 'Tercer puesto', 'Final']
  const rondas = []
  for (const nombre of ordenRondas) {
    if (porRonda.has(nombre)) {
      rondas.push({ nombre, partidos: porRonda.get(nombre) })
    }
  }
  // Añadir rondas no reconocidas al final
  for (const [nombre, partidos] of porRonda) {
    if (!ordenRondas.includes(nombre)) {
      rondas.push({ nombre, partidos })
    }
  }

  return rondas.length > 0 ? rondas : null
}

function generarEliminatoriasTS(rondas) {
  const json = JSON.stringify(rondas, null, 2).replace(/"(\w+)":/g, '$1:')
  return `export interface PartidoEliminatoria {
  equipo1: string
  equipo2: string
  goles1: number | null
  goles2: number | null
  estado: 'programado' | 'en_juego' | 'finalizado'
}

export interface Ronda {
  nombre: string
  partidos: PartidoEliminatoria[]
}

// Última actualización: ${new Date().toISOString()}
export const eliminatorias: Ronda[] = ${json}
`
}

// ── Main ──

async function main() {
  if (!API_KEY) {
    console.log('⚠ No se encontró FOOTBALL_DATA_API_KEY')
    console.log('  Sin API key, los datos actuales se mantienen sin cambios.')
    process.exit(0)
  }

  try {
    // 1. Obtener partidos
    console.log('Obteniendo partidos...')
    const datosPartidos = await fetchAPI(`/competitions/${COMPETICION}/matches`)
    const todosLosPartidos = datosPartidos.matches || []

    if (todosLosPartidos.length === 0) {
      console.log('La API no devolvió partidos. Sin cambios.')
      process.exit(0)
    }

    // Generar partidos.ts (fase de grupos)
    const jornadas = transformarPartidos(todosLosPartidos)
    const totalGrupos = jornadas.reduce((s, j) => s + j.partidos.length, 0)
    writeFileSync(RUTA_PARTIDOS, generarPartidosTS(jornadas), 'utf-8')
    console.log(`✓ partidos.ts: ${totalGrupos} partidos en ${jornadas.length} jornadas`)

    // Generar eliminatorias.ts (si hay partidos de eliminación)
    const rondas = transformarEliminatorias(todosLosPartidos)
    if (rondas) {
      const totalElim = rondas.reduce((s, r) => s + r.partidos.length, 0)
      writeFileSync(RUTA_ELIMINATORIAS, generarEliminatoriasTS(rondas), 'utf-8')
      console.log(`✓ eliminatorias.ts: ${totalElim} partidos en ${rondas.length} rondas`)
    } else {
      console.log('  ℹ Sin partidos de eliminación todavía')
    }

    // 2. Obtener standings (grupos)
    console.log('Obteniendo clasificación...')
    try {
      const datosStandings = await fetchAPI(`/competitions/${COMPETICION}/standings`)
      const grupos = transformarGrupos(datosStandings.standings)
      if (grupos) {
        writeFileSync(RUTA_GRUPOS, generarGruposTS(grupos), 'utf-8')
        console.log(`✓ grupos.ts: ${grupos.length} grupos actualizados`)
      } else {
        console.log('  ℹ Grupos sin cambios (sin datos nuevos en la API)')
      }
    } catch (e) {
      console.log(`  ⚠ No se pudieron obtener standings: ${e.message}`)
    }

    console.log(`\n✓ Actualización completada (${ZONA_HORARIA})`)
  } catch (error) {
    console.error('Error:', error.message)
    process.exit(1)
  }
}

main()
