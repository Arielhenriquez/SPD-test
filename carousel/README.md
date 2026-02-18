# Carrusel (HTML + CSS + JS puro)

Carrusel/slider reutilizable sin librerías, sin bundlers ni frameworks. Pensado para uso en HTML estático y en WordPress (bloque Custom HTML + CSS/JS externos).

---

## Reutilizar el carrusel como componente en otras pantallas

En proyectos sin frameworks, el carrusel se reutiliza **incluyendo siempre los mismos CSS/JS** y **pegando el mismo bloque HTML** donde quieras que aparezca.

### 1. En cada página donde lo uses

En **cualquier** `.html` del proyecto:

1. **Incluir el componente** (una sola vez por página, en `<head>` o antes de `</body>`):

```html
<link rel="stylesheet" href="ruta/a/carousel.css">
<!-- ... resto de la página ... -->
<script src="ruta/a/carousel.js"></script>
```

2. **Pegar el HTML del carrusel** donde quieras (puedes tener varios en la misma página):

```html
<div class="c-carousel" data-carousel aria-label="Mi galería">
  <div class="c-carousel__viewport">
    <div class="c-carousel__track">
      <div class="c-carousel__slide">Contenido 1</div>
      <div class="c-carousel__slide">Contenido 2</div>
      <div class="c-carousel__slide">Contenido 3</div>
    </div>
  </div>
  <button class="c-carousel__btn c-carousel__btn--prev" type="button" aria-label="Anterior"></button>
  <button class="c-carousel__btn c-carousel__btn--next" type="button" aria-label="Siguiente"></button>
  <div class="c-carousel__dots" aria-label="Paginación"></div>
</div>
```

La **ruta** (`href` y `src`) depende de dónde esté la página respecto a la carpeta del carrusel:

| Ubicación de la página | Ruta típica al carrusel |
|------------------------|-------------------------|
| Misma carpeta que `carousel/` (ej. `proyecto/index.html`) | `carousel/carousel.css` y `carousel/carousel.js` |
| Dentro de una subcarpeta (ej. `proyecto/productos/index.html`) | `../carousel/carousel.css` y `../carousel/carousel.js` |
| Raíz del sitio y carrusel en `/assets/carousel/` | `assets/carousel/carousel.css` y `assets/carousel/carousel.js` |

### 2. Varias pantallas, mismo componente

- **Pantalla A** (`pagina-a.html`): incluyes `carousel.css` y `carousel.js`, pegas el bloque HTML (con tus slides).
- **Pantalla B** (`pagina-b.html`): mismo proceso, otro contenido dentro de los slides.
- **Varios carruseles en una sola pantalla**: repites el bloque HTML las veces que quieras; cada uno con `data-carousel` se inicializa solo y no choca con los demás.

No hace falta “registrar” el componente en ningún sitio: con incluir CSS + JS y poner el HTML, ya actúa como componente reutilizable.

### 3. Plantilla para copiar y pegar

Guarda este bloque como tu “componente carrusel” y solo cambia el contenido de cada `.c-carousel__slide` y las opciones `data-carousel-*`:

```html
<div class="c-carousel" data-carousel
     data-carousel-autoplay="false"
     data-carousel-interval="5000"
     data-carousel-loop="true"
     data-carousel-dots="true"
     data-carousel-breakpoints='{"0":1,"768":2,"1024":3}'
     aria-label="Descripción del carrusel">
  <div class="c-carousel__viewport">
    <div class="c-carousel__track">
      <div class="c-carousel__slide"><!-- slide 1 --></div>
      <div class="c-carousel__slide"><!-- slide 2 --></div>
      <div class="c-carousel__slide"><!-- slide 3 --></div>
    </div>
  </div>
  <button class="c-carousel__btn c-carousel__btn--prev" type="button" aria-label="Anterior"></button>
  <button class="c-carousel__btn c-carousel__btn--next" type="button" aria-label="Siguiente"></button>
  <div class="c-carousel__dots" aria-label="Paginación"></div>
</div>
```

### 4. Si añades el HTML del carrusel por JavaScript

