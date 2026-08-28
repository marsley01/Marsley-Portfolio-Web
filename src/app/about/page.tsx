"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { DotsGrid, Crosses, Rings, GeometricShape, CornerAccents } from "@/components/VisualAnchors";
import { TechIcon } from "@/components/TechIcons";
import { useAge } from "@/lib/useAge";

const milestones = [
  {
    year: "2023",
    title: "Started the Journey",
    description:
      "Began learning IT at JKUAT while diving into web development and entrepreneurship.",
  },
  {
    year: "2024",
    title: "Founded Cyzora",
    description:
      "Started a web agency focused on building and hosting modern framework-based websites for businesses.",
  },
  {
    year: "2024",
    title: "Built Edyfra",
    description:
      "Created an edtech platform connecting tutors and students with performance monitoring and resource sharing.",
  },
  {
    year: "2025",
    title: "Expanded Portfolio",
    description:
      "Launched Trivo Kenya (tech gadgets), Belloria Beauty (cosmetics showcase), Inshot AI (shop assistant bot), and more.",
  },
  {
    year: "2026",
    title: "Munchify & Multi-Venture",
    description:
      "Running electronics operations at Munchify Market. Six products deployed across edtech, SaaS, fintech, and e-commerce.",
  },
];

const values = [
  {
    title: "Build with Purpose",
    description: "Every project solves a real problem for real people.",
  },
  {
    title: "Ship Fast, Improve Always",
    description: "Launch early, iterate often, and never stop learning.",
  },
  {
    title: "Leverage Over Purity",
    description: "The best builders make the fastest decisions — not the most code.",
  },
  {
    title: "Real Over Impressive",
    description: "Real customers, real revenue, real problems. Everything else is noise.",
  },
];

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

export default function About() {
  const age = useAge();

  return (
    <>
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 pt-28">
        <DotsGrid density="sparse" className="opacity-40" />
        <Crosses />
        <Rings className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" count={2} />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-center"
        >
          {/* Drop your photo at: /public/images/profile.jpg */}
          <div className="flex justify-center mb-8">
            <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-neutral-700">
              <img
                src="/images/profile.jpg"
                alt="Marsley Mash"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-neutral-800 text-white font-bold text-2xl">MM</div>';
                }}
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About Me
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            I&apos;m Mash. I&apos;m {age}, born and raised in Nairobi. I&apos;m studying IT at JKUAT and I&apos;ve been building things on the internet since before I really understood what I was doing.
          </p>
        </motion.div>
      </section>

      <Section className="relative bg-card/30">
        <GeometricShape />
        <CornerAccents />
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold tracking-tight">My Story</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-text-secondary">
              <p>
                It started out of frustration more than passion. I kept seeing problems around me — things that didn&apos;t work the way they should, gaps that nobody was filling — and I got tired of waiting for someone else to fix them. So I started teaching myself. Not from a bootcamp, not from a structured course. Just YouTube, documentation, trial and error, and a lot of late nights staring at error messages I didn&apos;t understand yet.
              </p>
              <p>
                The first few things I built were bad. Really bad. But I kept going because the feeling of making something work — even something small — was addictive. Every time something shipped, even if it was broken half the time, I wanted to build the next thing. That habit never left.
              </p>
              <p>
                Right now my days run at Munchify Market, where I handle operations for electronics and gadgets — sourcing, fulfilment, keeping orders moving across Kenya. It&apos;s taught me more about how business actually works than anything I&apos;ve studied in a classroom. You learn fast when real money and real customers are involved. Mistakes cost you. Speed matters. Relationships matter more than you think.
              </p>
              <p>
                At night I build. I have products deployed — edtech, SaaS, e-commerce, payments. Some are close to fully launching. Some are still finding their footing. But they&apos;re real, they&apos;re live, and I built every one of them myself.
              </p>
              <p>
                The way I build has evolved. I use Cursor, Claude, and Antigravity — not because I can&apos;t write code, but because I figured out early that the builders who win aren&apos;t the ones who write the most code. They&apos;re the ones who make the best decisions fastest. I care about leverage. I care about shipping. I care about whether the thing I&apos;m building actually solves a real problem for a real person.
              </p>
              <p>
                Today I have six products deployed: Cyzora (web builds + e-commerce), Edyfra (edtech, launching soon), KenyaLibrarySystems (B2B SaaS), Mash Payments (fintech infrastructure), Trivo Kenya (gadgets), and GamesNTech (digital marketplace). All live on Vercel.
              </p>
              <p>
                I&apos;m not chasing a job at a big tech company. I&apos;m not trying to raise a seed round right now. I&apos;m trying to build things that work, grow them, and prove the idea — that a 20-year-old from Nairobi building alone at night can ship products that compete with anything.
              </p>
              <p className="font-medium text-foreground">
                I&apos;m still early. I know that. But I&apos;m moving, and I&apos;m not stopping.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="relative">
        <DotsGrid density="medium" className="opacity-30" />
        <div className="mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mb-16 text-center text-3xl font-bold tracking-tight"
          >
            Skills
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50"
              >
                <TechIcon name={skill} />
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </Section>

      <Section className="relative bg-card/30">
        <Rings className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" count={2} />
        <Crosses />
        <div className="mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mb-16 text-center text-3xl font-bold tracking-tight"
          >
            My Journey
          </motion.h2>

          <div className="relative">
            <div className="absolute left-[19px] top-0 h-full w-px bg-border/40" />

            {milestones.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative mb-10 flex gap-6 pl-12 last:mb-0"
              >
                <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-card text-xs font-semibold text-accent">
                  {item.year.slice(2)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="relative">
        <GeometricShape />
        <CornerAccents />
        <div className="mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mb-16 text-center text-3xl font-bold tracking-tight"
          >
            What Drives Me
          </motion.h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border/40 bg-card p-6"
              >
                <h3 className="font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
