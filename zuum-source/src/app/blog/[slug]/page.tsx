import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ChevronRight, Calendar, Clock, User, Bike } from 'lucide-react'
import { blogPosts, getPostBySlug } from '@/lib/blog-posts'
import { PageShell } from '@/components/page-shell'
import { CTASection } from '@/components/cta-section'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { ShareButtons } from '@/components/share-buttons'
import { AuthorBio } from '@/components/author-bio'
import { ReadingProgress } from '@/components/reading-progress'

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
      modifiedTime: post.updatedDate || post.date,
      authors: [post.author],
      tags: post.tags,
      images: post.ogImage
        ? [{ url: post.ogImage, width: 1200, height: 630, alt: post.title }]
        : undefined,
    },
    keywords: post.tags,
  }
}

// Process **bold** inside a text segment
function processBold(text: string, keyPrefix: string): (string | React.ReactElement)[] {
  const parts: (string | React.ReactElement)[] = []
  const boldRegex = /\*\*([^*]+)\*\*/g
  let lastIndex = 0
  let match
  let idx = 0
  while ((match = boldRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    parts.push(
      <strong key={`${keyPrefix}-b-${idx++}`} className="font-semibold text-foreground">
        {match[1]}
      </strong>
    )
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }
  return parts.length > 0 ? parts : [text]
}

// Process inline markdown: links [text](url) AND bold **text**
function processInline(text: string, keyPrefix: string): (string | React.ReactElement)[] {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  const parts: (string | React.ReactElement)[] = []
  let lastIndex = 0
  let match
  let partIdx = 0

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      const textSegment = text.slice(lastIndex, match.index)
      parts.push(...processBold(textSegment, `${keyPrefix}-t-${partIdx++}`))
    }
    const linkTextParts = processBold(match[1], `${keyPrefix}-lt-${partIdx++}`)
    parts.push(
      <a
        key={`${keyPrefix}-a-${partIdx++}`}
        href={match[2]}
        className="text-primary underline underline-offset-2 hover:opacity-80"
      >
        {linkTextParts}
      </a>
    )
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) {
    const textSegment = text.slice(lastIndex)
    parts.push(...processBold(textSegment, `${keyPrefix}-t-${partIdx++}`))
  }
  return parts.length > 0 ? parts : [text]
}