Si inyectas el bloque del carrusel después de cargar la página (por ejemplo con `fetch` + `innerHTML` o con una plantilla), el script ya no lo verá por el auto-init al cargar. Tienes dos opciones:

- **Opción A**: Después de insertar el HTML, crear la instancia a mano:

```javascript
var container = document.querySelector('.c-carousel'); // o el contenedor que acabas de rellenar
if (container && window.Carousel) {
  new Carousel(container, { autoplay: false, loop: true, showDots: true });
}
```

- **Opción B**: Después de insertar el HTML, llamar a `Carousel.init()` para que el script vuelva a escanear la página y enganche todos los `[data-carousel]` que aún no tengan instancia:

```javascript
document.getElementById('contenedor-dinamico').innerHTML = htmlDelCarrusel;
Carousel.init();
```

---

## Uso en HTML (proyecto crudo)

1. Incluye los archivos en tu página:

```html
<link rel="stylesheet" href="carousel/carousel.css">
<!-- ... tu HTML del carrusel ... -->
<script src="carousel/carousel.js"></script>
```

2. Estructura HTML del carrusel (una por bloque):

```html
<div class="c-carousel" data-carousel aria-label="Descripción del carrusel">
  <div class="c-carousel__viewport">
    <div class="c-carousel__track">
      <div class="c-carousel__slide"><!-- contenido --></div>
      <div class="c-carousel__slide"><!-- contenido --></div>
      <!-- más slides -->
    </div>
  </div>
  <button class="c-carousel__btn c-carousel__btn--prev" type="button" aria-label="Anterior"></button>
  <button class="c-carousel__btn c-carousel__btn--next" type="button" aria-label="Siguiente"></button>
  <div class="c-carousel__dots" aria-label="Paginación"></div>
</div>
```

3. **Inicialización automática**: cualquier elemento con `data-carousel` se convierte en carrusel al cargar el script.

4. **Opciones por atributos** (todas opcionales):

| Atributo | Valores | Descripción |
|----------|---------|-------------|
| `data-carousel-autoplay` | `true` / `false` | Activa autoplay (por defecto: false). Se desactiva si el usuario tiene `prefers-reduced-motion: reduce`. |
| `data-carousel-interval` | número (ms) | Intervalo de autoplay (por defecto: 5000). |
| `data-carousel-pause-on-hover` | `true` / `false` | Pausar autoplay al pasar el ratón (por defecto: true). |
| `data-carousel-loop` | `true` / `false` | Navegación infinita (por defecto: true). |
| `data-carousel-dots` | `true` / `false` | Mostrar paginación con puntos (por defecto: true). |
| `data-carousel-breakpoints` | JSON | Breakpoints para slides visibles. Ejemplo: `{"0":1,"768":2,"1024":3}` (ancho mínimo en px → número de slides). |

5. **Inicialización manual** (opcional):

```javascript
var el = document.querySelector('.c-carousel');
var carousel = new Carousel(el, {
  autoplay: true,
  interval: 4000,
  pauseOnHover: true,
  loop: true,
  showDots: true,
  breakpoints: { 0: 1, 768: 2, 1024: 3 }
});
// carousel.next(); carousel.prev(); carousel.go(2); carousel.play(); carousel.pause(); carousel.destroy();
```

---

## Integración en WordPress (sin tocar el theme)

Objetivo: usar el carrusel en una página/post **sin modificar el theme, child theme ni `functions.php`**. Solo bloque Custom HTML y plugins para CSS/JS.

### 1. Pegar el HTML del carrusel

- Edita la página o entrada.
- Añade un bloque **“HTML personalizado”** (Custom HTML).
- Pega dentro el HTML completo del carrusel (desde `<div class="c-carousel" ...>` hasta el cierre `</div>` del contenedor con `.c-carousel__dots`).
- Ajusta el contenido de cada `.c-carousel__slide` (imágenes, texto, enlaces, etc.).

No incluyas `<link>` ni `<script>` dentro del bloque HTML: en WordPress suelen filtrarse. El CSS y el JS se cargan por separado (ver abajo).

