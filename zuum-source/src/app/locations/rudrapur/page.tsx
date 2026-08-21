import type { Metadata } from 'next'
import Link from 'next/link'
import { MessageCircle, Phone, MapPin, ArrowLeft, ChevronRight, Zap, Shield, Clock, Leaf, TrendingUp } from 'lucide-react'
import { WHATSAPP_BASE, TEL_BASE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'EV Scooter Rent in Rudrapur - Earn ₹35,000+/Month | ZUUM Electric',
  description: 'Rent EV scooter in Rudrapur for delivery work. Free fuel, helmet, insurance & 24/7 support. Earn ₹35,000+/month. Daily ₹300 / Weekly ₹1,600. Apply on WhatsApp now!',
  keywords: [
    'bike rent Rudrapur',
    'scooty rent Rudrapur',
    'EV scooter Rudrapur',
    'delivery job Rudrapur',
    'delivery partner Rudrapur',
    'Swiggy Rudrapur',
    'Zomato Rudrapur',
    'SIIDCUL delivery job',
    'Rudrapur bike rental',
    'electric scooter rental Rudrapur',
    'Udham Singh Nagar delivery',
    'Rudrapur gig job',
  ],
  alternates: { canonical: 'https://zuum.co.in/locations/rudrapur' },
  openGraph: {
    title: 'EV Scooter Rent in Rudrapur - Earn ₹35,000+/Month | ZUUM Electric',
    description: 'Rent EV scooter in Rudrapur for delivery work. Free fuel, helmet, insurance & 24/7 support. Earn ₹35,000+/month. Daily ₹300 / Weekly ₹1,600. Apply now!',
    url: 'https://zuum.co.in/locations/rudrapur',
    type: 'website',
  },
}

const deliveryZones = [
  { name: 'Rudrapur City', areas: 'Civil Lines, Kashipur Road, Haldwani Road, Station Road' },
  { name: 'SIIDCUL Industrial Area', areas: 'State Infrastructure Industrial Development Corporation, Phase 1 & 2' },
  { name: 'Kichha', areas: 'Kichha Town, Kichha-Tanakpur highway, Industrial area' },
  { name: 'Sitarganj', areas: 'Sitarganj Town, Indo-Nepal border highway, Industrial belt' },
]

const platforms = [
  { name: 'Swiggy', status: 'High demand', color: '#FC8019' },
  { name: 'Zomato', status: 'High demand', color: '#E23744' },
  { name: 'Amazon Flex', status: 'Very high demand', color: '#FF9900' },
  { name: 'Flipkart', status: 'High demand', color: '#2874F0' },
  { name: 'Zepto', status: 'Available', color: '#8B5CF6' },
  { name: 'BlinkIt', status: 'Available', color: '#0C831F' },
]

