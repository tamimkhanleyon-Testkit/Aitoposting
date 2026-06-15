'use client'
import { motion } from 'framer-motion'
import { CheckCircle2, Star, Smartphone, Lock, RefreshCw } from 'lucide-react'

const reasons = [
  {
    icon: CheckCircle2,
    title: 'Reliable Information',
    description: 'Every piece of content is verified against authoritative maritime sources — IMO, flag states, classification societies, and industry bodies.',
    color: '#0F5FAF',
  },
  {
    icon: Star,
    title: 'Expert Curated',
    description: 'Content curated by maritime professionals who understand the complexity of life at sea and the urgency of accurate information.',
    color: '#12C7C0',
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Designed for shipboard use — optimised for limited bandwidth, offline access, and one-handed navigation in demanding conditions.',
    color: '#06264D',
  },
  {
    icon: Lock,
    title: 'Secure & Private',
    description: 'Your professional data and activity stays private. Enterprise-grade security designed for the maritime industry\'s standards.',
    color: '#0F5FAF',
  },
  {
    icon: RefreshCw,
    title: 'Always Up To Date',
    description: 'Regulatory changes, safety alerts, and maritime news are updated continuously — never rely on outdated information again.',
    color: '#12C7C0',
  },
]

export default function WhySection() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-sea-blue rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold tracking-[0.18em] text-ocean uppercase">
              Our Promise
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy tracking-tight mb-4">
            Why <span className="gradient-text">HeyMariner?</span>
          </h2>
          <p className="text-[#5C7088] text-lg max-w-2xl mx-auto">
            Built by people who understand maritime — designed for those who live it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group relative flex flex-col gap-4 p-7 rounded-[24px] border border-[rgba(6,38,77,0.06)] bg-white shadow-card hover:shadow-card-hover transition-all cursor-default ${
                  i === 2 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Icon circle */}
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-2xl"
                  style={{ background: `${r.color}15` }}
                >
                  <Icon size={22} style={{ color: r.color }} strokeWidth={1.8} />
                </motion.div>

                <div>
                  <h3 className="font-bold text-navy text-base mb-2 tracking-tight">{r.title}</h3>
                  <p className="text-[#5C7088] text-sm leading-relaxed">{r.description}</p>
                </div>

                {/* Hover accent */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${r.color}, transparent)` }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
