'use client'

import { MessageCircle, Phone, Mail, MapPin, Leaf } from 'lucide-react'
import { SITE, WHATSAPP_BASE, TEL_BASE } from '@/lib/site'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card/40 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <img
                src="/zuum-light-theme-logo.png"
                alt="ZUUM"
                className="h-7 w-auto dark:hidden"
              />
              <img
                src="/zuum-dark-theme-logo.png"
                alt="ZUUM"
                className="hidden h-7 w-auto dark:block"
              />
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              We are on a mission to help India achieve{' '}
              <strong className="text-foreground">ZERO POLLUTION</strong> in mobility.
              Rent. Ride. Earn. Repeat.
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Leaf className="h-3 w-3" />
              Zero Emission Mobility
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                ['Plans', '#plans'],
                ['How to Join', '#how-to-join'],
                ['Benefits', '#benefits'],
                ['Cost Comparison', '#compare'],
                ['FAQ', '#faq'],
                ['Our Impact', '#impact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Plans */}
          <div>
            <h4 className="text-sm font-semibold">Plans</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="text-muted-foreground">Daily — ₹300 / 100 km</li>
              <li className="text-muted-foreground">Weekly — ₹1,600 / 700 km</li>
              <li className="text-muted-foreground">Monthly — ₹6,000 / 3,000 km</li>
              <li className="text-muted-foreground">Deposit — ₹4,000 (refundable)</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold">Contact</h4>
            <ul className="mt-3 space-y-3 text-sm">
              <li>
                <a
                  href={WHATSAPP_BASE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#25D366]/15 text-[#1c8c43] dark:text-[#3ddc7f]">
                    <MessageCircle className="h-4 w-4" />
                  </span>
                  <span>
                    WhatsApp
                    <span className="block text-xs">+91 79003 33002</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={TEL_BASE}
                  className="group flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span>
                    Call 24/7
                    <span className="block text-xs">+91 79003 33002</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="group flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span>
                    Email
                    <span className="block text-xs">{SITE.email}</span>
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span>
                    Locations
                    <span className="block text-xs">{SITE.locations.join(' • ')}</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <div>
            © {new Date().getFullYear()} ZUUM Electric. Made with passion by ZUUM. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="transition-colors hover:text-foreground">
              Terms &amp; Conditions
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
