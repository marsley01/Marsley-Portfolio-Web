"use client";

import { motion } from "framer-motion";

export function DotsGrid({
  className = "",
  density = "sparse",
}: {
  className?: string;
  density?: "sparse" | "medium" | "dense";
}) {
  const spacing = density === "dense" ? 40 : density === "medium" ? 60 : 80;

  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id={`dots-${density}`}
          x="0"
          y="0"
          width={spacing}
          height={spacing}
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx={spacing / 2}
            cy={spacing / 2}
            r="1"
            className="fill-text-secondary/20"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#dots-${density})`} />
    </svg>
  );
}

export function Rings({
  className = "",
  count = 3,
}: {
  className?: string;
  count?: number;
}) {
  const sizes = [120, 200, 280];
  return (
    <div className={`pointer-events-none absolute ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: i * 0.3, ease: "easeOut" }}
          className="absolute rounded-full border border-text-secondary/10"
          style={{
            width: sizes[i] ?? 360,
            height: sizes[i] ?? 360,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
}

export function CornerAccents({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
    >
      <path
        d="M0,80 Q0,0 80,0"
        fill="none"
        stroke="currentColor"
        className="text-text-secondary/10"
        strokeWidth="1"
      />
      <path
        d="M0,40 Q0,0 40,0"
        fill="none"
        stroke="currentColor"
        className="text-text-secondary/10"
        strokeWidth="1"
      />
      <path
        d="M1000,80 Q1000,0 920,0"
        fill="none"
        stroke="currentColor"
        className="text-text-secondary/10"
        strokeWidth="1"
      />
      <path
        d="M1000,40 Q1000,0 960,0"
        fill="none"
        stroke="currentColor"
        className="text-text-secondary/10"
        strokeWidth="1"
      />
      <path
        d="M0,920 Q0,1000 80,1000"
        fill="none"
        stroke="currentColor"
        className="text-text-secondary/10"
        strokeWidth="1"
      />
      <path
        d="M0,960 Q0,1000 40,1000"
        fill="none"
        stroke="currentColor"
        className="text-text-secondary/10"
        strokeWidth="1"
      />
      <path
        d="M1000,920 Q1000,1000 920,1000"
        fill="none"
        stroke="currentColor"
        className="text-text-secondary/10"
        strokeWidth="1"
      />
      <path
        d="M1000,960 Q1000,1000 960,1000"
        fill="none"
        stroke="currentColor"
        className="text-text-secondary/10"
        strokeWidth="1"
      />
    </svg>
  );
}

export function Crosses({ className = "" }: { className?: string }) {
  const positions = [
    { top: "10%", left: "5%" },
    { top: "20%", right: "8%" },
    { bottom: "15%", left: "10%" },
    { bottom: "25%", right: "5%" },
    { top: "50%", left: "3%" },
    { top: "60%", right: "4%" },
  ];
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`}>
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, rotate: 45 }}
          animate={{ opacity: 1, rotate: 45 }}
          transition={{ duration: 0.8, delay: i * 0.15 }}
          className="absolute text-text-secondary/15"
          style={pos as React.CSSProperties}
        >
          <svg width="16" height="16" viewBox="0 0 16 16">
            <line
              x1="8"
              y1="0"
              x2="8"
              y2="16"
              stroke="currentColor"
              strokeWidth="1"
            />
            <line
              x1="0"
              y1="8"
              x2="16"
              y2="8"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

export function WavyLines({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute ${className}`}
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
    >
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        d="M0,100 Q25,50 50,100 T100,100 T150,100 T200,100"
        stroke="currentColor"
        className="text-text-secondary/10"
        strokeWidth="1"
      />
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.5, delay: 0.3, ease: "easeInOut" }}
        d="M0,120 Q25,70 50,120 T100,120 T150,120 T200,120"
        stroke="currentColor"
        className="text-text-secondary/8"
        strokeWidth="1"
      />
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
        d="M0,80 Q25,130 50,80 T100,80 T150,80 T200,80"
        stroke="currentColor"
        className="text-text-secondary/8"
        strokeWidth="1"
      />
    </svg>
  );
}

export function GradientOrb({
  className = "",
  size = 400,
  from = "from-accent-start/15",
  to = "to-accent-end/10",
}: {
  className?: string;
  size?: number;
  from?: string;
  to?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className={`pointer-events-none absolute ${className}`}
    >
      <div
        className={`rounded-full bg-gradient-to-r ${from} ${to} blur-[120px]`}
        style={{ width: size, height: size }}
      />
    </motion.div>
  );
}

export function GeometricShape({ className = "" }: { className?: string }) {
  const shapes = [
    { type: "triangle", top: "8%", right: "10%" },
    { type: "hexagon", bottom: "12%", left: "8%" },
    { type: "diamond", top: "40%", left: "5%" },
    { type: "pentagon", bottom: "30%", right: "6%" },
  ];

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`}>
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: i * 0.2 }}
          className="absolute text-text-secondary/10"
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
          }}
        >
          {shape.type === "triangle" && (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <polygon
                points="12,2 22,22 2,22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          )}
          {shape.type === "hexagon" && (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <polygon
                points="12,2 21,7 21,17 12,22 3,17 3,7"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          )}
          {shape.type === "diamond" && (
            <svg width="20" height="20" viewBox="0 0 20 20">
              <polygon
                points="10,1 19,10 10,19 1,10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          )}
          {shape.type === "pentagon" && (
            <svg width="22" height="22" viewBox="0 0 22 22">
              <polygon
                points="11,1 21,8 17,20 5,20 1,8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
}
