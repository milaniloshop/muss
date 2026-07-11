'use client';

import dynamic from 'next/dynamic';
import { Suspense, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

const Canvas = dynamic(() => import('@react-three/fiber').then((m) => m.Canvas), {
  ssr: false,
  loading: () => <CanvasFallback />,
});

function CanvasFallback({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(58,111,247,0.12),_transparent_55%),linear-gradient(180deg,#050505_0%,#0c0c0f_100%)]',
        className,
      )}
      aria-hidden
    />
  );
}

type SceneCanvasProps = {
  children: ReactNode;
  className?: string;
  camera?: { position?: [number, number, number]; fov?: number };
  dpr?: number | [number, number];
};

export function SceneCanvas({
  children,
  className,
  camera = { position: [0, 0.1, 2.6], fov: 35 },
  dpr = [1, 1.5],
}: SceneCanvasProps) {
  return (
    <div className={cn('relative h-full w-full', className)}>
      <Suspense fallback={<CanvasFallback />}>
        <Canvas
          dpr={dpr}
          camera={camera}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
            stencil: false,
            depth: true,
          }}
          style={{ touchAction: 'none' }}
        >
          {children}
        </Canvas>
      </Suspense>
    </div>
  );
}
