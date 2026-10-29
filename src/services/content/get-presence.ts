import { presenceMock } from "@/mocks/presence";
import type { Presence } from "@/types/presence";

export async function getPresence(): Promise<Presence> {
  return presenceMock;
}
