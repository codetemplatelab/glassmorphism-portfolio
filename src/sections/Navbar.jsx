import { useState } from 'react'
import { Menu, Shield, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { profile } from '../data/profile'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      className="sticky top-0 z-50"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-shell">
        <div className="mt-6 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl shadow-glass">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-200">
              <Shield size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">{profile.name}</p>
              <p className="text-xs text-slate-300/80">{profile.role}</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-200 lg:flex">
            {profile.nav.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#contact"
              className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:border-cyan-200/40 hover:bg-cyan-400/10"
            >
              Book a security audit
            </a>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="section-shell lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-glass">
              <div className="flex flex-col gap-4 text-sm text-slate-200">
                {profile.nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="transition hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white"
                onClick={() => setOpen(false)}
              >
                Book a security audit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
