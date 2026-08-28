"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import MilkyGalaxy from "./MilkyGalaxy";

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl") || canvas.getContext("webgl2"));
  } catch {
    return false;
  }
}

export default function MilkyGalaxyBackground() {
  if (typeof window !== "undefined" && !hasWebGL()) return null;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 hidden dark:block">
      <Canvas
        camera={{ position: [0, 6, 10], fov: 50, near: 0.1, far: 80 }}
        gl={{
          antialias: false,
          alpha: false,
          powerPreference: "high-performance",
          stencil: false,
          depth: false,
        }}
        dpr={1}
        frameloop="always"
        style={{ background: "#000000" }}
      >
        <Suspense fallback={null}>
          <MilkyGalaxy />
        </Suspense>
      </Canvas>
    </div>
  );
}
