// TaxRoots motion driver. SHARED CONTRACT — page agents must NOT edit.
// Smooth scroll (Lenis), reveal-on-enter, split words, count-up, header state, progress bar.
// Page-specific GSAP: import { gsap, ScrollTrigger } from '../scripts/gsap' inside a page <script>.
import Lenis from 'lenis';

const root = document.documentElement;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduce) root.classList.add('mo');

let lenis: Lenis | null = null;
if (!reduce) {
  lenis = new Lenis({ lerp: 0.11, smoothWheel: true });
  (window as any).__lenis = lenis;
  const raf = (t: number) => { lenis!.raf(t); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);
  // in-page anchors through Lenis
  document.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
    if (!a || a.getAttribute('href') === '#') return;
    const el = document.querySelector(a.getAttribute('href')!);
    if (el) { e.preventDefault(); lenis!.scrollTo(el as HTMLElement, { offset: -90 }); }
  });
}

// Split words (.split) — keeps text accessible via aria-label.
function splitWords(el: HTMLElement) {
  if (el.dataset.splitDone) return;
  el.dataset.splitDone = '1';
  let i = 0;
  const walk = (node: Node) => {
    for (const child of Array.from(node.childNodes)) {
      if (child.nodeType === 3) {
        const parts = (child.textContent || '').split(/(\s+)/);
        const frag = document.createDocumentFragment();
        for (const p of parts) {
          if (!p) continue;
          if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(' ')); continue; }
          const w = document.createElement('span'); w.className = 'w';
          const s = document.createElement('span'); s.textContent = p; s.style.setProperty('--i', String(i++));
          w.appendChild(s); frag.appendChild(w);
        }
        child.replaceWith(frag);
      } else if (child.nodeType === 1 && !(child as HTMLElement).matches('br')) {
        walk(child);
      }
    }
  };
  walk(el);
}
document.querySelectorAll<HTMLElement>('.split').forEach(splitWords);

// Stagger indices
document.querySelectorAll<HTMLElement>('.stg').forEach((p) =>
  Array.from(p.children).forEach((c, i) => (c as HTMLElement).style.setProperty('--i', String(i))));
document.querySelectorAll<HTMLElement>('[data-delay]').forEach((el) =>
  el.style.setProperty('--d', el.dataset.delay + 'ms'));
document.querySelectorAll<HTMLElement>('.stack-card').forEach((el, i, all) => {
  const sib = Array.from(el.parentElement!.children).indexOf(el);
  el.style.setProperty('--i', String(sib));
});

// Count-up
function countUp(el: HTMLElement) {
  const m = (el.textContent || '').match(/[\d][\d,.]*/);
  if (!m) return;
  const raw = m[0];
  const target = parseFloat(raw.replace(/,/g, ''));
  const dec = (raw.split('.')[1] || '').length;
  const before = el.textContent!.slice(0, m.index);
  const after = el.textContent!.slice(m.index! + raw.length);
  const fmt = (n: number) => n.toLocaleString('en-IE', { minimumFractionDigits: dec, maximumFractionDigits: dec });
  const dur = 1400; const t0 = performance.now();
  const tick = (t: number) => {
    const k = Math.min(1, (t - t0) / dur); const e = 1 - Math.pow(1 - k, 4);
    el.textContent = before + fmt(target * e) + after;
    if (k < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

// Reveal on enter
const targets = document.querySelectorAll<HTMLElement>('.rv,.stg,.split,[data-count]');
if (reduce || !('IntersectionObserver' in window)) {
  targets.forEach((el) => el.classList.add('in', 'now'));
} else {
  // Curtain/iris reveals start fully clipped, so the element itself never reports as
  // intersecting: watch a proxy (its parent) and reveal the element when that enters.
  const proxyOf = new Map<Element, HTMLElement[]>();
  const io = new IntersectionObserver((entries) => {
    for (const en of entries) {
      if (!en.isIntersecting) continue;
      const els = proxyOf.get(en.target) || [en.target as HTMLElement];
      for (const el of els) {
        el.classList.add('in');
        if (el.hasAttribute('data-count')) countUp(el);
      }
      io.unobserve(en.target);
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.01 });
  targets.forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.bottom < 0) { el.classList.add('in', 'now'); return; } // already scrolled past (back nav)
    if (el.matches('.rv-c,.rv-i') && el.parentElement) {
      const p = el.parentElement;
      if (!proxyOf.has(p)) { proxyOf.set(p, []); io.observe(p); }
      proxyOf.get(p)!.push(el);
    } else io.observe(el);
  });
  // failsafe: never leave content hidden
  setTimeout(() => document.querySelectorAll('.rv:not(.in),.stg:not(.in),.split:not(.in)').forEach((el) => {
    const r = el.getBoundingClientRect(); if (r.top < innerHeight) el.classList.add('in');
  }), 2500);
}
addEventListener('pageshow', (e) => { if ((e as PageTransitionEvent).persisted) targets.forEach((el) => el.classList.add('in', 'now')); });

// Header state + progress
const header = document.querySelector<HTMLElement>('.site-header');
const bar = document.querySelector<HTMLElement>('.progress');
let lastY = 0;
const onScroll = () => {
  const y = scrollY;
  header?.classList.toggle('scrolled', y > 24);
  header?.classList.toggle('hide', y > 400 && y > lastY && !header.classList.contains('open'));
  lastY = y;
  if (bar) bar.style.setProperty('--p', String(y / Math.max(1, root.scrollHeight - innerHeight)));
};
addEventListener('scroll', onScroll, { passive: true });
onScroll();

export { lenis };
