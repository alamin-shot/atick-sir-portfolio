import { useEffect, useState } from "react";
import { HERO_PORTRAIT } from "@/constants/hero-config";
import { loadImageData } from "@/lib/hero/load-image-data";
import type { PortraitPixels } from "@/types/hero";

// Loads the Chairman's photo for the particle portrait. `ready` turns true once
// it has loaded or failed; on failure `pixels` stays null and the silhouette is used.
export function usePortraitPixels(): PortraitPixels {
  const [state, setState] = useState<PortraitPixels>({
    ready: false,
    pixels: null,
  });

  useEffect(() => {
    let active = true;
    loadImageData(HERO_PORTRAIT.src).then((pixels) => {
      if (active) setState({ ready: true, pixels });
    });
    return () => {
      active = false;
    };
  }, []);

  return state;
}
