import { venturesMock } from "@/mocks/ventures";
import type { Venture } from "@/types/venture";

export async function getVentures(): Promise<Venture[]> {
  return venturesMock;
}
