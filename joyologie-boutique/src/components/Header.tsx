'use client';

import { useEffect, useState } from 'react';
import { SITE } from '@/lib/site';
import { cn } from '@/lib/cn';

const NAV = [
  { href: '#collections', label: 'Collections' },
  { href: '#look', label: 'Shop the Look' },
  { href: '#visit', label: 'Visit' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.82);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-700',
        scrolled
          ? 'border-b border-umber/8 bg-sand/80 py-3 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent py-5',
      )}
      style={{ transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)' }}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 md:px-10">
        <a
          href="#top"
          className={cn(
            'font-serif text-[1.35rem] leading-none tracking-tight transition-colors duration-500 md:text-[1.55rem]',
            scrolled ? 'text-umber' : 'text-ivory',
          )}
        >
          {SITE.name}
        </a>

        <nav
          className={cn(
            'hidden items-center gap-9 transition-colors duration-500 md:flex',
            scrolled ? 'text-umber' : 'text-ivory',
          )}
        >
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="btn-ghost">
              <span className="underline-grow">{item.label}</span>
            </a>
          ))}
        </nav>

        <a
          href={SITE.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'btn-ghost',
            scrolled ? 'text-umber' : 'text-ivory',
          )}
        >
          <span className="underline-grow">{SITE.phone}</span>
        </a>
      </div>
    </header>
  );
}
