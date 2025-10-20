'use client'

import { useState } from 'react'
import Link from 'next/link'
import './Header.scss'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-content">
          <div className="header-brand">
            <Link href="/" className="logo">
              <span className="logo-flag">🇪🇹</span>
              <span className="logo-text">
                <span className="logo-primary">Ethio</span>
                <span className="logo-secondary">WDS</span>
              </span>
            </Link>
          </div>

          <nav className={`header-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <div className="nav-main">
              <Link href="/docs" className="nav-link">Documentation</Link>
              <Link href="/components" className="nav-link">Components</Link>
              <Link href="/docs/guidance" className="nav-link">Guidance</Link>
              <Link href="/about" className="nav-link">About</Link>
            </div>
            <div className="nav-actions">
              <Link 
                href="https://github.com/chu01/ethiowds" 
                className="nav-link external"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
              <Link href="/docs" className="button button-primary">
                Get Started
              </Link>
            </div>
          </nav>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}