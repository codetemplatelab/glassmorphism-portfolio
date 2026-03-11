const SectionHeading = ({ eyebrow, title, subtitle }) => {
  return (
    <div className="max-w-2xl">
      <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/70">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-display text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base text-slate-200/70">{subtitle}</p>
    </div>
  )
}

export default SectionHeading
