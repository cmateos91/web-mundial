import { grupos } from './grupos'

// "México" → "mexico", "Corea del Sur" → "corea-del-sur"
export function slugificar(nombre: string): string {
  return nombre
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

// Lookup: nombre → slug
const todosLosEquipos = grupos.flatMap(g => g.equipos)
export const slugPorEquipo = new Map(
  todosLosEquipos.map(e => [e, slugificar(e)])
)
