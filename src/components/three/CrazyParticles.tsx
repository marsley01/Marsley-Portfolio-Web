"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function GalaxyBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- 1. Scene & Camera Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    // Positioned at an isometric cosmic angle
    camera.position.set(0, 3.5, 4.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    containerRef.current.appendChild(renderer.domElement);

    // --- 2. Galaxy Math Parameters ---
    const parameters = {
      count: 65000,
      radius: 6,
      branches: 4,
      spin: 1.2,
      randomness: 0.45,
      power: 4.5,
      insideColor: "#38bdf8", // Glowing Cyan core
      outsideColor: "#6366f1", // Deep Indigo/Cosmic Purple arms
      coreGlow: "#ffffff",
    };

    // --- 3. Geometry Buffers ---
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(parameters.count * 3);
    const colors = new Float32Array(parameters.count * 3);
    const scales = new Float32Array(parameters.count);
    const randomness = new Float32Array(parameters.count * 3);

    const colorInside = new THREE.Color(parameters.insideColor);
    const colorOutside = new THREE.Color(parameters.outsideColor);
    const colorCore = new THREE.Color(parameters.coreGlow);

    for (let i = 0; i < parameters.count; i++) {
      const i3 = i * 3;

      // Distance from center with higher density at core
      const r = Math.pow(Math.random(), parameters.power) * parameters.radius;
      const spinAngle = r * parameters.spin;
      const branchAngle =
        ((i % parameters.branches) * (2 * Math.PI)) / parameters.branches;

      // Random dispersion along 3 axes
      const randX =
        Math.pow(Math.random(), parameters.power) *
        (Math.random() < 0.5 ? 1 : -1) *
        parameters.randomness *
        r;
      const randY =
        Math.pow(Math.random(), parameters.power) *
        (Math.random() < 0.5 ? 1 : -1) *
        parameters.randomness *
        r *
        0.5; // Flatter disk
      const randZ =
        Math.pow(Math.random(), parameters.power) *
        (Math.random() < 0.5 ? 1 : -1) *
        parameters.randomness *
        r;

      positions[i3] = Math.cos(branchAngle + spinAngle) * r;
      positions[i3 + 1] = 0;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * r;

      randomness[i3] = randX;
      randomness[i3 + 1] = randY;
      randomness[i3 + 2] = randZ;

      // Color blending (Core -> Arms -> Space)
      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, r / parameters.radius);

      if (r < parameters.radius * 0.12) {
        mixedColor.lerp(colorCore, 0.7);
      }

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;

      // Scale per star
      scales[i] = Math.random() * 0.8 + 0.2;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aRandomness", new THREE.BufferAttribute(randomness, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));

    // --- 4. Custom GLSL Shader (Smooth Circular Stars with Glow) ---
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uSize: { value: 25.0 * renderer.getPixelRatio() },
      },
      vertexShader: `
        uniform float uTime;
        uniform float uSize;
        attribute vec3 aRandomness;
        attribute float aScale;
        varying vec3 vColor;

        void main() {
          vColor = color;
          
          // Current position with subtle orbital drift
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          
          // Apply dispersion offset
          modelPosition.xyz += aRandomness;

          vec4 viewPosition = viewMatrix * modelPosition;
          gl_Position = projectionMatrix * viewPosition;

          // Size attenuation
          gl_PointSize = (uSize * aScale) / -viewPosition.z;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;

        void main() {
          // Circular particle with soft exponential glow falloff
          float dist = distance(gl_PointCoord, vec2(0.5));
          if (dist > 0.5) discard;

          float strength = 1.0 - (dist * 2.0);
          strength = pow(strength, 2.2);

          gl_FragColor = vec4(vColor, strength);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    });

    const galaxy = new THREE.Points(geometry, material);
    scene.add(galaxy);

    // --- 5. Mouse & Scroll Interactivity ---
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let scrollProgress = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const onScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        scrollProgress = window.scrollY / totalScroll;
      }
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      material.uniforms.uSize.value = 25.0 * renderer.getPixelRatio();
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // --- 6. 60 FPS Render Loop with Smooth Damping (Lerp) ---
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Update shader uniform
      material.uniforms.uTime.value = elapsedTime;

      // Base rotation
      galaxy.rotation.y = elapsedTime * 0.04;

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Scroll-driven camera fly-through
      const targetCamY = 3.5 - scrollProgress * 1.5;
      const targetCamZ = 4.5 - scrollProgress * 1.8;

      camera.position.x = mouse.x * 0.8;
      camera.position.y = targetCamY + mouse.y * 0.4;
      camera.position.z = targetCamZ;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    // --- 7. Memory Cleanup ---
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 pointer-events-none bg-[#030712]"
    />
  );
}
