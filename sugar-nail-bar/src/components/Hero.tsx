'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { SITE } from '@/lib/site';
import { asset } from '@/lib/asset';
import { Bubbles } from './Bubbles';

const EASE = [0.22, 1, 0.36, 1] as const;

const WORDS = ['Nails.', 'Mimosas.', 'Sugar Scrubs.'];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-cream"
    >
      {/* Background photography (drifts slower than foreground via subtle scale) */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={reduce ? false : { scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.6, ease: EASE }}
        >
          {/* Poster / fallback image — always rendered beneath the video */}
          <Image
            src={asset('/images/hero.jpg')}
            alt="A fresh blush-pink manicure beside a glass of mimosa with rising bubbles"
            fill
            priority
            sizes="100vw"
            className="warm-grade object-cover object-center"
          />
          {/* Full-bleed real salon video background.
              TODO: drop the real file at /public/video/hero-pinned.mp4.
              If missing, the poster image above shows through unchanged. */}
          {!reduce && (
            <video
              className="absolute inset-0 h-full w-full object-cover object-center warm-grade"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              poster={asset('/images/hero.jpg')}
            >
              <source src={asset('/video/hero-pinned.mp4')} type="video/mp4" />
            </video>
          )}
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-cream/85 via-cream/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-cream/30" />
      </div>

      {/* Champagne bubbles rise through the frame */}
      <Bubbles count={18} seed={7} className="z-[1]" />

      {/* Foreground text plane */}
      <div className="relative z-10 mx-auto w-full max-w-[1300px] px-5 pb-24 pt-32 md:px-8">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className="micro text-merlot"
        >
          Est. Ormond Beach · Appointment Only
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
          className="mt-6 max-w-3xl font-serif text-[clamp(3rem,11vw,7.5rem)] leading-[0.95] text-ink"
        >
          Sugar
          <br />
          Nail Bar
        </motion.h1>

        <p className="mt-8 flex flex-wrap gap-x-3 text-[clamp(1.1rem,3vw,1.9rem)] font-serif text-ink-soft">
          {WORDS.map((w, i) => (
            <motion.span
              key={w}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 + i * 0.18, ease: EASE }}
              className={i === 1 ? 'italic text-coral' : undefined}
            >
              {w}
            </motion.span>
          ))}
        </p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.35, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <a href={SITE.bookingAnchor} className="btn-merlot">
            Book Your Appointment
          </a>
          <a href="#experience" className="btn-ghost text-ink">
            <span className="underline-grow">The Experience</span>
          </a>
        </motion.div>
      </div>

      <a
        href="#experience"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-merlot/60"
        aria-label="Scroll down"
      >
        <motion.svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          animate={reduce ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </motion.svg>
      </a>
    </section>
  );
}
