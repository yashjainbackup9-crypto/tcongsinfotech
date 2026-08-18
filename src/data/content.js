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
    id: "web-mobile",
    title: "Web & Mobile App Engineering",
    category: "ENGINEERING",
    highlight: "High-Performance Platforms",
    description: "Architecting lightning-fast web applications, cross-platform mobile apps (iOS & Android), and PWAs designed for millions of daily active users.",
    icon: "Smartphone",
    tags: ["React.js", "Next.js", "Flutter", "iOS & Android", "Node.js", "Laravel"],
    metrics: "99.9% Uptime • <0.8s LCP",
    featured: true,
    capabilities: [
      "Custom React & Next.js Web Platforms",
      "Native & Cross-Platform Mobile Apps (Flutter, Swift, Kotlin)",
      "High-Concurrency Backend APIs (Node.js, Go, Python)",
      "Progressive Web Apps (PWA) with Offline Capabilities",
      "WordPress & Headless CMS Engineering"
    ]
  },
  {
    id: "saas-software",
    title: "Custom SaaS & Enterprise Software",
    category: "ENTERPRISE",
    highlight: "Scalable Cloud Architecture",
    description: "End-to-end bespoke software systems, multi-tenant SaaS platforms, microservices architecture, and tailored CRM/ERP integrations.",
    icon: "Layers",
    tags: ["Multi-Tenant SaaS", "Cloud Native", "ERP / CRM", "AI Automations", "Microservices"],
    metrics: "10x Scaling Ready • Enterprise SLA",
    featured: true,
    capabilities: [
      "Multi-Tenant SaaS Architecture & Billing Engine",
      "Custom Enterprise ERP & Workflow Automation",
      "API Gateway & Microservice Ecosystems",
      "Cloud Infrastructure Setup (AWS, GCP, Azure)",
      "Legacy Codebase Refactoring & Migration"
    ]
  },
  {
    id: "ecommerce-marketplaces",
    title: "E-Commerce & Marketplace Scaling",
    category: "COMMERCE",
    highlight: "High-Converting Storefronts",
    description: "Launch, manage, and scale global multi-channel marketplaces including Amazon, Flipkart, Myntra, Nykaa, and custom Shopify Plus stores.",
    icon: "ShoppingBag",
    tags: ["Shopify Plus", "Amazon Ads", "Flipkart / Myntra", "Catalog Ops", "Global Sync"],
    metrics: "+340% GMV Growth Across Portfolios",
    featured: true,
    capabilities: [
      "Shopify Plus Custom Store Engineering & Checkout Optimization",
      "Amazon, Flipkart, Myntra & Nykaa End-to-End Account Ops",
      "Multi-Currency & International Marketplace Expansion",
      "Inventory Sync & Automated Fulfillment Bridges",
      "A/B Tested Listing Optimization & A+ Content"
    ]
  },
  {
    id: "branding-uiux",
    title: "Branding & World-Class UI/UX",
    category: "DESIGN",
    highlight: "Figma Design Systems",
    description: "Human-centric interface design, comprehensive brand guidelines, interactive prototypes, and conversion rate optimized user journeys.",
    icon: "Palette",
    tags: ["Figma Systems", "Wireframing", "UX Audits", "Brand Identity", "Motion Design"],
    metrics: "Top 1% Design Aesthetics",
    featured: false,
    capabilities: [
      "Atomic Figma Design Systems & Component Libraries",
      "Complete Brand Identity, Logo, & Visual Guidelines",
      "Interactive High-Fidelity Clickable Prototypes",
      "Data-Driven UX Audits & Heatmap Analysis",
      "Micro-Interactions & Seamless Frontend Handoff"
    ]
  },
  {
    id: "digital-marketing-geo",
    title: "Performance Marketing & GEO",
    category: "GROWTH",
    highlight: "Generative Engine Optimization",
    description: "Supercharging visibility through data-driven SEO, Google/Meta PPC campaigns, Generative Engine Optimization (GEO for AI Search), and CRO funnels.",
    icon: "TrendingUp",
    tags: ["GEO (AI Search)", "Google Ads", "Meta Ads", "CRO Funnels", "Technical SEO"],
    metrics: "3.8x Avg ROAS on Ad Spend",
    featured: false,
    capabilities: [
      "Generative Engine Optimization (GEO) for AI Search Visibility",
      "High-ROAS Paid Acquisition (Google Ads, Meta, LinkedIn)",
      "Technical SEO & High-Intent Organic Keyword Dominance",
      "Sales Funnel Optimization & Conversion Rate Audits",
      "Attribution Modeling & Full-Funnel Analytics"
    ]
  },
  {
    id: "startup-consulting",
    title: "Startup Acceleration & Strategy",
    category: "STRATEGY",
    highlight: "Zero-to-One Launch",
    description: "Strategic roadmapping, rapid MVP development in 4-6 weeks, investor-ready pitch demo engineering, and scaling advisory.",
    icon: "Rocket",
    tags: ["MVP in 4 Weeks", "Tech Due Diligence", "Product Roadmaps", "Fractional CTO"],
    metrics: "$12M+ Raised by Alumni Clients",
    featured: false,
    capabilities: [
      "Rapid 4-to-6 Week MVP Scaffolding & Launch",
      "Technical Architecture Due Diligence & Tech Selection",
      "Fractional CTO & Product Strategy Guidance",
      "Automated Analytics & User Retention Loops",
      "Post-Launch Scaling & Infrastructure Governance"
    ]
  }
];

