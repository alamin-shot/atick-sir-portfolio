import { SECTIONS } from "@/constants/sections";
import { ScrollTrigger, useGSAP } from "@/lib/gsap/register";
import type { ParticleUniforms } from "@/types/hero";

// As the hero scrolls away, the portrait breaks back into dust.
export function useScrollDisperse(uniforms: ParticleUniforms) {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: `#${SECTIONS.hero}`,
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        uniforms.uDisperse.value = self.progress;
      },
    });
  }, [uniforms]);
}
