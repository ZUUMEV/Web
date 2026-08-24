export const dynamic = 'force-static'

export async function GET() {
  const content = `# ZUUM Electric

> ZUUM Electric provides EV scooter rentals for gig-delivery riders in Haldwani and Rudrapur, Uttarakhand, India. Plans from ₹300/day to ₹6,000/month with free charging, insurance, helmet, and maintenance. 75+ active riders, ₹4,000 refundable deposit. Earn ₹35,000+/month with zero fuel cost.

## Key Pages

- [Home](https://zuum.co.in): EV scooter rental overview, delivery partner onboarding, plan comparison.
- [Plans & Pricing](https://zuum.co.in/#plans): Daily ₹300 (100 km), Weekly ₹1,600 (700 km), Monthly ₹6,000 (3,000 km). Extra km at ₹3/km.
- [How to Join](https://zuum.co.in/#how-to-join): 3-step onboarding — register & verify KYC, choose plan, pay & start riding. Most riders on road within 24 hours.
- [Benefits](https://zuum.co.in/#benefits): Zero fuel cost, zero maintenance, 24/7 breakdown support, free helmet, comprehensive insurance.
- [Cost Comparison](https://zuum.co.in/#compare): Own petrol bike vs ZUUM EV — save ₹4,000+/month on fuel.
- [FAQ](https://zuum.co.in/#faq): Getting started, pricing, vehicle usage, service support, cancellation & refund questions.
- [Impact](https://zuum.co.in/#impact): 12,000+ kg CO₂ saved, ₹15L+ fuel cost saved, 2M+ electric km, 50k+ battery swaps.

## Locations

- [Uttarakhand State Page](https://zuum.co.in/locations/uttarakhand): Overview of ZUUM services across Uttarakhand, active cities, and coming soon locations.
- [Haldwani](https://zuum.co.in/locations/haldwani): EV scooter rentals in Haldwani. Pickup station, delivery zones, FAQ for Haldwani riders.
- [Rudrapur](https://zuum.co.in/locations/rudrapur): EV scooter rentals in Rudrapur. SIIDCUL industrial belt coverage, pickup station, FAQ.

## Legal & Contact

- [Contact](https://zuum.co.in/contact): Haldwani (29.2244°N, 79.5130°E) and Rudrapur (28.9980°N, 79.3982°E) pickup and charging stations. WhatsApp +91 79003 33002.
- [Terms of Service](https://zuum.co.in/terms): Rental agreement, eligibility, rider responsibilities, damage policy, grievance redressal.
- [Refund Policy](https://zuum.co.in/refund-policy): Deposit refund within 7 business days, cancellation terms, early return prorating.
- [Privacy Policy](https://zuum.co.in/privacy): DPDPA-compliant data handling for delivery partners.

## Pricing Summary

- Daily Plan: ₹300 per day, 100 km included
- Weekly Plan: ₹1,600 per week, 700 km included
- Monthly Plan: ₹6,000 per month, 3,000 km included
- Refundable Security Deposit: ₹4,000
- Excess Kilometer Charge: ₹3 per km
- All plans include: Free charging, ISI helmet, comprehensive insurance, 24/7 roadside support, free routine maintenance

## Service Area

ZUUM Electric currently serves:
- Haldwani, Uttarakhand (with 50 km radius covering Kathgodam, Kaladungi, Lalkuan)
- Rudrapur, Uttarakhand (with 50 km radius covering SIIDCUL, Kichha, Sitarganj)

Coming soon to: Dehradun, Haridwar, Bareilly, Kashipur, Roorkee.

## Contact

- WhatsApp: https://wa.me/917900333002
- Phone: +91 79003 33002 (24/7 breakdown support)
- Email: info@zuum.co.in
- Office Hours: 9:00 AM - 9:00 PM, all days
`

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
