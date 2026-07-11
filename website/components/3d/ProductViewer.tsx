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

const TIER_ACCENT: Record<string, string> = {
  Essential: '#9aa3b5',
  Pro: '#6ea0ff',
  Elite: '#4fd1c5',
  Signature: '#d4af37',
};

export function ProductViewer({ product, className }: ProductViewerProps) {
  const [activeZone, setActiveZone] = useState<CompressionZone | null>(
    product.compressionZones[0] ?? null,
  );
  const [mode, setMode] = useState<'rotate' | 'zones' | 'fabric'>('rotate');
  const [colorId, setColorId] = useState(product.colorOptions[0]?.id ?? 'black');
  const color =
    product.colorOptions.find((c) => c.id === colorId)?.hex ??
    product.colorOptions[0]?.hex ??
    '#1a1a1c';
  const accent = TIER_ACCENT[product.tier] ?? '#6ea0ff';
  const zones = useMemo(() => product.compressionZones, [product.compressionZones]);

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-3xl border border-white/10 bg-charcoal',
        className,
      )}
    >
      <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2">
        {(['rotate', 'zones', 'fabric'] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={cn(
              'min-h-11 cursor-pointer rounded-full px-4 py-2 text-xs uppercase tracking-[0.14em] transition duration-200',
              mode === m ? 'bg-accent text-black' : 'bg-white/8 text-silver hover:bg-white/14',
            )}
          >
            {m === 'rotate' ? '360°' : m === 'zones' ? 'Zones' : 'Fabric'}
          </button>
        ))}
      </div>

      <div className="absolute right-4 top-4 z-10 flex gap-2">
        {product.colorOptions.map((c) => (
          <button
            key={c.id}
            type="button"
            aria-label={c.name}
            onClick={() => setColorId(c.id)}
            className={cn(
              'h-11 w-11 cursor-pointer rounded-full border-2 transition duration-200',
              colorId === c.id ? 'border-accent scale-105' : 'border-white/20',
            )}
            style={{ backgroundColor: c.hex }}
          />
        ))}
      </div>

      <div className="h-[min(70vh,640px)] w-full">
        <SceneCanvas camera={{ position: [0, 0.12, 2.65], fov: 42 }} dpr={[1, 1.75]}>
          <ProductStage tier={product.tier}>
            <RotatingProductTank
              tier={product.tier}
              color={color}
              autoRotate={mode === 'rotate'}
              interactive
              scale={mode === 'fabric' ? 1.4 : 1.05}
            />
            {mode === 'zones' &&
              zones.map((zone) => (
                <HotspotMarker
                  key={zone.id}
                  position={[zone.position.x, zone.position.y, zone.position.z]}
                  active={activeZone?.id === zone.id}
                  accent={accent}
                  onSelect={() => setActiveZone(zone)}
                />
              ))}
          </ProductStage>
          <OrbitControls
            enablePan={false}
            enableDamping
            dampingFactor={0.06}
            minDistance={1.7}
            maxDistance={4}
            enableZoom={mode === 'fabric'}
            autoRotate={mode === 'rotate'}
            autoRotateSpeed={0.55}
          />
        </SceneCanvas>
      </div>

      <p className="absolute left-4 top-20 z-10 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-silver/80 backdrop-blur-md">
        {product.tier} model
      </p>

      <AnimatePresence mode="wait">
        {mode === 'zones' && activeZone && (
          <motion.div
            key={activeZone.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-xl"
          >
            <p className="text-xs uppercase tracking-[0.18em]" style={{ color: accent }}>
              Compression zone
            </p>
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
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-xl"
          >
            <p className="text-xs uppercase tracking-[0.18em]" style={{ color: accent }}>
              Fabric zoom
            </p>
            <h3 className="mt-1 font-display text-xl text-white">{product.fabric}</h3>
            <p className="mt-1 text-sm text-silver/90">{product.fit}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
