"use client";

import { TechIcon } from "./TechIcons";

const tools = [
  "TypeScript",
  "Supabase",
  "WordPress",
  "Shopify",
  "Wix",
  "Netlify",
  "Cursor",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Python",
  "Node.js",
  "Figma",
  "PostgreSQL",
  "Git",
];

export default function TechMarquee() {
  const duplicated = [...tools, ...tools];

  return (
    <div className="relative overflow-hidden py-4">
      <div className="flex gap-4 marquee-track">
        {duplicated.map((tool, i) => (
          <span
            key={`${tool}-${i}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border/40 bg-card px-5 py-2.5 text-sm font-medium text-text-secondary whitespace-nowrap"
          >
            <TechIcon name={tool} />
            {tool}
          </span>
        ))}
      </div>

      <style>{`
        .marquee-track {
          animation: marquee 30s linear infinite;
          width: fit-content;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
