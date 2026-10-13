"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText, ExternalLink } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Skills", href: "/skills" },
    { name: "Education", href: "/education" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#09090b]/85 border-b border-white/[0.08] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group font-heading font-extrabold tracking-tight text-lg sm:text-xl text-white transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 p-[1px] flex items-center justify-center shadow-md group-hover:border-zinc-650 transition-colors">
              <div className="w-full h-full bg-[#09090b] rounded-[7px] flex items-center justify-center">
                <span className="font-extrabold text-xs text-zinc-200">
                  BK
                </span>
              </div>
            </div>
            <span className="tracking-tight text-white">
              Bipin Kumar
              <span className="text-zinc-400">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-lg text-sm transition-all duration-150 ${
                    active
                      ? "text-white bg-zinc-800/90 border border-zinc-700/80 font-semibold"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900/60 font-medium"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Button: View Resume */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-750 hover:border-zinc-600 shadow-sm transition-all active:scale-[0.98]"
            >
              <FileText className="w-4 h-4 text-zinc-300" />
              <span>View Resume</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-750"
            >
              <FileText className="w-3.5 h-3.5 text-zinc-300" />
              <span>Resume</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#0c0c10] border-b border-zinc-800 px-4 pt-2 pb-6 space-y-1">
          <div className="grid grid-cols-2 gap-1 py-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? "text-white bg-zinc-800 border border-zinc-700/80 font-semibold"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="pt-2 border-t border-zinc-800">
            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-750 hover:border-zinc-600 shadow-sm transition-all active:scale-[0.98]"
            >
              <FileText className="w-4 h-4 text-zinc-300" />
              <span>Open Resume (Native PDF Viewer)</span>
              <ExternalLink className="w-4 h-4 text-zinc-400" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
