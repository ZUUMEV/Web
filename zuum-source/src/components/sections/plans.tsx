'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Check, Zap, Calendar, Crown, Sparkles, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SectionHeader } from './how-to-join'
import { scrollToRegister } from '@/lib/site'
import { cn } from '@/lib/utils'

type Plan = {
  id: 'daily' | 'weekly' | 'monthly'
  name: string
  icon: typeof Zap
  price: string
  period: string
  allowance: string
  blurb: string
  features: string[]
  perfect: string
  highlighted?: boolean
  accent: string
}

const PLANS: Plan[] = [
  {
    id: 'daily',
    name: 'Daily Plan',
    icon: Zap,
    price: '₹300',
    period: '/ day',
    allowance: '100 km / 12 hr',
    blurb: 'Ideal for rapid commutes, running errands, or sightseeing around the city.',
    features: [
      'Free helmet included',
      'Fully charged on delivery',
      'Comprehensive insurance',
      'Perfect for regular daily commutes',
    ],
    perfect: 'Test rides & quick gigs',
    accent: 'from-sky-400/20 to-emerald-400/10',
  },
  {
    id: 'weekly',
    name: 'Weekly Plan',
    icon: Calendar,
    price: '₹1,600',
    period: '/ week',
    allowance: '700 km / week',
    blurb: 'Excellent for weekly work commutes. No fuel expenses, maximum savings.',
    features: [
      'Free helmet included',
      'Free vehicle swap if breakdown',
      'Portable charger',
      'Full maintenance & servicing',
      'Comprehensive insurance',
    ],
    perfect: 'Most popular for delivery partners',
    highlighted: true,
    accent: 'from-primary/25 to-primary/5',
  },
  {
    id: 'monthly',
    name: 'Monthly Plan',
    icon: Crown,
    price: '₹6,000',
    period: '/ month',
    allowance: '3,000 km / month',
    blurb: 'Hassle-free, long-term premium lease. Pure ride pleasure, zero commitment.',
    features: [
      'Free helmet included',
      'Free vehicle swap if breakdown',
      'Full home charger setup',
      'Full maintenance & servicing',
      'Comprehensive insurance',
      'Ultimate value for monthly leases',
    ],
    perfect: 'Best value — maximum savings',
    accent: 'from-amber-400/20 to-rose-400/10',
  },
]

export function Plans() {
  return (
    <section id="plans" className="relative scroll-mt-20 py-16 sm:py-24">
      {/* Soft background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Subscription Plans"
          title={
            <>
              Pick your <span>perfect plan</span>
            </>
          }
          subtitle="Choose daily, weekly, or monthly — switch anytime. All plans include a free helmet, full insurance, and maintenance."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          One-time refundable security deposit: <strong className="text-foreground">₹4,000</strong> ·
          Extra km: <strong className="text-foreground">₹2/km</strong> · Cancel anytime, no lock-in
        </p>
      </div>
    </section>
  )
}

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={cn(
        'group relative flex flex-col rounded-3xl border bg-card p-6 transition-all hover:-translate-y-1',
        plan.highlighted
          ? 'border-primary/60 shadow-xl glow-brand'
          : 'border-border hover:border-primary/40 hover:shadow-md'
      )}
    >
      {/* Highlight ribbon */}
      {plan.highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge className="gap-1 bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-md">
            <Sparkles className="h-3 w-3" />
            Most Popular
          </Badge>
        </div>
      )}

      <div className={cn('mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br', plan.accent)}>
        <plan.icon className="h-7 w-7 text-primary" />
      </div>

      <h3 className="text-xl font-bold">{plan.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{plan.blurb}</p>

      <div className="mt-5 flex items-baseline gap-1">
        <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
        <span className="text-sm font-medium text-muted-foreground">{plan.period}</span>
      </div>
      <div className="mt-1 text-xs font-medium text-primary">{plan.allowance}</div>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <div className="mt-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Check className="h-3 w-3" />
            </div>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 rounded-xl border border-dashed border-border bg-muted/40 p-3 text-center text-xs font-medium text-muted-foreground">
        {plan.perfect}
      </div>

      <Button
        className={cn(
          'mt-5 h-11 rounded-full text-sm font-semibold',
          plan.highlighted
            ? ''
            : 'bg-background text-foreground hover:bg-accent border border-border'
        )}
        variant={plan.highlighted ? 'default' : 'outline'}
        onClick={() => scrollToRegister()}
      >
        Choose {plan.name.split(' ')[0]}
        <ArrowRight className="h-4 w-4" />
      </Button>
    </motion.div>
  )
}
