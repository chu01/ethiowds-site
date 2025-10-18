import './Footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="flag">🇪🇹</span>
            <span>EthioWDS</span>
            <p className="footer-description">
              Ethiopian Web Design System for building consistent, accessible digital experiences.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>Documentation</h4>
              <a href="/docs">Getting Started</a>
              <a href="/docs/components/buttons">Components</a>
              <a href="/docs/colors">Foundation</a>
            </div>
            
            <div className="footer-section">
              <h4>Resources</h4>
              <a href="https://github.com/abiyub/ethiowds">GitHub</a>
              <a href="https://npmjs.com/package/@abiyub/ethiowds">npm Package</a>
              <a href="/docs/installation">Installation</a>
            </div>
            
            <div className="footer-section">
              <h4>Community</h4>
              <a href="https://github.com/abiyub/ethiowds/issues">Report Issues</a>
              <a href="https://github.com/abiyub/ethiowds/discussions">Discussions</a>
              <a href="https://github.com/abiyub/ethiowds">Contribute</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 EthioWDS. Built with ❤️ for the Ethiopian developer community.</p>
        </div>
      </div>
    </footer>
  )
}