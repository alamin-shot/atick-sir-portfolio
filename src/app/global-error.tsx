"use client";

import "@/styles/globals.css";
import { ErrorState } from "@/components/shared/error-state";
import { Button } from "@/components/ui/Button";
import { fontVariables } from "@/config/fonts";
import type { ErrorBoundaryProps } from "@/types/components/error-state";

export default function GlobalError({ retry }: ErrorBoundaryProps) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <ErrorState
          eyebrow="Something went wrong"
          title="The site didn't load."
          message="Please try again in a moment."
          action={<Button onClick={retry}>Try again</Button>}
        />
      </body>
    </html>
  );
}
