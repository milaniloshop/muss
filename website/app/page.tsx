import { Hero } from '@/components/home/Hero';
import { CollectionPreview } from '@/components/home/CollectionPreview';
import { ScienceSection } from '@/components/home/ScienceSection';
import { TrustStrip, ResultsSection, CtaBand } from '@/components/home/Sections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <CollectionPreview />
      <ScienceSection />
      <ResultsSection />
      <CtaBand />
    </>
  );
}
