export default function SpacingPage() {
    return (
      <div className="docs-page">
        <h1>Spacing Scale</h1>
        <p className="lead">
          EthioWDS uses a consistent spacing scale based on rem units for predictable layouts.
        </p>
  
        <section className="docs-section">
          <h2>Spacing Scale</h2>
          <p>The spacing scale uses multiples of 0.25rem (4px) for consistency:</p>
          
          <div className="component-demo" style={{ flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '1rem', height: '1rem', background: 'var(--primary)', borderRadius: '0.25rem' }}></div>
              <div><strong>1 unit</strong> = 0.25rem (4px)</div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '2rem', height: '2rem', background: 'var(--primary)', borderRadius: '0.25rem' }}></div>
              <div><strong>2 units</strong> = 0.5rem (8px)</div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '3rem', height: '3rem', background: 'var(--primary)', borderRadius: '0.25rem' }}></div>
              <div><strong>3 units</strong> = 0.75rem (12px)</div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '4rem', height: '4rem', background: 'var(--primary)', borderRadius: '0.25rem' }}></div>
              <div><strong>4 units</strong> = 1rem (16px)</div>
            </div>
          </div>
  
          <p>The design system exposes spacing as variables (for example, 1 unit = 0.25rem, 4 units = 1rem). Use these in your project for padding, margins, and gaps so layouts stay consistent.</p>
        </section>
  
        <section className="docs-section">
          <h2>Usage</h2>
          <p>Use the spacing variables in your project for padding, margins, and gaps. Compact layouts can use smaller units; spacious layouts can use larger ones. Keeping to the scale improves consistency across the site.</p>
        </section>
  
        <section className="docs-section">
          <h2>Common Spacing Patterns</h2>
          
          <div className="component-demo" style={{ flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h4>Section Spacing</h4>
              <div style={{ background: 'var(--primary)', height: '3rem', borderRadius: '0.25rem', opacity: 0.1 }}></div>
              <div style={{ height: '3rem' }}></div> {/* Spacing between sections */}
              <div style={{ background: 'var(--secondary)', height: '3rem', borderRadius: '0.25rem', opacity: 0.1 }}></div>
              <small>3rem spacing between major sections</small>
            </div>
            
            <div>
              <h4>Component Spacing</h4>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ background: 'var(--primary)', flex: 1, height: '2rem', borderRadius: '0.25rem', opacity: 0.1 }}></div>
                <div style={{ background: 'var(--primary)', flex: 1, height: '2rem', borderRadius: '0.25rem', opacity: 0.1 }}></div>
              </div>
              <small>1rem spacing between related components</small>
            </div>
            
            <div>
              <h4>Internal Spacing</h4>
              <div style={{ background: 'var(--success)', padding: '1rem', borderRadius: '0.25rem', opacity: 0.1 }}>
                <div style={{ background: 'white', height: '1rem', borderRadius: '0.125rem' }}></div>
              </div>
              <small>1rem internal padding within components</small>
            </div>
          </div>
        </section>
  
        <section className="docs-section">
          <h2>Responsive spacing</h2>
          <p>EthioWDS supports responsive spacing for different screen sizes. Use smaller spacing on mobile and increase spacing on tablet and desktop for a comfortable reading and layout experience.</p>
        </section>
      </div>
    )
  }