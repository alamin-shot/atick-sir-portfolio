import { AdditiveBlending, ShaderMaterial } from "three";
import type { ParticleUniforms } from "@/types/hero";
import { particleFragmentShader } from "./shaders/particle-fragment";
import { particleVertexShader } from "./shaders/particle-vertex";

// Built imperatively so the material holds the exact uniforms object GSAP animates.
export function createParticleMaterial(uniforms: ParticleUniforms) {
  return new ShaderMaterial({
    uniforms,
    vertexShader: particleVertexShader,
    fragmentShader: particleFragmentShader,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
  });
}
