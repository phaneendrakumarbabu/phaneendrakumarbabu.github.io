"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Copy, Check, Send, MapPin, Clock } from "lucide-react"
import { BackgroundPaths } from "@/components/ui/background-paths"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/neon-button"

const socialLinks = [
  { 
    icon: Mail, 
    label: "Email", 
    href: "mailto:goruphaneendra@gmail.com",
    value: "goruphaneendra@gmail.com",
    color: "from-red-500/20 to-orange-500/20"
  },
  { 
    icon: Linkedin, 
    label: "LinkedIn", 
    href: "https://www.linkedin.com/in/kumar-babu-b67b50320",
    value: "LinkedIn Profile",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  { 
    icon: Github, 
    label: "GitHub", 
    href: "https://github.com/phaneendrakumarbabu",
    value: "GitHub Profile",
    color: "from-purple-500/20 to-pink-500/20"
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

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

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("goruphaneendra@gmail.com")
      setCopied(true)
      toast({
        title: "Email copied!",
        description: "Email address copied to clipboard",
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, subject, message } = formData
    
    if (!name || !email || !message) {
      toast({
        title: "Please fill all fields",
        description: "Name, email, and message are required",
        variant: "destructive",
      })
      return
    }

    // Create mailto link with pre-filled content
    const mailtoLink = `mailto:goruphaneendra@gmail.com?subject=${encodeURIComponent(
      subject || `Contact from ${name}`
    )}&body=${encodeURIComponent(
      `Hello,\n\nMy name is ${name} (${email}).\n\n${message}\n\nBest regards,\n${name}`
    )}`
    
    window.location.href = mailtoLink
    
    toast({
      title: "Opening email client...",
      description: "Your default email client will open with a pre-filled message",
    })
  }

  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 md:px-8 bg-black overflow-hidden">
      <BackgroundPaths />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50 z-[1]" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {/* Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-white text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed mb-6">
              Have an exciting project in mind? I'd love to hear about it. Feel free to reach out.
            </p>
            
            {/* Availability Status */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm"
              variants={itemVariants}
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-green-400 font-medium">Available for opportunities</span>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="relative p-8 rounded-2xl border border-neutral-800/50 bg-black/60 backdrop-blur-sm shadow-2xl shadow-black/50">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-neutral-900/50 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-cyan-500/50"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-neutral-900/50 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-cyan-500/50"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="Subject (Optional)"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="bg-neutral-900/50 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-cyan-500/50"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-neutral-900/50 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-cyan-500/50 min-h-[120px] resize-none"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="default"
                    className="w-full text-cyan-400 border-cyan-500/30 hover:border-cyan-500/50 bg-cyan-500/5 hover:bg-cyan-500/10"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Email Card with Copy */}
              <div className="relative p-6 rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-900/80 to-black/80 backdrop-blur-sm shadow-xl">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/20">
                      <Mail className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Email</h4>
                      <p className="text-sm text-neutral-400">goruphaneendra@gmail.com</p>
                    </div>
                  </div>
                  <motion.button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg border border-neutral-700 bg-neutral-900/50 text-neutral-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Copy email"
                    suppressHydrationWarning
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </motion.button>
                </div>
                <a
                  href="mailto:goruphaneendra@gmail.com"
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Open email client →
                </a>
              </div>

              {/* Social Links Grid */}
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.slice(1).map((link) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative p-6 rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-900/80 to-black/80 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 group overflow-hidden"
                      whileHover={{ y: -4, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      <div className="relative z-10">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${link.color} border border-neutral-700/50 mb-3 w-fit`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="text-white font-semibold text-sm mb-1">{link.label}</h4>
                        <p className="text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors">
                          {link.value}
                        </p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>

              {/* Quick Info */}
              <div className="p-6 rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-900/80 to-black/80 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <div>
                      <p className="text-white font-medium text-sm">Response Time</p>
                      <p className="text-neutral-400 text-xs">Usually within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <div>
                      <p className="text-white font-medium text-sm">Location</p>
                      <p className="text-neutral-400 text-xs">Available for remote work</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div className="text-center text-base md:text-lg text-white/90 font-light border-t border-neutral-800/50 pt-8" variants={itemVariants}>
            <p className="mb-2">Designed & Built with React, Next.js & Tailwind CSS</p>
            <p>© 2025 Goru naga phaneendra kumar babu. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
