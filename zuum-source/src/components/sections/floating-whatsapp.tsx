'use client'

import * as React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, X, Phone } from 'lucide-react'
import { WHATSAPP_BASE, TEL_BASE, SITE } from '@/lib/site'

export function FloatingWhatsApp() {
  const [open, setOpen] = React.useState(false)
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6"
        >
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.95 }}
                className="flex flex-col gap-2"
              >
                <a
                  href={WHATSAPP_BASE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-2.5 shadow-lg transition-transform hover:scale-105"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white">
                    <MessageCircle className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold">WhatsApp</span>
                    <span className="block text-[11px] text-muted-foreground">{SITE.phoneDisplay}</span>
                  </span>
                </a>
                <a
                  href={TEL_BASE}
                  className="group flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-2.5 shadow-lg transition-transform hover:scale-105"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold">Call 24/7</span>
                    <span className="block text-[11px] text-muted-foreground">{SITE.phoneDisplay}</span>
                  </span>
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="button"
            aria-label={open ? 'Close contact options' : 'Open contact options'}
            onClick={() => setOpen((v) => !v)}
            className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-transform hover:scale-110"
          >
            {!open && (
              <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-40" />
            )}
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X className="h-6 w-6" />
                </motion.span>
              ) : (
                <motion.span
                  key="msg"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <MessageCircle className="h-6 w-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
