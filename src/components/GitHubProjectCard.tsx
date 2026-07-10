"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { techNameMap } from "./TechIcons";

interface RepoData {
  id: number;
  name: string;
  description: string | null;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  forks: number;
  topics: string[];
  updated: string;
}

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3572a5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  "C#": "#178600",
  Ruby: "#701516",
  Go: "#00add8",
  Rust: "#dea584",
  Java: "#b07219",
  Kotlin: "#a97bff",
  Swift: "#f05138",
  PHP: "#4f5d95",
  Scala: "#c22d40",
  Dart: "#00b4ab",
  Elixir: "#6e4a7e",
  Lua: "#000080",
};

function getLangColor(lang: string | null): string {
  if (!lang) return "#86868b";
  return languageColors[lang] || "#86868b";
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  const now = new Date();
  const diff = now.getTime() - d.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days} days ago`;
  if (days < 365) return `${Math.floor(days / 30)} months ago`;
  return `${Math.floor(days / 365)} years ago`;
}

function RepoName(name: string): string {
  return name
    .split(/[-_]/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function GitHubProjectCard({ repo, index }: { repo: RepoData; index: number }) {
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
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-2xl shadow-black/5 transition-all duration-500 hover:shadow-black/20 dark:hover:shadow-black/40"
    >
      <a
        href={repo.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 flex-col p-6"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-bold tracking-tight text-foreground">
              {RepoName(repo.name)}
            </h3>
            {repo.description && (
              <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-text-secondary">
                {repo.description}
              </p>
            )}
          </div>
          <div className="flex shrink-0 items-center gap-3 text-xs text-text-secondary">
            <span className="flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              {repo.stars}
            </span>
            <span className="flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              {repo.forks}
            </span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {repo.language && (
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-text-secondary backdrop-blur-sm">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: getLangColor(repo.language) }}
              />
              {repo.language}
            </span>
          )}
          {repo.topics.slice(0, 3).map((topic) => {
            const mappedName = techNameMap[topic.toUpperCase()] || topic;
            return (
              <span
                key={topic}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-text-secondary backdrop-blur-sm"
              >
                {mappedName}
              </span>
            );
          })}
        </div>

        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="text-xs text-text-secondary/60">
            Updated {formatDate(repo.updated)}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            View Repo
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </a>
    </motion.div>
  );
}
