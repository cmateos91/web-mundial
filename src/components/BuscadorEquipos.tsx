import { useState } from 'preact/hooks'

interface Grupo {
  nombre: string
  equipos: string[]
}

interface Props {
  grupos: Grupo[]
}

  export default function BuscadorEquipos({ grupos }: Props) {
    const [busqueda, setBusqueda] = useState('')

    const resultados = busqueda.length > 0
     ? grupos.filter(grupo =>
        grupo.equipos.some(equipo =>
          equipo.toLowerCase().includes(busqueda.toLowerCase())
        )
     )
     : []

    return (
      <div>
        <input
          type="text"
          placeholder="Buscar equipo..."
          value={busqueda}
          onInput={(e) => setBusqueda(e.currentTarget.value)}
        />
        {resultados.map(grupo =>(
          <div>
            <p>{grupo.nombre}</p>
            <ul>
              {grupo.equipos
                .filter(e => e.toLowerCase().includes(busqueda.toLowerCase()))
                .map(equipo => <li>{equipo}</li>)
              }
            </ul>
          </div>
        ))}
      </div>
    )
  }