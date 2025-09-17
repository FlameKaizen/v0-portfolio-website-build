"use client"

import type React from "react"

import { motion } from "framer-motion"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  animate?: boolean
}

export function GradientText({ children, className = "", animate = false }: GradientTextProps) {
  const baseClasses = "bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent"

  if (animate) {
    return (
      <motion.span
        className={`${baseClasses} ${className}`}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      >
        {children}
      </motion.span>
    )
  }

  return <span className={`${baseClasses} ${className}`}>{children}</span>
}
