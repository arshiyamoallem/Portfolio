import type { Project } from '../data/types'

const icons: Record<string, string> = {
  database: '🗄️',
  users: '👥',
  gamepad: '🎮',
}

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <article className="flex flex-col rounded-xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-accent">
      <div className="mb-4 text-3xl">{icons[project.icon]}</div>
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag} className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
            {tag}
          </li>
        ))}
      </ul>

      <a href={project.href} target="_blank" rel="noreferrer"
         className="mt-5 text-sm font-semibold text-accent hover:underline">
        View on GitHub →
      </a>
    </article>
  )
}