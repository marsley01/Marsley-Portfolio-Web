"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const MilkyGalaxy = () => {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const count = 4000;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const arms = 4;
    const radius = 6;
    const spin = 1.0;
    const randomness = 0.25;
    const power = 3.0;

    const coreColor = new THREE.Color("#c8d8ff");
    const midColor = new THREE.Color("#5b8def");

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const r = Math.pow(Math.random(), power) * radius;
      const armAngle = ((i % arms) * (2 * Math.PI)) / arms;
      const spinAngle = r * spin;

      const randX = (Math.random() - 0.5) * randomness * r * 0.5;
      const randY = (Math.random() - 0.5) * randomness * r * 0.2;
      const randZ = (Math.random() - 0.5) * randomness * r * 0.5;

      pos[i3] = Math.cos(armAngle + spinAngle) * r + randX;
      pos[i3 + 1] = randY;
      pos[i3 + 2] = Math.sin(armAngle + spinAngle) * r + randZ;

      const t = r / radius;
      const color = new THREE.Color();

      if (t < 0.15) {
        color.copy(coreColor);
      } else if (t < 0.4) {
        color.lerpColors(coreColor, midColor, (t - 0.15) / 0.25);
      } else {
        color.copy(midColor);
        color.lerp(new THREE.Color("#1a1a2e"), (t - 0.4) / 0.6);
      }

      const brightness = 0.6 + Math.random() * 0.4;
      col[i3] = color.r * brightness;
      col[i3 + 1] = color.g * brightness;
      col[i3 + 2] = color.b * brightness;
    }

    return { positions: pos, colors: col };
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0003;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        depthTest={false}
        sizeAttenuation
      />
    </points>
  );
};

export default MilkyGalaxy;
