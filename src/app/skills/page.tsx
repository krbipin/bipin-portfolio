import { Cpu, Bot, BarChart3, Database, Code2, Sparkles, CheckCircle2 } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolio-data";

export const metadata = {
  title: "Skills & Technical Stack | Machine Learning & Agentic AI",
  description:
    "Comprehensive skills matrix of Bipin Kumar covering Scikit-learn, TensorFlow, PyTorch, LangChain, FastAPI, Next.js, PostgreSQL, and Data Science tools.",
};

export default function SkillsPage() {
  const getLevelBadge = (level: "Advanced" | "Proficient" | "Familiar") => {
    switch (level) {
      case "Advanced":
        return "bg-emerald-500/10 text-emerald-300 border-emerald-500/30";
      case "Proficient":
        return "bg-indigo-500/10 text-indigo-300 border-indigo-500/30";
      default:
        return "bg-cyan-500/10 text-cyan-300 border-cyan-500/30";
    }
  };

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header section */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">
          <Cpu className="w-3.5 h-3.5" />
          <span>Core Competencies</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Technical <span className="gradient-text-emerald">Skills Matrix</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          A structured breakdown of languages, frameworks, AI agent libraries, and engineering tools
          applied across my production projects and research pipelines.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div
            key={idx}
            className="glass-card rounded-2xl p-6 sm:p-7 border border-white/[0.08] hover:border-indigo-500/30 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-sm" />
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {cat.title}
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                {cat.description}
              </p>

              <div className="space-y-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between"
                  >
                    <span className="text-sm font-medium text-slate-200">
                      {skill.name}
                    </span>
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${getLevelBadge(
                        skill.level
                      )}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
