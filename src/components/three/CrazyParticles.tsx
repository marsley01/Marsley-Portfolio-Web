"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  uniform float uTime;
  varying vec3 vColor;

  void main() {
    vColor = color;
    vec3 pos = position;
    
    // Apply the same flowing sine wave movement on GPU
    pos.x = position.x + sin(uTime + position.y * 0.3) * 1.5;
    pos.y = position.y + cos(uTime + position.z * 0.3) * 1.5;
    pos.z = position.z + sin(uTime + position.x * 0.3) * 1.5;
    
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    // Size attenuation: scale size based on distance
    gl_PointSize = 0.12 * 300.0 / -mvPosition.z;
  }
`;

const fragmentShader = `
  varying vec3 vColor;

  void main() {
    // Round particles
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;
    
    // Soft edges
    float alpha = smoothstep(0.5, 0.1, dist) * 0.8;
    gl_FragColor = vec4(vColor, alpha);
  }
`;

export default function CrazyParticles() {
  const ref = useRef<THREE.Points>(null);
  
  const count = 12000;

  const { positions, colors } = useMemo(() => {
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
      
      pos[i * 3] = finalX;
      pos[i * 3 + 1] = finalY;
      pos[i * 3 + 2] = finalZ;
      
      // Blue and White theme
      const r = Math.random();
      if (r < 0.4) color.setHSL(0.6, 0.9, 0.5); // Deep Blue
      else if (r < 0.8) color.setHSL(0.55, 0.9, 0.6); // Ice Blue
      else color.setHSL(0, 0, 1.0); // Pure White
      
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    
    return { positions: pos, colors: col };
  }, []);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 }
  }), []);

  useFrame((state) => {
    const time = state.clock.elapsedTime * 0.5;
    if (!ref.current) return;
    
    ref.current.rotation.y = time * 0.2;
    ref.current.rotation.x = Math.sin(time * 0.1) * 0.15;
    
    if (ref.current.material instanceof THREE.ShaderMaterial) {
      ref.current.material.uniforms.uTime.value = time;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors
      />
    </points>
  );
}
