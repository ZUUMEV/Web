import type { Metadata } from 'next'
import Link from 'next/link'
import { MessageCircle, Phone, Mail, MapPin, Clock, ArrowLeft, ChevronRight } from 'lucide-react'
import { WHATSAPP_BASE, TEL_BASE, SITE } from '@/lib/site'
import { PageShell } from '@/components/page-shell'
import { CTASection } from '@/components/cta-section'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'

export const metadata: Metadata = {
  title: 'Contact ZUUM Electric | Haldwani & Rudrapur EV Scooter Rentals',
  description:
    'Contact ZUUM Electric for EV scooter rentals in Haldwani and Rudrapur, Uttarakhand. WhatsApp, phone, email, office hours and locations for delivery partner support.',
  alternates: { canonical: 'https://zuum.co.in/contact' },
  openGraph: {
    title: 'Contact ZUUM Electric | Haldwani & Rudrapur EV Scooter Rentals',
    description:
      'Reach ZUUM Electric via WhatsApp, phone, or email. Available 9 AM to 9 PM, all days, in Haldwani and Rudrapur.',
    url: 'https://zuum.co.in/contact',
    type: 'website',
  },
}

const contactCards = [
  {
    title: 'WhatsApp',
    description: 'Fastest way to reach us. Registration, plan questions, breakdown support — all on WhatsApp.',
    action: 'Chat on WhatsApp',
    href: WHATSAPP_BASE,
    icon: MessageCircle,
    accent: 'bg-[#25D366] text-white',
    accentLight: 'bg-[#25D366]/15 text-[#1c8c43] dark:text-[#3ddc7f]',
    label: '+91 79003 33002',
    external: true,
  },
  {
    title: 'Call 24/7',
    description: 'Talk to our support team directly. Available 24/7 for breakdown emergencies and onboarding queries.',
    action: 'Call Now',
    href: TEL_BASE,
    icon: Phone,
    accent: 'bg-primary text-primary-foreground',
    accentLight: 'bg-primary/15 text-primary',
    label: '+91 79003 33002',
    external: false,
  },
  {
    title: 'Email',
    description: 'For formal queries, grievance escalation, partnership requests, and DPDPA rights requests.',
    action: 'Send Email',
    href: `mailto:${SITE.email}`,
    icon: Mail,
    accent: 'bg-primary text-primary-foreground',
    accentLight: 'bg-primary/15 text-primary',
    label: SITE.email,
    external: false,
  },
]

const locations = [
  {
    city: 'Haldwani',
    state: 'Uttarakhand',
    geo: '29.2244° N, 79.5130° E',
    note: 'Scooter pickup, charging station, and breakdown support hub for the Kumaon region.',
  },
  {
    city: 'Rudrapur',
    state: 'Uttarakhand',
    geo: '28.9980° N, 79.3982° E',
    note: 'Scooter pickup and charging station serving the Rudrapur industrial belt and surrounding areas.',
  },
]

