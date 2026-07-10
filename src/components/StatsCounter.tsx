"use client";

import { useRef, useEffect } from "react";
import { useInView, useMotionValue, useTransform, motion, animate } from "framer-motion";

interface StatsCounterProps {
  target: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

export default function StatsCounter({
  target,
  label,
  suffix = "",
  prefix = "",
}: StatsCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, { duration: 1.5, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, target, count]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl flex items-center justify-center">
        {prefix}
        <motion.span>{rounded}</motion.span>
        {suffix}
      </p>
      <p className="mt-2 text-sm text-text-secondary">
        {label}
      </p>
    </div>
  );
}
