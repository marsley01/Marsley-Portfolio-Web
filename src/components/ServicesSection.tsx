"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

const services = [
  {
    title: "Full-Stack Web Development",
    description: "End-to-end web applications built with Next.js, React, TypeScript, and modern tooling. From MVP to production.",
    icon: "Code",
  },
  {
    title: "SaaS & Product Development",
    description: "Build and launch scalable SaaS products with authentication, payments, dashboards, and multi-tenant architecture.",
    icon: "Cpu",
  },
  {
    title: "AI / LLM Integration",
    description: "Integrate AI into your product — chatbots, agents, RAG pipelines, embeddings, and custom model fine-tuning.",
    icon: "Brain",
  },
  {
    title: "UI/UX Design & Prototyping",
    description: "Design systems, component libraries, interactive prototypes, and pixel-perfect implementations in Tailwind CSS.",
    icon: "Layout",
  },
  {
    title: "API & Backend Development",
    description: "REST/GraphQL APIs, database design (PostgreSQL, MongoDB), serverless functions, and real-time infrastructure.",
    icon: "Database",
  },
  {
    title: "Technical Consulting",
    description: "Architecture reviews, tech stack decisions, performance audits, and team mentorship for early-stage teams.",
    icon: "Terminal",
  },
];

const icons: Record<string, React.ReactNode> = {
  Code: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Cpu: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="1" y1="15" x2="4" y2="15" />
      <line x1="20" y1="15" x2="23" y2="15" />
    </svg>
  ),
  Brain: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4a5 5 0 0 0-5 5c0 1.5.8 2.8 2 3.5V18a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-5.5a4.5 4.5 0 0 0 2-3.5 5 5 0 0 0-5-5z" />
      <path d="M9 9h6M9 13h6M9 17h6" strokeWidth="2" />
    </svg>
  ),
  Layout: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  ),
  Database: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 5.5 3 12 3s12-1.34 12-3V5" />
      <path d="M3 12a9 3 0 0 0 18 0" />
    </svg>
  ),
  Terminal: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  ),
};

export default function ServicesSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What I Do
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            I help founders and teams build, launch, and scale digital products.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: prefersReduced ? 0 : i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group rounded-2xl border border-border/40 bg-card p-6 transition-all hover:border-border/80 hover:shadow-lg hover:shadow-black/5"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                {icons[service.icon]}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}