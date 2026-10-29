import { cn } from "@/lib/cn";
import type { PartnerMarqueeProps } from "@/types/components/trust";

const COPIES = [0, 1] as const;

// Pure CSS marquee; the second copy exists only to close the loop.
export function PartnerMarquee({ partners }: PartnerMarqueeProps) {
  return (
    <div className="partner-marquee overflow-hidden border-y border-line py-10">
      <div className="partner-marquee-track flex w-max">
        {COPIES.map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1 || undefined}
            className={cn(
              "partner-marquee-list flex shrink-0 items-center",
              copy === 1 && "partner-marquee-copy",
            )}
          >
            {partners.map((partner) => (
              <li
                key={partner.id}
                className="flex items-center gap-10 pr-10 font-display text-3xl text-ivory/80 italic sm:text-5xl"
              >
                {partner.name}
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-ember"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
