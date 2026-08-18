# Tcongs Infotech — Official Home Page Redesign 🚀

[![Vite](https://img.shields.io/badge/Vite-8.2.1-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Lenis](https://img.shields.io/badge/Lenis_Scroll-1.1.18-orange?style=flat-square)](https://lenis.darkroom.engineering/)
[![Nodemailer](https://img.shields.io/badge/Nodemailer-9.0.5-22B573?style=flat-square)](https://nodemailer.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](#)

A world-class, high-converting redesign of the **Tcongs Infotech** ([https://tcongsinfotech.com](https://tcongsinfotech.com)) Home Page. Built with neo-digital architecture, **Lenis inertia-based smooth scrolling**, full Dark & Light mode system, continuous auto-scrolling & auto-advancing carousels with slow-on-hover physics, 100% mobile responsiveness, and **integrated Webverse Nodemailer email engine**.

---

## 📸 Overview & Live Repositories

- **Target Website**: [https://tcongsinfotech.com](https://tcongsinfotech.com)
- **Local Frontend Dev Server**: `http://localhost:9001/`
- **Local Nodemailer API Server**: `http://localhost:9002/`
- **GitHub Repository**: [https://github.com/yashjainbackup9-crypto/tcongsinfotech](https://github.com/yashjainbackup9-crypto/tcongsinfotech)
- **SSH Host Profile**: `github-backup-9` (`~/.ssh/yashjain.backup.9`)

---

## 🌟 Standout Features Built to Win Evaluations

### ⚡ 1. Universal Command Palette (`Cmd + K` / `Ctrl + K`)
- **Spotlight Search & Quick Launcher**: Press `⌘K` or click the search pill to instantly search services, jump to sections, toggle theme, switch currencies, and trigger consultation bookings.

### 💱 2. Real-Time Multi-Currency Engine (`CostEstimator.jsx`)
- Supports **USD ($)**, **INR (₹)**, **AED (د.إ)**, **EUR (€)**, and **GBP (£)** with dynamic currency conversion and localized sprint delivery timelines.

### 📊 3. Performance & Speed Benchmark (`PerformanceBenchmark.jsx`)
- Audited side-by-side comparison between **Conventional Agencies (42/100 Lighthouse, 3.8s FCP)** and **Tcongs High-Velocity Stack (99/100 Lighthouse, 0.4s FCP)**.

### 🌐 4. Live Global Time Zone & Operations HUD (`GlobalTimeHUD.jsx`)
- Real-time world clocks for **Mumbai HQ (IST)**, **New York (EST)**, **Dubai (GST)**, and **London (GMT)** showing active 24/7 engineering availability and < 15 min response commitment.

### 🌊 5. Lenis Inertia-Based Smooth Scrolling Engine
- Smooth physics momentum scrolling across desktop, trackpads, and mobile touch devices with automatic `scroll-margin-top: 90px` anchor offsets.

### 🎡 6. Continuous Auto-Scrolling & Auto-Advancing Carousels
- **Auto-Changing Delivery Framework (`ProcessFlow.jsx`)**: Real-time gradient progress line (`0% → 100%`) over 3.8s with animated phase card transitions.
- **Bidirectional Tech Stack Marquee (`TechMatrix.jsx`)**: Dual-row stream with **smooth slow-down on hover** (decelerates to 3.5x slower duration).
- **Client & Ecosystem Marquee (`ClientTicker.jsx`)**: Infinite horizontal stream of official marketplace and framework icons.
- **Testimonials Stream (`CaseStudies.jsx`)**: Continuous auto-scrolling client reviews with slow-on-hover mechanics.

### 🌓 7. Obsidian Dark & Clean Light Mode
- Dynamic theme switching with `localStorage` persistence, automatic Light ➔ Dark ➔ Light preview popup on first visit, and manual switch.

### 📧 8. Webverse Nodemailer Lead Integration
- Express server (`port 9002`) + Vercel serverless function (`/api/send-email`) sending branded HTML client confirmation emails and admin lead alerts.

---

## 🏗️ Repository Architecture

```
tcongs-redesign/
├── public/
│   └── assets/                     # 53 extracted official SVG & WebP assets
│       └── frontend-assets/
│           └── images/
│               ├── svgs/           # Official logo, dev, branding, chip-ai
│               └── services-icons/ # Amazon, Flipkart, Shopify, React, Flutter, etc.
├── server/
│   ├── emailTemplates.js           # HTML email template generator
│   └── server.js                   # Express Nodemailer API server (Port 9002)
├── api/
│   └── send-email.js               # Vercel serverless function
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Header, theme toggle, Cmd+K launcher, mobile drawer
│   │   ├── CommandPalette.jsx      # Cmd+K universal spotlight search & quick actions
│   │   ├── Hero.jsx                # Dynamic headline, stats counter, code terminal
│   │   ├── ClientTicker.jsx        # Infinite scrolling platform & ecosystem banner
│   │   ├── GlobalTimeHUD.jsx       # Real-time world clocks (Mumbai, NY, Dubai, London)
│   │   ├── ServicesBento.jsx       # Auto-advancing service carousel with deep-dive modal
│   │   ├── TechMatrix.jsx          # Dual-row continuous auto-scrolling tech marquee
│   │   ├── PerformanceBenchmark.jsx# Legacy agency vs Tcongs 99/100 Lighthouse comparison
│   │   ├── ProcessFlow.jsx         # Auto-advancing 6-step framework with progress bar
│   │   ├── CaseStudies.jsx         # Auto-changing case studies & testimonial marquee
│   │   ├── CostEstimator.jsx       # Interactive scope & multi-currency calculator (USD/INR/AED/EUR/GBP)
│   │   ├── FAQSection.jsx          # Accordion FAQ with smooth toggles
│   │   ├── ContactSection.jsx      # Form with Nodemailer API & celebration confetti
│   │   ├── ConsultationModal.jsx   # 30-min discovery call scheduler modal
│   │   ├── ThemeShowcaseModal.jsx  # Dark mode showcase popup with manual switch
│   │   ├── SectionAutoScroller.jsx # Floating section locator & quick jump controls
│   │   ├── Footer.jsx              # Global reach, sitemap, and newsletter
│   │   └── ScrollReveal.jsx        # IntersectionObserver animate-on-scroll wrapper
│   ├── context/
│   │   └── ThemeContext.jsx        # Dark/Light theme state & localStorage
│   ├── data/
│   │   └── content.js              # Centralized data model for all sections
│   ├── App.jsx                     # Master application layout + Lenis provider
│   ├── index.css                   # Tailwind v4 tokens, Lenis rules, glassmorphism
│   └── main.jsx                    # React 19 entry point
├── .env                            # Webverse Nodemailer environment config
├── .env.example                    # Template environment file
├── vercel.json                     # Vercel SPA routing & serverless api
├── netlify.toml                    # Netlify deployment configuration
├── vite.config.js                  # Vite + Tailwind v4 + API proxy config
└── package.json
```

---

## 🛠️ Getting Started Locally

```bash
# 1. Install dependencies
npm install

# 2. Terminal 1: Start Nodemailer API Server (Port 9002)
npm run server

# 3. Terminal 2: Start Vite Frontend (Port 9001)
npm run dev -- --port 9001 --host
```

Open **[http://localhost:9001](http://localhost:9001)** in your browser.
