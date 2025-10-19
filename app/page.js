import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import ColorShowcase from './components/ColorShowcase/ColorShowcase'
import Footer from './components/Footer/Footer'
import './globals.scss'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ColorShowcase />
      
      {/* Simple Components Preview */}
      <section style={{ padding: '4rem 0', background: '#f8f9fa' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Featured Components</h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {/* Existing components... */}
            
            {/* New Components */}
            <div className="ethio-card">
              <div className="ethio-card-header">
                <h3>Accordion</h3>
              </div>
              <div className="ethio-card-body">
                <p>Collapsible sections for organized content.</p>
                <div style={{ marginTop: '1rem' }}>
                  <div className="ethio-accordion">
                    <div className="ethio-accordion-item">
                      <button className="ethio-accordion-header">
                        Quick Preview
                        <span className="ethio-accordion-icon">▼</span>
                      </button>
                      <div className="ethio-accordion-content">
                        <p>Compact information display.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ethio-card">
              <div className="ethio-card-header">
                <h3>Search</h3>
              </div>
              <div className="ethio-card-body">
                <p>Advanced search with clear functionality.</p>
                <div style={{ marginTop: '1rem' }}>
                  <div className="ethio-search">
                    <input type="text" className="ethio-search-input" placeholder="Try searching..." />
                    <span className="ethio-search-icon">🔍</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="ethio-card">
              <div className="ethio-card-header">
                <h3>Summary Box</h3>
              </div>
              <div className="ethio-card-body">
                <p>Highlight key information prominently.</p>
                <div style={{ marginTop: '1rem' }}>
                  <div className="ethio-summary ethio-summary-compact">
                    <div className="ethio-summary-header">
                      <h4 className="ethio-summary-title">Quick Stats</h4>
                    </div>
                    <div className="ethio-summary-content">
                      <p>15+ components ready to use.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="/docs/components/buttons" className="ethio-btn ethio-btn-primary ethio-btn-lg">
              View All Components
            </a>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section style={{ padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Explore the complete documentation to learn how to use EthioWDS in your projects.</p>
          <div style={{ marginTop: '2rem' }}>
            <a href="/docs" className="ethio-btn ethio-btn-primary" style={{ marginRight: '1rem' }}>
              View Documentation
            </a>
            <a href="/docs/installation" className="ethio-btn ethio-btn-outline">
              Installation Guide
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}