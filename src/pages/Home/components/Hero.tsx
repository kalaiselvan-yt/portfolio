import { ArrowUpRight, Download, Mail, MapPin, Phone } from "lucide-react";
import { PROFILE } from "../../../data/profile";
import { ProfilePhoto } from "./ProfilePhoto";

const contactBtn =
  "inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-zinc-800 bg-zinc-900/70 px-5 py-3 text-sm font-medium text-zinc-200 transition-colors duration-200 hover:border-amber-400/50 hover:bg-zinc-800 hover:text-white sm:w-auto";

export function Hero() {
  return (
    <header
      id="profile"
      className="relative isolate overflow-hidden bg-zinc-950 px-5 pb-16 pt-32 sm:px-10 sm:pb-24 sm:pt-40"
    >
      {/* Background decoration (isolate keeps these behind the content, above the bg) */}
      <div aria-hidden="true" className="hero-glow pointer-events-none absolute inset-0 -z-10" />
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto w-full max-w-5xl">
        {/* Status row */}
        <div className="flex items-center justify-between gap-4 border-b border-zinc-800 pb-4 text-[11px] font-medium uppercase tracking-widest text-zinc-400 sm:text-xs">
          <span className="flex items-center gap-2.5">
            <span className="relative flex size-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
            </span>
            Available for new opportunities
          </span>
          <span className="hidden font-mono text-zinc-500 sm:inline">2026 Edition</span>
        </div>

        {/* Intro: text + photo */}
        <div className="mt-12 grid items-start gap-10 sm:mt-16 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-14">
          <div className="min-w-0">
            <ProfilePhoto className="mb-8 lg:hidden" />

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
              {PROFILE.role}
            </p>

            <h1 className="mt-5 text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-7xl">
              {PROFILE.name}
            </h1>

            <div className="mt-10 grid gap-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] sm:gap-10">
              <div className="border-l-2 border-amber-400/80 pl-4 sm:self-start">
                <span className="text-xs uppercase tracking-widest text-zinc-500">Location</span>
                <p className="mt-1.5 flex items-start gap-2 text-base font-medium text-zinc-200">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-amber-400" aria-hidden="true" />
                  {PROFILE.location}
                </p>
              </div>

              <p className="text-lg font-light leading-relaxed text-zinc-300">{PROFILE.summary}</p>
            </div>
          </div>

          {/* Desktop photo */}
          <ProfilePhoto className="hidden lg:block" />
        </div>

        {/* Actions */}
        <div className="mt-12 flex flex-col gap-3 border-t border-zinc-800 pt-8 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={PROFILE.resume}
            download={PROFILE.resumeFileName}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors duration-200 hover:bg-amber-300 sm:w-auto"
          >
            <Download className="size-4" aria-hidden="true" />
            Download resume
          </a>

          <a href="#projects" className={contactBtn}>
            View projects
            <ArrowUpRight className="size-4 shrink-0 text-amber-400" aria-hidden="true" />
          </a>

          <a href={`mailto:${PROFILE.email}`} className={contactBtn}>
            <Mail className="size-4 shrink-0 text-amber-400" aria-hidden="true" />
            <span className="break-all">{PROFILE.email}</span>
          </a>

          <a href={`tel:${PROFILE.phoneDial}`} className={contactBtn}>
            <Phone className="size-4 shrink-0 text-amber-400" aria-hidden="true" />
            {PROFILE.phone}
          </a>

          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={contactBtn}
          >
            LinkedIn
            <ArrowUpRight className="size-4 shrink-0 text-amber-400" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
