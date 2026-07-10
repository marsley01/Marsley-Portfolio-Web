"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { TechIcon } from "./TechIcons";
import { useRef, type ReactNode } from "react";

export interface ProjectData {
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  image: ReactNode;
  resultBadge: string;
  techStack: string[];
  ctaLabel: string;
  ctaHref: string;
}

export function ProjectPreviewCyzora() {
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full">
      <rect width="200" height="160" rx="12" fill="#1a1a1a" />
      <rect x="30" y="25" width="100" height="60" rx="6" fill="#3b82f6" opacity="0.15" />
      <rect x="30" y="25" width="100" height="8" rx="2" fill="#3b82f6" opacity="0.3" />
      <rect x="36" y="40" width="40" height="4" rx="2" fill="#6366f1" opacity="0.3" />
      <rect x="36" y="50" width="60" height="4" rx="2" fill="#6366f1" opacity="0.2" />
      <rect x="36" y="60" width="50" height="4" rx="2" fill="#6366f1" opacity="0.15" />
      <rect x="36" y="70" width="70" height="4" rx="2" fill="#6366f1" opacity="0.1" />
      <rect x="150" y="30" width="20" height="50" rx="4" fill="#3b82f6" opacity="0.12" />
      <rect x="154" y="36" width="12" height="12" rx="3" fill="#3b82f6" opacity="0.2" />
      <rect x="154" y="54" width="12" height="6" rx="2" fill="#3b82f6" opacity="0.15" />
      <rect x="154" y="64" width="12" height="6" rx="2" fill="#3b82f6" opacity="0.1" />
      <circle cx="60" cy="110" r="6" fill="#3b82f6" opacity="0.2" />
      <circle cx="100" cy="110" r="6" fill="#6366f1" opacity="0.2" />
      <circle cx="140" cy="110" r="6" fill="#3b82f6" opacity="0.2" />
      <line x1="66" y1="110" x2="94" y2="110" stroke="#3b82f6" strokeWidth="1" opacity="0.15" />
      <line x1="106" y1="110" x2="134" y2="110" stroke="#6366f1" strokeWidth="1" opacity="0.15" />
    </svg>
  );
}

export function ProjectPreviewEdyfra() {
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full">
      <rect width="200" height="160" rx="12" fill="#1a1a1a" />
      <rect x="30" y="20" width="80" height="8" rx="4" fill="#8b5cf6" opacity="0.3" />
      <rect x="30" y="36" width="60" height="6" rx="3" fill="#7c3aed" opacity="0.2" />
      <rect x="30" y="50" width="70" height="6" rx="3" fill="#8b5cf6" opacity="0.15" />
      <rect x="30" y="64" width="50" height="6" rx="3" fill="#7c3aed" opacity="0.1" />
      <rect x="140" y="20" width="30" height="30" rx="6" fill="#8b5cf6" opacity="0.15" />
      <rect x="145" y="25" width="20" height="4" rx="2" fill="#8b5cf6" opacity="0.3" />
      <rect x="145" y="33" width="12" height="4" rx="2" fill="#8b5cf6" opacity="0.2" />
      <path d="M30 110 L50 90 L70 110 L90 85 L110 110" stroke="#8b5cf6" strokeWidth="2" fill="none" opacity="0.3" />
      <path d="M30 125 L50 105 L70 125 L90 100 L110 125" stroke="#7c3aed" strokeWidth="1.5" fill="none" opacity="0.2" />
      <circle cx="40" cy="140" r="3" fill="#8b5cf6" opacity="0.3" />
      <circle cx="60" cy="140" r="3" fill="#7c3aed" opacity="0.2" />
      <circle cx="80" cy="140" r="3" fill="#8b5cf6" opacity="0.15" />
      <circle cx="100" cy="140" r="3" fill="#7c3aed" opacity="0.1" />
    </svg>
  );
}

