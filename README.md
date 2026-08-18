# Tcongs Infotech — Official Home Page Redesign 🚀

[![Vite](https://img.shields.io/badge/Vite-8.2.1-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Nodemailer](https://img.shields.io/badge/Nodemailer-9.0.5-22B573?style=flat-square)](https://nodemailer.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](#)

A world-class, high-converting redesign of the **Tcongs Infotech** ([https://tcongsinfotech.com](https://tcongsinfotech.com)) Home Page. Built with a neo-digital aesthetic, full Dark & Light mode system, continuous auto-scrolling & auto-advancing carousels with smooth slow-on-hover physics, 100% mobile responsiveness, and **integrated Webverse Nodemailer email engine**.

---

## 📸 Overview & Live Repositories

- **Target Website**: [https://tcongsinfotech.com](https://tcongsinfotech.com)
- **Local Frontend Dev Server**: `http://localhost:9001/`
- **Local Nodemailer API Server**: `http://localhost:9002/`
- **GitHub Repository**: [https://github.com/yashjainbackup9-crypto/tcongsinfotech](https://github.com/yashjainbackup9-crypto/tcongsinfotech)
- **SSH Host Profile**: `github-backup-9` (`~/.ssh/yashjain.backup.9`)

---

## 🌟 Complete Feature Record & System Capabilities

### 🌓 1. Dynamic Dark & Light Mode
- **Navbar Theme Switcher**: Toggle between Dark & Light themes with animated Sun/Moon icons.
- **Persistence**: Automatically respects system preferences and persists user preference in `localStorage`.
- **Obsidian Dark Mode**: Deep black/charcoal backdrop (`#0B0B0E`), glowing borders, and electric crimson accents (`#E51A4B`).
- **Clean Enterprise Light Mode**: Crisp white surfaces (`#FFFFFF`, `#F8FAFC`), elevated soft shadows, and slate typography.

### 🎡 2. Continuous Auto-Scrolling & Auto-Advancing Carousels
- **Auto-Changing Delivery Framework (`ProcessFlow.jsx`)**: Automatically cycles through 6 delivery phases with a real-time gradient progress line (`0% → 100%`) over 3.8s, animated phase card transitions, and active button indicators.
- **Auto-Changing Case Studies (`CaseStudies.jsx`)**: Rotates featured case studies with live progress bar and arrow navigation.
- **Auto-Advancing Solutions Carousel (`ServicesBento.jsx`)**: Cycles through all specialized service pillars with deep-dive modal triggers.
- **Bidirectional Tech Marquee (`TechMatrix.jsx`)**: Row 1 scrolls leftwards, Row 2 scrolls rightwards with **smooth slow-down on hover** (decelerates to 3.5x slower duration for comfortable reading).
- **Client & Ecosystem Marquee (`ClientTicker.jsx`)**: Infinite horizontal stream of official marketplace and framework icons.
- **Testimonials Stream (`CaseStudies.jsx`)**: Continuous auto-scrolling client reviews with slow-down on hover.

### 🎯 3. Tactile Focus, Hover & Active States
- Subtle micro-interactions: `hover:translate-y-[-1.5px]`, crimson border glow, and gentle elevation.
- Standard `:focus-visible` styling (`outline: 2px solid #E51A4B; outline-offset: 2px;`) for keyboard accessibility.
- Clean and minimal UI without cluttering play/pause buttons.

### 📧 4. Webverse Nodemailer Email Integration
- **Branded HTML Client Confirmation Template**: Automated confirmation email sent to prospective clients with an Obsidian header, inquiry details breakdown, 24-hour turnaround commitment, and 1-click discovery call booking link.
- **Admin Lead Alert Notification**: Instant lead notification sent to `info@thewebvale.com` with client info and 1-click `mailto:` reply.

#### Environment Variables (`.env`)
```env
BASE_SYSTEM_NODEMAILER_EMAIL_ADDRESS=info@thewebvale.com
BASE_SYSTEM_NODEMAILER_EMAIL_PASSWORD=Global5972@
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
NOTIFICATION_RECIPIENT=info@thewebvale.com
PORT=9002
```

### 🧭 5. Floating Section Navigator (`SectionAutoScroller.jsx`)
- Floating bottom-left controller showing current section position (e.g. `Case Studies (6/9)`), animated pulse dot, and up/down smooth jump controls.

### 📦 6. 53 Extracted Original Assets (`public/assets/`)
- Extracted official SVG logo, brand favicon, and 25+ marketplace/framework vector icons from `https://tcongsinfotech.com/`.

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
│   │   ├── Navbar.jsx              # Sticky blur header, theme toggle, mobile drawer
│   │   ├── Hero.jsx                # Dynamic headline, stats counter, code terminal
│   │   ├── ClientTicker.jsx        # Infinite scrolling platform & ecosystem banner
│   │   ├── ServicesBento.jsx       # Auto-advancing service carousel with deep-dive modal
│   │   ├── TechMatrix.jsx          # Dual-row continuous auto-scrolling tech marquee
│   │   ├── ProcessFlow.jsx         # Auto-advancing 6-step framework with progress bar
│   │   ├── CaseStudies.jsx         # Auto-changing case studies & testimonial marquee
│   │   ├── CostEstimator.jsx       # Interactive scope & timeline calculator
│   │   ├── FAQSection.jsx          # Accordion FAQ with smooth toggles
│   │   ├── ContactSection.jsx      # Form with Nodemailer API & celebration confetti
│   │   ├── ConsultationModal.jsx   # 30-min discovery call scheduler modal
│   │   ├── SectionAutoScroller.jsx # Floating section locator & quick jump controls
│   │   ├── Footer.jsx              # Global reach, sitemap, and newsletter
│   │   └── ScrollReveal.jsx        # IntersectionObserver animate-on-scroll wrapper
│   ├── context/
│   │   └── ThemeContext.jsx        # Dark/Light theme state & localStorage
│   ├── data/
│   │   └── content.js              # Centralized data model for all sections
│   ├── App.jsx                     # Master application layout
│   ├── index.css                   # Tailwind v4 tokens & glassmorphism system
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

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Servers
```bash
# Terminal 1: Start Nodemailer API Server (Port 9002)
npm run server

# Terminal 2: Start Vite Frontend (Port 9001)
npm run dev -- --port 9001 --host
```

Open **[http://localhost:9001](http://localhost:9001)** in your browser.

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
