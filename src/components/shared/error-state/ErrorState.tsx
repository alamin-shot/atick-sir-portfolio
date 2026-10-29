import { Container } from "@/components/ui/Container";
import type { ErrorStateProps } from "@/types/components/error-state";

export function ErrorState({
  eyebrow,
  title,
  message,
  action,
}: ErrorStateProps) {
  return (
    <section className="hero-backdrop grid min-h-svh place-items-center py-24">
      <Container className="grid max-w-2xl justify-items-start gap-6">
        <span className="font-mono text-xs tracking-eyebrow text-teal-bright uppercase">
          {eyebrow}
        </span>
        <h1 className="font-display text-5xl leading-none sm:text-6xl">
          {title}
        </h1>
        <p className="max-w-prose text-mist">{message}</p>
        {action}
      </Container>
    </section>
  );
}
