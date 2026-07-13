import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Source_Sans_3 } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SITE } from '@/lib/site';
import './globals.css';

const display = Cormorant_Garamond({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

const body = Source_Sans_3({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${SITE.name} | ${SITE.tagline}`,
  description: `${SITE.name} is a women's boutique in the ${SITE.place} at ${SITE.fullAddress}. Clothing, accessories & gifts — curated by ${SITE.owner}.`,
  openGraph: {
    title: SITE.name,
    description: SITE.tagline,
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#f6f0e6',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-terracotta focus:px-4 focus:py-2 focus:text-white"
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
