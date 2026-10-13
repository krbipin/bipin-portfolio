import Link from "next/link";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { Project } from "@/data/portfolio-data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-200">
      <div>
        {/* Top bar with category & featured badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-850 text-zinc-300 border border-zinc-700/60">
            {project.category}
          </span>
          {project.featured && (
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-950/80 text-indigo-300 border border-indigo-700/40">
              <Sparkles className="w-3 h-3 text-indigo-400" />
              Flagship Platform
            </span>
          )}
        </div>

        {/* Title & subtitle */}
        <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-indigo-300 transition-colors tracking-tight">
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className="text-xs sm:text-sm font-medium text-zinc-400 mt-1 mb-3.5">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-zinc-300 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Metrics mini grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-2.5 mb-5">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="bg-zinc-950/80 border border-zinc-800 rounded-lg p-2.5 text-center"
              >
                <div className="text-[11px] font-medium text-zinc-400">{m.label}</div>
                <div className="text-sm font-bold text-white mt-0.5">{m.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 px-4 py-2 rounded-xl transition-all shadow-sm active:scale-[0.98]"
        >
          <span>Read Case Study</span>
          <ArrowUpRight className="w-4 h-4 text-zinc-300" />
        </Link>

        <div className="flex items-center gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live Demo for ${project.title}`}
              className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-750 hover:border-zinc-600 transition-all active:scale-[0.95]"
              title="Visit Live Application"
            >
              <ExternalLink className="w-4 h-4 text-zinc-300" />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub source for ${project.title}`}
            className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-750 hover:border-zinc-600 transition-all active:scale-[0.95]"
            title="Inspect Source Code"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
