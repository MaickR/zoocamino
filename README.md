# NTC Luxury Travels & Dreams

Sitio web oficial de la experiencia **Camino Francés VIP en Bicicleta 2026**.

Landing page de alto impacto orientada a conversión, diseñada para viajeros premium interesados en recorrer el Camino de Santiago en bicicleta con acompañamiento VIP.

---

## Visión General

| Detalle | Valor |
|---------|-------|
| **Marca** | NTC Luxury Travels & Dreams |
| **Programa** | Camino Francés VIP — León → Santiago de Compostela |
| **Temporada** | 4 – 12 septiembre 2026 |
| **Tipo de sitio** | Estático · Bilingüe (EN / ES) · Mobile-first |

## Idiomas

Selector de idioma integrado en la navegación:

- [`index.html`](index.html) — Inglés (por defecto)
- [`index-es.html`](index-es.html) — Español

## Stack Tecnológico

- **HTML5** semántico con accesibilidad (ARIA, roles)
- **CSS3** — Custom properties, Grid, Flexbox, `clamp()`, media queries mobile-first
- **JavaScript vanilla** — Sin frameworks ni dependencias externas

No requiere build tools ni instalación de paquetes.

## Funcionalidades

- Navegación fija adaptable (desktop / mobile hamburger)
- Hero editorial con tipografía premium y CTAs
- Secciones: programa, itinerario interactivo, galería, testimonios, FAQ
- Galería de experiencia en bicicleta con lightbox interactivo
- Galería principal de imágenes con lightbox y navegación por teclado
- Formulario de contacto → envío directo a WhatsApp con datos prellenados
- Botón flotante de WhatsApp con safe-area para dispositivos con notch
- Barra móvil sticky de acción rápida
- Animaciones de revelado al scroll (Intersection Observer)
- Diseño responsive mobile-first (breakpoints: 480, 640, 768, 900, 1024, 1100, 1200px)

## Estructura

```
zoocamino/
├── index.html          # Página principal (inglés)
├── index-es.html       # Página principal (español)
├── styles.css          # Hoja de estilos compartida
├── main.js             # Lógica e interacciones
├── README.md
└── img/                # Recursos multimedia
    ├── NTC-logo-bg.png
    ├── ntc-travel-*.png        # Galería de viajeros
    ├── ntc-travel-bike-*.png   # Galería de ciclistas
    ├── ntc-travel-experience-*.png
    └── ...
```

## Ejecución Local

```bash
git clone https://github.com/MaickR/zoocamino.git
cd zoocamino
```

Abre `index.html` en el navegador. No requiere servidor ni dependencias.

## Contacto

- **WhatsApp:** [+1 (408) 609-0027](https://wa.me/14086090027)
- **Email:** ntcusa@nicolastena.com

---

Desarrollado para NTC Luxury Travels & Dreams.
