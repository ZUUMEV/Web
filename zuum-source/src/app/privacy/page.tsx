import type { Metadata } from 'next'
import { LegalShell, LegalSection, LegalSubSection } from '@/components/legal-shell'
import { PageShell } from '@/components/page-shell'
import { CTASection } from '@/components/cta-section'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'

export const metadata: Metadata = {
  title: 'Privacy Policy | ZUUM Electric',
  description:
    'How ZUUM Electric collects, uses, and protects your personal data. DPDPA 2023 compliant data practices for delivery partners renting EV scooters in Haldwani and Rudrapur.',
  alternates: { canonical: 'https://zuum.co.in/privacy' },
  openGraph: {
    title: 'Privacy Policy | ZUUM Electric',
    description:
      'DPDPA 2023 compliant privacy policy for ZUUM Electric delivery partners in Haldwani and Rudrapur.',
    url: 'https://zuum.co.in/privacy',
    type: 'website',
  },
}

export default function PrivacyPage() {
  return (
    <PageShell>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://zuum.co.in' },
          { name: 'Privacy Policy', url: 'https://zuum.co.in/privacy' },
        ]}
      />
      <LegalShell
        title="Privacy Policy"
        description="How ZUUM Electric collects, uses, and protects your personal data under the Digital Personal Data Protection Act, 2023."
        lastUpdated="August 2026"
      >
      <LegalSection title="1. Introduction">
        <p>
          ZUUM Electric (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the website
          https://zuum.co.in and provides electric scooter rental services to delivery partners in
          Haldwani and Rudrapur, Uttarakhand. This Privacy Policy explains what personal information
          we collect, how we use it, who we share it with, and what rights you have under the Digital
          Personal Data Protection Act, 2023 (DPDPA) and other applicable Indian laws.
        </p>
        <p>
          By registering with ZUUM via our website, WhatsApp, phone, or in person, you consent to the
          data practices described in this policy. If you do not agree with this policy, please do not
          use our services or submit your information. Continuing to use ZUUM&rsquo;s rental services after
          any update to this policy constitutes acceptance of the revised terms.
        </p>
      </LegalSection>

      <LegalSection title="2. Data Controller">
        <p>
          ZUUM Electric is the Data Controller under the DPDPA, 2023. We are responsible for the
          personal data you share with us and how it is processed. For any privacy-related queries,
          you can reach us via email at info@zuum.co.in, by phone at +91 79003 33002, or by post at
          our registered office in Haldwani, Uttarakhand, India. We have appointed a Grievance
          Officer (see Section 10) specifically to handle privacy complaints and rights requests.
        </p>
      </LegalSection>

      <LegalSection title="3. Information We Collect">
        <p>We collect the following categories of personal data:</p>

        <LegalSubSection title="3.1 Registration Data (when you apply to join ZUUM)">
          <ul className="list-disc space-y-1 pl-5">
            <li>Full name</li>
            <li>Mobile number</li>
            <li>Email address</li>
            <li>City / location (Haldwani or Rudrapur)</li>
            <li>Driving license status (yes / no) &mdash; license number is collected at onboarding</li>
            <li>Prior delivery work experience (yes / no) &mdash; to assess fit and assign appropriate onboarding</li>
          </ul>
        </LegalSubSection>

        <LegalSubSection title="3.2 Onboarding Data (after you confirm interest)">
          <ul className="list-disc space-y-1 pl-5">
            <li>Driving license number and a photo of the license</li>
            <li>Aadhaar card number (for KYC and identity verification, as required by Indian law for vehicle rental)</li>
            <li>Passport-size photograph</li>
            <li>Bank account details (for payout of earnings, if applicable)</li>
            <li>Emergency contact name and number</li>
          </ul>
        </LegalSubSection>

        <LegalSubSection title="3.3 Transaction Data">
          <ul className="list-disc space-y-1 pl-5">
            <li>Rental plan selected (Daily &#8377;300 / Weekly &#8377;1,600 / Monthly &#8377;6,000)</li>
            <li>Payment date, amount, and method (UPI / cash / bank transfer)</li>
            <li>Refundable deposit record (&#8377;4,000) and refund status</li>
            <li>Rental start date, end date, and renewal history</li>
          </ul>
        </LegalSubSection>

        <LegalSubSection title="3.4 Usage Data">
          <ul className="list-disc space-y-1 pl-5">
            <li>Scooter model and vehicle number assigned to you</li>
            <li>Battery swap / charging station usage logs</li>
            <li>Breakdown support tickets and resolution history</li>
            <li>GPS location data of the rented scooter (vehicle telemetry only, not personal real-time tracking of the rider)</li>
          </ul>
        </LegalSubSection>

        <LegalSubSection title="3.5 Communication Data">
          <ul className="list-disc space-y-1 pl-5">
            <li>WhatsApp messages exchanged with ZUUM for registration, support, and notifications</li>
            <li>Call recordings with our support team for quality and dispute resolution</li>
            <li>SMS and email notifications regarding your rental account</li>
          </ul>
        </LegalSubSection>
      </LegalSection>

      <LegalSection title="4. How We Use Your Information">
        <LegalSubSection title="4.1 Service Delivery">
          <ul className="list-disc space-y-1 pl-5">
            <li>Verifying your identity and driving license before assigning a scooter</li>
            <li>Activating your rental plan and tracking the rental period</li>
            <li>Providing 24/7 roadside breakdown support</li>
            <li>Coordinating scooter swaps, charging, and maintenance</li>
          </ul>
        </LegalSubSection>

        <LegalSubSection title="4.2 Legal Compliance">
          <ul className="list-disc space-y-1 pl-5">
            <li>Fulfilling KYC requirements under the Motor Vehicles Act, 1988 and RBI guidelines for vehicle rental</li>
            <li>Maintaining records as required by law enforcement authorities in Uttarakhand</li>
            <li>Responding to legitimate requests from police, courts, or government authorities</li>
          </ul>
        </LegalSubSection>

        <LegalSubSection title="4.3 Business Operations">
          <ul className="list-disc space-y-1 pl-5">
            <li>Communicating about your rental, payment, and support</li>
            <li>Sending service notifications (rental expiry, payment due, breakdown updates)</li>
            <li>Improving our services, plans, and support quality</li>
            <li>Detecting fraud, theft, or misuse of scooters</li>
          </ul>
        </LegalSubSection>

        <LegalSubSection title="4.4 Marketing (with explicit consent)">
          <ul className="list-disc space-y-1 pl-5">
            <li>Sending you offers, new plan launches, or referral bonuses via WhatsApp</li>
            <li>You can opt out at any time by replying &ldquo;STOP&rdquo; to any marketing message</li>
          </ul>
        </LegalSubSection>
      </LegalSection>

      <LegalSection title="5. Legal Basis for Processing">
        <p>Under the DPDPA, 2023, we process your personal data on the following grounds:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li><strong>Consent</strong> &mdash; for registration, marketing communications, and any optional data fields</li>
          <li><strong>Contractual necessity</strong> &mdash; for executing the rental agreement and providing the service you signed up for</li>
          <li><strong>Legal obligation</strong> &mdash; for KYC, vehicle registration records, and law enforcement responses</li>
          <li><strong>Legitimate interest</strong> &mdash; for fraud prevention, breakdown support, and service quality improvement</li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Data Sharing">
        <p>We do NOT sell your personal data. We share your data only with:</p>

        <LegalSubSection title="6.1 Service Providers (Data Processors)">
          <ul className="list-disc space-y-1 pl-5">
            <li>Payment gateways (Razorpay / Cashfree) for processing rental payments</li>
            <li>WhatsApp Business API provider for sending you notifications</li>
            <li>Cloud hosting provider (Vercel) for website hosting</li>
            <li>Vehicle telematics provider for scooter GPS tracking</li>
          </ul>
        </LegalSubSection>

        <LegalSubSection title="6.2 Delivery Platform Partners (with your consent)">
          <p>
            If you choose to register with Swiggy, Zomato, Zepto, BlinkIt, or Amazon Flex via
            ZUUM&rsquo;s referral, we may share your name and contact with that platform &mdash; only after your
            explicit consent. We never auto-share your data with delivery platforms.
          </p>
        </LegalSubSection>

        <LegalSubSection title="6.3 Government Authorities">
          <ul className="list-disc space-y-1 pl-5">
            <li>Police, RTO, and court orders under the Motor Vehicles Act, 1988 and Criminal Procedure Code</li>
            <li>Tax authorities under the Income Tax Act, 1961 and GST Act, 2017</li>
          </ul>
        </LegalSubSection>

        <LegalSubSection title="6.4 Business Transfers">
          <p>
            In the event of a merger, acquisition, or asset sale, customer data may transfer to the
            new entity. We will notify you 30 days before any such transfer so you have the option to
            request data deletion before the transfer takes place.
          </p>
        </LegalSubSection>
      </LegalSection>

      <LegalSection title="7. Data Retention">
        <p>We retain your data for the following periods:</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-2 pr-4 font-semibold">Data type</th>
                <th className="py-2 pr-4 font-semibold">Retention period</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/60"><td className="py-2 pr-4">Registration data (no conversion)</td><td className="py-2 pr-4">12 months from registration</td></tr>
              <tr className="border-b border-border/60"><td className="py-2 pr-4">Active customer data</td><td className="py-2 pr-4">Duration of rental + 36 months</td></tr>
              <tr className="border-b border-border/60"><td className="py-2 pr-4">KYC documents (license, Aadhaar)</td><td className="py-2 pr-4">5 years (as per RBI / motor vehicle regulations)</td></tr>
              <tr className="border-b border-border/60"><td className="py-2 pr-4">Transaction records (payments, refunds)</td><td className="py-2 pr-4">7 years (as per Income Tax Act)</td></tr>
              <tr className="border-b border-border/60"><td className="py-2 pr-4">Communication records (WhatsApp, calls)</td><td className="py-2 pr-4">24 months</td></tr>
              <tr><td className="py-2 pr-4">Marketing consent records</td><td className="py-2 pr-4">Until withdrawal</td></tr>
            </tbody>
          </table>
        </div>
        <p>After the retention period, data is either permanently deleted or anonymized.</p>
      </LegalSection>

      <LegalSection title="8. Data Security">
        <p>We implement industry-standard security measures to protect your personal data:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>All data in transit is encrypted using TLS 1.2 or higher</li>
          <li>All data at rest is encrypted using AES-256</li>
          <li>Access to personal data is restricted to authorized ZUUM employees on a need-to-know basis</li>
          <li>Multi-factor authentication is enforced on all admin systems</li>
          <li>Annual security audits by an independent firm</li>
        </ul>
        <p>
          Despite these measures, no system is 100% secure. If a data breach occurs, we will notify
          you and the Data Protection Board of India within 72 hours, as required under DPDPA, 2023.
        </p>
      </LegalSection>

      <LegalSection title="9. Your Rights (DPDPA, 2023)">
        <p>As a data principal, you have the following rights:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li><strong>Right to access</strong> &mdash; request a copy of your personal data we hold</li>
          <li><strong>Right to correction</strong> &mdash; request correction of inaccurate or incomplete data</li>
          <li><strong>Right to erasure</strong> &mdash; request deletion of your data (subject to legal retention requirements)</li>
          <li><strong>Right to grievance redressal</strong> &mdash; file a complaint if you are unsatisfied with our data handling</li>
        </ul>
        <p>
          To exercise any of these rights, email info@zuum.co.in with the subject line
          &ldquo;DPDPA Rights Request&rdquo;. We will respond within 30 days.
        </p>
      </LegalSection>

      <LegalSection title="10. Grievance Officer">
        <p>For privacy-related grievances, contact our Grievance Officer:</p>
        <ul className="list-none space-y-1 pl-1">
          <li><strong>Name:</strong> [To be filled by site admin]</li>
          <li><strong>Email:</strong> info@zuum.co.in</li>
          <li><strong>Phone:</strong> +91 79003 33002</li>
          <li><strong>Address:</strong> Haldwani, Uttarakhand, India</li>
        </ul>
        <p>
          If your concern is not resolved within 30 days, you may escalate to the Data Protection
          Board of India via the official portal at https://dpb.gov.in.
        </p>
      </LegalSection>

      <LegalSection title="11. Cookies">
        <p>Our website uses minimal cookies:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Essential cookies for theme preference (light / dark)</li>
          <li>Analytics cookies (if you consent) for traffic analysis via Google Analytics</li>
        </ul>
        <p>
          We do NOT use third-party advertising cookies. You can manage cookies via your browser
          settings. Disabling cookies will not affect your ability to use the core rental service.
        </p>
      </LegalSection>

      <LegalSection title="12. Children's Privacy">
        <p>
          We do not rent scooters to anyone under 18 years of age. We do not knowingly collect data
          from minors. If you believe we have collected data from a minor, please contact us
          immediately at info@zuum.co.in and we will delete the data within 7 days.
        </p>
      </LegalSection>

      <LegalSection title="13. Changes to This Policy">
        <p>
          We may update this Privacy Policy periodically to reflect changes in our data practices,
          legal requirements, or service offerings. We will notify you of any material changes via
          WhatsApp or email at least 14 days before the changes take effect. The &ldquo;Last
          updated&rdquo; date at the top of this page reflects the most recent revision.
        </p>
      </LegalSection>

      <LegalSection title="14. Contact">
        <p>For any questions about this Privacy Policy, contact us:</p>
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
        whatsappMessage="Hi ZUUM, I have a question about the Privacy Policy."
        showRegister={false}
      />
    </PageShell>
  )
}
