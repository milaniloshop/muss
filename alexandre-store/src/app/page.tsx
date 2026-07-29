import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { Categories } from '@/components/Categories';
import { CertifiedProcess } from '@/components/CertifiedProcess';
import { FeaturedDevices } from '@/components/FeaturedDevices';
import { Repair } from '@/components/Repair';
import { TradeIn } from '@/components/TradeIn';
import { Reviews } from '@/components/Reviews';
import { Visit } from '@/components/Visit';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Categories />
      <CertifiedProcess />
      <FeaturedDevices />
      <Repair />
      <TradeIn />
      <Reviews />
      <Visit />
    </>
  );
}
