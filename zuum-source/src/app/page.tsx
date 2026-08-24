import { Hero } from '@/components/sections/hero'
import { PartnerMarquee } from '@/components/sections/partner-marquee'
import { HowToJoin } from '@/components/sections/how-to-join'
import { Plans } from '@/components/sections/plans'
import { Benefits } from '@/components/sections/benefits'
import { Compare } from '@/components/sections/compare'
import { FAQ } from '@/components/sections/faq'
import { Impact } from '@/components/sections/impact'
import { HomeBlog } from '@/components/sections/home-blog'
import { CTASection } from '@/components/cta-section'
import { PageShell } from '@/components/page-shell'
import { LocalBusinessSchema, FAQSchema } from '@/components/json-ld'

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema />
      <PageShell>
        <Hero />
        <PartnerMarquee />
        <HowToJoin />
        <Plans />
        <Benefits />
        <Compare />
        <FAQ />
        <Impact />
        <HomeBlog />
        <CTASection
          badge="Ready to Ride"
          title={<>Ready to start your <span>delivery journey?</span></>}
          subtitle={<>Join <strong className="text-foreground">75+ riders</strong> in Haldwani & Rudrapur. Book your EV scooter today and start earning with zero fuel cost.</>}
        />
      </PageShell>
    </>
  )
}
