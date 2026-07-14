'use client';

import { useEffect, useState } from 'react';
import { SITE } from '@/lib/site';
import { cn } from '@/lib/cn';

const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#pairings', label: 'Pairings' },
  { href: '#visit', label: 'Visit' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 text-ink transition-all duration-500',
        scrolled
          ? 'border-b border-ink/8 bg-cream/85 py-3 backdrop-blur-md'
          : 'border-b border-transparent bg-gradient-to-b from-cream/80 via-cream/40 to-transparent py-4',
      )}
      style={{ transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)' }}
    >
      <div className="mx-auto flex max-w-[1300px] items-center justify-between px-5 md:px-8">
        <a href="#top" className="font-serif text-[1.4rem] leading-none tracking-tight text-ink md:text-[1.6rem]">
          Sugar<span className="text-coral"> Nail Bar</span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="btn-ghost">
              <span className="underline-grow">{item.label}</span>
            </a>
          ))}
        </nav>

        <a href={SITE.booking} target="_blank" rel="noopener noreferrer" className="btn-merlot !min-h-[44px] !px-6 !py-2.5">
          Book Now
        </a>
      </div>
    </header>
  );
}
