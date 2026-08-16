'use client'

import { motion } from 'framer-motion'
import * as React from 'react'

type Partner = {
  name: string
  /** Domains to try in order — first that returns a valid icon wins */
  domains: string[]
  /** Brand-tinted chip background (Tailwind classes) */
  chip: string
  /** Brand letter badge color (Tailwind text/bg classes) */
  badge: string
}

const PARTNERS: Partner[] = [
  { name: 'Swiggy', domains: ['swiggy.com'], chip: 'bg-orange-50 dark:bg-orange-500/10', badge: 'bg-orange-500 text-white' },
  { name: 'Zomato', domains: ['zomato.com'], chip: 'bg-red-50 dark:bg-red-500/10', badge: 'bg-red-500 text-white' },
  { name: 'Zepto', domains: ['zeptonow.com'], chip: 'bg-purple-50 dark:bg-purple-500/10', badge: 'bg-purple-600 text-white' },
  { name: 'Blinkit', domains: ['blinkit.com'], chip: 'bg-yellow-50 dark:bg-yellow-500/10', badge: 'bg-yellow-400 text-yellow-950' },
  { name: 'Porter', domains: ['porter.in'], chip: 'bg-sky-50 dark:bg-sky-500/10', badge: 'bg-sky-500 text-white' },
  { name: 'Amazon', domains: ['amazon.in', 'amazon.com'], chip: 'bg-orange-50 dark:bg-orange-500/10', badge: 'bg-orange-400 text-orange-950' },
  { name: 'Flipkart', domains: ['flipkart.com'], chip: 'bg-blue-50 dark:bg-blue-500/10', badge: 'bg-blue-500 text-white' },
  { name: 'JioMart', domains: ['jiomart.com'], chip: 'bg-indigo-50 dark:bg-indigo-500/10', badge: 'bg-indigo-600 text-white' },
  { name: 'Urban Company', domains: ['urbancompany.com'], chip: 'bg-violet-50 dark:bg-violet-500/10', badge: 'bg-violet-600 text-white' },
  { name: 'Rapido', domains: ['rapido.bike', 'rapidobike.com', 'ridrapido.com'], chip: 'bg-yellow-50 dark:bg-yellow-500/10', badge: 'bg-yellow-400 text-yellow-950' },
  { name: 'Uber', domains: ['uber.com'], chip: 'bg-neutral-100 dark:bg-neutral-700/30', badge: 'bg-neutral-900 text-white' },
  { name: 'Ola', domains: ['olaelectric.com', 'olacabs.com', 'olaindia.com'], chip: 'bg-lime-50 dark:bg-lime-500/10', badge: 'bg-lime-500 text-lime-950' },
  { name: 'FreshToHome', domains: ['freshtohome.com', 'freshtohome.in'], chip: 'bg-green-50 dark:bg-green-500/10', badge: 'bg-green-600 text-white' },
  { name: 'Delhivery', domains: ['delhivery.com'], chip: 'bg-rose-50 dark:bg-rose-500/10', badge: 'bg-rose-500 text-white' },
  { name: 'Blue Dart', domains: ['bluedart.com'], chip: 'bg-blue-50 dark:bg-blue-500/10', badge: 'bg-blue-600 text-white' },
  { name: 'Brozo', domains: ['brozo.in', 'brozo.com'], chip: 'bg-amber-50 dark:bg-amber-500/10', badge: 'bg-amber-500 text-white' },
  { name: 'Uber Eats', domains: ['ubereats.com'], chip: 'bg-green-50 dark:bg-green-500/10', badge: 'bg-green-600 text-white' },
  { name: 'Ekart', domains: ['ekartlogistics.com', 'ekart.in'], chip: 'bg-blue-50 dark:bg-blue-500/10', badge: 'bg-blue-500 text-white' },
  { name: 'DTDC', domains: ['dtdc.com', 'dtdcin.com'], chip: 'bg-red-50 dark:bg-red-500/10', badge: 'bg-red-600 text-white' },
  { name: 'BB Now', domains: ['bigbasket.com', 'bbnow.in'], chip: 'bg-emerald-50 dark:bg-emerald-500/10', badge: 'bg-emerald-600 text-white' },
  { name: 'Shop Rocket', domains: ['shoprocket.io', 'shoprocket.co'], chip: 'bg-cyan-50 dark:bg-cyan-500/10', badge: 'bg-cyan-600 text-white' },
  { name: 'Myntra', domains: ['myntra.com'], chip: 'bg-pink-50 dark:bg-pink-500/10', badge: 'bg-pink-500 text-white' },
  { name: 'Meesho', domains: ['meesho.com'], chip: 'bg-fuchsia-50 dark:bg-fuchsia-500/10', badge: 'bg-fuchsia-500 text-white' },
  { name: 'Truemeds', domains: ['truemed.in', 'truemed.com'], chip: 'bg-teal-50 dark:bg-teal-500/10', badge: 'bg-teal-600 text-white' },
  { name: '1mg', domains: ['1mg.com', 'tatamg.com'], chip: 'bg-orange-50 dark:bg-orange-500/10', badge: 'bg-orange-500 text-white' },
]

