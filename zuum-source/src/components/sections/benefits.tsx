'use client'

import { motion } from 'framer-motion'
import {
  Wallet,
  Fuel,
  Wrench,
  LifeBuoy,
  BatteryCharging,
  Bike,
  ShieldCheck,
  HandCoins,
  Sparkles,
} from 'lucide-react'
import { SectionHeader } from './how-to-join'

const BENEFITS = [
  {
    icon: Wallet,
    title: 'Fixed Plan. Direct Payouts.',
    desc: 'No surprises. Your rental is fixed — your earnings go straight to your pocket.',
    accent: 'text-emerald-500',
    bgAccent: 'bg-emerald-500/10',
  },
  {
    icon: Fuel,
    title: 'Zero Fuel Cost',
    desc: 'Electric means ₹0 on petrol. Charge at home or our swap stations — both included.',
    accent: 'text-amber-500',
    bgAccent: 'bg-amber-500/10',
  },
  {
    icon: Wrench,
    title: 'Zero Maintenance Cost',
    desc: 'Brake pads, tyres, motor, battery — all on us. Just ride and earn.',
    accent: 'text-sky-500',
    bgAccent: 'bg-sky-500/10',
  },
  {
    icon: LifeBuoy,
    title: 'End-to-End Breakdown Support',
    desc: 'Stuck on the road? Tap SOS in the app — we reach you in 30 minutes with a backup bike.',
    accent: 'text-rose-500',
    bgAccent: 'bg-rose-500/10',
  },
  {
    icon: BatteryCharging,
    title: 'Independent Charging',
    desc: 'Portable + home charger included. Top up anywhere, anytime — no queue, no waiting.',
    accent: 'text-teal-500',
    bgAccent: 'bg-teal-500/10',
  },
  {
    icon: Bike,
    title: 'Total Freedom',
    desc: 'Ride freely and earn more. No mandatory hours, no minimum trips — you are the boss.',
    accent: 'text-violet-500',
    bgAccent: 'bg-violet-500/10',
  },
]

const HIGHLIGHTS = [
  {
    icon: HandCoins,
    title: 'Lowest Security Deposit',
    desc: 'We keep deposits minimal so you can start earning without a heavy investment. Just ₹4,000 refundable, once.',
    accent: 'text-fuchsia-500',
    bgAccent: 'bg-fuchsia-500/10',
  },
  {
    icon: ShieldCheck,
    title: 'Zero Maintenance Worries',
    desc: 'Regular servicing and breakdown support included. Focus on riding — we handle all servicing and repairs.',
    accent: 'text-cyan-500',
    bgAccent: 'bg-cyan-500/10',
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="relative scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Riders Choose ZUUM"
          title={
            <>
              Just select a plan & <span>ride to earn</span>
            </>
          }
          subtitle="We handle all fuel and maintenance costs so you can focus on what matters — your earnings."
        />

        {/* Benefits grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <div
                aria-hidden
                className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              />
              <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl ${b.bgAccent} ${b.accent}`}>
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold">{b.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Built for Riders highlight */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mt-10 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-muted/40 p-6 sm:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Sparkles className="h-3 w-3" />
                Built for Riders, Powered by Experience
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                We understand the challenges of delivery executives.
              </h3>
              <p className="mt-3 text-muted-foreground">
                That&apos;s why our rentals are designed to maximize your earnings — not ours. From
                the lowest deposits to free servicing, every choice puts more cash in your pocket.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h.title}
                  className="rounded-2xl border border-border bg-background/60 p-5 backdrop-blur"
                >
                  <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl ${h.bgAccent} ${h.accent}`}>
                    <h.icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-base font-bold">{h.title}</h4>
                  <p className="mt-1.5 text-sm text-muted-foreground">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
