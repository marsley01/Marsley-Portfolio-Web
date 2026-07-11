"use client";

import { Canvas, type CanvasProps } from "@react-three/fiber";
import { AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";
import { Suspense } from "react";

interface ThreeCanvasProps extends CanvasProps {
  children: React.ReactNode;
}

export default function ThreeCanvas({ children, ...props }: ThreeCanvasProps) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        stencil: false,
        depth: true,
      }}
      camera={{ position: [0, 0, 8], fov: 45, near: 0.1, far: 100 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
      {...props}
    >
      <AdaptiveDpr />
      <AdaptiveEvents />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <directionalLight position={[-5, -5, -5]} intensity={0.3} />
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
}
