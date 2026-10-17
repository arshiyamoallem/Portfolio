import type { ReactNode } from 'react'

type Props = {
  id: string
  title: string
  children: ReactNode
}

export default function Section({ id, title, children }: Props) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl px-6 py-20">
      <h2 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl">
        <span className="text-accent">/</span> {title}
      </h2>
      {children}
    </section>
  )
}