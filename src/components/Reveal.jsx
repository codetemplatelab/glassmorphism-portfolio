import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

const Reveal = ({ children, delay = 0, y = 24 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y, scale: 0.98, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
