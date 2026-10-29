import { getChairman } from "@/services/content";

// Concept C: the low-power and reduced-motion hero. Pure CSS, no JavaScript.
// Draws his surname until the CEO's real signature is supplied as an SVG path.
export async function HeroSignature() {
  const { name } = await getChairman();

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 640 240"
      className="pointer-events-none absolute top-[10%] right-[-6%] w-[min(92vw,680px)]"
    >
      <text x="20" y="190" className="hero-signature-text">
        {name.last}
      </text>
    </svg>
  );
}
