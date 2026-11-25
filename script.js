/* 魔法禁书目录 · 学园都市档案
   只做三件事：滚动入场、鼠标聚光、交错延迟。无第三方依赖。 */

(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── 1. 滚动入场 ─────────────────────────────────────── */
  var revealEls = document.querySelectorAll('.reveal');

  function showAll() {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  if (reduceMotion || !('IntersectionObserver' in window)) {
    showAll();
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });

    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ── 2. 卡片交错入场 ─────────────────────────────────── */
  if (!reduceMotion) {
    document.querySelectorAll('.cards .card').forEach(function (card, i) {
      card.style.transitionDelay = (i * 90) + 'ms';
    });
  }

  /* ── 3. HERO 鼠标聚光 ────────────────────────────────── */
  var hero = document.querySelector('.hero');

  if (hero && !reduceMotion) {
    var frame = null;

    hero.addEventListener('pointermove', function (e) {
      if (frame) return;
      frame = window.requestAnimationFrame(function () {
        var rect = hero.getBoundingClientRect();
        hero.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
        hero.style.setProperty('--my', (e.clientY - rect.top) + 'px');
        frame = null;
      });
    }, { passive: true });
  }

  /* ── 4. 年份 ─────────────────────────────────────────── */
  var yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