export const TECH_STACK = {
  "Frontend & Mobile": [
    { name: "React.js", category: "Web", level: "Expert" },
    { name: "Next.js 15", category: "Full-Stack", level: "Expert" },
    { name: "Flutter", category: "Mobile", level: "Expert" },
    { name: "iOS (Swift)", category: "Mobile", level: "Advanced" },
    { name: "Android (Kotlin)", category: "Mobile", level: "Advanced" },
    { name: "Tailwind CSS", category: "Styling", level: "Expert" },
    { name: "TypeScript", category: "Core", level: "Expert" },
  ],
  "Backend & Database": [
    { name: "Node.js", category: "Runtime", level: "Expert" },
    { name: "Python / FastAPI", category: "AI & Backend", level: "Advanced" },
    { name: "Laravel (PHP)", category: "Framework", level: "Expert" },
    { name: "PostgreSQL", category: "Database", level: "Expert" },
    { name: "MongoDB", category: "Database", level: "Advanced" },
    { name: "Redis", category: "Caching", level: "Expert" },
  ],
  "Cloud & DevOps": [
    { name: "AWS (Lambda/ECS)", category: "Cloud", level: "Expert" },
    { name: "Google Cloud (GCP)", category: "Cloud", level: "Advanced" },
    { name: "Docker & K8s", category: "Containers", level: "Advanced" },
    { name: "Vercel / Cloudflare", category: "Edge CDN", level: "Expert" },
    { name: "CI/CD Pipelines", category: "DevOps", level: "Expert" },
  ],
  "E-Commerce & Tools": [
    { name: "Shopify Plus", category: "Commerce", level: "Expert" },
    { name: "Amazon Seller API", category: "Marketplace", level: "Expert" },
    { name: "Figma", category: "Design", level: "Expert" },
    { name: "Stripe / Razorpay", category: "Payments", level: "Expert" },
    { name: "Google Analytics 4", category: "Analytics", level: "Expert" },
  ]
};

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Market Intelligence",
    tagline: "Uncovering Core Growth Opportunities",
    desc: "We analyze your business goals, target audience behaviors, competitor benchmarks, and technical constraints to construct a battle-tested roadmap.",
    deliverables: ["Product Strategy Brief", "Technical Feasibility Study", "Competitor Matrix"]
  },
  {
    step: "02",
    title: "Architecture & System Planning",
    tagline: "Blueprint for Unlimited Scale",
    desc: "We map out database schemas, API contracts, security protocols, cloud topologies, and milestone delivery sprints.",
    deliverables: ["System Architecture Diagram", "Sprint Timeline", "Security Compliance Plan"]
  },
  {
    step: "03",
    title: "UI/UX Design & Prototyping",
    tagline: "Obsidian Aesthetics & Frictionless UX",
    desc: "Our design team crafts accessible, modern user interfaces in Figma with atomic design tokens, interactive micro-animations, and client design reviews.",
    deliverables: ["Figma Design System", "Clickable High-Fi Prototype", "UX Copy Guidelines"]
  },
  {
    step: "04",
    title: "High-Velocity Engineering",
    tagline: "Clean, Scalable Code Quality",
    desc: "We write clean, modular, and maintainable code with continuous integration, automated test suites, and transparent bi-weekly demo check-ins.",
    deliverables: ["Production Codebase", "API Documentation", "Staging Environment Previews"]
  },
  {
    step: "05",
    title: "Rigorous QA & Security Testing",
    tagline: "Flawless Performance on Every Device",
    desc: "We perform automated end-to-end testing, responsive cross-browser audits, load testing, and penetration tests before touching production.",
    deliverables: ["QA Audit Report", "Lighthouse 95+ Scorecard", "Security Penetration Audit"]
  },
  {
    step: "06",
    title: "Global Launch & Continuous Growth",
    tagline: "Deployment, SEO & Revenue Acceleration",
    desc: "We execute zero-downtime deployment, monitor real-time telemetry, and run continuous conversion optimization & marketing campaigns.",
    deliverables: ["Zero-Downtime Rollout", "Live Monitoring Dashboard", "30-Day Post-Launch SLA"]
  }
];

