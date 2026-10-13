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
      url: `https://bipin-portfolio.vercel.app/projects/${project.slug}`,
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find next project for quick navigation
  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Back Link */}
      <div className="mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Header Info */}
      <div className="mb-10">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
            {project.category}
          </span>
          {project.featured && (
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Flagship Project
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {project.title}
        </h1>
        <p className="text-base sm:text-xl text-cyan-400 font-medium mt-2">
          {project.subtitle}
        </p>

        <p className="text-slate-300 text-base sm:text-lg mt-6 leading-relaxed">
          {project.overview}
        </p>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:brightness-110 shadow-lg shadow-indigo-500/25 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Live Application</span>
            </a>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] hover:border-white/[0.2] transition-all"
          >
            <GithubIcon className="w-4 h-4" />
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
              <div className="text-xs text-slate-400 font-medium">{m.label}</div>
              <div className="text-xl sm:text-2xl font-bold text-white mt-1 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                {m.value}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* PROBLEM & SOLUTION SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        {/* Problem Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-7 border border-red-500/20 bg-red-950/[0.05]">
          <div className="flex items-center gap-2 text-red-400 font-bold text-sm uppercase tracking-wider mb-3">
            <AlertTriangle className="w-4 h-4" />
            <span>The Problem</span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">{project.problem}</p>
        </div>

        {/* Solution Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-7 border border-emerald-500/20 bg-emerald-950/[0.05]">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider mb-3">
            <Lightbulb className="w-4 h-4" />
            <span>The Solution</span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">{project.solution}</p>
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
            <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
              <span className="w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <p className="leading-relaxed">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* KEY FEATURES */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/[0.08] my-10">
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-wider mb-4">
          <Bot className="w-4 h-4" />
          <span>Key Engineered Features</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.keyFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-start gap-2.5"
            >
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {feat}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* TECH STACK BREAKDOWN */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/[0.08] my-10">
        <div className="flex items-center gap-2 text-purple-400 font-bold text-sm uppercase tracking-wider mb-6">
          <Layers className="w-4 h-4" />
          <span>Technology Stack Breakdown</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {project.techStack.map((stack, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                {stack.category}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {stack.items.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-200 border border-white/[0.08]"
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
        <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider mb-4">
          <BarChart className="w-4 h-4" />
          <span>Measurable Results & Impact</span>
        </div>

        <div className="space-y-3">
          {project.impact.map((imp, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{imp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* NEXT PROJECT FOOTER NAVIGATION */}
      <div className="mt-14 pt-8 border-t border-white/[0.08] flex items-center justify-between">
        <Link
          href="/projects"
          className="text-sm font-semibold text-slate-400 hover:text-white transition-colors"
        >
          ← All Projects
        </Link>

        <Link
          href={`/projects/${nextProject.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <span>Next Project: {nextProject.title}</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
