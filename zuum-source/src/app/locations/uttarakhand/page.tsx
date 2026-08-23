import type { Metadata } from 'next'
import Link from 'next/link'
import { MessageCircle, MapPin, ArrowLeft, ChevronRight, Leaf, Zap, Shield, Clock } from 'lucide-react'
import { WHATSAPP_BASE } from '@/lib/site'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { PageShell } from '@/components/page-shell'
import { CTASection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'EV Scooter Rentals in Uttarakhand | ZUUM Electric — Earn ₹35,000+/Month',
  description: 'Rent EV scooters in Uttarakhand for delivery work. Free fuel, helmet & 24/7 support in Haldwani, Rudrapur. Earn ₹35,000+/month. Plans from ₹300/day. Apply now!',
  keywords: [
    'EV scooter rental Uttarakhand',
    'bike on rent Uttarakhand',
    'delivery partner job Uttarakhand',
    'Haldwani bike rent',
    'Rudrapur bike rent',
    'electric scooter Uttarakhand',
    'delivery job Haldwani',
    'delivery job Rudrapur',
    'gig job Uttarakhand',
    'EV rental service Uttarakhand',
  ],
  alternates: { canonical: 'https://zuum.co.in/locations/uttarakhand' },
  openGraph: {
    title: 'EV Scooter Rentals in Uttarakhand | ZUUM Electric',
    description: 'Rent EV scooters in Uttarakhand for delivery work. Free fuel, helmet & 24/7 support. Earn ₹35,000+/month. Plans from ₹300/day.',
    url: 'https://zuum.co.in/locations/uttarakhand',
    type: 'website',
  },
}

const activeCities = [
  {
    name: 'Haldwani',
    slug: 'haldwani',
    tagline: 'Gateway to Kumaon',
    description: 'Major commercial hub serving the Kumaon region with high delivery demand across Swiggy, Zomato, and Zepto.',
    demand: 'High',
    activePartners: '40+',
    coverage: 'Haldwani city, Kathgodam, Kaladungi, Lalkuan',
  },
  {
    name: 'Rudrapur',
    slug: 'rudrapur',
    tagline: 'Industrial Belt',
    description: 'SIIDCUL industrial area drives massive delivery demand from Amazon, Flipkart, and food delivery platforms.',
    demand: 'High',
    activePartners: '35+',
    coverage: 'Rudrapur city, SIIDCUL, Kichha, Sitarganj',
  },
]

const comingSoonCities = [
  { name: 'Dehradun', expected: 'Q1 2026', note: 'State capital — high demand from IT corridor and educational institutes.' },
  { name: 'Haridwar', expected: 'Q1 2026', note: 'Pilgrimage tourism + SIDCUL industrial area combination.' },
  { name: 'Bareilly', expected: 'Q2 2026', note: 'Western UP hub, close to Uttarakhand border — natural expansion.' },
  { name: 'Kashipur', expected: 'Q2 2026', note: 'Industrial hub in Udham Singh Nagar district.' },
  { name: 'Roorkee', expected: 'Q2 2026', note: 'Educational hub with IIT Roorkee + industrial belt.' },
]

const benefits = [
  {
    icon: Zap,
    title: 'Zero Fuel Cost',
    description: 'Free charging at all ZUUM stations across Uttarakhand. Ride unlimited, pay zero for fuel.',
  },
  {
    icon: Shield,
    title: 'Insurance Included',
    description: 'Comprehensive insurance (third-party + own damage) on every scooter. Ride with peace of mind.',
  },
  {
    icon: Clock,
    title: '24/7 Breakdown Support',
    description: 'Roadside assistance anywhere in Uttarakhand. Average response time under 45 minutes.',
  },
  {
    icon: Leaf,
    title: 'Zero Emission Mobility',
    description: "100% electric fleet. Contribute to Uttarakhand's clean air and pristine environment.",
  },
]

