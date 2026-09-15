# Micro-Framework CSS con Sass

Proyecto del Laboratorio N° 05 - Desarrollo de Aplicaciones

## Estructura de archivos

```
sass/
  ├── _variables.scss   → colores, tipografía, espaciados
  ├── _funciones.scss   → px-a-rem()
  ├── _mixins.scss      → tema-componente() + boton-base
  ├── _grilla.scss      → container, row, columnas y utilidades
  ├── _botones.scss     → generación automática con @each
  └── main.scss         → importa todo
css/
  └── main.css          → resultado de la compilación
index.html              → demo de uso
```

## Cómo compilar

```bash
sass sass/main.scss css/main.css
```

## Qué cumple

- Arquitectura modular con parciales + @import
- Función `px-a-rem()` usada en tamaños y márgenes
- Mixin `tema-componente` con @if + lightness() para contraste
- Mapa `$tema-colores` con 5 colores + @each para generar .btn-*
- Hover calculado con darken()
