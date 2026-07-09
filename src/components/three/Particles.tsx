"use client";

import { useMemo, useRef, type MutableRefObject } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function seedRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface ParticlesProps {
  count?: number;
  color?: string;
  mouse: MutableRefObject<{ x: number; y: number }>;
}

export default function Particles({ count = 200, color = "#0071e3", mouse }: ParticlesProps) {
  const mesh = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const rng = seedRandom(42);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (rng() - 0.5) * viewport.width * 3;
      pos[i * 3 + 1] = (rng() - 0.5) * viewport.height * 3;
      pos[i * 3 + 2] = (rng() - 0.5) * 6;
    }
    return pos;
  }, [count, viewport]);

  const speeds = useMemo(() => {
    const s = new Float32Array(count);
    const rng = seedRandom(42);
    for (let i = 0; i < count; i++) s[i] = 0.2 + rng() * 0.5;
    return s;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    const ptr = mesh.current.geometry.attributes.position as THREE.BufferAttribute;
    const array = ptr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      array[idx + 1] += Math.sin(state.clock.elapsedTime * speeds[i] + i) * 0.002;
      array[idx] += Math.cos(state.clock.elapsedTime * speeds[i] * 0.7 + i * 0.5) * 0.002;
    }
    ptr.needsUpdate = true;

    const mx = mouse.current.x;
    const my = mouse.current.y;
    mesh.current.rotation.x += (my * 0.0001 - mesh.current.rotation.x) * 0.02;
    mesh.current.rotation.y += (mx * 0.0001 - mesh.current.rotation.y) * 0.02;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color={color}
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={2}
      />
    </points>
  );
}
