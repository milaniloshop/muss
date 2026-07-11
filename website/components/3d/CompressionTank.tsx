'use client';

import { useFrame } from '@react-three/fiber';
import { Environment, ContactShadows, Float, MeshTransmissionMaterial } from '@react-three/drei';
import { useRef, type ReactNode } from 'react';
import * as THREE from 'three';
import type { ProductTier } from '@/types';
import { TierTankMesh, type TankModelProps } from '@/components/3d/TierTankModels';

export type TankProps = TankModelProps;

export function DynamicLights({ accent = '#6ea0ff' }: { accent?: string }) {
  const light = useRef<THREE.SpotLight>(null);
  useFrame((state) => {
    if (!light.current) return;
    const t = state.clock.elapsedTime;
    light.current.position.x = Math.sin(t * 0.35) * 1.8;
    light.current.position.z = Math.cos(t * 0.35) * 1.6 + 1;
  });
  return (
    <>
      <ambientLight intensity={0.38} />
      <directionalLight position={[3, 4, 2]} intensity={1.15} color="#f2f4ff" />
      <spotLight
        ref={light}
        position={[1.5, 2.5, 2]}
        angle={0.45}
        penumbra={0.7}
        intensity={2.35}
        color={accent}
        castShadow={false}
      />
      <pointLight position={[-2, 0.5, -1]} intensity={0.65} color="#9bb7ff" />
    </>
  );
}

const TIER_LIGHT: Record<ProductTier, string> = {
  Essential: '#9aa3b5',
  Pro: '#6ea0ff',
  Elite: '#4fd1c5',
  Signature: '#d4af37',
};

export function FloatingTank(props: TankProps) {
  const tier = props.tier ?? 'Pro';
  return (
    <>
      <DynamicLights accent={TIER_LIGHT[tier]} />
      <Environment preset="city" environmentIntensity={0.5} />
      <Float speed={1.15} rotationIntensity={0.12} floatIntensity={0.32}>
        <TierTankMesh {...props} tier={tier} />
      </Float>
      <ContactShadows
        position={[0, -1.08, 0]}
        opacity={0.48}
        scale={6}
        blur={2.8}
        far={3}
        color="#0a0a0a"
      />
    </>
  );
}

export function RotatingProductTank(props: TankProps) {
  return <TierTankMesh autoRotate interactive {...props} />;
}

export function ProductStage({
  children,
  tier = 'Pro',
}: {
  children: ReactNode;
  tier?: ProductTier;
}) {
  return (
    <>
      <DynamicLights accent={TIER_LIGHT[tier]} />
      <Environment preset="studio" environmentIntensity={0.6} />
      {children}
      <ContactShadows position={[0, -1.08, 0]} opacity={0.42} scale={5} blur={2.5} far={3} color="#0a0a0a" />
    </>
  );
}

export function FabricCloseup({ tier = 'Elite' }: { tier?: ProductTier }) {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
    mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.05;
  });
  const color = tier === 'Signature' ? '#2a2418' : tier === 'Elite' ? '#14201f' : '#1b1d24';

  return (
    <>
      <ambientLight intensity={0.42} />
      <directionalLight position={[2, 3, 2]} intensity={1.45} color="#dfe7ff" />
      <spotLight
        position={[-2, 2, 3]}
        intensity={2.1}
        color={TIER_LIGHT[tier]}
        angle={0.5}
        penumbra={0.8}
      />
      <mesh ref={mesh} rotation={[-0.4, 0.3, 0.1]}>
        <planeGeometry args={[2.4, 2.4, 64, 64]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.28}
          chromaticAberration={0.025}
          anisotropy={0.25}
          distortion={0.12}
          distortionScale={0.22}
          temporalDistortion={0.05}
          color={color}
          roughness={0.32}
        />
      </mesh>
    </>
  );
}

type HotspotMarkerProps = {
  position: [number, number, number];
  active?: boolean;
  onSelect?: () => void;
  accent?: string;
};

export function HotspotMarker({
  position,
  active,
  onSelect,
  accent = '#8eb6ff',
}: HotspotMarkerProps) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const s = 1 + Math.sin(state.clock.elapsedTime * 2.2) * 0.08;
    ref.current.scale.setScalar(active ? s * 1.15 : s);
  });
  return (
    <mesh
      ref={ref}
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        onSelect?.();
      }}
      onPointerOver={() => {
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'auto';
      }}
    >
      <sphereGeometry args={[0.045, 16, 16]} />
      <meshStandardMaterial
        color={active ? accent : '#ffffff'}
        emissive={active ? accent : '#666666'}
        emissiveIntensity={active ? 1.25 : 0.4}
        roughness={0.3}
        metalness={0.25}
      />
    </mesh>
  );
}
