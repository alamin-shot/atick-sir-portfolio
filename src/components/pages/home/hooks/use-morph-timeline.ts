import { HERO_TIMELINE } from "@/constants/hero-config";
import { HERO_STAGES } from "@/constants/hero-stages";
import { gsap, useGSAP } from "@/lib/gsap/register";
import { useAppDispatch } from "@/store/hooks";
import { heroStageChanged } from "@/store/slices/ui-slice";
import type { ParticleUniforms } from "@/types/hero";

const STAGE_COUNT = HERO_STAGES.length;

// Gathers the dust once, then loops through every venture shape and the
// Chairman forever. uProgress climbs 0 → 5; the shader wraps 5 back to 0.
export function useMorphTimeline(uniforms: ParticleUniforms) {
  const dispatch = useAppDispatch();

  useGSAP(() => {
    const { gather, morph, hold, portraitHold } = HERO_TIMELINE;
    const loop = gsap.timeline({ repeat: -1, paused: true });

    for (let step = 1; step <= STAGE_COUNT; step++) {
      const leavesPortrait = step === STAGE_COUNT;
      loop.to(
        uniforms.uProgress,
        {
          value: step,
          duration: morph,
          ease: "power3.inOut",
          onStart: () => {
            dispatch(heroStageChanged(step % STAGE_COUNT));
          },
        },
        `+=${leavesPortrait ? portraitHold : hold}`,
      );
    }

    dispatch(heroStageChanged(0));
    gsap
      .timeline()
      .fromTo(
        uniforms.uIntro,
        { value: 0 },
        { value: 1, duration: gather, ease: "expo.out" },
      )
      .add(() => {
        loop.play();
      });
  }, [uniforms, dispatch]);
}
