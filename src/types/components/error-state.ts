import type { ReactNode } from "react";

export type ErrorStateProps = {
  eyebrow: string;
  title: string;
  message: string;
  action?: ReactNode;
};

export type ErrorBoundaryProps = {
  error: Error & { digest?: string };
  retry: () => void;
};
