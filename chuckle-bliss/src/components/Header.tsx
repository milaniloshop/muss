'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SITE } from '@/lib/site';
import { cn } from '@/lib/cn';

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
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled ? 'bg-linen/85 backdrop-blur-xl shadow-[0_1px_0_rgba(47,38,31,0.06)]' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link href="/" className="font-serif text-xl text-espresso md:text-2xl">
          {SITE.name}
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#look" className="micro hover:text-terracotta">
            Shop the Look
          </a>
          <a href="#find" className="micro hover:text-terracotta">
            What You&apos;ll Find
          </a>
          <a href="#visit" className="micro hover:text-terracotta">
            Visit
          </a>
        </nav>
        <a href="#visit" className="btn-terracotta !min-h-10 !px-4 !py-2 !text-[10px]">
          Visit Us
        </a>
      </div>
    </header>
  );
}
