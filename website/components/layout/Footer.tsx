import Link from 'next/link';
import Image from 'next/image';
import { BRAND } from '@/lib/products';

export function Footer() {
  return (
    <footer className="border-t border-bone/10 bg-obsidian">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Image src="/assets/images/logo-mh.svg" alt="MH" width={40} height={40} className="rounded-md" />
            <p className="font-display text-3xl tracking-[0.08em] text-bone">{BRAND.name}</p>
          </div>
          <p className="mt-3 max-w-md text-sm text-gunmetal">{BRAND.tagline}</p>
          <p className="mt-4 text-sm text-gunmetal/80">
            Hype streetwear reseller — not a personal brand. Follow{' '}
            <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="text-ember hover:underline">
              {BRAND.instagramHandle}
            </a>{' '}
            or DM to shop.
          </p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-gunmetal">Shop</p>
          <ul className="mt-4 space-y-2 text-sm text-bone/75">
            <li><Link href="/collection" className="hover:text-ember">All</Link></li>
            <li><Link href="/collection?c=apparel" className="hover:text-ember">Apparel</Link></li>
            <li><Link href="/collection?c=sneakers" className="hover:text-ember">Sneakers</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-gunmetal">Support</p>
          <ul className="mt-4 space-y-2 text-sm text-bone/75">
            <li><Link href="/contact" className="hover:text-ember">Contact</Link></li>
            <li><Link href="/faq" className="hover:text-ember">FAQ</Link></li>
            <li><Link href="/shipping" className="hover:text-ember">Shipping</Link></li>
            <li><Link href="/returns" className="hover:text-ember">Returns</Link></li>
            <li>
              <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-ember">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-bone/10 px-5 py-6 text-center text-[10px] uppercase tracking-[0.2em] text-gunmetal md:px-8">
        © {new Date().getFullYear()} Milan Hype · Hype reseller · Ship &amp; meetups
      </div>
    </footer>
  );
}
