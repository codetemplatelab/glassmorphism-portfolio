import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { fadeUp, hoverLift, stagger } from '../components/motion'
import { projects } from '../data/projects'

const Projects = () => {
  return (
    <section id="projects" className="section-shell section-space scroll-mt-24">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <SectionHeading
          eyebrow="Projects"
          title="Cybersecurity systems engineered for real-world pressure."
          subtitle="Each engagement pairs strategic security architecture with hands-on implementation across cloud, identity, and detection layers."
        />
      </motion.div>

      <motion.div
        className="mt-10 grid gap-6 lg:grid-cols-2"
        variants={stagger(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={fadeUp} whileHover={hoverLift} className="glass-panel group flex h-full flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm text-slate-300/80">{project.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a
                href={project.github}
                className="inline-flex items-center gap-2 text-slate-200 transition group-hover:text-white"
              >
                GitHub
                <ArrowUpRight size={14} />
              </a>
              <a
                href={project.demo}
                className="inline-flex items-center gap-2 text-cyan-200 transition group-hover:text-white"
              >
                Live demo
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Projects
