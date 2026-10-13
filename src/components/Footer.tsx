import Link from "next/link";
import {
  Mail,
  FileText,
  MapPin,
  GraduationCap,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#050508] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1 & 2: Brand & Recruiter Summary */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 p-[1px] flex items-center justify-center shadow-sm">
                <div className="w-full h-full bg-[#050508] rounded-[7px] flex items-center justify-center">
                  <span className="font-extrabold text-xs text-indigo-400 font-heading">
                    BK
                  </span>
                </div>
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                Bipin Kumar<span className="text-indigo-400">.</span>
              </span>
            </Link>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Data Science & AI/ML Engineer specialized in autonomous agent architectures,
              scalable ML pipelines, and production full-stack AI integration.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800">
                Data Science
              </span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800">
                AI/ML Engineer
              </span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800">
                Data Analytics
              </span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800">
                AI Integration
              </span>
            </div>

            <div className="pt-3 flex items-center gap-3">
              <a
                href={PERSONAL_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-850 text-zinc-400 hover:text-white flex items-center justify-center transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-850 text-zinc-400 hover:text-white flex items-center justify-center transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.social.email}
                aria-label="Send direct email"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-850 text-zinc-400 hover:text-white flex items-center justify-center transition-all"
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
            <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-white transition-colors">
                  About Journey
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-zinc-400 hover:text-white transition-colors">
                  Projects Catalog
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-zinc-400 hover:text-white transition-colors">
                  Experience & Credentials
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-zinc-400 hover:text-white transition-colors">
                  Skills Matrix
                </Link>
              </li>
              <li>
                <Link href="/education" className="text-zinc-400 hover:text-white transition-colors">
                  Education & Academics
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors">
                  Contact Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Featured Case Studies (The 2 User Projects) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
              Project Case Studies
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/projects/facilityops-ai"
                  className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>FacilityOps AI Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" />
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/diabetes-predictor"
                  className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>SwasthyaAI Predictor</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Location & University */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
              Location & Campus
            </h4>
            <div className="space-y-3 text-xs text-zinc-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-zinc-200 font-semibold">Current Location</p>
                  <p>Jaipur, Rajasthan, India</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-zinc-200 font-semibold">Origin Roots</p>
                  <p>Muzaffarpur, Bihar, India</p>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1 border-t border-white/[0.08]">
                <GraduationCap className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <a
                    href={PERSONAL_INFO.university.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-200 hover:text-indigo-400 font-semibold flex items-center gap-1 transition-colors"
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
        <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {currentYear} Bipin Kumar. Designed & engineered for production recruiters.</p>
          <div className="flex items-center gap-4">
            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-200 transition-colors flex items-center gap-1"
            >
              <span>View Resume</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <Link href="/contact" className="text-zinc-400 hover:text-zinc-200 transition-colors">
              Contact Hub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
