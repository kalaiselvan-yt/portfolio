import type { ReactNode } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { EDUCATION, PROFILE } from "../../../data/profile";

function Cell({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition-colors duration-200 hover:border-zinc-700">
      <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
        {label}
      </p>
      <div className="mt-2.5 break-words text-sm font-medium text-zinc-300">{children}</div>
    </div>
  );
}

const linkCls = "transition-colors duration-200 hover:text-amber-300";

export function TitleBlock() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="border-t border-zinc-800/70 bg-zinc-950 px-5 py-16 sm:px-10 sm:py-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        {/* Header */}
        <div className="border-b border-zinc-800 pb-12">
          <div className="flex items-center justify-between gap-4 text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
            <span>05 / Contact &amp; Summary</span>
            <span className="font-mono">{year}</span>
          </div>

          <h2 className="mt-8 font-serif text-5xl font-normal leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-8xl">
            Let&apos;s build
            <br />
            <span className="text-amber-400">something great.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Open to full-stack engineering roles and high-impact freelance builds — modern web
            applications, mobile solutions, and scalable backend architectures.
          </p>

          <a
            href={`mailto:${PROFILE.email}`}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors duration-200 hover:bg-amber-300 sm:w-auto"
          >
            <Mail className="size-4" aria-hidden="true" />
            Send an email
          </a>
        </div>

        {/* Details — 6 cells, so the grid is always complete at 1, 2 or 3 columns */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Cell label="Name">
            <span className="text-base font-semibold text-white">{PROFILE.name}</span>
          </Cell>

          <Cell label="Role">{PROFILE.role}</Cell>

          <Cell label="Education">
            <div className="space-y-1">
              <div className="text-white">{EDUCATION.degree}</div>
              <div className="text-xs leading-relaxed text-zinc-500">
                {EDUCATION.school} ({EDUCATION.year}) —{" "}
                <span className="text-zinc-300">{EDUCATION.grade}</span>
              </div>
            </div>
          </Cell>

          <Cell label="Email">
            <a href={`mailto:${PROFILE.email}`} className={linkCls}>
              {PROFILE.email}
            </a>
          </Cell>

          <Cell label="Phone">
            <a href={`tel:${PROFILE.phoneDial}`} className={linkCls}>
              {PROFILE.phone}
            </a>
          </Cell>

          <Cell label="LinkedIn">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 ${linkCls}`}
            >
              /in/kalaiselvans
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          </Cell>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-3 border-t border-zinc-800 pt-8 text-xs tracking-wider text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {PROFILE.name}. All rights reserved.
          </p>

          <p className="flex items-center gap-2">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-emerald-500" />
            Designed &amp; built with modern web development.
          </p>
        </div>
      </div>
    </footer>
  );
}
