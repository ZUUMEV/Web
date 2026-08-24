'use client'

import { motion } from 'framer-motion'
import { Fuel, Wrench, ShieldCheck, Bike, TrendingDown, IndianRupee, Banknote, Cog, Helm } from 'lucide-react'
import { SectionHeader } from './how-to-join'
import { cn } from '@/lib/utils'

type Row = {
  head: string
  icon: typeof Fuel
  petrol: string
  ev: string
  note?: string
  evZero?: boolean
}

const ROWS: Row[] = [
  { head: 'Fuel (Petrol)', icon: Fuel, petrol: '₹6,721', ev: '₹0', note: '100 km/day, 45 kmpl, ₹100.82/L', evZero: true },
  { head: 'Bike Loan EMI', icon: Banknote, petrol: '₹3,321', ev: '—', note: '₹1L loan, 12% interest, 3 years' },
  { head: 'Maintenance & Oil', icon: Cog, petrol: '₹1,315', ev: '₹0', note: 'Service, chain, brake pads', evZero: true },
  { head: 'Tyre Wear', icon: Wrench, petrol: '₹525', ev: '₹0', note: '₹3,500 set ÷ 20,000 km', evZero: true },
  { head: 'Insurance & Tech', icon: ShieldCheck, petrol: '₹350', ev: '₹0', note: 'Insurance, GPS, accessories', evZero: true },
  { head: 'Road Expenses', icon: Bike, petrol: '₹400', ev: '₹200', note: 'Parking, tea, etc.' },
] as any

const TOTAL_PETROL = '₹12,274'
const TOTAL_EV = '₹6,200'
const SAVINGS = '₹6,074'

export function Compare() {
  return (
    <section id="compare" className="relative scroll-mt-20 py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Cost Comparison"
          title={
            <>
              Own petrol bike vs. <span>ZUUM EV</span>
            </>
          }
          subtitle="Real-world monthly costs for 100 km daily delivery. See exactly how much cash stays in your pocket with ZUUM."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
        >
          {/* Table head */}
          <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-border bg-muted/40 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:grid-cols-[2fr_1fr_1fr]">
            <div className="p-4 sm:p-5">Monthly Expense</div>
            <div className="p-4 text-center sm:p-5">
              <span className="inline-flex items-center gap-1.5">
                <Fuel className="h-3.5 w-3.5" /> Own Petrol Bike
              </span>
            </div>
            <div className="bg-primary/10 p-4 text-center text-primary sm:p-5">
              <span className="inline-flex items-center gap-1.5">
                <Bike className="h-3.5 w-3.5" /> ZUUM EV Plan
              </span>
            </div>
          </div>

          {/* Rows */}
          {ROWS.map((r, i) => (
            <motion.div
              key={r.head}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-border/60 text-sm last:border-b-0 sm:grid-cols-[2fr_1fr_1fr] sm:text-base"
            >
              <div className="flex items-center gap-2.5 p-4 sm:p-5">
                <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                  <r.icon className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-medium text-foreground">{r.head}</div>
                  {r.note && <div className="text-xs text-muted-foreground">{r.note}</div>}
                </div>
              </div>
              <div className={cn('flex items-center justify-center p-4 text-center font-semibold sm:p-5', r.petrol === '₹0' ? 'text-green-600' : 'text-red-600')}>
                {r.petrol}
              </div>
              <div className={cn('flex items-center justify-center bg-primary/5 p-4 text-center font-semibold text-primary sm:p-5', r.evZero && 'text-green-600')}>
                {r.ev}
              </div>
            </motion.div>
          ))}

          {/* Total Row */}
          <div className="grid grid-cols-[1.4fr_1fr_1fr] bg-muted/30 font-bold sm:grid-cols-[2fr_1fr_1fr]">
            <div className="p-4 text-base sm:p-5">TOTAL Monthly Cost</div>
            <div className="flex items-center justify-center p-4 text-center text-red-600 sm:p-5">
              {TOTAL_PETROL}
            </div>
            <div className="flex items-center justify-center bg-primary/10 p-4 text-center text-primary sm:p-5">
              {TOTAL_EV}
            </div>
          </div>
        </motion.div>

        {/* Savings Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-cyan-400/10 p-6 text-center sm:p-8"
        >
          <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
            <TrendingDown className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold sm:text-xl">Your Monthly Savings with ZUUM EV</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Switch from petrol to ZUUM EV and save <strong className="text-foreground">{SAVINGS}</strong> every month.
            That&apos;s <strong className="text-foreground">₹72,888/year</strong> in your pocket!
          </p>
          <a
            href="/calculator"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <IndianRupee className="h-4 w-4" />
            Calculate Your Exact Savings
          </a>
        </motion.div>
      </div>
    </section>
  )
}
