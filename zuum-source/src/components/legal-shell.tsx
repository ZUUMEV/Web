import { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface LegalShellProps {
  title: string
  description: string
  lastUpdated: string
  children: ReactNode
}

export function LegalShell({ title, description, lastUpdated, children }: LegalShellProps) {
  return (
  <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      <header className="mt-6 border-b border-border pb-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">{description}</p>
        <p className="mt-1 text-xs text-muted-foreground">Last updated: {lastUpdated}</p>
      </header>

      <article className="mt-8 space-y-8 text-sm leading-relaxed text-foreground/90 sm:text-base">
        {children}
      </article>
    </main>
  )
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground sm:text-2xl">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  )
}

export function LegalSubSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="mb-2 mt-4 text-base font-medium text-foreground sm:text-lg">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  )
}
