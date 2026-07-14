import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SITE } from '@/lib/site';
import './globals.css';

const display = Fraunces({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const body = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline} | ${SITE.city}, ${SITE.state}`,
  description: `${SITE.name} is an appointment-only nail bar in ${SITE.city}, FL. Every manicure, pedicure, and set comes with a complimentary mimosa, wine, or coffee and a homemade sugar scrub.`,
  keywords: [
    'Sugar Nail Bar',
    'Ormond Beach nail salon',
    'mimosa nails',
    'nail bar',
    'sugar scrub',
    'pedicure Ormond Beach',
  ],
  openGraph: {
    title: SITE.name,
    description: SITE.tagline,
    type: 'website',
    locale: 'en_US',
  },
};

export const viewport: Viewport = {
  themeColor: '#fbf4e9',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-merlot focus:px-4 focus:py-2 focus:text-ivory"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <div className="grain-overlay" aria-hidden />
      </body>
    </html>
  );
}
