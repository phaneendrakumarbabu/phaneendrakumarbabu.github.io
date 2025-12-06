"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Copy, Check, Send } from "lucide-react"
import { BackgroundPaths } from "@/components/ui/background-paths"
import { useState } from "react"
import { toast } from "sonner"

const socialLinks = [
  { 
    icon: Linkedin, 
    label: "LinkedIn", 
    href: "https://www.linkedin.com/in/kumar-babu-b67b50320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    description: "Connect on LinkedIn"
  },
  { 
    icon: Github, 
    label: "GitHub", 
    href: "https://github.com/phaneendrakumarbabu",
    description: "View my code"
  },
]

const email = "goruphaneendra@gmail.com"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [copied, setCopied] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create mailto link with pre-filled data
    const subject = encodeURIComponent(formData.subject || "Contact from Portfolio")
    const body = encodeURIComponent(
      `Hello,\n\nMy name is ${formData.name}${formData.email ? ` (${formData.email})` : ""}.\n\n${formData.message || "I'd like to get in touch with you."}\n\nBest regards`
    )
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`

    // Open email client
    window.location.href = mailtoLink

    // Show success message
    setTimeout(() => {
      toast.success("Email client opened!", {
        description: "Your message is ready to send.",
      })
      setIsSubmitting(false)
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 500)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      toast.success("Email copied to clipboard!", {
        description: email,
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast.error("Failed to copy email", {
        description: "Please copy manually: " + email,
      })
    }
  }

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
    <section id="contact" className="relative py-20 md:py-32 px-4 md:px-8 bg-black overflow-hidden">
      <BackgroundPaths />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50 z-[1]" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-white text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed">
              Have an exciting project in mind? I'd love to hear about it. Feel free to reach out.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="relative p-8 rounded-2xl border border-neutral-800/50 bg-black/60 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg bg-neutral-900/50 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                      required
                      suppressHydrationWarning
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg bg-neutral-900/50 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                      required
                      suppressHydrationWarning
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject"
                      className="w-full px-4 py-3 rounded-lg bg-neutral-900/50 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                      suppressHydrationWarning
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-neutral-900/50 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                      required
                      suppressHydrationWarning
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium transition-all duration-300 overflow-hidden group relative disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    suppressHydrationWarning
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Opening Email...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Email Card */}
              <div className="relative p-8 rounded-2xl border border-neutral-800/50 bg-black/60 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Direct Contact
                </h3>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-neutral-900/50 border border-neutral-700/50">
                  <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-neutral-400 mb-1">Email Address</p>
                    <p className="text-white font-medium break-all">{email}</p>
                  </div>
                  <motion.button
                    onClick={copyEmail}
                    className="p-2 rounded-lg border border-neutral-700 bg-neutral-800/50 text-neutral-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Copy email"
                    suppressHydrationWarning
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-cyan-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </motion.button>
                </div>
                <a
                  href={`mailto:${email}`}
                  className="mt-4 block w-full px-4 py-3 text-center rounded-lg border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300"
                >
                  Open Email Client
                </a>
              </div>

              {/* Social Links */}
              <div className="relative p-8 rounded-2xl border border-neutral-800/50 bg-black/60 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Connect With Me
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((link) => {
                    const Icon = link.icon
                    return (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center gap-4 p-4 rounded-xl border border-neutral-700 bg-neutral-900/30 hover:bg-neutral-900/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Hover glow effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={false}
                        />
                        {/* Icon */}
                        <div className="relative z-10 p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-300">
                          <Icon className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        {/* Text */}
                        <div className="relative z-10 flex-1">
                          <p className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">
                            {link.label}
                          </p>
                          <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
                            {link.description}
                          </p>
                        </div>
                        {/* Arrow indicator */}
                        <div className="relative z-10 text-neutral-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300">
                          →
                        </div>
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div className="text-center text-base md:text-lg text-white/90 font-light" variants={itemVariants}>
            <p className="mb-2">Designed & Built with React, Next.js & Tailwind CSS</p>
            <p>© 2025 Goru naga phaneendra kumar babu. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
