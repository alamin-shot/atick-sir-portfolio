import type { Stat } from "@/types/stat";

export type CounterProps = {
  value: number;
  suffix: string;
};

export type NumberFigureProps = {
  stat: Stat;
};
