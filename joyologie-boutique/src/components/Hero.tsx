'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { asset } from '@/lib/asset';

const EASE = [0.22, 1, 0.36, 1] as const;

/** Weighted fade-and-settle per character — Apple-keynote grade, not a typewriter. */
function LetterReveal({
  text,
  start,
  className,
  baseDelay = 0,
}: {
  text: string;
  start: boolean;
  className?: string;
  baseDelay?: number;
}) {
  const reduce = useReducedMotion();
  const letters = Array.from(text);

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.052, delayChildren: baseDelay },
    },
  };
  const child: Variants = {
    hidden: { opacity: 0, y: '0.5em', filter: 'blur(7px)' },
    show: {
      opacity: 1,
      y: '0em',
      filter: 'blur(0px)',
      transition: { duration: 0.9, ease: EASE },
    },
  };

  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      animate={start ? 'show' : 'hidden'}
      aria-label={text}
    >
      {letters.map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          variants={child}
          aria-hidden
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {ch}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // Defer through a timer so we never setState synchronously in the effect.
    const t = setTimeout(() => setRevealed(true), reduce ? 0 : 1450);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <section
      id="top"
      data-section
      data-section-index="01"
      data-section-label="Arrive"
      className="relative min-h-[100svh] overflow-hidden bg-umber"
    >
      {/* Beat two — full hero photograph, zooms out + racks into focus */}
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.16, opacity: 0 }}
        animate={
          revealed
            ? { scale: 1, opacity: 1 }
            : reduce
              ? { scale: 1, opacity: 1 }
              : undefined
        }
        transition={{ duration: 2.4, ease: EASE }}
      >
        <Image
          src={asset('/images/hero-full.jpg')}
          alt="Sunlit resortwear boutique interior with a model in ivory linen"
          fill
          priority
          sizes="100vw"
          className="warm-grade object-cover object-center"
        />
      </motion.div>

      {/* Beat one — tight, softly blurred macro detail that racks away */}
      {!reduce && (
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.28, opacity: 1, filter: 'blur(14px)' }}
          animate={
            revealed
              ? { scale: 1.05, opacity: 0, filter: 'blur(0px)' }
              : { scale: 1.16, opacity: 1, filter: 'blur(10px)' }
          }
          transition={{ duration: revealed ? 1.9 : 1.4, ease: EASE }}
        >
          <Image
            src={asset('/images/hero-macro.jpg')}
            alt=""
            fill
            priority
            sizes="100vw"
            className="warm-grade object-cover object-center"
          />
        </motion.div>
      )}

      {/* Cinematic grading gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-umber/45 via-umber/15 to-umber/60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,transparent_28%,rgba(42,37,25,0.5)_100%)]" />

      {/* Foreground typography plane */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-5 pb-24 pt-32 md:justify-center md:px-10 md:pb-28">
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={revealed ? { opacity: 1 } : undefined}
          transition={{ duration: 1, delay: 0.1, ease: EASE }}
          className="numeral mb-6 text-[0.72rem] font-medium uppercase tracking-[0.4em] text-ivory/70"
        >
          01 — Arrive
        </motion.p>

        <h1 className="font-serif text-ivory">
          <LetterReveal
            text="Joyologie"
            start={revealed}
            baseDelay={0.15}
            className="block text-[clamp(3.4rem,15vw,11rem)] leading-[0.92] tracking-[-0.03em]"
          />
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={revealed ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 1, delay: 0.95, ease: EASE }}
            className="mt-3 block font-sans text-[0.7rem] font-medium uppercase tracking-[0.55em] text-ivory/75 md:text-xs"
          >
            Boutique
          </motion.span>
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={revealed ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 1, delay: 1.15, ease: EASE }}
          className="numeral mt-8 text-[0.74rem] font-medium uppercase tracking-[0.36em] text-ivory/80"
        >
          Fountain Square · Ormond Beach
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={revealed ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 1, delay: 1.35, ease: EASE }}
          className="mt-9 flex flex-wrap items-center gap-5"
        >
          <a href="#collections" className="btn-gold">
            Enter the Collection
          </a>
          <a href="#visit" className="btn-ghost text-ivory">
            <span className="underline-grow">Visit the Shop</span>
          </a>
        </motion.div>
      </div>

      <a
        href="#statement"
        className="scroll-cue absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-ivory/70"
        aria-label="Scroll down"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </a>
    </section>
  );
}
