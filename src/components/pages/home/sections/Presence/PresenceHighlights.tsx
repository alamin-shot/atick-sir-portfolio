import { padIndex } from "@/lib/format/pad-index";
import type { PresenceHighlightsProps } from "@/types/components/presence";

export function PresenceHighlights({ highlights }: PresenceHighlightsProps) {
  return (
    <ol className="grid gap-8 border-t border-line pt-8">
      {highlights.map((highlight, index) => (
        <li
          key={highlight.id}
          className="grid grid-cols-[3rem_1fr] items-baseline gap-y-2"
        >
          <span className="font-mono text-xs text-ember-soft">
            {padIndex(index + 1)}
          </span>
          <h3 className="font-display text-2xl">{highlight.title}</h3>
          <p className="col-start-2 max-w-md text-mist">{highlight.body}</p>
        </li>
      ))}
    </ol>
  );
}
