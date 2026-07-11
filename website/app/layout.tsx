import type { Metadata, Viewport } from 'next';
import { Outfit, Syne } from 'next/font/google';
import { Providers } from '@/components/layout/Providers';
import { BRAND } from '@/lib/products';
import './globals.css';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
});

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'https://milanhype.com'),
  title: {
    default: `${BRAND.name} ${BRAND.productLine} | Elite Compression`,
    template: `%s | ${BRAND.name}`,
  },
  description:
    "Men's chest + core compression tanks by Milan Hype CoreFit. Flatter silhouette. Invisible under every shirt. Essential $49 to Signature $229.",
  keywords: [
    'men compression tank',
    'chest compression shirt men',
    'CoreFit',
    'Milan Hype',
    'premium compression wear',
    'shapewear for men',
  ],
  openGraph: {
    type: 'website',
    siteName: `${BRAND.name} ${BRAND.productLine}`,
    title: `${BRAND.name} | ${BRAND.tagline}`,
    description:
      'Elite compression apparel for men who want to look leaner and more confident.',
    images: ['/assets/images/products/corefit-hero-duo.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND.name} | ${BRAND.tagline}`,
    description: 'Elite Compression. Built for Confidence.',
    images: ['/assets/images/products/corefit-hero-duo.jpg'],
  },
  icons: {
    icon: '/assets/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#050505',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${syne.variable}`}>
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
