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

// Última actualización: 2026-06-29T10:20:43.393Z
export const eliminatorias: Ronda[] = [
  {
    nombre: "Dieciseisavos",
    partidos: [
      {
        equipo1: "Sudáfrica",
        equipo2: "Canadá",
        goles1: 0,
        goles2: 1,
        estado: "finalizado"
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
        equipo2: "Paraguay",
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
        equipo1: "Costa de Marfil",
        equipo2: "Noruega",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Francia",
        equipo2: "Sweden",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "México",
        equipo2: "Ecuador",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Inglaterra",
        equipo2: "Congo DR",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Bélgica",
        equipo2: "Senegal",
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
        equipo1: "España",
        equipo2: "Austria",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Portugal",
        equipo2: "Croacia",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Suiza",
        equipo2: "Argelia",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Australia",
        equipo2: "Egipto",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Argentina",
        equipo2: "Cabo Verde",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        equipo1: "Colombia",
        equipo2: "Ghana",
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
        equipo1: "Canadá",
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