export function ProjectPreviewTrivo() {
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full">
      <rect width="200" height="160" rx="12" fill="#1a1a1a" />
      <rect x="35" y="25" width="90" height="60" rx="8" fill="#f97316" opacity="0.12" />
      <rect x="45" y="35" width="30" height="30" rx="4" fill="#f97316" opacity="0.2" />
      <rect x="82" y="35" width="30" height="12" rx="3" fill="#ef4444" opacity="0.2" />
      <rect x="82" y="53" width="30" height="12" rx="3" fill="#ef4444" opacity="0.15" />
      <rect x="45" y="72" width="70" height="3" rx="1.5" fill="#f97316" opacity="0.15" />
      <rect x="45" y="79" width="50" height="3" rx="1.5" fill="#f97316" opacity="0.1" />
      <circle cx="160" cy="30" r="15" fill="#f97316" opacity="0.1" />
      <circle cx="160" cy="30" r="8" fill="#f97316" opacity="0.15" />
      <circle cx="160" cy="30" r="3" fill="#f97316" />
      <rect x="35" y="105" width="16" height="16" rx="3" fill="#f97316" opacity="0.2" />
      <rect x="58" y="105" width="16" height="16" rx="3" fill="#ef4444" opacity="0.15" />
      <rect x="81" y="105" width="16" height="16" rx="3" fill="#f97316" opacity="0.1" />
      <rect x="104" y="105" width="16" height="16" rx="3" fill="#ef4444" opacity="0.08" />
    </svg>
  );
}

export function ProjectPreviewBelloria() {
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full">
      <rect width="200" height="160" rx="12" fill="#1a1a1a" />
      <circle cx="100" cy="50" r="28" fill="#ec4899" opacity="0.12" />
      <circle cx="100" cy="50" r="18" fill="#f43f5e" opacity="0.15" />
      <circle cx="100" cy="50" r="8" fill="#ec4899" opacity="0.25" />
      <circle cx="100" cy="50" r="3" fill="#f43f5e" />
      <rect x="50" y="95" width="40" height="6" rx="3" fill="#ec4899" opacity="0.3" />
      <rect x="50" y="107" width="30" height="4" rx="2" fill="#f43f5e" opacity="0.2" />
      <rect x="50" y="117" width="35" height="4" rx="2" fill="#ec4899" opacity="0.15" />
      <rect x="120" y="95" width="30" height="30" rx="6" fill="#ec4899" opacity="0.1" />
      <circle cx="142" cy="105" r="8" fill="#f43f5e" opacity="0.12" />
      <circle cx="142" cy="105" r="4" fill="#ec4899" opacity="0.15" />
    </svg>
  );
}

export function ProjectPreviewInshot() {
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full">
      <rect width="200" height="160" rx="12" fill="#1a1a1a" />
      <rect x="30" y="25" width="110" height="50" rx="6" fill="#06b6d4" opacity="0.12" />
      <rect x="38" y="33" width="40" height="8" rx="4" fill="#06b6d4" opacity="0.3" />
      <rect x="38" y="47" width="60" height="6" rx="3" fill="#3b82f6" opacity="0.2" />
      <rect x="38" y="58" width="50" height="4" rx="2" fill="#06b6d4" opacity="0.15" />
      <rect x="155" y="35" width="15" height="30" rx="4" fill="#06b6d4" opacity="0.15" />
      <circle cx="100" cy="110" r="20" fill="#06b6d4" opacity="0.1" />
      <circle cx="100" cy="110" r="12" fill="#3b82f6" opacity="0.12" />
      <circle cx="100" cy="110" r="5" fill="#06b6d4" opacity="0.2" />
      <rect x="45" y="130" width="15" height="6" rx="3" fill="#06b6d4" opacity="0.15" />
      <rect x="68" y="130" width="15" height="6" rx="3" fill="#3b82f6" opacity="0.12" />
      <rect x="91" y="130" width="15" height="6" rx="3" fill="#06b6d4" opacity="0.1" />
      <rect x="114" y="130" width="15" height="6" rx="3" fill="#3b82f6" opacity="0.08" />
    </svg>
  );
}

