"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

export function CosmicDust({ count = 2000 }: { count?: number }) {
  const meshRef = useRef<THREE.Points>(null)

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      // Create dust cloud around the galaxy
      const radius = 5 + Math.random() * 20
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = (Math.random() - 0.5) * 8
      positions[i3 + 2] = radius * Math.sin(phi) * Math.sin(theta)

      // Dust colors (subtle purples and blues)
      const dustColor = Math.random()
      if (dustColor < 0.5) {
        colors[i3] = 0.3 + Math.random() * 0.2 // Red
        colors[i3 + 1] = 0.2 + Math.random() * 0.2 // Green
        colors[i3 + 2] = 0.5 + Math.random() * 0.3 // Blue
      } else {
        colors[i3] = 0.2 + Math.random() * 0.3
        colors[i3 + 1] = 0.4 + Math.random() * 0.3
        colors[i3 + 2] = 0.6 + Math.random() * 0.4
      }
    }

    return [positions, colors]
  }, [count])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0002
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.02
    }
  })

  return (
    <Points ref={meshRef} positions={positions} colors={colors}>
      <PointMaterial
        transparent
        vertexColors
        size={0.005}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}
