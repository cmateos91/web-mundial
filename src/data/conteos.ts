import { jornadas } from './partidos'

// Pre-computar conteos para evitar loops repetidos en las páginas

export const partidosPorEquipo = new Map<string, number>()
export const partidosPorEstadio = new Map<string, number>()

for (const jornada of jornadas) {
  for (const p of jornada.partidos) {
    partidosPorEquipo.set(p.equipo1, (partidosPorEquipo.get(p.equipo1) ?? 0) + 1)
    partidosPorEquipo.set(p.equipo2, (partidosPorEquipo.get(p.equipo2) ?? 0) + 1)
    partidosPorEstadio.set(p.estadio, (partidosPorEstadio.get(p.estadio) ?? 0) + 1)
  }
}
