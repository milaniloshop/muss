'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useCart } from '@/lib/cart';
import { cn } from '@/lib/cn';

const NAV = [
  { href: '/collection', label: 'Collection' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled ? 'border-b border-bone/10 bg-obsidian/75 backdrop-blur-xl' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <button
          type="button"
          className="text-gunmetal md:hidden"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="block h-px w-6 bg-current" />
          <span className="mt-1.5 block h-px w-6 bg-current" />
        </button>

        <Link
          href="/"
          className="font-display text-xl tracking-[0.12em] text-bone md:text-2xl"
          aria-label="Milan Hype home"
          onClick={() => setMenuOpen(false)}
        >
          Milan Hype
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-[11px] uppercase tracking-[0.2em] text-gunmetal transition hover:text-bone',
                pathname === item.href && 'text-bone',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/collection"
            className="btn-ghost-ember hidden !min-h-10 !px-4 !py-2 !text-[10px] md:inline-flex"
          >
            Enter
          </Link>
          <button
            type="button"
            onClick={openCart}
            className="min-h-11 cursor-pointer border border-bone/15 bg-transparent px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-bone transition hover:border-ember hover:text-ember"
            aria-label={`Open bag, ${count} items`}
          >
            Bag ({count})
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-bone/10 bg-obsidian/95 px-5 py-4 backdrop-blur-xl md:hidden"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-lg text-bone"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
