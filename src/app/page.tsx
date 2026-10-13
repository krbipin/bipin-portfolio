import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Code2,
  Briefcase,
  GraduationCap,
  Layers,
  Cpu,
  Database,
  BarChart3,
  Bot,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { PERSONAL_INFO, PROJECTS, EXPERIENCES } from "@/data/portfolio-data";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceCard } from "@/components/ExperienceCard";

export default function HomePage() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const featuredExperiences = EXPERIENCES.slice(0, 2);

  return (
    <div className="relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-80 right-1/4 w-[500px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        {/* Profile Avatar: Small, Centered & Professional */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="relative group">
            {/* Outer animated gradient ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 opacity-75 blur-sm group-hover:opacity-100 transition duration-500" />
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-900">
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
            <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#07090e] shadow-md flex items-center justify-center" title="Open to Opportunities">
              <span className="w-2 h-2 rounded-full bg-white animate-ping opacity-75" />
            </div>
          </div>

          {/* Availability Pill */}
          <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md text-xs font-semibold text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open to Data Science & AI/ML Engineer Roles</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1]">
          Building Intelligent Systems With{" "}
          <span className="gradient-text-primary">Agentic AI & ML</span>
        </h1>

        {/* Subtitle / Role specialization */}
        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Hi, I&apos;m <strong className="text-white font-semibold">Bipin Kumar</strong>. I engineer
          autonomous multi-agent platforms, scalable predictive machine learning pipelines, and
          high-performance data-driven applications.
        </p>

        {/* Core domains badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 max-w-xl mx-auto">
          <span className="px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs font-semibold">
            🤖 Agentic AI & RAG
          </span>
          <span className="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-semibold">
            📊 Data Analytics & Predictive ML
          </span>
          <span className="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs font-semibold">
            ⚡ AI Integration & FastAPI
          </span>
          <span className="px-3 py-1 rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/20 text-xs font-semibold">
            🎓 Jagannath University, Jaipur
          </span>
        </div>

        {/* Main CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <FileText className="w-4 h-4" />
            <span>View Resume (PDF)</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] hover:border-white/[0.2] transition-all hover:scale-[1.02]"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] transition-all"
          >
            <Mail className="w-4 h-4 text-indigo-400" />
            <span>Get in Touch</span>
          </Link>
        </div>

        {/* Metrics Bar */}
        <div className="mt-14 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-4 sm:p-5 text-center border border-white/[0.08]"
            >
              <div className="text-2xl sm:text-4xl font-extrabold text-white bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative border-t border-white/[0.06]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">
              <Bot className="w-3.5 h-3.5" />
              <span>Engineered Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Flagship AI & ML Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Production autonomous systems, predictive models, and full-stack AI architectures
              with verifiable metrics.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-cyan-400 transition-colors group shrink-0"
          >
            <span>View All 6 Projects & Case Studies</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* EXPERIENCE & VERIFIED CREDENTIALS HIGHLIGHT */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative border-t border-white/[0.06]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Industry Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Internships & Certifications
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              AICTE-supported virtual internships, IBM SkillsBuild programs, and practical
              data science tracks with direct credential verification.
            </p>
          </div>

          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-cyan-400 transition-colors group shrink-0"
          >
            <span>View Complete Experience Timeline</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="space-y-6">
          {featuredExperiences.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>
      </section>

      {/* CORE SKILLS & DOMAIN COVERAGE */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative border-t border-white/[0.06]">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Specialized Tech Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Tooling tailored for rapid experimentation, robust ML modeling, and production-grade deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="glass-card rounded-2xl p-6 border border-white/[0.08]">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Agentic AI & LLMs</h3>
            <p className="text-xs text-slate-400 mb-4">
              Multi-agent orchestration, RAG architectures, and vector embeddings.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["LangChain", "ChromaDB", "Groq LLM", "OpenAI API", "Sentence Transformers"].map((s, i) => (
                <span key={i} className="text-xs px-2 py-0.5 rounded bg-white/[0.04] text-slate-300">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-white/[0.08]">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Machine Learning</h3>
            <p className="text-xs text-slate-400 mb-4">
              Supervised/unsupervised algorithms, hyperparameter tuning, and XAI.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Scikit-learn", "XGBoost", "RandomForest", "SHAP", "SMOTE", "ONNX"].map((s, i) => (
                <span key={i} className="text-xs px-2 py-0.5 rounded bg-white/[0.04] text-slate-300">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-white/[0.08]">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Data & Analytics</h3>
            <p className="text-xs text-slate-400 mb-4">
              EDA, statistical hypothesis testing, data wrangling, and BI dashboards.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "SQL"].map((s, i) => (
                <span key={i} className="text-xs px-2 py-0.5 rounded bg-white/[0.04] text-slate-300">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-white/[0.08]">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Full-Stack & APIs</h3>
            <p className="text-xs text-slate-400 mb-4">
              High-throughput asynchronous APIs and responsive reactive client UIs.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["FastAPI", "Next.js", "React.js", "PostgreSQL", "MongoDB", "Streamlit"].map((s, i) => (
                <span key={i} className="text-xs px-2 py-0.5 rounded bg-white/[0.04] text-slate-300">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-all"
          >
            <span>Explore All 30+ Skills & Tooling</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </Link>
        </div>
      </section>

      {/* RECRUITER CTA BANNER */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-14 overflow-hidden border border-indigo-500/30 bg-gradient-to-b from-indigo-950/40 via-slate-900/60 to-[#07090e]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Recruiter Quick Action
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 leading-tight">
              Looking for a Driven Data Science & AI/ML Engineer?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
              I am open to full-time roles, internships, and contract opportunities.
              Review my resume directly in your browser or drop me a note to discuss how I can
              contribute to your machine learning and autonomous systems initiatives.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:brightness-110 shadow-lg shadow-indigo-500/25 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume (PDF)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.1] transition-all"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Contact Bipin</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
