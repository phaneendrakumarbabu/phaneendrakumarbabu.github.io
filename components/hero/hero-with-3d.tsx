"use client"

import { motion } from "framer-motion"
import { ShaderAnimation } from "@/components/ui/shader-animation"
import { SplineScene } from "@/components/ui/spline"
import { Spotlight } from "@/components/ui/spotlight"
import { Card } from "@/components/ui/card"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import Link from "next/link"

export function HeroWith3D() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden bg-black"
      suppressHydrationWarning
    >
      {/* Shader background */}
      <ShaderAnimation />

      {/* Spotlight effect */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(34, 211, 238, 0.4)" />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4 md:px-8">
        <motion.div className="w-full max-w-6xl" variants={containerVariants} initial="hidden" animate="visible">
          <Card className="w-full bg-black/[0.7] border border-neutral-800/50 backdrop-blur-sm overflow-hidden h-[500px] md:h-[600px]">
            <div className="flex flex-col md:flex-row h-full">
              {/* Left content */}
              <motion.div
                className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center"
                variants={itemVariants}
              >
                <motion.div variants={itemVariants}>
                  <h1 className="text-4xl md:text-6xl font-bold text-balance">
                    <span className="bg-gradient-to-b from-neutral-50 via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                      Goru Naga<br />
                      Phaneendra Kumar Babu
                    </span>
                  </h1>
                </motion.div>

                <motion.p className="mt-2 text-lg md:text-xl text-neutral-400" variants={itemVariants}>
                  Cybersecurity Student & Developer
                </motion.p>

                <motion.p
                  className="mt-4 text-neutral-300 max-w-lg leading-relaxed text-sm md:text-base"
                  variants={itemVariants}
                >
                  A cybersecurity student with strong coding knowledge, passionate about building secure applications
                  and solving complex technical challenges. Combining security expertise with modern development practices.
                </motion.p>

                <motion.div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center" variants={itemVariants}>
                  <Link
                    href="#projects"
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                  >
                    View My Work
                  </Link>
                  <Link
                    href="#contact"
                    className="px-6 py-3 border border-neutral-600 text-neutral-300 rounded-lg font-medium hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
                  >
                    Get in Touch
                  </Link>
                </motion.div>
                
                <motion.div className="mt-6" variants={itemVariants}>
                  <a 
                    href="/resume.pdf" 
                    download="Goru_Phaneendra_Resume.pdf"
                    className="inline-block"
                    onClick={(e) => {
                      // If resume.pdf doesn't exist, prevent default and show message
                      // You can update this when you add your actual resume file
                    }}
                  >
                    <InteractiveHoverButton
                      text="Download Resume"
                      className="w-auto min-w-[180px] border-cyan-500/50 bg-black/50 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/10 [&>div]:bg-cyan-500/20 [&>div]:group-hover:bg-cyan-500"
                    />
                  </a>
                </motion.div>
              </motion.div>

              {/* Right content - 3D Scene */}
              <motion.div className="hidden md:flex flex-1 relative overflow-hidden" variants={itemVariants}>
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
