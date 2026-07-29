import { Hero } from '@/components/Hero';
import { Statement } from '@/components/Statement';
import { Collections } from '@/components/Collections';
import { ShopTheLook } from '@/components/ShopTheLook';
import { Reviews } from '@/components/Reviews';
import { VisitUs } from '@/components/VisitUs';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statement />
      <Collections />
      <ShopTheLook />
      <Reviews />
      <VisitUs />
    </>
  );
}