### 2. Añadir el CSS

**Opción A – CSS adicional con alcance por página**

- En el personalizador: **Apariencia → Personalizar → CSS adicional** (o **Additional CSS**).
- Envuelve todo el CSS del carrusel en un selector que solo aplique en la página donde está el carrusel, para no afectar al resto del sitio:

```css
/* Solo en la página donde está el carrusel (cambia 123 por el ID de tu página) */
.page-id-123 .c-carousel { ... }
.page-id-123 .c-carousel__viewport { ... }
/* ... resto de reglas del carousel.css, todas con el prefijo .page-id-123 ... */
```

Para saber el ID: edita la página y mira la URL en el navegador, p. ej. `post=123` → el ID es 123.

**Opción B – Plugin “Code Snippets” o “Simple Custom CSS and JS”**

- Instala un plugin como **Code Snippets** o **Simple Custom CSS and JS**.
- Crea un snippet que cargue solo en la página deseada (si el plugin lo permite) o en “front-end”.
- Pega el contenido de `carousel.css`.
- Si no puedes limitar por página, el CSS del carrusel usa solo clases `.c-carousel__*`, por lo que no pisa estilos globales del theme.

### 3. Añadir el JavaScript

**Opción recomendada – Plugin “Simple Custom CSS and JS” o “WPCode”**

- Instala **Simple Custom CSS and JS** o **WPCode**.
- Añade un nuevo fragmento de **JavaScript**.
- Pega el contenido completo de `carousel.js`.
- Configura el snippet para que se cargue en “Front-end” y, si quieres, solo en la página donde está el carrusel (por URL o por ID de página, según lo que ofrezca el plugin).
- Guarda y activa el snippet.

Así el script se ejecuta en la página, detecta los elementos con `data-carousel` y los convierte en carruseles. No hace falta tocar `functions.php` ni el theme.

### 4. Si subes los archivos al servidor

Si en lugar de pegar el CSS/JS en un plugin prefieres cargar los archivos:

- Sube `carousel.css` y `carousel.js` a tu tema (por ejemplo una carpeta `assets/carousel/`) o a un plugin propio.
- Con un plugin como **Code Snippets** o **Insert Headers and Footers** puedes insertar en la página concreta algo como:

```html
<link rel="stylesheet" href="/ruta/a/carousel.css">
<script src="/ruta/a/carousel.js" defer></script>
```

Solo si el plugin permite inyectar HTML en el `<head>` o antes de `</body>`. En muchos casos es más sencillo pegar el JS (y el CSS) en un snippet como en los puntos 2 y 3.

### Resumen

- **HTML**: bloque “HTML personalizado” con la estructura del carrusel.
- **CSS**: “CSS adicional” (scoped con `.page-id-XXX`) o plugin (Code Snippets / Simple Custom CSS and JS).
- **JS**: plugin (Simple Custom CSS and JS / WPCode) con el código de `carousel.js`.
- No es necesario usar child theme ni editar `functions.php`; todo se hace con bloques y plugins.

---

## Funcionalidad

- **Navegación**: botones Anterior/Siguiente y puntos (paginación opcional).
- **Autoplay** opcional, con intervalo y pausa al hover configurables.
- **Loop** opcional (navegación infinita).
- **Swipe (touch)** en móvil y **arrastre con ratón** en desktop.
- **Responsive**: 1 slide por defecto; `breakpoints` para definir cuántos slides se ven por ancho (ej. 1 móvil, 2 tablet, 3 desktop).
- **Accesibilidad**: `aria-roledescription="carousel"`, `aria-label`, teclado (flechas izquierda/derecha cuando el carrusel tiene foco), y respeto a `prefers-reduced-motion` (sin autoplay si está activado).

---

## Archivos

- `carousel.css` – Estilos del carrusel (prefijo BEM `.c-carousel__*`).
- `carousel.js` – Lógica del carrusel e inicialización automática por `data-carousel`.
- `index.html` – Página de prueba con dos carruseles de ejemplo.
