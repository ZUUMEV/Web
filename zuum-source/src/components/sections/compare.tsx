'use client'

import { motion } from 'framer-motion'
import { Fuel, Wrench, ShieldCheck, Bike, TrendingDown, TrendingUp, IndianRupee } from 'lucide-react'
import { SectionHeader } from './how-to-join'
import { cn } from '@/lib/utils'

type Row = {
  head: string
  icon: typeof Fuel
  petrol: string
  ev: string
  petrolZero?: boolean
  evZero?: boolean
}

const ROWS: Row[] = [
  { head: 'Fuel (Petrol)', icon: Fuel, petrol: '₹6,127', ev: '₹0', petrolNote: 'Daily 100 km / avg 50', evNote: 'Included in your plan', evZero: true },
  { head: 'EMI / Rental', icon: Bike, petrol: '₹3,000', ev: '₹6,000', petrolNote: 'Standard loan', evNote: 'Fixed monthly fee' },
  { head: 'Maintenance & Oil', icon: Wrench, petrol: '₹1,200', ev: '₹0', petrolNote: 'Frequent oil & tuning', evNote: 'Handled by ZUUM', evZero: true },
  { head: 'Insurance & PUC', icon: ShieldCheck, petrol: '₹164', ev: '₹0', petrolNote: 'Prorated', evNote: 'Handled by ZUUM', evZero: true },
  { head: 'Tyres & Punctures', icon: Wrench, petrol: '₹200', ev: '₹0', petrolNote: 'Prorated', evNote: 'Handled by ZUUM', evZero: true },
] as any

const TOTAL_PETROL = '₹10,691'
const TOTAL_EV = '₹6,000'
const SAVINGS = '₹4,691'

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
          subtitle="Real market numbers, monthly. See exactly how much cash stays in your pocket with ZUUM."
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
            <div className="p-4 sm:p-5">Expense Head</div>
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
                  <div className="font-medium">{r.head}</div>
                  {r.petrolNote && (
                    <div className="text-[10px] uppercase tracking-wide text-muted-foreground/80 sm:text-xs">
                      {r.petrolNote}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-center p-4 font-semibold text-foreground sm:p-5">
                {r.petrol}
              </div>
              <div className="flex flex-col items-center justify-center bg-primary/5 p-4 sm:p-5">
                <span
                  className={cn(
                    'font-bold',
                    r.evZero ? 'text-primary' : 'text-foreground'
                  )}
                >
                  {r.ev}
                </span>
                {r.evNote && (
                  <span className="text-[10px] uppercase tracking-wide text-muted-foreground/80 sm:text-xs">
                    {r.evNote}
                  </span>
                )}
              </div>
            </motion.div>
          ))}

          {/* Total row */}
          <div className="grid grid-cols-[1.4fr_1fr_1fr] border-t-2 border-primary/30 bg-muted/30 text-sm font-bold sm:grid-cols-[2fr_1fr_1fr] sm:text-lg">
            <div className="flex items-center gap-2 p-4 sm:p-5">
              <TrendingDown className="h-4 w-4 text-rose-500" />
              Total Monthly Cost
            </div>
            <div className="flex items-center justify-center p-4 text-rose-600 dark:text-rose-400 sm:p-5">
              {TOTAL_PETROL}
            </div>
            <div className="flex items-center justify-center bg-primary/15 p-4 text-primary sm:p-5">
              {TOTAL_EV}
            </div>
          </div>

          {/* Savings banner */}
          <div className="flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-primary/15 via-primary/10 to-primary/15 p-5 text-center sm:flex-row sm:gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <IndianRupee className="h-5 w-5" />
            </div>
            <div className="text-base sm:text-lg">
              <span className="font-bold text-primary">Net Savings: {SAVINGS}</span>
              <span className="ml-2 text-sm text-muted-foreground">monthly cash bachat</span>
            </div>
            <TrendingUp className="h-5 w-5 text-primary" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
