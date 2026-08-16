'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Phone, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { WHATSAPP_BASE, TEL_BASE, SITE, scrollToRegister } from '@/lib/site'

export function CTA() {
  return (
    <section className="relative scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
              Ready to Ride
            </div>

            <h2 className="text-split-gradient text-balance text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to start your <span>delivery journey?</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Join <strong className="text-foreground">1,000+ riders</strong> in {SITE.locations.join(' & ')}.
              Book your EV scooty today and start earning with zero fuel cost.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                className="h-12 rounded-full px-6 text-base font-semibold"
                onClick={() => scrollToRegister()}
              >
                <Rocket className="h-5 w-5" />
                Register Now
              </Button>
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-[#25D366] px-6 text-base font-semibold text-white hover:bg-[#1ebe5d]"
              >
                <a href={WHATSAPP_BASE} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
