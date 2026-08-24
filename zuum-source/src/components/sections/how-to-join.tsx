'use client'

import { motion } from 'framer-motion'
import { FileCheck, CreditCard, Rocket } from 'lucide-react'

type Step = {
  icon: typeof FileCheck
  step: string
  title: string
  description: string
  accent: string
  bgAccent: string
}

const STEPS: Step[] = [
  {
    icon: FileCheck,
    step: '01',
    title: 'Register & Verify',
    description:
      "Just a quick 2-wheeler DL, Aadhaar card & PAN card, Bank Account check, and you're ready to go. KYC takes less than 30 minutes.",
    accent: 'text-emerald-500',
    bgAccent: 'bg-emerald-500/10',
  },
  {
    icon: CreditCard,
    step: '02',
    title: 'Choose Your Plan',
    description:
      'Select a plan that fits you — daily, weekly, or monthly. Change anytime as your earnings grow. No lock-in, no surprises.',
    accent: 'text-amber-500',
    bgAccent: 'bg-amber-500/10',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Pay & Start Earning',
    description:
      'Activate your ID and start earning with zero fuel cost and zero maintenance cost. You focus on earnings — we handle servicing and repairs.',
    accent: 'text-violet-500',
    bgAccent: 'bg-violet-500/10',
  },
]

export function HowToJoin() {
  return (
    <section id="how-to-join" className="relative scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How To Join"
          title={
            <>
              Three simple steps to{' '}
              <span>start earning</span>
            </>
          }
          subtitle="From sign-up to your first delivery — most riders are on the road within 24 hours."
        />

        <div className="relative mt-12 grid gap-5 md:grid-cols-3">
          {/* Connector line on desktop */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[88px] hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block"
          />
          {STEPS.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group relative rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${s.bgAccent} ${s.accent} transition-transform group-hover:scale-110`}>
                  <s.icon className="h-6 w-6" />
                </div>
                <span className="text-3xl font-black text-primary/15">{s.step}</span>
              </div>
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: {
  eyebrow: string
  title: React.ReactNode
  subtitle?: string
  align?: 'center' | 'left'
}) {
  return (
    <div
      className={
        align === 'center'
          ? 'mx-auto max-w-2xl text-center'
          : 'max-w-2xl text-left'
      }
    >
      <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
        {eyebrow}
      </div>
      <h2 className="text-split-gradient text-balance text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-muted-foreground sm:text-lg">{subtitle}</p>
      )}
    </div>
  )
}
