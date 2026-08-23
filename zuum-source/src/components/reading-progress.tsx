'use client'

import { useEffect, useState } from 'react'

export function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(progress)
    }

    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    updateProgress()
    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return (
    <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-primary to-cyan-400 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
