'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { SITE } from '@/lib/site';
import { EASE, Parallax } from '@/components/motion';

const PILLARS = ['New.', 'Certified Used.', 'Expertly Repaired.'] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-graphite">
      <div className="absolute inset-0">
        <Parallax speed={0.08} className="absolute inset-[-8%]">
          <div className={reduce ? 'absolute inset-0' : 'absolute inset-0 rack-focus'}>
            <Image
              src="/images/hero-repair.jpg"
              alt="iPhone and laptop mid-repair on a precision studio workbench"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_42%]"
            />
          </div>
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-b from-graphite/55 via-graphite/35 to-graphite/92" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,transparent_0%,rgba(10,12,16,0.45)_70%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-24 pt-28 md:justify-center md:px-8 md:pb-28">
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.15, delay: 0.35, ease: EASE }}
          className="max-w-3xl text-[clamp(2.75rem,9.5vw,5.75rem)] leading-[0.95] font-semibold tracking-[-0.035em] text-white"
        >
          {SITE.name}
        </motion.h1>

        <p className="mt-7 flex flex-wrap gap-x-3 gap-y-2 text-[0.72rem] font-medium tracking-[0.22em] text-white/78 uppercase md:text-[0.78rem]">
          {PILLARS.map((phrase, i) => (
            <motion.span
              key={phrase}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.95 + i * 0.18, ease: EASE }}
              className="inline-block"
            >
              {phrase}
            </motion.span>
          ))}
        </p>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.45, ease: EASE }}
          className="mt-5 max-w-md text-[1.02rem] text-white/70 md:text-lg"
        >
          Premium tech retail in Alexandria — brand-new and certified second-hand
          devices, plus in-house repair done with surgical precision.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7, ease: EASE }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a href="#devices" className="btn-primary cursor-pointer">
            Shop Devices
          </a>
          <a href="#repair" className="btn-secondary cursor-pointer">
            Book a Repair
          </a>
        </motion.div>
      </div>

      <a
        href="#trust"
        className="scroll-cue absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-white/55"
        aria-label="Scroll to trust signals"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </a>
    </section>
  );
}
