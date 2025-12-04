"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"
import { BackgroundPaths } from "@/components/ui/background-paths"

const socialLinks = [
  { icon: Mail, label: "Email", href: "mailto:goruphaneendra@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
]

export function ContactSection() {
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
    <section id="contact" className="relative py-20 md:py-32 px-4 md:px-8 bg-black overflow-hidden">
      <BackgroundPaths />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50 z-[1]" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-white text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed">
              Have an exciting project in mind? I'd love to hear about it. Feel free to reach out.
            </p>
          </motion.div>

          <motion.div className="flex justify-center gap-6 mb-12" variants={itemVariants}>
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-neutral-700 text-neutral-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              )
            })}
          </motion.div>

          <motion.div className="text-center text-base md:text-lg text-white/90 font-light" variants={itemVariants}>
            <p className="mb-2">Designed & Built with React, Next.js & Tailwind CSS</p>
            <p>© 2025 Goru naga phaneendra kumar babu. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
