import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { fadeUp, hoverLift, stagger } from '../components/motion'
import { profile } from '../data/profile'

const About = () => {
  return (
    <section id="about" className="section-shell section-space scroll-mt-24">
      <motion.div
        className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={fadeUp} className="glass-panel">
          <SectionHeading
            eyebrow="About"
            title={profile.about.title}
            subtitle={profile.about.description}
          />
        </motion.div>
        <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-2">
          {profile.about.highlights.map((item) => (
            <motion.div key={item} variants={fadeUp} whileHover={hoverLift} className="glass-panel h-full text-slate-200/80">
              {item}
            </motion.div>
          ))}
          <motion.div variants={fadeUp} whileHover={hoverLift} className="glass-panel sm:col-span-2">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-300/70">Availability</p>
            <p className="mt-2 text-lg text-white">{profile.availability}</p>
            <p className="mt-2 text-sm text-slate-300/70">Preferred engagement: security audits and response retainers.</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
