export const STATS = [
  { value: "8+", label: "Years of Excellence", desc: "Proven track record in global digital delivery" },
  { value: "180+", label: "Projects Shipped", desc: "Web, Mobile, SaaS & E-commerce platforms" },
  { value: "99.4%", label: "Client Satisfaction", desc: "Across USA, Canada, Dubai & India" },
  { value: "4.8x", label: "Average ROI Uplift", desc: "For scaling brands & marketplaces" },
];

export const CLIENT_LOCATIONS = [
  { country: "United States", flag: "🇺🇸", cities: "San Francisco, New York, Austin" },
  { country: "United Arab Emirates", flag: "🇦🇪", cities: "Dubai, Abu Dhabi" },
  { country: "Canada", flag: "🇨🇦", cities: "Toronto, Vancouver" },
  { country: "India (HQ)", flag: "🇮🇳", cities: "Mumbai HQ, Bengaluru" },
  { country: "United Kingdom", flag: "🇬🇧", cities: "London, Manchester" },
];

export const SERVICES = [
  {
    id: "web-development",
    slug: "web-development",
    title: "Web & High-Velocity Platforms",
    category: "ENGINEERING",
    highlight: "High-Performance Platforms",
    description: "Architecting lightning-fast web applications, React 19/Next.js platforms, and PWAs designed for millions of daily active users with sub-400ms load times.",
    icon: "Code2",
    tags: ["React 19", "Next.js 15", "Vite", "TypeScript", "Node.js", "Redis"],
    metrics: "99.9% Uptime • <0.4s FCP",
    featured: true,
    capabilities: [
      "Custom React 19 & Next.js 15 Web Applications",
      "Progressive Web Apps (PWA) with Offline Engine",
      "High-Concurrency Edge APIs (Node.js, Go, Python)",
      "Headless CMS Architecture (Sanity, Strapi)",
      "Server-Side Rendering & Global Edge Caching"
    ]
  },
  {
    id: "mobile-apps",
    slug: "mobile-apps",
    title: "Mobile App Engineering",
    category: "MOBILE",
    highlight: "Native & Cross-Platform",
    description: "Engineering fluid iOS & Android apps using Flutter and React Native with 60fps animations, offline persistence, and biometric security.",
    icon: "Smartphone",
    tags: ["Flutter 3", "React Native", "Swift iOS", "Kotlin Android", "WebRTC"],
    metrics: "60 FPS • Offline-First SQLite",
    featured: true,
    capabilities: [
      "Cross-Platform iOS & Android Apps (Flutter / React Native)",
      "Native iOS (Swift) & Android (Kotlin) Core Modules",
      "Real-Time WebSockets & Push Notification Pipelines",
      "Offline Database Sync with SQLite & Realm",
      "In-App Purchases, Apple Pay & Google Pay Gateways"
    ]
  },
  {
    id: "ecommerce-marketplaces",
    slug: "ecommerce-marketplaces",
    title: "E-Commerce & Marketplaces",
    category: "COMMERCE",
    highlight: "High-Converting Storefronts",
    description: "Launch, manage, and scale global multi-channel marketplaces including Amazon, Flipkart, Myntra, Nykaa, and custom Shopify Plus headless stores.",
    icon: "ShoppingBag",
    tags: ["Shopify Plus", "Amazon SP-API", "Flipkart Hub", "Catalog Ops", "Global Sync"],
    metrics: "+310% Black Friday Surge • 1-Click Checkout",
    featured: true,
    capabilities: [
      "Custom Shopify Plus & Hydrogen Headless Storefronts",
      "Amazon SP-API & Flipkart Multi-Channel Inventory Sync",
      "Custom Payment Gateways & One-Click Checkout Engines",
      "Automated Catalog Management & ERP Connectors",
      "Conversion Rate Optimization (CRO) & A/B Experimentation"
    ]
  },
  {
    id: "cloud-devops",
    slug: "cloud-devops",
    title: "Cloud & DevOps Architecture",
    category: "INFRASTRUCTURE",
    highlight: "Zero-Downtime Microservices",
    description: "Enterprise Kubernetes orchestration, AWS/GCP serverless architectures, automated CI/CD pipelines, and 99.99% high-availability SLAs.",
    icon: "Cloud",
    tags: ["AWS ECS/EKS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    metrics: "99.99% High Availability • Automated Rollbacks",
    featured: true,
    capabilities: [
      "AWS / GCP Multi-Region Cloud Infrastructure",
      "Docker & Kubernetes Container Orchestration",
      "Infrastructure as Code (IaC) with Terraform",
      "Automated Zero-Downtime CI/CD Deployment Pipelines",
      "24/7 SRE Monitoring with Prometheus, Grafana & Datadog"
    ]
  },
  {
    id: "ai-automations",
    slug: "ai-automations",
    title: "AI & Workflow Automations",
    category: "INTELLIGENCE",
    highlight: "Autonomous Enterprise Agents",
    description: "Deploying custom LLM agentic pipelines, Retrieval-Augmented Generation (RAG) knowledge bots, and automated CRM workflows that save 40+ hours per week.",
    icon: "Sparkles",
    tags: ["Custom LLMs", "Claude & GPT-4o", "RAG / Vector DB", "LangChain", "n8n"],
    metrics: "40+ Hours Saved/Week • Sub-Second Semantic Search",
    featured: true,
    capabilities: [
      "Custom Retrieval-Augmented Generation (RAG) Document Bots",
      "Autonomous Agentic Workflows & Tool-Calling Agents",
      "Vector Database Architecture (Pinecone, Qdrant, Chroma)",
      "Automated CRM & Customer Support Pipelines",
      "Generative Engine Optimization (GEO) for AI Search"
    ]
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "UI/UX & Design Systems",
    category: "DESIGN",
    highlight: "World-Class Product Aesthetics",
    description: "Crafting modern Figma enterprise design systems, neo-digital brand identities, and micro-interaction UX that converts casual visitors into loyal power users.",
    icon: "Palette",
    tags: ["Figma Systems", "Neo-Digital UX", "Design Tokens", "Motion Design", "Design Audits"],
    metrics: "Design Tokens • WCAG 2.1 AA Compliant",
    featured: true,
    capabilities: [
      "Enterprise Figma Component Libraries & Design Tokens",
      "End-to-End User Journey Mapping & Interactive Wireframes",
      "High-Fidelity Interactive Prototypes with Micro-Animations",
      "Comprehensive Accessibility (WCAG 2.1 AA) Audits",
      "Brand Identity Systems, 3D Assets & Iconography"
    ]
  }
];

export const SERVICES_DETAILED = {
  "web-development": {
    id: "web-development",
    slug: "web-development",
    title: "Web & High-Velocity Platforms",
    subtitle: "Digital Ferraris Engineered with React 19 & Next.js 15",
    category: "Software Engineering",
    badge: "Top 1% Engineering",
    heroHeadline: "We don't build websites from 2014 templates. We engineer high-velocity digital Ferraris.",
    description: "In an era where a 100ms latency drop costs 7% in sales, we build lightning-fast web applications with clean React 19 architecture, Edge-rendered Next.js 15, and instant global CDN distribution.",
    stats: [
      { label: "Certified Lighthouse Score", value: "99 / 100" },
      { label: "First Contentful Paint", value: "0.4s" },
      { label: "Concurrent Request Capacity", value: "50,000+" },
      { label: "Uptime SLA Guarantee", value: "99.99%" }
    ],
    architecture: [
      { step: "01", title: "Edge Caching & CDN Layer", desc: "Cloudflare Workers & Vercel Edge compute assets in <30ms globally." },
      { step: "02", title: "Server Components & Suspense", desc: "React 19 Server Components stream HTML instantly with zero client bloat." },
      { step: "03", title: "Redis State & Micro-APIs", desc: "Sub-millisecond session caching and resilient Node.js / Go microservices." },
      { step: "04", title: "Automated CI/CD Test Matrix", desc: "Continuous integration with 95%+ unit and E2E Playwright coverage." }
    ],
    deliverables: [
      "Custom React 19 & Next.js 15 codebase with 100% source code ownership",
      "Ultra-responsive UI across mobile, tablet, desktop and ultra-wide screens",
      "Edge-rendered dynamic SEO & Generative Engine Optimization (GEO)",
      "Integrated Nodemailer / Webhook lead dispatch engine",
      "Comprehensive TypeScript definitions & automated testing suites",
      "Full documentation & 60 days of hypercare maintenance"
    ],
    techStack: ["React 19", "Next.js 15", "Vite", "TypeScript", "Tailwind CSS v4", "Node.js", "Redis", "PostgreSQL", "Docker", "Playwright"],
    pricingTiers: [
      { tier: "Startup Launch", usd: "$3,500", inr: "₹2,90,000", timeline: "2-3 Weeks", scope: "Marketing website, CMS integration, 99+ Lighthouse score, contact dispatch" },
      { tier: "Growth SaaS / Web App", usd: "$8,500", inr: "₹7,00,000", timeline: "4-6 Weeks", scope: "Full-stack web application, authentication, payment gateway, custom dashboards, API integrations" },
      { tier: "Enterprise Custom", usd: "$18,000+", inr: "₹15,00,000+", timeline: "8-12 Weeks", scope: "Multi-tenant architecture, microservices, high-concurrency optimization, custom design system" }
    ],
    faqs: [
      { q: "How do you guarantee a 99/100 Lighthouse score?", a: "We optimize every image using modern WebP/AVIF formats, enforce zero layout shift (CLS: 0), minimize bundle sizes with dynamic code splitting, and serve assets via global Edge CDNs." },
      { q: "Do we get full ownership of the source code?", a: "Yes, 100%. Once project milestones are fulfilled, all IP, repository access, and deployment credentials are fully transferred to your organization." }
    ],
    relatedCaseStudies: ["payflow-fintech", "zenith-saas"]
  },

  "mobile-apps": {
    id: "mobile-apps",
    slug: "mobile-apps",
    title: "Mobile App Engineering",
    subtitle: "Fluid iOS & Android Apps with 60 FPS Polish",
    category: "Mobile Systems",
    badge: "Cross-Platform Precision",
    heroHeadline: "Apps that feel as natural as muscle memory. Engineered for millions of daily active users.",
    description: "We craft cross-platform iOS and Android experiences using Flutter and React Native that match native performance with unified codebases, biometric security, and offline SQLite persistence.",
    stats: [
      { label: "Framerate Stability", value: "60 FPS" },
      { label: "Offline Sync Latency", value: "<15ms" },
      { label: "App Store Approval Rate", value: "100%" },
      { label: "Code Reusability", value: "90%+" }
    ],
    architecture: [
      { step: "01", title: "Reactive State Architecture", desc: "Riverpod / Zustand state machines for deterministic, glitch-free UI rendering." },
      { step: "02", title: "Offline-First Local Database", desc: "SQLite & Realm storage engines that sync background deltas upon reconnect." },
      { step: "03", title: "Native Bridge & Security", desc: "Biometric FaceID, secure enclave key storage, and native camera hardware hooks." },
      { step: "04", title: "Fastlane Automated CI/CD", desc: "Automatic compilation, testing, and deployment to TestFlight & Google Play Internal." }
    ],
    deliverables: [
      "Production-ready iOS and Android binaries submitted to App Store & Google Play",
      "Full Flutter / React Native source code with clear architectural documentation",
      "Real-time WebSocket & Firebase Cloud Messaging push notification pipeline",
      "Integrated Apple Pay, Google Pay, Razorpay, and Stripe in-app purchases",
      "Offline sync engine with automatic conflict resolution"
    ],
    techStack: ["Flutter 3", "React Native", "Swift", "Kotlin", "Firebase", "SQLite", "GraphQL", "Fastlane", "WebRTC"],
    pricingTiers: [
      { tier: "MVP Mobile App", usd: "$4,500", inr: "₹3,75,000", timeline: "3-4 Weeks", scope: "Core features, cross-platform build, auth, push notifications, store submission" },
      { tier: "Advanced Consumer App", usd: "$9,500", inr: "₹7,90,000", timeline: "6-8 Weeks", scope: "Real-time chat/video, payments, offline sync, custom animations, admin panel" },
      { tier: "Enterprise Fleet System", usd: "$20,000+", inr: "₹16,50,000+", timeline: "10-14 Weeks", scope: "Complex multi-role apps, geolocation tracking, high-security biometrics, IoT integrations" }
    ],
    faqs: [
      { q: "Flutter vs React Native: How do you choose?", a: "We analyze your ecosystem: If high-performance graphics and strict UI consistency across platforms are paramount, Flutter is ideal. If you have an existing React web codebase to share business logic with, React Native is the winner." },
      { q: "Do you handle App Store and Play Store approvals?", a: "Yes, we handle the entire submission, review guideline compliance, privacy manifest configurations, and approval process from start to finish." }
    ],
    relatedCaseStudies: ["quickmed-healthtech"]
  },

  "ecommerce-marketplaces": {
    id: "ecommerce-marketplaces",
    slug: "ecommerce-marketplaces",
    title: "E-Commerce & Marketplaces",
    subtitle: "High-Converting Storefronts & Multi-Channel Syndication",
    category: "Commerce Engineering",
    badge: "Revenue Growth Engine",
    heroHeadline: "Scale from 1,000 to 100,000 orders without breaking a sweat or your server.",
    description: "We architect headless Shopify Plus stores and sync multi-channel operations across Amazon, Flipkart, Myntra, and custom portals with automated inventory feeds and sub-second checkout speeds.",
    stats: [
      { label: "Black Friday Surge Ready", value: "10x Traffic" },
      { label: "Checkout Conversion Lift", value: "+38%" },
      { label: "Multi-Channel Catalog Sync", value: "Real-Time" },
      { label: "Annual GMV Managed", value: "$45M+" }
    ],
    architecture: [
      { step: "01", title: "Headless Storefront (Hydrogen)", desc: "Blazing fast Next.js / Hydrogen frontend decoupled from backend limits." },
      { step: "02", title: "Amazon & Flipkart SP-API Sync", desc: "Automated real-time inventory, pricing, and order aggregation engines." },
      { step: "03", title: "1-Click Checkout & Payment Orchestration", desc: "Stripe, Razorpay, Apple Pay & Cashfree unified routing for zero drop-offs." },
      { step: "04", title: "ERP & Warehouse Connector", desc: "Real-time dispatch, 3PL logistics tracking, and automated invoice dispatch." }
    ],
    deliverables: [
      "Custom Shopify Plus / Headless Commerce storefront optimized for conversion",
      "Amazon SP-API and Flipkart Marketplace inventory & order automation pipelines",
      "Custom promotional rules engine, tiered discounts, and loyalty integrations",
      "Omnichannel analytics dashboard with real-time revenue and margin attribution",
      "Speed optimization achieving <1.2s total page load times on 4G networks"
    ],
    techStack: ["Shopify Plus", "Hydrogen", "Next.js", "Amazon SP-API", "Flipkart Hub", "Stripe", "Razorpay", "Tailwind CSS"],
    pricingTiers: [
      { tier: "Custom Store Launch", usd: "$4,000", inr: "₹3,30,000", timeline: "3-4 Weeks", scope: "Custom Shopify design, payment setup, product catalog, conversion optimization" },
      { tier: "Headless Growth Engine", usd: "$8,000", inr: "₹6,60,000", timeline: "5-7 Weeks", scope: "Headless storefront, marketplace sync (Amazon/Flipkart), custom checkout, ERP integration" },
      { tier: "Omnichannel Enterprise", usd: "$16,000+", inr: "₹13,20,000+", timeline: "8-12 Weeks", scope: "Global multi-currency, multi-warehouse sync, custom B2B portal, custom pricing engines" }
    ],
    faqs: [
      { q: "Can you migrate our legacy store without losing SEO rankings?", a: "Yes. We execute strict 1-to-1 URL redirect mappings, preserve structured schema data, and improve Core Web Vitals to boost organic rankings post-launch." }
    ],
    relatedCaseStudies: ["hypermarket-ecommerce"]
  },

  "cloud-devops": {
    id: "cloud-devops",
    slug: "cloud-devops",
    title: "Cloud & DevOps Architecture",
    subtitle: "Enterprise Reliability with Zero-Downtime CI/CD",
    category: "Infrastructure",
    badge: "99.99% High Availability",
    heroHeadline: "Sleep peacefully on Friday nights. Your infrastructure deploys automatically and heals itself.",
    description: "We design resilient, self-healing cloud architectures on AWS, GCP, and Azure using Kubernetes, Docker, and Terraform with automated rollbacks and round-the-clock telemetry.",
    stats: [
      { label: "Uptime SLA Guarantee", value: "99.99%" },
      { label: "Deployment Duration", value: "<3 Mins" },
      { label: "Rollback Time", value: "Instant" },
      { label: "Cloud Cost Optimization", value: "Avg -35%" }
    ],
    architecture: [
      { step: "01", title: "Infrastructure as Code (IaC)", desc: "100% reproducible cloud environments defined in Terraform and Ansible." },
      { step: "02", title: "Container Orchestration", desc: "Kubernetes (EKS/GKE) with automatic horizontal pod autoscaling on traffic surges." },
      { step: "03", title: "Zero-Downtime CI/CD Pipelines", desc: "GitHub Actions with blue-green and canary deployment strategies." },
      { step: "04", title: "Observability & Alerting", desc: "Prometheus, Grafana, Datadog and PagerDuty for real-time anomaly detection." }
    ],
    deliverables: [
      "Complete Terraform infrastructure repository with multi-environment support (Dev, Staging, Prod)",
      "Automated CI/CD pipeline configuration for zero-downtime builds and tests",
      "Dockerized microservice configurations with lightweight Alpine bases",
      "Full security hardening (WAF, SSL, secrets manager, VPC peering, IAM least privilege)",
      "Comprehensive Grafana telemetry dashboards with live latency and error alerts"
    ],
    techStack: ["AWS", "Google Cloud", "Kubernetes", "Docker", "Terraform", "GitHub Actions", "Prometheus", "Grafana", "Cloudflare"],
    pricingTiers: [
      { tier: "DevOps Sprint Setup", usd: "$3,000", inr: "₹2,50,000", timeline: "2 Weeks", scope: "Dockerization, CI/CD pipeline, staging/prod environments, automated backups" },
      { tier: "Kubernetes Cloud Migration", usd: "$7,500", inr: "₹6,20,000", timeline: "4-6 Weeks", scope: "Full EKS/GKE cluster, IaC Terraform, microservices orchestration, autoscaling" },
      { tier: "Enterprise SRE & 24/7 Ops", usd: "$15,000+", inr: "₹12,40,000+", timeline: "Ongoing / Retainer", scope: "Multi-region failover, dedicated SRE support, SOC2 compliance, cost optimization" }
    ],
    faqs: [
      { q: "Can you help lower our monthly AWS/GCP cloud bills?", a: "Yes. Our cloud audits consistently reduce infrastructure costs by 25% to 40% through right-sizing, reserved instances, Spot fleets, and eliminating idle compute." }
    ],
    relatedCaseStudies: ["payflow-fintech"]
  },

  "ai-automations": {
    id: "ai-automations",
    slug: "ai-automations",
    title: "AI & Workflow Automations",
    subtitle: "Autonomous LLM Agents & Generative Engine Optimization",
    category: "Artificial Intelligence",
    badge: "Next-Gen Intelligence",
    heroHeadline: "Turn repetitive manual work into autonomous background algorithms.",
    description: "We build enterprise-grade RAG knowledge systems, intelligent CRM agents, and custom workflow automations that empower your team to operate at 10x leverage.",
    stats: [
      { label: "Manual Hours Saved", value: "40+ Hrs/Wk" },
      { label: "Semantic Query Latency", value: "<350ms" },
      { label: "Model Accuracy Benchmark", value: "98.4%" },
      { label: "Data Privacy Retention", value: "100% Private" }
    ],
    architecture: [
      { step: "01", title: "Document Chunking & Vectorization", desc: "Private parsing of company SOPs, PDFs, and database tables into vector embeddings." },
      { step: "02", title: "Hybrid Search & Vector DB", desc: "Pinecone / Qdrant hybrid BM25 + dense semantic retrieval for pinpoint accuracy." },
      { step: "03", title: "Guardrailed LLM Synthesis", desc: "Custom prompts, hallucination prevention shields, and structured JSON output guarantees." },
      { step: "04", title: "Autonomous Tool Calling", desc: "Agents trigger API actions (send email, update database, book calendar, generate invoice)." }
    ],
    deliverables: [
      "Custom private RAG AI agent integrated with your internal business data",
      "Secure vector database setup (Pinecone / Qdrant) with automated document indexing",
      "Workflow integration with Slack, WhatsApp, CRM, or custom web dashboard",
      "Prompt engineering suite with strict system guardrails and zero-hallucination checks",
      "Full API endpoints and webhook triggers for existing enterprise software"
    ],
    techStack: ["OpenAI GPT-4o", "Claude 3.7", "LangChain", "LlamaIndex", "Pinecone", "Qdrant", "Python", "FastAPI", "n8n"],
    pricingTiers: [
      { tier: "Custom AI Assistant", usd: "$3,800", inr: "₹3,15,000", timeline: "2-3 Weeks", scope: "Document Q&A bot, private RAG pipeline, website integration, webhooks" },
      { tier: "Autonomous Workflow Agent", usd: "$8,000", inr: "₹6,60,000", timeline: "4-6 Weeks", scope: "Multi-step tool calling, CRM automation, email generation, vector database cluster" },
      { tier: "Enterprise Intelligence Matrix", usd: "$18,000+", inr: "₹14,90,000+", timeline: "8-12 Weeks", scope: "Custom fine-tuned models, on-premise LLM hosting, complex ETL pipelines, strict compliance" }
    ],
    faqs: [
      { q: "Is our internal company data safe and private?", a: "Yes. We configure zero-data-retention enterprise API endpoints or self-hosted open-source models (like Llama 3) ensuring your private documents never train public models." }
    ],
    relatedCaseStudies: ["zenith-saas"]
  },

  "ui-ux-design": {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "UI/UX & Design Systems",
    subtitle: "High-Converting Digital Interfaces Crafted in Figma",
    category: "Product Design",
    badge: "World-Class Aesthetics",
    heroHeadline: "Beauty that functions. Interfaces that captivate on first glance and convert on the second.",
    description: "We architect cohesive enterprise design systems, interactive prototypes, and neo-digital UI/UX with meticulous typography, spatial harmony, and micro-interactions.",
    stats: [
      { label: "Design Token Coverage", value: "100%" },
      { label: "Accessibility Score", value: "WCAG AA" },
      { label: "User Task Completion Rate", value: "+45%" },
      { label: "Developer Handoff Efficiency", value: "3x Faster" }
    ],
    architecture: [
      { step: "01", title: "User Journey & Information Architecture", desc: "User research, persona development, and frictionless conversion flow mapping." },
      { step: "02", title: "Wireframing & Spatial Layouts", desc: "Low-fidelity structural prototypes establishing clarity and visual hierarchy." },
      { step: "03", title: "Design System & Token Creation", desc: "Atomic design tokens for color, typography, spacing, and dark/light components in Figma." },
      { step: "04", title: "Micro-Interaction Motion Specs", desc: "Framer Motion and CSS physics specifications for seamless developer handoff." }
    ],
    deliverables: [
      "Complete Figma design file with organized components, auto-layouts, and design tokens",
      "Interactive high-fidelity clickable prototype for user testing and stakeholder pitch",
      "Dark and Light mode theme variations with tested color contrast ratios",
      "Comprehensive typography hierarchy and custom iconography sets",
      "Developer handoff documentation with exact CSS token specifications"
    ],
    techStack: ["Figma", "Design Tokens", "Plus Jakarta Sans", "WCAG 2.1 AA", "Framer Motion", "Tailwind CSS"],
    pricingTiers: [
      { tier: "Landing Page & Brand UI", usd: "$2,800", inr: "₹2,30,000", timeline: "1-2 Weeks", scope: "Hero design, 5 core sections, dark/light variants, responsive layouts, Figma assets" },
      { tier: "Full Product Design System", usd: "$6,500", inr: "₹5,40,000", timeline: "3-5 Weeks", scope: "Complete web/mobile app UI/UX, 20+ screens, component library, interactive prototype" },
      { tier: "Enterprise Design Transformation", usd: "$14,000+", inr: "₹11,60,000+", timeline: "6-10 Weeks", scope: "Multi-platform design system, user research studies, design token automation, brand overhaul" }
    ],
    faqs: [
      { q: "Do you supply the raw editable Figma files?", a: "Yes, you receive full edit access to master Figma files with all components, variables, styles, and documentation." }
    ],
    relatedCaseStudies: ["quickmed-healthtech", "hypermarket-ecommerce"]
  }
};

export const CASE_STUDIES_DETAILED = {
  "payflow-fintech": {
    id: "payflow-fintech",
    slug: "payflow-fintech",
    title: "Scaling PayFlow's Global Payment Engine to $42M ARR",
    client: "PayFlow International",
    industry: "Fintech & Global Payments",
    duration: "4 Months Sprint",
    headline: "From Monolithic Bottlenecks to 45ms Microservices with 99.999% Availability",
    summary: "PayFlow was losing high-value transactions during peak processing hours due to a legacy monolithic PHP architecture. Tcongs re-architected their entire payment gateway using Go, React 19, and AWS EKS.",
    metrics: [
      { label: "Annual Transaction Volume", value: "$42M+", change: "+180%" },
      { label: "Transaction Processing Latency", value: "45ms", change: "-78%" },
      { label: "System Availability SLA", value: "99.999%", change: "Zero Outages" },
      { label: "Concurrent Transactions", value: "12,500/s", change: "10x Lift" }
    ],
    challenge: "The existing monolithic backend suffered from database connection exhaustion during flash sales, resulting in 4.2% failed transactions and mounting merchant churn. The frontend had bloated scripts leading to 4.8s checkout loading delays.",
    solution: "Tcongs implemented a distributed event-driven microservices architecture utilizing Kafka for payment message queues, Go for lightweight transaction processing microservices, and React 19 on Cloudflare Workers for instant checkout interfaces.",
    techUsed: ["Go", "React 19", "Kafka", "AWS EKS", "PostgreSQL", "Redis", "Cloudflare Workers", "Docker"],
    quote: {
      text: "Tcongs didn't just redesign our UI; they saved our infrastructure. We processed over $42 Million during our biggest quarter without a single second of downtime.",
      author: "Marcus Sterling",
      role: "Chief Technology Officer, PayFlow Global",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    },
    relatedServices: ["web-development", "cloud-devops"]
  },

  "quickmed-healthtech": {
    id: "quickmed-healthtech",
    slug: "quickmed-healthtech",
    title: "QuickMed: Real-Time Telemedicine App with 0.2s WebRTC Audio/Video",
    client: "QuickMed Health Technologies",
    industry: "HealthTech & Telehealth",
    duration: "3 Months Sprint",
    headline: "Connecting 1.2M Patients with Board-Certified Doctors in Sub-Second Consultations",
    summary: "Engineered a HIPAA-compliant cross-platform mobile and web application with encrypted real-time video consultations, prescription dispatch, and biometric patient records.",
    metrics: [
      { label: "Active Monthly Patients", value: "1.2 Million", change: "+240%" },
      { label: "Video Call Connection Latency", value: "0.2s", change: "Near Instant" },
      { label: "Doctor Satisfaction Score", value: "4.9 / 5.0", change: "Industry Top" },
      { label: "App Store Rating", value: "4.8 ★", change: "Over 45k Reviews" }
    ],
    challenge: "Legacy telemedicine tools caused high video buffering, dropped calls in low-bandwidth rural areas, and failed HIPAA encryption audits on mobile storage.",
    solution: "Built a custom Flutter application with adaptive bitrate WebRTC streaming, SQLite encrypted local storage, and end-to-end encrypted messaging pipelines running on AWS GovCloud.",
    techUsed: ["Flutter", "WebRTC", "Node.js", "AWS HIPAA", "SQLite", "Socket.io", "Figma Design System"],
    quote: {
      text: "The speed and reliability of our mobile consultation app built by Tcongs has been phenomenal. Our doctors and patients love the seamless zero-lag video experience.",
      author: "Dr. Elena Rostova",
      role: "VP of Medical Operations, QuickMed",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80"
    },
    relatedServices: ["mobile-apps", "ui-ux-design"]
  },

  "hypermarket-ecommerce": {
    id: "hypermarket-ecommerce",
    slug: "hypermarket-ecommerce",
    title: "HyperMarket: Shopify Plus & Multi-Marketplace Sync with 310% Surge Capacity",
    client: "HyperMarket Retail Brands",
    industry: "E-Commerce & Retail",
    duration: "10 Weeks Sprint",
    headline: "Automating $18M GMV Across Shopify Plus, Amazon US/UAE, and Flipkart",
    summary: "Built a headless Shopify Plus storefront connected with Amazon SP-API and Flipkart inventory feeds, resulting in 310% Black Friday sales growth and zero overselling.",
    metrics: [
      { label: "Black Friday GMV Surge", value: "+310%", change: "$18.4M Total" },
      { label: "Mobile Checkout Speed", value: "1.1s", change: "60% Faster" },
      { label: "Catalog Sync Accuracy", value: "100.0%", change: "Zero Overselling" },
      { label: "Cart Abandonment Drop", value: "-28%", change: "1-Click Checkout" }
    ],
    challenge: "Managing 15,000+ SKUs across Shopify, Amazon, and Flipkart manually led to inventory discrepancies, stockouts, and account health warnings during high-traffic holidays.",
    solution: "Engineered a headless Next.js storefront using Shopify Hydrogen with an event-driven Node.js synchronization engine connected directly to Amazon SP-API and Flipkart Seller APIs.",
    techUsed: ["Shopify Plus", "Next.js", "Amazon SP-API", "Flipkart API", "Tailwind CSS", "Redis", "Stripe"],
    quote: {
      text: "Tcongs turned our operational nightmare into our biggest competitive advantage. We shattered our Black Friday record without a single inventory glitch.",
      author: "Devon Vance",
      role: "Managing Director, HyperMarket Global",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    relatedServices: ["ecommerce-marketplaces", "web-development"]
  },

  "zenith-saas": {
    id: "zenith-saas",
    slug: "zenith-saas",
    title: "Zenith: Autonomous AI Workflow & CRM Engine",
    client: "Zenith Enterprise Systems",
    industry: "Enterprise AI & SaaS",
    duration: "8 Weeks Sprint",
    headline: "Saving 45 Engineer-Hours Per Week with Private RAG Knowledge Agents",
    summary: "Built an autonomous enterprise intelligence platform that ingests company documents, answers customer inquiries with 98.4% accuracy, and triggers automated CRM actions.",
    metrics: [
      { label: "Manual Hours Saved / Week", value: "45+ Hours", change: "10x Leverage" },
      { label: "Ticket Resolution Speed", value: "2.4 Mins", change: "90% Faster" },
      { label: "Response Accuracy Benchmark", value: "98.4%", change: "Zero Hallucination" },
      { label: "Enterprise Adoption Rate", value: "94%", change: "Across 6 Teams" }
    ],
    challenge: "Support engineers were overwhelmed answering repetitive technical questions, and manual CRM data entry was causing deal velocity to stall.",
    solution: "Designed a hybrid search RAG pipeline using Pinecone vector database, Claude 3.7, and FastAPI with deterministic tool-calling actions into HubSpot and Jira.",
    techUsed: ["Claude 3.7", "OpenAI", "Pinecone", "FastAPI", "Python", "React 19", "LangChain", "Docker"],
    quote: {
      text: "The AI automation system built by Tcongs has completely transformed our operational speed. Our team does in 2 hours what used to take 2 full days.",
      author: "Ayesha Al-Maktoum",
      role: "Head of Digital Transformation, Zenith",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
    },
    relatedServices: ["ai-automations", "web-development"]
  }
};

export const CASE_STUDIES = Object.values(CASE_STUDIES_DETAILED);

export const INSIGHTS_DETAILED = [
  {
    slug: "why-we-killed-monoliths",
    title: "Why We Killed Monolithic CMS for Edge Cloud Functions (And Why You Should Too)",
    subtitle: "How moving from bloated CMS servers to Edge-rendered React reduced our client latency by 85%.",
    category: "Architecture",
    readTime: "5 min read",
    date: "August 15, 2026",
    author: {
      name: "Yash Jain",
      role: "Lead Systems Architect",
      avatar: "/assets/frontend-assets/images/favicon.png"
    },
    excerpt: "Traditional monolithic setups are buckling under modern mobile web demands. Here is the exact architectural blueprint we use to deploy 99/100 Lighthouse web apps.",
    tags: ["React 19", "Edge Computing", "Performance", "Cloudflare"],
    content: `
### The Monolith Hangover

For years, the industry standard for agency web development was simple: spin up a monolithic CMS, slap on 40 third-party plugins, pick a pre-made theme, and call it a day.

It worked—until the modern web evolved. Today, users expect web pages to load in under **400 milliseconds**, search engines reward **Core Web Vitals** with top rankings, and generative AI search bots crawl only the fastest, cleanest structured data.

\`\`\`javascript
// Our Edge Function Handler Pattern
export default async function handler(request) {
  const cacheKey = new URL(request.url).pathname;
  const cachedResponse = await caches.default.match(cacheKey);
  
  if (cachedResponse) {
    return cachedResponse; // Sub-20ms instant delivery
  }
  
  const html = await renderToReadableStream(<App />);
  return new Response(html, {
    headers: { 'Content-Type': 'text/html', 'Cache-Control': 's-maxage=86400' }
  });
}
\`\`\`

### The 3 Core Wins of Edge Architecture

1. **Sub-400ms First Contentful Paint (FCP)**: By eliminating server roundtrips and rendering HTML right at the user's nearest CDN node, bounce rates drop by over 60%.
2. **Zero Maintenance Vulnerabilities**: No vulnerable database connections exposed to the public internet. Static assets and microservices communicate via encrypted, rate-limited API gateways.
3. **Infinite Scalability**: Whether 50 or 50,000 users visit simultaneously during a product launch, serverless Edge compute scales instantaneously with zero downtime.
    `
  },
  {
    slug: "react-19-for-enterprises",
    title: "React 19 Server Components & Actions Explained Like You're 5",
    subtitle: "The definitive guide to why React 19 changes web engineering for scaling enterprises.",
    category: "Frontend Engineering",
    readTime: "6 min read",
    date: "August 10, 2026",
    author: {
      name: "Tcongs Engineering Team",
      role: "Core Web Squad",
      avatar: "/assets/frontend-assets/images/favicon.png"
    },
    excerpt: "React 19 has arrived with Server Components, Actions, and automatic memoization. Here is what actually matters for your business.",
    tags: ["React 19", "Server Components", "Full-Stack", "JavaScript"],
    content: `
### What React 19 Actually Solves

In older versions of React, every component had to be bundled, shipped over the wire, and hydrated in the user's browser before becoming interactive. On low-end mobile devices, this created the dreaded "white screen flash" and sluggish interactions.

React 19 fundamentally reimagines this with **Server Components** that execute strictly on the server:

\`\`\`jsx
// React 19 Server Component
async function ProjectMetrics({ projectId }) {
  // Directly queries database without client-side API waterfalls!
  const stats = await db.projects.getMetrics(projectId);

  return (
    <div className="grid grid-cols-3 gap-4">
      <StatCard label="Conversion Lift" value={stats.lift} />
      <StatCard label="Uptime SLA" value={stats.uptime} />
      <StatCard label="Latency" value={stats.latency} />
    </div>
  );
}
\`\`\`

### Key Business Advantages:
- **Zero Client Bundle Weight**: Heavy libraries stay on the server.
- **Form Actions Without Boilerplate**: Native form state handling without endless \`useState\` handlers.
- **Better SEO Indexing**: Web crawlers and AI search engines receive 100% pre-rendered semantic HTML.
    `
  },
  {
    slug: "scaling-ecommerce-50k-checkouts",
    title: "How We Scaled E-Commerce to 50,000 Concurrent Checkouts Without Server Crashes",
    subtitle: "Handling massive traffic spikes on Amazon, Shopify Plus, and Flipkart with zero inventory drift.",
    category: "E-Commerce",
    readTime: "7 min read",
    date: "August 02, 2026",
    author: {
      name: "Yash Jain",
      role: "Lead Systems Architect",
      avatar: "/assets/frontend-assets/images/favicon.png"
    },
    excerpt: "Flash sales shouldn't be terrifying. Here is the caching and queueing architecture we deployed for our retail partners.",
    tags: ["Shopify Plus", "Amazon SP-API", "Queues", "High Concurrency"],
    content: `
### The Black Friday Nightmare

When thousands of users click 'Checkout' in the exact same second, traditional relational databases lock up trying to update inventory counts simultaneously.

To solve this, we decoupled the checkout pipeline using **Redis distributed locks** and **Kafka event streams**:

\`\`\`javascript
// Distributed Queue Processing Pipeline
async function handleCheckoutOrder(order) {
  const lockAcquired = await redis.set(\`lock:sku:\${order.sku}\`, 'locked', 'NX', 'PX', 2000);
  if (!lockAcquired) {
    throw new Error('High demand surge: Queueing transaction...');
  }
  
  await kafkaProducer.send({
    topic: 'orders-to-process',
    messages: [{ value: JSON.stringify(order) }]
  });
}
\`\`\`

### The Result:
- 100% inventory accuracy with zero overselling.
- 1.1s total checkout completion time.
- +310% gross merchandise value surge processed without a single server reset.
    `
  }
];

export const CAREERS_DATA = {
  cultureValues: [
    { title: "No 9 AM Zoom Standups", desc: "We operate on async-first, high-trust autonomy. Less meetings, more shipped code." },
    { title: "Ship to Prod on Day 1", desc: "No red tape or 6-week onboarding tutorials. You build, test, and deploy real features immediately." },
    { title: "Top 1% Engineering Squad", desc: "Work alongside passionate builders who obsess over 60fps animations and clean architecture." },
    { title: "Competitive Pay & Gear Stipend", desc: "Top-tier compensation, annual performance bonuses, latest Apple silicon hardware, and learning budget." }
  ],
  openPositions: [
    {
      id: "sr-fullstack-engineer",
      role: "Senior Full-Stack Engineer",
      team: "Engineering Division",
      location: "Mumbai HQ / Remote 🇮🇳",
      type: "Full-Time",
      experience: "3 - 6 Years",
      stack: ["React 19", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Docker"],
      description: "Own the architecture and execution of high-velocity web platforms and multi-tenant SaaS systems."
    },
    {
      id: "lead-mobile-architect",
      role: "Lead Mobile App Architect",
      team: "Mobile Division",
      location: "Mumbai HQ / Remote 🇮🇳",
      type: "Full-Time",
      experience: "4 - 7 Years",
      stack: ["Flutter 3", "React Native", "Swift", "Kotlin", "WebSockets", "SQLite"],
      description: "Lead the development of fluid 60fps cross-platform mobile apps for international healthcare and fintech clients."
    },
    {
      id: "ai-systems-engineer",
      role: "AI & LLM Systems Engineer",
      team: "AI Research & Automation",
      location: "Remote 🌐",
      type: "Full-Time",
      experience: "2 - 5 Years",
      stack: ["Python", "FastAPI", "LangChain", "Pinecone", "Claude 3.7", "OpenAI"],
      description: "Build autonomous agentic pipelines, RAG knowledge engines, and custom tool-calling agents for enterprise clients."
    },
    {
      id: "ui-ux-design-lead",
      role: "Senior UI/UX & Design Systems Lead",
      team: "Product & Design",
      location: "Mumbai HQ / Hybrid 🇮🇳",
      type: "Full-Time",
      experience: "3 - 5 Years",
      stack: ["Figma", "Design Tokens", "Micro-Interactions", "WCAG 2.1 AA", "Framer"],
      description: "Define the visual aesthetic, design systems, and interaction design for all client products and internal brands."
    }
  ]
};

export const TEAM_MEMBERS = [
  {
    name: "Yash Jain",
    role: "Lead Systems Architect & Co-Founder",
    specialty: "High-Concurrency Cloud & React 19 Architecture",
    bio: "Obsessed with sub-400ms TTFB, clean TypeScript, and scalable distributed systems.",
    image: "/assets/frontend-assets/images/favicon.png"
  },
  {
    name: "Aman Sharma",
    role: "Head of Mobile & Cross-Platform",
    specialty: "Flutter 3, React Native & Native Bridges",
    bio: "Passionate about 60fps gesture physics, biometric security, and offline SQLite synchronization.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80"
  },
  {
    name: "Pooja Mehta",
    role: "Director of Product Design",
    specialty: "Figma Design Systems & Neo-Digital UX",
    bio: "Turning complex multi-step user journeys into intuitive, high-converting digital flows.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80"
  },
  {
    name: "Rohan Kulkarni",
    role: "Cloud DevOps & SRE Lead",
    specialty: "Kubernetes, AWS EKS & Terraform",
    bio: "Ensuring 99.99% high availability with self-healing cloud clusters and zero-downtime CI/CD.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80"
  }
];

export const MILESTONES = [
  { year: "2018", title: "Inception in Mumbai", desc: "Founded with a clear mandate: build digital products that combine raw engineering speed with elegant aesthetics." },
  { year: "2020", title: "Global Expansion", desc: "Extended operations to USA and UAE, shipping high-concurrency e-commerce systems during peak retail shifts." },
  { year: "2023", title: "Enterprise AI & Cloud Division", desc: "Launched dedicated autonomous agent and Kubernetes DevOps practice, achieving 99.99% client SLA ratings." },
  { year: "2026", title: "High-Velocity Standard", desc: "Over 180+ platforms shipped, managing $45M+ in client transaction volumes across 4 continents." }
];

export const TECH_STACK = {
  ALL: [
    { name: "React 19", category: "FRONTEND", level: "Expert", icon: "Code" },
    { name: "Next.js 15", category: "FRONTEND", level: "Expert", icon: "Code" },
    { name: "Flutter 3", category: "MOBILE", level: "Expert", icon: "Smartphone" },
    { name: "React Native", category: "MOBILE", level: "Advanced", icon: "Smartphone" },
    { name: "Node.js", category: "BACKEND", level: "Expert", icon: "Server" },
    { name: "Python / FastAPI", category: "AI & BACKEND", level: "Advanced", icon: "Terminal" },
    { name: "TypeScript", category: "LANGUAGES", level: "Expert", icon: "Code" },
    { name: "Tailwind CSS v4", category: "FRONTEND", level: "Expert", icon: "Palette" },
    { name: "PostgreSQL", category: "DATABASE", level: "Expert", icon: "Database" },
    { name: "Redis Cache", category: "DATABASE", level: "Expert", icon: "Zap" },
    { name: "AWS EKS / ECS", category: "DEVOPS", level: "Expert", icon: "Cloud" },
    { name: "Docker & Kubernetes", category: "DEVOPS", level: "Expert", icon: "Cpu" },
    { name: "Terraform IaC", category: "DEVOPS", level: "Advanced", icon: "Shield" },
    { name: "Shopify Plus", category: "COMMERCE", level: "Expert", icon: "ShoppingBag" },
    { name: "Amazon SP-API", category: "COMMERCE", level: "Expert", icon: "ShoppingBag" },
    { name: "OpenAI & Claude 3.7", category: "AI", level: "Expert", icon: "Sparkles" },
    { name: "Pinecone / Qdrant", category: "AI", level: "Advanced", icon: "Database" },
    { name: "Figma Systems", category: "DESIGN", level: "Expert", icon: "Layers" }
  ],
  FRONTEND: [
    { name: "React 19", level: "Expert", icon: "Code" },
    { name: "Next.js 15", level: "Expert", icon: "Code" },
    { name: "TypeScript", level: "Expert", icon: "Code" },
    { name: "Tailwind CSS v4", level: "Expert", icon: "Palette" },
    { name: "Vite", level: "Expert", icon: "Zap" }
  ],
  MOBILE: [
    { name: "Flutter 3", level: "Expert", icon: "Smartphone" },
    { name: "React Native", level: "Advanced", icon: "Smartphone" },
    { name: "Swift (iOS)", level: "Advanced", icon: "Smartphone" },
    { name: "Kotlin (Android)", level: "Advanced", icon: "Smartphone" }
  ],
  BACKEND: [
    { name: "Node.js", level: "Expert", icon: "Server" },
    { name: "Python / FastAPI", level: "Advanced", icon: "Terminal" },
    { name: "PostgreSQL", level: "Expert", icon: "Database" },
    { name: "Redis Cache", level: "Expert", icon: "Zap" }
  ],
  DEVOPS: [
    { name: "AWS EKS / ECS", level: "Expert", icon: "Cloud" },
    { name: "Docker & Kubernetes", level: "Expert", icon: "Cpu" },
    { name: "Terraform IaC", level: "Advanced", icon: "Shield" },
    { name: "GitHub Actions", level: "Expert", icon: "Cpu" }
  ],
  AI_AUTOMATION: [
    { name: "OpenAI & Claude 3.7", level: "Expert", icon: "Sparkles" },
    { name: "Pinecone / Qdrant", level: "Advanced", icon: "Database" },
    { name: "LangChain & LlamaIndex", level: "Advanced", icon: "Cpu" },
    { name: "n8n Workflows", level: "Expert", icon: "Zap" }
  ]
};

export const PROCESS_STEPS = [
  {
    step: "01",
    phase: "DISCOVERY & ARCHITECTURE",
    title: "Deep Architecture Blueprint",
    timeline: "Days 1 – 3",
    description: "Zero fluff discovery. We map your database schemas, user journeys, performance budgets, and technical risks with an actionable sprint plan.",
    deliverable: "Technical Architecture Spec & Figma Design Tokens"
  },
  {
    step: "02",
    phase: "RAPID SPRINT DELIVERY",
    title: "Bi-Weekly High-Velocity Sprints",
    timeline: "Weeks 1 – 4",
    description: "Modular development with 100% TypeScript, clean React 19 / Flutter components, and test-driven microservices shipped to staging weekly.",
    deliverable: "Live Staging Demos & PR Code Reviews"
  },
  {
    step: "03",
    phase: "RIGOROUS QA & STRESS TESTING",
    title: "Lighthouse & Load Testing",
    timeline: "Week 5",
    description: "We stress-test concurrency, simulate high-traffic checkout spikes, audit WCAG accessibility, and verify 99/100 Lighthouse performance.",
    deliverable: "Security Audit, QA Matrix & Load Benchmark"
  },
  {
    step: "04",
    phase: "PRODUCTION LAUNCH & HANDOVER",
    title: "Edge Deployment & IP Handover",
    timeline: "Week 6+",
    description: "Zero-downtime production deployment with full DNS routing, SSL certificates, 100% source code repository handover, and 60 days hypercare.",
    deliverable: "Production Release & Full IP Ownership"
  }
];

export const TESTIMONIALS = [
  {
    quote: "Tcongs completely re-architected our legacy web and mobile apps. Our page speed increased by 3.5x, and our checkout conversions went up 42% in the first month.",
    author: "Marcus Sterling",
    role: "CTO",
    company: "PayFlow Global (USA)",
    rating: 5
  },
  {
    quote: "Their team worked seamlessly with our in-house engineers. The code quality, documentation, and attention to micro-interactions was top tier.",
    author: "Elena Rostova",
    role: "VP of Product",
    company: "QuickMed HealthTech",
    rating: 5
  },
  {
    quote: "Managing Amazon, Shopify, and Flipkart under one roof was overwhelming until Tcongs built our automated catalog sync. Total game changer.",
    author: "Devon Vance",
    role: "Managing Director",
    company: "HyperMarket Retail",
    rating: 5
  },
  {
    quote: "The best tech partner we have worked with. They don't just write code; they think about our unit economics, user retention, and business growth.",
    author: "Ayesha Al-Maktoum",
    role: "Founder & CEO",
    company: "Zenith Enterprise Systems (Dubai)",
    rating: 5
  }
];

export const FAQS = [
  {
    question: "What makes Tcongs Infotech different from conventional web agencies?",
    answer: "Unlike traditional agencies that use bloated WordPress templates and slow drag-and-drop builders, we are a software engineering agency. We build with modern React 19, Next.js, Flutter, and serverless Edge cloud infrastructure—delivering 99/100 Lighthouse scores, zero technical debt, and 100% full IP source code ownership."
  },
  {
    question: "How long does a standard project take from kickoff to production launch?",
    answer: "Typical high-performance web applications and landing experiences launch in 2 to 4 weeks. Full-scale SaaS platforms, cross-platform mobile apps, and custom marketplace integrations typically take 6 to 10 weeks across bi-weekly agile sprint milestones."
  },
  {
    question: "Do we get full ownership of the source code and design files?",
    answer: "Yes, 100%. Once project milestones are fulfilled, all source code, Figma design files, database schemas, and cloud deployment credentials are completely handed over to your organization with no hidden licensing or lock-in fees."
  },
  {
    question: "How does your pricing and payment milestone structure work?",
    answer: "We work on fixed-price transparent milestones (typically 30% kickoff, 40% mid-sprint staging demo, 30% final production launch & handover). We accept global payments in USD ($), INR (₹), AED (د.إ), EUR (€), and GBP (£)."
  },
  {
    question: "Do you provide post-launch maintenance, support, and SLA guarantees?",
    answer: "Yes. Every project includes a 60-day hypercare warranty with zero-cost bug fixes. Beyond launch, we offer dedicated monthly SRE and growth engineering retainers with 99.99% uptime guarantees and <15-minute emergency response times."
  }
];
