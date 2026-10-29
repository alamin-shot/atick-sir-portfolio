import { padIndex } from "@/lib/format/pad-index";
import type { CertificationPlaqueProps } from "@/types/components/trust";

// A monochrome plaque that warms to ember on hover.
export function CertificationPlaque({
  certification,
  index,
}: CertificationPlaqueProps) {
  return (
    <li className="group grid min-h-44 content-between gap-6 rounded-sm border border-line bg-panel p-5 transition-colors duration-500 hover:border-ember/60 sm:min-h-52 sm:p-6">
      <span
        aria-hidden="true"
        className="grid size-10 place-items-center rounded-full border border-line font-mono text-[0.65rem] text-mist transition-colors duration-500 group-hover:border-ember group-hover:text-ember-soft"
      >
        {padIndex(index + 1)}
      </span>
      <div className="grid gap-2">
        <p className="font-display text-3xl font-medium transition-colors duration-500 group-hover:text-ember-soft sm:text-4xl">
          {certification.shortName}
        </p>
        <p className="text-sm leading-snug text-mist">{certification.name}</p>
      </div>
    </li>
  );
}
