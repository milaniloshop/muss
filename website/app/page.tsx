import { Hero } from '@/components/home/Hero';
import { CollectionPreview } from '@/components/home/CollectionPreview';
import { ScienceSection } from '@/components/home/ScienceSection';
import { TrustStrip, ResultsSection, CtaBand } from '@/components/home/Sections';
import {
  Differentiation,
  HomeFaq,
  HowItWorks,
  Testimonials,
  TierCompare,
} from '@/components/home/ConversionSections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <CollectionPreview />
      <ScienceSection />
      <HowItWorks />
      <ResultsSection />
      <Differentiation />
      <TierCompare />
      <Testimonials />
      <HomeFaq />
      <CtaBand />
    </>
  );
}
