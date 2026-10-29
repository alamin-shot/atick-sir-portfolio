import { letterMock } from "@/mocks/letter";
import type { ChairmanLetter } from "@/types/letter";

export async function getLetter(): Promise<ChairmanLetter> {
  return letterMock;
}
