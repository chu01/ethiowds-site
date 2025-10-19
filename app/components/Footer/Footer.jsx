import './Footer.scss'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-flag">🇪🇹</span>
              <span className="logo-text">
                <span className="logo-primary">Ethio</span>
                <span className="logo-secondary">WDS</span>
              </span>
            </div>
            <p className="footer-description">
              An open-source design system for the Ethiopian government.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>Documentation</h4>
              <a href="/docs/getting-started">Getting started</a>
              <a href="/docs/components">Components</a>
              <a href="/docs/design-tokens">Design tokens</a>
              <a href="/docs/accessibility">Accessibility</a>
            </div>
            
            <div className="footer-section">
              <h4>Resources</h4>
              <a href="https://github.com/chu01/ethiowds">GitHub</a>
              <a href="https://npmjs.com/package/@abiyub/ethiowds">npm package</a>
              <a href="/docs/contributing">Contributing</a>
              <a href="/docs/changelog">Changelog</a>
            </div>
            
            <div className="footer-section">
              <h4>Community</h4>
              <a href="https://github.com/chu01/ethiowds/issues">Report an issue</a>
              <a href="https://github.com/chu01/ethiowds/discussions">Discussions</a>
              <a href="https://github.com/chu01/ethiowds">Contribute</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-legal">
            <p>
              Built with ❤️ for the Ethiopian digital community. 
              EthioWDS is an open-source project.
            </p>
          </div>
          <div className="footer-meta">
            <span>Version 1.2.0</span>
            <span>·</span>
            <a href="/docs/license">MIT License</a>
          </div>
        </div>
      </div>
    </footer>
  )
}