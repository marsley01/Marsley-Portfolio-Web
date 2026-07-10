"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function CrazyParticles() {
  const ref = useRef<THREE.Points>(null);
  
  const count = 12000;

  const { basePositions, positions, colors } = useMemo(() => {
    const base = new Float32Array(count * 3);
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    
    const color = new THREE.Color();
    for (let i = 0; i < count; i++) {
      // Abstract torus knot-like distribution
      const u = Math.random() * Math.PI * 2;
      const v = Math.random() * Math.PI * 2;
      
      // Torus knot math parameters
      const p = 3;
      const q = 4;
      const r1 = 12 + 3 * Math.cos(q * u); // Tube radius
      
      const baseX = r1 * Math.cos(p * u);
      const baseY = r1 * Math.sin(p * u);
      const baseZ = 4 * Math.sin(q * u) + 2 * Math.sin(v);
      
      // Scatter points around the knot for a nebula effect
      const scatter = 4.0;
      const rx = (Math.random() - 0.5) * scatter;
      const ry = (Math.random() - 0.5) * scatter;
      const rz = (Math.random() - 0.5) * scatter;
      
      const finalX = baseX + rx;
      const finalY = baseY + ry;
      const finalZ = baseZ + rz;
      
      base[i * 3] = finalX;
      base[i * 3 + 1] = finalY;
      base[i * 3 + 2] = finalZ;
      
      pos[i * 3] = finalX;
      pos[i * 3 + 1] = finalY;
      pos[i * 3 + 2] = finalZ;
      
      // Cyberpunk / Outrun colors
      const r = Math.random();
      if (r < 0.3) color.setHSL(0.55, 0.9, 0.6); // Cyan
      else if (r < 0.7) color.setHSL(0.75, 0.9, 0.6); // Purple
      else color.setHSL(0.95, 0.9, 0.6); // Pink
      
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    
    return { basePositions: base, positions: pos, colors: col };
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime * 0.5;
    if (!ref.current) return;
    
    ref.current.rotation.y = time * 0.2;
    ref.current.rotation.x = Math.sin(time * 0.1) * 0.15;
    
    const posAttr = ref.current.geometry.attributes.position;
    const pos = posAttr.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const bx = basePositions[i3];
      const by = basePositions[i3 + 1];
      const bz = basePositions[i3 + 2];
      
      // Crazy flowing sine waves math
      pos[i3] = bx + Math.sin(time + by * 0.3) * 1.5;
      pos[i3 + 1] = by + Math.cos(time + bz * 0.3) * 1.5;
      pos[i3 + 2] = bz + Math.sin(time + bx * 0.3) * 1.5;
    }
    
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
