"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/neon-button"
import { DottedSurface } from "@/components/ui/dotted-surface"

const projects = [
  {
    id: 1,
    title: "Interactive Design System",
    description: "A comprehensive design system with 50+ components, built with React and Storybook.",
    tags: ["React", "Design System", "Storybook"],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: 2,
    title: "3D WebGL Experience",
    description: "Immersive 3D visualization platform using Three.js and WebGL shaders.",
    tags: ["Three.js", "WebGL", "Performance"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory and advanced search.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 4,
    title: "Motion Graphics Tool",
    description: "Web-based tool for creating and animating motion graphics with Framer Motion.",
    tags: ["Framer Motion", "Canvas", "React"],
    gradient: "from-green-500/20 to-emerald-500/20",
  },
]

export function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="projects" className="relative py-20 md:py-32 px-4 md:px-8 bg-neutral-950/80 overflow-hidden">
      <DottedSurface className="absolute inset-0 z-0" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="relative p-8 rounded-2xl border border-neutral-800/50 bg-neutral-900/50 backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:border-cyan-500/50 group-hover:bg-neutral-900/80 shadow-lg shadow-black/50 group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
                  {/* Multi-layer shadow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 blur-xl" />
                  </div>
                  
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  {/* Neon glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-blue-500/0 blur-xl" />
                  </div>
                  
                  {/* Inner shadow for depth */}
                  <div className="absolute inset-0 rounded-2xl shadow-inner shadow-black/50 opacity-50" />

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-neutral-300 mb-6 leading-relaxed text-sm md:text-base">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1.5 bg-neutral-800/80 text-neutral-200 rounded-full border border-neutral-700/50 group-hover:border-cyan-500/30 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button
                      variant="default"
                      size="default"
                      className="text-cyan-400 border-cyan-500/30 hover:border-cyan-500/50 bg-cyan-500/5 hover:bg-cyan-500/10"
                      onClick={() => {}}
                    >
                      <span className="flex items-center gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
