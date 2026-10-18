import { useEffect, useState } from 'react'

type Props = {
  open: boolean
  onClose: () => void
}

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactModal({ open, onClose }: Props) {
  const [status, setStatus] = useState<Status>('idle')

  // Close on Escape, and stop the page behind from scrolling while open
  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  const handleClose = () => {
    setStatus('idle')
    onClose()
  }

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const response = await fetch('https://formspree.io/f/myzjdzoy', {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      })
      setStatus(response.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const fieldClass =
    'w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm outline-none transition focus:border-accent'

  return (
    <div
      className="fixed inset-0 z-60 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose()
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl border border-border bg-surface p-8"
      >
        <button
          onClick={handleClose}
          aria-label="Close contact form"
          className="absolute right-4 top-4 text-xl text-muted transition hover:text-text"
        >
          ✕
        </button>

        <h2 id="contact-title" className="mb-6 text-2xl font-bold">
          <span className="text-accent"></span> Contact Me
        </h2>

        {status === 'success' ? (
          <div className="py-6 text-center">
            <p className="text-lg font-semibold">Message sent ✓</p>
            <p className="mt-2 text-sm text-muted">Thanks for reaching out. I'll get back to you soon.</p>
            <button
              onClick={handleClose}
              className="mt-6 rounded-full bg-accent px-6 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Your name" required autoFocus className={fieldClass} />
            <input type="email" name="email" placeholder="Your email" required className={fieldClass} />
            <textarea name="message" placeholder="Your message" rows={5} required className={`${fieldClass} resize-y`} />

            {status === 'error' && (
              <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full rounded-full bg-accent px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}