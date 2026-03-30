import { useState, useEffect } from 'preact/hooks'
import type { Partido, Jornada } from '../data/partidos'

interface Props {
  jornadas: Jornada[]
  zonas: Record<string, string>
}

function convertirHora(fechaUTC: string, zona: string | null): string {
  if (!zona || !fechaUTC) return ''
  try {
    return new Date(fechaUTC).toLocaleTimeString('es-ES', {
      timeZone: zona, hour: '2-digit', minute: '2-digit', hour12: false
    })
  } catch { return '' }
}

function NombreEquipo({ nombre, esFavorito }: { nombre: string, esFavorito: boolean }) {
  if (esFavorito) {
    return <span class="equipo-favorito" data-equipo={nombre}>{nombre}</span>
  }
  return <span data-equipo={nombre} style={{ fontWeight: 600 }}>{nombre}</span>
}

function Marcador({ partido }: { partido: Partido }) {
  if (partido.estado === 'finalizado') {
    return (
      <span class="score-badge">
        {partido.goles1} - {partido.goles2}
      </span>
    )
  }
  if (partido.estado === 'en_juego') {
    return (
      <span class="score-badge" style={{ borderColor: '#dc2626', color: '#dc2626', backgroundColor: '#dc26261a' }}>
        <span aria-hidden="true">●</span>
        {partido.goles1} - {partido.goles2}
      </span>
    )
  }
  return <span class="score-badge">vs</span>
}

export default function FiltroPartidos({ jornadas, zonas }: Props) {
  const [filtro, setFiltro] = useState('')
  const [paisFavorito, setPaisFavorito] = useState<string | null>(null)
  const [zona, setZona] = useState<string | null>(null)

  useEffect(() => {
    // Leer preferencia de país desde localStorage (solo en cliente)
    try {
      const pais = localStorage.getItem('pais')
      if (pais) {
        setPaisFavorito(pais)
        setZona(zonas[pais] ?? null)
      }
    } catch {}

    // Leer filtro de query params
    const params = new URLSearchParams(window.location.search)
    const equipo = params.get('equipo')
    const sede = params.get('sede')
    if (equipo) setFiltro(equipo)
    else if (sede) setFiltro(sede)
  }, [])

  const jornadasFiltradas = jornadas.map(j => ({
    ...j,
    partidos: j.partidos.filter(p => {
      if (!filtro) return true
      const texto = filtro.toLowerCase()
      return (
        p.equipo1.toLowerCase().includes(texto) ||
        p.equipo2.toLowerCase().includes(texto) ||
        p.estadio.toLowerCase().includes(texto) ||
        p.ciudad.toLowerCase().includes(texto)
      )
    })
  })).filter(j => j.partidos.length > 0)

  const totalPartidos = jornadasFiltradas.reduce((sum, j) => sum + j.partidos.length, 0)

  return (
    <div class="editorial-stack">
      <div class="editorial-input-shell">
        <input
          type="text"
          placeholder="Filtrar por equipo, estadio o ciudad..."
          value={filtro}
          onInput={(e) => setFiltro(e.currentTarget.value)}
          class="editorial-input"
        />
        <span class="editorial-input-icon">&#128269;</span>
      </div>

      <p class="fixture-filter__summary">
        {filtro
          ? `${totalPartidos} ${totalPartidos === 1 ? 'partido encontrado' : 'partidos encontrados'}`
          : `${totalPartidos} partidos en ${jornadasFiltradas.length} jornadas`
        }
        {zona && <span> · Horas en tu zona horaria</span>}
      </p>

      {jornadasFiltradas.map(jornada => (
        <section key={jornada.fecha} class="fixture-day">
          <h2 class="fixture-day__label">{jornada.fecha}</h2>
          <div class="fixture-day__matches">
            {jornada.partidos.map((p, i) => (
              <div
                key={i}
                class={`fixture-card tarjeta tarjeta-hover ${p.estado === 'en_juego' ? 'fixture-card--live' : ''}`}
              >
                <div class="fixture-card__meta">
                  <div>
                    <p class="fixture-time">{zona ? convertirHora(p.fechaUTC, zona) || p.hora : p.hora}</p>
                    <p class="match-meta">{p.estado === 'en_juego' ? 'En juego' : 'Programado'}</p>
                  </div>
                  <Marcador partido={p} />
                </div>

                <div class="fixture-card__row">
                  <div class="fixture-card__teams">
                    <NombreEquipo nombre={p.equipo1} esFavorito={p.equipo1 === paisFavorito} />
                    <span>·</span>
                    <NombreEquipo nombre={p.equipo2} esFavorito={p.equipo2 === paisFavorito} />
                  </div>
                </div>

                <p class="fixture-venue">
                  {p.estadio === 'Por confirmar'
                    ? 'Sede por confirmar'
                    : `${p.estadio}, ${p.ciudad}`}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}

      {jornadasFiltradas.length === 0 && (
        <p class="empty-state">
          No se encontraron partidos con "{filtro}"
        </p>
      )}
    </div>
  )
}
