import { SectionHeader } from "@/components/shared/section-header";
import { Container } from "@/components/ui/Container";
import { SECTIONS } from "@/constants/sections";
import { getMilestones } from "@/services/content";
import { JourneySpine } from "./JourneySpine";
import { MilestoneItem } from "./MilestoneItem";

export async function JourneySection() {
  const milestones = await getMilestones();

  return (
    <section
      id={SECTIONS.journey}
      aria-labelledby="journey-title"
      className="relative border-t border-line py-28 sm:py-40"
    >
      <Container className="grid gap-16 lg:grid-cols-12 lg:gap-20">
        <SectionHeader
          section={SECTIONS.journey}
          titleId="journey-title"
          className="self-start lg:sticky lg:top-28 lg:col-span-5"
        />
        <div className="lg:col-span-7 lg:pt-4">
          <JourneySpine>
            <ol>
              {milestones.map((milestone, index) => (
                <MilestoneItem
                  key={milestone.id}
                  milestone={milestone}
                  index={index}
                />
              ))}
            </ol>
          </JourneySpine>
        </div>
      </Container>
    </section>
  );
}
