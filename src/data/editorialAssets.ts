export interface HostNationProfile {
  name: string
  slug: string
  flag: string
  asset: string
  kicker: string
  summary: string
  spotlight: string
}

export interface StoryVisual {
  id: string
  asset: string
  kicker: string
  deck: string
}

export interface StoryProfile extends StoryVisual {
  eyebrow: string
  standfirst: string
  stats: Array<{
    value: string
    label: string
  }>
  highlights: string[]
}

export const hostNationProfiles: HostNationProfile[] = [
  {
    name: 'México',
    slug: 'mexico',
    flag: 'MX',
    asset: '/art/host-mexico.svg',
    kicker: 'Tramo inaugural',
    summary: 'Azteca, Monterrey y Guadalajara ponen en marcha el torneo con un arranque cargado de historia y mucho ruido de grada.',
    spotlight: 'El Azteca vuelve a abrir un Mundial y solo con eso ya marca el tono del comienzo.'
  },
  {
    name: 'Estados Unidos',
    slug: 'estados-unidos',
    flag: 'US',
    asset: '/art/host-usa.svg',
    kicker: 'Escala industrial',
    summary: 'Once sedes y los aforos más grandes convierten el tramo estadounidense en la columna vertebral del calendario.',
    spotlight: 'MetLife baja la persiana del torneo y Arlington pone el techo de capacidad de toda la edición.'
  },
  {
    name: 'Canadá',
    slug: 'canada',
    flag: 'CA',
    asset: '/art/host-canada.svg',
    kicker: 'Apertura septentrional',
    summary: 'Toronto y Vancouver meten otro clima al mapa: dos sedes compactas, modernas y bastante reconocibles.',
    spotlight: 'La ruta canadiense le da al torneo un arranque por el norte con identidad propia.'
  }
]

export const hostNationProfileMap = new Map(hostNationProfiles.map((profile) => [profile.name, profile]))

export const storyProfiles: StoryProfile[] = [
  {
    id: 'sedes-confirmadas',
    asset: '/art/news-sedes.svg',
    kicker: 'Cartografia del torneo',
    deck: 'Dieciseis ciudades conectadas en una sola ruta continental.',
    eyebrow: 'Mapa anfitrion',
    standfirst: 'Aquí se entiende de verdad la escala del torneo: tres países, dieciséis ciudades y un mapa que obliga a mirar el Mundial como una travesía entera.',
    stats: [
      { value: '16', label: 'ciudades' },
      { value: '3', label: 'paises' },
      { value: '94.000', label: 'mayor aforo' },
    ],
    highlights: [
      'Estados Unidos concentra once sedes y buena parte del músculo logístico del campeonato.',
      'México se queda con el arranque más simbólico, con el Azteca otra vez en primera fila.',
      'Canadá aporta el tramo más corto, pero también uno de los más reconocibles del mapa.'
    ]
  },
  {
    id: 'sorteo-mundial',
    asset: '/art/news-sorteo.svg',
    kicker: 'Cuadro inicial',
    deck: 'El sorteo ordena el caos y convierte el mapa competitivo en relato.',
    eyebrow: 'Noche de sorteo',
    standfirst: 'El torneo deja de ser una idea general y pasa a tener forma: grupos cerrados, reencuentros con historia y primeros caminos hacia el cuadro final.',
    stats: [
      { value: '48', label: 'selecciones' },
      { value: '12', label: 'grupos' },
      { value: '05', label: 'dic' },
    ],
    highlights: [
      'Brasil y Marruecos dejan uno de los grupos que antes se subrayan en cualquier libreta.',
      'España y Uruguay vuelven a cruzarse en un marco que aprieta desde el primer día.',
      'Inglaterra y Croacia recuperan un duelo que ya trae memoria de Mundial.'
    ]
  },
  {
    id: 'formato-nuevo',
    asset: '/art/news-format.svg',
    kicker: 'Escala 104',
    deck: 'La expansion cambia el ritmo, el volumen y el espectaculo del torneo.',
    eyebrow: 'Nueva escala',
    standfirst: 'La expansión no cambia solo el número de partidos. Cambia el ritmo del torneo, la manera de seguirlo y también la puesta en escena de la final.',
    stats: [
      { value: '104', label: 'partidos' },
      { value: '32', label: 'ronda nueva' },
      { value: '19', label: 'julio' },
    ],
    highlights: [
      'La ronda de 32 abre más recorridos y alarga el calendario con bastante más tensión.',
      'El torneo suma tres mascotas para repartir el foco entre los anfitriones.',
      'La final estrena show de medio tiempo y se acerca más que nunca al molde del gran evento.'
    ]
  }
]

export const storyVisuals: StoryVisual[] = storyProfiles
export const storyVisualMap = new Map(storyVisuals.map((visual) => [visual.id, visual]))
export const storyProfileMap = new Map(storyProfiles.map((profile) => [profile.id, profile]))

export function getStoryVisual(id: string): StoryVisual {
  return (
    storyVisualMap.get(id) ?? {
      id,
      asset: '/art/news-format.svg',
      kicker: 'Edicion especial',
      deck: 'Lo importante del Mundial 2026.'
    }
  )
}

export function getStoryProfile(id: string): StoryProfile {
  return (
    storyProfileMap.get(id) ?? {
      id,
      asset: '/art/news-format.svg',
      kicker: 'Edicion especial',
      deck: 'Lo importante del Mundial 2026.',
      eyebrow: 'Mundial 2026',
      standfirst: 'Claves, nombres y fechas para seguir el torneo sin perder el hilo.',
      stats: [
        { value: '2026', label: 'torneo' },
        { value: '01', label: 'nota' },
        { value: 'Ed', label: 'especial' },
      ],
      highlights: [
        'El torneo se sigue de punta a punta, no solo en los días de partido.',
        'Cada noticia aporta fechas, nombres y contexto útil.',
        'La idea es que no se te escape nada importante del camino hasta la final.'
      ]
    }
  )
}
