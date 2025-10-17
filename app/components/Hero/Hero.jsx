import './Hero.scss'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Build Ethiopian Digital Experiences
            <span className="amharic-subtitle">ኢትዮጵያዊ ዲጂታል ተሞክሮዎችን ይገንቡ</span>
          </h1>
          
          <p className="hero-description">
            EthioWDS is a comprehensive design system for Ethiopian government websites, 
            providing consistent, accessible, and beautiful components built with Ethiopian identity.
          </p>
          
          <div className="hero-actions">
            <button className="btn btn-primary">
              Get Started
            </button>
            <button className="btn btn-secondary">
              View Components
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Components</div>
            </div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Accessible</div>
            </div>
            <div className="stat">
              <div className="stat-number">∞</div>
              <div className="stat-label">Customizable</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}