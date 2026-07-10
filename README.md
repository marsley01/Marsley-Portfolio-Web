# Marsley Mash &mdash; Founder & Builder

Welcome to the source code of my personal portfolio and digital playground. This repository houses the frontend architecture that drives [marsley-mash-site.vercel.app](https://marsley-mash-site.vercel.app).

This is not a template or a tutorial. It is the bespoke digital presence of a founder running multiple ventures across edtech, fintech, e-commerce, and SaaS from Nairobi, Kenya.

---

## 🎨 Design Philosophy & Architecture

The architecture of this site is heavily focused on delivering a **premium, rockstar-level user experience**. It breaks away from traditional, static personal sites by treating the portfolio itself as a product.

### 1. The Aesthetic

- **True OLED Dark Mode:** The site is built on a pitch-black `#000000` canvas to provide maximum contrast and a sleek, high-end feel.
- **Glassmorphism & Depth:** Heavy use of backdrop blurring (`backdrop-blur-2xl`), semi-transparent borders (`border-white/10`), and deep shadows (`shadow-2xl shadow-black/50`) to create floating UI elements that feel tactile and modern.
- **Micro-interactions:** Every element reacts to the user. From magnetic buttons that snap to the cursor, to 3D tilt effects on project cards, the UI is alive.

### 2. The Engine (Tech Stack)

* **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS + Vanilla CSS Variables for theming
- **Animations:** Framer Motion (Scroll-triggered reveals, spring physics, layout animations)
- **3D Graphics:** Three.js / React Three Fiber (Custom `CrazyParticles` global background rendering 12,000+ points mathematically mapped to torus knots)
- **Smooth Scrolling:** Lenis (For buttery-smooth, inertia-based window scrolling)

### 3. Core Components

- **`CrazyParticles`:** A globally rendered WebGL canvas sitting at `-z-10` behind the entire application. It runs complex mathematical noise functions to simulate a glowing nebula of particles, adding depth to the OLED background without distracting from the content.
- **`CustomCursor`:** A bespoke, dual-layer cursor (a dot and a trailing ring) that utilizes `mix-blend-difference` to seamlessly invert colors based on what it hovers over, ensuring perfect visibility and a premium feel.
- **`ProjectCard`:** A beautifully stacked, 16:9 (`aspect-video`) showcase component that features 3D perspective tilting on mouse movement, highlighting the tech stack, metrics, and live URLs of my active ventures.

---

## 💼 The Portfolio

This codebase showcases the businesses and platforms I have built and scaled:

- **Cyzora** &mdash; E-commerce platform and production-grade web builds.
- **Mash Payments** &mdash; B2B SaaS providing shareable M-Pesa STK Push payment links for Instagram sellers.
- **KenyaLibrarySystems** &mdash; Multi-tenant SaaS for school library management, fully compliant with the Kenya Data Protection Act.
- **agent-preflight** &mdash; Open-source pre-deploy quality gate for AI-assisted builders.
- **Edyfra** &mdash; Edtech platform bridging holiday learning gaps with 70+ active verified users.
- **Trivo Kenya** &mdash; Premium tech gadgets e-commerce store with 300+ listed products.
- **Belloria Beauty** &mdash; High-end cosmetic brand showcase.

---

## ⚠️ Notice

This repository is **read-only** for the public. It serves as an open showcase of my coding style, architectural decisions, and design capabilities. The code is proprietary to my personal brand and is not intended for local deployment, cloning, or modification by third parties.

*I don't just build websites. I build businesses.*

---

**Designed and developed by Mash Marsley in Nairobi, Kenya.**
📫 [Get in touch](mailto:mashmarsley@gmail.com) | [WhatsApp](https://wa.me/254740610772)
