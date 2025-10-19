import './Hero.scss'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Build better Ethiopian digital experiences
            </h1>
            <p className="hero-description">
              EthioWDS is an open-source design system for the Ethiopian government. 
              Create accessible, mobile-friendly, and consistent websites and applications 
              with Ethiopian identity.
            </p>
            <div className="hero-actions">
              <a href="/docs/getting-started" className="button button-primary button-lg">
                Get started
              </a>
              <a href="/docs/components" className="button button-outline button-lg">
                View components
              </a>
            </div>
            <div className="hero-meta">
              <span className="version">Latest version: 1.2.0</span>
              <a href="https://github.com/abiyub/ethiowds" className="github-link">
                View on GitHub
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="component-showcase">
              <div className="component-grid">
                <div className="component-card">
                  <div className="component-icon">🎨</div>
                  <h4>Design tokens</h4>
                  <p>Colors, typography, spacing</p>
                </div>
                <div className="component-card">
                  <div className="component-icon">🧩</div>
                  <h4>Components</h4>
                  <p>15+ reusable components</p>
                </div>
                <div className="component-card">
                  <div className="component-icon">♿</div>
                  <h4>Accessible</h4>
                  <p>WCAG 2.1 compliant</p>
                </div>
                <div className="component-card">
                  <div className="component-icon">🇪🇹</div>
                  <h4>Ethiopian</h4>
                  <p>Built for Ethiopian needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}