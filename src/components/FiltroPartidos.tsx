import { useState, useEffect, useMemo } from 'preact/hooks'
import type { Partido, Jornada } from '../data/partidos'
import { zonasPorPais } from '../data/paises'

interface Props {
  jornadas: Jornada[]
}

function obtenerPreferencia(): { pais: string | null, zona: string | null } {
  try {
    const pais = localStorage.getItem('pais')
    if (!pais) return { pais: null, zona: null }
    return { pais, zona: zonasPorPais.get(pais) ?? null }
  } catch { return { pais: null, zona: null } }
}

function convertirHora(fechaUTC: string, zona: string | null): string {
  if (!zona || !fechaUTC) return ''
  try {
    return new Date(fechaUTC).toLocaleTimeString('es-ES', {
      timeZone: zona, hour: '2-digit', minute: '2-digit', hour12: false
    })
  } catch { return '' }
}

function estiloFavorito(equipo: string, paisFavorito: string | null) {
  if (equipo !== paisFavorito) return {}
  return {
    borderLeft: '3px solid var(--color-verde)',
    paddingLeft: '0.4rem',
    fontWeight: 700,
  }
}

function Marcador({ partido }: { partido: Partido }) {
  if (partido.estado === 'finalizado') {
    return (
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
        backgroundColor: 'var(--color-superficie)',
        padding: '0.125rem 0.5rem', borderRadius: '0.375rem',
        fontSize: '0.875rem', fontWeight: 700,
      }}>
        {partido.goles1} - {partido.goles2}
      </span>
    )
  }
  if (partido.estado === 'en_juego') {
    return (
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
        backgroundColor: '#dc26261a', color: '#dc2626',
        padding: '0.125rem 0.5rem', borderRadius: '0.375rem',
        fontSize: '0.875rem', fontWeight: 700,
      }}>
        <span style={{
          width: '0.5rem', height: '0.5rem', borderRadius: '50%',
          backgroundColor: '#dc2626', animation: 'pulse 1.5s infinite',
        }} />
        {partido.goles1} - {partido.goles2}
      </span>
    )
  }
  return (
    <span style={{ fontSize: '0.75rem', color: 'var(--color-texto-secundario)' }}>vs</span>
  )
}

export default function FiltroPartidos({ jornadas }: Props) {
  const [filtro, setFiltro] = useState('')
  const { pais: paisFavorito, zona } = useMemo(() => obtenerPreferencia(), [])

  useEffect(() => {
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
    <div>
      <div style={{ position: 'relative', marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Filtrar por equipo, estadio o ciudad..."
          value={filtro}
          onInput={(e) => setFiltro(e.currentTarget.value)}
          style={{
            width: '100%', padding: '0.75rem 1rem', paddingLeft: '2.5rem',
            borderRadius: '0.75rem', border: '1px solid var(--color-borde)',
            backgroundColor: 'var(--color-tarjeta)', color: 'var(--color-texto)',
            fontSize: '0.875rem', outline: 'none',
          }}
        />
        <span style={{
          position: 'absolute', left: '0.75rem', top: '50%',
          transform: 'translateY(-50%)', color: 'var(--color-texto-secundario)',
          fontSize: '1rem', pointerEvents: 'none',
        }}>&#128269;</span>
      </div>

      <p style={{ fontSize: '0.75rem', color: 'var(--color-texto-secundario)', marginBottom: '1.5rem' }}>
        {filtro
          ? `${totalPartidos} ${totalPartidos === 1 ? 'partido encontrado' : 'partidos encontrados'}`
          : `${totalPartidos} partidos en ${jornadasFiltradas.length} jornadas`
        }
        {zona && <span> · Horas en tu zona horaria</span>}
      </p>

      {jornadasFiltradas.map(jornada => (
        <div key={jornada.fecha} style={{ marginBottom: '2rem' }}>
          <h2 style={{
            fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.75rem',
            paddingBottom: '0.5rem', borderBottom: '2px solid var(--color-verde)',
            display: 'inline-block',
          }}>
            {jornada.fecha}
          </h2>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '0.75rem',
          }}>
            {jornada.partidos.map((p, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'var(--color-tarjeta)',
                  border: `1px solid ${p.estado === 'en_juego' ? '#dc2626' : 'var(--color-borde)'}`,
                  borderRadius: '0.75rem', padding: '1rem',
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                }}
              >
                <span style={{
                  fontFamily: 'monospace', fontSize: '0.875rem',
                  color: 'var(--color-texto-secundario)', flexShrink: 0, width: '3rem',
                }}>
                  {zona ? convertirHora(p.fechaUTC, zona) || p.hora : p.hora}
                </span>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ fontWeight: 600, ...estiloFavorito(p.equipo1, paisFavorito) }}>{p.equipo1}</span>
                  <Marcador partido={p} />
                  <span style={{ fontWeight: 600, ...estiloFavorito(p.equipo2, paisFavorito) }}>{p.equipo2}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {jornadasFiltradas.length === 0 && (
        <p style={{ color: 'var(--color-texto-secundario)', fontSize: '0.875rem' }}>
          No se encontraron partidos con "{filtro}"
        </p>
      )}
    </div>
  )
}