export const CASE_STUDIES = [
  {
    title: "Omnichannel D2C Marketplace Engine",
    client: "Global Lifestyle Brand (USA & Dubai)",
    metric: "+320% Revenue Uplift",
    subMetric: "2.8M Monthly Visitors Handled",
    category: "E-Commerce & Mobile",
    description: "Engineered a headless Shopify Plus storefront with custom Flutter mobile apps and automated Amazon/Flipkart inventory synchronization.",
    tags: ["Shopify Plus", "Flutter", "Node.js", "AWS"],
  },
  {
    title: "Enterprise Multi-Tenant SaaS Platform",
    client: "FinTech Infrastructure Provider (Canada)",
    metric: "99.99% Availability",
    subMetric: "SOC-2 Type II Compliant",
    category: "Custom SaaS & Cloud",
    description: "Built a real-time compliance tracking SaaS platform with microservices, automated payment distribution, and granular role-based access.",
    tags: ["React.js", "Next.js", "PostgreSQL", "Docker", "GCP"],
  },
  {
    title: "Generative AI Search (GEO) & Marketing Funnel",
    client: "B2B Tech Solutions (India & US)",
    metric: "4.6x Qualified Leads",
    subMetric: "Top 3 Ranking on AI Search Queries",
    category: "Growth & GEO",
    description: "Revamped digital presence with Generative Engine Optimization, ultra-fast landing pages, and high-conversion retargeting funnels.",
    tags: ["GEO Strategy", "Google Ads", "Technical SEO", "Next.js"],
  }
];

export const FAQS = [
  {
    question: "What core services does Tcongs Infotech provide?",
    answer: "Tcongs Infotech is a full-service digital engineering and growth agency. We specialize in custom Web & Mobile App Development (React, Next.js, Flutter), Enterprise SaaS & Custom Software, E-Commerce & Marketplace Management (Shopify, Amazon, Flipkart), UI/UX Design Systems, and Performance Digital Marketing / GEO."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines depend on scope and complexity: rapid landing pages and MVPs typically take 2–4 weeks; full-scale custom web or mobile applications range from 4–8 weeks; complex enterprise SaaS platforms generally take 8–16 weeks with agile bi-weekly delivery milestones."
  },
  {
    question: "Do you work with international clients across different time zones?",
    answer: "Yes, over 65% of our client engagements are with companies in the United States, Canada, the United Kingdom, and the UAE (Dubai). We provide overlapping communication windows, dedicated Slack/Teams channels, and weekly video syncs."
  },
  {
    question: "Do you provide post-launch maintenance, support, and SLA?",
    answer: "Absolutely. Every project includes a 30-day post-launch warranty, and we offer tailored ongoing maintenance retainers covering infrastructure monitoring, security patches, feature iterations, and 24/7 critical uptime support."
  },
  {
    question: "How do you handle intellectual property (IP) and NDA confidentiality?",
    answer: "You retain 100% intellectual property ownership of all source code, assets, and design files upon milestone completion. We sign standard bilateral NDAs prior to technical discovery."
  }
];

export const TESTIMONIALS = [
  {
    quote: "Tcongs Infotech transformed our product velocity. Their team engineered our web and mobile app from scratch, handling scale flawlessly during our multi-million dollar product launch.",
    author: "David Vance",
    role: "VP of Product, Apex Digital",
    location: "Austin, Texas 🇺🇸"
  },
  {
    quote: "The best agency partner we’ve worked with in 8 years. Their attention to UX detail, clean Next.js architecture, and proactive communication set them apart.",
    author: "Elena Rostova",
    role: "Co-Founder, Synapse Flow",
    location: "Vancouver, Canada 🇨🇦"
  },
  {
    quote: "Our marketplace GMV jumped by 340% within 4 months of their listing optimization and custom Shopify revamp. Invaluable partner for our e-commerce expansion.",
    author: "Rashid Al-Maktoum",
    role: "Managing Director, Oasis Retail",
    location: "Dubai, UAE 🇦🇪"
  }
];
