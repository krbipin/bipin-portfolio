import { ExternalLink, Award, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { Experience } from "@/data/portfolio-data";

export function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
              {exp.type}
            </span>
            {exp.credentialId && (
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                ID: {exp.credentialId}
              </span>
            )}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {exp.role}
          </h3>
          <p className="text-base font-semibold text-slate-200 mt-0.5">
            {exp.organization}
          </p>
          {exp.partnerInfo && (
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              {exp.partnerInfo}
            </p>
          )}
        </div>

        {/* Period, Location & Certificate Link */}
        <div className="flex flex-col md:items-end gap-2.5 shrink-0">
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {exp.period}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              {exp.location}
            </span>
          </div>

          <a
            href={exp.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-indigo-300 bg-indigo-500/10 border border-indigo-500/30 hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all shadow-sm"
          >
            <Award className="w-3.5 h-3.5 text-indigo-400" />
            <span>View Verified Credential</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>
        </div>
      </div>

      <p className="text-sm text-slate-300 leading-relaxed mb-5 border-l-2 border-indigo-500/50 pl-3.5 my-3">
        {exp.summary}
      </p>

      {/* Bullet highlights */}
      <div className="space-y-2 mb-6">
        {exp.highlights.map((highlight, idx) => (
          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
            <span className="leading-relaxed">{highlight}</span>
          </div>
        ))}
      </div>

      {/* Skills learned */}
      <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-1.5">
        <span className="text-xs font-semibold text-slate-400 mr-1.5">Competencies:</span>
        {exp.skills.map((skill, idx) => (
          <span
            key={idx}
            className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white/[0.03] text-slate-300 border border-white/[0.06]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