const faqs = [
  {
    q: 'How much can I earn as a delivery partner in Rudrapur with ZUUM?',
    a: 'Delivery partners in Rudrapur earn an average of ₹35,000+ per month after rental costs. Rudrapur\'s SIIDCUL industrial belt creates especially high demand for Amazon Flex and Flipkart deliveries, boosting earnings potential.',
  },
  {
    q: 'Where can I pick up my ZUUM scooter in Rudrapur?',
    a: 'ZUUM has a pickup and charging station in Rudrapur. The exact address is shared via WhatsApp after your registration is confirmed. Walk-ins are also welcome during office hours (9 AM - 9 PM, all days).',
  },
  {
    q: 'Which delivery platforms can I ride for in Rudrapur?',
    a: 'ZUUM scooters work with all major delivery platforms operating in Rudrapur — Swiggy, Zomato, Amazon Flex (high demand due to SIIDCUL), Flipkart, Zepto, and BlinkIt. We can guide you through registration for any of these.',
  },
  {
    q: 'What documents do I need to rent a scooter in Rudrapur?',
    a: 'You need: (1) Valid Indian driving license with 2-wheeler endorsement, (2) Aadhaar card for KYC, (3) Passport-size photo, (4) ₹4,000 refundable security deposit. That\'s it — no other documents required.',
  },
  {
    q: 'Is there any charging cost in Rudrapur?',
    a: 'No. Charging is completely FREE at all ZUUM charging stations in Rudrapur. Unlimited charging, zero cost. This is the biggest advantage over petrol bike rentals where fuel costs eat into your earnings.',
  },
  {
    q: 'What if my scooter breaks down in Rudrapur?',
    a: 'ZUUM provides 24/7 roadside breakdown support across Rudrapur and adjoining areas. Average response time is 45 minutes within city limits. If your scooter cannot be repaired on-site, we provide a replacement scooter within 2 hours.',
  },
  {
    q: 'Can I ride the ZUUM scooter outside Rudrapur?',
    a: 'You can ride within a 50 km radius of Rudrapur (covers SIIDCUL, Kichha, Sitarganj, Kashipur). For riding beyond this radius, prior written approval from ZUUM is required. Crossing state borders (e.g., entering Nepal via Tanakpur) is prohibited.',
  },
  {
    q: 'How do I join ZUUM in Rudrapur?',
    a: 'Simple! WhatsApp us at +91 79003 33002 or fill the registration form on our homepage. Our team will guide you through KYC, deposit payment, and scooter handover — usually completed within 24 hours.',
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: 'SIIDCUL Industrial Demand',
    description: 'Rudrapur\'s SIIDCUL industrial area creates massive delivery demand, especially for Amazon Flex and Flipkart. Higher demand = more earnings.',
  },
  {
    icon: Zap,
    title: 'Free Charging in Rudrapur',
    description: 'Unlimited free charging at our Rudrapur station. Ride 100+ km daily without worrying about fuel cost.',
  },
  {
    icon: Shield,
    title: 'Full Insurance Covered',
    description: 'Comprehensive insurance on every scooter. Ride for Amazon, Flipkart, or Swiggy with complete peace of mind.',
  },
  {
    icon: Clock,
    title: '24/7 Rudrapur Support',
    description: 'Local breakdown support team based in Rudrapur. Average response time: 45 minutes within city limits.',
  },
]

