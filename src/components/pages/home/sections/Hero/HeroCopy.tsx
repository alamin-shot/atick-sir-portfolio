import { getChairman } from "@/services/content";

export async function HeroCopy() {
  const { name, role, organisation, disciplines, tagline } =
    await getChairman();

  return (
    <div className="grid max-w-2xl gap-6">
      <span className="font-mono text-xs tracking-eyebrow text-ember-soft uppercase">
        {role} · {organisation}
      </span>
      <h1
        id="hero-title"
        className="font-display text-6xl leading-[0.92] font-medium sm:text-8xl lg:text-9xl"
      >
        {name.first}
        <br />
        <em className="font-normal text-teal-bright">{name.last}</em>
      </h1>
      <p className="font-mono text-xs tracking-role text-mist uppercase">
        {disciplines.join(" · ")}
      </p>
      <p className="max-w-md text-lg text-mist">{tagline}</p>
    </div>
  );
}
