import { padIndex } from "@/lib/format/pad-index";
import type { MilestoneItemProps } from "@/types/components/journey";

export function MilestoneItem({ milestone, index }: MilestoneItemProps) {
  return (
    <li data-milestone className="relative grid gap-3 pb-16 pl-12 last:pb-0">
      <span
        aria-hidden="true"
        className="journey-node absolute top-1.5 left-0 size-[0.9375rem] rounded-full border border-line bg-obsidian"
      />
      <p className="journey-phase font-mono text-xs tracking-eyebrow text-mist uppercase transition-colors duration-700">
        Phase {padIndex(index + 1)}
      </p>
      <h3 className="font-display text-3xl leading-tight sm:text-4xl">
        {milestone.title}
      </h3>
      <p className="max-w-lg text-lg leading-relaxed text-mist">
        {milestone.body}
      </p>
    </li>
  );
}