export function ProjectPreviewWhatsApp() {
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full">
      <rect width="200" height="160" rx="12" fill="#1a1a1a" />
      <rect x="25" y="20" width="80" height="12" rx="6" fill="#22c55e" opacity="0.25" />
      <rect x="25" y="40" width="70" height="8" rx="4" fill="#16a34a" opacity="0.2" />
      <rect x="25" y="56" width="90" height="8" rx="4" fill="#22c55e" opacity="0.15" />
      <rect x="25" y="72" width="60" height="8" rx="4" fill="#16a34a" opacity="0.1" />
      <rect x="130" y="20" width="45" height="60" rx="8" fill="#22c55e" opacity="0.1" />
      <rect x="138" y="28" width="28" height="8" rx="4" fill="#22c55e" opacity="0.2" />
      <rect x="138" y="42" width="28" height="4" rx="2" fill="#16a34a" opacity="0.15" />
      <rect x="138" y="52" width="20" height="4" rx="2" fill="#22c55e" opacity="0.12" />
      <rect x="138" y="62" width="24" height="4" rx="2" fill="#16a34a" opacity="0.1" />
      <circle cx="50" cy="115" r="8" fill="#22c55e" opacity="0.15" />
      <circle cx="75" cy="125" r="6" fill="#16a34a" opacity="0.12" />
      <circle cx="100" cy="115" r="4" fill="#22c55e" opacity="0.1" />
    </svg>
  );
}

export function ProjectPreviewMoreSaaS() {
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full">
      <rect width="200" height="160" rx="12" fill="#1a1a1a" />
      <rect x="40" y="30" width="80" height="40" rx="6" fill="#71717a" opacity="0.15" />
      <rect x="48" y="38" width="30" height="6" rx="3" fill="#a1a1aa" opacity="0.3" />
      <rect x="48" y="50" width="50" height="4" rx="2" fill="#a1a1aa" opacity="0.2" />
      <rect x="48" y="58" width="35" height="4" rx="2" fill="#a1a1aa" opacity="0.15" />
      <circle cx="160" cy="50" r="18" fill="#71717a" opacity="0.1" />
      <circle cx="160" cy="50" r="8" fill="#a1a1aa" opacity="0.15" />
      <circle cx="160" cy="50" r="3" fill="#a1a1aa" />
      <rect x="40" y="95" width="16" height="16" rx="3" fill="#71717a" opacity="0.2" />
      <rect x="64" y="95" width="16" height="16" rx="3" fill="#a1a1aa" opacity="0.15" />
      <rect x="88" y="95" width="16" height="16" rx="3" fill="#71717a" opacity="0.12" />
      <rect x="112" y="95" width="16" height="16" rx="3" fill="#a1a1aa" opacity="0.1" />
    </svg>
  );
}

