'use client';

import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import type { ProductTier } from '@/types';

export type TankModelProps = {
  tier: ProductTier;
  color?: string;
  autoRotate?: boolean;
  interactive?: boolean;
  scale?: number;
};

type TierLook = {
  bodyRoughness: number;
  bodyMetalness: number;
  clearcoat: number;
  sheen: number;
  sheenColor: string;
  trimColor: string;
  accentColor: string;
  panelOpacity: number;
  chestScale: [number, number, number];
  coreScale: [number, number, number];
  showGoldThread: boolean;
  showDualChest: boolean;
  showCoolingVeins: boolean;
  bodyRadius: number;
  bodyLength: number;
};

const LOOKS: Record<ProductTier, TierLook> = {
  Essential: {
    bodyRoughness: 0.55,
    bodyMetalness: 0.08,
    clearcoat: 0.25,
    sheen: 0.25,
    sheenColor: '#9aa3b5',
    trimColor: '#a8aeb8',
    accentColor: '#3a4558',
    panelOpacity: 0.4,
    chestScale: [0.68, 0.48, 0.06],
    coreScale: [0.66, 0.38, 0.06],
    showGoldThread: false,
    showDualChest: false,
    showCoolingVeins: false,
    bodyRadius: 0.4,
    bodyLength: 0.92,
  },
  Pro: {
    bodyRoughness: 0.38,
    bodyMetalness: 0.16,
    clearcoat: 0.5,
    sheen: 0.45,
    sheenColor: '#8eb6ff',
    trimColor: '#c9ced8',
    accentColor: '#5b8cff',
    panelOpacity: 0.55,
    chestScale: [0.74, 0.56, 0.09],
    coreScale: [0.7, 0.42, 0.08],
    showGoldThread: false,
    showDualChest: true,
    showCoolingVeins: false,
    bodyRadius: 0.42,
    bodyLength: 0.95,
  },
  Elite: {
    bodyRoughness: 0.28,
    bodyMetalness: 0.22,
    clearcoat: 0.7,
    sheen: 0.65,
    sheenColor: '#7ec8ff',
    trimColor: '#d7dde8',
    accentColor: '#4fd1c5',
    panelOpacity: 0.62,
    chestScale: [0.76, 0.58, 0.1],
    coreScale: [0.72, 0.46, 0.09],
    showGoldThread: false,
    showDualChest: true,
    showCoolingVeins: true,
    bodyRadius: 0.41,
    bodyLength: 1.02,
  },
  Signature: {
    bodyRoughness: 0.22,
    bodyMetalness: 0.32,
    clearcoat: 0.85,
    sheen: 0.75,
    sheenColor: '#d4af37',
    trimColor: '#e8d5a3',
    accentColor: '#c9a227',
    panelOpacity: 0.7,
    chestScale: [0.78, 0.6, 0.11],
    coreScale: [0.74, 0.48, 0.1],
    showGoldThread: true,
    showDualChest: true,
    showCoolingVeins: false,
    bodyRadius: 0.43,
    bodyLength: 1.05,
  },
};

function sharedMaterials(color: string, look: TierLook) {
  const body = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(color),
    roughness: look.bodyRoughness,
    metalness: look.bodyMetalness,
    clearcoat: look.clearcoat,
    clearcoatRoughness: Math.max(0.12, look.bodyRoughness * 0.5),
    sheen: look.sheen,
    sheenColor: new THREE.Color(look.sheenColor),
    sheenRoughness: 0.45,
    envMapIntensity: 1.05,
  });
  const trim = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(look.trimColor),
    roughness: 0.22,
    metalness: 0.72,
    clearcoat: 0.9,
  });
  const accent = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(look.accentColor),
    roughness: 0.3,
    metalness: 0.55,
    emissive: new THREE.Color(look.accentColor),
    emissiveIntensity: 0.18,
  });
  const panel = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#0c0c10'),
    roughness: 0.5,
    metalness: 0.12,
    transparent: true,
    opacity: look.panelOpacity,
    sheen: 0.5,
    sheenColor: new THREE.Color(look.sheenColor),
  });
  return { body, trim, accent, panel };
}

/**
 * Distinct procedural tank silhouette per CoreFit tier.
 * Essential → matte daily · Pro → reinforced · Elite → cooling map · Signature → gold-thread luxury
 */
