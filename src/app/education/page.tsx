import { GraduationCap, ExternalLink, Calendar, MapPin, BookOpen, Award } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export const metadata = {
  title: "Education | Jagannath University, Jaipur",
  description:
    "Academic background of Bipin Kumar pursuing B.Tech in Computer Science & Engineering at Jagannath University, Jaipur (2023-2027).",
};

export default function EducationPage() {
  const { university } = PERSONAL_INFO;

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header section */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Academic Foundation</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Education & <span className="gradient-text-primary">Scholastic Background</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
          Undergraduate studies focusing on Computer Science, applied mathematical foundations,
          statistical data modeling, and algorithmic computation.
        </p>
      </div>

      {/* Main Education Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/[0.08] relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                Bachelor of Technology (B.Tech)
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 tracking-tight">
                {university.name}
              </h2>
              <p className="text-base sm:text-lg font-semibold text-indigo-300 mt-1">
                {university.course}
              </p>
            </div>

            <div className="flex flex-col md:items-end gap-2 text-xs text-slate-400 shrink-0">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {university.duration}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                Jaipur, Rajasthan, India
              </span>
              <a
                href={university.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-indigo-300 hover:text-indigo-200 transition-colors"
              >
                <span>Official University Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Academic Standing */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-8">
            <Award className="w-4 h-4 text-indigo-400" />
            <span className="text-xs sm:text-sm text-slate-300">
              Cumulative Grade Point Average (CGPA):{" "}
              <strong className="text-white font-bold">{university.cgpa}</strong>
            </span>
          </div>

          {/* Relevant Coursework */}
          <div className="pt-6 border-t border-white/[0.06]">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-400" />
              <span>Core Academic Coursework</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {university.coursework.map((course, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-2.5 text-xs sm:text-sm text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
