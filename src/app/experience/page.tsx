import { Briefcase, Award, CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolio-data";
import { ExperienceCard } from "@/components/ExperienceCard";

export const metadata = {
  title: "Experience & Certifications | Professional Journey",
  description:
    "Explore Bipin Kumar's industry internships, AICTE and IBM SkillsBuild credentials, and data science training programs with verifiable certificates.",
};

export default function ExperiencePage() {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header section */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Professional Experience & Certifications</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Industry Internships & <span className="gradient-text-primary">Verified Credentials</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
          Hands-on technical internships backed by national AICTE guidelines and IBM SkillsBuild,
          coupled with intensive data science training. Every experience includes verifiable credential links.
        </p>
      </div>

      {/* Trust & Verification Badge */}
      <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800 flex items-start sm:items-center gap-3.5 text-xs sm:text-sm text-zinc-300">
        <ShieldCheck className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5 sm:mt-0" />
        <p>
          <strong className="text-white">Recruiter Verification Guarantee:</strong> All internship
          IDs and completion certificates are authenticated directly through official portals (AICTE National Internship Portal, IBM SkillsBuild, and Google Drive credential files).
        </p>
      </div>

      {/* Experience list */}
      <div className="space-y-8">
        {EXPERIENCES.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>
    </div>
  );
}
