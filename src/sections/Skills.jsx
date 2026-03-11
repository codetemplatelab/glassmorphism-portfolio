import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { iconMap } from '../components/iconMap'
import { fadeUp, hoverLift, stagger } from '../components/motion'
import { skillGroups } from '../data/skills'

const Skills = () => {
  return (
    <section id="skills" className="section-shell section-space scroll-mt-24">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <SectionHeading
          eyebrow="Skill Matrix"
          title="Security disciplines that ship with every engagement."
          subtitle="From detection engineering to cloud governance, each capability is designed to reduce risk without slowing delivery."
        />
      </motion.div>

      <motion.div
        className="mt-10 grid gap-6 lg:grid-cols-3"
        variants={stagger(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skillGroups.map((group) => (
          <motion.div key={group.title} variants={fadeUp} whileHover={hoverLift} className="glass-panel h-full">
            <p className="text-lg font-semibold text-white">{group.title}</p>
            <p className="mt-2 text-sm text-slate-300/70">{group.description}</p>
            <div className="mt-6 grid gap-4">
              {group.items.map((item) => {
                const Icon = iconMap[item.icon]
                return (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-200">
                      <Icon size={18} />
                    </span>
                    <span className="text-sm text-slate-200/90">{item.name}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills
