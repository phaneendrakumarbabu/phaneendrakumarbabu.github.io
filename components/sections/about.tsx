"use client"

import { motion } from "framer-motion"
import { DottedSurface } from "@/components/ui/dotted-surface"

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="relative py-20 md:py-32 px-4 md:px-8 bg-black overflow-hidden">
      <DottedSurface className="absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50 z-[1]" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div className="space-y-8" variants={itemVariants}>
              <motion.div 
                className="relative p-6 rounded-xl bg-black/60 backdrop-blur-sm border border-neutral-800/50 shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <p className="text-white text-lg md:text-xl leading-relaxed font-light">
                  I'm a cybersecurity student with a strong foundation in coding, passionate about building secure and
                  efficient applications. My coding knowledge helps me understand both the defensive and offensive aspects
                  of cybersecurity.
                </p>
              </motion.div>
              <motion.div 
                className="relative p-6 rounded-xl bg-black/60 backdrop-blur-sm border border-neutral-800/50 shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <p className="text-white text-lg md:text-xl leading-relaxed font-light">
                  I'm dedicated to learning and applying security best practices in development, combining my technical
                  skills with a security-first mindset. Whether it's secure coding, vulnerability assessment, or building
                  robust applications, I approach every project with attention to both functionality and security.
              </p>
              </motion.div>
            </motion.div>

            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.div 
                className="relative p-6 rounded-xl bg-black/60 backdrop-blur-sm border border-neutral-800/50 shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-6">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Cybersecurity",
                    "React",
                    "TypeScript",
                    "Next.js",
                    "Python",
                    "Network Security",
                    "Secure Coding",
                    "Web Development",
                  ].map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 bg-neutral-900/80 border border-cyan-500/30 rounded-full text-base text-white font-medium hover:border-cyan-500/60 hover:bg-neutral-800/80 transition-all duration-300 cursor-default"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
