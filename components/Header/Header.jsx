'use client'

import { useState } from 'react'
import Link from 'next/link'
import PageContainer from '../PageContainer'
import './Header.scss'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <PageContainer>
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
              <Link href="/docs" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Documentation</Link>
              <Link href="/components" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Components</Link>
              <Link href="/docs/guidance" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Guidance</Link>
              <Link href="/about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            </div>
            <div className="nav-actions">
              <Link 
                href="https://github.com/chu01/ethiowds" 
                className="nav-link external"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                GitHub
              </Link>
              <Link href="/docs" className="eth-button eth-button--primary" onClick={() => setIsMobileMenuOpen(false)}>
                Get Started
              </Link>
            </div>
          </nav>

          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </PageContainer>
    </header>
  )
}