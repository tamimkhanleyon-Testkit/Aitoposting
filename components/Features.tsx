'use client'
import { motion } from 'framer-motion'
import { Newspaper, Shield, BookOpen, FileText, Bot, Users } from 'lucide-react'

const features = [
  {
    icon: Newspaper,
    title: 'Maritime News',
    description: 'Real-time global shipping news, port updates, maritime incidents, and industry developments curated daily by specialists.',
    color: 'from-blue-500 to-ocean',
    bg: 'bg-blue-50',
    iconBg: 'bg-blue-100',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Near-miss reports, accident analysis, safety bulletins, and best-practice alerts from international maritime authorities.',
    color: 'from-emerald-500 to-teal',
    bg: 'bg-emerald-50',
    iconBg: 'bg-emerald-100',
  },
  {
    icon: BookOpen,
    title: 'Learning Hub',
    description: 'Structured resources covering COLREGs, ECDIS, Radar, BRM, Cargo Ops, Ship Stability, GMDSS, and Marine Engineering.',
    color: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50',
    iconBg: 'bg-violet-100',
  },
  {
    icon: FileText,
    title: 'Regulations',
    description: 'Latest updates from IMO, ILO, ICS, BIMCO, flag states and port authorities — simplified and always current.',
    color: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50',
    iconBg: 'bg-amber-100',
  },
  {
    icon: Bot,
    title: 'AI Assistant',
    description: 'An intelligent maritime AI trained on regulations, procedures, and technical knowledge — available 24/7 on any device.',
    color: 'from-teal to-[#54D7FF]',
    bg: 'bg-teal-50',
    iconBg: 'bg-teal-100',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'A global professional network connecting seafarers, cadets, officers, engineers, and maritime professionals worldwide.',
    color: 'from-rose-500 to-pink-500',
    bg: 'bg-rose-50',
    iconBg: 'bg-rose-100',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-sea-blue rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold tracking-[0.18em] text-ocean uppercase">
              Built For Mariners
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy tracking-tight mb-4">
            Everything You Need
            <span className="gradient-text block">In One Place</span>
          </h2>
          <p className="text-[#5C7088] text-lg max-w-2xl mx-auto leading-relaxed">
            HeyMariner brings maritime knowledge, safety, regulations, and AI together
            into one intelligent platform designed for life at sea.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                variants={cardVariant}
                whileHover={{
                  y: -8,
                  boxShadow: '0 24px 60px rgba(6,38,77,0.14)',
                  transition: { duration: 0.25 },
                }}
                className="group bg-white rounded-[28px] p-7 border border-[rgba(6,38,77,0.06)] shadow-card cursor-default relative overflow-hidden"
              >
                {/* Hover glow */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[28px] bg-gradient-to-br ${f.color} opacity-0`} style={{ opacity: 0 }} />
                <div className={`absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 blur-xl`} />

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 ${f.iconBg} rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 bg-gradient-to-br ${f.color} bg-clip-text`} strokeWidth={1.8}
                    style={{ stroke: 'url(#grad-' + f.title.replace(/\s/g, '') + ')' }}
                  />
                  <svg width="0" height="0" className="absolute">
                    <defs>
                      <linearGradient id={'grad-' + f.title.replace(/\s/g, '')} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={f.color.split(' ')[0].replace('from-', '').includes('-') ? undefined : f.color.split(' ')[0].replace('from-', '')} />
                      </linearGradient>
                    </defs>
                  </svg>
                  <Icon className={`w-7 h-7 absolute text-ocean`} strokeWidth={1.8} />
                </div>

                <h3 className="text-lg font-bold text-navy mb-3 tracking-tight">
                  {f.title}
                </h3>
                <p className="text-[#5C7088] text-sm leading-relaxed">
                  {f.description}
                </p>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r ${f.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
