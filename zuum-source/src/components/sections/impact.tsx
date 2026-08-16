'use client'

import { motion, useInView } from 'framer-motion'
import * as React from 'react'
import { Leaf, IndianRupee, Smile, Route, Bike, BatteryCharging } from 'lucide-react'
import { SectionHeader } from './how-to-join'

const STATS = [
  {
    icon: Leaf,
    value: '12,000+ kg',
    label: 'CO₂ Emissions Saved',
    sub: 'Equivalent to planting 500+ trees',
    accent: 'text-emerald-500',
  },
  {
    icon: IndianRupee,
    value: '₹15L+',
    label: 'Fuel Cost Saved',
    sub: 'Direct savings in our riders\' pockets',
    accent: 'text-amber-500',
  },
  {
    icon: Smile,
    value: '500+',
    label: 'Happy Riders',
    sub: 'Growing community of EV adopters',
    accent: 'text-rose-500',
  },
  {
    icon: Route,
    value: '2M+ km',
    label: 'Electric Kilometers',
    sub: 'Distance covered without emissions',
    accent: 'text-sky-500',
  },
  {
    icon: Bike,
    value: '150+',
    label: 'Active Vehicles',
    sub: 'Reliable fleet on the streets',
    accent: 'text-violet-500',
  },
  {
    icon: BatteryCharging,
    value: '50k+',
    label: 'Battery Swaps',
    sub: 'Seamless energy replenishments',
    accent: 'text-teal-500',
  },
]

export function Impact() {
  return (
    <section
      id="impact"
      className="relative scroll-mt-20 overflow-hidden py-16 sm:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-brand-gradient opacity-[0.04]" />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -z-10 h-72 w-[80%] -translate-x-1/2 rounded-full bg-primary/8 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Impact"
          title={
            <>
              Driving change, <span>one ride at a time</span>
            </>
          }
          subtitle="We aren't just moving people — we're accelerating the transition to sustainable urban mobility and creating real economic value for our community."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {STATS.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({
  stat,
  index,
}: {
  stat: (typeof STATS)[number]
  index: number
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card p-5 text-center transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg sm:p-6"
    >
      <div
        aria-hidden
        className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
      />
      <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
        <stat.icon className={`h-6 w-6 ${stat.accent}`} />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 + (index % 3) * 0.08 }}
        className="text-2xl font-extrabold tracking-tight sm:text-3xl"
      >
        {stat.value}
      </motion.div>
      <div className="mt-1 text-sm font-semibold">{stat.label}</div>
      <div className="mt-1 text-xs text-muted-foreground">{stat.sub}</div>
    </motion.div>
  )
}
