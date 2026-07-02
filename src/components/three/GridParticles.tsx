"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const COLS = 70;
const ROWS = 70;
const SPACING = 0.28;
const N = COLS * ROWS;

export default function GridParticles() {
  const ref = useRef<THREE.Points>(null);
  const { camera, pointer } = useThree();
  const raycaster = useRef(new THREE.Raycaster());
  const plane = useRef(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0));
  const hit = useRef(new THREE.Vector3());
  const mx = useRef(0);
  const mz = useRef(0);
  const ndc = useRef(new THREE.Vector2());

  const { positions, colors, bx, bz } = useMemo(() => {
    const pos = new Float32Array(N * 3);
    const col = new Float32Array(N * 3);
    const bx = new Float32Array(N);
    const bz = new Float32Array(N);
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        const id = i * COLS + j;
        bx[id] = (j - COLS * 0.5) * SPACING;
        bz[id] = (i - ROWS * 0.5) * SPACING;
      }
    }
    return { positions: pos, colors: col, bx, bz };
  }, []);

  useFrame((state) => {
    const elapsed = state.clock.elapsedTime;
    const pts = ref.current;
    if (!pts) return;

    const pos = pts.geometry.attributes.position.array as Float32Array;
    const col = pts.geometry.attributes.color.array as Float32Array;

    ndc.current.set(pointer.x, pointer.y);
    raycaster.current.setFromCamera(ndc.current, camera);
    if (raycaster.current.ray.intersectPlane(plane.current, hit.current)) {
      mx.current += (hit.current.x - mx.current) * 0.055;
      mz.current += (hit.current.z - mz.current) * 0.055;
    }

    const valleyR = 0.102;
    const valleyG = 0.0;
    const valleyB = 0.376;
    const peakR = 0.0;
    const peakG = 0.784;
    const peakB = 0.588;

    for (let i = 0; i < N; i++) {
      const x = bx[i];
      const z = bz[i];

      const w1 = Math.sin(x * 0.72 + elapsed * 0.55) * 0.38;
      const w2 = Math.sin(z * 0.58 + elapsed * 0.44) * 0.32;
      const w3 = Math.sin((x + z) * 0.43 + elapsed * 0.34) * 0.24;
      const w4 = Math.cos(x * 0.33 - z * 0.48 + elapsed * 0.27) * 0.16;

      const dx = x - mx.current;
      const dz = z - mz.current;
      const d2 = dx * dx + dz * dz;
      let ripple = 0;
      if (d2 < 64) {
        const d = Math.sqrt(d2);
        ripple = (1 - d / 8) * Math.sin(d * 2.5 - elapsed * 7) * 1.0;
      }

      const y = w1 + w2 + w3 + w4 + ripple;
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      const t = Math.max(0, Math.min(1, (y + 1.1) / 2.0));
      col[i * 3] = (1 - t) * valleyR + t * peakR;
      col[i * 3 + 1] = (1 - t) * valleyG + t * peakG;
      col[i * 3 + 2] = (1 - t) * valleyB + t * peakB;
    }

    const posAttr = pts.geometry.attributes.position as THREE.BufferAttribute;
    const colAttr = pts.geometry.attributes.color as THREE.BufferAttribute;
    posAttr.needsUpdate = true;
    colAttr.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
