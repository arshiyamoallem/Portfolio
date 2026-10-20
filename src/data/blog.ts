import type { BlogPost } from './types'

export const blogPosts: BlogPost[] = [
  {
    title: 'Finishing the Docker Foundations Professional Certificate',
    img:'sample_img/Docker Foundations Professional Certificate.jpeg',
    date: 'July 5th, 2026',
    tag: 'Docker',
    excerpt:
      'What I learned about containers, images, Dockerfiles, volumes, and Docker Compose, and how I plan to use them in my own projects.',
      href: 'https://www.linkedin.com/learning/certificates/2218907b9f2ed2573f0de72718c9dec9797802d6094aba51ee82c5f807ae8760?trk=share_certificate'
  },
  {
    title: 'Digitizing workflows with Power Apps and Power Automate',
    img:'',
    date: 'Coming soon',
    tag: 'Automation',
    excerpt:
      'How I turned manual approval processes into client-facing apps and automated flows, with role-based access on SharePoint.',
  },
  {
    title: 'Designing a library management database',
    img:'',
    date: 'Coming soon',
    tag: 'Projects',
    excerpt:
      'A walkthrough of the schema, the SQLite queries, and the Tkinter interface behind my library management system.',
  },
]