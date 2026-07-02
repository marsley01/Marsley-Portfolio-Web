"use client";

import { type ReactNode } from "react";

export const techIcons: Record<string, ReactNode> = {
  TypeScript: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#3178C6" />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="11"
        fontWeight="bold"
        fontFamily="Arial"
      >
        TS
      </text>
    </svg>
  ),
  Supabase: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M13.5 2L4.5 14h7l-1 8 9-12h-7l1-8z"
        fill="#3ECF8E"
        stroke="#3ECF8E"
        strokeWidth="0.5"
      />
    </svg>
  ),
  Firebase: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M3.15 16.5L9 2.5l2.5 5.5-2.5 8.5h-5.85z"
        fill="#FFCA28"
      />
      <path
        d="M9 2.5L3.15 16.5H9l4-7-4-7z"
        fill="#FFA000"
      />
      <path
        d="M13 8l-2.5 5.5L9 16.5h7.5L13 8z"
        fill="#FF8F00"
      />
      <path
        d="M16.5 16.5L13 8l-1.5 3-1.5 5.5h6.5z"
        fill="#DD2C00"
      />
    </svg>
  ),
  WordPress: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#21759B" />
      <path
        d="M12 4a8 8 0 00-8 8 8 8 0 008 8 8 8 0 008-8 8 8 0 00-8-8zM6.3 8.2l2.9 8.1H7.8l-1.4-4.2-.6 1.7.8 2.5H6.1l-1.2-3.5.7-2.1c.2-.6.4-1.2.7-2.5zM12 18c-.3 0-.6 0-.9-.1l1-3 2.5 3h-.7l2.5-3.7c.2-.3.3-.8.3-1.2 0-.2 0-.5-.1-.7h1.1c.1.2.1.5.1.8 0 .4-.1.9-.4 1.5l.9 2.5h-1.2l-.5-1.5-2.5 3.7c-.4.5-.9.7-1.3.7zm1.3-8.5c.4.2.6.5.6 1 0 .5-.2 1-.8 1.7l-.9 1.1-1.6-1.8.8-.9c.5-.6.8-.9 1.1-1.1l.8-1c.4-.5.7-.8 1-.8.3 0 .5.1.5.4 0 .2-.1.5-.3.9l-.2.5h-1c.1-.3.2-.5.2-.7 0-.2-.1-.3-.3-.3-.2 0-.4.2-.7.5l-.3.4.7.6.4.5z"
        fill="white"
      />
    </svg>
  ),
  Shopify: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#7AB55C" />
      <path
        d="M8.5 7.5S8 5 7.5 4.5 6.5 4 6 4.5 5.5 6 5.5 6l-1 2.5h2l1 2 1-3h1l-1 3.5 1 3.5h-3l-1-3.5-1 1.5.5 2H4l-.5-2 1-3 1-2.5h3z"
        fill="white"
      />
      <path
        d="M11 7h2.5l.5 2h-2l-.5 2h2l.5 2h-3l-.5-2-.5-2 1-2z"
        fill="white"
      />
      <path
        d="M15 7h2l.5 2-1 2h-1l.5-4z"
        fill="white"
      />
    </svg>
  ),
  Wix: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#0C6EFC" />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="10"
        fontWeight="bold"
        fontFamily="Arial"
      >
        Wix
      </text>
    </svg>
  ),
  Netlify: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#00C7B7" />
      <path
        d="M8 8l8 8M16 8l-8 8"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  Cursor: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 3l14 8-6 2-2 6-6-16z"
        fill="#6C5CE7"
      />
      <path d="M13 13l4 6" stroke="#6C5CE7" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  React: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.5"
        stroke="#61DAFB"
        strokeWidth="1"
        fill="none"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.5"
        stroke="#61DAFB"
        strokeWidth="1"
        fill="none"
        transform="rotate(60, 12, 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.5"
        stroke="#61DAFB"
        strokeWidth="1"
        fill="none"
        transform="rotate(120, 12, 12)"
      />
    </svg>
  ),
  "Next.js": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="white" />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="black"
        fontSize="10"
        fontWeight="bold"
        fontFamily="Arial"
      >
        N
      </text>
    </svg>
  ),
  "Tailwind CSS": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 4C8 4 6 6 5 8c2-2 4-2.5 6-1 1.5.6 2.5 1.5 3.5 2.5C16 11 17 12 20 12c4 0 6-2 7-4-2 2-4 2.5-6 1-1.5-.6-2.5-1.5-3.5-2.5C16 5 15 4 12 4zM5 12c-4 0-6 2-7 4 2-2 4-2.5 6-1 1.5.6 2.5 1.5 3.5 2.5C8 19 9 20 12 20c4 0 6-2 7-4-2 2-4 2.5-6 1-1.5-.6-2.5-1.5-3.5-2.5C8 13 7 12 5 12z"
        fill="#38BDF8"
      />
    </svg>
  ),
  Python: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2c-3.3 0-5.5 1-5.5 2.5v2c0 1 1.5 1.5 3 1.5h5c2.5 0 4.5 1.5 4.5 3.5v1c0 1-1.5 2-3 2H9.5c-1.5 0-3 1-3 2.5v1.5c0 1.5 2.2 2.5 5.5 2.5 3.3 0 5.5-1 5.5-2.5v-2c0-1-1.5-1.5-3-1.5h-5c-2.5 0-4.5-1.5-4.5-3.5v-1c0-1 1.5-2 3-2h6.5c1.5 0 3-1 3-2.5V7c0-1.5-2.2-2.5-5.5-2.5z"
        fill="#FFD43B"
      />
      <path
        d="M9 4.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5z"
        fill="#306998"
      />
    </svg>
  ),
  "Node.js": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L2 7v10l10 5 10-5V7l-10-5z"
        fill="#339933"
      />
      <path
        d="M12 2L2 7v10l10 5 10-5V7l-10-5z"
        fill="none"
        stroke="#339933"
        strokeWidth="0.5"
      />
      <path
        d="M7 9.5v5l3 1.5v-5L7 9.5z"
        fill="white"
      />
      <path
        d="M10 11l3-1.5v5l-3 1.5v-5z"
        fill="white"
        opacity="0.7"
      />
      <path
        d="M17 8v5l-3 1.5v-5L17 8z"
        fill="white"
        opacity="0.5"
      />
    </svg>
  ),
  Figma: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="9" y="2" width="6" height="6" rx="3" fill="#F24E1E" />
      <rect x="9" y="8" width="6" height="6" rx="3" fill="#A259FF" />
      <rect x="9" y="14" width="6" height="6" rx="3" fill="#1ABCFE" />
      <rect x="3" y="2" width="6" height="6" rx="3" fill="#FF7262" />
      <rect x="3" y="8" width="6" height="6" rx="3" fill="#0ACF83" />
    </svg>
  ),
  PostgreSQL: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3c-4 0-7 1-7 2.5v13c0 1.5 3 2.5 7 2.5s7-1 7-2.5v-13c0-1.5-3-2.5-7-2.5z"
        fill="#336791"
      />
      <path
        d="M5 18.5c0 1.5 3 2.5 7 2.5s7-1 7-2.5"
        fill="none"
        stroke="#336791"
        strokeWidth="0.5"
      />
      <path
        d="M12 3c-4 0-7 1-7 2.5v2c0-1.5 3-2.5 7-2.5s7 1 7 2.5v-2c0-1.5-3-2.5-7-2.5z"
        fill="#4A90D9"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="9"
        fontWeight="bold"
        fontFamily="Arial"
      >
        SQL
      </text>
    </svg>
  ),
  "AI / LLM Integration": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="url(#ai-gradient)" stroke="url(#ai-gradient)" strokeWidth="0.5" />
      <defs>
        <linearGradient id="ai-gradient" x1="0" y1="0" x2="24" y2="24">
          <stop offset="0%" stopColor="#0071e3" />
          <stop offset="100%" stopColor="#5e5ce6" />
        </linearGradient>
      </defs>
      <path d="M8 9l4 6 4-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  ),
  "UI/UX Design": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="#FF7262" strokeWidth="1.5" fill="none" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="#A259FF" strokeWidth="1.5" fill="none" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="#0ACF83" strokeWidth="1.5" fill="none" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="#1ABCFE" strokeWidth="1.5" fill="none" />
    </svg>
  ),
  "Databases (SQL / NoSQL)": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#336791" strokeWidth="1.5" fill="none" />
      <path d="M4 6v4c0 1.7 3.6 3 8 3s8-1.3 8-3V6" stroke="#336791" strokeWidth="1.5" fill="none" />
      <path d="M4 10v4c0 1.7 3.6 3 8 3s8-1.3 8-3v-4" stroke="#336791" strokeWidth="1.5" fill="none" />
    </svg>
  ),
  "Next.js / React": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="white" />
      <text x="12" y="16" textAnchor="middle" fill="black" fontSize="8" fontWeight="bold" fontFamily="Arial">NR</text>
    </svg>
  ),
  "Git / GitHub": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.76c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" fill="#333" />
    </svg>
  ),
  Git: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L2 7v10l10 5 10-5V7l-10-5z"
        fill="#F05032"
      />
      <path
        d="M7 9.5v5l3 1.5v-5L7 9.5z"
        fill="white"
      />
      <path
        d="M10 11l3-1.5v5l-3 1.5v-5z"
        fill="white"
        opacity="0.7"
      />
      <path
        d="M17 8v5l-3 1.5v-5L17 8z"
        fill="white"
        opacity="0.5"
      />
    </svg>
  ),
};

const techNameMap: Record<string, string> = {
  NTS: "Next.js",
  TS: "TypeScript",
  NSQLTS: "Supabase",
  NSQL: "PostgreSQL",
  N: "Next.js",
};

export function TechIcon({ name, size = 18 }: { name: string; size?: number }) {
  const resolved = techNameMap[name] || name;
  const icon = techIcons[resolved];
  if (!icon) return null;
  return <span style={{ width: size, height: size, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{icon}</span>;
}
