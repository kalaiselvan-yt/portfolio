import { SKILLS } from "../../../data/profile";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" n="02" title="Skills & Tech Stack">
      <div className="grid gap-5 sm:grid-cols-2">
        {SKILLS.map(({ group, items }) => (
          <div
            key={group}
            // If the last card would sit alone on a row, let it span the full width
            className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors duration-200 hover:border-zinc-700 sm:p-7 sm:[&:last-child:nth-child(odd)]:col-span-2"
          >
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
              {group}
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors duration-200 hover:border-amber-400/50 hover:text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
