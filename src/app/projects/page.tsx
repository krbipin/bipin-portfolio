import { Bot } from "lucide-react";
import { PROJECTS } from "@/data/portfolio-data";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata = {
  title: "Projects & Production Platforms | Bipin Kumar",
  description:
    "Explore Bipin Kumar's flagship AI & ML platforms: Agentic FacilityOps AI Platform and SwasthyaAI Diabetes Risk Predictor.",
};

export default function ProjectsPage() {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header section */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
          <Bot className="w-3.5 h-3.5" />
          <span>Production Engineering</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
          Flagship <span className="gradient-text-primary">AI & ML Platforms</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
          In-depth architectural breakdowns of production-grade systems engineered from scratch.
          Each project features live deployments, verifiable metrics, and complete source code.
        </p>
      </div>

      {/* Project Cards Grid (2 Projects) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
