'use client';

import { useEffect, useState } from 'react';
import { SITE } from '@/lib/site';
import { cn } from '@/lib/cn';

const LINKS = [
  { href: '#categories', label: 'Shop' },
  { href: '#certified', label: 'Certified' },
  { href: '#devices', label: 'Devices' },
  { href: '#repair', label: 'Repair' },
  { href: '#visit', label: 'Visit' },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-500',
        scrolled || open
          ? 'border-b border-white/8 bg-graphite/88 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[4.25rem] md:px-8">
        <a href="#top" className="group flex items-baseline gap-2 text-white">
          <span className="text-[1.05rem] font-semibold tracking-[-0.02em] md:text-lg">
            {SITE.name}
          </span>
          <span className="hidden text-[0.62rem] font-medium tracking-[0.18em] text-white/45 uppercase sm:inline">
            Alexandria
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="cursor-pointer text-[0.8rem] font-medium tracking-[0.04em] text-white/72 transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a href="#repair" className="btn-primary !min-h-10 !px-4 !text-[0.78rem]">
            Book a Repair
          </a>
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 cursor-pointer items-center justify-center md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={cn(
                'h-px w-full bg-white transition-transform duration-300',
                open && 'translate-y-[3.5px] rotate-45',
              )}
            />
            <span
              className={cn(
                'h-px w-full bg-white transition-transform duration-300',
                open && '-translate-y-[3.5px] -rotate-45',
              )}
            />
          </span>
        </button>
      </div>

      <div
        className={cn(
          'fixed inset-0 top-16 bg-graphite/96 backdrop-blur-xl transition-[opacity,visibility] duration-400 md:hidden',
          open ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-8" aria-label="Mobile">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="cursor-pointer border-b border-white/8 py-4 text-lg text-white/90"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#devices"
            onClick={() => setOpen(false)}
            className="btn-primary mt-6 w-full"
          >
            Shop Devices
          </a>
        </nav>
      </div>
    </header>
  );
}
