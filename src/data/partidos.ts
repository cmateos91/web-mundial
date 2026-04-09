export interface Partido {
  fechaUTC: string
  hora: string
  equipo1: string
  equipo2: string
  estadio: string
  ciudad: string
  goles1: number | null
  goles2: number | null
  estado: 'programado' | 'en_juego' | 'finalizado'
}

export interface Jornada {
  fecha: string
  partidos: Partido[]
}

// Última actualización: 2026-04-09T07:10:42.054Z
// Zona horaria: America/Mexico_City
export const jornadas: Jornada[] = [
  {
    fecha: "11 de junio",
    partidos: [
      {
        fechaUTC: "2026-06-11T19:00:00Z",
        hora: "13:00",
        equipo1: "México",
        equipo2: "Sudáfrica",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-12T02:00:00Z",
        hora: "20:00",
        equipo1: "Corea del Sur",
        equipo2: "Czechia",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    fecha: "12 de junio",
    partidos: [
      {
        fechaUTC: "2026-06-12T19:00:00Z",
        hora: "13:00",
        equipo1: "Canadá",
        equipo2: "Bosnia-Herzegovina",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-13T01:00:00Z",
        hora: "19:00",
        equipo1: "Estados Unidos",
        equipo2: "Paraguay",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    fecha: "13 de junio",
    partidos: [
      {
        fechaUTC: "2026-06-13T19:00:00Z",
        hora: "13:00",
        equipo1: "Qatar",
        equipo2: "Suiza",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-13T22:00:00Z",
        hora: "16:00",
        equipo1: "Brasil",
        equipo2: "Marruecos",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-14T01:00:00Z",
        hora: "19:00",
        equipo1: "Haití",
        equipo2: "Escocia",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-14T04:00:00Z",
        hora: "22:00",
        equipo1: "Australia",
        equipo2: "Turkey",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    fecha: "14 de junio",
    partidos: [
      {
        fechaUTC: "2026-06-14T17:00:00Z",
        hora: "11:00",
        equipo1: "Alemania",
        equipo2: "Curazao",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-14T20:00:00Z",
        hora: "14:00",
        equipo1: "Países Bajos",
        equipo2: "Japón",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-14T23:00:00Z",
        hora: "17:00",
        equipo1: "Costa de Marfil",
        equipo2: "Ecuador",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-15T02:00:00Z",
        hora: "20:00",
        equipo1: "Sweden",
        equipo2: "Túnez",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    fecha: "15 de junio",
    partidos: [
      {
        fechaUTC: "2026-06-15T16:00:00Z",
        hora: "10:00",
        equipo1: "España",
        equipo2: "Cabo Verde",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-15T19:00:00Z",
        hora: "13:00",
        equipo1: "Bélgica",
        equipo2: "Egipto",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-15T22:00:00Z",
        hora: "16:00",
        equipo1: "Arabia Saudita",
        equipo2: "Uruguay",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-16T01:00:00Z",
        hora: "19:00",
        equipo1: "Irán",
        equipo2: "Nueva Zelanda",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    fecha: "16 de junio",
    partidos: [
      {
        fechaUTC: "2026-06-16T19:00:00Z",
        hora: "13:00",
        equipo1: "Francia",
        equipo2: "Senegal",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-16T22:00:00Z",
        hora: "16:00",
        equipo1: "Iraq",
        equipo2: "Noruega",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-17T01:00:00Z",
        hora: "19:00",
        equipo1: "Argentina",
        equipo2: "Argelia",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-17T04:00:00Z",
        hora: "22:00",
        equipo1: "Austria",
        equipo2: "Jordania",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    fecha: "17 de junio",
    partidos: [
      {
        fechaUTC: "2026-06-17T17:00:00Z",
        hora: "11:00",
        equipo1: "Portugal",
        equipo2: "Congo DR",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-17T20:00:00Z",
        hora: "14:00",
        equipo1: "Inglaterra",
        equipo2: "Croacia",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-17T23:00:00Z",
        hora: "17:00",
        equipo1: "Ghana",
        equipo2: "Panamá",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-18T02:00:00Z",
        hora: "20:00",
        equipo1: "Uzbekistán",
        equipo2: "Colombia",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    fecha: "18 de junio",
    partidos: [
      {
        fechaUTC: "2026-06-18T16:00:00Z",
        hora: "10:00",
        equipo1: "Czechia",
        equipo2: "Sudáfrica",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-18T19:00:00Z",
        hora: "13:00",
        equipo1: "Suiza",
        equipo2: "Bosnia-Herzegovina",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-18T22:00:00Z",
        hora: "16:00",
        equipo1: "Canadá",
        equipo2: "Qatar",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-19T01:00:00Z",
        hora: "19:00",
        equipo1: "México",
        equipo2: "Corea del Sur",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    fecha: "19 de junio",
    partidos: [
      {
        fechaUTC: "2026-06-19T19:00:00Z",
        hora: "13:00",
        equipo1: "Estados Unidos",
        equipo2: "Australia",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-19T22:00:00Z",
        hora: "16:00",
        equipo1: "Escocia",
        equipo2: "Marruecos",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-20T00:30:00Z",
        hora: "18:30",
        equipo1: "Brasil",
        equipo2: "Haití",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-20T03:00:00Z",
        hora: "21:00",
        equipo1: "Turkey",
        equipo2: "Paraguay",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    fecha: "20 de junio",
    partidos: [
      {
        fechaUTC: "2026-06-20T17:00:00Z",
        hora: "11:00",
        equipo1: "Países Bajos",
        equipo2: "Sweden",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-20T20:00:00Z",
        hora: "14:00",
        equipo1: "Alemania",
        equipo2: "Costa de Marfil",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-21T00:00:00Z",
        hora: "18:00",
        equipo1: "Ecuador",
        equipo2: "Curazao",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-21T04:00:00Z",
        hora: "22:00",
        equipo1: "Túnez",
        equipo2: "Japón",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    fecha: "21 de junio",
    partidos: [
      {
        fechaUTC: "2026-06-21T16:00:00Z",
        hora: "10:00",
        equipo1: "España",
        equipo2: "Arabia Saudita",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-21T19:00:00Z",
        hora: "13:00",
        equipo1: "Bélgica",
        equipo2: "Irán",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-21T22:00:00Z",
        hora: "16:00",
        equipo1: "Uruguay",
        equipo2: "Cabo Verde",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-22T01:00:00Z",
        hora: "19:00",
        equipo1: "Nueva Zelanda",
        equipo2: "Egipto",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    fecha: "22 de junio",
    partidos: [
      {
        fechaUTC: "2026-06-22T17:00:00Z",
        hora: "11:00",
        equipo1: "Argentina",
        equipo2: "Austria",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-22T21:00:00Z",
        hora: "15:00",
        equipo1: "Francia",
        equipo2: "Iraq",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-23T00:00:00Z",
        hora: "18:00",
        equipo1: "Noruega",
        equipo2: "Senegal",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-23T03:00:00Z",
        hora: "21:00",
        equipo1: "Jordania",
        equipo2: "Argelia",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    fecha: "23 de junio",
    partidos: [
      {
        fechaUTC: "2026-06-23T17:00:00Z",
        hora: "11:00",
        equipo1: "Portugal",
        equipo2: "Uzbekistán",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-23T20:00:00Z",
        hora: "14:00",
        equipo1: "Inglaterra",
        equipo2: "Ghana",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-23T23:00:00Z",
        hora: "17:00",
        equipo1: "Panamá",
        equipo2: "Croacia",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-24T02:00:00Z",
        hora: "20:00",
        equipo1: "Colombia",
        equipo2: "Congo DR",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    fecha: "24 de junio",
    partidos: [
      {
        fechaUTC: "2026-06-24T19:00:00Z",
        hora: "13:00",
        equipo1: "Suiza",
        equipo2: "Canadá",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-24T19:00:00Z",
        hora: "13:00",
        equipo1: "Bosnia-Herzegovina",
        equipo2: "Qatar",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-24T22:00:00Z",
        hora: "16:00",
        equipo1: "Marruecos",
        equipo2: "Haití",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-24T22:00:00Z",
        hora: "16:00",
        equipo1: "Escocia",
        equipo2: "Brasil",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-25T01:00:00Z",
        hora: "19:00",
        equipo1: "Czechia",
        equipo2: "México",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-25T01:00:00Z",
        hora: "19:00",
        equipo1: "Sudáfrica",
        equipo2: "Corea del Sur",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    fecha: "25 de junio",
    partidos: [
      {
        fechaUTC: "2026-06-25T20:00:00Z",
        hora: "14:00",
        equipo1: "Ecuador",
        equipo2: "Alemania",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-25T20:00:00Z",
        hora: "14:00",
        equipo1: "Curazao",
        equipo2: "Costa de Marfil",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-25T23:00:00Z",
        hora: "17:00",
        equipo1: "Túnez",
        equipo2: "Países Bajos",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-25T23:00:00Z",
        hora: "17:00",
        equipo1: "Japón",
        equipo2: "Sweden",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-26T02:00:00Z",
        hora: "20:00",
        equipo1: "Turkey",
        equipo2: "Estados Unidos",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-26T02:00:00Z",
        hora: "20:00",
        equipo1: "Paraguay",
        equipo2: "Australia",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    fecha: "26 de junio",
    partidos: [
      {
        fechaUTC: "2026-06-26T19:00:00Z",
        hora: "13:00",
        equipo1: "Noruega",
        equipo2: "Francia",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-26T19:00:00Z",
        hora: "13:00",
        equipo1: "Senegal",
        equipo2: "Iraq",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-27T00:00:00Z",
        hora: "18:00",
        equipo1: "Uruguay",
        equipo2: "España",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-27T00:00:00Z",
        hora: "18:00",
        equipo1: "Cabo Verde",
        equipo2: "Arabia Saudita",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-27T03:00:00Z",
        hora: "21:00",
        equipo1: "Nueva Zelanda",
        equipo2: "Bélgica",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-27T03:00:00Z",
        hora: "21:00",
        equipo1: "Egipto",
        equipo2: "Irán",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    fecha: "27 de junio",
    partidos: [
      {
        fechaUTC: "2026-06-27T21:00:00Z",
        hora: "15:00",
        equipo1: "Panamá",
        equipo2: "Inglaterra",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-27T21:00:00Z",
        hora: "15:00",
        equipo1: "Croacia",
        equipo2: "Ghana",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-27T23:30:00Z",
        hora: "17:30",
        equipo1: "Colombia",
        equipo2: "Portugal",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-27T23:30:00Z",
        hora: "17:30",
        equipo1: "Congo DR",
        equipo2: "Uzbekistán",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-28T02:00:00Z",
        hora: "20:00",
        equipo1: "Jordania",
        equipo2: "Argentina",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        fechaUTC: "2026-06-28T02:00:00Z",
        hora: "20:00",
        equipo1: "Argelia",
        equipo2: "Austria",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  }
]
