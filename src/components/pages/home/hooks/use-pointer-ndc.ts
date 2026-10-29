import { useEffect, useRef } from "react";
import type { PointerNdc } from "@/types/hero";

// Cursor position in normalised device coordinates, kept in a ref so it never re-renders.
export function usePointerNdc() {
  const pointer = useRef<PointerNdc>({ x: 0, y: 0, active: false });

  useEffect(() => {
    const move = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
      pointer.current.active = event.pointerType === "mouse";
    };
    const leave = () => {
      pointer.current.active = false;
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, []);

  return pointer;
}