export default function RudrapurPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/locations/uttarakhand"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Uttarakhand
      </Link>

      <header className="mt-6 border-b border-border pb-8">
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/locations/uttarakhand" className="hover:text-foreground">Uttarakhand</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">Rudrapur</span>
        </nav>
        <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <MapPin className="h-3 w-3" />
          Rudrapur, Uttarakhand
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          EV Scooter Rent in Rudrapur for Delivery Partners
        </h1>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Rent an electric scooter in Rudrapur and start earning ₹35,000+/month as a delivery partner.
          Free charging, helmet, insurance, and 24/7 local breakdown support included. Plans from ₹300/day.
          High demand from SIIDCUL industrial belt for Amazon Flex, Flipkart, Swiggy, and Zomato.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`${WHATSAPP_BASE}?text=${encodeURIComponent('Hi ZUUM, I want to rent an EV scooter in Rudrapur for delivery work. Please share next steps.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" />
            Apply on WhatsApp
          </a>
          <a
            href={TEL_BASE}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-accent"
          >
            <Phone className="h-4 w-4" />
            Call +91 79003 33002
          </a>
        </div>
      </header>

      {/* Quick stats */}
      <section className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-xl border border-border bg-card/40 p-4 text-center">
          <p className="text-2xl font-bold text-primary">35+</p>
          <p className="mt-1 text-xs text-muted-foreground">Active Partners</p>
        </div>
        <div className="rounded-xl border border-border bg-card/40 p-4 text-center">
          <p className="text-2xl font-bold text-primary">₹35k+</p>
          <p className="mt-1 text-xs text-muted-foreground">Monthly Earnings</p>
        </div>
        <div className="rounded-xl border border-border bg-card/40 p-4 text-center">
          <p className="text-2xl font-bold text-primary">45 min</p>
          <p className="mt-1 text-xs text-muted-foreground">Support Response</p>
        </div>
        <div className="rounded-xl border border-border bg-card/40 p-4 text-center">
          <p className="text-2xl font-bold text-primary">24 hr</p>
          <p className="mt-1 text-xs text-muted-foreground">Onboarding Time</p>
        </div>
      </section>

      {/* Why ZUUM Rudrapur */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold sm:text-3xl">Why Choose ZUUM in Rudrapur?</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div key={benefit.title} className="rounded-2xl border border-border bg-card/40 p-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Delivery zones */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold sm:text-3xl">Delivery Zones We Cover in Rudrapur</h2>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          ZUUM scooters are authorized for delivery work across all major zones in and around Rudrapur.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {deliveryZones.map((zone) => (
            <div key={zone.name} className="rounded-xl border border-border bg-card/40 p-5">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <h3 className="font-semibold">{zone.name}</h3>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{zone.areas}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platforms */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold sm:text-3xl">Delivery Platforms in Rudrapur</h2>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          ZUUM scooters work seamlessly with all major delivery platforms operating in Rudrapur. SIIDCUL industrial belt drives especially high Amazon and Flipkart demand.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {platforms.map((p) => (
            <div key={p.name} className="flex items-center justify-between rounded-xl border border-border bg-card/40 p-4">
              <div>
                <p className="font-semibold">{p.name}</p>
                <p className="text-xs text-muted-foreground">{p.status}</p>
              </div>
              <span
                className="inline-flex h-3 w-3 rounded-full"
                style={{ backgroundColor: p.color }}
                aria-hidden="true"
              ></span>
            </div>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section className="mt-12 rounded-2xl border border-border bg-card/40 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold sm:text-3xl">Rental Plans in Rudrapur</h2>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Same transparent pricing across all ZUUM locations. No hidden charges.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-background/60 p-5">
            <p className="text-xs font-medium text-muted-foreground">DAILY</p>
            <p className="mt-1 text-2xl font-bold">₹300<span className="text-sm font-normal text-muted-foreground">/day</span></p>
            <p className="mt-2 text-xs text-muted-foreground">100 km included</p>
            <p className="mt-1 text-xs text-muted-foreground">₹3/km excess</p>
          </div>
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
            <p className="text-xs font-medium text-primary">WEEKLY ★ POPULAR</p>
            <p className="mt-1 text-2xl font-bold">₹1,600<span className="text-sm font-normal text-muted-foreground">/week</span></p>
            <p className="mt-2 text-xs text-muted-foreground">700 km included</p>
            <p className="mt-1 text-xs text-muted-foreground">₹3/km excess</p>
          </div>
          <div className="rounded-xl border border-border bg-background/60 p-5">
            <p className="text-xs font-medium text-muted-foreground">MONTHLY</p>
            <p className="mt-1 text-2xl font-bold">₹6,000<span className="text-sm font-normal text-muted-foreground">/month</span></p>
            <p className="mt-2 text-xs text-muted-foreground">3,000 km included</p>
            <p className="mt-1 text-xs text-muted-foreground">₹3/km excess</p>
          </div>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Refundable deposit of ₹4,000 required at scooter handover. All plans include free charging, helmet, insurance, and 24/7 breakdown support.
        </p>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold sm:text-3xl">FAQ — Rudrapur</h2>
        <div className="mt-6 space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-border bg-card/40 p-5">
              <summary className="cursor-pointer list-none">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-medium">{faq.q}</h3>
                  <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-90" />
                </div>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 text-center text-primary-foreground">
        <h2 className="text-2xl font-bold sm:text-3xl">Start Earning in Rudrapur Today</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/90 sm:text-base">
          Join 35+ delivery partners already earning ₹35,000+/month with ZUUM in Rudrapur. Apply on WhatsApp — get a scooter assigned within 24 hours.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`${WHATSAPP_BASE}?text=${encodeURIComponent('Hi ZUUM, I want to rent an EV scooter in Rudrapur for delivery work. Please share next steps.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" />
            Apply on WhatsApp
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
          >
            Contact Us
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'ZUUM Electric — Rudrapur',
            description: 'EV scooter rental service for delivery partners in Rudrapur. Free charging, helmet, insurance, and 24/7 breakdown support. Earn ₹35,000+/month.',
            url: 'https://zuum.co.in/locations/rudrapur',
            telephone: '+917900333002',
            email: 'info@zuum.co.in',
            image: 'https://zuum.co.in/og-image.png',
            priceRange: '₹300 - ₹6,000',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Rudrapur',
              addressRegion: 'Uttarakhand',
              postalCode: '263153',
              addressCountry: 'IN',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '28.9980',
              longitude: '79.3982',
            },
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              opens: '09:00',
              closes: '21:00',
            },
            areaServed: ['Rudrapur', 'SIIDCUL', 'Kichha', 'Sitarganj'],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
    </main>
  )
}
