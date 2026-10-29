import { ChairmanSection } from "@/components/pages/home/sections/Chairman";
import { ConnectSection } from "@/components/pages/home/sections/Connect";
import { GroupSection } from "@/components/pages/home/sections/Group";
import { HeroSection } from "@/components/pages/home/sections/Hero";
import { JourneySection } from "@/components/pages/home/sections/Journey";
import { LetterSection } from "@/components/pages/home/sections/Letter";
import { NumbersSection } from "@/components/pages/home/sections/Numbers";
import { PresenceSection } from "@/components/pages/home/sections/Presence";
import { TrustSection } from "@/components/pages/home/sections/Trust";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ChairmanSection />
      <GroupSection />
      <JourneySection />
      <NumbersSection />
      <TrustSection />
      <PresenceSection />
      <LetterSection />
      <ConnectSection />
    </>
  );
}
