"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment, Stars } from "@react-three/drei"
import { ParticleField } from "./particle-field"
import { FloatingGeometry } from "./floating-geometry"
import { InteractiveSphere } from "./interactive-sphere"
import { ShaderBackground } from "./shader-background"

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />

          {/* Enhanced lighting setup */}
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.8} color="#6366f1" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
          <pointLight position={[0, 10, -10]} intensity={0.4} color="#06b6d4" />

          {/* Environment and stars */}
          <Environment preset="night" />
          <Stars radius={300} depth={60} count={1000} factor={7} saturation={0} fade speed={1} />

          {/* Shader background */}
          <ShaderBackground />

          {/* Enhanced particle field */}
          <ParticleField />

          {/* Interactive skill spheres */}
          <InteractiveSphere position={[-6, 2, -3]} text="React" color="#61dafb" />
          <InteractiveSphere position={[6, -1, -4]} text="Next.js" color="#ffffff" />
          <InteractiveSphere position={[-3, -3, -2]} text="TypeScript" color="#3178c6" />
          <InteractiveSphere position={[4, 3, -5]} text="Three.js" color="#049ef4" />

          {/* Floating geometric shapes */}
          <FloatingGeometry position={[-8, 3, -5]} geometry="sphere" scale={0.8} speed={0.8} />
          <FloatingGeometry position={[6, -2, -3]} geometry="box" scale={0.6} speed={1.2} />
          <FloatingGeometry position={[-4, -4, -8]} geometry="octahedron" scale={1} speed={0.6} />
          <FloatingGeometry position={[8, 4, -6]} geometry="sphere" scale={0.4} speed={1.5} />
          <FloatingGeometry position={[2, -6, -4]} geometry="box" scale={0.7} speed={0.9} />

          {/* Enhanced orbit controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.3}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 2.2}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
