"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Plane } from "@react-three/drei"
import type * as THREE from "three"

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;
  varying vec2 vUv;
  
  void main() {
    vec2 uv = vUv;
    
    // Create animated gradient
    float wave1 = sin(uv.x * 10.0 + uTime * 0.5) * 0.5 + 0.5;
    float wave2 = sin(uv.y * 8.0 + uTime * 0.3) * 0.5 + 0.5;
    
    vec3 color1 = vec3(0.4, 0.4, 1.0); // Blue
    vec3 color2 = vec3(0.6, 0.4, 1.0); // Purple
    vec3 color3 = vec3(0.2, 0.8, 1.0); // Cyan
    
    vec3 finalColor = mix(color1, color2, wave1);
    finalColor = mix(finalColor, color3, wave2 * 0.3);
    
    gl_FragColor = vec4(finalColor * 0.1, 0.8);
  }
`

export function ShaderBackground() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial
      material.uniforms.uTime.value = state.clock.elapsedTime
    }
  })

  return (
    <Plane ref={meshRef} args={[50, 50]} position={[0, 0, -15]}>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 },
          uResolution: { value: [1920, 1080] },
        }}
        transparent
      />
    </Plane>
  )
}
