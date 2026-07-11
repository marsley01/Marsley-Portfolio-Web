"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Section from "@/components/Section";
import { DotsGrid, Crosses, Rings, GeometricShape, CornerAccents } from "@/components/VisualAnchors";
import RevealOnScroll from "@/components/RevealOnScroll";
import Magnetic from "@/components/Magnetic";

const socials = [
  {
    name: "Instagram",
    handle: "@marlsey.official",
    url: "https://instagram.com/marlsey.official",
  },
  {
    name: "GitHub",
    handle: "marsley01",
    url: "https://github.com/marsley01",
  },
  {
    name: "LinkedIn",
    handle: "Marsley Anunda",
    url: "https://ke.linkedin.com/in/marsley-anunda-840ab82b0",
  },
  {
    name: "Email",
    handle: "mashmarsley@gmail.com",
    url: "mailto:mashmarsley@gmail.com",
  },
  {
    name: "Phone",
    handle: "+254 740 610 772",
    url: "tel:+254740610772",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSending(true);
    const form = new FormData();
    form.append("name", formState.name);
    form.append("email", formState.email);
    form.append("message", formState.message);

    try {
      const res = await fetch("https://formsubmit.co/ajax/mashmarskey@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json" 
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `New message from ${formState.name} (Portfolio)`,
        }),
      });
      if (!res.ok) throw new Error("Failed to send. Please try again.");
      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section className="relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden px-6 pt-28">
        <DotsGrid density="sparse" className="opacity-40" />
        <Crosses />
        <Rings className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" count={2} />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            Got a project, collab, or just want to say hi? I&apos;d love to hear
            from you.
          </p>
        </motion.div>
      </section>

      <Section className="relative bg-card/30">
        <GeometricShape />
        <CornerAccents />
        <DotsGrid density="medium" className="opacity-20" />
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
            <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <RevealOnScroll>
              <h2 className="text-2xl font-bold tracking-tight">Send a Message</h2>
            </RevealOnScroll>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 rounded-2xl bg-card p-8 text-center"
              >
                <p className="text-lg font-semibold text-foreground">
                  Message sent!
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  I&apos;ll get back to you as soon as possible.
                </p>
                <Magnetic>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-full border border-border/40 px-6 py-2 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
                  >
                    Send Another
                  </button>
                </Magnetic>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    required
                    className="w-full rounded-xl border border-border/40 bg-card px-5 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-text-secondary/60 focus:border-accent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    required
                    className="w-full rounded-xl border border-border/40 bg-card px-5 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-text-secondary/60 focus:border-accent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    required
                    className="w-full resize-none rounded-xl border border-border/40 bg-card px-5 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-text-secondary/60 focus:border-accent"
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-500">{error}</p>
                )}
                <Magnetic>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.97] disabled:opacity-50"
                  >
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </Magnetic>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            viewport={{ once: true }}
          >
            <RevealOnScroll>
              <h2 className="text-2xl font-bold tracking-tight">
                Connect With Me
              </h2>
            </RevealOnScroll>
            <div className="mt-8 space-y-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-border/40 bg-card p-5 transition-colors hover:border-border"
                >
                  <div>
                    <p className="font-semibold text-foreground">
                      {social.name}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {social.handle}
                    </p>
                  </div>
                  <span className="text-text-secondary">&rarr;</span>
                </a>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-border/40 bg-card p-6">
              <p className="text-sm text-text-secondary">
                Prefer to chat right now? Try the{" "}
                <span className="text-accent">assistant bot</span> in the bottom-right
                corner &mdash; it can answer questions about my projects and
                how to reach me.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
