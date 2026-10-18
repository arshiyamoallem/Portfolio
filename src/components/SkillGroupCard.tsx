import type { SkillGroup } from '../data/types'

type Props = {
  group: SkillGroup
}

export default function SkillGroupCard({ group }: Props) {
  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <h3 className="mb-4 text-lg font-semibold">{group.title}</h3>
      <ul className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <li
            key={skill.name}
            className="flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm text-muted transition hover:border-accent hover:text-text"
          >
            {skill.icon && <i className={`${skill.icon} text-base`} />}
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  )
}