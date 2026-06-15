'use client'
import { motion } from 'framer-motion'
import { Bell, ChevronDown } from 'lucide-react'
import Countdown from './Countdown'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

function ShipScene() {
  return (
    <div className="relative w-full h-full min-h-[320px] md:min-h-[480px] rounded-3xl overflow-hidden">
      {/* Sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-blue-100 to-blue-200" />

      {/* Sun glow */}
      <div className="absolute top-8 right-12 w-20 h-20 bg-yellow-100/80 rounded-full blur-2xl" />
      <div className="absolute top-10 right-14 w-14 h-14 bg-amber-50/60 rounded-full blur-xl" />

      {/* Clouds */}
      <motion.div
        animate={{ x: [0, 12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-6 left-8"
      >
        <div className="relative">
          <div className="w-28 h-10 bg-white/90 rounded-full blur-sm" />
          <div className="absolute -top-3 left-6 w-16 h-10 bg-white/80 rounded-full blur-sm" />
        </div>
      </motion.div>
      <motion.div
        animate={{ x: [0, -8, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 right-16"
      >
        <div className="relative">
          <div className="w-20 h-8 bg-white/70 rounded-full blur-sm" />
          <div className="absolute -top-2 left-4 w-12 h-7 bg-white/60 rounded-full blur-sm" />
        </div>
      </motion.div>

      {/* Birds */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: `${14 + i * 8}%`, left: `${20 + i * 15}%` }}
          animate={{ x: [0, 20, 0], y: [0, -6, 0] }}
          transition={{ duration: 6 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: i * 1.5 }}
        >
          <svg viewBox="0 0 24 8" className="w-5 h-2 text-[#5C7088]/60" fill="none">
            <path d="M0 4 Q3 0 6 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M6 4 Q9 0 12 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </motion.div>
      ))}

      {/* Container Ship — animated float */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[85%]"
      >
        <svg viewBox="0 0 560 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-lg">
          {/* Hull */}
          <path d="M30 130 L530 130 L510 160 L50 160 Z" fill="#06264D"/>
          <path d="M50 160 L510 160 L490 175 L70 175 Z" fill="#041A38"/>

          {/* Main deck */}
          <rect x="55" y="110" width="440" height="22" fill="#0D3A70" rx="2"/>

          {/* Containers Row 1 (bottom) */}
          {[
            { x: 65, color: '#E74C3C' }, { x: 125, color: '#2ECC71' },
            { x: 185, color: '#F39C12' }, { x: 245, color: '#3498DB' },
            { x: 305, color: '#9B59B6' }, { x: 365, color: '#E67E22' },
          ].map(({ x, color }, i) => (
            <rect key={i} x={x} y={78} width={52} height={32} fill={color} rx="2"/>
          ))}

          {/* Containers Row 2 */}
          {[
            { x: 65, color: '#3498DB' }, { x: 125, color: '#E74C3C' },
            { x: 185, color: '#9B59B6' }, { x: 245, color: '#2ECC71' },
            { x: 305, color: '#F39C12' },
          ].map(({ x, color }, i) => (
            <rect key={i} x={x} y={46} width={52} height={32} fill={color} rx="2"/>
          ))}

          {/* Containers Row 3 */}
          {[
            { x: 75, color: '#E74C3C' }, { x: 135, color: '#F39C12' },
            { x: 195, color: '#2ECC71' }, { x: 255, color: '#E74C3C' },
          ].map(({ x, color }, i) => (
            <rect key={i} x={x} y={14} width={52} height={32} fill={color} rx="2"/>
          ))}

          {/* Container stripes */}
          {[65,125,185,245,305,365].map((x,i) => (
            <line key={i} x1={x+18} y1={78} x2={x+18} y2={110} stroke="rgba(0,0,0,0.15)" strokeWidth="1"/>
          ))}

          {/* Bridge / superstructure */}
          <rect x="390" y="30" width="90" height="80" fill="#F0F4F8" rx="3"/>
          <rect x="398" y="20" width="74" height="18" fill="#E2E8F0" rx="2"/>
          <rect x="406" y="12" width="58" height="12" fill="#CBD5E0" rx="2"/>

          {/* Bridge windows */}
          {[410, 430, 450].map((x, i) => (
            <rect key={i} x={x} y={36} width={14} height={10} fill="#54D7FF" rx="1.5" opacity="0.9"/>
          ))}
          {[400, 420, 440, 460].map((x, i) => (
            <rect key={i} x={x} y={56} width={12} height={8} fill="#87CEEB" rx="1" opacity="0.7"/>
          ))}

          {/* Funnel */}
          <rect x="428" y="-8" width="28" height="28" fill="#06264D" rx="4"/>
          <ellipse cx="442" cy="-8" rx="14" ry="4" fill="#041A38"/>
          <ellipse cx="442" cy="-6" rx="10" ry="3" fill="#0D3A70" opacity="0.5"/>

          {/* Mast */}
          <line x1="444" y1="-8" x2="444" y2="-30" stroke="#06264D" strokeWidth="2"/>
          <rect x="430" y="-32" width="28" height="4" fill="#0D3A70" rx="1"/>

          {/* Crane */}
          <line x1="200" y1="14" x2="200" y2="-20" stroke="#606060" strokeWidth="4" strokeLinecap="round"/>
          <line x1="200" y1="-20" x2="290" y2="-20" stroke="#606060" strokeWidth="3" strokeLinecap="round"/>
          <line x1="290" y1="-20" x2="290" y2="14" stroke="#606060" strokeWidth="2" strokeLinecap="round"/>
          <line x1="240" y1="-20" x2="240" y2="5" stroke="#707070" strokeWidth="1.5" strokeDasharray="3 2"/>

          {/* Red / green nav lights */}
          <circle cx="30" cy="128" r="3" fill="#E74C3C" opacity="0.9">
            <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="530" cy="128" r="3" fill="#2ECC71" opacity="0.9">
            <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" begin="1s" repeatCount="indefinite"/>
          </circle>
        </svg>
      </motion.div>

      {/* Ocean layers */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <div
          className="absolute bottom-0 h-20 wave-animate-1"
          style={{ width: '200%', background: 'linear-gradient(180deg, #0F5FAF 0%, #06264D 100%)', borderRadius: '40% 40% 0 0 / 10px 10px 0 0' }}
        >
          <svg viewBox="0 0 1440 56" className="w-full absolute top-0" preserveAspectRatio="none">
            <path d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z" fill="#0F5FAF" opacity="0.8"/>
          </svg>
        </div>
        <div
          className="absolute bottom-0 h-12 wave-animate-2 opacity-50"
          style={{ width: '200%' }}
        >
          <svg viewBox="0 0 1440 48" className="w-full absolute top-0" preserveAspectRatio="none">
            <path d="M0,24 C180,48 360,0 540,24 C720,48 900,0 1080,24 C1260,48 1350,12 1440,24 L1440,48 L0,48 Z" fill="#54D7FF" opacity="0.3"/>
          </svg>
        </div>
      </div>

      {/* Wake effect behind ship */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-center">
        <div className="w-[60%] h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full blur-sm" />
      </div>

      {/* Decorative AIS tracking badge */}
      <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-xl px-3 py-2 border border-white/60 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-teal rounded-full animate-pulse" />
          <span className="text-[10px] font-mono text-navy font-semibold tracking-wider">AIS LIVE</span>
        </div>
        <div className="text-[9px] font-mono text-[#5C7088] mt-0.5">LAT 23.8° N  LON 90.4° E</div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-[#F7FAFC] via-[#EDF6FB] to-[#DBEEFF] flex items-center pt-[88px]"
    >
      {/* Soft particle background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-teal/5"
            style={{
              width: `${120 + i * 40}px`,
              height: `${120 + i * 40}px`,
              left: `${10 + i * 16}%`,
              top: `${15 + (i % 3) * 25}%`,
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.8,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text content */}
          <div>
            {/* Eyebrow label */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-3 mb-6"
            >
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-[rgba(6,38,77,0.08)] rounded-full px-4 py-1.5 shadow-sm">
                <div className="w-2 h-2 bg-teal rounded-full animate-pulse" />
                <span className="text-xs font-semibold tracking-[0.18em] text-ocean uppercase">
                  Setting Sail
                </span>
              </div>
            </motion.div>

            {/* Wavy underline decoration */}
            <motion.div custom={0.1} variants={fadeUp} initial="hidden" animate="visible">
              <svg viewBox="0 0 120 8" className="h-2 mb-2 text-teal/40" fill="none">
                <path d="M0 4 Q10 0 20 4 Q30 8 40 4 Q50 0 60 4 Q70 8 80 4 Q90 0 100 4 Q110 8 120 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              custom={0.15}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-navy tracking-tight leading-[0.95] mb-4"
            >
              HEY
              <span className="gradient-text block">MARINER</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={0.25}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-xl sm:text-2xl font-semibold text-ocean mb-4"
            >
              Your Maritime Companion
            </motion.p>

            {/* Description */}
            <motion.p
              custom={0.35}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg text-[#5C7088] leading-relaxed mb-8 max-w-md"
            >
              A smarter way for seafarers and maritime professionals to learn,
              stay informed and navigate with confidence.
            </motion.p>

            {/* Countdown */}
            <motion.div
              custom={0.45}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-8"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-[#5C7088] uppercase mb-3">
                Launching In
              </p>
              <Countdown />
            </motion.div>

            {/* CTAs */}
            <motion.div
              custom={0.55}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3"
            >
              <a href="#join">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(6,38,77,0.25)' }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 bg-navy text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all text-sm"
                >
                  <Bell size={15} />
                  Notify Me
                </motion.button>
              </a>
              <a href="#features">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 border-2 border-navy/20 text-navy font-semibold px-6 py-3 rounded-full transition-all text-sm hover:border-navy/40 bg-white/50 backdrop-blur-sm"
                >
                  Explore Features
                  <ChevronDown size={15} />
                </motion.button>
              </a>
            </motion.div>
          </div>

          {/* Right — ship illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative"
          >
            <ShipScene />
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 md:-left-6 bg-white rounded-2xl shadow-card px-4 py-3 border border-[rgba(6,38,77,0.06)]"
            >
              <div className="text-xs text-[#5C7088] font-medium">Maritime Professionals</div>
              <div className="text-lg font-bold text-navy mt-0.5">50,000+</div>
              <div className="text-[10px] text-teal font-semibold">Awaiting Launch</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-4 -right-3 md:-right-4 bg-white rounded-2xl shadow-card px-4 py-3 border border-[rgba(6,38,77,0.06)]"
            >
              <div className="text-xs text-[#5C7088] font-medium">Global Coverage</div>
              <div className="text-lg font-bold text-navy mt-0.5">100+</div>
              <div className="text-[10px] text-ocean font-semibold">Countries</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest text-[#5C7088] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-[#5C7088]/30 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-[#5C7088]/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
