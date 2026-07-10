"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Outer ring spring configuration - slower, smoother trailing effect
  const springConfigOuter = { damping: 25, stiffness: 150, mass: 0.5 };
  const outerX = useSpring(cursorX, springConfigOuter);
  const outerY = useSpring(cursorY, springConfigOuter);

  // Inner dot spring configuration - faster, snappier
  const springConfigInner = { damping: 30, stiffness: 400, mass: 0.2 };
  const innerX = useSpring(cursorX, springConfigInner);
  const innerY = useSpring(cursorY, springConfigInner);

  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show on fine pointer devices (desktops/laptops)
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const moveCursor = (e: MouseEvent) => {
      setVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    
    // Hide cursor when leaving window
    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);
    
    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    
    // Ensure native cursor is hidden
    document.documentElement.classList.add("cursor-none");
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.documentElement.classList.remove("cursor-none");
      setVisible(false);
    };
  }, [cursorX, cursorY]);

  useEffect(() => {
    if (!visible) return;
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[data-cursor="hover"]') ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setHovered(true);
      }
    };
    
    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[data-cursor="hover"]') ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setHovered(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    
    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        style={{
          left: outerX,
          top: outerY,
        }}
        animate={{
          width: hovered ? 56 : 32,
          height: hovered ? 56 : 32,
          backgroundColor: hovered ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
        }}
        transition={{ type: "tween", duration: 0.15 }}
        className={`pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white mix-blend-difference transition-opacity duration-300 ${
          hovered ? "opacity-100 border-transparent" : "opacity-60"
        }`}
      />
      
      {/* Inner Dot */}
      <motion.div
        style={{
          left: innerX,
          top: innerY,
        }}
        animate={{
          width: hovered ? 0 : 8,
          height: hovered ? 0 : 8,
          opacity: hovered ? 0 : 1,
        }}
        transition={{ type: "tween", duration: 0.15 }}
        className="pointer-events-none fixed z-[10000] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference"
      />
    </>
  );
}
