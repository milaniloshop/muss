'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

function ensureGsap() {
  if (typeof window === 'undefined' || registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export function useGsapContext(scope: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    ensureGsap();
    const ctx = gsap.context(() => undefined, scope);
    return () => ctx.revert();
  }, [scope]);
}

export function ScrollStory({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ensureGsap();
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const layers = el.querySelectorAll('[data-parallax]');
      layers.forEach((layer) => {
        const speed = Number((layer as HTMLElement).dataset.parallax || 0.2);
        gsap.to(layer, {
          yPercent: speed * 100,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

      const reveals = el.querySelectorAll('[data-reveal]');
      reveals.forEach((node) => {
        gsap.fromTo(
          node,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: node,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          },
        );
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    ensureGsap();
    // Lightweight inertia feel without third-party smooth scroll libs
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return <>{children}</>;
}
