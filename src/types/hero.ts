import type { Color, Vector2, Vector3 } from "three";
import type { DEVICE_TIERS } from "@/constants/device-tiers";

export type DeviceTier = (typeof DEVICE_TIERS)[keyof typeof DEVICE_TIERS];

export type CanvasTier = Exclude<DeviceTier, "low">;

export type HeroStageMeta = {
  id: string;
  label: string;
  venture: string;
};

export type ShapeDrawer = (ctx: CanvasRenderingContext2D) => void;

export type PortraitPixels = {
  ready: boolean;
  pixels: ImageData | null;
};

export type TierSettings = {
  particleCount: number;
  maxDpr: number;
  pointSize: number;
};

export type ParticleTargets = {
  positions: Float32Array[];
  seeds: Float32Array;
  portraitLight: Float32Array;
};

export type PortraitSample = {
  positions: Float32Array;
  light: Float32Array;
};

export type PointerNdc = {
  x: number;
  y: number;
  active: boolean;
};

export type UniformValue<T> = { value: T };

export type ParticleUniforms = {
  uProgress: UniformValue<number>;
  uIntro: UniformValue<number>;
  uTime: UniformValue<number>;
  uScale: UniformValue<number>;
  uOffset: UniformValue<Vector2>;
  uPointer: UniformValue<Vector3>;
  uDisperse: UniformValue<number>;
  uPixelRatio: UniformValue<number>;
  uSize: UniformValue<number>;
  uEmber: UniformValue<Color>;
  uIvory: UniformValue<Color>;
  uTeal: UniformValue<Color>;
};
