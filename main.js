/* ==============================
   ZOCOCAMINO · main.js
   Vanilla JS — no dependencies
============================== */

document.addEventListener('DOMContentLoaded', () => {

  // ── Nav: compact on scroll ────────────────────────────
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  // ── Mobile hamburger ──────────────────────────────────
  const hamburger = document.getElementById('hamburger');

  const closeMenu = () => {
    navbar.classList.remove('mobile-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Abrir menú');
  };

  hamburger.addEventListener('click', () => {
    const isOpen = navbar.classList.toggle('mobile-open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    hamburger.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', e => {
    if (navbar.classList.contains('mobile-open') && !navbar.contains(e.target)) {
      closeMenu();
    }
  }, { passive: true });

  // ── Smooth scroll — accounts for fixed navbar height ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = navbar.offsetHeight + 16;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth'
      });
    });
  });

  // ── Program tabs ──────────────────────────────────────
  const tabBtns   = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('[role="tabpanel"]');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = 'panel-' + btn.dataset.tab;

      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const panel = document.getElementById(targetId);
      panel.classList.add('active');
      triggerSvgAnimation(panel);
    });
  });

  // ── SVG route animation ───────────────────────────────
  function triggerSvgAnimation(panel) {
    if (!panel) return;
    panel.querySelectorAll('.route-svg').forEach(svg => svg.classList.add('animated'));
  }

  // Fire when route SVG scrolls into view (incl. initial active panel)
  const routeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        triggerSvgAnimation(entry.target.closest('[role="tabpanel"]') || entry.target.parentElement);
        routeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.route-svg').forEach(svg => routeObserver.observe(svg));

  // ── Scroll reveal (IntersectionObserver) ─────────────
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -80px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ── FAQ accordion ─────────────────────────────────────
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
      btn.querySelector('.faq-icon').textContent = isOpen ? '×' : '+';
    });
  });

  // ── WhatsApp button visibility ────────────────────────
  const waBtn    = document.getElementById('whatsapp-float');
  const isMobile = () => window.innerWidth < 768;

  const updateWaBtn = () => {
    if (!waBtn) return;
    const show = isMobile() || window.scrollY > 300;
    waBtn.classList.toggle('visible', show);
  };

  window.addEventListener('scroll', updateWaBtn, { passive: true });
  window.addEventListener('resize', updateWaBtn, { passive: true });
  // Desktop: auto-show after 3 s
  setTimeout(() => { if (waBtn && !isMobile()) waBtn.classList.add('visible'); }, 3000);
  updateWaBtn();

  // ── Sticky mobile CTA bar ─────────────────────────────
  const stickyBar = document.getElementById('sticky-mobile-bar');
  window.addEventListener('scroll', () => {
    if (!stickyBar) return;
    stickyBar.classList.toggle('visible', window.scrollY > 200);
  }, { passive: true });

  // ── Contact form (FormSubmit.co → ntcusa@nicolastena.com) ───
  const contactForm = document.getElementById('contactForm');
  const submitBtn   = document.getElementById('submitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', async e => {
      e.preventDefault();
      submitBtn.textContent = '⏳ Enviando solicitud…';
      submitBtn.disabled = true;

      try {
        const res = await fetch(contactForm.action, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: { Accept: 'application/json' }
        });
        const data = await res.json();

        if (res.ok && data.success === 'true') {
          submitBtn.textContent = '✅ Recibido. Te contactamos en menos de 24 horas.';
          submitBtn.style.background = '#2EAA5C';
          contactForm.reset();
          setTimeout(() => {
            submitBtn.textContent = 'Enviar Solicitud →';
            submitBtn.disabled = false;
            submitBtn.style.background = '';
          }, 5500);
        } else {
          throw new Error('server-error');
        }
      } catch {
        submitBtn.textContent = '❌ Error. Escríbenos a ntcusa@nicolastena.com';
        submitBtn.style.background = '#cc3333';
        setTimeout(() => {
          submitBtn.textContent = 'Enviar Solicitud →';
          submitBtn.disabled = false;
          submitBtn.style.background = '';
        }, 5000);
      }
    });
  }

  // ── Gallery Lightbox ──────────────────────────────────
  const lightbox    = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCap = document.getElementById('lightbox-caption');
  const lbClose     = document.getElementById('lightbox-close');
  const lbPrev      = document.getElementById('lightbox-prev');
  const lbNext      = document.getElementById('lightbox-next');

  if (lightbox) {
    const items = Array.from(document.querySelectorAll('.gallery-item'));
    let currentIdx = 0;

    const openLightbox = (idx) => {
      currentIdx = idx;
      const img = items[idx].querySelector('img');
      const cap = items[idx].querySelector('.gallery-caption');
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxCap.textContent = cap ? cap.textContent : '';
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
      lightbox.focus();
    };

    const closeLightbox = () => {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
      lightboxImg.src = '';
    };

    const showPrev = () => { currentIdx = (currentIdx - 1 + items.length) % items.length; openLightbox(currentIdx); };
    const showNext = () => { currentIdx = (currentIdx + 1) % items.length; openLightbox(currentIdx); };

    items.forEach((item, idx) => item.addEventListener('click', () => openLightbox(idx)));
    lbClose.addEventListener('click', closeLightbox);
    lbPrev.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });
    lbNext.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    });
  }

}); // end DOMContentLoaded
