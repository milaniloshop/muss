import { Hero } from '@/components/Hero';
import { Welcome } from '@/components/Welcome';
import { ShopTheLook } from '@/components/ShopTheLook';
import { WhatYoullFind } from '@/components/WhatYoullFind';
import { Reviews } from '@/components/Reviews';
import { VisitUs } from '@/components/VisitUs';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <ShopTheLook />
      <WhatYoullFind />
      <Reviews />
      <VisitUs />
    </>
  );
}
