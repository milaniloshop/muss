import { Hero } from '@/components/Hero';
import { Experience } from '@/components/Experience';
import { PromoParaffin } from '@/components/PromoParaffin';
import { Services } from '@/components/Services';
import { Gallery } from '@/components/Gallery';
import { Pairings } from '@/components/Pairings';
import { Reviews } from '@/components/Reviews';
import { Booking } from '@/components/Booking';
import { Visit } from '@/components/Visit';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Experience />
      <PromoParaffin />
      <Services />
      <Gallery />
      <Pairings />
      <Reviews />
      <Booking />
      <Visit />
    </>
  );
}
