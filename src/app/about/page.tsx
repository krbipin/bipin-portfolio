import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  MapPin,
  GraduationCap,
  ExternalLink,
  Target,
  BrainCircuit,
  Compass,
  ArrowRight,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export const metadata = {
  title: "About Me | Background, Journey & Vision",
  description:
    "Learn about Bipin Kumar's journey from Muzaffarpur, Bihar to studying B.Tech CSE at Jagannath University, Jaipur, and his dedication to Data Science and AI/ML engineering.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header section */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
          <Compass className="w-3.5 h-3.5" />
          <span>Professional Narrative</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Engineering Intelligence from <span className="gradient-text-primary">First Principles</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
          The story, technical philosophy, and driving ambitions behind my work in Data Science,
          Machine Learning, and Autonomous Agent Systems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Profile Card & Quick Facts */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/[0.08] text-center">
            <div className="relative w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden border-2 border-indigo-500/40 p-1 bg-zinc-900 shadow-xl">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Bipin Kumar"
                  fill
                  className="object-cover"
                  sizes="144px"
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white">Bipin Kumar</h2>
            <p className="text-sm font-semibold text-indigo-300 mt-1">
              Data Science & AI/ML Engineer
            </p>

            <div className="mt-6 pt-6 border-t border-white/[0.06] space-y-3.5 text-left text-xs sm:text-sm text-zinc-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Current Base:</span>
                  Jaipur, Rajasthan, India
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Origin & Roots:</span>
                  Muzaffarpur, Bihar, India
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <GraduationCap className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Education:</span>
                  Jagannath University, Jaipur
                  <span className="block text-zinc-400 text-xs mt-0.5">
                    B.Tech CSE (2023 – 2027) • CGPA: 7.4
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col gap-2.5">
              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 shadow-sm transition-all active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-zinc-300" />
                <span>Open Resume PDF</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>

              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-750 hover:border-zinc-650 transition-all active:scale-[0.98]"
              >
                <span>Initiate Contact</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Narrative */}
        <div className="lg:col-span-7 space-y-8">
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/[0.08]">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <BrainCircuit className="w-5 h-5 text-indigo-400" />
              <span>Who I Am & What I Build</span>
            </h3>
            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p>
                Originally from <strong>Muzaffarpur, Bihar</strong>, I relocated to{" "}
                <strong>Jaipur, Rajasthan</strong> to pursue my Bachelor of Technology in Computer
                Science & Engineering at <strong>Jagannath University</strong>. From my early
                undergraduate days, I became captivated by how mathematical models can uncover hidden
                patterns in real-world data and automate complex cognitive tasks.
              </p>
              <p>
                My focus has sharpened into three pillars:
              </p>
              <ul className="space-y-2 pl-4 list-disc marker:text-indigo-400">
                <li>
                  <strong className="text-white">Agentic AI & RAG Architectures:</strong> Designing
                  systems where autonomous agents reason, query telemetry streams, and make contextual operational decisions
                  (exemplified by the <em>Agentic FacilityOps AI Platform</em> with 8 collaborative agents).
                </li>
                <li>
                  <strong className="text-white">Predictive Machine Learning:</strong> Training
                  robust supervised models with feature scaling, cross-validation, and diagnostic pipelines
                  (exemplified by <em>SwasthyaAI: Diabetes Risk Predictor</em> with normalized clinical inference).
                </li>
                <li>
                  <strong className="text-white">Full-Stack AI Integration:</strong> Bridging the gap
                  between high-performance Python backends (FastAPI, Scikit-learn, ONNX) and modern responsive frontends (Next.js, React)
                  so intelligent systems operate with sub-second latency.
                </li>
              </ul>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/[0.08]">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-400" />
              <span>My Core Engineering Principles</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <h4 className="font-semibold text-white text-sm">1. Zero-Mock Reality</h4>
                <p className="text-xs text-zinc-400 mt-1">
                  Every pipeline handles live streaming data, edge-case nulls, and real databases rather than hardcoded static mockups.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <h4 className="font-semibold text-white text-sm">2. Latency & Efficiency</h4>
                <p className="text-xs text-zinc-400 mt-1">
                  Optimizing inference via ONNX quantization, efficient feature normalization, and asynchronous API handling.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <h4 className="font-semibold text-white text-sm">3. Verified Credentials</h4>
                <p className="text-xs text-zinc-400 mt-1">
                  Endorsed through AICTE and IBM SkillsBuild programs with verifiable IDs and measurable deliverables.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <h4 className="font-semibold text-white text-sm">4. Recruiter Transparency</h4>
                <p className="text-xs text-zinc-400 mt-1">
                  Clear documentation, public GitHub repositories, deployed live URLs, and instant PDF resume access.
                </p>
              </div>
            </div>
          </div>

          {/* Quick links banner */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 shadow-sm transition-all active:scale-[0.98]"
            >
              <span>Explore Deployed Projects</span>
              <ArrowRight className="w-4 h-4 text-zinc-400" />
            </Link>

            <Link
              href="/experience"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-750 hover:border-zinc-650 transition-all active:scale-[0.98]"
            >
              <span>Review Verified Credentials</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
