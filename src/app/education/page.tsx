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
        <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
          Undergraduate studies focusing on Computer Science, applied mathematical foundations,
          statistical data modeling, and algorithmic computation.
        </p>
      </div>

      {/* Main Education Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/[0.08] relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-850 text-zinc-300 border border-zinc-700/60">
                Bachelor of Technology (B.Tech)
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 tracking-tight">
                {university.name}
              </h2>
              <p className="text-base sm:text-lg font-semibold text-zinc-200 mt-1">
                {university.course}
              </p>
            </div>

            <div className="flex flex-col md:items-end gap-2 text-xs text-zinc-400 shrink-0">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                {university.duration}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                Jaipur, Rajasthan, India
              </span>
              <a
                href={university.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-750 hover:border-zinc-600 text-xs font-semibold text-zinc-200 hover:text-white transition-all shadow-sm active:scale-[0.98]"
              >
                <span>Official University Portal</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>
            </div>
          </div>

          {/* Academic Standing */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/60 border border-zinc-800 mb-8">
            <Award className="w-4 h-4 text-zinc-400" />
            <span className="text-xs sm:text-sm text-zinc-300">
              Cumulative Grade Point Average (CGPA):{" "}
              <strong className="text-white font-bold">{university.cgpa}</strong>
            </span>
          </div>

          {/* Relevant Coursework */}
          <div className="pt-6 border-t border-zinc-800">
            <h3 className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-zinc-400" />
              <span>Core Academic Coursework</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {university.coursework.map((course, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800 flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
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
