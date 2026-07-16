'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { REVIEWS } from '@/lib/site';
import { EASE, Reveal } from '@/components/motion';

export function Reviews() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % REVIEWS.length);
    }, 5600);
    return () => window.clearInterval(id);
  }, [reduce]);

  const review = REVIEWS[index];

  return (
    <section id="reviews" className="brushed-metal px-5 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="micro text-white/45">Social Proof</p>
          <h2 className="mt-3 text-[clamp(1.85rem,4vw,2.6rem)] font-semibold tracking-[-0.03em]">
            Trusted in Alexandria
          </h2>
        </Reveal>

        <div className="relative mt-12 min-h-[220px] md:min-h-[200px]">
          <span
            className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 text-[7rem] leading-none text-white/8 select-none"
            aria-hidden
          >
            “
          </span>
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={review.by}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.65, ease: EASE }}
              className="relative"
            >
              <p className="text-xl leading-relaxed text-white/88 md:text-2xl md:leading-relaxed">
                {review.quote}
              </p>
              <footer className="mt-8">
                <cite className="not-italic">
                  <span className="font-semibold text-white">{review.by}</span>
                  <span className="mt-1 block font-mono-spec text-xs tracking-wide text-white/45">
                    {review.meta}
                  </span>
                </cite>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2" role="tablist" aria-label="Reviews">
          {REVIEWS.map((r, i) => (
            <button
              key={r.by}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show review by ${r.by}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 cursor-pointer rounded-full transition-all duration-400 ${
                i === index ? 'w-8 bg-blue' : 'w-2.5 bg-white/25 hover:bg-white/45'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
