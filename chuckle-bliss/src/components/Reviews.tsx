'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { REVIEWS, SITE } from '@/lib/site';
import { Reveal } from './motion';

const EASE = [0.22, 1, 0.36, 1] as const;

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
    <section id="reviews" className="linen-grain relative overflow-hidden bg-linen-deep py-24 md:py-32">
      <div className="relative z-[2] mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <p className="micro text-sage-deep">Social proof</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 font-serif text-4xl text-espresso md:text-5xl">
            Loved locally · {SITE.rating}★
          </h2>
        </Reveal>

        <div className="relative mt-14 min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={review.by}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <div className="font-serif text-6xl leading-none text-terracotta/50" aria-hidden>
                “
              </div>
              <blockquote className="-mt-6 font-serif text-2xl leading-snug text-espresso md:text-3xl">
                {review.quote}
              </blockquote>
              <figcaption className="mt-8">
                <p className="text-sm font-medium text-espresso">{review.by}</p>
                <p className="mt-1 micro">{review.meta}</p>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          {REVIEWS.map((r, i) => (
            <button
              key={r.by}
              type="button"
              aria-label={`Show review ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? 'bg-terracotta' : 'bg-espresso/20 hover:bg-espresso/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
