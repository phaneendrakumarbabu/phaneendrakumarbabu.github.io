"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code, Box, ShoppingCart, Sparkles, Shield, Wrench, GraduationCap, Globe, Lock, Image, Key, Network } from "lucide-react"
import { Button } from "@/components/ui/neon-button"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { ShaderAnimation } from "@/components/ui/shader-lines"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: 1,
    title: "Phishing Defence Extension",
    description: "A Chrome browser extension designed to protect users from phishing websites and malicious links. Built with TypeScript and modern web technologies.",
    tags: ["Chrome Extension", "TypeScript", "JavaScript", "Security"],
    gradient: "from-red-500/20 to-orange-500/20",
    icon: <Shield className="h-4 w-4" />,
    link: "https://github.com/phaneendrakumarbabu/phishing-defence-extension",
  },
  {
    id: 2,
    title: "RepairGenie",
    description: "A civic issue reporting and tracking web application. Citizens can report infrastructure problems with photos, and administrators can manage and track issue status. Built with Flask, SQLite, and Tailwind CSS.",
    tags: ["Flask", "Python", "SQLite", "Tailwind CSS"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    icon: <Wrench className="h-4 w-4" />,
    link: "https://github.com/phaneendrakumarbabu/repairgenie-",
  },
  {
    id: 3,
    title: "Phishing Awareness Training Platform",
    description: "An interactive cybersecurity training platform that educates users about phishing attacks through hands-on simulations, training modules, and AI-powered dynamic scenario generation using Google Gemini API.",
    tags: ["React", "Tailwind CSS", "Google Gemini API", "Cybersecurity"],
    gradient: "from-indigo-500/20 to-purple-500/20",
    icon: <GraduationCap className="h-4 w-4" />,
    link: "https://github.com/phaneendrakumarbabu/phishing-awareness-",
  },
  {
    id: 4,
    title: "Phishing Awareness Defence Portal",
    description: "A comprehensive web application for identifying, reporting, and learning about phishing attacks. Features include real-time URL analysis with VirusTotal API, password security checking, educational resources, security quizzes, and an admin dashboard.",
    tags: ["Flask", "Python", "VirusTotal API", "SQLite"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    icon: <Globe className="h-4 w-4" />,
    link: "https://github.com/phaneendrakumarbabu/phishing-awareness-defence-portal",
  },
  {
    id: 5,
    title: "Caesar Cipher Encryption Tool",
    description: "A Python-based encryption and decryption program implementing the classical Caesar Cipher algorithm. Shifts letters by a fixed number of positions in the alphabet to encrypt messages and reverses the process for decryption. Part of Prodigy InfoTech Cybersecurity Internship.",
    tags: ["Python", "Cryptography", "Caesar Cipher", "Encryption"],
    gradient: "from-yellow-500/20 to-amber-500/20",
    icon: <Lock className="h-4 w-4" />,
    link: "https://github.com/phaneendrakumarbabu/PRODIGY-CS-TASK1",
  },
  {
    id: 6,
    title: "Image Encryption Tool",
    description: "A GUI application for encrypting and decrypting images using pixel manipulation techniques. Implements XOR operations and pixel swapping to obfuscate image data. Features an intuitive interface built with Tkinter, OpenCV, and NumPy. Part of Prodigy InfoTech Cybersecurity Internship.",
    tags: ["Python", "OpenCV", "Tkinter", "Image Encryption"],
    gradient: "from-pink-500/20 to-rose-500/20",
    icon: <Image className="h-4 w-4" />,
    link: "https://github.com/phaneendrakumarbabu/PRODIGY-CS-TASK2",
  },
  {
    id: 7,
    title: "Password Complexity Checker",
    description: "A Python-based tool that assesses password strength by evaluating criteria such as length, character types, special characters, and numbers. Helps users understand and enforce basic password security standards to prevent weak passwords. Part of Prodigy InfoTech Cybersecurity Internship.",
    tags: ["Python", "JavaScript", "Password Security", "Web Interface"],
    gradient: "from-violet-500/20 to-purple-500/20",
    icon: <Key className="h-4 w-4" />,
    link: "https://github.com/phaneendrakumarbabu/PRODIGY-CS-TASK3",
  },
  {
    id: 8,
    title: "Network Packet Analyzer",
    description: "A Python-based network analysis tool for capturing, analyzing, and inspecting network packets. Enables network traffic monitoring, protocol analysis, and security assessment. Helps identify potential security threats and understand network communication patterns. Part of Prodigy InfoTech Cybersecurity Internship.",
    tags: ["Python", "Network Analysis", "Packet Capture", "Cybersecurity"],
    gradient: "from-slate-500/20 to-gray-500/20",
    icon: <Network className="h-4 w-4" />,
    link: "https://github.com/phaneendrakumarbabu/PRODIGY-CS-TASK5",
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
    <section id="projects" className="relative py-20 md:py-32 px-4 md:px-8 bg-neutral-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ShaderAnimation />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Featured Projects
          </motion.h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <motion.li
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
                        {project.link ? (
                          <LiquidButton
                            className="mt-4 text-white border rounded-full"
                            size="lg"
                            onClick={() => {
                              window.open(project.link, "_blank", "noopener,noreferrer")
                            }}
                          >
                            <span className="flex items-center gap-2">
                              View Project
                              <ArrowRight className="w-4 h-4 transition-transform duration-300" />
                            </span>
                          </LiquidButton>
                        ) : (
                          <Button
                            variant="default"
                            size="default"
                            className="mt-4 text-cyan-400 border-cyan-500/30 hover:border-cyan-500/50 bg-cyan-500/5 hover:bg-cyan-500/10"
                          >
                            <span className="flex items-center gap-2">
                              Learn More
                              <ArrowRight className="w-4 h-4 transition-transform duration-300" />
                            </span>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
