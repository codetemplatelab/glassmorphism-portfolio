import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'

const Footer = () => {
  return (
    <footer className="section-shell pb-12 pt-6">
      <div className="flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-6 text-sm text-slate-300 sm:flex-row sm:items-center">
        <div>
          <p className="text-white">{profile.name}</p>
          <p className="text-xs text-slate-400/70">{profile.footerNote}</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://linkedin.com" className="text-slate-300 hover:text-white" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com" className="text-slate-300 hover:text-white" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={`mailto:${profile.email}`} className="text-slate-300 hover:text-white" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
