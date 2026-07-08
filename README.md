# NTC Luxury Travels & Dreams

**Camino Francés VIP en Bicicleta · Temporada 2027**

Landing page estática, bilingüe y orientada a conversión para la experiencia premium **León → Santiago de Compostela**. Diseñada para viajeros que buscan un recorrido todo incluido con guías latinoamericanos, acompañamiento VIP y atención personalizada en cada etapa.

[![Repositorio](https://img.shields.io/badge/repo-GitHub-181717?style=flat-square&logo=github)](https://github.com/MaickR/zoocamino)
[![Stack](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JS-E8B84A?style=flat-square)](https://github.com/MaickR/zoocamino)
[![Idiomas](https://img.shields.io/badge/idiomas-EN%20%7C%20ES-2EAA5C?style=flat-square)](index.html)

---

## Resumen del programa

| | |
|---|---|
| **Marca** | NTC Luxury Travels & Dreams |
| **Ruta** | Camino Francés · Madrid → León → Santiago |
| **Salida** | **11 – 19 de junio de 2027** (9 días · 8 noches) |
| **Distancia** | 340 km · 6 etapas en bicicleta |
| **Formato** | All-inclusive · Grupos VIP · Guías latinoamericanos |
| **Sitio** | Estático · Mobile-first · Sin dependencias |

---

## Idiomas

Selector integrado en la barra de navegación:

| Archivo | Idioma | URL |
|---------|--------|-----|
| [`index.html`](index.html) | Inglés (predeterminado) | `/index.html` |
| [`index-es.html`](index-es.html) | Español | `/index-es.html` |

---

## Itinerario · D = Día del viaje

Cada día del programa está identificado como **D1–D9**, con fecha visible en el itinerario interactivo:

| Día | Fecha | Hito |
|-----|-------|------|
| D1 | 11 jun 2027 | Madrid · Llegada y bienvenida |
| D2 | 12 jun 2027 | Madrid → León (AVE) |
| D3 | 13 jun 2027 | León → Astorga · Etapa 1 |
| D4 | 14 jun 2027 | Astorga → Ponferrada · Etapa 2 |
| D5 | 15 jun 2027 | Ponferrada → O Cebreiro · Etapa reina |
| D6 | 16 jun 2027 | O Cebreiro → Portomarín · Etapa 4 |
| D7 | 17 jun 2027 | Portomarín → Melide · Etapa 5 |
| D8 | 18 jun 2027 | Melide → Santiago · Etapa final |
| D9 | 19 jun 2027 | Santiago · Día libre |

---

## Stack tecnológico

- **HTML5** semántico con roles ARIA y accesibilidad
- **CSS3** — custom properties, Grid, Flexbox, `clamp()`, animaciones y breakpoints mobile-first
- **JavaScript vanilla** — sin frameworks, bundlers ni dependencias npm

> Cero build step. Abre el HTML y listo.

---

## Funcionalidades

- Navegación fija responsive con menú hamburguesa
- Hero editorial con tipografía premium (Playfair Display, DM Sans, Bebas Neue)
- Programa detallado con precio, tags de salida e inclusión all-inclusive
- Mapa SVG interactivo de la ruta León → Santiago
- Itinerario día a día con etiquetas **D + fecha**
- Galerías con lightbox y navegación por teclado
- Testimonios, FAQ y sección de momentos del Camino
- Formulario de contacto con envío directo a WhatsApp (mensaje prellenado)
- Botón flotante de WhatsApp con safe-area para dispositivos con notch
- Barra sticky móvil de acción rápida (WhatsApp + email)
- Animaciones reveal al scroll (Intersection Observer)

**Breakpoints:** 480 · 640 · 768 · 900 · 1024 · 1100 · 1200 px

---

## Estructura del proyecto

```
zoocamino/
├── index.html          # Landing en inglés
├── index-es.html       # Landing en español
├── styles.css          # Estilos compartidos
├── main.js             # Interacciones y lightbox
├── README.md
└── img/                # Recursos multimedia
    ├── NTC-logo-bg.png
    ├── ntc-travel-*.png
    ├── ntc-travel-bike-*.png
    └── ntc-travel-experience-*.png
```

---

## Ejecución local

```bash
git clone https://github.com/MaickR/zoocamino.git
cd zoocamino
```

Abre `index.html` o `index-es.html` en cualquier navegador moderno. No requiere servidor ni instalación de paquetes.

---

## Despliegue

Sitio 100 % estático. Compatible con:

- GitHub Pages
- Netlify / Vercel
- Cualquier hosting de archivos estáticos o CDN

Publica la raíz del repositorio apuntando `index.html` como entrada principal.

---

## Contacto

| Canal | Enlace |
|-------|--------|
| **WhatsApp** | [+1 (408) 609-0027](https://wa.me/14086090027) |
| **Email** | [ntcusa@nicolastena.com](mailto:ntcusa@nicolastena.com) |

---

<p align="center">
  <strong>NTC Luxury Travels & Dreams</strong><br>
  <sub>Camino Francés VIP en Bicicleta · Junio 2027</sub>
</p>
