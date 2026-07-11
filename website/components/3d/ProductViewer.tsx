'use client';

import { useMemo, useState } from 'react';
import { OrbitControls } from '@react-three/drei';
import { SceneCanvas } from '@/components/3d/SceneCanvas';
import {
  HotspotMarker,
  ProductStage,
  RotatingProductTank,
} from '@/components/3d/CompressionTank';
import type { CompressionZone, Product } from '@/types';
import { cn } from '@/lib/cn';
import { motion, AnimatePresence } from 'framer-motion';

type ProductViewerProps = {
  product: Product;
  className?: string;
};

export function ProductViewer({ product, className }: ProductViewerProps) {
  const [activeZone, setActiveZone] = useState<CompressionZone | null>(
    product.compressionZones[0] ?? null,
  );
  const [mode, setMode] = useState<'rotate' | 'zones' | 'fabric'>('rotate');
  const color = product.colorOptions[0]?.hex ?? '#1a1a1c';

  const zones = useMemo(() => product.compressionZones, [product.compressionZones]);

  return (
    <div className={cn('relative overflow-hidden rounded-3xl border border-white/10 bg-charcoal/80', className)}>
      <div className="absolute left-4 top-4 z-10 flex gap-2">
        {(['rotate', 'zones', 'fabric'] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={cn(
              'rounded-full px-3 py-1.5 text-xs uppercase tracking-[0.14em] transition',
              mode === m ? 'bg-white text-black' : 'bg-white/8 text-silver hover:bg-white/14',
            )}
          >
            {m === 'rotate' ? '360°' : m === 'zones' ? 'Zones' : 'Fabric'}
          </button>
        ))}
      </div>

      <div className="h-[min(70vh,640px)] w-full">
        <SceneCanvas camera={{ position: [0, 0.15, 2.8], fov: 34 }} dpr={[1, 1.75]}>
          <ProductStage>
            <RotatingProductTank
              color={color}
              autoRotate={mode === 'rotate'}
              interactive
              scale={mode === 'fabric' ? 1.35 : 1}
            />
            {mode === 'zones' &&
              zones.map((zone) => (
                <HotspotMarker
                  key={zone.id}
                  position={[zone.position.x, zone.position.y, zone.position.z]}
                  active={activeZone?.id === zone.id}
                  onSelect={() => setActiveZone(zone)}
                />
              ))}
          </ProductStage>
          <OrbitControls
            enablePan={false}
            minDistance={1.8}
            maxDistance={4}
            enableZoom={mode === 'fabric'}
            autoRotate={mode === 'rotate'}
            autoRotateSpeed={0.6}
          />
        </SceneCanvas>
      </div>

      <AnimatePresence mode="wait">
        {mode === 'zones' && activeZone && (
          <motion.div
            key={activeZone.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-black/55 p-4 backdrop-blur-xl"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-blue-glow/90">Compression zone</p>
            <h3 className="mt-1 font-display text-xl text-white">{activeZone.label}</h3>
            <p className="mt-1 text-sm text-silver/90">{activeZone.description}</p>
          </motion.div>
        )}
        {mode === 'fabric' && (
          <motion.div
            key="fabric"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-black/55 p-4 backdrop-blur-xl"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-blue-glow/90">Fabric zoom</p>
            <h3 className="mt-1 font-display text-xl text-white">{product.fabric}</h3>
            <p className="mt-1 text-sm text-silver/90">{product.fit}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
