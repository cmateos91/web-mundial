# Rediseño Editorial Mundial 2026

Fecha: 2026-03-30

## Dirección validada

- Estética: `editorial deportiva premium`
- Intensidad: `muy visual y claramente espectacular`
- Recurso inmersivo: geografía viva del torneo con una pieza atmosférica y reactiva basada en las ciudades sede

## Objetivo

Transformar todo el sitio para que se sienta como una edición especial del Mundial, no como una app informativa genérica.

## Decisiones de diseño

- Mantener la claridad de datos, pero presentarlos con jerarquía editorial.
- Reforzar la identidad mediante tipografía de alto contraste: display expresiva + sans condensada para navegación y datos.
- Usar una shell global reconocible: fondo atmosférico, navegación más refinada y continuidad entre rutas.
- Hacer que `home`, `sedes` y `eliminatorias` sean los puntos de mayor espectacularidad visual.
- Tratar `grupos`, `partidos` y `equipos` como páginas densas pero elegantes.
- Tratar `noticias` como sección de revista.

## Motion

- Continuidad entre rutas con View Transitions.
- Entradas por capas, desplazamientos suaves y microinteracciones precisas.
- Nada de scroll-jacking.
- Fallback fuerte con `prefers-reduced-motion`.

## Pieza inmersiva

- Un mapa/constelación estilizado de Norteamérica con nodos de ciudades sede.
- Líneas de conexión, halos, trazos y respuesta ligera al puntero.
- Uso principal en `home` y `sedes`, con presencia ambiental en el resto del sitio.

## Límites técnicos

- Priorizar CSS, Astro y SVG antes que WebGL.
- Mantener Preact solo en las islas que ya lo necesitan o donde tenga sentido real.
- Cuidar accesibilidad, contraste, responsive y rendimiento desde el inicio.
