export interface Partido {
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

// Última actualización: 2026-03-26T22:59:29.784Z
// Zona horaria: America/Mexico_City
export const jornadas: Jornada[] = [
  {
    fecha: "11 de junio",
    partidos: [
      {
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
        hora: "20:00",
        equipo1: "Corea del Sur",
        equipo2: "Por definir",
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
        hora: "13:00",
        equipo1: "Canadá",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        hora: "19:00",
        equipo1: "Estados Unidos",
        equipo2: "Paraguay",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        hora: "22:00",
        equipo1: "Australia",
        equipo2: "Por definir",
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
        hora: "19:00",
        equipo1: "Haití",
        equipo2: "Escocia",
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
        hora: "20:00",
        equipo1: "Por definir",
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
        hora: "18:00",
        equipo1: "Por definir",
        equipo2: "Noruega",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
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
        hora: "11:00",
        equipo1: "Portugal",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        hora: "13:00",
        equipo1: "Inglaterra",
        equipo2: "Croacia",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
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
        hora: "10:00",
        equipo1: "Por definir",
        equipo2: "Sudáfrica",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        hora: "13:00",
        equipo1: "Suiza",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
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
        hora: "20:00",
        equipo1: "México",
        equipo2: "Corea del Sur",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        hora: "22:00",
        equipo1: "Por definir",
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
    fecha: "19 de junio",
    partidos: [
      {
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
        hora: "19:00",
        equipo1: "Brasil",
        equipo2: "Haití",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
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
    fecha: "20 de junio",
    partidos: [
      {
        hora: "11:00",
        equipo1: "Países Bajos",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
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
        hora: "18:00",
        equipo1: "Ecuador",
        equipo2: "Curazao",
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
        hora: "15:00",
        equipo1: "Francia",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
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
        hora: "19:00",
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
        hora: "20:00",
        equipo1: "Colombia",
        equipo2: "Por definir",
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
        hora: "13:00",
        equipo1: "Por definir",
        equipo2: "Qatar",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
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
        hora: "19:00",
        equipo1: "Por definir",
        equipo2: "México",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
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
        hora: "17:00",
        equipo1: "Japón",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        hora: "20:00",
        equipo1: "Por definir",
        equipo2: "Estados Unidos",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
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
        hora: "13:00",
        equipo1: "Senegal",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
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
        hora: "17:30",
        equipo1: "Por definir",
        equipo2: "Uzbekistán",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
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
  },
  {
    fecha: "28 de junio",
    partidos: [
      {
        hora: "13:00",
        equipo1: "Por definir",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    fecha: "29 de junio",
    partidos: [
      {
        hora: "11:00",
        equipo1: "Por definir",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        hora: "14:30",
        equipo1: "Por definir",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        hora: "19:00",
        equipo1: "Por definir",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    fecha: "30 de junio",
    partidos: [
      {
        hora: "11:00",
        equipo1: "Por definir",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        hora: "15:00",
        equipo1: "Por definir",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        hora: "19:00",
        equipo1: "Por definir",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    fecha: "1 de julio",
    partidos: [
      {
        hora: "10:00",
        equipo1: "Por definir",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        hora: "14:00",
        equipo1: "Por definir",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        hora: "18:00",
        equipo1: "Por definir",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    fecha: "2 de julio",
    partidos: [
      {
        hora: "13:00",
        equipo1: "Por definir",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        hora: "17:00",
        equipo1: "Por definir",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        hora: "21:00",
        equipo1: "Por definir",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    fecha: "3 de julio",
    partidos: [
      {
        hora: "12:00",
        equipo1: "Por definir",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        hora: "16:00",
        equipo1: "Por definir",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        hora: "19:30",
        equipo1: "Por definir",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    fecha: "4 de julio",
    partidos: [
      {
        hora: "11:00",
        equipo1: "Por definir",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        hora: "15:00",
        equipo1: "Por definir",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    fecha: "5 de julio",
    partidos: [
      {
        hora: "14:00",
        equipo1: "Por definir",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        hora: "18:00",
        equipo1: "Por definir",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    fecha: "6 de julio",
    partidos: [
      {
        hora: "13:00",
        equipo1: "Por definir",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        hora: "18:00",
        equipo1: "Por definir",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    fecha: "7 de julio",
    partidos: [
      {
        hora: "10:00",
        equipo1: "Por definir",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        hora: "14:00",
        equipo1: "Por definir",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    fecha: "9 de julio",
    partidos: [
      {
        hora: "14:00",
        equipo1: "Por definir",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    fecha: "10 de julio",
    partidos: [
      {
        hora: "13:00",
        equipo1: "Por definir",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    fecha: "11 de julio",
    partidos: [
      {
        hora: "15:00",
        equipo1: "Por definir",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      },
      {
        hora: "19:00",
        equipo1: "Por definir",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    fecha: "14 de julio",
    partidos: [
      {
        hora: "13:00",
        equipo1: "Por definir",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    fecha: "15 de julio",
    partidos: [
      {
        hora: "13:00",
        equipo1: "Por definir",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    fecha: "18 de julio",
    partidos: [
      {
        hora: "15:00",
        equipo1: "Por definir",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  },
  {
    fecha: "19 de julio",
    partidos: [
      {
        hora: "13:00",
        equipo1: "Por definir",
        equipo2: "Por definir",
        estadio: "Por confirmar",
        ciudad: "Por confirmar",
        goles1: null,
        goles2: null,
        estado: "programado"
      }
    ]
  }
]
