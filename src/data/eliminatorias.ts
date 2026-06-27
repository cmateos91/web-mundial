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

// Última actualización: 2026-06-27T02:09:56.263Z
export const eliminatorias: Ronda[] = [
  {
    nombre: "Dieciseisavos",
    partidos: [
      {
        equipo1: "Sudáfrica",
        equipo2: "Canadá",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Brasil",
        equipo2: "Japón",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Alemania",
        equipo2: "Por definir",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Países Bajos",
        equipo2: "Marruecos",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Por definir",
        equipo2: "Por definir",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Por definir",
        equipo2: "Por definir",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "México",
        equipo2: "Por definir",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Por definir",
        equipo2: "Por definir",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Por definir",
        equipo2: "Por definir",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Estados Unidos",
        equipo2: "Bosnia-Herzegovina",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Por definir",
        equipo2: "Por definir",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Por definir",
        equipo2: "Por definir",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Suiza",
        equipo2: "Por definir",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Australia",
        equipo2: "Por definir",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Argentina",
        equipo2: "Por definir",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Por definir",
        equipo2: "Por definir",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    nombre: "Octavos de final",
    partidos: [
      {
        equipo1: "Por definir",
        equipo2: "Por definir",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Por definir",
        equipo2: "Por definir",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Por definir",
        equipo2: "Por definir",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Por definir",
        equipo2: "Por definir",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Por definir",
        equipo2: "Por definir",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Por definir",
        equipo2: "Por definir",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Por definir",
        equipo2: "Por definir",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Por definir",
        equipo2: "Por definir",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    nombre: "Cuartos de final",
    partidos: [
      {
        equipo1: "Por definir",
        equipo2: "Por definir",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Por definir",
        equipo2: "Por definir",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Por definir",
        equipo2: "Por definir",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Por definir",
        equipo2: "Por definir",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    nombre: "Semifinales",
    partidos: [
      {
        equipo1: "Por definir",
        equipo2: "Por definir",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Por definir",
        equipo2: "Por definir",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    nombre: "Tercer puesto",
    partidos: [
      {
        equipo1: "Por definir",
        equipo2: "Por definir",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    nombre: "Final",
    partidos: [
      {
        equipo1: "Por definir",
        equipo2: "Por definir",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  }
]
