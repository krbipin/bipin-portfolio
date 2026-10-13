import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowLeft,
  ExternalLink,
  Sparkles,
  Layers,
  Cpu,
  Database,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Workflow,
  BarChart,
  Bot,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { PROJECTS, Project } from "@/data/portfolio-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Technical Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Bipin Kumar Case Study`,
      description: project.description,
      url: `https://bipin-kr.vercel.app/projects/${project.slug}`,
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Toggle between the 2 projects
  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Back Link */}
      <div className="mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-sm font-semibold text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-750 hover:border-zinc-600 transition-all group active:scale-[0.98]"
        >
          <ArrowLeft className="w-4 h-4 text-zinc-400 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Header Info */}
      <div className="mb-10">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700/60">
            {project.category}
          </span>
          {project.featured && (
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-950/80 text-indigo-300 border border-indigo-700/40 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-indigo-400" />
              Flagship Project
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
          {project.title}
        </h1>
        <p className="text-base sm:text-xl text-zinc-300 font-medium mt-2">
          {project.subtitle}
        </p>

        <p className="text-zinc-300 text-base sm:text-lg mt-6 leading-relaxed">
          {project.overview}
        </p>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 shadow-sm transition-all active:scale-[0.98]"
            >
              <ExternalLink className="w-4 h-4 text-zinc-300" />
              <span>Launch Live Application</span>
            </a>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-750 hover:border-zinc-600 transition-all active:scale-[0.98]"
          >
            <GithubIcon className="w-4 h-4 text-zinc-300" />
            <span>View Source Code (GitHub)</span>
          </a>
        </div>
      </div>

      {/* Quantitative Metrics Bar */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 my-10">
          {project.metrics.map((m, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-4 sm:p-5 text-center border border-white/[0.08]"
            >
              <div className="text-xs text-zinc-400 font-medium">{m.label}</div>
              <div className="text-xl sm:text-2xl font-heading font-extrabold text-white mt-1">
                {m.value}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* PROBLEM & SOLUTION SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        {/* Problem Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/[0.08]">
          <div className="flex items-center gap-2 text-zinc-200 font-bold text-sm uppercase tracking-wider mb-3">
            <AlertTriangle className="w-4 h-4 text-indigo-400" />
            <span>The Challenge</span>
          </div>
          <p className="text-zinc-300 text-sm leading-relaxed">{project.problem}</p>
        </div>

        {/* Solution Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/[0.08]">
          <div className="flex items-center gap-2 text-zinc-200 font-bold text-sm uppercase tracking-wider mb-3">
            <Lightbulb className="w-4 h-4 text-indigo-400" />
            <span>The Solution Architecture</span>
          </div>
          <p className="text-zinc-300 text-sm leading-relaxed">{project.solution}</p>
        </div>
      </div>

      {/* SYSTEM ARCHITECTURE & DATA FLOW */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/[0.08] my-10">
        <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm uppercase tracking-wider mb-4">
          <Workflow className="w-4 h-4" />
          <span>System Architecture & Pipeline Flow</span>
        </div>

        <div className="space-y-4">
          {project.architecture.map((step, idx) => (
            <div key={idx} className="flex items-start gap-3.5 text-sm text-zinc-300">
              <span className="w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-200 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                {idx + 1}
              </span>
              <p className="leading-relaxed">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* KEY FEATURES */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/[0.08] my-10">
        <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm uppercase tracking-wider mb-4">
          <Bot className="w-4 h-4" />
          <span>Key Engineered Features</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.keyFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 flex items-start gap-2.5"
            >
              <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {feat}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* TECH STACK BREAKDOWN */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/[0.08] my-10">
        <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm uppercase tracking-wider mb-6">
          <Layers className="w-4 h-4" />
          <span>Technology Stack Breakdown</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {project.techStack.map((stack, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                {stack.category}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {stack.items.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* REAL WORLD IMPACT */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/[0.08] my-10">
        <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm uppercase tracking-wider mb-4">
          <BarChart className="w-4 h-4" />
          <span>Measurable Results & Impact</span>
        </div>

        <div className="space-y-3">
          {project.impact.map((imp, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{imp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER NAVIGATION */}
      <div className="mt-14 pt-8 border-t border-white/[0.08] flex items-center justify-between gap-4">
        <Link
          href="/projects"
          className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-850 border border-zinc-750 hover:border-zinc-650 transition-all active:scale-[0.98]"
        >
          ← All Projects
        </Link>

        <Link
          href={`/projects/${nextProject.slug}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-850 border border-zinc-750 hover:border-zinc-650 transition-all active:scale-[0.98]"
        >
          <span>Switch Project: {nextProject.title}</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
