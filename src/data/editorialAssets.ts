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
    summary: 'Azteca, Monterrey y Guadalajara sostienen el comienzo emocional del torneo con una lectura más histórica y ritual.',
    spotlight: 'El Azteca firma una tercera Copa del Mundo y arrastra todo el peso simbólico del arranque.'
  },
  {
    name: 'Estados Unidos',
    slug: 'estados-unidos',
    flag: 'US',
    asset: '/art/host-usa.svg',
    kicker: 'Escala industrial',
    summary: 'Once sedes y los mayores aforos del torneo convierten el recorrido estadounidense en la espina dorsal del calendario.',
    spotlight: 'MetLife cierra el torneo y Arlington marca el techo de capacidad de toda la edición.'
  },
  {
    name: 'Canadá',
    slug: 'canada',
    flag: 'CA',
    asset: '/art/host-canada.svg',
    kicker: 'Apertura septentrional',
    summary: 'Toronto y Vancouver añaden una capa más limpia, fría y contemporánea al mapa completo del Mundial.',
    spotlight: 'La ruta canadiense equilibra el torneo con dos sedes compactas y una presencia visual muy reconocible.'
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
    standfirst: 'La pieza ordena la escala del torneo: tres paises, dieciseis ciudades y una geografia que convierte cada sede en capitulo del mismo relato.',
    stats: [
      { value: '16', label: 'ciudades' },
      { value: '3', label: 'paises' },
      { value: '94.000', label: 'mayor aforo' },
    ],
    highlights: [
      'Estados Unidos concentra once sedes y la mayor masa de aforo del campeonato.',
      'Mexico sostiene el arranque historico con el Azteca como gran pieza simbolica.',
      'Canada aporta el tramo mas limpio y septentrional del mapa competitivo.'
    ]
  },
  {
    id: 'sorteo-mundial',
    asset: '/art/news-sorteo.svg',
    kicker: 'Cuadro inicial',
    deck: 'El sorteo ordena el caos y convierte el mapa competitivo en relato.',
    eyebrow: 'Noche de sorteo',
    standfirst: 'El cuadro del torneo deja de ser abstraccion y empieza a producir tensiones concretas: grupos, reencuentros y primeros caminos hacia la fase final.',
    stats: [
      { value: '48', label: 'selecciones' },
      { value: '12', label: 'grupos' },
      { value: '05', label: 'dic' },
    ],
    highlights: [
      'Brasil y Marruecos firman uno de los cruces con mas magnetismo desde el arranque.',
      'España y Uruguay vuelven a compartir marco de maxima exigencia competitiva.',
      'Inglaterra y Croacia recuperan un duelo que ya carga memoria de Mundial.'
    ]
  },
  {
    id: 'formato-nuevo',
    asset: '/art/news-format.svg',
    kicker: 'Escala 104',
    deck: 'La expansion cambia el ritmo, el volumen y el espectaculo del torneo.',
    eyebrow: 'Nueva escala',
    standfirst: 'La expansion no es solo matematica. Cambia el tempo del torneo, la forma de narrarlo y el tipo de espectaculo que FIFA quiere construir alrededor de la final.',
    stats: [
      { value: '104', label: 'partidos' },
      { value: '32', label: 'ronda nueva' },
      { value: '19', label: 'julio' },
    ],
    highlights: [
      'La ronda de 32 abre mas recorridos y estira la tension competitiva del calendario.',
      'El torneo suma tres mascotas oficiales para repartir la identidad entre los anfitriones.',
      'La final incorpora por primera vez un halftime show de tono claramente blockbuster.'
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
      deck: 'Cobertura editorial del Mundial 2026.'
    }
  )
}

export function getStoryProfile(id: string): StoryProfile {
  return (
    storyProfileMap.get(id) ?? {
      id,
      asset: '/art/news-format.svg',
      kicker: 'Edicion especial',
      deck: 'Cobertura editorial del Mundial 2026.',
      eyebrow: 'Cobertura editorial',
      standfirst: 'Una lectura visual del Mundial 2026 con foco en escala, contexto y atmosfera.',
      stats: [
        { value: '2026', label: 'torneo' },
        { value: '01', label: 'pieza' },
        { value: 'Ed', label: 'especial' },
      ],
      highlights: [
        'La edicion se cuenta como evento continental, no solo como calendario.',
        'Cada pieza cruza narrativa, datos y direccion artistica.',
        'La cobertura busca leer el torneo con ritmo de revista deportiva.'
      ]
    }
  )
}
