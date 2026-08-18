# Tcongs Infotech — Official Home Page Redesign 🚀

[![Vite](https://img.shields.io/badge/Vite-8.2.1-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](#)

A world-class, high-converting redesign of the **Tcongs Infotech** ([https://tcongsinfotech.com](https://tcongsinfotech.com)) Home Page. Built with a neo-digital aesthetic, full Dark & Light mode system, rich hardware-accelerated scroll animations, and 100% mobile responsiveness.

---

## 📸 Overview & Live Demo

- **Target Website**: [https://tcongsinfotech.com](https://tcongsinfotech.com)
- **Local Dev Server**: `http://localhost:9001/`
- **Primary Objective**: Complete frontend overhaul of the homepage focusing on **Modern UI/UX, High-Density Interactions, Responsiveness, and Clean Maintainable Architecture**.

---

## 🌟 Key Features & Redesign Highlights

### 🌓 1. Dynamic Dark & Light Mode
- **Navbar Theme Switcher**: Toggle between Dark & Light themes with animated Sun/Moon icons.
- **Persistence**: Automatically respects system preferences and persists user preference in `localStorage`.
- **Obsidian Dark Mode**: Deep black/charcoal backdrop (`#0B0B0E`), glowing borders, and electric crimson accents (`#E51A4B`).
- **Clean Enterprise Light Mode**: Crisp white surfaces (`#FFFFFF`, `#F8FAFC`), elevated soft shadows, and slate typography.

### 🌊 2. Animate on Scroll (AOS) Engine
- Built a custom hardware-accelerated [`ScrollReveal.jsx`](./src/components/ScrollReveal.jsx) component using `IntersectionObserver` with smooth cubic-bezier easing (`translate3d`).
- Staggered cascading entrance reveals for all Bento cards, Tech Stack chips, and process phases.

### 🧩 3. Interactive Services Bento Grid
- 6 core business pillars (Custom Web & Mobile, Enterprise SaaS, E-Commerce, UI/UX Branding, Performance Marketing & GEO, Startup MVP).
- Category filtering with instant transitions and click-to-open **Deep-Dive Deliverable Modals**.

### 💻 4. Interactive Tech Matrix
- Searchable and categorized technology matrix across Frontend & Mobile, Backend & Database, Cloud & DevOps, and E-Commerce.

### 📐 5. 6-Step Growth Framework
- Interactive step-by-step deliverable walkthrough with phase checklists, bi-weekly sprint notes, and previous/next mobile controls.

### 🧮 6. Real-Time Project Scope & Timeline Estimator
- Dynamic calculator computing budget ranges and delivery sprints based on project type, scale tier, and technology add-ons (AI, GEO, Marketplaces).

### 📅 7. Lead Conversion & 30-Min Discovery Scheduler Modal
- Validated inquiry form with budget picker, human verification check, and celebration confetti.
- Interactive 30-minute discovery call booking scheduler supporting multiple global timezones (EST, PST, GST, GMT, IST).

---

## 📦 Extracted Original Website Assets

All original assets from `https://tcongsinfotech.com/` were extracted and integrated into [`public/assets/`](./public/assets):

- **Official Brand SVG**: `/assets/frontend-assets/images/svgs/logo.svg`
- **Favicon**: `/assets/frontend-assets/images/favicon.png`
- **Platform & Marketplace Vectors**: Amazon, Flipkart, Shopify Plus, Meesho, Myntra, React, Flutter, Node.js, Laravel, Google Ads, Figma, Cloud, AI.
- **Graphic Assets**: Hero backgrounds, ambient bubbles, and security shield SVGs.

---

## 🏗️ Project Architecture

```
tcongs-redesign/
├── public/
│   └── assets/                     # 53 extracted official SVG & WebP assets
│       └── frontend-assets/
│           └── images/
│               ├── svgs/           # Official logo, dev, branding, chip-ai
│               └── services-icons/ # Amazon, Flipkart, Shopify, React, Flutter, etc.
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Sticky blur header, theme toggle, mobile drawer
│   │   ├── Hero.jsx                # Dynamic headline, stats counter, code terminal
│   │   ├── ClientTicker.jsx        # Infinite scrolling platform & ecosystem banner
│   │   ├── ServicesBento.jsx       # 6-pillar bento grid with modal deep-dive
│   │   ├── TechMatrix.jsx          # Filterable & searchable tech matrix
│   │   ├── ProcessFlow.jsx         # 6-step framework with phase deliverables
│   │   ├── CaseStudies.jsx         # Client ROI metrics & verified testimonials
│   │   ├── CostEstimator.jsx       # Interactive scope & timeline calculator
│   │   ├── FAQSection.jsx          # Accordion FAQ with smooth toggles
│   │   ├── ContactSection.jsx      # Conversion form with celebration confetti
│   │   ├── ConsultationModal.jsx   # 30-min discovery call booking popup
│   │   ├── Footer.jsx              # Global reach, sitemap, and newsletter
│   │   └── ScrollReveal.jsx        # IntersectionObserver animate-on-scroll wrapper
│   ├── context/
│   │   └── ThemeContext.jsx        # Dark/Light theme state & localStorage
│   ├── data/
│   │   └── content.js              # Centralized data model for all sections
│   ├── App.jsx                     # Master application layout
│   ├── index.css                   # Tailwind v4 tokens & glassmorphism system
│   └── main.jsx                    # React 19 entry point
├── vercel.json                     # Vercel SPA routing
├── netlify.toml                    # Netlify deployment configuration
├── vite.config.js                  # Vite + Tailwind v4 config
└── package.json
```

---

## 🛠️ Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server (Port 9001)
```bash
npm run dev -- --port 9001 --host
```
Open **[http://localhost:9001](http://localhost:9001)** in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 🚀 1-Click Live Deployment

### Deploy to Vercel
```bash
npx vercel
```

### Deploy to Netlify
```bash
npx netlify deploy --prod --dir=dist
```

---

## 📄 License & Attribution

Designed and engineered for the **Tcongs Infotech** frontend evaluation assignment. All original brand trademarks and logos belong to Tcongs Infotech.
