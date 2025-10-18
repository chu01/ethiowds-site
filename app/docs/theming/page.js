export default function ThemingPage() {
    return (
      <div className="docs-page">
        <h1>Theming</h1>
        <p className="lead">
          Customize EthioWDS to match your brand with comprehensive theming options.
        </p>
  
        <section className="docs-section">
          <h2>SCSS Variables</h2>
          <p>Override default variables before importing EthioWDS:</p>
          
          <pre className="code-block">
  {`// Customize before import
  $primary: #2E86AB;
  $secondary: #FF6B6B;
  $ethio-green: #1B5E20;
  $ethio-yellow: #FFC107;
  $ethio-red: #C2185B;
  $ethio-blue: #1976D2;
  
  // Typography
  $font-family-sans: 'Inter', 'Noto Sans Ethiopic', sans-serif;
  $font-size-base: 1.1rem;
  
  // Import EthioWDS with your customizations
  @use '@abiyub/ethiowds' as *;`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>CSS Custom Properties</h2>
          <p>EthioWDS also exposes CSS custom properties for runtime theming:</p>
          
          <pre className="code-block">
  {`/* Override in your CSS */
  :root {
    --primary: #2E86AB;
    --secondary: #FF6B6B;
    --ethio-green: #1B5E20;
    --ethio-yellow: #FFC107;
    --ethio-red: #C2185B;
    --ethio-blue: #1976D2;
    --font-family-sans: 'Inter', sans-serif;
  }`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Theme Examples</h2>
          
          <div className="component-demo">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div style={{ background: '#2E86AB', color: 'white', padding: '1rem', borderRadius: '0.5rem' }}>
                <strong>Blue Theme</strong>
                <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>Primary: #2E86AB</div>
              </div>
              <div style={{ background: '#1B5E20', color: 'white', padding: '1rem', borderRadius: '0.5rem' }}>
                <strong>Green Theme</strong>
                <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>Primary: #1B5E20</div>
              </div>
              <div style={{ background: '#C2185B', color: 'white', padding: '1rem', borderRadius: '0.5rem' }}>
                <strong>Red Theme</strong>
                <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>Primary: #C2185B</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }