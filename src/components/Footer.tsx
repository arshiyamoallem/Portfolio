import { links } from '../data/links'

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Arshiya Moallem. All rights reserved.</p>

        <div className="flex items-center gap-5 text-xl">
          <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-text">
            <i className="devicon-github-original" />
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-text">
            <i className="devicon-linkedin-plain" />
          </a>
          <a href={links.resume} target="_blank" rel="noreferrer" className="text-sm font-semibold transition hover:text-text">
            Resume
          </a>
        </div>
      </div>
    </footer>
  )
}