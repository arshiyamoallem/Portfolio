type Props = {
  onContactClick: () => void
}

const facts = ['Carleton University', '4th-year Software Engineering', 'Co-op at DND']

export default function Hero({ onContactClick }: Props) {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen w-full max-w-5xl flex-col-reverse items-center justify-center gap-12 px-6 pb-12 pt-24 md:flex-row md:justify-between"
    >
      <div className="max-w-xl">
        <p className="mb-3 font-medium text-accent">Hi, I'm</p>
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">Arshiya Moallem</h1>
        <p className="mt-4 text-xl text-muted">
          Software Engineering student.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          I enjoy building things, solving problems, and constantly learning new skills along the way.
          I'm passionate about creating projects that are both useful and enjoyable to use.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects"
             className="rounded-full bg-accent px-6 py-3 font-semibold text-white transition hover:opacity-90">
            View Projects
          </a>
          <button onClick={onContactClick}
                  className="rounded-full border border-border px-6 py-3 font-semibold transition hover:border-accent">
            Contact Me
          </button>
        </div>

        <ul className="mt-10 flex flex-wrap gap-2">
          {facts.map((fact) => (
            <li key={fact} className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
              {fact}
            </li>
          ))}
        </ul>
      </div>

      <img
        src={`${import.meta.env.BASE_URL}img/arshiyamoallem_profile.PNG`}
        alt="Arshiya Moallem"
        className="h-56 w-56 rounded-full object-cover ring-2 ring-accent ring-offset-4 ring-offset-bg md:h-72 md:w-72"
      />
    </section>
  )
}