"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

const testimonials = [
  {
    quote: "Marsley delivered our edtech platform ahead of schedule and with exceptional quality. His ability to translate complex requirements into clean, maintainable code is rare.",
    author: "Dr. Sarah Ochieng",
    role: "Founder, Edyfra",
    avatar: "SO",
  },
  {
    quote: "Working with Marsley on Cyzora was seamless. He takes ownership, communicates proactively, and the end result always exceeds expectations. Highly recommended.",
    author: "James Mwangi",
    role: "Partner, Cyzora",
    avatar: "JM",
  },
  {
    quote: "The AI shopping assistant Marsley built for Inshot increased our conversion rate by 34%. He understands both the technical and business side of product development.",
    author: "Lisa Wambui",
    role: "CEO, Trivo Kenya",
    avatar: "LW",
  },
];

export default function TestimonialsSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative py-24 sm:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by Founders
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            Real results from clients I&apos;ve built with.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: prefersReduced ? 0 : i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-2xl border border-border/40 bg-card p-6 transition-all hover:border-border/80 hover:shadow-lg hover:shadow-black/5"
            >
              <div className="flex gap-1 mb-4" aria-label="5 star rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-accent fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold text-sm"
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-text-secondary">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}