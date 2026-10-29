"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import type { SignatureDrawProps } from "@/types/components/letter";

// Signs the letter in ember ink once the signature is mostly in view.
// Draws his name until the CEO's real signature is supplied as an SVG path.
export function SignatureDraw({ text }: SignatureDrawProps) {
  const svg = useRef<SVGSVGElement>(null);
  const [isDrawn, setIsDrawn] = useState(false);

  useEffect(() => {
    const element = svg.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setIsDrawn(true);
        observer.disconnect();
      },
      { threshold: 0.6 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={svg}
      aria-hidden="true"
      viewBox="0 0 1000 170"
      className={cn("w-full max-w-md overflow-visible", isDrawn && "is-drawn")}
    >
      <text x="4" y="130" className="letter-signature-text">
        {text}
      </text>
    </svg>
  );
}
