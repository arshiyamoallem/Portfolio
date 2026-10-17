export type Project = {
  title: string
  description: string
  tags: string[]
  href: string
  icon: string // Font Awesome-style name, used later
}

export type TimelineEntry = {
  title: string
  organization: string
  dates: string
  bullets?: string[]
  note?: string
}

export type Skill = {
  name: string
  icon?: string // Devicon class, optional
}

export type SkillGroup = {
  title: string
  skills: Skill[]
}

export type BlogPost = {
  title: string
  date: string
  tag: string
  excerpt: string
  href?: string
}