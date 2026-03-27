import { grupos } from './grupos'
import { jornadas } from './partidos'

export interface EstadisticaEquipo {
  equipo: string
  pj: number  // partidos jugados
  pg: number  // ganados
  pe: number  // empatados
  pp: number  // perdidos
  gf: number  // goles a favor
  gc: number  // goles en contra
  pts: number // puntos
}

// Mapa: equipo → nombre del grupo
const grupoPorEquipo = new Map<string, string>()
for (const grupo of grupos) {
  for (const equipo of grupo.equipos) {
    grupoPorEquipo.set(equipo, grupo.nombre)
  }
}

export function calcularClasificacion(): Map<string, EstadisticaEquipo[]> {
  // Inicializar estadísticas a 0 para todos los equipos
  const stats = new Map<string, EstadisticaEquipo>()
  for (const grupo of grupos) {
    for (const equipo of grupo.equipos) {
      stats.set(equipo, { equipo, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, pts: 0 })
    }
  }

  // Recorrer partidos finalizados
  for (const jornada of jornadas) {
    for (const p of jornada.partidos) {
      if (p.estado !== 'finalizado' || p.goles1 === null || p.goles2 === null) continue

      const e1 = stats.get(p.equipo1)
      const e2 = stats.get(p.equipo2)
      if (!e1 || !e2) continue

      // Solo contar partidos de fase de grupos (ambos equipos en el mismo grupo)
      if (grupoPorEquipo.get(p.equipo1) !== grupoPorEquipo.get(p.equipo2)) continue

      e1.pj++; e2.pj++
      e1.gf += p.goles1; e1.gc += p.goles2
      e2.gf += p.goles2; e2.gc += p.goles1

      if (p.goles1 > p.goles2) {
        e1.pg++; e1.pts += 3; e2.pp++
      } else if (p.goles1 < p.goles2) {
        e2.pg++; e2.pts += 3; e1.pp++
      } else {
        e1.pe++; e1.pts += 1; e2.pe++; e2.pts += 1
      }
    }
  }

  // Agrupar por grupo y ordenar
  const resultado = new Map<string, EstadisticaEquipo[]>()
  for (const grupo of grupos) {
    const equipos = grupo.equipos
      .map(e => stats.get(e)!)
      .sort((a, b) => {
        // 1. Puntos
        if (b.pts !== a.pts) return b.pts - a.pts
        // 2. Diferencia de goles
        const difA = a.gf - a.gc
        const difB = b.gf - b.gc
        if (difB !== difA) return difB - difA
        // 3. Goles a favor
        return b.gf - a.gf
      })
    resultado.set(grupo.nombre, equipos)
  }

  return resultado
}

// Lookup rápido: equipo → su grupo
export { grupoPorEquipo }
