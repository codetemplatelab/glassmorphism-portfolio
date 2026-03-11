import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { fadeUp, hoverLift, stagger } from '../components/motion'
import { testimonials } from '../data/testimonials'

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-shell section-space scroll-mt-24">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by engineering and risk leaders."
          subtitle="Feedback from partners who needed security programs that move as fast as their product teams."
        />
      </motion.div>

      <motion.div
        className="mt-10 grid gap-6 lg:grid-cols-3"
        variants={stagger(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {testimonials.map((testimonial) => (
          <motion.div key={testimonial.name} variants={fadeUp} whileHover={hoverLift} className="glass-panel h-full">
            <p className="text-sm text-slate-200/80">“{testimonial.quote}”</p>
            <div className="mt-6">
              <p className="text-sm font-semibold text-white">{testimonial.name}</p>
              <p className="text-xs text-slate-300/70">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Testimonials
