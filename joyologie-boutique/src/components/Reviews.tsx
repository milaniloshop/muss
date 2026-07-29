'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { REVIEWS, SITE } from '@/lib/site';

const EASE = [0.22, 1, 0.36, 1] as const;
const INTERVAL = 6500;

export function Reviews() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || paused) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % REVIEWS.length), INTERVAL);
    return () => clearTimeout(t);
  }, [index, paused, reduce]);

  const review = REVIEWS[index];

  return (
    <section
      id="words"
      data-section
      data-section-index="05"
      data-section-label="In Their Words"
      className="relative overflow-hidden bg-umber py-28 text-ivory md:py-40"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(196,138,44,0.12),transparent_60%)]" />

      <div
        className="relative z-[2] mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <p className="section-label mb-14 md:mb-16">
          <span className="num" style={{ color: 'var(--gold)' }}>05</span>
          <span className="name" style={{ color: 'rgba(250,245,236,0.65)' }}>In Their Words</span>
        </p>

        <div className="relative flex min-h-[16rem] w-full items-center justify-center md:min-h-[18rem]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={reduce ? false : { opacity: 0, y: 22, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -22, filter: 'blur(6px)' }}
              transition={{ duration: 0.9, ease: EASE }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="font-serif text-[clamp(1.6rem,4.4vw,3rem)] leading-[1.18] text-ivory">
                <span className="text-gold">“</span>
                {review.quote}
                <span className="text-gold">”</span>
              </p>
              <footer className="mt-9">
                <span className="numeral block text-[0.8rem] font-medium uppercase tracking-[0.3em] text-ivory">
                  {review.by}
                </span>
                <span className="numeral mt-2 block text-[0.62rem] font-medium uppercase tracking-[0.28em] text-ivory/55">
                  {review.meta}
                </span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-14 flex items-center gap-2.5">
          {REVIEWS.map((r, i) => (
            <button
              key={r.by}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Read review from ${r.by}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === i ? 'w-7 bg-gold' : 'w-1.5 bg-ivory/25 hover:bg-ivory/45'
              }`}
            />
          ))}
        </div>

        <p className="numeral mt-12 text-[0.62rem] font-medium uppercase tracking-[0.28em] text-ivory/45">
          Repeat {SITE.accolade}
        </p>
      </div>
    </section>
  );
}
