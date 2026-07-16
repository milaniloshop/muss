import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, Outfit } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SITE } from '@/lib/site';
import './globals.css';

const display = Outfit({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const mono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${SITE.name} | New · Certified Used · Expert Repair · Alexandria`,
  description:
    'Alexandre Store is a premium tech retailer in Alexandria selling brand-new and certified second-hand iPhones and laptops, plus in-house repair services.',
  openGraph: {
    title: SITE.name,
    description: SITE.tagline,
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#1a1d22',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-blue focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
