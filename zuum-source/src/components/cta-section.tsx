'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Phone, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { WHATSAPP_BASE, TEL_BASE, SITE, scrollToRegister } from '@/lib/site'

interface CTASectionProps {
  /** Badge text — small label above title */
  badge?: string
  /** Main heading — supports ReactNode for gradient spans */
  title: React.ReactNode
  /** Subtitle paragraph */
  subtitle?: React.ReactNode
  /** WhatsApp prefill message */
  whatsappMessage?: string
  /** Show phone button (default: true) */
  showPhone?: boolean
  /** Show "Register Now" button (default: true) */
  showRegister?: boolean
  /** Max width class — 'max-w-5xl' for inner pages, 'max-w-7xl' for home */
  maxWidth?: string
  /** Include padding (default true). Set false when inside a padded parent like main. */
  padded?: boolean
}

/**
 * Reusable CTA section — matches home page "Ready to Ride" design.
 * Use on all pages for consistent conversion-focused CTA.
 */
export function CTASection({
  badge = 'Ready to Ride',
  title,
  subtitle,
  whatsappMessage,
  showPhone = true,
  showRegister = true,
  maxWidth = 'max-w-5xl',
  padded = true,
}: CTASectionProps) {
  const whatsappLink = whatsappMessage
    ? `${WHATSAPP_BASE}?text=${encodeURIComponent(whatsappMessage)}`
    : WHATSAPP_BASE

  return (
    <section className="relative scroll-mt-20 py-16 sm:py-20">
    <div className={`mx-auto ${maxWidth} ${padded ? 'px-4 sm:px-6 lg:px-8' : ''}`}>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-card via-card to-muted/40 p-8 text-center shadow-xl sm:p-12 lg:p-16"
        >
          {/* Decorative blobs */}
          <div
            aria-hidden
            className="absolute -left-12 -top-12 h-48 w-48 rounded-full bg-primary/10 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl"
          />

          <div className="relative">
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Rocket className="h-3 w-3" />
              {badge}
            </div>

            <h2 className="text-split-gradient text-balance text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              {title}
            </h2>

            {subtitle && (
              <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
                {subtitle}
              </p>
            )}

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {showRegister && (
                <Button
                  size="lg"
                  className="h-12 rounded-full px-6 text-base font-semibold"
                  onClick={() => scrollToRegister()}
                >
                  <Rocket className="h-5 w-5" />
                  Register Now
                </Button>
              )}
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-[#25D366] px-6 text-base font-semibold text-white hover:bg-[#1ebe5d]"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
              {showPhone && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full px-6 text-base font-semibold"
                >
                  <a href={TEL_BASE}>
                    <Phone className="h-5 w-5" />
                    {SITE.phoneDisplay}
                  </a>
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
