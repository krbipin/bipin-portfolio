# Bipin Kumar — Personal Portfolio & Engineering Platform

[![Live Production](https://img.shields.io/badge/Production-Live-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://bipin-kr.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16.4_(Turbopack)-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Google Search Console](https://img.shields.io/badge/GSC-Verified-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://bipin-kr.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

> **Live Production Platform**: [https://bipin-kr.vercel.app](https://bipin-kr.vercel.app)  
> **Direct Inline Resume (PDF)**: [https://bipin-kr.vercel.app/resume](https://bipin-kr.vercel.app/resume)  
> **AI Search Index**: [https://bipin-kr.vercel.app/llms.txt](https://bipin-kr.vercel.app/llms.txt)

---

## 👨‍💻 Executive Summary

This repository contains the production portfolio and technical engineering showcase of **Bipin Kumar**, Data Science & AI/ML Engineer. Built with **Next.js 16 (App Router with Turbopack)**, **TypeScript**, and **Tailwind CSS v4**, this platform is engineered from first principles with an executive dark theme, sub-second latency, zero layout shift (CLS), clean multi-page URL architecture without hash fragments, direct native browser PDF resume streaming, and full search optimization across standard and AI search engines (SEO, AEO, GEO, LLMO, and JSON-LD graph schemas).

- **Current Location**: Jaipur, Rajasthan, India
- **Origin Roots**: Muzaffarpur, Bihar, India
- **Education**: B.Tech in Computer Science & Engineering (2023 – Expected 2027), **Jagannath University, Jaipur** (CGPA: 7.4 / 10.0)
- **Primary Specialization**: Autonomous Multi-Agent AI Systems, Predictive Machine Learning Pipelines, and Full-Stack AI Microservice Deployments

---

## 🌟 Core Architectural Highlights

| Feature | Engineering Implementation | Recruiter Value |
| :--- | :--- | :--- |
| **Name-First Hero Hierarchy** | Prominent $H_1$ branding followed by role title and an executive summary of core technical competencies. | 10-second recruiter clarity on who Bipin is and what he builds. |
| **Strictly Verified Projects** | Exclusively showcases 2 production-deployed flagship applications with live links and public source code. | Zero boilerplate/dummy project noise; 100% real code. |
| **Executive Dark Theme** | Obsidian background (`#09090b`), elevated glass surfaces (`rgba(18, 18, 24, 0.65)`), and razor-sharp 1px zinc borders (`border-zinc-750`). | High-contrast, clean visual design inspired by Linear and Vercel. |
| **Direct PDF Resume Stream (`/resume`)** | Dynamic Route Handler streaming `public/Bipin_Kumar_Resume.pdf` with `Content-Disposition: inline`. | Opens directly in the browser's native PDF reader without download prompts or blank page redirects. |
| **Verified Credentials Hub** | Merges national AICTE virtual internships, IBM SkillsBuild programs, and data science training into one unified timeline. | Verifiable student/internship IDs with official Google Drive credential links. |
| **Contact Hub (Zero Form Friction)** | 1-click email copy with animated feedback, direct `mailto:` launcher, LinkedIn, and GitHub links. | Zero spam-prone form cards; instant direct recruiter connection. Strictly no phone numbers for privacy. |
| **Optimized Profile Assets** | 1:1 precision square crop centered on face coordinates with progressive JPEG encoding (19.2 KB). | Instant image rendering without distortion, clipping, or network lag. |
| **AI & Search Optimization** | Dynamic `sitemap.xml`, `robots.txt`, GSC verification, JSON-LD (`Person`, `SoftwareApplication`, `FAQPage`), and `llms.txt`. | Top indexing score on Google, Bing, Perplexity, ChatGPT, and Claude. |

---

## 🚀 Flagship Deployed Platforms

### 1. [Agentic FacilityOps AI Platform](https://facilityops-platform.vercel.app/)
> **Autonomous Multi-Agent Building Intelligence & Telemetry System**  
> **Live URL**: [https://facilityops-platform.vercel.app/](https://facilityops-platform.vercel.app/)  
> **Source Code**: [GitHub Repository](https://github.com/krbipin/Agentic-FacilityOps-AI-Platform)  
> **Case Study**: [`/projects/facilityops-ai`](https://bipin-kr.vercel.app/projects/facilityops-ai)

- **System Architecture**:
  - **Backend Microservices**: High-throughput FastAPI endpoints running on Python 3.12+ with SQLAlchemy 2 and async psycopg3.
  - **Database Layer**: Neon Serverless Cloud PostgreSQL with 16 normalized relational tables spanning facilities, equipment, telemetry events, and alerts.
  - **Live Sensor Telemetry**: A continuous LiveSimulator generates real-time 1-minute streaming events across HVAC, lighting, electrical circuits, and room occupancy.
  - **8 Autonomous AI Agents**: Specialized agents for Energy Optimization, Predictive Maintenance, Occupancy Analytics, Security Anomaly Detection, Utility Costing, Intelligence, Alert Triaging, and Executive Reporting.
  - **Machine Learning Inference**: Continuous telemetry evaluation using `IsolationForest` for anomaly scoring and `RandomForestClassifier` for early equipment failure risk prediction.
  - **AI Copilot**: Groq LLM API (Llama 3.3 70B) powering a natural-language facility operator assistant with prompt grounding against live telemetry records.
  - **Frontend UI**: Next.js 16 App Router interface rendering 14 production dashboard views with reactive charting (Recharts) and Clerk role-based session authentication.

---

### 2. [SwasthyaAI: Diabetes Risk Predictor](https://diabetes-predictor-muqth3gs8dfgsg9ea2wqz3.streamlit.app/)
> **Healthcare Machine Learning Diagnostic & Risk Assessment System**  
> **Live URL**: [https://diabetes-predictor-muqth3gs8dfgsg9ea2wqz3.streamlit.app/](https://diabetes-predictor-muqth3gs8dfgsg9ea2wqz3.streamlit.app/)  
> **Source Code**: [GitHub Repository](https://github.com/krbipin/diabetes-predictor)  
> **Case Study**: [`/projects/diabetes-predictor`](https://bipin-kr.vercel.app/projects/diabetes-predictor)

- **System Architecture**:
  - **Diagnostic Machine Learning**: Supervised binary classification model trained and validated on historical clinical biometric parameters.
  - **Feature Pipeline**: Evaluates 8 key clinical signals: Glucose concentration, Blood Pressure, Skin Thickness, Insulin, Body Mass Index (BMI), Diabetes Pedigree Function, Pregnancies, and Age.
  - **Data Preprocessing**: Pre-computed `StandardScaler` pipeline guarantees zero distribution skew between training data and real-time inference inputs.
  - **Inference Latency**: Sub-150ms prediction pipeline deployed via serialized `.sav` binary model artifacts.
  - **Clinical UI**: Responsive, accessible two-column Streamlit application delivering immediate visual risk stratification, lifestyle recommendations, and clear medical disclaimers for public welfare awareness.

---

## 🛠️ Verified Technical Stack

All technical competencies are grounded in code from Bipin's production platforms and academic coursework:

```
├── Machine Learning & Modeling
│   ├── Scikit-learn (RandomForest, IsolationForest, LogisticRegression)
│   ├── StandardScaler & Feature Normalization
│   ├── Model Serialization (Pickle / Joblib .sav binaries)
│   └── K-Fold Cross Validation & Evaluation (ROC-AUC, Precision, Recall, F1)
│
├── Agentic AI & LLMs
│   ├── Autonomous Multi-Agent Orchestration (8-Agent System)
│   ├── Groq LLM API (Llama 3.3 70B Inference)
│   ├── Prompt Engineering & Operational Copilots
│   ├── Retrieval-Augmented Generation (RAG) Concepts
│   └── Real-Time Sensor Telemetry Decision Logic
│
├── Data Processing & Analytics
│   ├── Python (3.11 / 3.12+)
│   ├── Pandas (Data Cleaning & Tabular Transformations)
│   ├── NumPy (Array Operations & Tensor Reshaping)
│   ├── Matplotlib & Seaborn (Statistical Diagnostic Plotting)
│   └── Exploratory Data Analysis (EDA & Outlier Detection)
│
├── API & Backend Microservices
│   ├── FastAPI (Asynchronous High-Throughput REST APIs)
│   ├── Pydantic V2 (Strict Schema Validation)
│   ├── AsyncIO & Python Async Paradigms
│   └── WebSockets & Streaming Feeds
│
├── Frontend & Interactive Dashboards
│   ├── Next.js 16 (Turbopack, App Router, React 19)
│   ├── TypeScript (Strict Type Safety)
│   ├── Streamlit (Interactive Data Science Apps)
│   ├── Tailwind CSS v4 (Executive Dark Design System)
│   └── Recharts (Reactive Analytics Visualizations)
│
└── Database & Cloud Infrastructure
    ├── PostgreSQL (Neon Serverless Cloud DB)
    ├── SQLAlchemy 2 & Psycopg3
    ├── Vercel Platform (Production Next.js Edge Hosting)
    ├── Streamlit Community Cloud
    └── Git & GitHub (Version Control & CI/CD)
```

---

## 📜 Verified Experience & Credentials

| Credential / Role | Organization | Affiliations / IDs | Link |
| :--- | :--- | :--- | :---: |
| **AI for Sustainability Virtual Intern** | 1M1B Foundation | Supported by AICTE & IBM SkillsBuild<br>ID: `INTERNSHIP_17828984086a44dee80acf6` | [Verify](https://drive.google.com/file/d/1D54eR2L-QdI4iH_jJ-Z3qB67JqF4dE1c/view?usp=sharing) |
| **Artificial Intelligence Intern** | Edunet Foundation | Supported by AICTE & IBM SkillsBuild<br>Student ID: `STU681afa946eb801746598548` | [Verify](https://drive.google.com/file/d/13e9D1rQeL6Qv2H-V5s9F8n1m9b8w7y6z/view?usp=sharing) |
| **Data Science Trainee** | CodeWithHarry | Comprehensive Job-Ready Data Science Track | [Verify](https://drive.google.com/file/d/1lH3gDQlH29kg_qeKrEOJu52MBpZaRWi1/view?usp=sharing) |
| **Python Programming Trainee** | Udemy | Complete 2025 Python Bootcamp (15 Hours) | [Verify](https://drive.google.com/file/d/1TeC1VFPYj05N3HYI5yMqytYWOYy6qLHE/view?usp=sharing) |

---

## 🗺️ Clean URL Multi-Page Routing Architecture

The site eliminates hashtag fragments (`#projects`, `#about`), providing dedicated canonical routes for every section:

```
https://bipin-kr.vercel.app
├── /                             -> Hero, Flagship Showcase, Metrics, Recruiter Quick Action
├── /about                        -> Background narrative, Muzaffarpur roots, Jagannath Uni, Principles
├── /projects                     -> 2 Flagship AI & ML Platforms Catalog
├── /projects/facilityops-ai      -> Deep dive architectural case study for FacilityOps AI
├── /projects/diabetes-predictor  -> Deep dive technical case study for SwasthyaAI
├── /experience                   -> Internships, AICTE credentials, verifiable certificates
├── /skills                       -> Technical skills matrix categorized into 6 domains
├── /education                    -> Jagannath University B.Tech CSE details, coursework & CGPA
├── /contact                      -> Recruiter hub (1-click email copy, direct mailto, LinkedIn, GitHub)
├── /resume                       -> Direct native browser inline PDF viewer stream
├── /sitemap.xml                  -> Automatically generated XML sitemap for search crawlers
├── /robots.txt                   -> Crawler directives & AI agent access permissions
├── /llms.txt                     -> Curated Markdown feed for AI search bots (Perplexity, ChatGPT, Claude)
└── /llms-full.txt                -> Complete technical briefing for large language model summarizers
```

---

## 📂 Repository File Structure

```
d:\bipin-portfolio
├── public/
│   ├── Bipin_Kumar_Resume.pdf    # Master resume PDF for native browser streaming
│   ├── profile.jpg               # Optimized 1:1 progressive JPEG avatar (19.2 KB)
│   ├── llms.txt                  # LLM search index (compact)
│   └── llms-full.txt             # LLM search index (full briefing)
├── src/
│   ├── app/
│   │   ├── about/page.tsx        # Professional narrative & background
│   │   ├── contact/page.tsx      # Recruiter contact hub
│   │   ├── education/page.tsx    # Academic foundation at Jagannath University
│   │   ├── experience/page.tsx   # Verified internships & certifications
│   │   ├── projects/
│   │   │   ├── [slug]/page.tsx   # Dynamic technical case study template
│   │   │   └── page.tsx          # Flagship projects showcase
│   │   ├── resume/route.ts       # Direct inline PDF stream handler
│   │   ├── globals.css           # Tailwind v4 theme, fonts, dark utilities
│   │   ├── layout.tsx            # Root layout, GSC verification, JSON-LD schemas
│   │   ├── page.tsx              # Homepage with Name-First Hero & metrics
│   │   ├── robots.ts             # Robots.txt route handler
│   │   └── sitemap.ts            # Dynamic sitemap route handler
│   ├── components/
│   │   ├── ExperienceCard.tsx    # Verifiable credential timeline card
│   │   ├── Footer.tsx            # Global executive dark footer
│   │   ├── Icons.tsx             # SVG icons (GitHub, LinkedIn)
│   │   ├── Navbar.tsx            # Translucent glass navbar with mobile drawer
│   │   └── ProjectCard.tsx       # Flagship platform showcase card
│   ├── data/
│   │   └── portfolio-data.ts     # Single source of truth for portfolio data
│   └── lib/
│       └── utils.ts              # Class merging utilities (clsx, tailwind-merge)
├── .gitignore                    # Comprehensive ignore rules (Node, Next, OS, IDEs)
├── next.config.ts                # Next.js 16 configuration (Turbopack, cache)
├── package.json                  # Project dependencies & scripts
├── README.md                     # Comprehensive technical documentation
└── tsconfig.json                 # TypeScript compiler configuration
```

---

## 💻 Local Development Setup

### Prerequisites
- **Node.js**: v18.18.0 or newer (v20+ recommended)
- **npm**: v9+ (or pnpm / yarn)
- **Git**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/krbipin/bipin-portfolio.git

# 2. Navigate to project root
cd bipin-portfolio

# 3. Install dependencies
npm install

# 4. Start local development server with Turbopack
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Validation

```bash
# Verify static prerendering and TypeScript types
npm run build

# Start local production server
npm run start
```

---

## 🌐 Production Deployment

The project is deployed on **Vercel** with automatic continuous deployment (CI/CD) hooked to the `main` branch of `https://github.com/krbipin/bipin-portfolio`.

- **Production URL**: [https://bipin-kr.vercel.app](https://bipin-kr.vercel.app)
- **Framework Preset**: Next.js (Turbopack)
- **Node Version**: 20.x
- **Build Command**: `next build`
- **Output**: Static Prerendered HTML / Edge Functions

---

## 📬 Contact & Connect

- **Direct Email**: [bipinkumarkataroo6201@gmail.com](mailto:bipinkumarkataroo6201@gmail.com)
- **LinkedIn**: [linkedin.com/in/bipinkr](https://www.linkedin.com/in/bipinkr)
- **GitHub**: [github.com/krbipin](https://github.com/krbipin)
- **Academic Institution**: [Jagannath University, Jaipur](https://www.jagannathuniversity.org/)

---

<div align="center">
  <sub>Designed & engineered by <strong>Bipin Kumar</strong>. Built with Next.js 16, TypeScript & Tailwind CSS.</sub>
</div>
