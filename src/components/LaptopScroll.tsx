'use client'
import { useEffect, useRef, useCallback } from 'react'

interface LaptopScrollProps {
  src: string
  alt: string
  startPercent?: number
  endPercent?: number
}

export function LaptopScroll({ src, alt, startPercent = 35, endPercent = 70 }: LaptopScrollProps) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const hoveredRef = useRef(false)
  const rafRef = useRef<number>(0)
  const directionRef = useRef<1 | -1>(1)
  const pauseRef = useRef(0)

  const autoScroll = useCallback(() => {
    const el = viewportRef.current
    if (!el) return

    if (hoveredRef.current) {
      rafRef.current = requestAnimationFrame(autoScroll)
      return
    }

    const maxScroll = el.scrollHeight - el.clientHeight
    const startPos = maxScroll * (startPercent / 100)
    const endPos = maxScroll * (endPercent / 100)

    if (pauseRef.current > 0) {
      pauseRef.current--
      rafRef.current = requestAnimationFrame(autoScroll)
      return
    }

    if (directionRef.current === 1) {
      el.scrollTop += 0.6
      if (el.scrollTop >= endPos) {
        directionRef.current = -1
        pauseRef.current = 60
      }
    } else {
      el.scrollTop -= 2
      if (el.scrollTop <= startPos) {
        directionRef.current = 1
        pauseRef.current = 30
      }
    }

    rafRef.current = requestAnimationFrame(autoScroll)
  }, [startPercent, endPercent])

  useEffect(() => {
    const el = viewportRef.current
    if (!el) return

    const img = el.querySelector('img')
    if (!img) return

    const start = () => {
      const maxScroll = el.scrollHeight - el.clientHeight
      el.scrollTop = maxScroll * (startPercent / 100)
      rafRef.current = requestAnimationFrame(autoScroll)
    }

    if (img.complete) {
      start()
    } else {
      img.addEventListener('load', start, { once: true })
    }

    return () => cancelAnimationFrame(rafRef.current)
  }, [autoScroll, startPercent])

  return (
    <div
      className="laptop-frame"
      onMouseEnter={() => { hoveredRef.current = true }}
      onMouseLeave={() => { hoveredRef.current = false }}
    >
      <div className="laptop-bezel">
        <div className="laptop-notch" />
        <div className="laptop-viewport" ref={viewportRef}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} />
        </div>
      </div>
      <div className="laptop-base" />
    </div>
  )
}
