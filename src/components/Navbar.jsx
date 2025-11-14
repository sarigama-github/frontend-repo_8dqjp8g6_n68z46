import React from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/20 bg-white/60 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-white/50">
          <a href="#home" className="font-semibold">Dev.Portfolio</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-gray-700 hover:text-gray-900">{l.label}</a>
            ))}
          </nav>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
        {open && (
          <div className="mt-2 rounded-2xl border border-white/20 bg-white/80 p-4 backdrop-blur md:hidden">
            <nav className="grid gap-2 text-sm">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-gray-700" onClick={() => setOpen(false)}>{l.label}</a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
