import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import ProjectCard from './components/ProjectCard'
import Timeline from './components/Timeline'
import BlogCard from './components/BlogCard'
import SkillGroupCard from './components/SkillGroupCard'
import ContactModal from './components/ContactModal'
import Footer from './components/Footer'
import { projects } from './data/projects'
import { experience } from './data/experience'
import { education } from './data/education'
import { skillGroups } from './data/skills'
import { blogPosts } from './data/blog'

export default function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const openContact = () => setContactOpen(true)
  const closeContact = () => setContactOpen(false)

  return (
    <>
      {/* This was for tab navigation, but it was removed because it isn't needed for this site.
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-70 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a> 
      */}
      <Navbar onContactClick={openContact} />
      <main id="main">
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
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.title} post={post} />
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-6 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <SkillGroupCard key={group.title} group={group} />
            ))}
          </div>
        </Section>
      </main>
      <Footer />
      <ContactModal open={contactOpen} onClose={closeContact} />
    </>
  )
}