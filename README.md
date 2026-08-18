# Tcongs Infotech — Official Home Page Redesign 🚀

[![Vite](https://img.shields.io/badge/Vite-8.2.1-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Nodemailer](https://img.shields.io/badge/Nodemailer-9.0.5-22B573?style=flat-square)](https://nodemailer.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](#)

A world-class, high-converting redesign of the **Tcongs Infotech** ([https://tcongsinfotech.com](https://tcongsinfotech.com)) Home Page. Built with a neo-digital aesthetic, full Dark & Light mode system, continuous auto-scrolling & auto-advancing carousels, 100% mobile responsiveness, and **integrated Webverse Nodemailer email engine**.

---

## 📸 Overview & Live Demo

- **Target Website**: [https://tcongsinfotech.com](https://tcongsinfotech.com)
- **Local Frontend Dev Server**: `http://localhost:9001/`
- **Local Nodemailer API Server**: `http://localhost:9002/`
- **GitHub Repository**: [https://github.com/yashjainbackup9-crypto/tcongsinfotech](https://github.com/yashjainbackup9-crypto/tcongsinfotech)

---

## 📧 Webverse Nodemailer Email Integration

The platform includes an automated dual-dispatch email workflow for all inquiries and discovery consultations:

1. **Branded HTML Client Confirmation Template**:
   - Dispatched immediately to the client's work email.
   - Includes **Obsidian Header & Crimson Badge**, personalized greeting, structured breakdown of their inquiry (Solution, Budget Range, Notes), a 24-hour turnaround commitment, and a 1-click **Discovery Call Booking Link**.
2. **Internal Admin Lead Alert**:
   - Sent to `info@thewebvale.com` with client name, email, phone, timestamp (IST), and direct 1-click reply button.

### Environment Configuration (`.env`)
```env
BASE_SYSTEM_NODEMAILER_EMAIL_ADDRESS=info@thewebvale.com
BASE_SYSTEM_NODEMAILER_EMAIL_PASSWORD=Global5972@
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
NOTIFICATION_RECIPIENT=info@thewebvale.com
PORT=9002
```

---

## 🌟 Key Features & Redesign Highlights

### 🌓 1. Dynamic Dark & Light Mode
- **Navbar Theme Switcher**: Toggle between Dark & Light themes with animated Sun/Moon icons.
- **Persistence**: Automatically respects system preferences and persists in `localStorage`.
- **Obsidian Dark Mode**: Deep black/charcoal backdrop (`#0B0B0E`), glowing borders, and electric crimson accents (`#E51A4B`).
- **Clean Enterprise Light Mode**: Crisp white surfaces (`#FFFFFF`, `#F8FAFC`), elevated soft shadows, and slate typography.

### 🎡 2. Constant Auto-Scrolling & Auto-Advancing Carousels
- **Auto-Changing Case Studies Carousel**: Rotates every 4s with progress line, play/pause controls, and pause-on-hover.
- **Continuous Testimonial Marquee**: Smooth infinite horizontal scrolling marquee stream.
- **Bidirectional Dual-Row Tech Marquee**: Row 1 scrolls leftwards, Row 2 scrolls rightwards with pause-on-hover.
- **Auto-Advancing 6-Step Delivery Framework**: Automatically steps through development phases.
- **Solutions Carousel**: Cycles through all specialized service pillars.

### 🌊 3. Animate on Scroll (AOS) Engine
- Built a custom hardware-accelerated [`ScrollReveal.jsx`](./src/components/ScrollReveal.jsx) component using `IntersectionObserver` with smooth cubic-bezier easing (`translate3d`).

### 📦 4. 53 Extracted Official Assets
- Official SVG logo, brand favicon, and 25+ marketplace/tech vector icons from `https://tcongsinfotech.com/`.

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
│   │   ├── ProcessFlow.jsx         # Auto-advancing 6-step framework
│   │   ├── CaseStudies.jsx         # Auto-changing case studies & testimonial marquee
│   │   ├── CostEstimator.jsx       # Interactive scope & timeline calculator
│   │   ├── FAQSection.jsx          # Accordion FAQ with smooth toggles
│   │   ├── ContactSection.jsx      # Form with Nodemailer API & celebration confetti
│   │   ├── ConsultationModal.jsx   # 30-min discovery call scheduler modal
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

### 2. Start Email Backend & Frontend Dev Servers
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
