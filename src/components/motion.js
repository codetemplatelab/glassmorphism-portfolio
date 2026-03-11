export const easeOut = [0.16, 1, 0.3, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 24, scale: 0.98, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: easeOut },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: easeOut } },
}

export const stagger = (delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: delay } },
})

export const hoverLift = {
  y: -8,
  scale: 1.01,
  transition: { type: 'spring', stiffness: 220, damping: 18 },
}
