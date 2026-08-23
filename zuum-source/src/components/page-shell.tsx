import { ReactNode } from 'react'
import { Header } from '@/components/sections/header'
import { Footer } from '@/components/sections/footer'
import { FloatingWhatsApp } from '@/components/sections/floating-whatsapp'

interface PageShellProps {
  children: ReactNode
}

/**
 * Standard page wrapper with Header, Footer, and FloatingWhatsApp.
 * Use this on all sub-pages for consistent layout.
 */
export function PageShell({ children }: PageShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
