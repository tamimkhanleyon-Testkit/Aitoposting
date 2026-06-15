import { Facebook, Linkedin, Twitter, Youtube, Anchor } from 'lucide-react'

const links = {
  Platform: ['Home', 'About', 'Features', 'Community'],
  Resources: ['Maritime News', 'Safety Center', 'Learning Academy', 'Regulations'],
  Contact: ['Contact Us', 'Privacy Policy', 'Terms & Conditions', 'Cookie Policy'],
}

const socials = [
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  { Icon: Twitter, href: '#', label: 'X / Twitter' },
  { Icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-1 mb-4">
              <span className="font-bold text-xl tracking-tight">Hey</span>
              <Anchor className="w-5 h-5 text-teal" strokeWidth={2.5} />
              <span className="font-bold text-xl tracking-tight">Mariner</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              A new generation maritime intelligence platform for seafarers, cadets, officers,
              and industry professionals worldwide.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-white/8 rounded-full flex items-center justify-center border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase mb-5">
                {group}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-white/55 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="mt-12 pt-8 border-t border-white/8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap gap-6 text-sm text-white/40">
              <span>🌐 heymariner.com</span>
              <span>📧 contact@heymariner.com</span>
            </div>
            <p className="text-xs text-white/25">
              © {new Date().getFullYear()} HeyMariner. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-teal to-transparent opacity-30" />
    </footer>
  )
}
