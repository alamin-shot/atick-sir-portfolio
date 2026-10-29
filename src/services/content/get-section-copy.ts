import { sectionCopyMock } from "@/mocks/sections";
import type { CopySectionId, SectionCopy } from "@/types/section";

export async function getSectionCopy(id: CopySectionId): Promise<SectionCopy> {
  return sectionCopyMock[id];
}
