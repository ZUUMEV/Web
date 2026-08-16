import { Header } from '@/components/sections/header'
import { Hero } from '@/components/sections/hero'
import { PartnerMarquee } from '@/components/sections/partner-marquee'
import { HowToJoin } from '@/components/sections/how-to-join'
import { Plans } from '@/components/sections/plans'
import { Benefits } from '@/components/sections/benefits'
import { Compare } from '@/components/sections/compare'
import { FAQ } from '@/components/sections/faq'
import { Impact } from '@/components/sections/impact'
import { CTA } from '@/components/sections/cta'
import { Footer } from '@/components/sections/footer'
import { FloatingWhatsApp } from '@/components/sections/floating-whatsapp'
import { LocalBusinessSchema, FAQSchema } from '@/components/json-ld'

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data for Google Rich Results */}
      <LocalBusinessSchema />
      <FAQSchema />

      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <PartnerMarquee />
          <HowToJoin />
          <Plans />
          <Benefits />
          <Compare />
          <FAQ />
          <Impact />
          <CTA />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  )
}
