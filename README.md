# Tcongs Infotech — Full-Scale Digital Engineering Platform 🚀

[![Vite](https://img.shields.io/badge/Vite-8.2.1-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React_Router-v7.1-CA4245?style=flat-square&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Lenis](https://img.shields.io/badge/Lenis_Scroll-1.3.26-orange?style=flat-square)](https://lenis.darkroom.engineering/)
[![Nodemailer](https://img.shields.io/badge/Nodemailer-9.0.5-22B573?style=flat-square)](https://nodemailer.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

A world-class, full-scale digital engineering platform for **Tcongs Infotech** ([https://tcongsinfotech.com](https://tcongsinfotech.com)). Engineered with modern React 19 architecture, **React Router dynamic template routing**, the **Plus Jakarta Sans** typography suite, **Lenis inertia-based smooth scrolling**, full Obsidian Dark & Clean Light mode systems, auto-closing feature displays, interconnected internal linking, and **Webverse Nodemailer backend integration**.

---

## 🌐 Live URLs & Repositories

- **Production Deployed Domain**: [https://tcongsinfotech.thewebvale.com/](https://tcongsinfotech.thewebvale.com/)
- **GitHub Repository**: [https://github.com/yashjainbackup9-crypto/tcongsinfotech](https://github.com/yashjainbackup9-crypto/tcongsinfotech)
- **Local Dev Server**: `http://localhost:9001/`
- **Local Nodemailer API Server**: `http://localhost:9002/`

---

## 🗺️ Complete Specialized Sitemap & Route Matrix

### 1. Static Core Pages
| Route | Component | Description |
|---|---|---|
| **`/`** | `HomePage.jsx` | High-velocity hero with live code terminal, world clocks HUD (Mumbai, NY, Dubai, London), ecosystem ticker, services bento, tech matrix, Lighthouse speed benchmark (99/100), 4-phase framework, case studies, multi-currency estimator, and 4-tier luxury footer. |
| **`/about`** | `AboutPage.jsx` | *"Not Your Grandfather's Agency"* — Origin story, engineering manifesto, 2018–2026 milestones, senior engineering squad, and global hub coordinates. |
| **`/services`** | `ServicesPage.jsx` | Master Services Catalog with category filters (Engineering, Mobile, Commerce, Infrastructure, Intelligence, Design) and live search. |
| **`/case-studies`** | `CaseStudiesPage.jsx` | Filterable client portfolio with verified metrics (+310% GMV, 45ms latency, $42M ARR). |
| **`/pricing`** | `PricingPage.jsx` | Interactive scope & timeline calculator with real-time multi-currency support (**USD $**, **INR ₹**, **AED د.إ**, **EUR €**, **GBP £**). |
| **`/careers`** | `CareersPage.jsx` | Engineering culture values (*"No 9 AM Standups"*, *"Ship to Prod on Week 1"*), active roles, and **dedicated direct job application form** with resume/portfolio dispatch. |
| **`/insights`** | `InsightsPage.jsx` | Technical thought leadership articles on Edge compute, React 19, and 50k concurrent checkouts. |
| **`/contact`** | `ContactPage.jsx` | 24/7 global dispatch coordinates (Mumbai, NY, Dubai, London), interactive inquiry form, and 30-min discovery call scheduler. |

### 2. Dynamic Template Pages (`/:slug`)
| Dynamic Pattern | Examples | Features Included |
|---|---|---|
| **`/services/:serviceSlug`** | `/services/web-development`<br>`/services/mobile-apps`<br>`/services/ecommerce-marketplaces`<br>`/services/cloud-devops`<br>`/services/ai-automations`<br>`/services/ui-ux-design` | 4-step technical architecture diagrams, deliverables checklist, technology stack pills, transparent pricing tiers, FAQs, and related case studies. |
| **`/case-studies/:caseSlug`** | `/case-studies/payflow-fintech`<br>`/case-studies/quickmed-healthtech`<br>`/case-studies/hypermarket-ecommerce`<br>`/case-studies/zenith-saas` | Challenge breakdown, technical solution, code snippets, verified before/after metrics, client quotes, and internal service links. |
| **`/insights/:slug`** | `/insights/why-we-killed-monoliths`<br>`/insights/react-19-for-enterprises`<br>`/insights/scaling-ecommerce-50k-checkouts` | In-depth engineering playbooks, syntax-highlighted code blocks, author bio, and 1-click sharing. |

---

## ⚡ Standout Engineering Highlights

1. **Universal Spotlight Command Palette (`Cmd + K`)**: Instant keyboard search indexing all 18+ static and dynamic pages, theme toggling, and consultation triggers.
2. **Dedicated Career Application Engine (`/careers`)**: Dedicated job submission form sending candidate alerts directly to engineering leads with confetti celebrations.
3. **Multi-Currency Pricing Calculator (`/pricing`)**: Dynamic sprint budget estimation across 5 international currencies with instant conversion.
4. **4-Tier Luxury Footer Architecture**: Brand contact card, 4 categorized sitemaps, 5-pillar stats reassurance bar, dual query consultation cards, and SSL security copyright bar.
5. **Lenis Inertia Physics & Scroll Restoration**: Fluid momentum scrolling with automatic `ScrollToTop` on route transitions and 90px anchor offsets.
6. **Obsidian Dark & Clean Light Themes**: Persistent theme engine with automatic feature showcase and header toggle highlight callout.
7. **End-to-End Nodemailer Backend Integration**: Express API server dispatching branded HTML client confirmation emails and admin lead alerts.

---

## 🛠️ Local Development & Setup

### Prerequisites
- Node.js `18.0.0` or higher
- npm / yarn / pnpm

```bash
# 1. Clone Repository
git clone https://github.com/yashjainbackup9-crypto/tcongsinfotech.git
cd tcongsinfotech

# 2. Install Dependencies
npm install

# 3. Configure Environment (Optional for Email Backend)
cp .env.example .env
# Edit .env with your SMTP credentials

# 4. Start Nodemailer API Server (Port 9002)
npm run server

# 5. Start Vite Development Server (Port 9001)
npm run dev -- --port 9001 --host
```

Open **[http://localhost:9001](http://localhost:9001)** in your browser.

---

## 🚀 Production Build & Deployment

```bash
# Build optimized client bundle
npm run build

# Preview production build locally
npm run preview
```

### Deployment Configuration
- **Vercel**: Pre-configured with `vercel.json` rewrite rule for single-page application routing.
- **Netlify**: Pre-configured with `netlify.toml` redirect rule for single-page application routing.

---

## 📄 License
This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
