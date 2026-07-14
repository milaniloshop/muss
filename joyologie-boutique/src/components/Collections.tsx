'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { COLLECTIONS } from '@/lib/site';
import { Reveal } from './motion';

export function Collections() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activePanel, setActivePanel] = useState(0);

  const updateProgress = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const p = max > 0 ? el.scrollLeft / max : 0;
    setProgress(p);
    setActivePanel(Math.round(p * (COLLECTIONS.length - 1)));
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateProgress();
    el.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      el.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, [updateProgress]);

  // Mouse drag-to-scroll (trackpad + touch scroll natively; this adds mouse).
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let down = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;

    const onDown = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      down = true;
      moved = false;
      startX = e.clientX;
      startScroll = el.scrollLeft;
      el.classList.add('is-dragging');
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      el.scrollLeft = startScroll - dx;
    };
    const onUp = () => {
      down = false;
      el.classList.remove('is-dragging');
    };
    const onClickCapture = (e: MouseEvent) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    };

    el.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerup', onUp);
    el.addEventListener('click', onClickCapture, true);
    return () => {
      el.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      el.removeEventListener('click', onClickCapture, true);
    };
  }, []);

  const scrollToPanel = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const panel = el.children[i] as HTMLElement | undefined;
    panel?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
  };

  return (
    <section
      id="collections"
      data-section
      data-section-index="03"
      data-section-label="Collections"
      className="relative overflow-hidden bg-sand-deep py-20 md:py-28"
    >
      <div className="mx-auto mb-10 flex max-w-[1400px] flex-col gap-6 px-5 md:mb-14 md:flex-row md:items-end md:justify-between md:px-10">
        <div className="max-w-xl">
          <Reveal>
            <p className="section-label">
              <span className="num">03</span>
              <span className="name">Collections</span>
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-serif text-[clamp(2.2rem,6vw,4rem)] leading-[1.02] text-umber">
              Three ways to<span className="italic text-clay"> dress the coast.</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.14}>
          <p className="numeral flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-umber-faint">
            <span className="hidden md:inline">Drag</span>
            <svg width="34" height="10" viewBox="0 0 34 10" fill="none" aria-hidden>
              <path d="M0 5h30m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="md:hidden">Swipe</span>
          </p>
        </Reveal>
      </div>

      {/* Horizontal snap track */}
      <div
        ref={trackRef}
        className="no-scrollbar snap-x-mandatory flex touch-pan-x gap-4 overflow-x-auto px-5 pb-2 md:gap-6 md:px-10 [&.is-dragging]:cursor-grabbing"
        style={{ cursor: 'grab' }}
      >
        {COLLECTIONS.map((c, i) => (
          <article
            key={c.index}
            className="snap-start relative aspect-[4/5] w-[82vw] shrink-0 select-none overflow-hidden rounded-[24px] sm:w-[64vw] md:aspect-[3/4] md:w-[42vw] lg:w-[34vw]"
          >
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={c.image}
                alt={c.alt}
                fill
                sizes="(max-width:768px) 82vw, 40vw"
                loading="lazy"
                draggable={false}
                className={`warm-grade object-cover ${i % 2 === 0 ? 'drift' : 'drift-slow'}`}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-umber/70 via-umber/10 to-umber/25" />

            <span className="numeral absolute right-5 top-5 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-ivory/90">
              {c.index} / 0{COLLECTIONS.length}
            </span>

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <p className="numeral mb-3 text-[0.66rem] font-medium uppercase tracking-[0.32em] text-ivory/80">
                {c.label}
              </p>
              <h3 className="whitespace-pre-line font-serif text-[clamp(1.9rem,4vw,2.8rem)] leading-[1.02] text-ivory">
                {c.title}
              </h3>
              <p className="mt-4 max-w-xs text-[0.9rem] leading-relaxed text-ivory/80">
                {c.copy}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Progress + panel dots */}
      <div className="mx-auto mt-8 flex max-w-[1400px] items-center gap-5 px-5 md:px-10">
        <div className="relative h-px flex-1 bg-umber/15">
          <div
            className="absolute inset-y-0 left-0 bg-clay transition-[width] duration-150"
            style={{ width: `${12 + progress * 88}%` }}
          />
        </div>
        <div className="flex items-center gap-2.5">
          {COLLECTIONS.map((c, i) => (
            <button
              key={c.index}
              type="button"
              onClick={() => scrollToPanel(i)}
              aria-label={`Go to ${c.label}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activePanel === i ? 'w-6 bg-clay' : 'w-1.5 bg-umber/25 hover:bg-umber/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
