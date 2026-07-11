import type { Metadata } from 'next';
import { ImageGeneratorPanel } from '@/components/admin/ImageGeneratorPanel';
import { Reveal } from '@/components/motion/Reveal';

export const metadata: Metadata = {
  title: 'Admin · AI Imagery',
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-28 md:px-8">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.22em] text-blue-glow/80">Admin</p>
        <h1 className="mt-3 font-display text-4xl text-white md:text-5xl">
          Nano Banana image studio
        </h1>
        <p className="mt-4 max-w-2xl text-silver/75">
          Generate premium lifestyle and product imagery via Nano Banana. On GitHub Pages the UI is
          available, but generation requires a Node API host with{' '}
          <code className="text-white">NANO_BANANA_API_KEY</code>.
        </p>
      </Reveal>
      <div className="mt-10">
        <ImageGeneratorPanel />
      </div>
    </div>
  );
}
