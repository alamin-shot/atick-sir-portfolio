import { formatNumber } from "@/lib/format/format-number";
import type { VentureStatsProps } from "@/types/components/group";

export function VentureStats({ stats }: VentureStatsProps) {
  return (
    <dl className="grid grid-cols-3 gap-6 border-t border-line pt-6">
      {stats.map((stat) => (
        <div key={stat.id} className="grid gap-1">
          <dt className="order-2 font-mono text-[0.7rem] tracking-eyebrow text-mist uppercase">
            {stat.label}
          </dt>
          <dd className="order-1 font-display text-3xl text-(--accent) sm:text-4xl">
            {formatNumber(stat.value)}
            {stat.suffix}
          </dd>
        </div>
      ))}
    </dl>
  );
}
