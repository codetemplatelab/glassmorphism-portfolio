import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { fadeUp, hoverLift, stagger } from '../components/motion'
import { experience } from '../data/experience'

const Experience = () => {
  return (
    <section id="experience" className="section-shell section-space scroll-mt-24">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <SectionHeading
          eyebrow="Experience"
          title="Security leadership across cloud-native and regulated teams."
          subtitle="A track record of building resilient security programs, incident playbooks, and detection engineering at scale."
        />
      </motion.div>

      <motion.div
        className="mt-10 grid gap-6"
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {experience.map((role) => (
          <motion.div key={role.company} variants={fadeUp} whileHover={hoverLift} className="glass-panel">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-lg font-semibold text-white">{role.role}</p>
                <p className="text-sm text-cyan-200/80">{role.company}</p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/70">
                {role.period}
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-300/80">{role.summary}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Experience
