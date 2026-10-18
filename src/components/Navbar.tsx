import { useState } from 'react'
import { links } from '../data/links'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Blog', href: '#blog' },
  { label: 'Skills', href: '#skills' },
]

type Props = {
  onContactClick: () => void
}

export default function Navbar({ onContactClick }: Props) {
  const [open, setOpen] = useState(false)

return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#home" className="text-lg font-bold">
          AM<span className="text-accent">.</span>
        </a>

        {/* Desktop: page links */}
        <ul className="hidden items-center gap-6 text-sm text-muted lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition hover:text-text">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop: GitHub, LinkedIn, Resume, Contact */}
        <div className="hidden items-center gap-4 lg:flex">
          <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub"
             className="text-xl text-muted transition hover:text-text">
            <i className="devicon-github-original" />
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
             className="text-xl text-muted transition hover:text-text">
            <i className="devicon-linkedin-plain" />
          </a>
          <a href={links.resume} target="_blank" rel="noreferrer"
             className="rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-white transition hover:opacity-90">
            Resume
          </a>
          <button onClick={onContactClick}
                  className="rounded-full border border-border px-4 py-1.5 text-sm font-semibold transition hover:border-accent">
            Contact Me
          </button>
        </div>

        {/* Mobile: menu button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="text-2xl lg:hidden"
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile: dropdown menu */}
      {open && (
        <div className="border-t border-border bg-bg px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)} className="block text-muted hover:text-text">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <button onClick={() => { setOpen(false); onContactClick() }} className="text-muted hover:text-text">
                Contact Me
              </button>
            </li>
            <li className="flex items-center gap-5 pt-2">
              <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-xl"><i className="devicon-github-original" /></a>
              <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-xl"><i className="devicon-linkedin-plain" /></a>
              <a href={links.resume} target="_blank" rel="noreferrer" className="rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-white">Resume</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}