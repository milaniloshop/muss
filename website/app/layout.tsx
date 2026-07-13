import type { Metadata, Viewport } from 'next';
import { Oswald, Manrope } from 'next/font/google';
import { Providers } from '@/components/layout/Providers';
import { BRAND } from '@/lib/products';
import './globals.css';

const body = Manrope({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const display = Oswald({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'https://milanhype.com'),
  title: {
    default: `${BRAND.name} | Second Skin. First Weapon.`,
    template: `%s | ${BRAND.name}`,
  },
  description:
    "Milan Hype CoreFit — men's performance-luxury compression tanks. Second skin. First weapon. Engineered chest + core hold.",
  keywords: [
    'men compression tank',
    'chest compression shirt men',
    'CoreFit',
    'Milan Hype',
    'premium compression wear',
    'performance luxury fitness',
  ],
  openGraph: {
    type: 'website',
    siteName: `${BRAND.name} ${BRAND.productLine}`,
    title: `${BRAND.name} | ${BRAND.tagline}`,
    description: 'Second skin. First weapon. Performance-luxury compression for men who train like it is war.',
    images: ['/assets/images/products/corefit-hero-duo.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND.name} | ${BRAND.tagline}`,
    description: 'Second skin. First weapon.',
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
  themeColor: '#060607',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:border focus:border-ember focus:bg-obsidian focus:px-4 focus:py-2 focus:text-bone"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
