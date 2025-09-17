"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { ParticleField } from "./particle-field"
import { FloatingGeometry } from "./floating-geometry"

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />

          {/* Lighting */}
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#6366f1" />
          <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8b5cf6" />

          {/* Particle field */}
          <ParticleField />

          {/* Floating geometric shapes */}
          <FloatingGeometry position={[-8, 3, -5]} geometry="sphere" scale={0.8} speed={0.8} />
          <FloatingGeometry position={[6, -2, -3]} geometry="box" scale={0.6} speed={1.2} />
          <FloatingGeometry position={[-4, -4, -8]} geometry="octahedron" scale={1} speed={0.6} />
          <FloatingGeometry position={[8, 4, -6]} geometry="sphere" scale={0.4} speed={1.5} />
          <FloatingGeometry position={[2, -6, -4]} geometry="box" scale={0.7} speed={0.9} />

          {/* Subtle orbit controls for mouse interaction */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
