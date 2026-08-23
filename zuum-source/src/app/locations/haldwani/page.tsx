import type { Metadata } from 'next'
import Link from 'next/link'
import { MessageCircle, Phone, MapPin, ArrowLeft, ChevronRight, Zap, Shield, Clock, TrendingUp } from 'lucide-react'
import { WHATSAPP_BASE, TEL_BASE } from '@/lib/site'
import { PageShell } from '@/components/page-shell'
import { CTASection } from '@/components/cta-section'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'

export const metadata: Metadata = {
  title: 'EV Scooter Rent in Haldwani - Earn ₹35,000+/Month | ZUUM Electric',
  description: 'Rent EV scooter in Haldwani for delivery work. Free fuel, helmet, insurance & 24/7 support. Earn ₹35,000+/month. Daily ₹300 / Weekly ₹1,600. Apply on WhatsApp now!',
  keywords: [
    'bike rent Haldwani',
    'scooty rent Haldwani',
    'EV scooter Haldwani',
    'delivery job Haldwani',
    'delivery partner Haldwani',
    'Swiggy Haldwani',
    'Zomato Haldwani',
    'Zepto Haldwani',
    'Haldwani bike rental',
    'electric scooter rental Haldwani',
    'Kumaon delivery job',
    'Haldwani gig job',
  ],
  alternates: { canonical: 'https://zuum.co.in/locations/haldwani' },
  openGraph: {
    title: 'EV Scooter Rent in Haldwani - Earn ₹35,000+/Month | ZUUM Electric',
    description: 'Rent EV scooter in Haldwani for delivery work. Free fuel, helmet, insurance & 24/7 support. Earn ₹35,000+/month. Daily ₹300 / Weekly ₹1,600. Apply now!',
    url: 'https://zuum.co.in/locations/haldwani',
    type: 'website',
  },
}

const deliveryZones = [
  { name: 'Haldwani City Center', areas: 'Mall Road, Bhotia Parao, Rampur Road, Kaladhungi Road' },
  { name: 'Kathgodam', areas: 'Kathgodam Railway Station, Haldwani Road, KICM College area' },
  { name: 'Lalkuan', areas: 'Lalkuan Main Market, GIC Ground, Banbhoolpura' },
  { name: 'Kaladungi', areas: 'Kaladungi Town, Corbett buffer zone, Nainital highway' },
]

const platforms = [
  { name: 'Swiggy', status: 'High demand', color: '#FC8019' },
  { name: 'Zomato', status: 'High demand', color: '#E23744' },
  { name: 'Zepto', status: 'Available', color: '#8B5CF6' },
  { name: 'BlinkIt', status: 'Available', color: '#0C831F' },
  { name: 'Amazon Flex', status: 'High demand', color: '#FF9900' },
  { name: 'Flipkart', status: 'Available', color: '#2874F0' },
]

