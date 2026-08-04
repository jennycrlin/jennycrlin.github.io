'use client'

import { useState, useEffect } from 'react'

export function MobileMenuButton() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <button
        className="mobile-menu-btn"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        <span className={`hamburger${open ? ' hamburger--open' : ''}`}>
          <span />
          <span />
          <span />
        </span>
      </button>

      {open && (
        <div className="mobile-menu-overlay" onClick={() => setOpen(false)}>
          <div className="mobile-menu-drawer" onClick={e => e.stopPropagation()}>
            <a href="/#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="/about" onClick={() => setOpen(false)}>About</a>
            <a href="/images/resume/Jenny_Resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Resume</a>
          </div>
        </div>
      )}
    </>
  )
}
