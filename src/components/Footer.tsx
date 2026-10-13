import Link from "next/link";
import {
  Mail,
  FileText,
  MapPin,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#05070c] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-indigo-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1 & 2: Brand & Recruiter Summary */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[1px] flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <div className="w-full h-full bg-[#07090e] rounded-[7px] flex items-center justify-center">
                  <span className="font-extrabold text-sm text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                    BK
                  </span>
                </div>
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Bipin Kumar<span className="text-cyan-400">.</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Data Science & AI/ML Engineer specialized in autonomous agent architectures,
              scalable ML pipelines, and production full-stack AI integration.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                Data Science
              </span>
              <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                AI/ML Engineer
              </span>
              <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                Data Analytics
              </span>
              <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
                AI Integration
              </span>
            </div>

            <div className="pt-3 flex items-center gap-3">
              <a
                href={PERSONAL_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-indigo-500/40 hover:bg-indigo-500/10 text-slate-400 hover:text-white flex items-center justify-center transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-cyan-500/40 hover:bg-cyan-500/10 text-slate-400 hover:text-white flex items-center justify-center transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.social.email}
                aria-label="Send direct email"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-emerald-500/40 hover:bg-emerald-500/10 text-slate-400 hover:text-white flex items-center justify-center transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Resume PDF"
                className="px-3 py-1.5 rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 hover:text-white hover:bg-indigo-600/30 flex items-center gap-1.5 text-xs font-semibold transition-all"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume PDF</span>
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Journey
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-400 hover:text-white transition-colors">
                  Projects Catalog
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-slate-400 hover:text-white transition-colors">
                  Experience & Credentials
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-slate-400 hover:text-white transition-colors">
                  Skills Matrix
                </Link>
              </li>
              <li>
                <Link href="/education" className="text-slate-400 hover:text-white transition-colors">
                  Education & Academics
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Featured Case Studies */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Project Case Studies
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/projects/facilityops-ai"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>FacilityOps AI</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/diabetes-predictor"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>SwasthyaAI Predictor</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/rag-document-qa"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>RAG Document Q&A</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/movie-recommender"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>Movie Recommender</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/churn-predictor"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>Customer Churn ML</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/sentiment-analyzer"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>BERT Sentiment Pipeline</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Location & University */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Location & Campus
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-200 font-semibold">Current Location</p>
                  <p>Jaipur, Rajasthan, India</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-200 font-semibold">Origin Roots</p>
                  <p>Muzaffarpur, Bihar, India</p>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1 border-t border-white/[0.06]">
                <GraduationCap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <a
                    href={PERSONAL_INFO.university.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-200 hover:text-emerald-400 font-semibold flex items-center gap-1 transition-colors"
                  >
                    <span>Jagannath University</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <p>B.Tech CSE (2023 – 2027)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} Bipin Kumar. Designed & engineered for production recruiters.</p>
          <div className="flex items-center gap-4">
            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <span>View Resume</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <Link href="/contact" className="text-slate-400 hover:text-indigo-400 transition-colors">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