/** Build the Google S2 favicon URL for a domain. */
function googleFavicon(domain: string) {
  return `https://www.google.com/s2/favicons?sz=128&domain=${domain}`
}

export function PartnerMarquee() {
  return (
    <section
      aria-label="Delivery partners we support"
      className="relative overflow-hidden border-y border-border/60 bg-gradient-to-b from-card/40 via-card/20 to-background py-10 sm:py-14"
    >
      {/* Background flourish */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-40 w-[60%] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Ride anywhere
          </div>
          <h2 className="text-split-gradient mt-3 text-balance text-xl font-extrabold tracking-tight sm:text-2xl lg:text-3xl">
            Ride for any delivery platform —{' '}
            <span>we support them all</span>
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
            Built for commercial use. Deliver on any app you choose — your ZUUM EV is ready to roll.
          </p>
        </div>

        {/* Row 1 — moves LEFT (default direction) */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <MarqueeRow partners={ROW_1} direction="left" />
        </div>

        {/* Row 2 — moves RIGHT (reverse) */}
        <div className="relative mt-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <MarqueeRow partners={ROW_2} direction="right" />
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground sm:text-sm">
          Plus many more — and the list keeps growing every month.
        </p>
      </div>
    </section>
  )
}

/** Split partners into 2 roughly-equal rows. */
const MID = Math.ceil(PARTNERS.length / 2)
const ROW_1 = PARTNERS.slice(0, MID)
const ROW_2 = PARTNERS.slice(MID)

function MarqueeRow({
  partners,
  direction,
}: {
  partners: Partner[]
  direction: 'left' | 'right'
}) {
  // Duplicate the list so the marquee loops seamlessly.
  const doubled = [...partners, ...partners]
  return (
    <div
      className="flex w-max gap-4"
      style={{
        animation: `marquee-${direction} 36s linear infinite`,
      }}
    >
      {doubled.map((p, i) => (
        <div
          key={`${p.name}-${i}`}
          className={`group inline-flex h-20 items-center gap-3 rounded-2xl border border-border bg-card/80 px-6 shadow-sm backdrop-blur transition-all hover:border-primary/40 hover:shadow-md sm:h-24 sm:px-7 ${p.chip}`}
        >
          <PartnerLogo partner={p} />
          <span className="text-base font-bold tracking-tight sm:text-lg">
            {p.name}
          </span>
        </div>
      ))}
    </div>
  )
}

/**
 * Renders the partner's real favicon via Google's S2 service.
 * Tries each domain in order until one returns a valid image.
 * If all fail, shows a branded colored letter badge instead.
 */
function PartnerLogo({ partner }: { partner: Partner }) {
  const [domainIdx, setDomainIdx] = React.useState(0)
  const [allFailed, setAllFailed] = React.useState(false)

  const handleImgError = () => {
    if (domainIdx < partner.domains.length - 1) {
      setDomainIdx((i) => i + 1)
    } else {
      setAllFailed(true)
    }
  }

  if (allFailed) {
    return (
      <span
        className={`inline-flex h-11 w-11 items-center justify-center rounded-xl text-lg font-black sm:h-12 sm:w-12 ${partner.badge}`}
      >
        {partner.name.charAt(0)}
      </span>
    )
  }

  return (
    <span className="relative inline-flex h-11 w-11 items-center justify-center sm:h-12 sm:w-12">
      <img
        key={partner.domains[domainIdx]}
        src={googleFavicon(partner.domains[domainIdx])}
        alt={`${partner.name} logo`}
        width={48}
        height={48}
        loading="lazy"
        className="h-9 w-9 rounded-lg object-contain sm:h-10 sm:w-10"
        onError={handleImgError}
      />
    </span>
  )
}
