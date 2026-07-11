'use client';

import { useFrame } from '@react-three/fiber';
import { Environment, ContactShadows, Float, MeshTransmissionMaterial } from '@react-three/drei';
import { useMemo, useRef, type ReactNode } from 'react';
import * as THREE from 'three';

type TankProps = {
  color?: string;
  autoRotate?: boolean;
  interactive?: boolean;
  scale?: number;
  showZones?: boolean;
  activeZone?: string | null;
};

function TankMesh({
  color = '#1a1a1c',
  autoRotate = true,
  interactive = true,
  scale = 1,
}: TankProps) {
  const group = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });

  const materials = useMemo(() => {
    const body = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(color),
      roughness: 0.42,
      metalness: 0.18,
      clearcoat: 0.55,
      clearcoatRoughness: 0.3,
      sheen: 0.4,
      sheenColor: new THREE.Color('#8eb6ff'),
      sheenRoughness: 0.6,
      envMapIntensity: 0.9,
    });
    const trim = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#c9ced8'),
      roughness: 0.25,
      metalness: 0.65,
      clearcoat: 0.8,
    });
    return { body, trim };
  }, [color]);

  useFrame((state, delta) => {
    if (!group.current) return;
    if (autoRotate) {
      group.current.rotation.y += delta * 0.28;
    }
    if (interactive) {
      const { x, y } = state.pointer;
      target.current.x = THREE.MathUtils.lerp(target.current.x, y * 0.18, 0.06);
      target.current.y = THREE.MathUtils.lerp(target.current.y, x * 0.35, 0.06);
      group.current.rotation.x = target.current.x;
      if (!autoRotate) group.current.rotation.y = target.current.y;
    }
  });

  return (
    <group ref={group} scale={scale} position={[0, -0.15, 0]}>
      {/* Torso / tank body */}
      <mesh castShadow receiveShadow material={materials.body}>
        <capsuleGeometry args={[0.42, 0.95, 12, 32]} />
      </mesh>
      {/* Neck opening */}
      <mesh position={[0, 0.78, 0]} material={materials.trim}>
        <torusGeometry args={[0.28, 0.035, 12, 48]} />
      </mesh>
      {/* Armholes */}
      <mesh position={[-0.4, 0.42, 0]} rotation={[0, 0, Math.PI / 2.4]} material={materials.trim}>
        <torusGeometry args={[0.18, 0.028, 10, 32]} />
      </mesh>
      <mesh position={[0.4, 0.42, 0]} rotation={[0, 0, -Math.PI / 2.4]} material={materials.trim}>
        <torusGeometry args={[0.18, 0.028, 10, 32]} />
      </mesh>
      {/* Compression panel suggestion */}
      <mesh position={[0, 0.28, 0.2]} scale={[0.72, 0.55, 0.08]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial
          color="#0d0d10"
          roughness={0.55}
          metalness={0.1}
          transparent
          opacity={0.55}
          sheen={0.5}
          sheenColor="#5b8cff"
        />
      </mesh>
      <mesh position={[0, -0.2, 0.2]} scale={[0.7, 0.42, 0.08]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial
          color="#101014"
          roughness={0.5}
          metalness={0.12}
          transparent
          opacity={0.45}
          sheen={0.4}
          sheenColor="#6ea0ff"
        />
      </mesh>
    </group>
  );
}

export function DynamicLights() {
  const light = useRef<THREE.SpotLight>(null);
  useFrame((state) => {
    if (!light.current) return;
    const t = state.clock.elapsedTime;
    light.current.position.x = Math.sin(t * 0.35) * 1.8;
    light.current.position.z = Math.cos(t * 0.35) * 1.6 + 1;
  });
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 4, 2]} intensity={1.1} color="#f2f4ff" />
      <spotLight
        ref={light}
        position={[1.5, 2.5, 2]}
        angle={0.45}
        penumbra={0.7}
        intensity={2.2}
        color="#6ea0ff"
        castShadow={false}
      />
      <pointLight position={[-2, 0.5, -1]} intensity={0.6} color="#9bb7ff" />
    </>
  );
}

export function FloatingTank(props: TankProps) {
  return (
    <>
      <DynamicLights />
      <Environment preset="city" environmentIntensity={0.45} />
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.35}>
        <TankMesh {...props} />
      </Float>
      <ContactShadows
        position={[0, -1.05, 0]}
        opacity={0.45}
        scale={6}
        blur={2.8}
        far={3}
        color="#000000"
      />
    </>
  );
}

export function RotatingProductTank(props: TankProps) {
  return <TankMesh autoRotate interactive {...props} />;
}

export function ProductStage({ children }: { children: ReactNode }) {
  return (
    <>
      <DynamicLights />
      <Environment preset="studio" environmentIntensity={0.55} />
      {children}
      <ContactShadows position={[0, -1.05, 0]} opacity={0.4} scale={5} blur={2.5} far={3} />
    </>
  );
}

export function FabricCloseup() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
    mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.05;
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[2, 3, 2]} intensity={1.4} color="#dfe7ff" />
      <spotLight position={[-2, 2, 3]} intensity={2} color="#6ea0ff" angle={0.5} penumbra={0.8} />
      <mesh ref={mesh} rotation={[-0.4, 0.3, 0.1]}>
        <planeGeometry args={[2.4, 2.4, 64, 64]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.25}
          chromaticAberration={0.02}
          anisotropy={0.2}
          distortion={0.1}
          distortionScale={0.2}
          temporalDistortion={0.05}
          color="#1b1d24"
          roughness={0.35}
        />
      </mesh>
    </>
  );
}

type HotspotMarkerProps = {
  position: [number, number, number];
  active?: boolean;
  onSelect?: () => void;
};

export function HotspotMarker({ position, active, onSelect }: HotspotMarkerProps) {
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
    >
      <sphereGeometry args={[0.045, 16, 16]} />
      <meshStandardMaterial
        color={active ? '#8eb6ff' : '#ffffff'}
        emissive={active ? '#3a6ff7' : '#666666'}
        emissiveIntensity={active ? 1.2 : 0.4}
        roughness={0.3}
        metalness={0.2}
      />
    </mesh>
  );
}
