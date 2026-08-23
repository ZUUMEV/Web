'use client'

import { useState } from 'react'
import { MessageCircle, Facebook, Twitter, Linkedin, Link2, Check } from 'lucide-react'

interface ShareButtonsProps {
  url: string
  title: string
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const shareText = encodeURIComponent(title)
  const shareUrl = encodeURIComponent(url)

  const links = [
    {
      name: 'WhatsApp',
      href: `https://wa.me/?text=${shareText}%20${shareUrl}`,
      icon: MessageCircle,
      color: 'hover:bg-[#25D366] hover:text-white hover:border-[#25D366]',
    },
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      icon: Facebook,
      color: 'hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]',
    },
    {
      name: 'Twitter',
      href: `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`,
      icon: Twitter,
      color: 'hover:bg-black hover:text-white hover:border-black',
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      icon: Linkedin,
      color: 'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]',
    },
  ]

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-medium text-muted-foreground mr-1">Share:</span>
      {links.map((link) => {
        const Icon = link.icon
        return (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${link.name}`}
            className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background transition-all ${link.color}`}
          >
            <Icon className="h-4 w-4" />
          </a>
        )
      })}
      <button
        onClick={copyLink}
        aria-label="Copy link"
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:bg-accent"
      >
        {copied ? <Check className="h-4 w-4 text-green-500" /> : <Link2 className="h-4 w-4" />}
      </button>
      {copied && (
        <span className="text-xs text-green-500 font-medium">Link copied!</span>
      )}
    </div>
  )
}
