import Image from "next/image";
import { Parallax } from "@/components/shared/parallax";
import type { ChairmanPortraitProps } from "@/types/components/chairman";

export function ChairmanPortrait({ portrait, caption }: ChairmanPortraitProps) {
  return (
    <figure className="grid gap-4 lg:sticky lg:top-24">
      <div className="portrait-corners relative">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-line bg-panel">
          <Parallax className="absolute inset-x-0 -inset-y-[10%]">
            <Image
              src={portrait.src}
              alt={portrait.alt}
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover"
            />
          </Parallax>
        </div>
      </div>
      <figcaption className="font-mono text-[0.7rem] tracking-eyebrow text-mist uppercase">
        {caption}
      </figcaption>
    </figure>
  );
}
