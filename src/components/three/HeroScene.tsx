"use client";

import { useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import ThreeCanvas from "./ThreeCanvas";
import GridParticles from "./GridParticles";

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl") || canvas.getContext("webgl2"));
  } catch {
    return false;
  }
}

function isMobile(): boolean {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

function SceneContent() {
  const { scene, camera } = useThree();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    scene.fog = new THREE.FogExp2("#080808", 0.024);
    camera.position.set(0, 12, 17);
    if (camera instanceof THREE.PerspectiveCamera) {
      // eslint-disable-next-line react-hooks/immutability
      camera.fov = 50;
    }
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, -1);

    return () => { scene.fog = null; };
  }, [scene, camera]);

  return (
    <>
      <GridParticles />
    </>
  );
}

export default function HeroScene() {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) return null;
  if (typeof window !== "undefined" && (!hasWebGL() || isMobile())) return null;

  return (
    <ThreeCanvas
      camera={{ position: [0, 12, 17], fov: 50, near: 0.1, far: 150 }}
    >
      <SceneContent />
    </ThreeCanvas>
  );
}
