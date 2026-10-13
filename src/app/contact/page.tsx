"use client";

import { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  MapPin,
  ExternalLink,
  Send,
  FileText,
  GraduationCap,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Header section */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
          <Mail className="w-3.5 h-3.5" />
          <span>Recruiter Contact Hub</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
          Let&apos;s Connect & <span className="gradient-text-primary">Collaborate</span>
        </h1>
        <p className="mt-4 text-base text-zinc-400 leading-relaxed font-normal">
          I am actively exploring roles in Data Science, AI/ML Engineering, and Autonomous Systems.
          Reach out directly via email or professional networks.
        </p>
      </div>

      <div className="space-y-6">
        {/* Primary Contact Card: Direct Email */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08] text-center">
          <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto mb-4">
            <Mail className="w-6 h-6" />
          </div>

          <h2 className="text-xl font-heading font-bold text-white mb-1">Direct Email Contact</h2>
          <p className="text-sm text-zinc-400 max-w-md mx-auto mb-5">
            The fastest channel for recruiters, technical screenings, and role inquiries.
          </p>

          <div className="max-w-md mx-auto p-3.5 rounded-xl bg-zinc-950/90 border border-zinc-800 flex items-center justify-between gap-3 mb-6">
            <span className="text-sm sm:text-base font-mono text-zinc-100 truncate font-semibold">
              {PERSONAL_INFO.email}
            </span>
            <button
              onClick={handleCopyEmail}
              type="button"
              className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-750 hover:border-zinc-600 text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0 active:scale-[0.95]"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={PERSONAL_INFO.social.email}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 shadow-sm transition-all active:scale-[0.98]"
            >
              <Send className="w-4 h-4 text-zinc-300" />
              <span>Launch Mail Client</span>
            </a>

            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-750 hover:border-zinc-600 transition-all active:scale-[0.98]"
            >
              <FileText className="w-4 h-4 text-zinc-300" />
              <span>View Resume (PDF)</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
            </a>
          </div>
        </div>

        {/* Secondary Grid: Professional Networks & Locations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* LinkedIn & GitHub */}
          <div className="glass-card rounded-2xl p-6 border border-white/[0.08] space-y-3">
            <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Professional Profiles
            </h3>

            <a
              href={PERSONAL_INFO.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-3">
                <LinkedinIcon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                <div>
                  <span className="text-sm font-semibold text-white block">LinkedIn</span>
                  <span className="text-xs text-zinc-400">linkedin.com/in/bipinkr</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
            </a>

            <a
              href={PERSONAL_INFO.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-3">
                <GithubIcon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                <div>
                  <span className="text-sm font-semibold text-white block">GitHub</span>
                  <span className="text-xs text-zinc-400">github.com/krbipin</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
            </a>
          </div>

          {/* Locations & Education */}
          <div className="glass-card rounded-2xl p-6 border border-white/[0.08] space-y-3.5">
            <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Location & Academic Base
            </h3>

            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
              <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold">Current Base:</strong>
                <span>Jaipur, Rajasthan, India</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
              <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold">Origin Roots:</strong>
                <span>Muzaffarpur, Bihar, India</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 pt-2 border-t border-white/[0.08]">
              <GraduationCap className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold">University:</strong>
                <span>Jagannath University, Jaipur (B.Tech CSE)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
