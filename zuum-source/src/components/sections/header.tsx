'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MessageCircle, ChevronRight } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { SITE, WHATSAPP_BASE, TEL_BASE, scrollToRegister } from '@/lib/site'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const NAV = [
  { label: 'Plans', href: '#plans' },
  { label: 'How to Join', href: '#how-to-join' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Compare', href: '#compare' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Impact', href: '#impact' },
]

export function Header() {
  const [scrolled, setScrolled] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-border/70 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="ZUUM Electric homepage">
          <BrandLogo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <a
            href={TEL_BASE}
            className="inline-flex h-9 items-center gap-2 rounded-full border border-border bg-background/60 px-4 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            <Phone className="h-3.5 w-3.5" />
            Call
          </a>
          <a
            href={WHATSAPP_BASE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center gap-2 rounded-full border border-border bg-background/60 px-4 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            WhatsApp
          </a>
          <Button
            size="sm"
            className="rounded-full px-5"
            onClick={(e) => {
              e.preventDefault()
              setOpen(false)
              scrollToRegister()
            }}
          >
            Register Now
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 240 }}
              className="absolute right-0 top-0 flex h-full w-72 max-w-[80%] flex-col gap-4 border-l border-border bg-card p-5 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <BrandLogo />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false)
                    scrollToRegister()
                  }}
                  className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
                >
                  Register Now
                </button>
                <a
                  href={WHATSAPP_BASE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border px-4 text-sm font-semibold"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </a>
                <a
                  href={TEL_BASE}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border px-4 text-sm font-semibold"
                >
                  <Phone className="h-4 w-4" />
                  {SITE.phoneDisplay}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function BrandLogo() {
  return (
    <>
      {/* Light theme shows the dark-text logo; dark theme shows the green-text logo */}
      <img
        src="/zuum-light-theme-logo.png"
        alt="ZUUM Electric"
        className="h-7 w-auto dark:hidden"
      />
      <img
        src="/zuum-dark-theme-logo.png"
        alt="ZUUM Electric"
        className="hidden h-7 w-auto dark:block"
      />
      <span className="sr-only">ZUUM Electric</span>
    </>
  )
}
