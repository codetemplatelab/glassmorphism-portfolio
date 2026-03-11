import { MotionConfig } from 'framer-motion'
import About from './sections/About'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import Overview from './sections/Overview'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Testimonials from './sections/Testimonials'

const App = () => {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen overflow-hidden bg-midnight text-white">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="orb orb-cyan" />
          <div className="orb orb-violet" />
          <div className="orb orb-slate" />
          <div className="grid-overlay" />
        </div>

        <Navbar />
        <main>
          <Hero />
          <Overview />
          <Projects />
          <About />
          <Skills />
          <Experience />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App
