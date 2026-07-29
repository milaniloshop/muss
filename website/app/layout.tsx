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
    default: `${BRAND.name} | Clothing & Sneakers`,
    template: `%s | ${BRAND.name}`,
  },
  description:
    'Milan Hype — premium clothing and sneakers. Street polish. Milan heat. Follow @Milanhype_ on Instagram.',
  keywords: [
    'Milan Hype',
    'streetwear',
    'sneakers',
    'clothing store',
    'Milanhype_',
    'premium apparel',
  ],
  openGraph: {
    type: 'website',
    siteName: BRAND.name,
    title: `${BRAND.name} | ${BRAND.tagline}`,
    description: 'Premium clothing and sneakers. Street polish. Milan heat.',
    images: ['/assets/images/logo-mh.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND.name} | ${BRAND.tagline}`,
    description: 'Premium clothing and sneakers.',
    images: ['/assets/images/logo-mh.svg'],
  },
  icons: {
    icon: '/assets/images/logo-mh.svg',
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
