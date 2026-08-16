'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  Bike,
  Fuel,
  Shield,
  MapPin,
  CheckCircle2,
  Send,
  MessageCircle,
  Sparkles,
  Loader2,
  Star,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { SITE, buildWhatsappRegistrationLink } from '@/lib/site'

type FormState = {
  name: string
  mobile: string
  email: string
  location: string
  hasDL: boolean
  hasExperience: boolean
}

const INITIAL: FormState = {
  name: '',
  mobile: '',
  email: '',
  location: '',
  hasDL: false,
  hasExperience: false,
}

export function Hero() {
  const { toast } = useToast()
  const [form, setForm] = React.useState<FormState>(INITIAL)
  const [submitting, setSubmitting] = React.useState(false)

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((s) => ({ ...s, [key]: value }))

  const valid =
    form.name.trim().length > 1 &&
    /^\d{10}$/.test(form.mobile.replace(/\D/g, '').slice(-10))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!valid) {
      toast({
        title: 'Please check your details',
        description: 'We need at least your name and a valid 10-digit mobile number.',
        variant: 'destructive',
      })
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.error || 'Failed')

      // Open pre-filled email so the registration lands in the owner's inbox.
      if (data.mailtoLink) {
        window.location.href = data.mailtoLink
      }

      toast({
        title: 'Application received! 🎉',
        description: `Our team will reach out to ${form.mobile} shortly. You can also WhatsApp us directly.`,
      })
      setForm(INITIAL)
    } catch (err) {
      console.error(err)
      toast({
        title: 'Something went wrong',
        description: 'Please try again or WhatsApp us directly.',
        variant: 'destructive',
      })
    } finally {
      setSubmitting(false)
    }
  }

  function handleWhatsapp() {
    if (!form.name || !form.mobile) {
      toast({
        title: 'Add your name & mobile',
        description: 'Fill at least name and mobile so we know who you are.',
        variant: 'destructive',
      })
      return
    }
    window.open(buildWhatsappRegistrationLink(form), '_blank')
  }

  return (
    <section
      id="top"
      className="relative overflow-hidden"
    >
      {/* Background layers — subtle neutral with hint of brand color */}
      <div className="absolute inset-0 -z-10 hero-radial" />
      <div className="absolute inset-0 -z-10 grid-bg opacity-40" />
      <div
        aria-hidden
        className="absolute -top-40 right-10 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 left-1/4 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20 lg:px-8 lg:pt-16">
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT: Headline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="animate-chip-blink mb-4 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
                </span>
                We are Hiring — Delivery Partners
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            >
              <span className="text-foreground">Earn up to</span>
              <br />
              <span className="text-brand-gradient">₹35,000 Per Month</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg"
            >
              We provide <strong className="text-foreground">Bike + Fuel + Helmet</strong>.
              Zero fuel cost, zero maintenance — you ride, we handle the rest.
              Join 500+ riders already earning with ZUUM.
            </motion.p>

            {/* Highlights */}
            <motion.ul
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {[
                { icon: Bike, label: 'Bike included' },
                { icon: Fuel, label: 'Free fuel' },
                { icon: Shield, label: 'Insurance covered' },
                { icon: MapPin, label: SITE.locations.join(' • ') },
              ].map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-medium backdrop-blur"
                >
                  <Icon className="h-3.5 w-3.5 text-primary" />
                  {label}
                </li>
              ))}
            </motion.ul>

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-6 rounded-2xl border border-border bg-card/60 p-4 backdrop-blur"
            >
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Requirements
              </div>
              <div className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-3">
                {[
                  'Age 18+',
                  '2 Wheeler DL',
                  'Smart Phone',
                ].map((req) => (
                  <div key={req} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="mt-6 flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {['A', 'R', 'S', 'M', 'K'].map((c, i) => (
                  <div
                    key={c}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-primary/20 text-xs font-bold text-primary"
                    style={{ zIndex: 10 - i }}
                  >
                    {c}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <div className="text-muted-foreground">
                  Joined by <strong className="text-foreground">500+</strong> riders in {SITE.locations.join(', ')}
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Registration form */}
          <div id="register" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <div className="animated-border-box relative rounded-3xl border border-border bg-card/80 p-5 shadow-xl backdrop-blur-xl sm:p-7">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                    <Sparkles className="h-3 w-3" />
                    Register Now
                  </div>
                  <h2 className="mt-2 text-xl font-bold sm:text-2xl">
                    Apply for Delivery Partner
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Fill in your details — we&apos;ll call you back within 24 hours.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full Name" required>
                    <Input
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="e.g. Raghav Singh"
                      autoComplete="name"
                    />
                  </Field>
                  <Field label="Mobile" required>
                    <Input
                      value={form.mobile}
                      onChange={(e) =>
                        update('mobile', e.target.value.replace(/[^\d]/g, '').slice(0, 10))
                      }
                      inputMode="numeric"
                      placeholder="10-digit mobile"
                      autoComplete="tel"
                    />
                  </Field>
                </div>

                <Field label="Email">
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </Field>

                <Field label="Location">
                  <Select
                    value={form.location}
                    onValueChange={(v) => update('location', v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your location" />
                    </SelectTrigger>
                    <SelectContent>
                      {SITE.locations.map((loc) => (
                        <SelectItem key={loc} value={loc}>
                          {loc}
                        </SelectItem>
                      ))}
                      <SelectItem value="other">Other (we&apos;ll check)</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>

                <div className="grid gap-4 sm:grid-cols-2">
                  <CheckboxField
                    id="dl"
                    label="Driving License"
                    checkboxLabel="I have a 2-wheeler DL"
                    checked={form.hasDL}
                    onCheckedChange={(v) => update('hasDL', v === true)}
                  />
                  <CheckboxField
                    id="exp"
                    label="Work Experience"
                    optional
                    checkboxLabel="I have delivery experience"
                    checked={form.hasExperience}
                    onCheckedChange={(v) => update('hasExperience', v === true)}
                  />
                </div>

                <div className="flex flex-col gap-2 pt-1 sm:flex-row">
                  <Button
                    type="submit"
                    disabled={submitting || !valid}
                    className="h-11 flex-1 rounded-full text-sm font-semibold"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Submit Application
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    onClick={handleWhatsapp}
                    variant="secondary"
                    className="h-11 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 text-[#1c8c43] hover:bg-[#25D366]/20 dark:text-[#3ddc7f] sm:px-5"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Send on WhatsApp
                  </Button>
                </div>

                <p className="text-center text-xs text-muted-foreground">
                  By submitting, you agree to be contacted by ZUUM about this opportunity.
                </p>
              </form>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="grid gap-1.5">
      <Label className="text-xs font-medium text-muted-foreground">
        {label}
        {required && <span className="ml-0.5 text-primary">*</span>}
      </Label>
      {children}
    </div>
  )
}

function CheckboxField({
  id,
  label,
  checkboxLabel,
  checked,
  onCheckedChange,
  optional,
}: {
  id: string
  label: string
  checkboxLabel: string
  checked: boolean
  onCheckedChange: (v: boolean) => void
  optional?: boolean
}) {
  return (
    <div className="grid gap-1.5">
      <div className="flex items-center justify-between">
        <Label htmlFor={id} className="text-xs font-medium text-muted-foreground">
          {label}
        </Label>
        {optional && (
          <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground/70">
            Optional
          </span>
        )}
      </div>
      <label
        htmlFor={id}
        className="flex h-11 cursor-pointer items-center gap-2.5 rounded-xl border border-border bg-background/60 px-3 transition-colors hover:bg-accent"
      >
        <Checkbox
          id={id}
          checked={checked}
          onCheckedChange={(v) => onCheckedChange(v === true)}
        />
        <span className="text-sm font-medium">{checkboxLabel}</span>
      </label>
    </div>
  )
}
