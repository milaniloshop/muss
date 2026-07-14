'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { REVIEWS, SITE } from '@/lib/site';

const EASE = [0.22, 1, 0.36, 1] as const;
const INTERVAL = 6500;

function Stars() {
  return (
    <div className="flex justify-center gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.2l1-5.8L3.5 9.2l5.9-.9L12 3z"
            fill="var(--coral)"
          />
        </svg>
      ))}
    </div>
  );
}

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
    <section id="reviews" className="relative overflow-hidden bg-cream-deep py-28 md:py-36">
      <div
        className="relative z-[2] mx-auto flex max-w-3xl flex-col items-center px-6 text-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <p className="micro text-coral">In Their Words</p>
        <Stars />
        <p className="mt-3 text-[0.8rem] font-medium tracking-wide text-ink-soft">
          A perfect {SITE.rating} across Google & Facebook
        </p>

        <div className="relative mt-10 flex min-h-[15rem] w-full items-center justify-center md:min-h-[16rem]">
          <span
            className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 font-serif text-[8rem] leading-none text-coral/25"
            aria-hidden
          >
            &ldquo;
          </span>
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="font-serif text-[clamp(1.5rem,4vw,2.6rem)] leading-[1.22] text-ink">
                {review.quote}
              </p>
              <footer className="mt-8">
                <span className="block text-[0.85rem] font-semibold uppercase tracking-[0.18em] text-merlot">
                  {review.by}
                </span>
                <span className="mt-1 block text-[0.75rem] tracking-wide text-ink-faint">
                  {review.meta}
                </span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center gap-2.5">
          {REVIEWS.map((r, i) => (
            <button
              key={r.by}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Read review from ${r.by}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === i ? 'w-7 bg-coral' : 'w-1.5 bg-ink/20 hover:bg-ink/35'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
