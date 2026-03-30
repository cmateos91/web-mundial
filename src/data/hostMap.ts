export interface HostNode {
  ciudad: string
  pais: string
  codigo: string
  x: number
  y: number
}

export const hostNodes: HostNode[] = [
  { ciudad: 'Vancouver', pais: 'Canadá', codigo: 'VAN', x: 130, y: 110 },
  { ciudad: 'Seattle', pais: 'Estados Unidos', codigo: 'SEA', x: 165, y: 150 },
  { ciudad: 'Santa Clara', pais: 'Estados Unidos', codigo: 'SCL', x: 175, y: 245 },
  { ciudad: 'Inglewood', pais: 'Estados Unidos', codigo: 'LAX', x: 170, y: 325 },
  { ciudad: 'Guadalajara', pais: 'México', codigo: 'GDL', x: 215, y: 410 },
  { ciudad: 'Monterrey', pais: 'México', codigo: 'MTY', x: 315, y: 390 },
  { ciudad: 'Ciudad de México', pais: 'México', codigo: 'CDMX', x: 260, y: 455 },
  { ciudad: 'Arlington', pais: 'Estados Unidos', codigo: 'DAL', x: 395, y: 355 },
  { ciudad: 'Houston', pais: 'Estados Unidos', codigo: 'HOU', x: 445, y: 392 },
  { ciudad: 'Kansas City', pais: 'Estados Unidos', codigo: 'KCM', x: 470, y: 290 },
  { ciudad: 'Atlanta', pais: 'Estados Unidos', codigo: 'ATL', x: 610, y: 325 },
  { ciudad: 'Miami Gardens', pais: 'Estados Unidos', codigo: 'MIA', x: 695, y: 455 },
  { ciudad: 'Toronto', pais: 'Canadá', codigo: 'TOR', x: 655, y: 175 },
  { ciudad: 'Foxborough', pais: 'Estados Unidos', codigo: 'FOX', x: 760, y: 120 },
  { ciudad: 'Filadelfia', pais: 'Estados Unidos', codigo: 'PHL', x: 725, y: 175 },
  { ciudad: 'East Rutherford', pais: 'Estados Unidos', codigo: 'NYC', x: 745, y: 155 },
]

export const hostConnections: Array<[string, string]> = [
  ['Vancouver', 'Seattle'],
  ['Seattle', 'Santa Clara'],
  ['Santa Clara', 'Inglewood'],
  ['Inglewood', 'Guadalajara'],
  ['Guadalajara', 'Ciudad de México'],
  ['Guadalajara', 'Monterrey'],
  ['Monterrey', 'Arlington'],
  ['Arlington', 'Houston'],
  ['Arlington', 'Kansas City'],
  ['Kansas City', 'Toronto'],
  ['Toronto', 'Foxborough'],
  ['Toronto', 'East Rutherford'],
  ['East Rutherford', 'Filadelfia'],
  ['Filadelfia', 'Atlanta'],
  ['Atlanta', 'Miami Gardens'],
  ['Kansas City', 'Atlanta'],
  ['Houston', 'Miami Gardens'],
]
