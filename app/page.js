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
            <div className="ethio-card">
              <div className="ethio-card-header">
                <h3>Buttons</h3>
              </div>
              <div className="ethio-card-body">
                <p>Multiple button styles and sizes for all interactions.</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                  <button className="ethio-btn ethio-btn-primary">Primary</button>
                  <button className="ethio-btn ethio-btn-secondary">Secondary</button>
                  <button className="ethio-btn ethio-btn-outline">Outline</button>
                </div>
              </div>
            </div>

            <div className="ethio-card">
              <div className="ethio-card-header">
                <h3>Cards</h3>
              </div>
              <div className="ethio-card-body">
                <p>Flexible card components for content display.</p>
                <div style={{ marginTop: '1rem' }}>
                  <div className="ethio-card ethio-card-primary" style={{ margin: 0 }}>
                    <div className="ethio-card-body">
                      <p>Example card with primary accent.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ethio-card">
              <div className="ethio-card-header">
                <h3>Forms</h3>
              </div>
              <div className="ethio-card-body">
                <p>Accessible form components with validation states.</p>
                <div style={{ marginTop: '1rem' }}>
                  <div className="ethio-form-group">
                    <input type="text" className="ethio-form-input" placeholder="Try me..." />
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