const hindiFaqs = [
  {
    q: 'हल्द्वानी में ज़ूम से ईवी स्कूटर रेंट कैसे करें?',
    a: 'व्हाट्सएप पर +91 79003 33002 पर संपर्क करें या हमारी वेबसाइट पर रजिस्ट्रेशन फॉर्म भरें। ड्राइविंग लाइसेंस, आधार कार्ड और ₹4,000 रिफंडेबल डिपॉज़िट के साथ 24 घंटे में स्कूटर अलॉट हो जाएगा। हल्द्वानी कुमाऊं का मुख्य शहर है, इसलिए हमारी टीम यहाँ तुरंत सेवा देती है।',
  },
  {
    q: 'कुमाऊं के अन्य शहरों से आने वाले युवाओं के लिए हल्द्वानी में डिलीवरी जॉब अच्छा विकल्प है?',
    a: 'बिल्कुल! हल्द्वानी कुमाऊं क्षेत्र (नैनीताल, अल्मोड़ा, पिथौरागढ़, बागेश्वर, चंपावत) का commercial hub है। यहाँ Swiggy, Zomato, Zepto, Amazon Flex सभी platforms पर high demand है। मॉल रोड, भोटिया पड़ाव, काठगोदम जैसे zones में रोज़ 30-40 deliveries मिलती हैं। कुमाऊं के युवा हल्द्वानी में रहकर ₹35,000+/महीना कमा सकते हैं।',
  },
  {
    q: 'हल्द्वानी में स्विगी डिलीवरी पार्टनर कितना कमाता है?',
    a: 'हल्द्वानी में Swiggy delivery partners ₹25,000-40,000 per month कमाते हैं। ज़ूम की EV scooter से fuel का खर्च ज़ीरो हो जाता है, इसलिए net earnings ₹35,000+ हो जाते हैं। पेट्रोल scooter पर monthly ₹6,721 सिर्फ़ fuel में जाते हैं, जबकि EV में charging मुफ़्त है।',
  },
  {
    q: 'हल्द्वानी में charging का कोई खर्चा है?',
    a: 'नहीं, बिल्कुल मुफ़्त! ज़ूम charging stations पर unlimited free charging है। हल्द्वानी city center में हमारा station है जहाँ आप कभी भी charge कर सकते हैं। यही ईवी का सबसे बड़ा फायदा है — पेट्रोल में ₹6,721/महीना खर्च, ईवी में ₹0।',
  },
  {
    q: 'अगर स्कूटर खराब हो जाए तो क्या करें?',
    a: 'ज़ूम हल्द्वानी में 24/7 breakdown support देता है। व्हाट्सएप या कॉल करें — 45 मिनट में हमारी टीम पहुँच जाएगी। अगर scooter तुरंत repair न हो सके, तो 2 घंटे में replacement scooter दे दिया जाएगा। आपकी कमाई कभी रुकेगी नहीं।',
  },
  {
    q: 'क्या मैं अपनी स्कूटी लाकर ज़ूम से जुड़ सकता हूँ?',
    a: 'नहीं, ज़ूम अपनी EV scooters rent पर देता है। आपको अपनी scooter लाने की ज़रूरत नहीं है। हम ₹4,000 refundable deposit के साथ fully charged scooter, helmet, insurance सब provide करते हैं। बस अपनी DL और Aadhaar लाओ, बाकी सब हमारी ज़िम्मेदारी।',
  },
]

const faqs = [
  {
    q: 'How much can I earn as a delivery partner in Haldwani with ZUUM?',
    a: "Delivery partners in Haldwani earn an average of ₹35,000+ per month after rental costs. With ZUUM's zero fuel cost and zero maintenance model, your savings are maximum compared to petrol bike rentals.",
  },
  {
    q: 'Where can I pick up my ZUUM scooter in Haldwani?',
    a: 'ZUUM has a pickup and charging station in central Haldwani. The exact address is shared via WhatsApp after your registration is confirmed. Walk-ins are also welcome during office hours (9 AM - 9 PM, all days).',
  },
  {
    q: 'Which delivery platforms can I ride for in Haldwani?',
    a: 'ZUUM scooters are suitable for all major delivery platforms operating in Haldwani — Swiggy, Zomato, Zepto, BlinkIt, Amazon Flex, and Flipkart. We can guide you through the registration process for any of these platforms.',
  },
  {
    q: 'What documents do I need to rent a scooter in Haldwani?',
    a: "You need: (1) Valid Indian driving license with 2-wheeler endorsement, (2) Aadhaar card for KYC, (3) Passport-size photo, (4) ₹4,000 refundable security deposit. That's it — no other documents required.",
  },
  {
    q: 'Is there any charging cost in Haldwani?',
    a: "No. Charging is completely FREE at all ZUUM charging stations in Haldwani. You can charge your scooter unlimited times at no extra cost. This is the biggest advantage over petrol bike rentals.",
  },
  {
    q: 'What if my scooter breaks down in Haldwani?',
    a: 'ZUUM provides 24/7 roadside breakdown support across Haldwani and adjoining areas. Average response time is 45 minutes within city limits. If your scooter cannot be repaired on-site, we provide a replacement scooter within 2 hours (subject to availability).',
  },
  {
    q: 'Can I ride the ZUUM scooter outside Haldwani?',
    a: 'You can ride within a 50 km radius of Haldwani (covers Nainital, Bhimtal, Kaladungi, Lalkuan, Kathgodam). For riding beyond this radius, prior written approval from ZUUM is required. Crossing state borders (e.g., entering UP via Rudrapur-Bareilly highway) is prohibited.',
  },
  {
    q: 'How do I join ZUUM in Haldwani?',
    a: 'Simple! WhatsApp us at +91 79003 33002 or fill the registration form on our homepage. Our team will guide you through KYC, deposit payment, and scooter handover — usually completed within 24 hours.',
  },
]

