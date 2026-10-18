import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import ProjectCard from './components/ProjectCard'
import Timeline from './components/Timeline'
import { projects } from './data/projects'
import { experience } from './data/experience'
import { education } from './data/education'
import { skillGroups } from './data/skills'
import { blogPosts } from './data/blog'

export default function App() {
  const openContact = () => alert('Contact form coming in Phase 4')

  return (
    <>
      <Navbar onContactClick={openContact} />
      <main>
        <Hero onContactClick={openContact} />

        <Section id="projects" title="Projects">
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <Timeline entries={experience} />
        </Section>

        <Section id="education" title="Education">
          <Timeline entries={education} />
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