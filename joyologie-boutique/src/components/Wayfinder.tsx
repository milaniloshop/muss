'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

/**
 * Fixed corner wayfinding device (borrowed from long-form editorial + Apple
 * product pages). The active section's number + label pin in the viewport
 * corner, then release and hand off to the next as it scrolls into view.
 */
export function Wayfinder() {
  const [active, setActive] = useState<{ index: string; label: string } | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('[data-section]'),
    );
    if (!sections.length) return;

    const visible = new Map<Element, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target, entry.intersectionRatio);
          else visible.delete(entry.target);
        }

        let best: Element | null = null;
        let bestRatio = 0;
        for (const [el, ratio] of visible) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = el;
          }
        }

        if (best instanceof HTMLElement) {
          const index = best.dataset.sectionIndex ?? '';
          const label = best.dataset.sectionLabel ?? '';
          // Hide the marker over the hero (01) — it owns the first beat alone.
          if (index === '01') setActive(null);
          else setActive({ index, label });
        }
      },
      { threshold: [0.15, 0.35, 0.6, 0.85], rootMargin: '-10% 0px -10% 0px' },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="pointer-events-none fixed bottom-6 right-5 z-50 md:bottom-8 md:right-8"
      aria-hidden
    >
      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            key={active.index}
            initial={reduce ? false : { opacity: 0, y: 10, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10, filter: 'blur(4px)' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2.5 rounded-full border border-umber/10 bg-ivory/70 px-3.5 py-1.5 backdrop-blur-md"
            style={{ boxShadow: '0 18px 40px -28px rgba(42,37,25,0.5)' }}
          >
            <span className="numeral text-[0.78rem] font-semibold text-clay">
              {active.index}
            </span>
            <span className="h-3 w-px bg-umber/20" />
            <span className="numeral text-[0.62rem] font-medium uppercase tracking-[0.28em] text-umber-soft">
              {active.label}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
