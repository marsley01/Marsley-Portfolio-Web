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
  const canvasBlur = useTransform(scrollYProgress, [0, 0.15], ["blur(0px)", "blur(20px)"]);

  return (
    <>
      <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 bg-grid-pattern">

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

        <div className="pointer-events-none absolute inset-0 z-[1]" style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 10%, rgba(0,0,0,0.7) 100%)" }} />

        <div className="relative z-10 max-w-3xl text-center">
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-background/60 blur-[60px]" />
          
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

          <motion.h1 className="mt-8 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-5xl font-bold leading-tight tracking-tight text-transparent sm:text-7xl sm:leading-tight drop-shadow-md">
            {["Marsley", "Mash"].map((word, i) => (
              <motion.span
                key={word}
                initial={prefersReduced ? {} : { y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={
                  prefersReduced
                    ? { duration: 0 }
                    : { delay: i * 0.12, type: "spring", stiffness: 80, damping: 20 }
                }
                className={i === 0 ? "inline-block mr-[0.3em]" : "inline-block"}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
              initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                prefersReduced
                  ? { duration: 0 }
                  : { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.54 }
              }
              className="mt-6 text-lg leading-relaxed text-foreground/90 sm:text-xl drop-shadow-sm"
            >
              Founder running multiple ventures from Nairobi &mdash; edtech, fintech, e-commerce, and SaaS. I don&apos;t just build websites. I build businesses.
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

      <section className="relative pt-24 pb-8">
        <div className="mx-auto max-w-3xl text-center px-6">
          <p className="text-lg leading-relaxed text-text-secondary sm:text-xl">
            I&apos;m Mash. I build products, run them, and figure it out as I go. No CS degree. No co-founder (mostly). Just someone who got tired of waiting for the right conditions and started shipping. My build layer is Cursor, Claude, and Antigravity &mdash; not because I can&apos;t code, but because leverage matters more than purity.
          </p>
        </div>
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
            <StatsCounter target={10} suffix="+" label="Projects Shipped" />
            <StatsCounter target={3} suffix="+" label="Years Building" />
            <StatsCounter target={6} suffix="+" label="Products Live" />
            <StatsCounter target={20} suffix="+" label="Clients Served" />
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

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:mashmarsley@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-card px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              mashmarsley@gmail.com
            </a>
            <a
              href="https://wa.me/254740610772"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 px-6 py-2.5 text-sm font-medium text-[#25D366] transition-colors hover:bg-[#25D366]/20"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              WhatsApp Me
            </a>
          </div>
        </RevealOnScroll>
      </Section>
    </>
  );
}
