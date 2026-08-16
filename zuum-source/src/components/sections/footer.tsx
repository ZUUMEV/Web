'use client'

import { MessageCircle, Phone, Mail, MapPin, Leaf } from 'lucide-react'
import { SITE, WHATSAPP_BASE, TEL_BASE } from '@/lib/site'

const SOCIALS = [
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@ZuumElectric',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.504 3.545 12 3.545 12 3.545s-7.504 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.504 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    hoverColor: 'hover:text-[#FF0000]',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/ZuumElectric/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    hoverColor: 'hover:text-[#1877F2]',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/zuumelectric/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.807 1.706 4.955 4.955.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.247-1.706 4.807-4.955 4.955-1.265.058-1.644.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.249-.149-4.807-1.706-4.955-4.955-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.247 1.706-4.807 4.955-4.955C8.45 2.175 8.83 2.163 12 2.163zm0 2.138c-3.152 0-3.505.012-4.729.07-2.392.109-3.452 1.17-3.561 3.561-.057 1.224-.07 1.577-.07 4.729s.013 3.505.07 4.729c.109 2.392 1.17 3.452 3.561 3.561 1.224.057 1.577.07 4.729.07s3.505-.013 4.729-.07c2.392-.109 3.452-1.17 3.561-3.561.057-1.224.07-1.577.07-4.729s-.013-3.505-.07-4.729c-.109-2.392-1.17-3.452-3.561-3.561C15.505 4.313 15.152 4.301 12 4.301zm0 4.699a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm0 2.3a2.4 2.4 0 1 1 0 4.8 2.4 2.4 0 0 1 0-4.8zm4.8-2.8a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z"/>
      </svg>
    ),
    hoverColor: 'hover:text-[#E4405F]',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/zuumelectric/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.428-.07-2.638-1.813-2.638-1.813 0-2.09 1.3-2.09 2.55v5.657H8.434V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM5.733 20.452H4.94V9h1.793v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    hoverColor: 'hover:text-[#0A66C2]',
  },
  {
    name: 'X',
    href: 'https://x.com/ZuumElectric',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.071L18.244 2.25zm-1.46 17.52h1.824L7.024 4.126H5.078L16.784 19.77z"/>
      </svg>
    ),
    hoverColor: 'hover:text-foreground',
  },
  {
    name: 'Pinterest',
    href: 'https://www.pinterest.com/zuumelectric/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12.017 0C5.396 0 .029 5.397.029 12.017c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.669.967-2.915 2.171-2.915 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.165-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.001 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.627 0 12-5.373 12-12S18.627 0 12.017 0z"/>
      </svg>
    ),
    hoverColor: 'hover:text-[#E60023]',
  },
]

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

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background/50 text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/10 hover:text-primary ${social.hoverColor}`}
                >
                  {social.icon}
                </a>
              ))}
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
