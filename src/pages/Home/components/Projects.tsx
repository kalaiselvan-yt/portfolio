import { PROJECTS } from "../../../data/profile";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projects" n="04" title="Featured Projects">
      <div className="space-y-5">
        {PROJECTS.map((project) => (
          <article
            key={project.code}
            className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors duration-200 hover:border-amber-400/40 sm:p-8"
          >
            <span className="font-mono text-xs font-semibold tracking-widest text-amber-400">
              {project.code}
            </span>

            <h3 className="mt-2 text-2xl font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-amber-300 sm:text-3xl">
              {project.name}
            </h3>

            <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-zinc-400">
              {project.points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 size-1.5 shrink-0 rounded-full bg-amber-400"
                  />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-zinc-800 pt-5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1 font-mono text-[11px] text-zinc-400"
                >
                  #{tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
