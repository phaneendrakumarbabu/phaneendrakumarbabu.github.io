"use client"

import { motion } from "framer-motion"

export function SectionDivider() {
  return (
    <div className="relative w-full py-12 md:py-16 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto px-8">
          <div className="relative">
            {/* Gradient line */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            </div>
            {/* Center decoration */}
            <div className="relative flex items-center justify-center">
              <motion.div
                className="w-3 h-3 rounded-full bg-cyan-500/80 border-2 border-cyan-400"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

