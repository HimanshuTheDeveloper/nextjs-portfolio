# Himanshu | Senior Backend Developer & Software Engineer Portfolio

A premium, modern, production-ready personal developer portfolio built with **Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion**.

All portfolio information is strictly verified from the official resume and LinkedIn profile, managed through a single centralized data architecture.

---

## 🚀 Key Highlights & Features

- **Data-Driven Architecture**: All portfolio content (profile, navigation, about, experiences, skills, projects, education, social links) is defined in [`src/data/portfolio.ts`](src/data/portfolio.ts) using strict TypeScript types from [`src/types/portfolio.ts`](src/types/portfolio.ts). Zero hardcoded profile copy in presentation components.
- **Modern Minimal Dark-First Aesthetic**: Tailored for backend engineers with midnight slate backgrounds, electric blue/indigo accents, subtle glassmorphism cards, and an interactive code terminal preview.
- **Light & Dark Theme Toggle**: Fully persisted in `localStorage` with system preference detection and accessible toggle controls.
- **Verified Professional Experience**:
  - **WNS (part of Capgemini)** — Software Engineer / Backend Developer (Aug 2023 – Present)
  - **Bytelogic Technology** — Senior Web Developer (Aug 2022 – Jul 2023)
  - **Xcrino Business Solution** — Laravel Developer (Jul 2021 – Jul 2022)
  - **Max Vision Solutions** — Web Development Trainee (Apr 2021 – Jun 2021)
- **10 Verified Production Projects**:
  - Three Falcons (E-Commerce)
  - V-Deliver (Logistics Dispatch)
  - DiLAMSys (Digital Land Management System)
  - BASF India Product Management System (Enterprise Agrochemical Catalog)
  - Import & Export Management System (Customs Trade Portal)
  - Green Spark Ecommerce
  - Quick Cloud Hosting Portal
  - Bytelogic CRM & Ti-care
  - Freight Management & Consignment Tracking
  - Laundry Management System & Super She CMS
- **Interactive Project Filtering**: Instant category switching (*All*, *Enterprise Systems*, *Web Applications*, *E-Commerce & Portals*) with Framer Motion layout animations.
- **Integrated Resume Download**: Serves verified PDF directly from [`public/resume.pdf`](public/resume.pdf) via single-click CTAs in the Sticky Navigation and Hero section.
- **Verified LinkedIn & Contact Channels**: Direct link to [LinkedIn profile](https://www.linkedin.com/in/himanshuthedeveloper/), one-click email copying, and accessible mailto contact integration.
- **SEO & Social Sharing**: Pre-configured OpenGraph metadata, JSON-LD structured data (`schema.org/Person`), semantic HTML5, and responsive viewport configuration.

---

## 📂 Project Architecture

```text
├── public/
│   └── resume.pdf                   # Verified downloadable resume PDF
├── src/
│   ├── app/
│   │   ├── globals.css              # Custom tokens, themes, glassmorphism utilities
│   │   ├── layout.tsx               # Root layout, metadata, SEO JSON-LD, navbar & footer
│   │   └── page.tsx                 # Composed portfolio page sections
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx           # Sticky nav, active indicator, mobile drawer
│   │   │   ├── Footer.tsx           # Dynamic copyright, social links, back-to-top
│   │   │   └── ThemeToggle.tsx      # Persistent Light/Dark theme switcher
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx      # Staggered reveal, elevator pitch, terminal code card
│   │   │   ├── AboutSection.tsx     # Metrics, narrative, core architectural principles
│   │   │   ├── ExperienceSection.tsx# Chronological timeline with WNS, Bytelogic, Xcrino
│   │   │   ├── SkillsSection.tsx    # Categorized skill badges
│   │   │   ├── ProjectsSection.tsx  # Dynamic category filtering & card showcase
│   │   │   ├── EducationSection.tsx # MCA, BCA, school education, professional training
│   │   │   └── ContactSection.tsx   # Verified contact details, email copier, contact form
│   │   └── ui/
│   │       ├── SectionHeading.tsx   # Reusable section header
│   │       ├── ExperienceCard.tsx   # Timeline item with responsibilities & stack
│   │       ├── ProjectCard.tsx      # Production project card with live links
│   │       ├── SkillGroup.tsx       # Categorized skill group
│   │       ├── EducationCard.tsx    # Degree & qualification card
│   │       └── ScrollProgress.tsx   # Top scroll depth spring indicator
│   ├── data/
│   │   └── portfolio.ts             # Central source of truth for all content
│   ├── lib/
│   │   └── utils.ts                 # Tailwind clsx + twMerge utility
│   └── types/
│       └── portfolio.ts             # Strict TypeScript models
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── package.json
```

---

## 🛠️ Getting Started Locally

### 1. Prerequisites
- Node.js `18.x` or `20.x`
- npm or pnpm

### 2. Installation
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🎨 How to Customize Content

1. Edit [`src/data/portfolio.ts`](src/data/portfolio.ts) to update text, dates, roles, or project links.
2. To replace the resume, place the updated PDF at `public/resume.pdf`.
3. To add or adjust projects, add objects into the `projects` array conforming to `ProjectItem` type.
"# nextPortfolio" 
