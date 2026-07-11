'use client';

import { SceneCanvas } from '@/components/3d/SceneCanvas';
import { FabricCloseup } from '@/components/3d/CompressionTank';
import { Reveal } from '@/components/motion/Reveal';
import { ScrollStory } from '@/components/motion/ScrollStory';

export function ScienceSection() {
  return (
    <ScrollStory className="relative overflow-hidden border-y border-white/8 bg-[#07080c] py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
        <div data-reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-blue-glow/80">Engineering</p>
          <h2 className="mt-3 font-display text-4xl text-white md:text-5xl">
            Two zones.
            <br />
            One tank.
          </h2>
          <p className="mt-5 max-w-md text-silver/75">
            Chest compression flattens contour. Core compression streamlines the midsection. Wear it.
            Forget it. Look sharper — without pads or fake muscle.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-silver/85">
            <li className="flex gap-3"><span className="text-blue-glow">◆</span> Targeted chest flattening under fitted shirts</li>
            <li className="flex gap-3"><span className="text-blue-glow">◆</span> Core smoothing without bulk</li>
            <li className="flex gap-3"><span className="text-blue-glow">◆</span> Invisible tank cut under polos and dress shirts</li>
            <li className="flex gap-3"><span className="text-blue-glow">◆</span> Zero foam. Zero gimmicks. Real compression.</li>
          </ul>
        </div>
        <Reveal variant="scale" className="relative h-[360px] overflow-hidden rounded-3xl border border-white/10 md:h-[480px]">
          <div data-parallax="0.12" className="absolute inset-0">
            <SceneCanvas className="h-full" camera={{ position: [0, 0, 2.2], fov: 40 }} dpr={[1, 1.25]}>
              <FabricCloseup tier="Elite" />
            </SceneCanvas>
          </div>
        </Reveal>
      </div>
    </ScrollStory>
  );
}
