"use client";

import { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  MapPin,
  ExternalLink,
  Send,
  Sparkles,
  FileText,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending or redirect to mailto
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || "Inquiry from Portfolio"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header section */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">
          <Mail className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Let&apos;s Connect & <span className="gradient-text-primary">Collaborate</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          Whether you have an open position in Data Science, AI/ML, or an autonomous system project,
          I am eager to contribute. Reach out directly via email or social links.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Direct Channels */}
        <div className="lg:col-span-5 space-y-6">
          {/* Email Quick Action Card */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/[0.08]">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Mail className="w-5 h-5 text-indigo-400" />
              <span>Direct Email</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-4">
              Best channel for recruiters, interview invitations, and project inquiries.
            </p>

            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between gap-2 mb-4">
              <span className="text-xs sm:text-sm font-mono text-cyan-300 truncate">
                {PERSONAL_INFO.email}
              </span>
              <button
                onClick={handleCopyEmail}
                type="button"
                className="p-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white transition-colors shrink-0"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={PERSONAL_INFO.social.email}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/20 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>

              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>View Resume</span>
              </a>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/[0.08]">
            <h3 className="text-lg font-bold text-white mb-4">Professional Networks</h3>
            <div className="space-y-3">
              <a
                href={PERSONAL_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-cyan-500/30 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-5 h-5 text-cyan-400" />
                  <div>
                    <span className="text-sm font-semibold text-white block">LinkedIn</span>
                    <span className="text-xs text-slate-400">linkedin.com/in/bipinkr</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </a>

              <a
                href={PERSONAL_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-indigo-500/30 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-5 h-5 text-indigo-400" />
                  <div>
                    <span className="text-sm font-semibold text-white block">GitHub</span>
                    <span className="text-xs text-slate-400">github.com/krbipin</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Location Info */}
          <div className="glass-card rounded-3xl p-6 border border-white/[0.08] text-xs text-slate-400 space-y-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>
                <strong className="text-white">Current:</strong> Jaipur, Rajasthan, India
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-indigo-400" />
              <span>
                <strong className="text-white">Origin:</strong> Muzaffarpur, Bihar, India
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/[0.08]">
            <h3 className="text-xl font-bold text-white mb-1">Send a Message</h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Fill out this form and it will prepare a pre-filled direct email dispatch.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                <Check className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <h4 className="text-lg font-bold text-white">Opening Email Client...</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Thank you! If your email client did not launch automatically, feel free to send
                  directly to {PERSONAL_INFO.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-indigo-500 focus:outline-none text-sm text-white placeholder-slate-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. recruiter@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-indigo-500 focus:outline-none text-sm text-white placeholder-slate-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Subject / Role Title
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Opportunity: Data Science & AI/ML Engineer"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-indigo-500 focus:outline-none text-sm text-white placeholder-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Provide details about the role, team, or project inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-indigo-500 focus:outline-none text-sm text-white placeholder-slate-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message Directly</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
