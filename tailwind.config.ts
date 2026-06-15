import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#06264D',
          light: '#0D3A70',
          dark: '#041A38',
        },
        ocean: '#0F5FAF',
        teal: {
          DEFAULT: '#12C7C0',
          light: '#54D7FF',
        },
        'off-white': '#F7FAFC',
        'sea-blue': '#EDF6FB',
      },
      fontFamily: {
        sans: ['var(--font-inter-tight)', 'Inter', 'sans-serif'],
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'wave-slow': 'wave 10s linear infinite',
        'wave-fast': 'wave 7s linear infinite',
        'bird-fly': 'birdFly 8s ease-in-out infinite',
        'route-pulse': 'routePulse 2s ease-in-out infinite',
        'cursor-glow': 'cursorGlow 3s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-16px) rotate(0.5deg)' },
        },
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        birdFly: {
          '0%, 100%': { transform: 'translate(0, 0) scaleX(1)' },
          '50%': { transform: 'translate(20px, -8px) scaleX(1)' },
        },
        routePulse: {
          '0%': { strokeDashoffset: '100', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { strokeDashoffset: '0', opacity: '0' },
        },
        cursorGlow: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.3)', opacity: '1' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #F7FAFC 0%, #EDF6FB 50%, #DBEEFF 100%)',
        'ocean-gradient': 'linear-gradient(180deg, #0F5FAF 0%, #06264D 100%)',
        'teal-gradient': 'linear-gradient(135deg, #12C7C0 0%, #0F5FAF 100%)',
      },
      boxShadow: {
        card: '0 4px 24px rgba(6,38,77,0.08)',
        'card-hover': '0 16px 48px rgba(6,38,77,0.16)',
        glow: '0 0 24px rgba(18,199,192,0.3)',
        'glow-blue': '0 0 32px rgba(84,215,255,0.25)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

export default config
