'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

function LighthouseScene() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-3xl">
      {/* Sky gradient — dusk */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a3a6b] via-[#0d5fa8] to-[#0891b2]" />

      {/* Stars */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 45}%`,
            opacity: Math.random() * 0.6 + 0.2,
          }}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3 }}
        />
      ))}

      {/* Moon */}
      <div className="absolute top-6 right-16 w-10 h-10 bg-amber-50 rounded-full shadow-[0_0_20px_rgba(255,240,150,0.4)]" />

      {/* Ocean */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-b from-[#0a4080] to-[#06264D]" />

      {/* Ocean waves */}
      <div className="absolute bottom-[30%] left-0 right-0 h-4 overflow-hidden opacity-40">
        <div className="wave-animate-1 h-full" style={{ width: '200%' }}>
          <svg viewBox="0 0 1440 16" className="w-1/2 inline-block" preserveAspectRatio="none">
            <path d="M0,8 C240,16 480,0 720,8 C960,16 1200,0 1440,8" stroke="rgba(84,215,255,0.6)" strokeWidth="2" fill="none"/>
          </svg>
          <svg viewBox="0 0 1440 16" className="w-1/2 inline-block" preserveAspectRatio="none">
            <path d="M0,8 C240,16 480,0 720,8 C960,16 1200,0 1440,8" stroke="rgba(84,215,255,0.6)" strokeWidth="2" fill="none"/>
          </svg>
        </div>
      </div>

      {/* Lighthouse structure */}
      <div className="absolute bottom-[28%] right-12 md:right-20">
        {/* Rotating beam */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-2 left-1/2 w-40 h-40 origin-bottom-left"
          style={{
            background: 'conic-gradient(from 0deg, transparent 0deg, rgba(255,240,150,0.12) 20deg, transparent 20deg)',
          }}
        />

        {/* Light */}
        <motion.div
          animate={{ boxShadow: ['0 0 20px 8px rgba(255,240,150,0.3)', '0 0 40px 16px rgba(255,240,150,0.5)', '0 0 20px 8px rgba(255,240,150,0.3)'] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="relative z-10 w-5 h-5 bg-amber-200 rounded-full mx-auto mb-0.5"
        />

        {/* Lamp room */}
        <div className="w-8 h-5 bg-white/20 border border-white/30 rounded-t-sm mx-auto" />
        {/* Tower */}
        <div className="w-6 h-20 bg-white/90 mx-auto rounded-sm" style={{ clipPath: 'polygon(10% 0, 90% 0, 100% 100%, 0 100%)' }}>
          {/* Stripes */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-full h-3 bg-red-400/70" style={{ marginTop: i * (64 / 4) + 'px', position: 'absolute', opacity: i % 2 === 0 ? 0 : 1 }} />
          ))}
        </div>
        {/* Base */}
        <div className="w-10 h-3 bg-white/80 mx-auto rounded-sm" />
        <div className="w-14 h-2 bg-white/60 mx-auto rounded-sm" />
      </div>

      {/* Distant ship */}
      <motion.div
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[34%] left-12 opacity-50"
      >
        <svg viewBox="0 0 60 24" className="w-14 h-6" fill="none">
          <path d="M5 16 L55 16 L52 20 L8 20 Z" fill="rgba(6,38,77,0.8)"/>
          <rect x="22" y="8" width="20" height="8" fill="rgba(6,38,77,0.7)" rx="1"/>
          <rect x="28" y="4" width="12" height="6" fill="rgba(6,38,77,0.6)" rx="1"/>
          <line x1="34" y1="4" x2="34" y2="0" stroke="rgba(6,38,77,0.6)" strokeWidth="1.5"/>
        </svg>
      </motion.div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
    </div>
  )
}

export default function JoinCrew() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="join" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl min-h-[400px] flex items-center"
        >
          {/* Background */}
          <LighthouseScene />

          {/* Content */}
          <div className="relative z-10 w-full px-6 py-12 md:px-12 lg:px-16">
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mb-2"
              >
                <span className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">
                  ⚓ Join The Crew
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight leading-tight"
              >
                Join our crew and get<br />
                notified at launch
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-white/70 mb-8 text-sm leading-relaxed"
              >
                Be first to access HeyMariner — receive early access invitations,
                feature announcements, and your launch alert.
              </motion.p>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: 0.5 }}
                    onSubmit={handleSubmit}
                    className="glass rounded-2xl p-4 sm:p-2 sm:flex sm:items-center sm:gap-2"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="flex-1 bg-transparent text-white placeholder-white/50 text-sm px-3 py-3 sm:py-2 outline-none w-full sm:w-auto border-b border-white/20 sm:border-none mb-3 sm:mb-0"
                    />
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-navy font-semibold text-sm px-6 py-3 rounded-xl hover:bg-sea-blue transition-colors disabled:opacity-70 shrink-0"
                    >
                      {loading ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-navy/30 border-t-navy rounded-full"
                        />
                      ) : (
                        <>
                          <Send size={14} />
                          Notify Me
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="glass rounded-2xl p-5 flex items-center gap-4"
                  >
                    <div className="w-10 h-10 bg-teal/20 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle size={20} className="text-teal" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">You&apos;re on the list!</div>
                      <div className="text-white/60 text-xs mt-0.5">
                        Fair winds and following seas &mdash; we&apos;ll notify you at launch.
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-white/40 text-xs mt-4"
              >
                No spam. Unsubscribe anytime.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
