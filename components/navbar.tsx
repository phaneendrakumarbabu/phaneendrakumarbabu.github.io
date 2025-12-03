"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Navbar() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about" },
    { label: "Get in Touch", href: "#contact" },
  ]

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 right-0 z-50 p-6">
      <motion.div
        className="flex gap-4 items-center"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {navItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="px-4 py-2 text-sm font-medium text-neutral-300 hover:text-cyan-400 transition-colors duration-300 rounded-lg hover:bg-neutral-900/50 border border-transparent hover:border-neutral-700"
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </nav>
  )
}

