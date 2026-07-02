"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import Section from "@/components/Section";
import StatsCounter from "@/components/StatsCounter";
import TechMarquee from "@/components/TechMarquee";
import { TechIcon } from "@/components/TechIcons";
import { DotsGrid, Rings, Crosses, GeometricShape, CornerAccents, WavyLines } from "@/components/VisualAnchors";
import ProjectCard, { featuredProjects } from "@/components/ProjectCard";
import RevealOnScroll from "@/components/RevealOnScroll";
import Magnetic from "@/components/Magnetic";
import MouseGlowBlobs from "@/components/MouseGlowBlobs";
import ServicesSection from "@/components/ServicesSection";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => null,
});

const skills = [
  "Next.js / React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "AI / LLM Integration",
  "UI/UX Design",
  "Databases (SQL / NoSQL)",
  "Git / GitHub",
];

export default function Home() {
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const canvasOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <>
      <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 bg-grid-pattern">
        <motion.div style={{ opacity: canvasOpacity }} className="absolute inset-0 z-0" data-lenis-prevent>
          <HeroScene />
        </motion.div>

        <motion.div
          className="pointer-events-none absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-accent-start/10 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-accent-end/10 blur-[140px]" />
        </motion.div>

        <DotsGrid density="sparse" className="opacity-50" />
        <Crosses />
        <GeometricShape />

        <MouseGlowBlobs />

        <div className="pointer-events-none absolute inset-0 z-[1]" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(8,8,8,0.6) 100%)" }} />

        <div className="relative z-10 max-w-3xl text-center">
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              prefersReduced
                ? { duration: 0 }
                : { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0 }
            }
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-card/50 px-4 py-1.5 text-xs font-medium text-text-secondary backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00C896] shadow-[0_0_6px_#00C896] animate-pulse-dot" />
              Founder &amp; Builder &middot; Nairobi, Kenya
            </span>
          </motion.div>

          <motion.h1 className="mt-8 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-5xl font-bold leading-tight tracking-tight text-transparent sm:text-7xl sm:leading-tight">
            I build products that ship.
          </motion.h1>

          <motion.p
              initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                prefersReduced
                  ? { duration: 0 }
                  : { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.54 }
              }
              className="mt-6 text-lg leading-relaxed text-text-secondary sm:text-xl"
            >
              Founder running 5 active ventures from Nairobi &mdash; edtech, e-commerce, SaaS, and digital agency. I don&apos;t just design websites. I build businesses.
            </motion.p>

          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              prefersReduced
                ? { duration: 0 }
                : { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.8 }
            }
            className="mt-10 flex items-center justify-center gap-4 flex-wrap"
          >
            <Magnetic>
              <Link
                href="/projects"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.97]"
              >
                Explore Projects
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="/contact"
                className="rounded-full border border-border/40 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-foreground/5 active:scale-[0.97]"
              >
                Get in Touch
              </Link>
            </Magnetic>
            <Magnetic>
              <a
                href="/cv.pdf"
                download
                className="rounded-full border border-border/40 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-foreground/5 active:scale-[0.97]"
              >
                Download CV
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: prefersReduced ? 0 : 1.5, duration: prefersReduced ? 0 : 1 }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        >
          <motion.div
            animate={prefersReduced ? {} : { y: [0, 8, 0] }}
            transition={
              prefersReduced
                ? { duration: 0 }
                : { repeat: Infinity, duration: 2, ease: "easeInOut" }
            }
            className="h-10 w-6 rounded-full border-2 border-text-secondary/40"
          >
            <motion.div
              animate={prefersReduced ? {} : { y: [0, 12, 0] }}
              transition={
                prefersReduced
                  ? { duration: 0 }
                  : { repeat: Infinity, duration: 2, ease: "easeInOut" }
              }
              className="mx-auto mt-2 h-2 w-1 rounded-full bg-text-secondary/60"
            />
          </motion.div>
        </motion.div>
      </section>

      <Section id="featured" className="relative bg-card/30">
        <DotsGrid density="medium" className="opacity-30" />
        <CornerAccents />
        <Rings className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" count={2} />
        <RevealOnScroll className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-text-secondary">
            A glimpse into what I&apos;m building.
          </p>
        </RevealOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 rounded-full border border-border/40 bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-foreground/5 active:scale-[0.97]"
          >
            View All Projects
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4.5 2.5L8 6L4.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </Section>

<Section className="relative bg-card/30">
        <GeometricShape />
        <WavyLines className="top-0 right-0" />
        <RevealOnScroll className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            By the Numbers
          </h2>
          <p className="mt-4 text-text-secondary">
            A snapshot of the impact so far.
          </p>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <StatsCounter target={12} suffix="+" label="Projects Shipped" />
            <StatsCounter target={3} suffix="+" label="Years Building" />
            <StatsCounter target={5} suffix="+" label="Products Live" />
            <StatsCounter target={8} suffix="+" label="Clients Served" />
          </div>
        </RevealOnScroll>
      </Section>

      <Section className="relative">
        <Crosses />
        <RevealOnScroll className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-text-secondary">
            Tools I use to bring ideas to life.
          </p>
        </RevealOnScroll>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {skills.map((skill) => (
            <motion.span
              key={skill}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { type: "spring", stiffness: 100, damping: 15 },
                },
              }}
              className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50"
            >
              <TechIcon name={skill} />
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </Section>

      <Section className="relative bg-card/30">
        <DotsGrid density="sparse" className="opacity-30" />
        <CornerAccents />
        <RevealOnScroll className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tools I Use
          </h2>
          <p className="mt-4 text-text-secondary">
            The stack behind the work.
          </p>
          <div className="mt-10">
            <TechMarquee />
          </div>
        </RevealOnScroll>
      </Section>

      <ServicesSection />

      <Section className="relative">
        <Rings className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" count={2} />
        <GeometricShape />
        <RevealOnScroll className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s Build Something
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-secondary">
            Whether it&apos;s a web app, a brand, or the next big idea —
            I&apos;m always open to collaborations.
          </p>
          <Magnetic>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.97]"
            >
              Start a Conversation
            </Link>
          </Magnetic>
        </RevealOnScroll>
      </Section>
    </>
  );
}
