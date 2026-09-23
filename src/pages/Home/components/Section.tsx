import type { ReactNode } from "react";
import { cn } from "../../../app/lib/utils";

interface SectionProps {
  id: string;
  n: string;
  title: string;
  /** Slightly lighter band so neighbouring sections read as separate blocks */
  alt?: boolean;
  children: ReactNode;
}

/**
 * Shared section shell. Every section gets the same padding, width and
 * heading, so spacing is controlled from this one place.
 */
export function Section({ id, n, title, alt = false, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn(
        "border-t border-zinc-800/70 px-5 py-16 sm:px-10 sm:py-24",
        alt ? "bg-zinc-900/40" : "bg-zinc-950",
      )}
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex items-end justify-between gap-4 border-b border-zinc-800 pb-5">
          <h2
            id={`${id}-heading`}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            {title}
          </h2>
          <span className="shrink-0 font-mono text-sm font-medium tracking-widest text-amber-400">
            // {n}
          </span>
        </div>

        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
