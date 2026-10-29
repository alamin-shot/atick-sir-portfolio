import { useEffect } from "react";
import { detectDeviceTier } from "@/lib/hero/detect-device-tier";
import { useAppDispatch } from "@/store/hooks";
import { deviceTierDetected } from "@/store/slices/ui-slice";

export function useDeviceTier() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(deviceTierDetected(detectDeviceTier()));
  }, [dispatch]);
}
