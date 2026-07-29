import type { Metadata, Viewport } from 'next';
import { Fraunces, Oswald, Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Wayfinder } from '@/components/Wayfinder';
import { SITE } from '@/lib/site';
import './globals.css';

// Display: high-contrast editorial serif (Canela / Reckless adjacent)
const display = Fraunces({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
});

// The "engineered" condensed layer for numerals + tracked labels
const condensed = Oswald({
  variable: '--font-condensed',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

// Body: quiet humanist sans
const body = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${SITE.nameFull} — Resort Dressing in ${SITE.placeShort}, ${SITE.city}`,
  description: `${SITE.nameFull} is a resort-and-beach-casual women's boutique in ${SITE.place} at ${SITE.fullAddress}. Spartina 449, Hobo, Liverpool Denim, and beach-to-evening resortwear.`,
  keywords: [
    'Joyologie Boutique',
    'Ormond Beach boutique',
    'resortwear',
    'Spartina 449',
    'Hobo bags',
    'Liverpool Denim',
    'Fountain Square Ormond Beach',
  ],
  openGraph: {
    title: SITE.nameFull,
    description: SITE.tagline,
    type: 'website',
    locale: 'en_US',
  },
};

export const viewport: Viewport = {
  themeColor: '#f2eadb',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${condensed.variable} ${body.variable}`}
    >
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-umber focus:px-4 focus:py-2 focus:text-ivory"
        >
          Skip to content
        </a>
        <Header />
        <Wayfinder />
        <main id="main">{children}</main>
        <Footer />
        <div className="grain-overlay" aria-hidden />
      </body>
    </html>
  );
}
