import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../../../app/lib/utils";

const SHEETS = [
  { n: "01", id: "profile", label: "Profile", short: "About" },
  { n: "02", id: "skills", label: "Skills", short: "Skills" },
  { n: "03", id: "experience", label: "Experience", short: "Work" },
  { n: "04", id: "projects", label: "Projects", short: "Projects" },
  { n: "05", id: "contact", label: "Contact", short: "Contact" },
] as const;

export function SheetIndex() {
  const [active, setActive] = useState<string>(SHEETS[0].id);

  useEffect(() => {
    const onScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8;

      if (atBottom) {
        setActive(SHEETS[SHEETS.length - 1].id);
        return;
      }

      let current: string = SHEETS[0].id;
      for (const { id } of SHEETS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 160) current = id;
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    // Fixed (not sticky) so it takes NO space in the page flow —
    // this is what removes the empty band above the hero.
    <div className="pointer-events-none fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-4">
      <nav
        aria-label="Main navigation"
        className="pointer-events-auto mx-auto flex max-w-4xl items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 p-1.5 shadow-lg shadow-black/40 backdrop-blur-xl"
      >
        <a
          href="#profile"
          aria-label="Back to top"
          className="hidden size-9 shrink-0 items-center justify-center rounded-full bg-amber-400 font-serif text-sm font-semibold text-zinc-950 sm:flex"
        >
          KS
        </a>

        <ul className="no-scrollbar flex min-w-0 flex-1 items-center justify-between gap-0.5 overflow-x-auto sm:justify-center">
          {SHEETS.map(({ n, id, label, short }) => {
            const isActive = active === id;
            return (
              <li key={id} className="shrink-0">
                <a
                  href={`#${id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "flex items-center gap-1.5 rounded-full px-2.5 py-2 text-[10px] font-semibold uppercase tracking-wide transition-colors duration-200 sm:px-4 sm:text-xs sm:tracking-wider",
                    isActive
                      ? "bg-white text-zinc-950"
                      : "text-zinc-400 hover:bg-white/5 hover:text-white",
                  )}
                >
                  <span
                    className={cn(
                      "hidden font-mono text-[10px] lg:inline",
                      isActive ? "text-zinc-500" : "text-zinc-600",
                    )}
                  >
                    {n}
                  </span>
                  <span className="sm:hidden">{short}</span>
                  <span className="hidden sm:inline">{label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="hidden shrink-0 items-center gap-1.5 rounded-full bg-amber-400 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-zinc-950 transition-colors duration-200 hover:bg-amber-300 lg:flex"
        >
          Let&apos;s talk
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </nav>
    </div>
  );
}
