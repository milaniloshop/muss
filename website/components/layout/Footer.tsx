import Link from 'next/link';
import { BRAND } from '@/lib/products';

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <p className="font-display text-3xl text-white">{BRAND.name}</p>
          <p className="mt-3 max-w-md text-silver/75">{BRAND.tagline}</p>
          <p className="mt-4 text-sm text-silver/50">
            Premium men&apos;s chest + core compression. Built for a leaner look and quieter confidence.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-silver/60">Shop</p>
          <ul className="mt-4 space-y-2 text-sm text-silver/80">
            <li><Link href="/collection" className="hover:text-white">Collection</Link></li>
            <li><Link href="/product/corefit-pro" className="hover:text-white">CoreFit Pro</Link></li>
            <li><Link href="/product/corefit-elite" className="hover:text-white">CoreFit Elite</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-silver/60">Support</p>
          <ul className="mt-4 space-y-2 text-sm text-silver/80">
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/shipping" className="hover:text-white">Shipping</Link></li>
            <li><Link href="/returns" className="hover:text-white">Returns</Link></li>
            <li><Link href="/admin" className="hover:text-white">Admin</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/8 px-5 py-6 text-center text-xs text-silver/45 md:px-8">
        © {new Date().getFullYear()} Milan Hype · CoreFit · Ships USA
      </div>
    </footer>
  );
}
