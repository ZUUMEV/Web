import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ChevronRight, Calculator, PiggyBank } from 'lucide-react'
import { PageShell } from '@/components/page-shell'
import { CTASection } from '@/components/cta-section'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { ProfitCalculator } from '@/components/profit-calculator'

export const metadata: Metadata = {
  title: 'EV vs Petrol Scooter Savings Calculator | ZUUM Electric',
  description: 'Calculate how much you save by renting an EV scooter vs buying a petrol scooter for delivery work. Real cost comparison: fuel, EMI, maintenance, insurance. Save ₹6,074/month.',
 keywords: [
    'EV scooter savings calculator',
    'petrol vs electric scooter calculator',
    'delivery partner savings calculator',
    'bike rent vs buy calculator India',
    'EV rental calculator Uttarakhand',
    'scooter cost comparison India',
    'ईवी बनाम पेट्रोल कैलकुलेटर',
    'स्कूटर रेंट बनाम खरीद',
    'डिलीवरी पार्टनर बचत कैलकुलेटर',
    'बाइक रेंट कैलकूलेटर उत्तराखंड',
    'Haldwani me bike rent calculator',
    'Rudrapur me scooty rent',
  ],
  alternates: { canonical: 'https://zuum.co.in/calculator' },
  openGraph: {
    title: 'EV vs Petrol Scooter Savings Calculator | ZUUM Electric',
    description: 'Calculate your real savings by switching from petrol scooter to EV rental. Save ₹6,074/month or ₹72,888/year.',
    url: 'https://zuum.co.in/calculator',
    type: 'website',
  },
}

