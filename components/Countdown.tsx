'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(): TimeLeft {
  const target = new Date('2026-03-01T00:00:00Z').getTime()
  const diff = Math.max(target - Date.now(), 0)
  return {
    days: Math.floor(diff / 864e5),
    hours: Math.floor((diff % 864e5) / 36e5),
    minutes: Math.floor((diff % 36e5) / 6e4),
    seconds: Math.floor((diff % 6e4) / 1e3),
  }
}

function Digit({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, '0')
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-2xl shadow-card border border-[rgba(6,38,77,0.06)] px-3 py-2 sm:px-4 sm:py-3 min-w-[52px] sm:min-w-[64px] text-center relative overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={display}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="block font-bold text-2xl sm:text-3xl text-navy tabular-nums"
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-[10px] sm:text-xs text-[#5C7088] font-medium mt-1.5 tracking-widest uppercase">
        {label}
      </span>
    </div>
  )
}

export default function Countdown() {
  const [time, setTime] = useState<TimeLeft>(getTimeLeft())

  useEffect(() => {
    const t = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="flex items-start gap-2 sm:gap-3">
      <Digit value={time.days} label="Days" />
      <span className="text-3xl font-light text-[#5C7088] mt-2">:</span>
      <Digit value={time.hours} label="Hours" />
      <span className="text-3xl font-light text-[#5C7088] mt-2">:</span>
      <Digit value={time.minutes} label="Mins" />
      <span className="text-3xl font-light text-[#5C7088] mt-2">:</span>
      <Digit value={time.seconds} label="Secs" />
    </div>
  )
}