// Extract H2 headings for Table of Contents
function extractTOC(content: string): { text: string; anchor: string }[] {
  const lines = content.split('\n')
  const toc: { text: string; anchor: string }[] = []
  for (const line of lines) {
    if (line.startsWith('## ')) {
      const text = line.slice(3).trim()
      const anchor = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
      toc.push({ text, anchor })
    }
  }
  return toc
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const toc = extractTOC(post.content)

  // Enhanced markdown-to-HTML rendering with tight, natural spacing
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n')
    const elements: React.ReactElement[] = []
    let listItems: React.ReactElement[] = []
    let tableRows: string[][] = []
    let listKey = 0
    let tableKey = 0

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`ul-${listKey++}`} className="my-3 ml-6 list-disc space-y-1.5 text-foreground/90">
            {listItems}
          </ul>
        )
        listItems = []
      }
    }

    const flushTable = () => {
      if (tableRows.length > 0) {
        const header = tableRows[0] || []
        const body = tableRows.slice(2)
        elements.push(
          <div key={`tbl-wrap-${tableKey}`} className="my-4 overflow-x-auto rounded-lg border border-border">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  {header.map((h, i) => (
                    <th
                      key={`th-${tableKey}-${i}`}
                      className="px-3 py-2.5 text-left font-semibold text-foreground whitespace-nowrap"
                    >
                      {processInline(h, `th-${tableKey}-${i}`)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {body.map((row, ri) => (
                  <tr key={`tr-${tableKey}-${ri}`} className="border-b border-border/60 last:border-0 even:bg-muted/20">
                    {row.map((cell, ci) => (
                      <td
                        key={`td-${tableKey}-${ri}-${ci}`}
                        className="px-3 py-2 text-foreground/90 align-top"
                      >
                        {processInline(cell, `td-${tableKey}-${ri}-${ci}`)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
        tableKey++
        tableRows = []
      }
    }

    lines.forEach((line, i) => {
      const trimmed = line.trim()

      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        flushList()
        const cells = trimmed.slice(1, -1).split('|').map((c) => c.trim())
        tableRows.push(cells)
        return
      }

      if (line.startsWith('> ')) {
        flushList()
        flushTable()
        elements.push(
          <blockquote key={`bq-${i}`} className="my-4 border-l-4 border-primary/40 pl-4 text-foreground/80 italic">
            {processInline(line.slice(2), `bq-${i}`)}
          </blockquote>
        )
      } else if (line.startsWith('# ')) {
        flushList()
        flushTable()
        // Blog post title H1 is already rendered in the header (line ~297).
        // Markdown # headings become H2 to avoid duplicate H1 tags.
        const text = line.slice(2).trim()
        const anchor = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .replace(/^-|-$/g, '')
        elements.push(
          <h2 key={i} id={anchor} className="mb-2 mt-8 scroll-mt-20 text-2xl font-semibold sm:text-3xl">
            {text}
          </h2>
        )
      } else if (line.startsWith('## ')) {
        flushList()
        flushTable()
        const text = line.slice(3).trim()
        const anchor = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .replace(/^-|-$/g, '')
        elements.push(
          <h2 key={i} id={anchor} className="mb-2 mt-8 scroll-mt-20 text-2xl font-semibold sm:text-3xl">
            {text}
          </h2>
        )
      } else if (line.startsWith('### ')) {
        flushList()
        flushTable()
        elements.push(
          <h3 key={i} className="mb-1.5 mt-5 text-xl font-semibold sm:text-2xl">
            {line.slice(4)}
          </h3>
        )
      } else if (line.startsWith('- ')) {
        flushTable()
        listItems.push(
          <li key={i} className="leading-relaxed pl-1">
            {processInline(line.slice(2), `li-${i}`)}
          </li>
        )
      } else if (trimmed === '') {
        // Skip empty lines - spacing is controlled by element margins
        flushList()
        flushTable()
      } else {
        flushList()
        flushTable()
        elements.push(
          <p key={i} className="mb-3 leading-relaxed text-foreground/90">
            {processInline(line, `p-${i}`)}
          </p>
        )
      }
    })

    flushList()
    flushTable()
    return elements
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

    return (
    <PageShell>
      <ReadingProgress />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://zuum.co.in' },
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

        <header className="mt-6 border-b border-border pb-6">
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

          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
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

          {/* Share Buttons - Top */}
          <div className="mt-4">
            <ShareButtons
              url={`https://zuum.co.in/blog/${post.slug}`}
              title={post.title}
            />
          </div>
        </header>

        {/* Table of Contents */}
        {toc.length > 0 && (
          <aside className="mt-6 rounded-xl border border-border bg-muted/30 p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Table of Contents
            </h2>
            <ol className="mt-3 space-y-1.5 text-sm">
              {toc.map((item, i) => (
                <li key={item.anchor} className="flex gap-2">
                  <span className="text-muted-foreground/60">{i + 1}.</span>
                  <a
                    href={`#${item.anchor}`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ol>
          </aside>
        )}

       {/* Hero Image */}
        {post.heroImage ? (
          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <img 
              src={post.heroImage} 
              alt={post.imageAlt || post.title}
              className="w-full h-auto object-cover"
            />
          </div>
        ) : (
          <div className="mt-8 flex aspect-[16/9] items-center justify-center rounded-2xl border border-border bg-muted/30">
            <Bike className="h-24 w-24 text-muted-foreground/30" strokeWidth={1.5} />
          </div>
        )}

        <article className="mt-6 text-base leading-relaxed">
          {renderContent(post.content)}
        </article>

        {/* Share Buttons - Bottom */}
        <div className="mt-8 border-t border-border pt-6">
          <ShareButtons
            url={`https://zuum.co.in/blog/${post.slug}`}
            title={post.title}
          />
        </div>

        {/* Author Bio */}
        <AuthorBio author={post.author} />

        {/* Related posts */}
        <section className="mt-12 border-t border-border pt-8">
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
            dateModified: post.updatedDate || post.date,
            image: post.ogImage ? `https://zuum.co.in${post.ogImage}` : 'https://zuum.co.in/og-image.png',
            author: {
              '@type': 'Organization',
              name: post.author,
            },
            publisher: {
              '@type': 'Organization',
              name: 'ZUUM Electric',
              url: 'https://zuum.co.in',
              logo: {
                '@type': 'ImageObject',
                url: 'https://zuum.co.in/zuum-dark-theme-logo.png',
              },
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