export const featuredProjects: ProjectData[] = [
  {
    title: "Cyzora",
    subtitle: "E-commerce platform & web builds",
    description: "E-commerce platform and production-grade web builds. The revenue engine behind everything else.",
    accentColor: "from-blue-500 to-indigo-600",
    image: <ProjectPreviewCyzora />,
    resultBadge: "10+ websites delivered",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Git"],
    ctaLabel: "Coming Soon",
    ctaHref: "#",
  },
  {
    title: "Mash Payments",
    subtitle: "M-Pesa STK Push SaaS",
    description: "Businesses save Daraja credentials once and get a shareable M-Pesa payment link at cyzora.com/pay/[slug]. Built for Instagram sellers tired of sending their number in DMs.",
    accentColor: "from-green-500 to-emerald-600",
    image: <ProjectPreviewWhatsApp />,
    resultBadge: "Shareable payment links",
    techStack: ["Next.js", "Go", "Supabase", "Daraja API"],
    ctaLabel: "Visit Product",
    ctaHref: "https://cyzora.com/pay",
  },
  {
    title: "KenyaLibrarySystems",
    subtitle: "B2B SaaS for school libraries",
    description: "Library management SaaS for schools. QR-based borrow/return, multi-tenant Supabase RLS, Kenya Data Protection Act 2019 compliant.",
    accentColor: "from-violet-500 to-purple-600",
    image: <ProjectPreviewEdyfra />,
    resultBadge: "Multi-tenant, RLS-secured",
    techStack: ["Next.js", "Supabase"],
    ctaLabel: "Visit Platform",
    ctaHref: "https://kenyalibrarysystem-kohl.vercel.app",
  },
  {
    title: "agent-preflight",
    subtitle: "Pre-deploy checklist for vibe coders",
    description: "The pre-deploy quality gate for AI-assisted builders. Catches exposed RLS, leaked API keys, broken auth, and uncleaned env vars before they hit production.",
    accentColor: "from-gray-500 to-zinc-600",
    image: <ProjectPreviewMoreSaaS />,
    resultBadge: "Open source",
    techStack: ["TypeScript", "Supabase", "M-Pesa", "Paystack"],
    ctaLabel: "View on GitHub",
    ctaHref: "https://github.com/marsley01/agent-preflight",
  },
  {
    title: "Edyfra",
    subtitle: "Edtech bridging holiday learning gaps",
    description: "An edtech platform that monitors student performance during holidays and connects tutors with students.",
    accentColor: "from-violet-500 to-purple-600",
    image: <ProjectPreviewEdyfra />,
    resultBadge: "70+ active verified users",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "TypeScript"],
    ctaLabel: "Visit Platform",
    ctaHref: "https://edyfra-v2.vercel.app",
  },
  {
    title: "Trivo Kenya",
    subtitle: "Premium tech gadgets store",
    description: "An online store selling premium tech gadgets and accessories for the modern consumer.",
    accentColor: "from-orange-500 to-red-600",
    image: <ProjectPreviewTrivo />,
    resultBadge: "300+ products listed",
    techStack: ["React", "Tailwind CSS", "Node.js", "Git"],
    ctaLabel: "Visit Store",
    ctaHref: "https://trivokenya.store",
  },
  {
    title: "Belloria Beauty",
    subtitle: "Cosmetic brand showcase",
    description: "A cosmetic brand showcase site featuring beauty products with a premium, elegant design.",
    accentColor: "from-pink-500 to-rose-600",
    image: <ProjectPreviewBelloria />,
    resultBadge: "Beauty line showcased",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Figma"],
    ctaLabel: "Visit Store",
    ctaHref: "https://belloriabeauty.store",
  },
];

export const allProjects: ProjectData[] = [
  ...featuredProjects
];

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    cardRef.current.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01,1.01,1.01)`;
    cardRef.current.style.transition = "transform 0.15s ease-out";
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    cardRef.current.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true, margin: "-30px" }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-2xl shadow-black/5 transition-all duration-500 hover:shadow-black/20 dark:bg-white/[0.03] dark:hover:shadow-black/40"
    >
      <div className={`h-px w-full bg-gradient-to-r ${project.accentColor} opacity-60`} />

      <div className="flex flex-col gap-5 p-6 sm:flex-row sm:gap-7 sm:p-7">
        <div className="relative aspect-[5/4] w-full shrink-0 overflow-hidden rounded-2xl sm:w-[220px] sm:aspect-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent dark:from-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent dark:from-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          {project.image}
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-3">
          <div>
            <h3 className="text-lg font-bold tracking-tight text-foreground">
              {project.title}
            </h3>
            <p className="mt-0.5 text-sm text-text-secondary">
              {project.subtitle}
            </p>
          </div>

          <span className="inline-flex w-fit items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-semibold text-text-secondary backdrop-blur-md">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" className="text-accent">
              <circle cx="5" cy="5" r="3" />
            </svg>
            {project.resultBadge}
          </span>

          <p className="text-sm leading-relaxed text-text-secondary line-clamp-2">
            {project.description}
          </p>

          <div className="mt-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-1.5">
              {project.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-text-secondary backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/[0.08]"
                  title={tech}
                >
                  <TechIcon name={tech} />
                </span>
              ))}
            </div>

            {project.ctaHref === "#" ? (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-text-secondary backdrop-blur-md cursor-not-allowed opacity-60">
                {project.ctaLabel}
              </span>
            ) : project.ctaHref.startsWith("http") ? (
              <a
                href={project.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-accent/90 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md transition-all hover:bg-accent hover:border-accent/50 active:scale-[0.97]"
              >
                {project.ctaLabel}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M4.5 2.5L8 6L4.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ) : (
              <Link
                href={project.ctaHref}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-accent/90 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md transition-all hover:bg-accent hover:border-accent/50 active:scale-[0.97]"
              >
                {project.ctaLabel}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M4.5 2.5L8 6L4.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
