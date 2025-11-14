import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-32 lg:pt-40">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900"
        >
          Hi, I’m <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Your Name</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 max-w-2xl text-lg text-gray-600"
        >
          Full‑stack developer crafting delightful web experiences. I blend design, engineering, and a love for motion to build modern products.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a href="#projects" className="inline-flex items-center rounded-full bg-gray-900 px-6 py-3 text-white text-sm font-semibold hover:opacity-90 transition">View Projects</a>
          <a href="#contact" className="inline-flex items-center rounded-full bg-white/80 backdrop-blur px-6 py-3 text-gray-900 text-sm font-semibold ring-1 ring-black/10 hover:bg-white transition">Contact Me</a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
