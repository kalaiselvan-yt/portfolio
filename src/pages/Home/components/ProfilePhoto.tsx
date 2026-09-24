import { useState } from "react";
import { cn } from "../../../app/lib/utils";
import { PROFILE } from "../../../data/profile";

const initials = PROFILE.name
  .split(" ")
  .map((part) => part[0])
  .join("");

/**
 * Round on mobile, portrait card on desktop.
 * If /public/profile.jpg is missing, an initials badge is shown instead,
 * so the layout never breaks.
 */
export function ProfilePhoto({ className }: { className?: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden border border-zinc-700 bg-zinc-900 shadow-2xl shadow-black/50 ring-4 ring-amber-400/20",
        "size-28 rounded-full sm:size-36 lg:size-auto lg:aspect-[4/5] lg:w-full lg:rounded-3xl",
        className,
      )}
    >
      {failed ? (
        <div className="grid size-full place-items-center bg-linear-to-br from-zinc-800 to-zinc-900 font-serif text-4xl text-amber-400 lg:text-7xl">
          {initials}
        </div>
      ) : (
        <img
          src={PROFILE.photo}
          alt={`Portrait of ${PROFILE.name}`}
          width={560}
          height={700}
          onError={() => setFailed(true)}
          className="size-full object-cover object-top"
        />
      )}
    </div>
  );
}
