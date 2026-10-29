import { RevealText } from "@/components/shared/reveal-text";
import type { ChairmanQuoteProps } from "@/types/components/chairman";

export function ChairmanQuote({ quote, author }: ChairmanQuoteProps) {
  return (
    <figure className="relative mx-auto max-w-5xl border-t border-line pt-16">
      <span
        aria-hidden="true"
        className="absolute -top-10 left-0 font-display text-9xl leading-none text-ember"
      >
        &ldquo;
      </span>
      <RevealText>
        <blockquote className="font-display text-4xl leading-[1.08] italic sm:text-6xl lg:text-7xl">
          {quote}
        </blockquote>
      </RevealText>
      <figcaption className="mt-10 flex items-center gap-3 font-mono text-xs tracking-eyebrow text-mist uppercase">
        <span aria-hidden="true" className="h-px w-8 bg-ember" />
        {author}
      </figcaption>
    </figure>
  );
}
