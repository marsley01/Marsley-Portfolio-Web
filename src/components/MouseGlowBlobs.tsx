"use client";

import { useRef, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

export default function MouseGlowBlobs() {
  const blob1 = useRef<HTMLDivElement>(null);
  const blob2 = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    let rafId: number;
    let currentX = 0.5;
    let currentY = 0.5;
    let targetX = 0.5;
    let targetY = 0.5;

    const handleMouse = (e: MouseEvent) => {
      targetX = e.clientX / window.innerWidth;
      targetY = e.clientY / window.innerHeight;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      currentX = lerp(currentX, targetX, 0.05);
      currentY = lerp(currentY, targetY, 0.05);

      const offsetX = (currentX - 0.5) * 60;
      const offsetY = (currentY - 0.5) * 60;

      if (blob1.current) {
        blob1.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      }
      if (blob2.current) {
        blob2.current.style.transform = `translate(${-offsetX}px, ${-offsetY}px)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouse, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(rafId);
    };
  }, [prefersReduced]);

  if (prefersReduced) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      <div
        ref={blob1}
        className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full will-change-transform opacity-60"
        style={{
          background: "radial-gradient(circle, rgba(0,113,227,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        ref={blob2}
        className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full will-change-transform opacity-60"
        style={{
          background: "radial-gradient(circle, rgba(0,113,227,0.08) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
