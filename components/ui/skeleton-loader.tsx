"use client"

import { motion } from "framer-motion"

export function SkeletonLoader({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="h-4 bg-neutral-800 rounded w-3/4 mb-2" />
      <div className="h-4 bg-neutral-800 rounded w-1/2" />
    </div>
  )
}

export function ImageSkeleton() {
  return (
    <motion.div
      className="w-full h-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl"
      animate={{
        backgroundPosition: ["0%", "100%"],
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
      style={{
        backgroundSize: "200% 200%",
        backgroundImage: "linear-gradient(45deg, #171717 25%, #262626 50%, #171717 75%)",
      }}
    />
  )
}

