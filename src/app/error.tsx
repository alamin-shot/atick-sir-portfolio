"use client";

import { ErrorState } from "@/components/shared/error-state";
import { Button } from "@/components/ui/Button";
import type { ErrorBoundaryProps } from "@/types/components/error-state";

export default function ErrorPage({ retry }: ErrorBoundaryProps) {
  return (
    <ErrorState
      eyebrow="Something went wrong"
      title="This part didn't load."
      message="Please try again. If it keeps happening, refresh the page."
      action={<Button onClick={retry}>Try again</Button>}
    />
  );
}
