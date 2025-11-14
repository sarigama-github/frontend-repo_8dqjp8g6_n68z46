import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Experience, Education, Projects, Testimonials, Contact, Footer } from './components/Sections'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  return <motion.div style={{ scaleX }} className="fixed left-0 right-0 top-0 h-1 origin-left bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-50" />
}

export default function App() {
  React.useEffect(() => {
    // Smooth scroll behavior for anchor links
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href').slice(1)
      const el = document.getElementById(id)
      if (el) {
        e.preventDefault()
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <div className="relative min-h-screen bg-white text-gray-900">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <main className="relative">
        <About />
        <Experience />
        <Education />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
