"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere, Box, Octahedron } from "@react-three/drei"
import type * as THREE from "three"

interface FloatingGeometryProps {
  position: [number, number, number]
  geometry: "sphere" | "box" | "octahedron"
  scale?: number
  speed?: number
}

export function FloatingGeometry({ position, geometry, scale = 1, speed = 1 }: FloatingGeometryProps) {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.2
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * speed * 0.8) * 0.3
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.5
    }
  })

  const GeometryComponent = {
    sphere: Sphere,
    box: Box,
    octahedron: Octahedron,
  }[geometry]

  return (
    <GeometryComponent ref={meshRef} position={position} scale={scale}>
      <meshStandardMaterial
        color="#6366f1"
        transparent
        opacity={0.1}
        wireframe
        emissive="#6366f1"
        emissiveIntensity={0.1}
      />
    </GeometryComponent>
  )
}
