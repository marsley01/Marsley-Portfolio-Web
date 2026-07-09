"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export default function Navigation() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 border-b ${
        scrolled 
          ? "bg-background/90 border-border/40 py-3 shadow-sm" 
          : "bg-background/40 border-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex h-10 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-foreground transition-opacity hover:opacity-80"
          >
            MM
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden sm:flex items-center gap-1 rounded-full border border-border/30 bg-card/40 px-1.5 py-1 backdrop-blur-md">
            {links.map((link) => {
              const isActive = pathname === link.href;
              const isHovered = hovered === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHovered(link.href)}
                  onMouseLeave={() => setHovered(null)}
                  className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-foreground font-semibold"
                      : "text-text-secondary hover:text-foreground"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {(isActive || isHovered) && (
                    <motion.span
                      layoutId="nav-indicator"
                      className={`absolute inset-0 rounded-full ${
                        isActive 
                          ? isHovered 
                            ? "bg-foreground/15" 
                            : "bg-foreground/10" 
                          : "bg-foreground/5"
                      }`}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Side Actions (Desktop) */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="rounded-full border border-border/30 bg-card/40 p-2.5 text-text-secondary transition-colors hover:text-foreground hover:bg-card/80"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
            <Link
              href="https://ke.linkedin.com/in/marsley-anunda-840ab82b0"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border/30 bg-card/40 p-2.5 text-text-secondary transition-colors hover:text-foreground hover:bg-card/80"
              aria-label="LinkedIn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90 active:scale-[0.98]"
            >
              Contact Me
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="rounded-full border border-border/30 bg-card/40 p-2 text-text-secondary"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="flex rounded-full border border-border/30 bg-card/40 p-2 text-text-secondary"
              aria-label="Open menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col bg-background/98 backdrop-blur-2xl sm:hidden"
          >
            <div className="flex items-center justify-between border-b border-border/40 px-6 py-5">
              <span className="text-sm font-semibold text-foreground">Menu</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-foreground/10 hover:text-foreground"
                aria-label="Close menu"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`w-full rounded-2xl py-4 text-center text-xl font-medium transition-colors ${
                      isActive
                        ? "bg-accent/10 text-accent font-semibold"
                        : "text-text-secondary hover:bg-foreground/5 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="border-t border-border/40 px-6 py-6 flex flex-col gap-3">
              <button
                onClick={() => { toggleTheme(); setMobileOpen(false); }}
                className="flex w-full items-center justify-center gap-3 rounded-2xl py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-foreground/5 hover:text-foreground border border-border/30"
              >
                {theme === "dark" ? <><SunIcon /> Switch to Light Mode</> : <><MoonIcon /> Switch to Dark Mode</>}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}