export function TierTankMesh({
  tier,
  color = '#1a1a1c',
  autoRotate = true,
  interactive = true,
  scale = 1,
}: TankModelProps) {
  const group = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });
  const look = LOOKS[tier];
  const materials = useMemo(() => sharedMaterials(color, look), [color, look]);

  useFrame((state, delta) => {
    if (!group.current) return;
    if (autoRotate) group.current.rotation.y += delta * (tier === 'Signature' ? 0.22 : 0.3);
    if (interactive) {
      const { x, y } = state.pointer;
      target.current.x = THREE.MathUtils.lerp(target.current.x, y * 0.16, 0.07);
      target.current.y = THREE.MathUtils.lerp(target.current.y, x * 0.32, 0.07);
      group.current.rotation.x = target.current.x;
      if (!autoRotate) group.current.rotation.y = target.current.y;
      document.body.style.cursor = 'grab';
    }
  });

  return (
    <group
      ref={group}
      scale={scale}
      position={[0, -0.12, 0]}
      onPointerOver={() => {
        document.body.style.cursor = 'grab';
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'auto';
      }}
    >
      {/* Body */}
      <mesh castShadow receiveShadow material={materials.body}>
        <capsuleGeometry args={[look.bodyRadius, look.bodyLength, 16, 48]} />
      </mesh>

      {/* Contoured taper rings — more refined on Elite/Signature */}
      {(tier === 'Elite' || tier === 'Signature') && (
        <>
          <mesh position={[0, 0.55, 0]} material={materials.trim}>
            <torusGeometry args={[look.bodyRadius * 0.92, 0.012, 10, 48]} />
          </mesh>
          <mesh position={[0, -0.35, 0]} material={materials.trim}>
            <torusGeometry args={[look.bodyRadius * 0.95, 0.012, 10, 48]} />
          </mesh>
        </>
      )}

      {/* Neck */}
      <mesh position={[0, look.bodyLength * 0.52 + look.bodyRadius * 0.55, 0]} material={materials.trim}>
        <torusGeometry args={[0.27, tier === 'Essential' ? 0.028 : 0.036, 12, 48]} />
      </mesh>

      {/* Armholes */}
      <mesh
        position={[-look.bodyRadius * 0.95, 0.42, 0]}
        rotation={[0, 0, Math.PI / 2.35]}
        material={materials.trim}
      >
        <torusGeometry args={[0.17, 0.026, 10, 36]} />
      </mesh>
      <mesh
        position={[look.bodyRadius * 0.95, 0.42, 0]}
        rotation={[0, 0, -Math.PI / 2.35]}
        material={materials.trim}
      >
        <torusGeometry args={[0.17, 0.026, 10, 36]} />
      </mesh>

      {/* Chest compression panel */}
      <mesh position={[0, 0.3, look.bodyRadius * 0.48]} scale={look.chestScale}>
        <boxGeometry args={[1, 1, 1]} />
        <primitive object={materials.panel} attach="material" />
      </mesh>

      {/* Pro+ dual chest reinforcement */}
      {look.showDualChest && (
        <mesh position={[0, 0.38, look.bodyRadius * 0.52]} scale={[look.chestScale[0] * 0.78, 0.22, 0.05]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshPhysicalMaterial
            color="#08080c"
            roughness={0.35}
            metalness={0.2}
            transparent
            opacity={0.65}
            sheen={0.6}
            sheenColor={look.sheenColor}
          />
        </mesh>
      )}

      {/* Core zone */}
      <mesh position={[0, -0.18, look.bodyRadius * 0.48]} scale={look.coreScale}>
        <boxGeometry args={[1, 1, 1]} />
        <primitive object={materials.panel} attach="material" />
      </mesh>

      {/* Elite cooling yarn veins */}
      {look.showCoolingVeins &&
        [-0.18, 0, 0.18].map((x) => (
          <mesh key={x} position={[x, 0.05, look.bodyRadius * 0.55]} rotation={[0.1, 0, 0]}>
            <capsuleGeometry args={[0.012, 0.55, 4, 8]} />
            <primitive object={materials.accent} attach="material" />
          </mesh>
        ))}

      {/* Signature 24K gold-thread interior seam */}
      {look.showGoldThread && (
        <>
          <mesh position={[look.bodyRadius * 0.55, 0.05, 0.05]} rotation={[0, 0, 0.08]}>
            <capsuleGeometry args={[0.008, 0.95, 4, 8]} />
            <primitive object={materials.accent} attach="material" />
          </mesh>
          <mesh position={[0, -0.55, look.bodyRadius * 0.35]}>
            <torusGeometry args={[0.22, 0.01, 8, 32]} />
            <primitive object={materials.accent} attach="material" />
          </mesh>
        </>
      )}

      {/* Side seamless panels — Pro+ */}
      {(tier === 'Pro' || tier === 'Elite' || tier === 'Signature') && (
        <>
          <mesh position={[-look.bodyRadius * 0.85, 0.05, 0.05]} rotation={[0, 0.4, 0]} scale={[0.08, 0.7, 0.35]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshPhysicalMaterial color="#101018" roughness={0.45} metalness={0.15} transparent opacity={0.5} />
          </mesh>
          <mesh position={[look.bodyRadius * 0.85, 0.05, 0.05]} rotation={[0, -0.4, 0]} scale={[0.08, 0.7, 0.35]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshPhysicalMaterial color="#101018" roughness={0.45} metalness={0.15} transparent opacity={0.5} />
          </mesh>
        </>
      )}
    </group>
  );
}

export function getHeroTier(): ProductTier {
  return 'Signature';
}
