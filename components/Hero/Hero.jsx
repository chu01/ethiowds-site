import Link from 'next/link'
import './Hero.scss'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="eth-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="title-flag">🇪🇹</span>
                EthioWDS
              </h1>
              <h2 className="hero-subtitle">
                Ethiopian Web Design System
              </h2>
              <p className="hero-description">
                A comprehensive design system for building accessible, 
                consistent, and culturally relevant Ethiopian web experiences.
              </p>
              <div className="hero-actions">
                <Link href="/docs/installation" className="eth-button eth-button--primary eth-button--large">
                  Get Started
                </Link>
                <Link href="/components" className="eth-button eth-button--outline eth-button--large">
                  View Components
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              {/* Add hero image or illustration */}
              <div className="hero-placeholder">
                🎨 EthioWDS Visual
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}