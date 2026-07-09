"use client";

import { useRef, useCallback } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface PlanetDef {
  size: number;
  color: string;
  orbit: number;
  speed: number;
  tilt: number;
  rings?: boolean;
}

interface ShootingStar {
  line: THREE.Line;
  dir: THREE.Vector3;
  speed: number;
  life: number;
}

const PLANET_DEFS: PlanetDef[] = [
  { size: 0.15, color: "#2563eb", orbit: 2.5, speed: 1.5, tilt: 0.05 },
  { size: 0.25, color: "#94a3b8", orbit: 4.0, speed: 0.8, tilt: 0.12, rings: true },
  { size: 0.18, color: "#0f172a", orbit: 6.0, speed: 0.5, tilt: 0.20 },
];

function Planet({ size, color, orbit, speed, tilt, rings }: PlanetDef) {
  const pivotRef = useRef<THREE.Object3D>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, dt) => {
    if (pivotRef.current) pivotRef.current.rotation.y += speed * dt;
    if (meshRef.current) meshRef.current.rotation.y += dt;
  });

  return (
    <object3D ref={pivotRef} rotation={[tilt, 0, 0]}>
      <mesh ref={meshRef} position={[orbit, 0, 0]}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshPhongMaterial color={color} shininess={50} />
        {rings && (
          <mesh rotation={[Math.PI / 2.2, 0, 0]}>
            <ringGeometry args={[size * 1.5, size * 2.5, 64]} />
            <meshBasicMaterial color={color} side={THREE.DoubleSide} transparent opacity={0.4} />
          </mesh>
        )}
      </mesh>
    </object3D>
  );
}

export default function SolarSystem({ isDark }: { isDark: boolean }) {
  const sunRef = useRef<THREE.Mesh>(null);
  const starsRef = useRef<ShootingStar[]>([]);
  const timerRef = useRef(0);
  const groupRef = useRef<THREE.Group>(null);

  const orbitColor = isDark ? "#ffffff" : "#0f172a";
  const orbitOpacity = isDark ? 0.12 : 0.08;
  const starColor = isDark ? 0x3b82f6 : 0x2563eb;

  const spawn = useCallback(() => {
    const origin = new THREE.Vector3(
      (Math.random() - 0.5) * 40,
      6 + Math.random() * 10,
      (Math.random() - 0.5) * 20
    );
    const dir = new THREE.Vector3(-0.8, -0.5, 0).normalize();
    const len = 2.5 + Math.random() * 2;

    const points = [origin.clone(), origin.clone().addScaledVector(dir, len)];
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    const mat = new THREE.LineBasicMaterial({ color: starColor, transparent: true, opacity: 1 });
    const line = new THREE.Line(geo, mat);

    if (groupRef.current) groupRef.current.add(line);
    starsRef.current.push({ line, dir, speed: 0.6 + Math.random() * 0.8, life: 1.0 });
  }, [starColor]);

  useFrame((state, dt) => {
    const elapsed = state.clock.elapsedTime;

    if (sunRef.current) {
      const s = 1 + Math.sin(elapsed * 2) * 0.03;
      sunRef.current.scale.setScalar(s);
      sunRef.current.rotation.y += dt * 0.5;
    }

    timerRef.current += dt;
    if (timerRef.current > 1.5) {
      spawn();
      timerRef.current = 0;
    }

    const stars = starsRef.current;
    for (let i = stars.length - 1; i >= 0; i--) {
      const s = stars[i];
      s.life -= dt * 1.2;
      (s.line.material as THREE.LineBasicMaterial).opacity = Math.max(0, s.life);
      s.line.position.addScaledVector(s.dir, s.speed * dt * 60);
      if (s.life <= 0) {
        if (groupRef.current) groupRef.current.remove(s.line);
        s.line.geometry.dispose();
        (s.line.material as THREE.LineBasicMaterial).dispose();
        stars.splice(i, 1);
      }
    }
  });

  return (
    <group ref={groupRef} position={[0, 3.5, -4]}>
      <pointLight intensity={2.5} distance={100} color="#2563eb" />
      <mesh ref={sunRef}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial color="#1e3a8a" />
        <mesh>
          <sphereGeometry args={[1.0, 32, 32]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.35} />
        </mesh>
      </mesh>

      {PLANET_DEFS.map((d, i) => (
        <Planet key={i} {...d} />
      ))}

      {PLANET_DEFS.map((d, i) => (
        <mesh key={`orbit-${i}`} rotation={[Math.PI / 2, 0, d.tilt * 0.5]}>
          <ringGeometry args={[d.orbit - 0.015, d.orbit + 0.015, 128]} />
          <meshBasicMaterial color={orbitColor} side={THREE.DoubleSide} transparent opacity={orbitOpacity} />
        </mesh>
      ))}
    </group>
  );
}
