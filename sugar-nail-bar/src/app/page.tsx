import { Hero } from '@/components/Hero';
import { Experience } from '@/components/Experience';
import { Services } from '@/components/Services';
import { Pairings } from '@/components/Pairings';
import { Reviews } from '@/components/Reviews';
import { Booking } from '@/components/Booking';
import { Visit } from '@/components/Visit';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Experience />
      <Services />
      <Pairings />
      <Reviews />
      <Booking />
      <Visit />
    </>
  );
}
