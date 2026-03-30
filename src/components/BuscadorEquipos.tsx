import { useState, useEffect, useMemo } from 'preact/hooks'

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

  const resultados = useMemo(() => {
    if (busqueda.length === 0) return []
    const texto = busqueda.toLowerCase()
    return grupos
      .map(grupo => ({
        ...grupo,
        equiposFiltrados: grupo.equipos.filter(e => !!slugs[e] && e.toLowerCase().includes(texto))
      }))
      .filter(g => g.equiposFiltrados.length > 0)
  }, [busqueda, grupos])

  return (
    <div class="editorial-stack">
      <div class="editorial-input-shell">
        <input
          type="text"
          placeholder="Escribe el nombre de una selección..."
          value={busqueda}
          onInput={(e) => setBusqueda(e.currentTarget.value)}
          class="editorial-input"
        />
        <span class="editorial-input-icon">&#128269;</span>
      </div>

      {resultados.length > 0 && (
        <div class="search-results-grid">
          {resultados.map(grupo => (
            <div
              key={grupo.nombre}
              class="search-group-card tarjeta"
            >
              <div class="search-group-header">
                {grupo.nombre}
                <span>{grupo.equiposFiltrados.length}</span>
              </div>
              <ul class="search-group-list">
                {grupo.equiposFiltrados.map(equipo => (
                  <li key={equipo} class="search-group-item">
                    <a href={`/equipos/${slugs[equipo] || ''}`} class="search-group-link">
                      <span class={equipo === paisFavorito ? 'equipo-favorito' : ''}>{equipo}</span>
                      <span aria-hidden="true">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {busqueda.length > 0 && resultados.length === 0 && (
        <p class="empty-state">
          No se encontraron equipos con "{busqueda}"
        </p>
      )}
    </div>
  )
}
