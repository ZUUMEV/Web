import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ChevronRight, Calendar, Clock, User } from 'lucide-react'
import { blogPosts, getPostBySlug } from '@/lib/blog-posts'
import { PageShell } from '@/components/page-shell'
import { CTASection } from '@/components/cta-section'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: `${post.title} | ZUUM Electric Blog`,
    description: post.description,
    alternates: { canonical: `https://zuum.co.in/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://zuum.co.in/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    keywords: post.tags,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  // Simple markdown-to-HTML rendering
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n')
    const elements: React.ReactElement[] = []
    let listItems: React.ReactElement[] = []
    let listKey = 0

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(<ul key={`ul-${listKey++}`} className="ml-6 list-disc space-y-1">{listItems}</ul>)
        listItems = []
      }
    }

    lines.forEach((line, i) => {
      if (line.startsWith('# ')) {
        flushList()
        elements.push(<h1 key={i} className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl">{line.slice(2)}</h1>)
      } else if (line.startsWith('## ')) {
        flushList()
        elements.push(<h2 key={i} className="mt-8 text-2xl font-semibold sm:text-3xl">{line.slice(3)}</h2>)
      } else if (line.startsWith('### ')) {
        flushList()
        elements.push(<h3 key={i} className="mt-6 text-xl font-semibold sm:text-2xl">{line.slice(4)}</h3>)
      } else if (line.startsWith('- ')) {
        listItems.push(<li key={i}>{line.slice(2)}</li>)
      } else if (line.trim() === '') {
        flushList()
        elements.push(<div key={i} className="h-4" />)
      } else {
        flushList()
        // Process inline links [text](url)
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
        const parts: (string | React.ReactElement)[] = []
        let lastIndex = 0
        let match
        while ((match = linkRegex.exec(line)) !== null) {
          if (match.index > lastIndex) {
            parts.push(line.slice(lastIndex, match.index))
          }
          parts.push(
            <a key={`${i}-${match.index}`} href={match[2]} className="text-primary underline hover:opacity-80">
              {match[1]}
            </a>
          )
          lastIndex = match.index + match[0].length
        }
        if (lastIndex < line.length) {
          parts.push(line.slice(lastIndex))
        }
        elements.push(<p key={i} className="leading-relaxed text-foreground/90">{parts}</p>)
      }
    })
    flushList()
    return elements
  }

  // Related posts (excluding current)
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <PageShell>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://zuum.co.in/' },
          { name: 'Blog', url: 'https://zuum.co.in/blog' },
          { name: post.title.slice(0, 50) + (post.title.length > 50 ? '...' : ''), url: `https://zuum.co.in/blog/${post.slug}` },
        ]}
      />

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <header className="mt-6 border-b border-border pb-8">
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/blog" className="hover:text-foreground">Blog</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground truncate">{post.title.slice(0, 40)}{post.title.length > 40 ? '...' : ''}</span>
          </nav>

          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readingTime}
            </span>
          </div>
        </header>

        <article className="mt-8 space-y-4 text-base leading-relaxed">
          {renderContent(post.content)}
        </article>

        {/* Related posts */}
        <section className="mt-16 border-t border-border pt-8">
          <h2 className="text-2xl font-semibold">Related Articles</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((rp) => (
              <Link
                key={rp.slug}
                href={`/blog/${rp.slug}`}
                className="group rounded-xl border border-border bg-card/40 p-5 transition-all hover:border-primary/40 hover:bg-card/80"
              >
                <h3 className="font-medium leading-tight group-hover:text-primary">{rp.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{rp.readingTime}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <CTASection
        badge="Ready to Ride"
        title={<>Start your <span>delivery journey</span> today</>}
        subtitle="Join 75+ delivery partners earning ₹35,000+/month with ZUUM Electric."
        whatsappMessage="Hi ZUUM, I read your blog post and want to rent an EV scooter."
        showRegister={true}
        maxWidth="max-w-3xl"
      />

      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.date,
            author: {
              '@type': 'Organization',
              name: post.author,
            },
            publisher: {
              '@type': 'Organization',
              name: 'ZUUM Electric',
              url: 'https://zuum.co.in',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://zuum.co.in/blog/${post.slug}`,
            },
          }),
        }}
      />
    </PageShell>
  )
}
