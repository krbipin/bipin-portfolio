import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  ArrowRight,
  ExternalLink,
  Briefcase,
  Cpu,
  Database,
  BarChart3,
  Bot,
  Mail,
} from "lucide-react";
import { LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO, PROJECTS, EXPERIENCES } from "@/data/portfolio-data";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceCard } from "@/components/ExperienceCard";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        {/* Profile Avatar: Small, Centered & Professional */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="relative group">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-indigo-500/50 shadow-2xl bg-zinc-900">
              <Image
                src="/profile.jpg"
                alt="Bipin Kumar - Data Science & AI/ML Engineer"
                fill
                priority
                sizes="(max-width: 768px) 112px, 128px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Active Status Badge */}
            <div
              className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#09090b] shadow-md flex items-center justify-center"
              title="Open to Opportunities"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-ping opacity-75" />
            </div>
          </div>

          {/* Availability Pill */}
          <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Open to Data Science & AI/ML Roles</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1]">
          Building Intelligent Systems With{" "}
          <span className="gradient-text-primary">Agentic AI & ML</span>
        </h1>

        {/* Subtitle / Role specialization */}
        <p className="mt-6 text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Hi, I&apos;m <strong className="text-white font-semibold">Bipin Kumar</strong>. I engineer
          autonomous multi-agent platforms, scalable predictive machine learning pipelines, and
          high-performance data-driven applications.
        </p>

        {/* Core domains badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 max-w-xl mx-auto">
          <span className="px-3 py-1 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800 text-xs font-medium">
            Agentic AI & RAG
          </span>
          <span className="px-3 py-1 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800 text-xs font-medium">
            Data Analytics & Predictive ML
          </span>
          <span className="px-3 py-1 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800 text-xs font-medium">
            AI Integration & FastAPI
          </span>
          <span className="px-3 py-1 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800 text-xs font-medium">
            Jagannath University, Jaipur
          </span>
        </div>

        {/* Main CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <FileText className="w-4 h-4 text-zinc-300" />
            <span>View Resume (PDF)</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
          </a>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-750 hover:border-zinc-600 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 text-zinc-400" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-750 hover:border-zinc-600 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Mail className="w-4 h-4 text-zinc-400" />
            <span>Contact Hub</span>
          </Link>
        </div>

        {/* Metrics Bar */}
        <div className="mt-14 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-4 sm:p-5 text-center border border-white/[0.08]"
            >
              <div className="text-2xl sm:text-4xl font-heading font-extrabold text-white">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-zinc-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative border-t border-white/[0.08]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
              <Bot className="w-3.5 h-3.5" />
              <span>Production Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              Flagship AI & ML Platforms
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              Production autonomous systems and predictive machine learning architectures with live deployments and open-source code.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-750 hover:border-zinc-600 transition-all group shrink-0 active:scale-[0.98]"
          >
            <span>View Case Studies</span>
            <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* EXPERIENCE & VERIFIED CREDENTIALS HIGHLIGHT */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative border-t border-white/[0.08]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Industry Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              Internships & Certifications
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              AICTE-supported virtual internships, IBM SkillsBuild programs, and data science training tracks.
            </p>
          </div>

          <Link
            href="/experience"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-750 hover:border-zinc-600 transition-all group shrink-0 active:scale-[0.98]"
          >
            <span>View All Credentials</span>
            <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="space-y-6">
          {EXPERIENCES.slice(0, 2).map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>
      </section>

      {/* CORE SKILLS & DOMAIN COVERAGE */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative border-t border-white/[0.08]">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
            Specialized Tech Stack
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            Tooling tailored for rapid experimentation, robust ML modeling, and production-grade deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="glass-card rounded-2xl p-6 border border-white/[0.08]">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-heading font-bold text-white mb-2">Agentic AI & LLMs</h3>
            <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
              Multi-agent orchestration, RAG architectures, and vector embeddings.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["LangChain", "ChromaDB", "Groq LLM", "OpenAI API", "Sentence Transformers"].map((s, i) => (
                <span key={i} className="text-xs px-2.5 py-1 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-white/[0.08]">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-heading font-bold text-white mb-2">Machine Learning</h3>
            <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
              Supervised/unsupervised algorithms, hyperparameter tuning, and XAI.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Scikit-learn", "XGBoost", "RandomForest", "SHAP", "SMOTE", "ONNX"].map((s, i) => (
                <span key={i} className="text-xs px-2.5 py-1 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-white/[0.08]">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-heading font-bold text-white mb-2">Data & Analytics</h3>
            <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
              EDA, statistical hypothesis testing, data wrangling, and BI dashboards.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "SQL"].map((s, i) => (
                <span key={i} className="text-xs px-2.5 py-1 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-white/[0.08]">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-heading font-bold text-white mb-2">Full-Stack & APIs</h3>
            <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
              High-throughput asynchronous APIs and responsive reactive client UIs.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["FastAPI", "Next.js", "React.js", "PostgreSQL", "MongoDB", "Streamlit"].map((s, i) => (
                <span key={i} className="text-xs px-2.5 py-1 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-200 hover:text-white px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-750 hover:border-zinc-600 transition-all active:scale-[0.98]"
          >
            <span>Explore All 30+ Skills & Tooling</span>
            <ArrowRight className="w-4 h-4 text-zinc-400" />
          </Link>
        </div>
      </section>

      {/* RECRUITER CTA BANNER */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden border border-zinc-800 bg-[#0c0c12] text-center">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Recruiter Quick Action
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight mt-2 leading-tight">
              Looking for a Dedicated Data Science & AI/ML Engineer?
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed">
              Available for full-time roles, internships, and technical collaborations.
              Examine my resume directly or connect to discuss potential synergy.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 shadow-sm transition-all active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-zinc-300" />
                <span>View Resume (PDF)</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>

              <a
                href={PERSONAL_INFO.social.email}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-750 hover:border-zinc-600 transition-all active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-zinc-400" />
                <span>Email Bipin</span>
              </a>

              <a
                href={PERSONAL_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-750 hover:border-zinc-600 transition-all active:scale-[0.98]"
              >
                <LinkedinIcon className="w-4 h-4 text-zinc-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
