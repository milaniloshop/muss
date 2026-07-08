/**
 * Milan Hype CoreFit — Premium UI interactions
 */
(function () {
  'use strict';

  function initHeaderScroll() {
    const header = document.querySelector('.site-header--lux');
    if (!header) return;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          header.classList.toggle('site-header--scrolled', window.scrollY > 24);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function initReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));
  }

  function initLazyImages() {
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
      if (img.complete) return;
      img.addEventListener('load', () => img.classList.add('loaded'), { once: true });
    });
  }

  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        const id = link.getAttribute('href');
        if (!id || id === '#') return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function initMobileNavA11y() {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-mobile');
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  function initFaqA11y() {
    document.querySelectorAll('.faq-question').forEach((btn, i) => {
      const item = btn.closest('.faq-item');
      const answer = item?.querySelector('.faq-answer');
      if (!answer) return;
      const aid = `faq-answer-${i}`;
      answer.id = aid;
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-controls', aid);
      btn.addEventListener('click', () => {
        const open = item.classList.contains('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initReveal();
    initLazyImages();
    initSmoothAnchors();
    initMobileNavA11y();
    initFaqA11y();
  });
})();
