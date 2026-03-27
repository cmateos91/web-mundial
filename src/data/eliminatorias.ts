export interface PartidoEliminatoria {
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

// Estructura del bracket del Mundial 2026
// 48 equipos → 32 clasificados → Dieciseisavos (16 partidos) → Octavos (8) → Cuartos (4) → Semis (2) → Final (1)
export const eliminatorias: Ronda[] = [
  {
    nombre: "Dieciseisavos",
    partidos: Array.from({ length: 16 }, () => ({
      equipo1: "Por definir", equipo2: "Por definir",
      goles1: null, goles2: null, estado: "programado" as const
    }))
  },
  {
    nombre: "Octavos de final",
    partidos: Array.from({ length: 8 }, () => ({
      equipo1: "Por definir", equipo2: "Por definir",
      goles1: null, goles2: null, estado: "programado" as const
    }))
  },
  {
    nombre: "Cuartos de final",
    partidos: Array.from({ length: 4 }, () => ({
      equipo1: "Por definir", equipo2: "Por definir",
      goles1: null, goles2: null, estado: "programado" as const
    }))
  },
  {
    nombre: "Semifinales",
    partidos: Array.from({ length: 2 }, () => ({
      equipo1: "Por definir", equipo2: "Por definir",
      goles1: null, goles2: null, estado: "programado" as const
    }))
  },
  {
    nombre: "Final",
    partidos: [{
      equipo1: "Por definir", equipo2: "Por definir",
      goles1: null, goles2: null, estado: "programado" as const
    }]
  }
]
