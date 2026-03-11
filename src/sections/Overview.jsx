import { motion } from 'framer-motion'
import { fadeUp, hoverLift, stagger } from '../components/motion'
import { iconMap } from '../components/iconMap'
import { overviewCards } from '../data/overview'

const Overview = () => {
  return (
    <section id="overview" className="section-shell section-space scroll-mt-24">
      <motion.div
        className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={fadeUp} className="glass-panel h-full">
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/70">Security System</p>
          <h2 className="mt-4 text-3xl font-display text-white sm:text-4xl">
            A glassmorphism control room for security leaders.
          </h2>
          <p className="mt-4 text-base text-slate-300/80">
            This layout is intentionally different: a bento grid of operational insights that feels like a command
            center, not a classic portfolio.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {overviewCards.slice(0, 2).map((card) => {
              const Icon = iconMap[card.icon]
              return (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  whileHover={hoverLift}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex items-center gap-3 text-slate-200">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-200">
                      <Icon size={18} />
                    </span>
                    <p className="text-sm font-semibold text-white">{card.title}</p>
                  </div>
                  {card.description ? (
                    <p className="mt-3 text-sm text-slate-300/80">{card.description}</p>
                  ) : (
                    <ul className="mt-3 space-y-2 text-sm text-slate-300/80">
                      {card.items?.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-200/70" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="glass-panel h-full">
          <div className="grid gap-4">
            {overviewCards.slice(2).map((card) => {
              const Icon = iconMap[card.icon]
              return (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  whileHover={hoverLift}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex items-center gap-3 text-slate-200">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-200">
                      <Icon size={18} />
                    </span>
                    <p className="text-sm font-semibold text-white">{card.title}</p>
                  </div>
                  {card.kpis ? (
                    <div className="mt-4 grid gap-3">
                      {card.kpis.map((kpi) => (
                        <div key={kpi.label} className="rounded-xl border border-white/10 bg-white/5 p-3">
                          <p className="text-xs uppercase tracking-[0.3em] text-slate-400/70">{kpi.label}</p>
                          <p className="mt-2 text-xl font-semibold text-white">{kpi.value}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="mt-3 space-y-2 text-sm text-slate-300/80">
                      {card.items?.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-200/70" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Overview
