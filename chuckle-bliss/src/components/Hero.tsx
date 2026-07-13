'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { SITE } from '@/lib/site';

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <div className={reduce ? 'absolute inset-0' : 'absolute inset-0 ken-burns'}>
          <Image
            src="/images/hero.jpg"
            alt="Sunlit boutique interior with clothing racks"
            fill
            priority
            sizes="100vw"
            className="warm-grade object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/35 via-espresso/25 to-linen" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(47,38,31,0.28)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-24 pt-28 md:justify-center md:px-8 md:pb-20">
        <p className="micro text-white/80">Gaslamp Shoppes · Ormond Beach</p>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: EASE }}
          className="mt-5 max-w-3xl font-serif text-[clamp(2.8rem,10vw,6.5rem)] text-[#fffaf3]"
        >
          {SITE.name}
        </motion.h1>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: EASE }}
          className="mt-5 max-w-md text-base text-[#fff7ee]/80 md:text-lg"
        >
          {SITE.tagline}
        </motion.p>
        <div className="mt-4 hairline-draw" aria-hidden />
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#visit" className="btn-terracotta">
            Visit Us
          </a>
          <a href="#look" className="btn-ghost text-[#fffaf3] hover:text-gold">
            Shop the Look
          </a>
        </motion.div>
      </div>

      <a
        href="#welcome"
        className="scroll-cue absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-[#fffaf3]/70"
        aria-label="Scroll to welcome"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </a>
    </section>
  );
}
