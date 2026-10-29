import { milestonesMock } from "@/mocks/milestones";
import type { Milestone } from "@/types/milestone";

export async function getMilestones(): Promise<Milestone[]> {
  return milestonesMock;
}
