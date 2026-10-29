import { numbersMock } from "@/mocks/numbers";
import type { Stat } from "@/types/stat";

export async function getNumbers(): Promise<Stat[]> {
  return numbersMock;
}