export default function CalculatorPage() {
  return (
    <PageShell>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://zuum.co.in' },
          { name: 'Savings Calculator', url: 'https://zuum.co.in/calculator' },
        ]}
      />

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
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
            <span className="text-foreground">Savings Calculator</span>
          </nav>

          <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Calculator className="h-3 w-3" />
            Free Tool
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            EV vs Petrol Scooter Savings Calculator
          </h1>

          <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Find out exactly how much you save by renting a ZUUM EV scooter vs buying a petrol scooter
            for delivery work. Real numbers, real savings — no marketing fluff.
          </p>
        </header>

     {/* Hindi Summary Box */}
        <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/5 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <h2 className="text-base font-semibold sm:text-lg">
                ईवी बनाम पेट्रोल स्कूटर — असली बचत कैलकुलेटर
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                यह कैलकुलेटर बताता है कि पेट्रोल स्कूटर खरीदने के बजाय ज़ूम ईवी रेंट करके आप कितना बचा सकते हैं।
                रोज़ 100 किमी चलाने पर पेट्रोल स्कूटर का असली खर्च <strong className="text-foreground">₹12,274/महीना</strong> है
                (EMI + ईंधन + रखरखाव + इंश्योरेंस), जबकि ज़ूम ईवी का सिर्फ़ <strong className="text-foreground">₹6,200/महीना</strong>।
                मतलब <strong className="text-primary">₹6,074/महीना</strong> या <strong className="text-primary">₹72,888/साल</strong> की बचत!
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Calculator */}
        <section className="mt-8">
          <ProfitCalculator />
        </section>

        {/* SEO Content — Own vs Rent Deep Dive */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            "But I&apos;ll Own the Scooter After 2 Years!" — The Truth
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            This is the most common objection we hear: <em>&ldquo;If I pay ₹1 lakh and buy my own scooter,
            after 2-3 years it becomes my property. Renting feels like throwing money away.&rdquo;</em>
          </p>
          <p className="mt-3 text-base leading-relaxed text-foreground/90">
            It is a fair concern — but the math tells a very different story. Let us break down the
            real 3-year cost comparison between buying a petrol scooter and renting a ZUUM EV scooter
            for full-time delivery work (100 km/day, 3,000 km/month).
          </p>

          <h3 className="mb-2 mt-8 text-xl font-semibold sm:text-2xl">
            Option 1: Buy Petrol Scooter (3-Year Total Cost)
          </h3>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-3 py-2.5 text-left font-semibold">Expense</th>
                  <th className="px-3 py-2.5 text-right font-semibold">Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/60"><td className="px-3 py-2">Down payment (20% of ₹1L)</td><td className="px-3 py-2 text-right">20,000</td></tr>
                <tr className="border-b border-border/60 even:bg-muted/20"><td className="px-3 py-2">EMI @ 12%, 3 years (₹3,321 × 36)</td><td className="px-3 py-2 text-right">1,19,556</td></tr>
                <tr className="border-b border-border/60"><td className="px-3 py-2">Fuel (₹6,721 × 36 months)</td><td className="px-3 py-2 text-right">2,41,956</td></tr>
                <tr className="border-b border-border/60 even:bg-muted/20"><td className="px-3 py-2">Maintenance + wear &amp; tear (₹1,842 × 36)</td><td className="px-3 py-2 text-right">66,312</td></tr>
                <tr className="border-b border-border/60"><td className="px-3 py-2">Insurance + GPS + accessories (3 years)</td><td className="px-3 py-2 text-right">23,400</td></tr>
                <tr className="border-b border-border/60 even:bg-muted/20"><td className="px-3 py-2">Daily road expenses (₹400 × 36)</td><td className="px-3 py-2 text-right">14,400</td></tr>
                <tr className="border-b border-border bg-muted/30 font-semibold"><td className="px-3 py-2.5">Total spent in 3 years</td><td className="px-3 py-2.5 text-right">4,85,624</td></tr>
                <tr className="border-b border-border/60"><td className="px-3 py-2">Scooter resale value after 3 years (60% depreciation)</td><td className="px-3 py-2 text-right text-green-600">- 40,000</td></tr>
                <tr className="bg-red-500/10 font-bold"><td className="px-3 py-2.5">NET COST (money gone forever)</td><td className="px-3 py-2.5 text-right">4,45,624</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="mb-2 mt-8 text-xl font-semibold sm:text-2xl">
            Option 2: Rent ZUUM EV Scooter (3-Year Total Cost)
          </h3>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-3 py-2.5 text-left font-semibold">Expense</th>
                  <th className="px-3 py-2.5 text-right font-semibold">Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/60"><td className="px-3 py-2">Refundable security deposit</td><td className="px-3 py-2 text-right">4,000</td></tr>
                <tr className="border-b border-border/60 even:bg-muted/20"><td className="px-3 py-2">Monthly rental (₹6,000 × 36)</td><td className="px-3 py-2 text-right">2,16,000</td></tr>
                <tr className="border-b border-border/60"><td className="px-3 py-2">Fuel (charging) — FREE</td><td className="px-3 py-2 text-right">0</td></tr>
                <tr className="border-b border-border/60 even:bg-muted/20"><td className="px-3 py-2">Maintenance — covered by ZUUM</td><td className="px-3 py-2 text-right">0</td></tr>
                <tr className="border-b border-border/60"><td className="px-3 py-2">Insurance — included</td><td className="px-3 py-2 text-right">0</td></tr>
                <tr className="border-b border-border/60 even:bg-muted/20"><td className="px-3 py-2">Helmet, accessories — provided</td><td className="px-3 py-2 text-right">0</td></tr>
                <tr className="border-b border-border/60"><td className="px-3 py-2">Daily road expenses (₹200 × 36)</td><td className="px-3 py-2 text-right">7,200</td></tr>
                <tr className="border-b border-border bg-muted/30 font-semibold"><td className="px-3 py-2.5">Total spent in 3 years</td><td className="px-3 py-2.5 text-right">2,27,200</td></tr>
                <tr className="border-b border-border/60"><td className="px-3 py-2">Deposit refunded when you return scooter</td><td className="px-3 py-2 text-right text-green-600">- 4,000</td></tr>
                <tr className="bg-green-500/10 font-bold"><td className="px-3 py-2.5">NET COST (money gone forever)</td><td className="px-3 py-2.5 text-right">2,23,200</td></tr>
              </tbody>
            </table>
          </div>

          {/* The Big Reveal */}
          <div className="mt-8 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-cyan-400/10 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <PiggyBank className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold sm:text-3xl">
                3-Year Verdict: Renting Saves ₹2,22,424
              </h3>
            </div>
            <p className="mt-3 text-base leading-relaxed text-foreground/90">
              Yes, after 3 years you &ldquo;own&rdquo; a depreciated petrol scooter worth ₹40,000.
              But you paid <strong className="text-foreground">₹2.22 lakh extra</strong> for that
              &ldquo;asset&rdquo;. That is a <strong className="text-foreground">556% premium</strong> over
              the scooter&apos;s actual value. Renting is not throwing money away — buying without
              calculating total cost of ownership is.
            </p>
          </div>

          {/* Opportunity Cost */}
          <h3 className="mb-2 mt-10 text-xl font-semibold sm:text-2xl">
            Hidden Cost #1: Opportunity Cost
          </h3>
          <p className="mt-2 text-base leading-relaxed text-foreground/90">
            If you saved the <strong>₹6,074/month</strong> difference in a mutual fund SIP at 12% returns,
            after 3 years you would have <strong className="text-primary">₹3,05,000</strong> in your
            investment account. That is <strong>7.6x</strong> the value of your depreciated scooter.
          </p>

          <h3 className="mb-2 mt-8 text-xl font-semibold sm:text-2xl">
            Hidden Cost #2: Major Repairs in Years 3-5
          </h3>
          <p className="mt-2 text-base leading-relaxed text-foreground/90">
            Petrol scooters in years 3-5 need: new tyres (₹3,500), clutch replacement (₹2,500),
            brake overhaul (₹1,800), electrical repairs (₹2,000), engine service (₹3,000). That is
            <strong> ₹12,800+ extra</strong> in maintenance — money you never planned to spend.
          </p>

          <h3 className="mb-2 mt-8 text-xl font-semibold sm:text-2xl">
            Hidden Cost #3: Technology Obsolescence
          </h3>
          <p className="mt-2 text-base leading-relaxed text-foreground/90">
            EV technology in 2028 will be dramatically better than 2026 models — longer range, faster
            charging, smarter features. When you rent from ZUUM, you always get the latest models.
            When you own, you are stuck with outdated tech.
          </p>

          <h3 className="mb-2 mt-8 text-xl font-semibold sm:text-2xl">
            Hidden Cost #4: Risk &amp; Liability
          </h3>
          <ul className="ml-6 mt-3 list-disc space-y-2 text-foreground/90">
            <li>Theft: Petrol scooter stolen = ₹1L loss. ZUUM EV stolen = ₹500 deductible.</li>
            <li>Accident: Major damage on owned scooter = ₹10K-25K repair. ZUUM EV = covered.</li>
            <li>Breakdown: Owned scooter downtime = lost earnings. ZUUM = replacement in 2 hours.</li>
            <li>Resale hassle: Selling a 3-year-old scooter means haggling with 10+ buyers, lowball offers, RC transfer paperwork.</li>
          </ul>
        </section>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold sm:text-3xl">Frequently Asked Questions</h2>

          <div className="mt-6 space-y-4">
            <details className="group rounded-xl border border-border bg-card/40 p-5">
              <summary className="cursor-pointer list-none">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-medium">Is not buying always better than renting long-term?</h3>
                  <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-90" />
                </div>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">
                No. For delivery work specifically, renting an EV saves ₹2.22 lakh over 3 years compared
                to buying a petrol scooter on EMI. The total cost of ownership (EMI + fuel + maintenance +
                insurance + depreciation) far exceeds rental cost. Renting is the smarter financial choice
                for full-time delivery partners.
              </p>
            </details>

            <details className="group rounded-xl border border-border bg-card/40 p-5">
              <summary className="cursor-pointer list-none">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-medium">What if I pay cash instead of taking EMI?</h3>
                  <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-90" />
                </div>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">
                Even with cash purchase, you spend ₹1L upfront + ₹8,953/month running costs. Over 3 years:
                ₹1L + ₹3.22L = ₹4.22L total, minus ₹40K resale = ₹3.82L net cost. ZUUM rental costs
                ₹2.23L over 3 years. You still save ₹1.59L by renting — plus you keep your ₹1L cash
                free for emergencies or investment.
              </p>
            </details>

            <details className="group rounded-xl border border-border bg-card/40 p-5">
              <summary className="cursor-pointer list-none">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-medium">But what if I want to keep the scooter for 8-10 years?</h3>
                  <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-90" />
                </div>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">
                After 5 years, a petrol scooter needs engine overhaul (₹15K-25K), has resale value of
                only ₹20-25K, and is unreliable for daily delivery work. The &ldquo;own for 10 years&rdquo;
                math only works if you ride 20-30 km/day casually. For 100 km/day delivery work, scooters
                wear out in 4-5 years regardless of ownership.
              </p>
            </details>

            <details className="group rounded-xl border border-border bg-card/40 p-5">
              <summary className="cursor-pointer list-none">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-medium">How accurate are these calculations?</h3>
                  <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-90" />
                </div>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">
                These numbers are based on real delivery partner data from 75+ active ZUUM riders in
                Haldwani and Rudrapur. Petrol price (₹100.82/liter) is Uttarakhand average as of Aug 2026.
                Mileage (45 kmpl) is real-world city traffic figure, not showroom claim. EMI calculation
                uses standard 12% interest rate for 3-year two-wheeler loan.
              </p>
            </details>
                   </div>
        </section>

        {/* Hindi FAQ Section */}
        <section className="mt-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            हिंदी में जवाब
          </div>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
            ईवी बनाम पेट्रोल — अक्सर पूछे जाने वाले सवाल
          </h2>
          <div className="mt-6 space-y-3">
            <details className="group rounded-xl border border-border bg-card/40 p-5">
              <summary className="cursor-pointer list-none">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-medium">क्या ईवी स्कूटर रेंट पेट्रोल से सस्ता है?</h3>
                  <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-90" />
                </div>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">
                हाँ, बहुत ज़्यादा! ईवी रेंट से ₹6,074/महीना (सब खर्च मिलाकर) बचत होती है। पेट्रोल स्कूटर का असली खर्च ₹12,274/महीना है (EMI + ईंधन + रखरखाव + इंश्योरेंस), जबकि ज़ूम ईवी का सिर्फ़ ₹6,200/महीना। 5 साल में ₹4.4 लाख+ की बचत।
              </p>
            </details>

            <details className="group rounded-xl border border-border bg-card/40 p-5">
              <summary className="cursor-pointer list-none">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-medium">अगर मैं खुद स्कूटर खरीद लूँ तो 2-3 साल बाद वो मेरी हो जाएगी?</h3>
                  <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-90" />
                </div>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">
                सही सवाल! लेकिन गणना बताती है कि 3 साल में पेट्रोल स्कूटर पर ₹4,85,624 खर्च होते हैं, और 3 साल बाद उसकी कीमत सिर्फ़ ₹40,000 रह जाती है (60% depreciation)। जबकि ज़ूम ईवी रेंट में 3 साल का खर्च सिर्फ़ ₹2,23,200। मतलब रेंट करके ₹2,22,424 की बचत!
              </p>
            </details>

            <details className="group rounded-xl border border-border bg-card/40 p-5">
              <summary className="cursor-pointer list-none">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-medium">ईवी स्कूटर की बैटरी कितने साल चलती है?</h3>
                  <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-90" />
                </div>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">
                ज़ूम ईवी स्कूटर की बैटरी 80-100 किमी per charge चलती है। बैटरी की उम्र 3-5 साल है, और बैटरी रिप्लेसमेंट ज़ूम की ज़िम्मेदारी है — आपको कुछ नहीं देना। यही रेंट का सबसे बड़ा फायदा है।
              </p>
            </details>

            <details className="group rounded-xl border border-border bg-card/40 p-5">
              <summary className="cursor-pointer list-none">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-medium">क्या मैं घर पर ईवी चार्ज कर सकता हूँ?</h3>
                  <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-90" />
                </div>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">
                ज़ूम हल्द्वानी और रुद्रपुर में free charging stations देता है। घर पर चार्ज करना संभव है लेकिन ज़रूरी नहीं — स्टेशन चार्जिंग ज़्यादा तेज़ और मुफ़्त है। आप unlimited बार charge कर सकते हैं।
              </p>
            </details>
          </div>
        </section>
      </main>

      <CTASection
        badge="Calculate Profit"
        title={<>Ready to save <span>₹6,074/month?</span></>}
        subtitle="Join 75+ delivery partners saving ₹72,888/year with ZUUM EV rentals in Haldwani and Rudrapur."
        whatsappMessage="Hi ZUUM, I used your savings calculator and want to rent an EV scooter. Please share next steps."
        showRegister={true}
      />

      {/* WebApplication JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'ZUUM EV Savings Calculator',
            description: 'Calculate your savings by renting an EV scooter vs buying a petrol scooter for delivery work in India.',
            url: 'https://zuum.co.in/calculator',
            applicationCategory: 'Utility',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'INR',
            },
          }),
        }}
      />

            {/* Hindi FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'क्या ईवी स्कूटर रेंट पेट्रोल से सस्ता है?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'हाँ, बहुत ज़्यादा! ईवी रेंट से ₹6,074/महीना बचत होती है। पेट्रोल स्कूटर का असली खर्च ₹12,274/महीना है, जबकि ज़ूम ईवी का सिर्फ़ ₹6,200/महीना। 5 साल में ₹4.4 लाख+ की बचत।',
                },
              },
              {
                '@type': 'Question',
                name: 'अगर मैं खुद स्कूटर खरीद लूँ तो 2-3 साल बाद वो मेरी हो जाएगी?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '3 साल में पेट्रोल स्कूटर पर ₹4,85,624 खर्च होते हैं, और 3 साल बाद उसकी कीमत सिर्फ़ ₹40,000 रह जाती है। ज़ूम ईवी रेंट में 3 साल का खर्च सिर्फ़ ₹2,23,200। रेंट करके ₹2,22,424 की बचत।',
                },
              },
              {
                '@type': 'Question',
                name: 'ईवी स्कूटर की बैटरी कितने साल चलती है?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'ज़ूम ईवी स्कूटर की बैटरी 80-100 किमी per charge चलती है। बैटरी की उम्र 3-5 साल है, और बैटरी रिप्लेसमेंट ज़ूम की ज़िम्मेदारी है।',
                },
              },
              {
                '@type': 'Question',
                name: 'क्या मैं घर पर ईवी चार्ज कर सकता हूँ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'ज़ूम हल्द्वानी और रुद्रपुर में free charging stations देता है। घर पर चार्ज करना संभव है लेकिन ज़रूरी नहीं — स्टेशन चार्जिंग ज़्यादा तेज़ और मुफ़्त है।',
                },
              },
            ],
          }),
        }}
      />
      
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Is not buying always better than renting long-term?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. For delivery work specifically, renting an EV saves ₹2.22 lakh over 3 years compared to buying a petrol scooter on EMI. The total cost of ownership far exceeds rental cost.',
                },
              },
              {
                '@type': 'Question',
                name: 'What if I pay cash instead of taking EMI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Even with cash purchase, you spend ₹1L upfront + ₹3.22L running costs over 3 years, minus ₹40K resale = ₹3.82L net. ZUUM rental costs ₹2.23L. You still save ₹1.59L by renting — plus keep your cash free.',
                },
              },
              {
                '@type': 'Question',
                name: 'But what if I want to keep the scooter for 8-10 years?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'After 5 years, petrol scooters need engine overhaul (₹15K-25K), resale value drops to ₹20-25K, and reliability decreases for daily delivery work. The own-for-10-years math only works for casual 20-30 km/day use, not 100 km/day delivery work.',
                },
              },
            ],
          }),
        }}
      />
    </PageShell>
  )
}
