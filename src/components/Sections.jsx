import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Code2, MessageSquareQuote } from 'lucide-react'

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay }}
    viewport={{ once: true, margin: '0px 0px -100px 0px' }}
  >
    {children}
  </motion.div>
)

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About Me</h2>
          <p className="mt-6 text-gray-600 max-w-3xl leading-relaxed">
            I’m a developer focused on building accessible, human-centered products with a strong eye for motion and polish. I love TypeScript, React, and modern backend tooling. Outside of work, you’ll find me tinkering with 3D, design systems, and generative visuals.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

export function Experience() {
  const items = [
    { role: 'Senior Frontend Engineer', company: 'Tech Corp', time: '2022 — Present', points: ['Led redesign increasing conversion by 18%', 'Built motion system with Framer Motion', 'Mentored team on accessibility'] },
    { role: 'Full‑stack Developer', company: 'Startup Labs', time: '2020 — 2022', points: ['Shipped MVP in 6 weeks', 'Set up CI/CD and testing infra', 'Integrated payments and analytics'] },
  ]
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-indigo-600" />
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Experience</h2>
          </div>
        </FadeIn>
        <div className="mt-10 grid gap-6">
          {items.map((job, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold">{job.role} · <span className="text-gray-600">{job.company}</span></p>
                  </div>
                  <span className="text-sm text-gray-500">{job.time}</span>
                </div>
                <ul className="mt-4 list-disc pl-5 text-gray-600 space-y-1">
                  {job.points.map((p, idx) => <li key={idx}>{p}</li>)}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Education() {
  const items = [
    { degree: 'B.Sc. Computer Science', school: 'State University', time: '2016 — 2020' },
  ]
  return (
    <section id="education" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-indigo-600" />
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Education</h2>
          </div>
        </FadeIn>
        <div className="mt-10 grid gap-6">
          {items.map((ed, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6">
                <p className="text-lg font-semibold">{ed.degree}</p>
                <div className="mt-1 text-gray-600">{ed.school}</div>
                <div className="text-sm text-gray-500">{ed.time}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  const items = [
    { title: 'Motion‑first Design System', desc: 'A component library with fluid motion primitives.', tags: ['React', 'Framer Motion', 'Storybook'] },
    { title: 'Realtime Collaboration Doc', desc: 'CRDT powered collaborative editor.', tags: ['TypeScript', 'WebSocket', 'Yjs'] },
    { title: '3D Portfolio', desc: 'Interactive portfolio with Spline + WebGL.', tags: ['Spline', 'Three.js', 'Vite'] },
  ]
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="flex items-center gap-3">
            <Code2 className="h-6 w-6 text-indigo-600" />
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Projects</h2>
          </div>
        </FadeIn>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="group rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6 transition hover:shadow-lg hover:-translate-y-0.5">
                <p className="text-lg font-semibold">{p.title}</p>
                <p className="mt-2 text-gray-600">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t, idx) => (
                    <span key={idx} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">{t}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  const items = [
    { quote: 'Delivers pixel‑perfect features with delightful motion.', name: 'Alex J.', role: 'Design Lead' },
    { quote: 'Thinks end‑to‑end and ships fast.', name: 'Priya S.', role: 'PM' },
    { quote: 'Great collaborator who elevates teams.', name: 'Marco T.', role: 'CTO' },
  ]
  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="flex items-center gap-3">
            <MessageSquareQuote className="h-6 w-6 text-indigo-600" />
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Testimonials</h2>
          </div>
        </FadeIn>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <figure className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6">
                <blockquote className="text-gray-700 leading-relaxed">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm text-gray-500">
                  — {t.name}, {t.role}
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  const [status, setStatus] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      subject: form.get('subject'),
      message: form.get('message'),
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('Thanks! Your message has been sent.')
        e.currentTarget.reset()
      } else {
        setStatus(data.detail || 'Something went wrong. Please try again later.')
      }
    } catch (err) {
      setStatus('Network error. Try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Contact</h2>
          <p className="mt-6 text-gray-600 max-w-3xl">Have a project in mind or just want to say hello? Let’s chat.</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <form onSubmit={handleSubmit} className="mt-10 grid gap-4 sm:grid-cols-2">
            <input name="name" placeholder="Name" required className="rounded-xl border border-gray-200 bg-white/70 backdrop-blur px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input name="email" type="email" placeholder="Email" required className="rounded-xl border border-gray-200 bg-white/70 backdrop-blur px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input name="subject" placeholder="Subject" required className="sm:col-span-2 rounded-xl border border-gray-200 bg-white/70 backdrop-blur px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <textarea name="message" placeholder="Message" rows="5" required className="sm:col-span-2 rounded-xl border border-gray-200 bg-white/70 backdrop-blur px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
            <div className="sm:col-span-2 flex items-center gap-4">
              <button disabled={loading} className="rounded-full bg-gray-900 text-white px-6 py-3 font-semibold hover:opacity-90 disabled:opacity-50">{loading ? 'Sending…' : 'Send message'}</button>
              <p className="text-sm text-gray-600">{status}</p>
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="py-10 border-t border-gray-200 text-center text-sm text-gray-600">
      <div className="mx-auto max-w-6xl px-6">
        © {new Date().getFullYear()} Your Name — Built with love, React, and a sprinkle of 3D.
      </div>
    </footer>
  )
}