export default function UttarakhandPage() {
  return (
    <PageShell>
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <header className="mt-6 border-b border-border pb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <MapPin className="h-3 w-3" />
            Uttarakhand
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            EV Scooter Rentals in Uttarakhand
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Join Uttarakhand's fastest-growing EV rental network for delivery partners. Get a fully charged
            electric scooter, free charging, helmet, insurance, and 24/7 roadside support. Earn ₹35,000+/month
            with zero fuel cost and zero maintenance. Currently serving Haldwani and Rudrapur, expanding to
            Dehradun, Haridwar, and Bareilly soon.
          </p>
        </header>

        {/* Why ZUUM in Uttarakhand */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">Why Choose ZUUM in Uttarakhand?</h2>
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

        {/* Active cities */}
        <section className="mt-12">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-3 w-3 rounded-full bg-green-500"></span>
            <h2 className="text-2xl font-semibold sm:text-3xl">Cities We Serve</h2>
          </div>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            ZUUM is currently active in {activeCities.length} cities across Uttarakhand, with {activeCities.reduce((acc, c) => acc + parseInt(c.activePartners), 0)}+ delivery partners earning with us.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {activeCities.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="group rounded-2xl border border-border bg-card/40 p-6 transition-all hover:border-primary/40 hover:bg-card/80 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{city.name}</h3>
                    <p className="text-sm text-primary">{city.tagline}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                </div>
                <p className="mt-3 text-sm text-foreground/80">{city.description}</p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <p className="text-muted-foreground">Demand</p>
                    <p className="font-semibold text-foreground">{city.demand}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Active Partners</p>
                    <p className="font-semibold text-foreground">{city.activePartners}</p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">Coverage:</span> {city.coverage}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Coming soon cities */}
        <section className="mt-12">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold sm:text-3xl">Coming Soon to These Cities</h2>
          </div>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            ZUUM is expanding across Uttarakhand. Register your interest for early access when we launch in your city.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {comingSoonCities.map((city) => (
              <div
                key={city.name}
                className="rounded-2xl border border-dashed border-border bg-muted/30 p-5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{city.name}</h3>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                    {city.expected}
                  </span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{city.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/5 p-6">
            <h3 className="text-lg font-semibold">Don't see your city?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We're constantly expanding across Uttarakhand. WhatsApp us your city name and we'll notify you the moment ZUUM launches near you.
            </p>
            <a
              href={`${WHATSAPP_BASE}?text=${encodeURIComponent('Hi ZUUM, I am interested in your EV rental service. Please notify me when you launch in my city: [Your City Name]')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              Notify Me When You Launch
            </a>
          </div>
        </section>

        {/* Plans overview */}
        <section className="mt-12 rounded-2xl border border-border bg-card/40 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold sm:text-3xl">Same Plans, Every City</h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Transparent pricing across all Uttarakhand locations. No hidden charges, no surge pricing.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-background/60 p-5">
              <p className="text-xs font-medium text-muted-foreground">DAILY</p>
              <p className="mt-1 text-2xl font-bold">₹300<span className="text-sm font-normal text-muted-foreground">/day</span></p>
              <p className="mt-2 text-xs text-muted-foreground">100 km included</p>
            </div>
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
              <p className="text-xs font-medium text-primary">WEEKLY ★ POPULAR</p>
              <p className="mt-1 text-2xl font-bold">₹1,600<span className="text-sm font-normal text-muted-foreground">/week</span></p>
              <p className="mt-2 text-xs text-muted-foreground">700 km included</p>
            </div>
            <div className="rounded-xl border border-border bg-background/60 p-5">
              <p className="text-xs font-medium text-muted-foreground">MONTHLY</p>
              <p className="mt-1 text-2xl font-bold">₹6,000<span className="text-sm font-normal text-muted-foreground">/month</span></p>
              <p className="mt-2 text-xs text-muted-foreground">3,000 km included</p>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Refundable deposit of ₹4,000 required at scooter handover. Excess km charged at ₹3/km.
          </p>
        </section>

        <CTASection
          badge="Ready to Ride"
          title={<>Ready to Start Earning in <span>Uttarakhand?</span></>}
          subtitle={<>Join 75+ delivery partners already earning ₹35,000+/month with ZUUM. Apply on WhatsApp — get a scooter assigned within 24 hours.</>}
          whatsappMessage="Hi ZUUM, I want to rent an EV scooter in Uttarakhand for delivery work. Please share next steps."
          padded={false}
        />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'ZUUM EV Scooter Rentals in Uttarakhand',
              description: 'EV scooter rental service for delivery partners across Uttarakhand. Free charging, helmet, insurance, and 24/7 breakdown support.',
              provider: {
                '@type': 'LocalBusiness',
                name: 'ZUUM Electric',
                url: 'https://zuum.co.in',
                telephone: '+917900333002',
                email: 'info@zuum.co.in',
                address: {
                  '@type': 'PostalAddress',
                  addressRegion: 'Uttarakhand',
                  addressCountry: 'IN',
                },
              },
              areaServed: [
                { '@type': 'City', name: 'Haldwani' },
                { '@type': 'City', name: 'Rudrapur' },
                { '@type': 'State', name: 'Uttarakhand' },
              ],
              offers: {
                '@type': 'AggregateOffer',
                lowPrice: '300',
                highPrice: '6000',
                priceCurrency: 'INR',
                offerCount: '3',
              },
            }),
          }}
        />
        <BreadcrumbSchema
          items={[
            { name: 'Home', url: 'https://zuum.co.in/' },
            { name: 'Uttarakhand', url: 'https://zuum.co.in/locations/uttarakhand' },
          ]}
        />
      </main>
    </PageShell>
  )
}
