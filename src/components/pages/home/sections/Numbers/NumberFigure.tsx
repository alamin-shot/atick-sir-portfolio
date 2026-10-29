import { formatNumber } from "@/lib/format/format-number";
import type { NumberFigureProps } from "@/types/components/numbers";
import { Counter } from "./Counter";

export function NumberFigure({ stat }: NumberFigureProps) {
  return (
    <div className="grid content-start gap-4 border-t border-line pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
      <dt className="order-2 font-mono text-xs tracking-eyebrow text-mist uppercase">
        {stat.label}
      </dt>
      <dd className="order-1 font-display text-6xl leading-none font-medium sm:text-7xl lg:text-6xl xl:text-7xl">
        <span className="sr-only">
          {formatNumber(stat.value)}
          {stat.suffix}
        </span>
        <Counter value={stat.value} suffix={stat.suffix} />
      </dd>
    </div>
  );
}
