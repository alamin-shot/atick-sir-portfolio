import { RevealText } from "@/components/shared/reveal-text";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";
import { getSectionCopy } from "@/services/content";
import type { SectionHeaderProps } from "@/types/components/section";

export async function SectionHeader({
  section,
  titleId,
  className,
}: SectionHeaderProps) {
  const { index, eyebrow, title, lede } = await getSectionCopy(section);

  return (
    <header className={cn("grid max-w-3xl gap-6", className)}>
      <Eyebrow index={index}>{eyebrow}</Eyebrow>
      <RevealText>
        <h2
          id={titleId}
          className="font-display text-4xl leading-[1.02] font-medium sm:text-6xl"
        >
          {title}
        </h2>
      </RevealText>
      <p className="max-w-xl text-lg text-mist">{lede}</p>
    </header>
  );
}
