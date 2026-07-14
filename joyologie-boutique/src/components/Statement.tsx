'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

const LINES = ['Resort dressing,', 'done with intention.'];

export function Statement() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();

  return (
    <section
      id="statement"
      data-section
      data-section-index="02"
      data-section-label="Statement"
      className="linen-grain relative bg-sand"
    >
      {/* Deliberate emptiness — enormous vertical breathing room */}
      <div className="relative z-[2] mx-auto flex min-h-[86svh] max-w-5xl flex-col items-center justify-center px-6 py-40 text-center md:min-h-[92svh] md:py-56">
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={inView || reduce ? { opacity: 1 } : undefined}
          transition={{ duration: 1, ease: EASE }}
          className="section-label mb-14 md:mb-20"
        >
          <span className="num">02</span>
          <span className="name">Statement</span>
        </motion.p>

        <h2 ref={ref} className="font-serif text-umber">
          {LINES.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.12em]">
              <motion.span
                className="block text-[clamp(2.4rem,8.5vw,6.5rem)] leading-[1.05]"
                initial={reduce ? false : { y: '110%' }}
                animate={inView || reduce ? { y: '0%' } : undefined}
                transition={{ duration: 1.15, delay: 0.15 + i * 0.14, ease: EASE }}
                style={{ display: 'inline-block' }}
              >
                {i === 1 ? (
                  <>
                    done with{' '}
                    <span className="italic text-clay">intention.</span>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h2>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={inView || reduce ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 1, delay: 0.7, ease: EASE }}
          className="mt-16 max-w-md text-[0.95rem] leading-relaxed text-umber-soft md:mt-20"
        >
          A quietly edited wardrobe for the coast — Spartina, Hobo, Liverpool Denim,
          and beach-to-evening resortwear, chosen one piece at a time.
        </motion.p>
      </div>
    </section>
  );
}
