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
  
          <pre className="code-block">
  {`/* Spacing scale in CSS */
  :root {
    --spacing-1: 0.25rem;  /* 4px */
    --spacing-2: 0.5rem;   /* 8px */
    --spacing-3: 0.75rem;  /* 12px */
    --spacing-4: 1rem;     /* 16px */
    --spacing-5: 1.5rem;   /* 24px */
    --spacing-6: 2rem;     /* 32px */
    --spacing-8: 3rem;     /* 48px */
  }`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Usage in SCSS</h2>
          <p>Use the spacing variables in your SCSS files:</p>
          
          <pre className="code-block">
  {`// Import EthioWDS
  @use '@abiyub/ethiowds' as *;
  
  .component {
    padding: $spacing-unit; // 1rem
    
    &-compact {
      padding: $spacing-unit * 0.5; // 0.5rem
    }
    
    &-spacious {
      padding: $spacing-unit * 2; // 2rem
    }
  }`}
          </pre>
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
          <h2>Responsive Spacing</h2>
          <p>EthioWDS supports responsive spacing for different screen sizes:</p>
          
          <pre className="code-block">
  {`// Mobile first approach
  .container {
    padding: 1rem; // Mobile
    
    @media (min-width: 768px) {
      padding: 2rem; // Tablet and desktop
    }
    
    @media (min-width: 1024px) {
      padding: 3rem; // Large desktop
    }
  }`}
          </pre>
        </section>
      </div>
    )
  }