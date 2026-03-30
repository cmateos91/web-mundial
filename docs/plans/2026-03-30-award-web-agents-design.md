# Diseno: sistema de agentes para elevar webs hacia un nivel visual premium

Fecha: 2026-03-30

## Problema

`Web Mundial` esta intentando convertirse en una experiencia digital mucho mas memorable y aspiracional, pero su base actual prioriza utilidad y orden por encima de direccion artistica, narrativa visual, motion y superficie.

## Objetivo

Crear un equipo de agentes reutilizable para:

- auditar una web existente,
- proponer una direccion visual fuerte,
- rediseñar o adaptar paginas concretas,
- ejecutar mejoras visuales sin perder accesibilidad, rendimiento ni coherencia tecnica.

## Suposiciones

- El equipo se orienta primero a este repo (`Astro + Tailwind 4 + Preact`).
- Debe servir tanto para crear paginas nuevas como para transformar paginas ya existentes.
- El estilo buscado es mas "award-worthy", no simplemente "moderno".

## Principios operativos

- Toda propuesta arranca desde una idea visual madre.
- La creatividad no puede romper usabilidad, SEO, responsive ni accesibilidad.
- Cada efecto debe justificar su impacto narrativo.
- Se priorizan pocos momentos memorables muy bien ejecutados.
- El sistema debe encajar con islas Astro/Preact, `astro:transitions` y assets optimizados.

## Topologia del equipo

### 1. Visual Experience Director

Define la direccion artistica, el tono, las referencias y el nivel de ambicion visual. Si no hay concepto fuerte, detiene la ejecucion y propone rutas.

### 2. Narrative Layout Architect

Convierte contenido y componentes en una secuencia con ritmo, jerarquia y momentos de tension. Su trabajo es evitar paginas que solo sean "pilas de bloques".

### 3. Typography and Surface Director

Construye identidad visual desde fuentes, escala, densidad, color, textura, bordes, sombras y atmosfera.

### 4. Motion Choreographer

Disena entradas, transiciones, scroll, hover y estados de interfaz. Se centra en continuidad, legibilidad y percepcion de calidad.

### 5. Immersive Experience Engineer

Decide cuando conviene usar canvas, WebGL, mapas, particulas o fondos reactivos, y como degradarlos sin romper la experiencia.

### 6. Performance and Accessibility Guardian

Marca limites tecnicos y de inclusion. Revisa `CLS`, `LCP`, semantica, contraste, responsive, `prefers-reduced-motion` y costes de renderizado.

### 7. Astro Experience Integrator

Traduce las decisiones creativas a implementaciones reales en Astro, Tailwind y Preact, con el minimo de hidratacion y la mayor estabilidad posible.

### 8. Awards Critic

Evalua el resultado con un criterio externo inspirado en Awwwards: diseño, usabilidad, creatividad, contenido y calidad de implementacion.

## Orquestacion recomendada

### Flujo base

1. `Visual Experience Director`
2. `Narrative Layout Architect`
3. `Typography and Surface Director`
4. `Motion Choreographer`
5. `Performance and Accessibility Guardian`
6. `Astro Experience Integrator`
7. `Awards Critic`

### Cuando hay pieza inmersiva

Insertar `Immersive Experience Engineer` entre `Motion Choreographer` y `Performance and Accessibility Guardian`.

### Cuando solo queremos auditoria

1. `Visual Experience Director`
2. `Performance and Accessibility Guardian`
3. `Awards Critic`

## Entregables esperados por agente

- Direccion visual: 2-3 rutas con recomendacion clara.
- Arquitectura narrativa: orden de bloques, ritmo y jerarquia.
- Sistema tipografico/superficie: tokens y reglas visibles.
- Motion: mapa de interacciones y fallback.
- Inmersion: decision de uso/no uso con presupuestos tecnicos.
- Integracion Astro: plan de archivos, componentes e hidratacion.
- Critica final: hallazgos, riesgos y puntuacion cualitativa.

## Reglas de colaboracion

- Ningun agente reescribe el brief; lo concreta.
- Ningun agente impone efectos porque si.
- Si una propuesta rompe el rendimiento o la accesibilidad, se reformula.
- El equipo trabaja sobre paginas reales del repo, no sobre maquetas abstractas.
- Los agentes de implementacion deben asumir que no estan solos en el codebase y no deben revertir cambios ajenos.

## Modos de uso sugeridos

### Modo `lift`

Para subir mucho la calidad visual de una pagina existente sin rehacer todo el sitio.

### Modo `flagship`

Para diseñar una pagina protagonista con mas riesgo visual y al menos un recurso de firma.

### Modo `system`

Para redefinir tipografia, layout, motion y tokens de todo el sitio.

## Criterios de exito

- La web transmite una direccion visual reconocible en segundos.
- Hay continuidad visual entre rutas y estados.
- Existe al menos un momento memorable por pagina importante.
- El sitio sigue siendo rapido, legible y responsive.
- Las decisiones visuales se sienten deliberadas, no genericas.
