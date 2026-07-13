'use client';

import { CinematicHero } from './CinematicHero';
import { MaterialSection } from './MaterialSection';
import { FitPhilosophy } from './FitPhilosophy';
import { InMotion } from './InMotion';
import { CinematicCollection } from './CinematicCollection';
import { ProofSection } from './ProofSection';
import { ManifestoSection } from './ManifestoSection';
import { FinalCta } from './FinalCta';
import { ScrollProgress } from './ScrollProgress';
import { ReticleCursor } from './ReticleCursor';

export function CinematicLanding() {
  return (
    <>
      <div className="film-grain" aria-hidden />
      <ScrollProgress />
      <ReticleCursor />
      <CinematicHero />
      <MaterialSection />
      <FitPhilosophy />
      <InMotion />
      <CinematicCollection />
      <ProofSection />
      <ManifestoSection />
      <FinalCta />
    </>
  );
}
