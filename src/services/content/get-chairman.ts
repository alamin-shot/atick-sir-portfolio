import { chairmanMock } from "@/mocks/chairman";
import type { Chairman } from "@/types/chairman";

export async function getChairman(): Promise<Chairman> {
  return chairmanMock;
}
