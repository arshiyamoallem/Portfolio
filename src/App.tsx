import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import { projects } from './data/projects'
import { experience } from './data/experience'
import { education } from './data/education'
import { skillGroups } from './data/skills'
import { blogPosts } from './data/blog'

export default function App() {
  // Placeholder until the contact modal exists (Phase 4)
  const openContact = () => alert('Contact form coming in Phase 4')

  return (
    <>
      <Navbar onContactClick={openContact} />
      <main>
        <Hero onContactClick={openContact} />
        <Section id="projects" title="Projects">
          <p className="text-muted">{projects.length} projects loaded</p>
        </Section>
        <Section id="experience" title="Experience">
          <p className="text-muted">{experience.length} entries loaded</p>
        </Section>
        <Section id="education" title="Education">
          <p className="text-muted">{education.length} entries loaded</p>
        </Section>
        <Section id="blog" title="Blog">
          <p className="text-muted">{blogPosts.length} posts loaded</p>
        </Section>
        <Section id="skills" title="Skills">
          <p className="text-muted">{skillGroups.length} groups loaded</p>
        </Section>
      </main>
    </>
  )
}