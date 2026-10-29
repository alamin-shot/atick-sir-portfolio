import { cn } from "@/lib/cn";
import type { EyebrowProps } from "@/types/components/section";

export function Eyebrow({ index, children, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-mono text-xs tracking-eyebrow text-ember-soft uppercase",
        className,
      )}
    >
      {index ? <span className="text-mist">{index}</span> : null}
      <span aria-hidden="true" className="h-px w-8 bg-current" />
      {children}
    </p>
  );
}
