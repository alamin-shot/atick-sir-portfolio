import type { ChairmanPhilosophyProps } from "@/types/components/chairman";

const NUMERALS = ["I", "II", "III", "IV", "V"] as const;

export function ChairmanPhilosophy({ tenets }: ChairmanPhilosophyProps) {
  return (
    <div className="grid gap-5">
      <h3 className="font-mono text-xs tracking-eyebrow text-mist uppercase">
        What he holds to
      </h3>
      <ol className="grid border-t border-line">
        {tenets.map((tenet, index) => (
          <li
            key={tenet}
            className="grid grid-cols-[3rem_1fr] items-baseline border-b border-line py-5"
          >
            <span className="font-display text-ember italic">
              {NUMERALS[index] ?? index + 1}
            </span>
            <span className="font-display text-2xl sm:text-3xl">{tenet}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
