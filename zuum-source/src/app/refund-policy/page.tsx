import type { Metadata } from 'next'
import { LegalShell, LegalSection, LegalSubSection } from '@/components/legal-shell'
import { PageShell } from '@/components/page-shell'
import { CTASection } from '@/components/cta-section'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | ZUUM Electric',
  description:
    'ZUUM Electric refund and cancellation policy for EV scooter rentals in Haldwani and Rudrapur. Refundable deposit terms, plan cancellation, processing time, and grievance redressal.',
  alternates: { canonical: 'https://zuum.co.in/refund-policy' },
  openGraph: {
    title: 'Refund & Cancellation Policy | ZUUM Electric',
    description:
      'Refundable deposit, plan cancellation, processing time, and grievance redressal for ZUUM EV scooter rentals.',
    url: 'https://zuum.co.in/refund-policy',
    type: 'website',
  },
}

export default function RefundPolicyPage() {
  return (
    <PageShell>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://zuum.co.in/' },
          { name: 'Refund Policy', url: 'https://zuum.co.in/refund-policy' },
        ]}
      />
      <LegalShell
        title="Refund & Cancellation Policy"
        description="How refunds and cancellations work for ZUUM Electric scooter rentals in Haldwani and Rudrapur, Uttarakhand."
        lastUpdated="August 2026"
      >
      <LegalSection title="1. Overview">
        <p>
          This Refund and Cancellation Policy applies to all rental payments and security deposits
          made to ZUUM Electric for EV scooter rentals in Haldwani and Rudrapur, Uttarakhand. By
          making a payment to ZUUM, you agree to the refund terms described below. This policy is
          governed by the Consumer Protection Act, 2019 and the Digital Personal Data Protection Act,
          2023.
        </p>
        <p>
          We aim to process every legitimate refund within 7 business days of scooter return. If
          at any point you believe a refund has been delayed or denied incorrectly, please contact
          us at info@zuum.co.in before initiating a chargeback with your bank.
        </p>
      </LegalSection>

      <LegalSection title="2. Refundable Security Deposit">
        <p>
          A security deposit of &#8377;4,000 is collected at the time of scooter handover. This
          deposit is:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Refundable in full when the scooter is returned in good condition with all accessories (helmet, charger, keys)</li>
          <li>Subject to deductions for: unpaid rental fees, late fees, traffic challans, damage charges, or accessory loss</li>
          <li>Refunded within 7 business days of scooter return to the original payment method (UPI / bank account)</li>
        </ul>
        <p>
          If the deposit was paid in cash, it is refunded via UPI transfer to your linked bank
          account within 7 business days. You will need to share a valid UPI ID or bank account
          number at the time of scooter return.
        </p>
      </LegalSection>

      <LegalSection title="3. Rental Fee Refunds">
        <LegalSubSection title="3.1 Cancellation Before Rental Start">
          <ul className="list-disc space-y-1 pl-5">
            <li>If you cancel your booking 24+ hours before the scheduled start: full refund of rental fee within 5 business days</li>
            <li>If you cancel within 24 hours of start: 50% refund of rental fee</li>
            <li>If you cancel after the rental period has started: no refund (you can return the scooter early, refund calculated as per Section 3.2)</li>
          </ul>
        </LegalSubSection>

        <LegalSubSection title="3.2 Early Return (Mid-Rental)">
          <ul className="list-disc space-y-1 pl-5">
            <li><strong>Daily plan:</strong> no refund for unused hours</li>
            <li><strong>Weekly plan:</strong> prorated refund for unused full days (e.g., return after 4 days of a 7-day plan = refund for 3 days at &#8377;300/day = &#8377;900)</li>
            <li><strong>Monthly plan:</strong> prorated refund for unused full days (e.g., return after 18 days of a 30-day plan = refund for 12 days at &#8377;200/day = &#8377;2,400)</li>
          </ul>
        </LegalSubSection>

        <LegalSubSection title="3.3 Plan Downgrade (Mid-Rental)">
          <ul className="list-disc space-y-1 pl-5">
            <li>You may downgrade your plan mid-rental (e.g., Monthly to Weekly). The unused balance is calculated and refunded within 7 business days.</li>
            <li>Plan downgrades are not allowed within 48 hours of plan expiry.</li>
          </ul>
        </LegalSubSection>
      </LegalSection>

      <LegalSection title="4. Non-Refundable Scenarios">
        <p>The following are NOT eligible for refund:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Kilometers included in your plan that you did not use (e.g., if you used only 50 of 100 km in your Daily plan)</li>
          <li>Late fees, traffic challans, or damage charges deducted from your deposit</li>
          <li>Time lost due to traffic, weather, personal reasons, or delivery platform unavailability</li>
          <li>Booking cancellation after the rental has started (only early-return prorated refund applies)</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Refund Processing Time">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-2 pr-4 font-semibold">Refund type</th>
                <th className="py-2 pr-4 font-semibold">Processing time</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/60"><td className="py-2 pr-4">UPI / IMPS refunds</td><td className="py-2 pr-4">3-5 business days</td></tr>
              <tr className="border-b border-border/60"><td className="py-2 pr-4">NEFT / bank transfer</td><td className="py-2 pr-4">5-7 business days</td></tr>
              <tr className="border-b border-border/60"><td className="py-2 pr-4">Cash refund (deposit paid in cash)</td><td className="py-2 pr-4">7 business days via UPI</td></tr>
              <tr><td className="py-2 pr-4">Wallet refunds (if applicable)</td><td className="py-2 pr-4">Within 24 hours</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Refunds are processed only on business days (Monday to Saturday, excluding public holidays
          in Uttarakhand). Weekends and gazetted holidays are not counted toward processing time.
        </p>
      </LegalSection>

      <LegalSection title="6. Refund Tracking">
        <p>Once your refund is initiated, you will receive:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>A WhatsApp message with the refund reference number within 24 hours</li>
          <li>A final confirmation message when the refund hits your account</li>
        </ul>
        <p>
          If you do not receive a refund within the stated timeline, contact us at info@zuum.co.in
          or WhatsApp https://wa.me/917900333002. Please share your rental ID and refund reference
          number for faster resolution.
        </p>
      </LegalSection>

      <LegalSection title="7. Failed Refunds">
        <p>If a refund fails due to incorrect bank / UPI details provided by you, we will:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Notify you via WhatsApp within 3 business days</li>
          <li>Request corrected bank details</li>
          <li>Re-initiate the refund within 2 business days of receiving correct details</li>
        </ul>
        <p>
          If we are unable to process the refund after 3 attempts over 30 days due to non-response
          from your side, the refund amount is forfeited and the matter is escalated to grievance
          redressal.
        </p>
      </LegalSection>

      <LegalSection title="8. Damage-Related Deductions">
        <p>If the scooter is returned with damage, the following process applies:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>A pre-return inspection is conducted in your presence at a ZUUM station</li>
          <li>Damage is assessed and an itemized cost estimate is shared with you within 24 hours</li>
          <li>You have 48 hours to dispute the estimate</li>
          <li>After dispute resolution (or 48 hours with no dispute), the amount is deducted from your deposit and the balance is refunded</li>
        </ul>
        <p>Damage cost estimates are based on:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Spare parts cost at ZUUM&rsquo;s standard rate card (shared on request)</li>
          <li>Labor at &#8377;200 per hour</li>
          <li>Insurance deductible (&#8377;500 per accident, &#8377;4,000 for theft / total loss)</li>
        </ul>
      </LegalSection>

      <LegalSection title="9. Cancellation by ZUUM">
        <p>If ZUUM cancels your booking before rental start due to:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Unavailability of scooters: full refund within 3 business days + priority booking for next availability</li>
          <li>Documentation issues (invalid license, failed KYC): full refund within 5 business days</li>
          <li>Force majeure (natural disaster, government order, pandemic): full refund within 7 business days</li>
        </ul>
        <p>If ZUUM recalls the scooter mid-rental due to:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Rider violation of terms (Section 10 of Terms of Service): no refund for the active rental period; deposit refunded after inspection</li>
          <li>Scooter mechanical failure beyond repair: prorated refund for unused days + &#8377;500 inconvenience credit</li>
        </ul>
      </LegalSection>

      <LegalSection title="10. Chargebacks and Disputes">
        <p>
          If you initiate a chargeback via your bank / UPI provider without first contacting ZUUM,
          we will:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Attempt to resolve the dispute directly with you within 7 business days</li>
          <li>Provide all evidence of service rendered to your bank</li>
          <li>Suspend your account pending resolution</li>
        </ul>
        <p>
          We encourage you to contact us first at info@zuum.co.in before initiating a chargeback.
          Most disputes are resolved within 48 hours when brought directly to us.
        </p>
      </LegalSection>

      <LegalSection title="11. Grievance Redressal">
        <p>If you are unsatisfied with our refund decision, you may:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Escalate to our Grievance Officer at info@zuum.co.in (response within 7 days)</li>
          <li>File a complaint with the Consumer Disputes Redressal Commission (District Forum, Haldwani) under the Consumer Protection Act, 2019</li>
          <li>Approach the National Consumer Helpline at 1915 or https://consumerhelpline.gov.in</li>
        </ul>
      </LegalSection>

      <LegalSection title="12. Changes to This Policy">
        <p>
          We may update this Refund Policy periodically. The &ldquo;Last updated&rdquo; date at the
          top of this page reflects the most recent revision. Material changes will be communicated
          via WhatsApp or email at least 14 days before they take effect.
        </p>
      </LegalSection>

      <LegalSection title="13. Contact">
        <p>For any refund-related queries, contact us:</p>
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
        whatsappMessage="Hi ZUUM, I have a question about the Refund Policy."
        showRegister={false}
      />
    </PageShell>
  )
}
