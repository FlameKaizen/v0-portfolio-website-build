"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Sphere } from "@react-three/drei"
import * as THREE from "three"

interface GalaxyBackgroundProps {
  count?: number
}

export function GalaxyBackground({ count = 8000 }: GalaxyBackgroundProps) {
  const meshRef = useRef<THREE.Points>(null)
  const nebulaRef = useRef<THREE.Mesh>(null)

  // Generate galaxy spiral pattern
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    // Galaxy parameters
    const arms = 4
    const armSpread = 0.3
    const galaxyRadius = 15
    const coreRadius = 2

    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      // Create spiral galaxy structure
      const radius = Math.random() * galaxyRadius
      const spinAngle = radius * 0.3
      const branchAngle = ((i % arms) / arms) * Math.PI * 2

      // Add randomness to create realistic galaxy structure
      const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * armSpread * radius
      const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * armSpread * radius
      const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * armSpread * radius

      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX
      positions[i3 + 1] = randomY * 0.3
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ

      // Color based on distance from center (core is brighter)
      const distanceFromCenter = Math.sqrt(positions[i3] ** 2 + positions[i3 + 2] ** 2)
      const normalizedDistance = distanceFromCenter / galaxyRadius

      // Galaxy core colors (bright blues and purples)
      if (distanceFromCenter < coreRadius) {
        colors[i3] = 0.4 + Math.random() * 0.6 // Red
        colors[i3 + 1] = 0.6 + Math.random() * 0.4 // Green
        colors[i3 + 2] = 1 // Blue
      } else {
        // Outer galaxy colors (cooler tones)
        const colorMix = Math.random()
        if (colorMix < 0.3) {
          // Purple stars
          colors[i3] = 0.5 + Math.random() * 0.5
          colors[i3 + 1] = 0.2 + Math.random() * 0.3
          colors[i3 + 2] = 0.8 + Math.random() * 0.2
        } else if (colorMix < 0.6) {
          // Blue stars
          colors[i3] = 0.1 + Math.random() * 0.3
          colors[i3 + 1] = 0.4 + Math.random() * 0.4
          colors[i3 + 2] = 0.8 + Math.random() * 0.2
        } else {
          // White/cyan stars
          colors[i3] = 0.6 + Math.random() * 0.4
          colors[i3 + 1] = 0.8 + Math.random() * 0.2
          colors[i3 + 2] = 0.9 + Math.random() * 0.1
        }

        // Fade distant stars
        const alpha = 1 - normalizedDistance * 0.7
        colors[i3] *= alpha
        colors[i3 + 1] *= alpha
        colors[i3 + 2] *= alpha
      }
    }

    return [positions, colors]
  }, [count])

  // Animate galaxy rotation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0005
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05
    }

    if (nebulaRef.current) {
      nebulaRef.current.rotation.y -= 0.0002
      nebulaRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.05) * 0.02
    }
  })

  return (
    <group>
      {/* Galaxy stars */}
      <Points ref={meshRef} positions={positions} colors={colors}>
        <PointMaterial
          transparent
          vertexColors
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      {/* Nebula effect */}
      <Sphere ref={nebulaRef} args={[12, 32, 32]} position={[0, 0, -5]}>
        <meshBasicMaterial transparent opacity={0.1} color="#4c1d95" blending={THREE.AdditiveBlending} />
      </Sphere>

      {/* Additional nebula layers */}
      <Sphere args={[8, 32, 32]} position={[3, 1, -3]}>
        <meshBasicMaterial transparent opacity={0.05} color="#7c3aed" blending={THREE.AdditiveBlending} />
      </Sphere>

      <Sphere args={[6, 32, 32]} position={[-2, -1, -4]}>
        <meshBasicMaterial transparent opacity={0.08} color="#0ea5e9" blending={THREE.AdditiveBlending} />
      </Sphere>
    </group>
  )
}
