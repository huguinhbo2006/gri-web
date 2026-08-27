# Breakpoint — SVG Mascota Lumière

## Archivo objetivo
`src/app/componentes/asistente/asistente.html`

## ViewBox y transform base
- `viewBox="750 150 1300 2200"`
- Transform del grupo raíz: `matrix(1,0,0,1,-750,-150)`
- Color base del personaje: `rgb(0,198,255)`

## Estado actual — Partes completadas

| # | Parte | ID SVG | Estado |
|---|---|---|---|
| 1 | Cabeza completa (forma gota/llama + ojos + cejas + boca) | `pet-head-group` | ✅ |
| 2 | Torso / cuerpo azul | `pet-torso` (dentro de `pet-torso-group`) | ✅ |
| 3 | Playera negra (cuerpo + mangas + ribetes) | `pet-shirt-group` | ✅ |

## Orden de capas en el SVG (de abajo hacia arriba)
1. `pet-torso-group` — cuerpo azul
2. `pet-shirt-group` — playera negra encima del torso
3. `pet-head-group` — cabeza (va al final para quedar sobre todo)

## Pendiente — En este orden

1. **🩳 Shorts azul marino** — `pet-shorts-group`
   - Rango Y aprox: `1950` a `2280`
   - Color: `rgb(30,50,80)` con ribete más oscuro `rgb(20,35,60)`
   - Cubre la parte inferior del torso dejando pies expuestos

2. **💪 Brazo izquierdo** — `pet-arm-left`
   - Forma ovalada/redondeada azul a la izquierda del torso
   - Ya referenciado en animaciones GSAP del `.ts`

3. **💪 Brazo derecho** — `pet-arm-right`
   - Espejo del brazo izquierdo
   - Ya referenciado en animaciones GSAP del `.ts`

4. **🦶 Pies / piernas** — `pet-feet-group`
   - Dos formas redondeadas azules en la base
   - Rango Y aprox: `2260` a `2380`

## Siguiente paso inmediato
> Agregar `pet-shorts-group` después de `pet-shirt-group` y antes de `pet-head-group`

## Referencia visual
`C:\Users\LENOVO\Downloads\vector_ventas -solido_playera_Mesa de trabajo 1 copia (1).png`
