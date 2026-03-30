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

export const storyVisuals: StoryVisual[] = [
  {
    id: 'sedes-confirmadas',
    asset: '/art/news-sedes.svg',
    kicker: 'Cartografia del torneo',
    deck: 'Dieciseis ciudades conectadas en una sola ruta continental.'
  },
  {
    id: 'sorteo-mundial',
    asset: '/art/news-sorteo.svg',
    kicker: 'Cuadro inicial',
    deck: 'El sorteo ordena el caos y convierte el mapa competitivo en relato.'
  },
  {
    id: 'formato-nuevo',
    asset: '/art/news-format.svg',
    kicker: 'Escala 104',
    deck: 'La expansion cambia el ritmo, el volumen y el espectaculo del torneo.'
  }
]

export const storyVisualMap = new Map(storyVisuals.map((visual) => [visual.id, visual]))

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
