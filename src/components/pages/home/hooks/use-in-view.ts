import { useEffect, useState, type RefObject } from "react";

// Purely visual: lets the canvas stop rendering while it is off-screen.
export function useInView(ref: RefObject<Element | null>) {
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry?.isIntersecting ?? false);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);

  return isInView;
}
