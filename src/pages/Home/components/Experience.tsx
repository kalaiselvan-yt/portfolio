import { EXPERIENCE } from "../../../data/profile";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" n="03" title="Experience" alt>
      <div className="space-y-5">
        {EXPERIENCE.map((job) => (
          <article
            key={`${job.company}-${job.role}`}
            className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition-colors duration-200 hover:border-zinc-700 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-10">
              {/* Meta column */}
              <div className="flex items-center justify-between gap-3 sm:flex-col sm:items-start sm:justify-start sm:gap-3">
                <span className="font-mono text-xs font-semibold tracking-widest text-amber-400">
                  {job.rev}
                </span>

                {job.current && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
                    <span
                      aria-hidden="true"
                      className="size-1.5 animate-pulse rounded-full bg-emerald-400"
                    />
                    Current
                  </span>
                )}
              </div>

              {/* Content column */}
              <div className="min-w-0">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {job.role}
                  </h3>
                  <span className="font-mono text-xs text-zinc-500">{job.period}</span>
                </div>

                <p className="mt-1 text-sm font-semibold text-zinc-400">{job.company}</p>

                <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-zinc-400">
                  {job.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 size-1.5 shrink-0 rounded-full bg-amber-400"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
