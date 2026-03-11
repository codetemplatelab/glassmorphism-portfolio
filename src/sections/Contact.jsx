import { Mail, MapPin, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { fadeUp, hoverLift, stagger } from '../components/motion'
import { profile } from '../data/profile'

const Contact = () => {
  return (
    <section id="contact" className="section-shell section-space scroll-mt-24">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <SectionHeading
          eyebrow="Contact"
          title="Ready to upgrade your security posture?"
          subtitle="Share your goals and I will respond with a tailored audit plan, risk priorities, and recommended next steps."
        />
      </motion.div>

      <motion.div
        className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
        variants={stagger(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={fadeUp} className="glass-panel space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-300/70">Location</p>
            <div className="mt-3 flex items-center gap-3 text-slate-200">
              <MapPin size={16} />
              <span>{profile.location}</span>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-300/70">Email</p>
            <div className="mt-3 flex items-center gap-3 text-slate-200">
              <Mail size={16} />
              <span>{profile.email}</span>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-300/70">Availability</p>
            <div className="mt-3 flex items-center gap-3 text-slate-200">
              <Phone size={16} />
              <span>{profile.availability}</span>
            </div>
          </div>
        </motion.div>

        <motion.form variants={fadeUp} whileHover={hoverLift} className="glass-panel space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-slate-300/70">Name</label>
              <input
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400/70 focus:border-cyan-200/50 focus:outline-none"
                placeholder="Your name"
                type="text"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-slate-300/70">Email</label>
              <input
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400/70 focus:border-cyan-200/50 focus:outline-none"
                placeholder="you@company.com"
                type="email"
              />
            </div>
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.3em] text-slate-300/70">Company</label>
            <input
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400/70 focus:border-cyan-200/50 focus:outline-none"
              placeholder="Company or team"
              type="text"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.3em] text-slate-300/70">What do you need?</label>
            <textarea
              className="mt-2 min-h-[140px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400/70 focus:border-cyan-200/50 focus:outline-none"
              placeholder="Share your security goals, architecture, or risk concerns."
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full border border-cyan-200/40 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-200/80"
          >
            Send request
          </button>
        </motion.form>
      </motion.div>
    </section>
  )
}

export default Contact
