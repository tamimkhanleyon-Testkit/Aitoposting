'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Community', href: '#network' },
  { label: 'Contact', href: '#join' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] md:h-[88px] flex items-center transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-[rgba(6,38,77,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1.5 shrink-0">
            <div className="flex items-center gap-0.5">
              <span className="text-navy font-bold text-lg md:text-xl tracking-tight">Hey</span>
              <div className="relative w-8 h-8 md:w-9 md:h-9">
                <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* Mermaid silhouette */}
                  <ellipse cx="18" cy="13" rx="7" ry="9" fill="#12C7C0"/>
                  <path d="M11 20 Q14 30 18 28 Q22 30 25 20 Q22 24 18 22 Q14 24 11 20Z" fill="#12C7C0"/>
                  <path d="M13 28 Q11 34 9 33 Q12 36 15 32" fill="#0F5FAF" opacity="0.7"/>
                  <path d="M23 28 Q25 34 27 33 Q24 36 21 32" fill="#0F5FAF" opacity="0.7"/>
                  {/* Hair/head top */}
                  <path d="M11 10 Q13 4 18 4 Q23 4 25 10" fill="#06264D" opacity="0.9"/>
                  {/* Wave accent */}
                  <path d="M8 32 Q12 29 16 32 Q20 35 24 32 Q28 29 30 32" stroke="#54D7FF" strokeWidth="1.5" fill="none" opacity="0.8"/>
                </svg>
              </div>
              <span className="text-navy font-bold text-lg md:text-xl tracking-tight">Mariner</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#5C7088] hover:text-navy text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a href="#join" className="hidden md:block">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-navy-light transition-all duration-200 shadow-sm"
              >
                Notify Me
              </motion.button>
            </a>
            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-navy"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-[rgba(6,38,77,0.08)] shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[#0B1F33] font-medium py-3 px-4 rounded-xl hover:bg-sea-blue transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
              <a href="#join" onClick={() => setMobileOpen(false)}>
                <button className="w-full mt-2 bg-navy text-white font-semibold py-3 rounded-full text-sm">
                  Notify Me
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
