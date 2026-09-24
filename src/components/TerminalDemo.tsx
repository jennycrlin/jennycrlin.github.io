'use client'
import { useEffect, useRef, useState } from 'react'

type Line = { type: 'input' | 'output' | 'spacer'; text: string }

const SCRIPT: Line[] = [
  { type: 'input', text: '/design-researcher "verify email + phone, one page, no modal"' },
  { type: 'output', text: 'auditing Mobbin patterns via MCP…' },
  { type: 'output', text: '3 patterns to adopt · 1 anti-pattern flagged' },
  { type: 'spacer', text: '' },
  { type: 'input', text: '/design-principal' },
  { type: 'output', text: 'reasoning: Nielsen heuristics, Laws of UX, Gestalt' },
  { type: 'output', text: '3 directions generated · confidence: high, medium, medium' },
  { type: 'spacer', text: '' },
  { type: 'input', text: '/design-start' },
  { type: 'output', text: 'branch created from approved mockup' },
  { type: 'spacer', text: '' },
  { type: 'input', text: '/design-commit' },
  { type: 'output', text: 'PR opened · preview deployed · ready for PM review' },
]

const CHAR_MS = 22
const LINE_PAUSE_MS = 380
const SPACER_PAUSE_MS = 160

export function TerminalDemo() {
  const rootRef = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started || lineIndex >= SCRIPT.length) return
    const line = SCRIPT[lineIndex]

    if (line.type === 'input') {
      if (charIndex < line.text.length) {
        const t = setTimeout(() => setCharIndex((c) => c + 1), CHAR_MS)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => {
        setLineIndex((i) => i + 1)
        setCharIndex(0)
      }, LINE_PAUSE_MS)
      return () => clearTimeout(t)
    }

    const t = setTimeout(
      () => setLineIndex((i) => i + 1),
      line.type === 'spacer' ? SPACER_PAUSE_MS : LINE_PAUSE_MS
    )
    return () => clearTimeout(t)
  }, [started, lineIndex, charIndex])

  const done = lineIndex >= SCRIPT.length

  return (
    <div className="cs-terminal" ref={rootRef}>
      <div className="cs-terminal-bar">
        <span className="cs-terminal-dot cs-terminal-dot--red" />
        <span className="cs-terminal-dot cs-terminal-dot--yellow" />
        <span className="cs-terminal-dot cs-terminal-dot--green" />
      </div>
      <div className="cs-terminal-body">
        {SCRIPT.slice(0, lineIndex).map((line, i) =>
          line.type === 'spacer' ? (
            <div key={i} className="cs-terminal-spacer" />
          ) : (
            <div key={i} className={`cs-terminal-line cs-terminal-line--${line.type}`}>
              {line.type === 'input' && <span className="cs-terminal-prompt">$</span>}
              {line.text}
            </div>
          )
        )}
        {!done && SCRIPT[lineIndex].type !== 'spacer' && (
          <div className={`cs-terminal-line cs-terminal-line--${SCRIPT[lineIndex].type}`}>
            {SCRIPT[lineIndex].type === 'input' && <span className="cs-terminal-prompt">$</span>}
            {SCRIPT[lineIndex].type === 'input'
              ? SCRIPT[lineIndex].text.slice(0, charIndex)
              : SCRIPT[lineIndex].text}
            <span className="cs-terminal-cursor" />
          </div>
        )}
        {done && (
          <div className="cs-terminal-line cs-terminal-line--input">
            <span className="cs-terminal-prompt">$</span>
            <span className="cs-terminal-cursor" />
          </div>
        )}
      </div>
    </div>
  )
}
