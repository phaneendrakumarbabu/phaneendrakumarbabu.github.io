"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code, Box, ShoppingCart, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/neon-button"
import { DottedSurface } from "@/components/ui/dotted-surface"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: 1,
    title: "Interactive Design System",
    description: "A comprehensive design system with 50+ components, built with React and Storybook.",
    tags: ["React", "Design System", "Storybook"],
    gradient: "from-cyan-500/20 to-blue-500/20",
    icon: <Code className="h-4 w-4" />,
  },
  {
    id: 2,
    title: "3D WebGL Experience",
    description: "Immersive 3D visualization platform using Three.js and WebGL shaders.",
    tags: ["Three.js", "WebGL", "Performance"],
    gradient: "from-purple-500/20 to-pink-500/20",
    icon: <Box className="h-4 w-4" />,
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory and advanced search.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    gradient: "from-orange-500/20 to-red-500/20",
    icon: <ShoppingCart className="h-4 w-4" />,
  },
  {
    id: 4,
    title: "Motion Graphics Tool",
    description: "Web-based tool for creating and animating motion graphics with Framer Motion.",
    tags: ["Framer Motion", "Canvas", "React"],
    gradient: "from-green-500/20 to-emerald-500/20",
    icon: <Sparkles className="h-4 w-4" />,
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
                className="min-h-[14rem] list-none"
                variants={itemVariants}
              >
                <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                  />
                  <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                      <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
                        {project.icon}
                      </div>
                      <div className="space-y-3">
                        <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                          {project.title}
                        </h3>
                        <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-3 py-1.5 bg-muted/50 text-muted-foreground rounded-full border border-border"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Button
                          variant="default"
                          size="default"
                          className="mt-4 text-cyan-400 border-cyan-500/30 hover:border-cyan-500/50 bg-cyan-500/5 hover:bg-cyan-500/10"
                          onClick={() => {}}
                        >
                          <span className="flex items-center gap-2">
                            Learn More
                            <ArrowRight className="w-4 h-4 transition-transform duration-300" />
                          </span>
                        </Button>
                      </div>
                    </div>
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
