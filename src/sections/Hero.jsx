import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp, hoverLift, stagger } from '../components/motion'
import { profile } from '../data/profile'

const Hero = () => {
  return (
    <section id="home" className="section-shell section-space scroll-mt-24">
      <motion.div
        className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]"
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={fadeUp} className="glass-panel">
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/70">Glassmorphism Portfolio</p>
          <h1 className="mt-4 text-4xl font-display text-white sm:text-5xl">
            {profile.name}
            <span className="block text-cyan-200">{profile.role}</span>
          </h1>
          <p className="mt-5 text-lg text-slate-200/80">{profile.headline}</p>
          <p className="mt-4 text-sm text-slate-300/80">{profile.intro}</p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-200/40 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:border-cyan-200/70"
            >
              View case studies
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Start a security review
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-xs text-slate-300/70">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{profile.location}</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{profile.availability}</span>
          </div>
        </motion.div>

        <motion.div className="grid gap-4 sm:grid-cols-2" variants={stagger(0.15)}>
          <motion.div variants={fadeUp} whileHover={hoverLift} className="glass-panel sm:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-cyan-200">
                <ShieldCheck size={20} />
              </span>
              <div>
                <p className="text-sm text-slate-300">Security Pulse</p>
                <p className="text-xl font-semibold text-white">Quarterly Risk Report</p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} whileHover={hoverLift} className="glass-panel">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-300/70">Critical alerts</p>
            <p className="mt-2 text-3xl font-semibold text-white">12</p>
            <p className="mt-1 text-sm text-slate-300/70">Down 38% QoQ</p>
          </motion.div>
          <motion.div variants={fadeUp} whileHover={hoverLift} className="glass-panel">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-300/70">Response time</p>
            <p className="mt-2 text-3xl font-semibold text-white">19m</p>
            <p className="mt-1 text-sm text-slate-300/70">Mean triage</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
