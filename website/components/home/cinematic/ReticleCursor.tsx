'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * After #material, desktop cursor becomes a precision reticle.
 * Mobile / reduced-motion: disabled.
 */
export function ReticleCursor() {
  const el = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 769px) and (pointer: fine)');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mq.matches || reduce.matches) return;

    const material = document.getElementById('material');
    if (!material) return;

    const onScroll = () => {
      const passed = material.getBoundingClientRect().bottom < window.innerHeight * 0.35;
      setActive(passed);
      document.documentElement.classList.toggle('reticle-cursor', passed);
    };

    const onMove = (e: MouseEvent) => {
      if (!el.current) return;
      el.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMove);
      document.documentElement.classList.remove('reticle-cursor');
    };
  }, []);

  return <div ref={el} className={`reticle${active ? ' is-on' : ''}`} aria-hidden />;
}
