"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface StatsCounterProps {
  target: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

export default function StatsCounter({
  target,
  label,
  suffix = "",
  prefix = "",
}: StatsCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReduced = useReducedMotion();
  const [displayed, setDisplayed] = useState(0);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    if (!isInView) return;
    if (prefersReduced) {
      setDisplayed(target);
      return;
    }
    let start: number | null = null;
    const duration = 1800;

    function step(timestamp: number) {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      setDisplayed(Math.floor(eased * target));
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step);
      }
    }

    animationRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isInView, target, prefersReduced]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        {prefix}
        <span>{displayed}</span>
        {suffix}
      </p>
      <p className="mt-2 text-sm text-text-secondary">
        {label}
      </p>
    </div>
  );
}
