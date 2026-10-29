import { ErrorState } from "@/components/shared/error-state";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <ErrorState
      eyebrow="404 · Page not found"
      title="This page isn't here."
      message="The link may be old or mistyped. Everything about the Chairman and the group lives on the home page."
      action={<ButtonLink href="/">Back to home</ButtonLink>}
    />
  );
}