export default function ContactPage() {
  return (
    <PageShell>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://zuum.co.in' },
          { name: 'Contact', url: 'https://zuum.co.in/contact' },
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
            <span className="text-foreground">Contact</span>
          </nav>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Contact ZUUM Electric
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Reach us for EV scooter rentals, delivery partner onboarding, plan changes, breakdown support,
            or any questions. Our team is available 9:00 AM to 9:00 PM, all days of the week, across
            Haldwani and Rudrapur, Uttarakhand.
          </p>
        </header>

        {/* Contact method cards */}
        <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contactCards.map((card) => {
            const Icon = card.icon
            return (
              <a
                key={card.title}
                href={card.href}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noopener noreferrer' : undefined}
                className="group relative flex flex-col rounded-2xl border border-border bg-card/40 p-6 transition-all hover:border-primary/40 hover:bg-card/80 hover:shadow-lg"
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${card.accentLight}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-lg font-semibold">{card.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{card.description}</p>
                <p className="mt-3 text-sm font-medium text-foreground">{card.label}</p>
                <div className={`mt-4 inline-flex items-center gap-1.5 self-start rounded-full ${card.accent} px-4 py-2 text-xs font-semibold`}>
                  {card.action}
                  <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </a>
            )
          })}
        </section>

        {/* Office hours + service area */}
        <section className="mt-12 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card/40 p-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Clock className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-lg font-semibold">Office Hours</h2>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li className="flex justify-between"><span>Monday – Friday</span><span>9:00 AM – 9:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday</span><span>9:00 AM – 9:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>9:00 AM – 9:00 PM</span></li>
              <li className="mt-2 border-t border-border/60 pt-2 text-foreground">
                <strong>Breakdown support:</strong> 24/7 (call any time)
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card/40 p-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <MapPin className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-lg font-semibold">Service Area</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              ZUUM Electric currently serves Haldwani, Rudrapur, and adjoining areas within a 50 km
              radius. We are expanding to Dehradun, Haridwar, and Bareilly in the coming months.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Haldwani', 'Rudrapur', 'Kathgodam', 'Kaladungi', 'Kichha', 'Sitarganj'].map((city) => (
                <span key={city} className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">Pickup &amp; Charging Stations</h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Visit any of our stations to pick up a scooter, swap batteries, or get in-person support.
            Walk-ins are welcome during office hours; no prior appointment needed.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {locations.map((loc) => (
              <div key={loc.city} className="rounded-2xl border border-border bg-card/40 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{loc.city}</h3>
                    <p className="text-sm text-muted-foreground">{loc.state}</p>
                  </div>
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <p className="mt-3 text-xs text-muted-foreground">Coordinates: {loc.geo}</p>
                <p className="mt-2 text-sm text-foreground/80">{loc.note}</p>
                <a
                  href={WHATSAPP_BASE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/20"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  Request exact address
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Grievance */}
        <section className="mt-12 rounded-2xl border border-primary/30 bg-primary/5 p-6">
          <h2 className="text-lg font-semibold">Grievance Redressal</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            If you have a complaint about our service, refund, or scooter, please first contact us on
            WhatsApp or email. We aim to resolve all grievances within 7 business days. If you are
            unsatisfied with our response, you may approach the National Consumer Helpline at 1915 or
            the District Consumer Forum, Haldwani, under the Consumer Protection Act, 2019.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" />
              Email Grievance Officer
            </a>
            <a
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-accent"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Grievance
            </a>
          </div>
        </section>

        {/* Related pages */}
        <section className="mt-12 border-t border-border pt-8">
          <h2 className="text-lg font-semibold">Related</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            <li>
              <Link href="/privacy" className="flex items-center justify-between rounded-xl border border-border bg-card/40 p-4 text-sm transition-colors hover:bg-card">
                <span className="font-medium">Privacy Policy</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            </li>
            <li>
              <Link href="/terms" className="flex items-center justify-between rounded-xl border border-border bg-card/40 p-4 text-sm transition-colors hover:bg-card">
                <span className="font-medium">Terms of Service</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            </li>
            <li>
              <Link href="/refund-policy" className="flex items-center justify-between rounded-xl border border-border bg-card/40 p-4 text-sm transition-colors hover:bg-card">
                <span className="font-medium">Refund &amp; Cancellation Policy</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="flex items-center justify-between rounded-xl border border-border bg-card/40 p-4 text-sm transition-colors hover:bg-card">
                <span className="font-medium">FAQ</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            </li>
          </ul>
        </section>
      </main>

      <CTASection
        badge="Questions?"
        title={<>Still have <span>questions?</span></>}
        subtitle="Our team is available 9:00 AM to 9:00 PM, all days. WhatsApp us for the fastest response."
        whatsappMessage="Hi ZUUM, I have a question about your EV scooter rentals."
        showRegister={false}
      />
    </PageShell>
  )
}