const benefits = [
  {
    icon: Zap,
    title: 'Free Charging in Haldwani',
    description: 'Unlimited free charging at our Haldwani station. Ride 100+ km daily without worrying about fuel cost.',
  },
  {
    icon: Shield,
    title: 'Full Insurance Covered',
    description: 'Comprehensive insurance on every scooter. Ride for Swiggy, Zomato, or Zepto with complete peace of mind.',
  },
  {
    icon: Clock,
    title: '24/7 Haldwani Support',
    description: 'Local breakdown support team based in Haldwani. Average response time: 45 minutes within city limits.',
  },
  {
    icon: TrendingUp,
    title: 'High Delivery Demand',
        description: 'Gateway to Kumaon — Haldwani is the commercial capital of the Kumaon region (Nainital, Almora, Pithoragarh). Youth from across Kumaon come here for delivery jobs. Consistently high demand on Swiggy, Zomato, Zepto, and Amazon Flex.',
  },
]

export default function HaldwaniPage() {
  return (
    <PageShell>
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
            <span className="text-foreground">Haldwani</span>
          </nav>
          <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <MapPin className="h-3 w-3" />
            Haldwani, Uttarakhand
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            EV Scooter Rent in Haldwani for Delivery Partners
          </h1>
            <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Haldwani — the commercial capital of Kumaon region. Rent an electric scooter and start earning
            ₹35,000+/month as a delivery partner. Ideal for youth from Nainital, Almora, Pithoragarh,
            Bageshwar, and Champawat seeking delivery jobs. Free charging, helmet, insurance, and 24/7
            local breakdown support. Plans from ₹300/day. Ride for Swiggy, Zomato, Zepto, Amazon Flex.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`${WHATSAPP_BASE}?text=${encodeURIComponent('Hi ZUUM, I want to rent an EV scooter in Haldwani for delivery work. Please share next steps.')}`}
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
            <p className="text-2xl font-bold text-primary">40+</p>
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

        {/* Why ZUUM Haldwani */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">Why Choose ZUUM in Haldwani?</h2>
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
          <h2 className="text-2xl font-semibold sm:text-3xl">Delivery Zones We Cover in Haldwani</h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            ZUUM scooters are authorized for delivery work across all major zones in and around Haldwani.
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
          <h2 className="text-2xl font-semibold sm:text-3xl">Delivery Platforms in Haldwani</h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            ZUUM scooters work seamlessly with all major delivery platforms operating in Haldwani.
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
          <h2 className="text-2xl font-semibold sm:text-3xl">Rental Plans in Haldwani</h2>
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

                {/* Hindi FAQ */}
        <section className="mt-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            हिंदी में जवाब
          </div>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
            अक्सर पूछे जाने वाले सवाल — हल्द्वानी
          </h2>
          <div className="mt-6 space-y-3">
            {hindiFaqs.map((faq, i) => (
              <details key={`hi-${i}`} className="group rounded-xl border border-border bg-card/40 p-5">
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

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">FAQ — Haldwani</h2>
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

        <CTASection
          badge="Ready to Ride"
          title={<>Start Earning in <span>Haldwani</span> Today</>}
          subtitle={<>Join 40+ delivery partners already earning ₹35,000+/month with ZUUM in Haldwani. Apply on WhatsApp — get a scooter assigned within 24 hours.</>}
          whatsappMessage="Hi ZUUM, I want to rent an EV scooter in Haldwani for delivery work. Please share next steps."
          padded={false}
        />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'ZUUM Electric — Haldwani',
              description: 'EV scooter rental service for delivery partners in Haldwani. Free charging, helmet, insurance, and 24/7 breakdown support. Earn ₹35,000+/month.',
              url: 'https://zuum.co.in/locations/haldwani',
              telephone: '+917900333002',
              email: 'info@zuum.co.in',
              image: 'https://zuum.co.in/og-image.png',
              priceRange: '₹300 - ₹6,000',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Haldwani',
                addressRegion: 'Uttarakhand',
                postalCode: '263139',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '29.2244',
                longitude: '79.5130',
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '09:00',
                closes: '21:00',
              },
              areaServed: ['Haldwani', 'Kathgodam', 'Kaladungi', 'Lalkuan'],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [...faqs, ...hindiFaqs].map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            }),
          }}
        />
        <BreadcrumbSchema
          items={[
            { name: 'Home', url: 'https://zuum.co.in/' },
            { name: 'Uttarakhand', url: 'https://zuum.co.in/locations/uttarakhand' },
            { name: 'Haldwani', url: 'https://zuum.co.in/locations/haldwani' },
          ]}
        />
      </main>
    </PageShell>
  )
}
