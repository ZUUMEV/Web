import Link from 'next/link'
import { User, MessageCircle } from 'lucide-react'
import { WHATSAPP_BASE } from '@/lib/site'

interface AuthorBioProps {
  author: string
}

export function AuthorBio({ author }: AuthorBioProps) {
  return (
    <section className="mt-12 rounded-2xl border border-border bg-card/40 p-6 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        {/* Avatar */}
        <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
          <User className="h-8 w-8" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{author}</h3>
          <p className="mt-1 text-sm font-medium text-primary">ZUUM Electric — EV Mobility Experts</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            ZUUM Electric is India&rsquo;s premium EV scooter rental platform for delivery partners.
            We provide free charging, ISI-certified helmets, comprehensive insurance, and 24/7 breakdown
            support across Haldwani and Rudrapur, Uttarakhand. Our mission is to help delivery partners
            maximize earnings with zero fuel cost and zero maintenance. With 500+ active riders and a
            growing fleet, we&rsquo;re building the future of clean, affordable last-mile delivery mobility in India.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
            >
              Contact Us
            </Link>
            <span className="text-muted-foreground">•</span>
            <a
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              WhatsApp
            </a>
            <span className="text-muted-foreground">•</span>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
            >
              More Articles
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
