"use client";

import { useState } from "react";
import { Bot, Sparkles, Filter, Layers, Code2 } from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolio-data";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Agentic AI",
    "Machine Learning",
    "Deep Learning & NLP",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header section */}
      <div className="max-w-3xl mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">
          <Bot className="w-3.5 h-3.5" />
          <span>Production Portfolio</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Engineered <span className="gradient-text-primary">AI & ML Projects</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          Explore complete production platforms, autonomous multi-agent systems, and predictive ML models.
          Each project includes a full case study with architectural diagrams, problem statements, and live links.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/[0.06]">
        <div className="flex items-center gap-1.5 text-xs text-slate-400 mr-2">
          <Filter className="w-3.5 h-3.5" />
          <span>Filter:</span>
        </div>
        {categories.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                isSelected
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white border border-white/[0.06]"
              }`}
            >
              {category}
              <span className="ml-2 text-xs opacity-70">
                (
                {category === "All"
                  ? PROJECTS.length
                  : PROJECTS.filter((p) => p.category === category).length}
                )
              </span>
            </button>
          );
        })}
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
