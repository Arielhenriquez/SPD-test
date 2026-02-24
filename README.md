# SPD Contracting – Proyecto de prueba (HTML/CSS/JS)

Proyecto “crudo” sin frameworks ni bundlers. Navbar y Footer reutilizables inyectados por JS. Pensado para probar localmente y luego portar a WordPress.

---

## Cómo correr el proyecto

**Recomendado: VSCode Live Server**

1. Instala la extensión **Live Server** en VSCode/Cursor.
2. Abre la carpeta del proyecto.
3. Clic derecho en `src/pages/index.html` → **Open with Live Server**, o en la barra inferior pulsa **Go Live**.

Si abres los HTML con `file://`, el **fetch** de header/footer fallará por CORS. Es necesario un servidor local (Live Server, `npx serve`, etc.).

**Alternativa por terminal:**

```bash
npx serve src/pages -p 3000
```

Luego visita `http://localhost:3000/index.html` y `http://localhost:3000/projects.html`.

---

## Estructura de carpetas

```
src/
  pages/           # Páginas HTML (entry points)
    index.html
    projects.html
    project/       # Páginas de proyecto individual (slug.html)
  partials/        # Header y footer reutilizables (inyectados por JS)
    header.html
    footer.html
  assets/
    css/
      base.css, layout.css, components.css, navbar.css
      carousel.css, pages.css, project.css
    js/
      main.js        # Carga header/footer, Navbar.init, Carousel.init
      navbar.js      # Mega menu, dropdown, hamburguesa, teclado, Esc
      carousel.js    # Componente carrusel reutilizable
      projects-data.js
      project-page.js
    img/             # (opcional) Imágenes locales
```

El proyecto activo está en **`src/`**. Sirve desde `src/pages` (p. ej. Live Server sobre `src/pages` o `src`).

---

## Cómo añadir una nueva página

1. Crea `src/pages/mi-pagina.html`.
2. En `<head>` enlaza los mismos CSS (rutas `../assets/css/...`).
3. En el `<body>`:
   - `<div id="site-header-placeholder"></div>`
   - Tu contenido en `<main id="main-content">...</main>`
   - `<div id="site-footer-placeholder"></div>`
4. Antes de `</body>` carga los scripts en este orden:
   - `../assets/js/carousel.js` (si usas carrusel)
   - `../assets/js/navbar.js`
   - `../assets/js/main.js` con `data-partials-base="../partials/"`

`main.js` hará fetch de `header.html` y `footer.html`, los inyectará en los placeholders y luego ejecutará `Navbar.init()` y `Carousel.init()`.

---

## Cómo editar el mega menú (navbar)

- **HTML del menú:** `src/partials/header.html`
- **Estilos:** `src/assets/css/components.css` (clases `.nav__`, `.nav__dropdown`, `.nav__mega`, etc.)
- **Comportamiento:** `src/assets/js/navbar.js` (hover, click, móvil, cierre con click fuera y Esc)

En `header.html` encontrarás:

- **Projects (mega menu):** Columna izquierda con categorías (`.nav__mega-category` con `data-nav-panel="id"`). El panel derecho se rellena por JS desde `navbar.js` (objeto `projectsMenu`). Para añadir una categoría: nuevo `<button class="nav__mega-category" data-nav-panel="nuevo-id">` en `header.html` y la entrada correspondiente en `projectsMenu` en `navbar.js`.
- **Approach & Expertise (dropdown simple):** Lista de enlaces dentro de `#nav-dropdown-approach` en `.nav__dropdown-list`.

Los enlaces (href) puedes cambiarlos en el propio HTML del partial.

---

## Carrusel

El carrusel sigue siendo el componente en `src/assets/js/carousel.js` y `src/assets/css/carousel.css`. Se inicializa por:

- **Automático:** elementos con `data-carousel` (tras inyectar partials, `main.js` llama `Carousel.init()`).
- **Opciones por atributos:** `data-carousel-autoplay`, `data-carousel-interval`, `data-carousel-loop`, `data-carousel-dots`, `data-carousel-breakpoints` (JSON).

Estructura HTML del carrusel: ver `src/pages/projects.html` (Featured, Gallery, Related).

---

## Portar a WordPress

- Mantener componentes aislados (clases con prefijos: `.site-header`, `.nav__`, `.footer__`, `.c-carousel__`).
- En WordPress: header/footer se pueden cargar por theme o por plugin; el HTML de los partials sirve de referencia para bloques o plantillas.
- CSS/JS se pueden encolar por theme o plugin sin tocar estilos globales del sitio.
