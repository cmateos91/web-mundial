import { grupos } from './grupos'

// "México" → "mexico", "Corea del Sur" → "corea-del-sur"
export function slugificar(nombre: string): string {
  return nombre
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // quitar acentos
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')    // espacios y símbolos → guiones
    .replace(/^-|-$/g, '')           // quitar guiones al inicio/final
}

// Todos los equipos con su slug
const todosLosEquipos = grupos.flatMap(g => g.equipos)

// Lookup: slug → nombre original
export const equipoPorSlug = new Map(
  todosLosEquipos.map(e => [slugificar(e), e])
)

// Lookup: nombre → slug
export const slugPorEquipo = new Map(
  todosLosEquipos.map(e => [e, slugificar(e)])
)
