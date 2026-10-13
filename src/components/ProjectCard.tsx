import Link from "next/link";
import { ArrowUpRight, ExternalLink, Activity, Layers, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { Project } from "@/data/portfolio-data";

export function ProjectCard({ project }: { project: Project }) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Agentic AI":
        return "bg-indigo-500/10 text-indigo-300 border-indigo-500/30";
      case "Machine Learning":
        return "bg-cyan-500/10 text-cyan-300 border-cyan-500/30";
      case "Deep Learning & NLP":
        return "bg-purple-500/10 text-purple-300 border-purple-500/30";
      default:
        return "bg-emerald-500/10 text-emerald-300 border-emerald-500/30";
    }
  };

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300">
      {/* Top ambient highlight on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Top bar with category & featured badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full border ${getCategoryColor(
              project.category
            )}`}
          >
            {project.category}
          </span>
          {project.featured && (
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
              <Sparkles className="w-3 h-3" />
              Featured
            </span>
          )}
        </div>

        {/* Title & subtitle */}
        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className="text-xs sm:text-sm font-medium text-cyan-400/90 mt-1 mb-3">
          {project.subtitle}
        </p>

        {/* Short description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Metrics mini grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mb-5">
            {project.metrics.slice(0, 2).map((m, idx) => (
              <div
                key={idx}
                className="bg-white/[0.03] border border-white/[0.05] rounded-lg p-2.5 text-center"
              >
                <div className="text-xs text-slate-400">{m.label}</div>
                <div className="text-sm font-bold text-white mt-0.5">{m.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.slice(0, 5).map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.06]"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white/[0.02] text-slate-400">
              +{project.tags.length - 5} more
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-indigo-600/30 hover:bg-indigo-600/50 border border-indigo-500/40 hover:border-indigo-400 px-4 py-2 rounded-xl transition-all"
        >
          <span>Read Case Study</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>

        <div className="flex items-center gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live Demo for ${project.title}`}
              className="p-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-colors"
              title="Visit Live Application"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub source for ${project.title}`}
            className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/[0.08] transition-colors"
            title="Inspect Source Code"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
