
<div align="center">

# ZOCOCAMINO

### Experiencias VIP en Bicicleta · 2026

*Landing page premium para agencias de viaje — pura web, cero dependencias*

---

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Mobile First](https://img.shields.io/badge/Mobile--First-✓-success?style=flat-square)
![Sin dependencias](https://img.shields.io/badge/Dependencias-0-brightgreen?style=flat-square)

</div>

---

## Acerca del Proyecto

Zococamino es una operadora de cicloturismo con sede en España fundada por latinoamericanos. Ofrecemos programas VIP todo incluido para agencias de viaje de América Latina y España: guías expertos que pedalean contigo, carro de apoyo Mercedes siempre presente, alojamiento en hoteles al final de cada etapa, y un trato cercano de calidez latina en cada pedaleo.

Esta landing page es el canal comercial B2B hacia agencias. Está construida con **HTML5, CSS3 y JavaScript puros** — sin frameworks, sin librerías, sin Build steps. Un solo `git clone` y funciona.

---

## Programas 2026

| Ruta | Trayecto | Distancia | Salida |
|------|----------|-----------|--------|
| **Camino Francés VIP** | León → Santiago de Compostela | 340 km | 4 Sep 2026 |
| **Camino Portugués por la Costa** | Oporto → Santiago de Compostela | 280 km | TBD 2026 |
| **Europa del Este en E-Bike** | Praga → Budapest | 800 km | TBD 2026 |

---

## Características Técnicas

### Rendimiento
- **Fuentes asíncronas** — `preload/onload` para Google Fonts, sin bloqueo de render
- **`will-change: transform`** en elementos animados para composición GPU
- **IntersectionObserver** con `threshold: 0.15` y `rootMargin: -80px` para animaciones eficientes
- **`scroll-behavior`** manejado vía JS con offset de navbar dinámico

### Diseño
- **Mobile-first CSS** — diseño base en columna única, expansión progresiva desde 640 px
- **CSS Custom Properties** — sistema completo de tokens (`--gold`, `--dark`, `--warm`, `--nav-height`, `--ease`)
- **Mapas SVG animados** — rutas trazadas con `stroke-dashoffset` y `pathLength="100"`, activadas por scroll
- **Paleta editorial oscura** — fondo `#0E0E0E`, dorado `#D4A843`, serif Playfair Display

### Componentes
- Navbar sticky con menú móvil hamburguesa y backdrop blur
- Hero con título cinemático y CTA anclado
- Sección "¿Por qué Zococamino?" con features grid responsivo
- Pestañas de programas con 3 paneles completos (precios, mapa SVG, detalle)
- Bloques de precio rediseñados con contexto comparativo, urgencia y garantía
- Sección FAQ con accordion CSS grid (`grid-template-rows: 0fr → 1fr`)
- Formulario de contacto con envío real via **FormSubmit.co** (fetch + estados)
- Botón flotante de WhatsApp con animación pulse y tooltip
- Barra sticky móvil con soporte para notch (iPhone) via `env(safe-area-inset-bottom)`
- Botón "Volver arriba" con aparición suave al scroll
- Accesibilidad: `focus-visible`, `aria-expanded`, `aria-label`, roles semánticos

---

## Estructura

```
zoocamino/
├── index.html      # Markup completo — 1 050 líneas
├── styles.css      # Estilos mobile-first — ~1 550 líneas
├── main.js         # Comportamiento — ~200 líneas (vanilla JS)
└── README.md
```

---

## Inicio Rápido

```bash
# Clonar el repositorio
git clone https://github.com/MaickR/zoocamino.git

# Abrir directamente en el navegador
cd zoocamino
start index.html          # Windows
open index.html           # macOS
xdg-open index.html       # Linux
```

No se necesita servidor, bundler ni `npm install`. El proyecto desplegado puede servirse desde cualquier hosting estático: **GitHub Pages, Netlify, Vercel, Cloudflare Pages**.

---

## Configuración del Formulario

El formulario usa [FormSubmit.co](https://formsubmit.co) — servicio gratuito, sin registro.

Los envíos llegan a `ntcusa@nicolastena.com`.

> **Primera vez:** FormSubmit enviará un correo de activación. Solo haz clic en el enlace para activar y los envíos funcionarán automáticamente.

Para cambiar el destinatario, editar esta línea en `index.html`:

```html
<form action="https://formsubmit.co/ajax/tu@email.com" method="POST">
```

---

## Variables de Diseño

Todas las decisiones visuales están centralizadas en `:root` dentro de `styles.css`:

```css
:root {
  --gold:             #D4A843;
  --dark:             #0E0E0E;
  --dark-2:           #111111;
  --dark-3:           #1A1A1A;
  --warm:             #F5F0E8;
  --accent-camino:    #D4A843;
  --accent-portugues: #2E7D6E;
  --accent-europa:    #5B4FCF;
  --nav-height:       60px;
  --ease:             cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## Tecnologías

| Rol | Tecnología |
|-----|------------|
| Markup | HTML5 semántico |
| Estilos | CSS3 · Custom Properties · Grid · Flexbox |
| Comportamiento | JavaScript ES2020 · `fetch` · IntersectionObserver |
| Tipografía | Bebas Neue · Playfair Display · DM Sans (Google Fonts) |
| Formulario | FormSubmit.co (sin backend propio) |
| Animaciones SVG | `stroke-dasharray` / `stroke-dashoffset` inline |

---

## Contacto

**Zococamino** · [info@zococamino.com](mailto:info@zococamino.com)  
WhatsApp: [+34 646 840 877](https://wa.me/34646840877)

---

<div align="center">

*Hecho con dedicación para llevar la calidez latina a cada etapa del Camino.*

</div>
