import { Container } from "@/components/ui/Container";
import { ACCENT_CLASS } from "@/constants/accents";
import { cn } from "@/lib/cn";
import { padIndex } from "@/lib/format/pad-index";
import type { VentureChapterProps } from "@/types/components/group";
import { VentureEmblem } from "./VentureEmblem";
import { VentureLink } from "@/components/shared/venture-link";
import { VentureStats } from "./VentureStats";

export function VentureChapter({ venture, index, total }: VentureChapterProps) {
  const titleId = `venture-${venture.id}`;

  return (
    <article
      aria-labelledby={titleId}
      className={cn(
        "venture-chapter relative flex min-h-svh items-center border-t border-line py-24 lg:motion-safe:w-screen lg:motion-safe:shrink-0 lg:motion-safe:border-t-0 lg:motion-safe:border-l",
        ACCENT_CLASS[venture.accent],
      )}
    >
      <Container className="grid items-center gap-12 lg:grid-cols-12">
        <div className="grid gap-6 lg:col-span-7">
          <p className="font-mono text-xs tracking-eyebrow text-mist uppercase">
            Chapter {padIndex(index + 1)} / {padIndex(total)}
            <span aria-hidden="true"> · </span>
            <span className="text-(--accent)">{venture.sector}</span>
          </p>
          <h3
            id={titleId}
            className="font-display text-6xl leading-[0.95] font-medium sm:text-7xl xl:text-8xl"
          >
            {venture.name}
          </h3>
          <p className="max-w-xl text-xl text-ivory/90">{venture.summary}</p>
          <p className="max-w-xl text-mist">{venture.description.join(" ")}</p>
          <ul className="grid gap-2">
            {venture.highlights.map((highlight) => (
              <li key={highlight} className="flex items-baseline gap-3">
                <span
                  aria-hidden="true"
                  className="size-1.5 shrink-0 translate-y-[-0.15em] rounded-full bg-(--accent)"
                />
                {highlight}
              </li>
            ))}
          </ul>
          {venture.stats.length > 0 ? (
            <VentureStats stats={venture.stats} />
          ) : null}
          {venture.url ? (
            <VentureLink url={venture.url} name={venture.name} />
          ) : null}
        </div>
        <div className="flex justify-center lg:col-span-5">
          <VentureEmblem
            ventureId={venture.id}
            label={`${venture.name} emblem, drawn in particles`}
          />
        </div>
      </Container>
    </article>
  );
}
