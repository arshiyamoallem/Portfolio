import type { BlogPost } from '../data/types'

type Props = {
  post: BlogPost
}

export default function BlogCard({ post }: Props) {
  return (
    <article className="flex flex-col rounded-xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-accent">
      <div className="mb-3 flex items-center justify-between text-xs">
        <span className="rounded-full bg-accent-soft px-3 py-1 font-medium text-accent">{post.tag}</span>
        <span className="text-muted">{post.date}</span>
      </div>

      <h3 className="text-lg font-semibold leading-snug">{post.title}</h3>
      {post.img ? (
        <img
          src={`${import.meta.env.BASE_URL}${post.img}`}
          alt={`Screenshot of ${post.title}`}
          loading="lazy"
          className="mb-4 w-full rounded-lg border border-border"
        />
      ) : null
      }
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>

      {post.href ? (
        <a href={post.href} target="_blank" rel="noreferrer"
           className="mt-5 text-sm font-semibold text-accent hover:underline">
          Read post →
        </a>
      ) : (
        <span className="mt-5 text-sm font-semibold text-muted">Coming soon</span>
      )}
    </article>
  )
}