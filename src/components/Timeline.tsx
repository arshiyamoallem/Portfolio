import type { TimelineEntry } from '../data/types'

type Props = {
  entries: TimelineEntry[]
}

export default function Timeline({ entries }: Props) {
  return (
    <ol className="relative ml-3 border-l border-border">
      {entries.map((entry) => (
        <li key={entry.title + entry.dates} className="relative mb-10 ml-8 last:mb-0">
          <span className="absolute -left-9.5 top-2 h-3 w-3 rounded-full bg-accent ring-4 ring-bg" />
          <div className="rounded-xl border border-border bg-surface p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">{entry.dates}</p>
            <h3 className="mt-1 text-lg font-semibold">{entry.title}</h3>
            <p className="text-sm text-muted">{entry.organization}</p>

            {entry.note && <p className="mt-3 text-sm text-muted">{entry.note}</p>}

            {entry.bullets && (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-accent">
                {entry.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}