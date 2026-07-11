'use client';

import { motion } from 'framer-motion';
import { SceneCanvas } from '@/components/3d/SceneCanvas';
import { FloatingTank } from '@/components/3d/CompressionTank';
import { ButtonLink } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Full-bleed atmospheric plane */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(58,111,247,0.18),transparent_45%),radial-gradient(ellipse_at_80%_70%,rgba(255,255,255,0.05),transparent_40%),linear-gradient(180deg,#030303_0%,#0a0b10_48%,#050505_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
          <div className="hero-light absolute -left-1/4 top-1/4 h-[50vmax] w-[50vmax] rounded-full bg-[radial-gradient(circle,rgba(110,160,255,0.35),transparent_60%)]" />
          <div className="hero-light-delayed absolute -right-1/5 bottom-0 h-[40vmax] w-[40vmax] rounded-full bg-[radial-gradient(circle,rgba(200,210,255,0.18),transparent_60%)]" />
        </div>
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl items-center gap-8 px-5 pb-16 pt-28 md:grid-cols-2 md:px-8 md:pb-10">
        <div className="order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-5xl leading-none tracking-[0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Milan Hype
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="mt-6 max-w-xl font-display text-3xl leading-tight text-white/95 sm:text-4xl md:text-5xl"
          >
            Elite Compression.
            <br />
            Built for Confidence.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-5 max-w-md text-base text-silver/80 md:text-lg"
          >
            Men&apos;s chest + core compression tanks engineered for a leaner silhouette — invisible under every shirt.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <ButtonLink href="/product/corefit-pro" magnetic>
              Shop Pro — $89
            </ButtonLink>
            <ButtonLink href="/collection" variant="outline" magnetic>
              Explore Collection
            </ButtonLink>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 h-[48vh] md:order-2 md:h-[70vh]"
          aria-hidden
        >
          <SceneCanvas className="h-full" dpr={[1, 1.5]}>
            <FloatingTank color="#141418" scale={1.05} />
          </SceneCanvas>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <a
          href="#collection"
          className="group flex flex-col items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-silver/60"
        >
          Scroll
          <span className="block h-10 w-px overflow-hidden bg-white/15">
            <span className="scroll-line block h-full w-full bg-gradient-to-b from-transparent via-white to-transparent" />
          </span>
        </a>
      </motion.div>
    </section>
  );
}
