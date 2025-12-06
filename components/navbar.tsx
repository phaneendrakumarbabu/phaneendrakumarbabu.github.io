"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Get in Touch", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)

      // Determine active section
      const sections = navItems.map((item) => item.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.querySelector(`#${section}`)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-black/50">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="fixed top-0 right-0 z-50 p-6 hidden md:block">
        <motion.div
          className="flex gap-4 items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {navItems.map((item, index) => {
            const sectionId = item.href.substring(1)
            const isActive = activeSection === sectionId
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg border overflow-hidden group ${
                    isActive
                      ? "text-cyan-400 bg-cyan-500/10 border-cyan-500/50 shadow-lg shadow-cyan-500/20"
                      : "text-neutral-300 hover:text-cyan-400 border-transparent hover:border-neutral-700 hover:bg-neutral-900/50"
                  }`}
                >
                  {/* Glow effect on active/hover */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 blur-xl opacity-50"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 right-0 z-50 p-4 md:hidden">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <motion.button
              className="p-3 rounded-lg bg-black/80 backdrop-blur-sm border border-neutral-800 text-neutral-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all touch-manipulation"
              whileTap={{ scale: 0.95 }}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </motion.button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-black/95 backdrop-blur-lg border-neutral-800">
            <div className="flex flex-col gap-4 mt-8">
              {navItems.map((item, index) => {
                const sectionId = item.href.substring(1)
                const isActive = activeSection === sectionId
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                      className={`relative block px-4 py-4 text-base font-medium rounded-lg border transition-all duration-300 touch-manipulation min-h-[48px] flex items-center overflow-hidden group ${
                        isActive
                          ? "text-cyan-400 bg-cyan-500/10 border-cyan-500/50 shadow-lg shadow-cyan-500/20"
                          : "text-neutral-300 hover:text-cyan-400 border-neutral-800 hover:border-cyan-500/50 hover:bg-neutral-900/50"
                      }`}
                    >
                      {/* Glow effect on active/hover */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 blur-xl opacity-50"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.5 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                      {/* Hover glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      />
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  )
}

