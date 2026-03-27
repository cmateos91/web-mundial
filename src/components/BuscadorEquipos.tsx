import { useState, useEffect } from 'preact/hooks'

interface Grupo {
  nombre: string
  equipos: string[]
}

interface Props {
  grupos: Grupo[]
  slugs: Record<string, string>
}

export default function BuscadorEquipos({ grupos, slugs }: Props) {
  const [busqueda, setBusqueda] = useState('')
  const [paisFavorito, setPaisFavorito] = useState<string | null>(null)

  useEffect(() => {
    try {
      const pais = localStorage.getItem('pais')
      if (pais) setPaisFavorito(pais)
    } catch {}
  }, [])

  const resultados = busqueda.length > 0
    ? grupos
        .map(grupo => ({
          ...grupo,
          equiposFiltrados: grupo.equipos.filter(e =>
            e.toLowerCase().includes(busqueda.toLowerCase())
          )
        }))
        .filter(g => g.equiposFiltrados.length > 0)
    : []

  return (
    <div>
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          placeholder="Escribe el nombre de una selección..."
          value={busqueda}
          onInput={(e) => setBusqueda(e.currentTarget.value)}
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            paddingLeft: '2.5rem',
            borderRadius: '0.75rem',
            border: '1px solid var(--color-borde)',
            backgroundColor: 'var(--color-tarjeta)',
            color: 'var(--color-texto)',
            fontSize: '0.875rem',
            outline: 'none',
          }}
        />
        <span style={{
          position: 'absolute',
          left: '0.75rem',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'var(--color-texto-secundario)',
          fontSize: '1rem',
          pointerEvents: 'none',
        }}>
          &#128269;
        </span>
      </div>

      {resultados.length > 0 && (
        <div style={{
          marginTop: '0.75rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '0.75rem',
        }}>
          {resultados.map(grupo => (
            <div
              key={grupo.nombre}
              style={{
                backgroundColor: 'var(--color-tarjeta)',
                border: '1px solid var(--color-borde)',
                borderRadius: '0.75rem',
                overflow: 'hidden',
              }}
            >
              <div style={{
                backgroundColor: 'var(--color-verde)',
                color: 'white',
                padding: '0.5rem 1rem',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                letterSpacing: '0.05em',
              }}>
                {grupo.nombre}
              </div>
              <ul style={{ padding: '0.5rem 0' }}>
                {grupo.equiposFiltrados.map(equipo => (
                  <li
                    key={equipo}
                    style={{
                      padding: '0.375rem 1rem',
                      fontSize: '0.875rem',
                      borderBottom: '1px solid var(--color-borde)',
                      ...(equipo === paisFavorito ? {
                        backgroundColor: 'color-mix(in srgb, var(--color-verde) 15%, transparent)',
                        fontWeight: 700,
                      } : {}),
                    }}
                  >
                    <a href={`/equipos/${slugs[equipo] || ''}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {equipo} <span style={{ fontSize: '0.7rem', color: 'var(--color-verde)' }}>→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {busqueda.length > 0 && resultados.length === 0 && (
        <p style={{
          marginTop: '0.75rem',
          color: 'var(--color-texto-secundario)',
          fontSize: '0.875rem',
        }}>
          No se encontraron equipos con "{busqueda}"
        </p>
      )}
    </div>
  )
}
