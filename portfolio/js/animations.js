/**
 * animations.js — Toutes les animations (Anime.js) du site.
 * Sobres, rapides, et neutralisées si l'utilisateur préfère moins de mouvement.
 */

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/* ---------- Scroll reveal ---------- */
function initScrollReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  if (prefersReducedMotion() || typeof anime === 'undefined') {
    items.forEach((el) => el.classList.add('reveal-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.classList.add('reveal-visible');
        anime({
          targets: el,
          translateY: [24, 0],
          opacity: [0, 1],
          duration: 700,
          delay: (i % 6) * 60,
          easing: 'easeOutCubic',
        });
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  items.forEach((el) => observer.observe(el));
}

/* ---------- Hero entrance timeline ---------- */
function initHeroEntrance() {
  const hero = document.querySelector('[data-hero-anim]');
  if (!hero) return;

  if (prefersReducedMotion() || typeof anime === 'undefined') {
    hero.querySelectorAll('[data-hero-item]').forEach((el) => { el.style.opacity = 1; el.style.transform = 'none'; });
    return;
  }

  anime.timeline({ easing: 'easeOutExpo' })
    .add({ targets: hero.querySelector('[data-hero-badge]'), opacity: [0, 1], translateY: [-10, 0], duration: 600 })
    .add({ targets: hero.querySelector('[data-hero-title]'), opacity: [0, 1], translateY: [20, 0], duration: 800 }, '-=350')
    .add({ targets: hero.querySelector('[data-hero-subtitle]'), opacity: [0, 1], translateY: [16, 0], duration: 700 }, '-=500')
    .add({ targets: hero.querySelector('[data-hero-ctas]'), opacity: [0, 1], translateY: [16, 0], duration: 700 }, '-=500')
    .add({ targets: hero.querySelector('[data-hero-visual]'), opacity: [0, 1], scale: [0.94, 1], duration: 900 }, '-=750');
}

/* ---------- Typed line in hero (mono "code" accent) ---------- */
function initTypedLine() {
  const el = document.querySelector('[data-typed]');
  if (!el) return;
  const text = el.getAttribute('data-typed-text') || el.textContent.trim();

  const render = () => {
    if (prefersReducedMotion() || typeof anime === 'undefined') {
      el.textContent = text;
      return;
    }
    el.textContent = '';
    const chars = text.split('');
    let i = 0;
    const interval = setInterval(() => {
      el.textContent += chars[i];
      i++;
      if (i >= chars.length) clearInterval(interval);
    }, 38);
  };
  render();
  document.addEventListener('langchange', () => {
    const newText = el.getAttribute('data-typed-text-refresh');
    if (newText) { el.setAttribute('data-typed-text', newText); }
  });
}

/* ---------- Stat counters ---------- */
function initStatCounters() {
  const statEls = document.querySelectorAll('[data-stat-value]');
  if (!statEls.length) return;

  const animateOne = (el) => {
    const raw = el.getAttribute('data-stat-value');
    const suffix = el.getAttribute('data-stat-suffix') || '';
    const numeric = parseInt(raw.replace(/[^\d]/g, ''), 10);
    if (isNaN(numeric)) return; // placeholders type "[XX]" restent tels quels

    if (prefersReducedMotion() || typeof anime === 'undefined') {
      el.textContent = raw + suffix;
      return;
    }
    const counter = { val: 0 };
    anime({
      targets: counter,
      val: numeric,
      round: 1,
      duration: 1400,
      easing: 'easeOutExpo',
      update: () => { el.textContent = String(counter.val) + suffix; },
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateOne(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statEls.forEach((el) => observer.observe(el));
}

/* ---------- Card hover micro-interaction (icon nudge) ---------- */
function initCardHovers() {
  if (prefersReducedMotion() || typeof anime === 'undefined') return;
  document.querySelectorAll('[data-hover-icon]').forEach((card) => {
    const icon = card.querySelector('[data-hover-icon-target]');
    if (!icon) return;
    card.addEventListener('mouseenter', () => {
      anime({ targets: icon, rotate: [0, 8], scale: [1, 1.08], duration: 350, easing: 'easeOutBack' });
    });
    card.addEventListener('mouseleave', () => {
      anime({ targets: icon, rotate: 0, scale: 1, duration: 350, easing: 'easeOutQuad' });
    });
  });
}

/* ---------- Custom Interactive Mouse Cursor (Desktop) ---------- */
function initCustomCursor() {
  if (prefersReducedMotion() || window.innerWidth < 1024 || !window.matchMedia('(hover: hover)').matches) return;

  let dot = document.querySelector('.cursor-dot');
  let follower = document.querySelector('.cursor-follower');

  if (!dot) {
    dot = document.createElement('div');
    dot.className = 'cursor-dot';
    document.body.appendChild(dot);
  }
  if (!follower) {
    follower = document.createElement('div');
    follower.className = 'cursor-follower';
    document.body.appendChild(follower);
  }

  let mouseX = -100, mouseY = -100;
  let dotX = -100, dotY = -100;
  let folX = -100, folY = -100;
  let isVisible = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isVisible) {
      isVisible = true;
      dot.style.opacity = '1';
      follower.style.opacity = '1';
    }
  });

  window.addEventListener('mouseleave', () => {
    isVisible = false;
    dot.style.opacity = '0';
    follower.style.opacity = '0';
  });

  window.addEventListener('mousedown', () => {
    dot.classList.add('is-down');
    follower.classList.add('is-down');
  });

  window.addEventListener('mouseup', () => {
    dot.classList.remove('is-down');
    follower.classList.remove('is-down');
  });

  const onEnter = () => {
    dot.classList.add('is-hover');
    follower.classList.add('is-hover');
  };

  const onLeave = () => {
    dot.classList.remove('is-hover');
    follower.classList.remove('is-hover');
  };

  const bindHover = () => {
    const targets = document.querySelectorAll('a, button, input, select, textarea, .lift, article, [role="button"], [data-cursor-hover], .marquee-item');
    targets.forEach((el) => {
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });
  };

  bindHover();
  document.addEventListener('renderDone', bindHover);
  setTimeout(bindHover, 600);
  setTimeout(bindHover, 1500);

  const loop = () => {
    dotX += (mouseX - dotX) * 0.45;
    dotY += (mouseY - dotY) * 0.45;
    dot.style.left = `${dotX}px`;
    dot.style.top = `${dotY}px`;

    folX += (mouseX - folX) * 0.16;
    folY += (mouseY - folY) * 0.16;
    follower.style.left = `${folX}px`;
    follower.style.top = `${folY}px`;

    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}

/* ---------- 3D Perspective Card Tilt on Mouse Move ---------- */
function initHeroCardTilt() {
  if (prefersReducedMotion() || window.innerWidth < 1024) return;
  const cards = document.querySelectorAll('.tilt-card');
  if (!cards.length) return;

  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;
      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initHeroEntrance();
  initTypedLine();
  initScrollReveal();
  initStatCounters();
  initCardHovers();
  initCustomCursor();
  initHeroCardTilt();
});
