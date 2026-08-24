import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ChevronRight, Clock, Calendar } from 'lucide-react'
import { blogPosts } from '@/lib/blog-posts'
import { PageShell } from '@/components/page-shell'
import { CTASection } from '@/components/cta-section'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'

export const metadata: Metadata = {
  title: 'Blog — EV Scooter Rentals & Delivery Partner Tips | ZUUM Electric',
  description: 'Expert guides on EV scooter rentals, delivery partner earnings, Swiggy/Zomato tips, and electric mobility in Uttarakhand. Real data, practical advice.',
  alternates: { canonical: 'https://zuum.co.in/blog' },
  openGraph: {
    title: 'ZUUM Electric Blog — EV Scooter Rentals & Delivery Tips',
    description: 'Expert guides on EV scooter rentals and delivery partner earnings in Uttarakhand.',
    url: 'https://zuum.co.in/blog',
    type: 'website',
  },
}

export default function BlogPage() {
  return (
    <PageShell>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://zuum.co.in' },
          { name: 'Blog', url: 'https://zuum.co.in/blog' },
        ]}
      />
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <header className="mt-6 border-b border-border pb-8">
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">Blog</span>
          </nav>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            ZUUM Electric Blog
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Expert guides on EV scooter rentals, delivery partner earnings, and electric mobility in Uttarakhand. Real data, practical advice, no fluff.
          </p>
        </header>

        <section className="mt-10">
          <div className="grid gap-6 sm:grid-cols-2">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl border border-border bg-card/40 p-6 transition-all hover:border-primary/40 hover:bg-card/80 hover:shadow-lg"
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  <span>•</span>
                  <Clock className="h-3 w-3" />
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-3 text-xl font-semibold leading-tight group-hover:text-primary">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read more
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <CTASection
        badge="Ready to Ride"
        title={<>Ready to start your <span>delivery journey?</span></>}
        subtitle="Join 75+ delivery partners earning ₹35,000+/month with ZUUM Electric in Haldwani and Rudrapur."
        whatsappMessage="Hi ZUUM, I read your blog and want to rent an EV scooter for delivery work."
        showRegister={true}
      />
    </PageShell>
  )
}
