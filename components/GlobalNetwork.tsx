'use client'
import { motion } from 'framer-motion'
import AnimatedCounter from './AnimatedCounter'

const stats = [
  { value: 100, suffix: '+', label: 'Countries' },
  { value: 10000, suffix: '+', label: 'Mariners', prefix: '' },
  { value: 500, suffix: '+', label: 'Resources' },
  { value: 24, suffix: '/7', label: 'Support' },
]

// Simplified world map continent paths (equirectangular projection)
const CONTINENTS = [
  // North America
  'M 160,80 L 185,70 L 200,80 L 215,75 L 210,90 L 215,105 L 205,120 L 195,130 L 185,145 L 175,140 L 165,130 L 160,115 L 150,110 L 148,95 Z',
  // South America
  'M 175,150 L 188,148 L 195,160 L 200,175 L 198,195 L 190,215 L 180,225 L 170,215 L 165,195 L 163,175 L 168,160 Z',
  // Europe
  'M 278,65 L 295,58 L 308,65 L 315,72 L 310,82 L 300,88 L 288,85 L 280,78 Z',
  // Africa
  'M 282,100 L 300,96 L 318,100 L 325,115 L 328,135 L 322,155 L 310,170 L 295,175 L 280,168 L 270,150 L 268,130 L 272,112 Z',
  // Asia
  'M 320,60 L 360,50 L 400,55 L 430,65 L 445,78 L 440,92 L 420,100 L 400,108 L 380,105 L 355,100 L 335,95 L 318,85 L 315,72 Z',
  // Australia
  'M 390,160 L 420,155 L 440,162 L 448,178 L 442,195 L 425,200 L 405,198 L 392,185 L 388,172 Z',
  // Greenland
  'M 195,40 L 212,36 L 222,42 L 220,52 L 208,56 L 197,52 Z',
]

// Port dots [x, y]
const PORTS: [number, number][] = [
  [162, 100], [185, 100], [290, 72], [290, 110], [300, 130],
  [340, 80], [380, 88], [410, 78], [408, 162], [430, 178],
  [180, 155], [175, 195], [298, 72],
]

// Route connections [port index pairs]
const ROUTES: [number, number][] = [
  [0, 2], [2, 4], [4, 5], [1, 6], [3, 8], [7, 5],
  [2, 3], [4, 7], [9, 7], [6, 10],
]

function WorldMap() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <svg
        viewBox="0 0 600 260"
        className="w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Global maritime network map"
      >
        {/* Ocean background */}
        <rect width="600" height="260" fill="rgba(15,95,175,0.08)" rx="16" />

        {/* Grid lines */}
        {[0, 65, 130, 195].map((y) => (
          <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        ))}
        {[0, 100, 200, 300, 400, 500, 600].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="260" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        ))}

        {/* Continents */}
        {CONTINENTS.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="rgba(84,215,255,0.15)"
            stroke="rgba(84,215,255,0.25)"
            strokeWidth="0.8"
          />
        ))}

        {/* Animated routes */}
        {ROUTES.map(([a, b], i) => {
          const [x1, y1] = PORTS[a]
          const [x2, y2] = PORTS[b]
          const mx = (x1 + x2) / 2
          const my = Math.min(y1, y2) - 30
          return (
            <g key={i}>
              <path
                d={`M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`}
                fill="none"
                stroke="rgba(84,215,255,0.12)"
                strokeWidth="1"
              />
              <path
                d={`M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`}
                fill="none"
                stroke="#54D7FF"
                strokeWidth="1.5"
                strokeDasharray="8 6"
                strokeDashoffset="200"
                opacity="0"
                style={{
                  animation: `routeDash ${3 + i * 0.4}s ease-in-out infinite`,
                  animationDelay: `${i * 0.6}s`,
                }}
              />
            </g>
          )
        })}

        {/* Port dots */}
        {PORTS.map(([x, y], i) => (
          <g key={i}>
            <circle
              cx={x}
              cy={y}
              r="5"
              fill="rgba(18,199,192,0.15)"
              style={{ animation: `dotPulse ${2 + (i % 3) * 0.5}s ease-in-out infinite`, animationDelay: `${i * 0.3}s` }}
            />
            <circle cx={x} cy={y} r="2.5" fill="#12C7C0" opacity="0.9" />
            <circle cx={x} cy={y} r="1.2" fill="white" />
          </g>
        ))}
      </svg>
    </div>
  )
}

export default function GlobalNetwork() {
  return (
    <section id="network" className="bg-navy py-20 lg:py-28 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ocean/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-4">
            <div className="w-2 h-2 bg-teal rounded-full animate-pulse" />
            <span className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
              Global Reach
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            One Global
            <span className="gradient-text-teal block">Community</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
            Connecting maritime professionals around the world — from every flag state,
            every rank, and every ocean.
          </p>
        </motion.div>

        {/* World map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <WorldMap />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-6 text-center backdrop-blur-sm hover:bg-white/8 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-sm text-white/50 font-medium tracking-wide">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
