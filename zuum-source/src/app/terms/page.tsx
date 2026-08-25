import type { Metadata } from 'next'
import { LegalShell, LegalSection, LegalSubSection } from '@/components/legal-shell'
import { PageShell } from '@/components/page-shell'
import { CTASection } from '@/components/cta-section'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'

export const metadata: Metadata = {
  title: 'Terms of Service | ZUUM Electric',
  description:
    'Terms and conditions for renting EV scooters from ZUUM Electric. Rental agreement, rider responsibilities, payments, deposits, and grievance redressal for delivery partners in Haldwani and Rudrapur.',
  alternates: { canonical: 'https://zuum.co.in/terms' },
  openGraph: {
    title: 'Terms of Service | ZUUM Electric',
    description:
      'Rental terms and conditions for ZUUM Electric delivery partners in Haldwani and Rudrapur, Uttarakhand.',
    url: 'https://zuum.co.in/terms',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Terms of Service — ZUUM Electric' }],
  },
}

export default function TermsPage() {
  return (
    <PageShell>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://zuum.co.in' },
          { name: 'Terms of Service', url: 'https://zuum.co.in/terms' },
        ]}
      />
      <LegalShell
        title="Terms of Service"
        description="The rental agreement between you and ZUUM Electric for EV scooter rentals in Haldwani and Rudrapur, Uttarakhand."
        lastUpdated="August 2026"
      >
      <LegalSection title="1. Acceptance of Terms">
        <p>
          By accessing or using the ZUUM Electric website (https://zuum.co.in), our WhatsApp business
          channel, or our EV scooter rental services in Haldwani and Rudrapur, you agree to be bound
          by these Terms of Service. If you do not agree with any part of these terms, please do not
          use our services or submit your registration. These terms form a legally binding agreement
          between you (&ldquo;Rider&rdquo;, &ldquo;you&rdquo;) and ZUUM Electric (&ldquo;ZUUM&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;) governing the rental of electric scooters for delivery work.
        </p>
        <p>
          These terms are in addition to the Refund Policy, Privacy Policy, and any plan-specific
          terms communicated at the time of booking. In case of any conflict, the specific terms
          communicated at the time of booking shall prevail.
        </p>
      </LegalSection>

      <LegalSection title="2. Eligibility">
        <p>To rent a scooter from ZUUM, you must meet all of the following criteria:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Be at least 18 years of age</li>
          <li>Hold a valid Indian driving license (LMV or MCWG / MCWG-GEAR endorsement for gearless scooters)</li>
          <li>Possess an Aadhaar card or equivalent government-issued ID for KYC</li>
          <li>Have a functioning mobile number and WhatsApp account for communication</li>
          <li>Not be barred from entering into a contract under Indian law</li>
        </ul>
        <p>
          We reserve the right to refuse rental to anyone who fails to meet these criteria or has
          previously violated our terms. We may also refuse service at our sole discretion in case of
          a poor track record on previous rentals (accidents, unpaid dues, traffic violations).
        </p>
      </LegalSection>

      <LegalSection title="3. Rental Plans">
        <p>ZUUM offers three rental plans as of the date of these terms:</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-2 pr-4 font-semibold">Plan</th>
                <th className="py-2 pr-4 font-semibold">Price</th>
                <th className="py-2 pr-4 font-semibold">KM included</th>
                <th className="py-2 pr-4 font-semibold">Excess km charge</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/60"><td className="py-2 pr-4">Daily</td><td className="py-2 pr-4">&#8377;300 per day</td><td className="py-2 pr-4">100 km / day</td><td className="py-2 pr-4">&#8377;3 per km</td></tr>
              <tr className="border-b border-border/60"><td className="py-2 pr-4">Weekly</td><td className="py-2 pr-4">&#8377;1,600 per week</td><td className="py-2 pr-4">700 km / week</td><td className="py-2 pr-4">&#8377;3 per km</td></tr>
              <tr><td className="py-2 pr-4">Monthly</td><td className="py-2 pr-4">&#8377;6,000 per month</td><td className="py-2 pr-4">3,000 km / month</td><td className="py-2 pr-4">&#8377;3 per km</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          A refundable security deposit of &#8377;4,000 is also required at the time of scooter handover.
          This is separate from the rental fee and is refunded within 7 business days of scooter
          return, subject to deductions for damages (see Section 7). ZUUM may revise plan prices with
          14 days notice. Existing active rentals continue at the previously booked price until expiry.
        </p>
      </LegalSection>

      <LegalSection title="4. What's Included">
        <p>Your rental fee covers:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>One fully charged electric scooter (model assigned by ZUUM based on availability)</li>
          <li>Free charging at all ZUUM charging stations in Haldwani and Rudrapur</li>
          <li>One ISI-certified helmet</li>
          <li>Comprehensive insurance for the scooter (third-party + own damage)</li>
          <li>24/7 roadside breakdown support</li>
          <li>Free routine maintenance (brake pads, tyre pressure, brake fluid, electrical checks)</li>
        </ul>
        <p>The rental fee does NOT cover:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Personal accident insurance for the rider (we recommend you obtain one separately or through your delivery platform)</li>
          <li>Traffic fines or challans issued during the rental period</li>
          <li>Parking fees</li>
          <li>Damages caused by rider negligence or accidents (see Section 7)</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Rider Responsibilities">
        <p>As a ZUUM rider, you agree to:</p>

        <LegalSubSection title="5.1 Safe Riding">
          <ul className="list-disc space-y-1 pl-5">
            <li>Wear the provided helmet at all times while riding</li>
            <li>Obey all traffic laws under the Motor Vehicles Act, 1988</li>
            <li>Avoid riding under the influence of alcohol, drugs, or medication that impairs riding</li>
            <li>Not carry pillion riders unless the scooter is rated for it and a second helmet is provided</li>
            <li>Not use a mobile phone while riding</li>
          </ul>
        </LegalSubSection>

        <LegalSubSection title="5.2 Scooter Care">
          <ul className="list-disc space-y-1 pl-5">
            <li>Keep the scooter clean and protected from weather where possible</li>
            <li>Charge the scooter regularly at ZUUM stations (free)</li>
            <li>Report any breakdown, damage, or unusual sounds to ZUUM within 24 hours</li>
            <li>Not modify, paint, or alter the scooter in any way</li>
            <li>Not sub-rent, lend, or transfer the scooter to any other person</li>
          </ul>
        </LegalSubSection>

        <LegalSubSection title="5.3 Use Within Service Area">
          <ul className="list-disc space-y-1 pl-5">
            <li>Ride only within Haldwani, Rudrapur, and adjoining areas (within 50 km radius)</li>
            <li>Crossing state borders (e.g., entering Nepal via the Uttarakhand border) is prohibited and may result in deposit forfeiture</li>
            <li>If you intend to ride outside the service area for delivery work, prior written approval from ZUUM is required</li>
          </ul>
        </LegalSubSection>
      </LegalSection>

      <LegalSection title="6. Payments">
        <ul className="list-disc space-y-1 pl-5">
          <li>Rental fees are payable in advance via UPI, bank transfer, or cash at a ZUUM station</li>
          <li>Late payment beyond 24 hours of plan expiry results in &#8377;50 per day late fee</li>
          <li>Non-payment beyond 3 days results in scooter repossession and deposit forfeiture</li>
          <li>All payments are subject to applicable GST as per Indian tax law</li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Damages and Loss">
        <p>You are responsible for the cost of repair or replacement of the scooter in case of:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Accident damage (&#8377;500 deductible per incident; balance covered by insurance)</li>
          <li>Theft or total loss (up to &#8377;4,000 deductible; balance covered by insurance)</li>
          <li>Damage due to negligence, abuse, or unauthorized modification (full cost borne by rider)</li>
          <li>Loss of accessories (helmet, charger, keys) &mdash; replacement cost as per ZUUM standard rate card</li>
        </ul>
        <p>
          Normal wear and tear (brake pad wear, tyre wear, electrical component fatigue) is NOT
          charged to the rider and is covered under routine maintenance. Any damage dispute is
          resolved as per Section 8 of our Refund Policy.
        </p>
      </LegalSection>

      <LegalSection title="8. Breakdown and Support">
        <p>ZUUM provides 24/7 roadside breakdown support:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Call +91 79003 33002 or WhatsApp https://wa.me/917900333002</li>
          <li>Average response time is 45 minutes within Haldwani / Rudrapur city limits</li>
          <li>If the scooter cannot be repaired on-site, ZUUM provides a replacement scooter within 2 hours (subject to availability)</li>
          <li>No additional charge for breakdown support within the service area</li>
        </ul>
      </LegalSection>

      <LegalSection title="9. Refundable Deposit">
        <ul className="list-disc space-y-1 pl-5">
          <li>The &#8377;4,000 deposit is collected at scooter handover</li>
          <li>It is refunded within 7 business days of scooter return to the same payment method</li>
          <li>Deductions may apply for: unpaid rental fees, late fees, damage charges, or accessory loss</li>
          <li>You will receive an itemized deduction statement before any deduction is made</li>
        </ul>
        <p>Full refund terms are in our Refund Policy.</p>
      </LegalSection>

      <LegalSection title="10. Term and Termination">
        <ul className="list-disc space-y-1 pl-5">
          <li>The rental agreement is valid for the duration of the plan selected (1 day / 7 days / 30 days)</li>
          <li>It auto-renews only if you opt in via WhatsApp before expiry</li>
          <li>Either party may terminate early with 24 hours notice; refund of unused days is calculated as per our Refund Policy</li>
          <li>ZUUM may terminate immediately in case of: payment default beyond 3 days, scooter abuse, traffic violations exceeding 3 challans, or unlawful use</li>
        </ul>
      </LegalSection>

      <LegalSection title="11. Delivery Platform Partnerships">
        <p>
          ZUUM is an independent scooter rental service. We are NOT a Swiggy, Zomato, Zepto, BlinkIt,
          or Amazon Flex partner or subsidiary. Listing our support for these platforms means:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Our scooters are suitable for delivery work on these platforms</li>
          <li>We can guide you through registration on these platforms</li>
          <li>We do NOT guarantee onboarding, earnings, or shifts on these platforms</li>
          <li>Earnings of &#8377;30,000 to &#8377;45,000 per month are indicative and depend on the rider&rsquo;s hours, platform availability, and location</li>
        </ul>
      </LegalSection>

      <LegalSection title="12. Intellectual Property">
        <p>
          All branding, logos, scooter designs, and content on https://zuum.co.in are the
          intellectual property of ZUUM Electric. You may not use any of our trademarks, branding, or
          content for any commercial purpose without our written consent. The website source code,
          visual design, and text content are protected under Indian copyright law.
        </p>
      </LegalSection>

      <LegalSection title="13. Disclaimer of Warranties">
        <p>
          The scooter is provided &ldquo;as is&rdquo; without warranties of any kind, express or
          implied. ZUUM does not guarantee that the scooter will be available 100% of the time or
          that the rider will achieve a specific earnings level. Battery range may vary based on
          riding conditions, load, and weather. We will, however, ensure the scooter is in
          roadworthy condition at the time of handover and provide prompt breakdown support as
          described in Section 8.
        </p>
      </LegalSection>

      <LegalSection title="14. Limitation of Liability">
        <p>
          ZUUM&rsquo;s total liability for any claim arising out of or related to these terms or the
          rental service is limited to the rental fee paid by the rider in the preceding 3 months.
          We are not liable for indirect, incidental, consequential, or punitive damages, including
          loss of income, lost earnings, or business interruption. We are also not liable for any
          traffic fines, criminal charges, or civil claims arising out of the rider&rsquo;s use of
          the scooter.
        </p>
      </LegalSection>

      <LegalSection title="15. Governing Law and Disputes">
        <ul className="list-disc space-y-1 pl-5">
          <li>These terms are governed by the laws of India</li>
          <li>Disputes are subject to the exclusive jurisdiction of courts in Haldwani, Uttarakhand</li>
          <li>We will attempt to resolve any dispute amicably within 30 days of receiving your written complaint</li>
          <li>If unresolved, you may approach the Consumer Disputes Redressal Commission under the Consumer Protection Act, 2019</li>
        </ul>
      </LegalSection>

      <LegalSection title="16. Grievance Officer">
        <p>For any grievances, contact our Grievance Officer:</p>
        <ul className="list-none space-y-1 pl-1">
          <li><strong>Email:</strong> info@zuum.co.in</li>
          <li><strong>Phone:</strong> +91 79003 33002</li>
          <li><strong>Address:</strong> Haldwani, Uttarakhand, India</li>
        </ul>
        <p>
          If your concern is not resolved within 30 days, you may approach the National Consumer
          Helpline at 1915 or file a complaint at https://consumerhelpline.gov.in.
        </p>
      </LegalSection>

      <LegalSection title="17. Changes to Terms">
        <p>
          We may update these Terms of Service periodically. Material changes will be communicated
          via WhatsApp or email at least 14 days before they take effect. Continued use of ZUUM
          services after the effective date constitutes acceptance of the updated terms.
        </p>
      </LegalSection>

      <LegalSection title="18. Contact">
        <p>For any questions about these Terms, contact us:</p>
        <ul className="list-none space-y-1 pl-1">
          <li><strong>Email:</strong> info@zuum.co.in</li>
          <li><strong>Phone:</strong> +91 79003 33002</li>
          <li><strong>WhatsApp:</strong> https://wa.me/917900333002</li>
        </ul>
            </LegalSection>
      </LegalShell>

      <CTASection
        badge="Questions?"
        title={<>Still have <span>questions?</span></>}
        subtitle="Our team is available 9:00 AM to 9:00 PM, all days. WhatsApp us for the fastest response."
        whatsappMessage="Hi ZUUM, I have a question about the Terms of Service."
        showRegister={false}
      />
    </PageShell>
  )
}
