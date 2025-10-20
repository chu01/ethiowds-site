export default function LayoutPage() {
    return (
      <div className="docs-page">
        <h1>Layout</h1>
        <p className="lead">
          Layout components for creating consistent page structures and containers.
        </p>
  
        <section className="docs-section">
          <h2>Container</h2>
          <p>Use containers to center and horizontally pad your content.</p>
          
          <div className="component-demo">
            <div className="container" style={{ background: 'var(--primary)', color: 'white', padding: '2rem', borderRadius: '0.5rem', textAlign: 'center' }}>
              <h3>Container Example</h3>
              <p>This content is centered with max-width and horizontal padding.</p>
            </div>
          </div>
  
          <pre className="code-block">
  {`<div class="container">
    <!-- Your content here -->
  </div>`}
          </pre>
  
          <p><strong>CSS Implementation:</strong></p>
          <pre className="code-block">
  {`.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  @media (max-width: 768px) {
    .container {
      padding: 0 1rem;
    }
  }`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Grid System</h2>
          <p>Create responsive layouts using CSS Grid.</p>
          
          <div className="component-demo">
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1rem',
              marginBottom: '1rem'
            }}>
              <div style={{ background: 'var(--primary)', color: 'white', padding: '2rem', borderRadius: '0.5rem', textAlign: 'center' }}>Column 1</div>
              <div style={{ background: 'var(--primary)', color: 'white', padding: '2rem', borderRadius: '0.5rem', textAlign: 'center' }}>Column 2</div>
              <div style={{ background: 'var(--primary)', color: 'white', padding: '2rem', borderRadius: '0.5rem', textAlign: 'center' }}>Column 3</div>
            </div>
          </div>
  
          <pre className="code-block">
  {`<div style="
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  ">
    <div>Column 1</div>
    <div>Column 2</div>
    <div>Column 3</div>
  </div>`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Flexbox Layouts</h2>
          <p>Use flexbox for one-dimensional layouts.</p>
          
          <div className="component-demo">
            <div style={{ 
              display: 'flex', 
              gap: '1rem',
              marginBottom: '1rem',
              flexWrap: 'wrap'
            }}>
              <div style={{ 
                background: 'var(--secondary)', 
                color: 'white', 
                padding: '2rem', 
                borderRadius: '0.5rem', 
                textAlign: 'center',
                flex: '1',
                minWidth: '150px'
              }}>Flex Item</div>
              <div style={{ 
                background: 'var(--secondary)', 
                color: 'white', 
                padding: '2rem', 
                borderRadius: '0.5rem', 
                textAlign: 'center',
                flex: '2',
                minWidth: '150px'
              }}>Flex Item (2x)</div>
              <div style={{ 
                background: 'var(--secondary)', 
                color: 'white', 
                padding: '2rem', 
                borderRadius: '0.5rem', 
                textAlign: 'center',
                flex: '1',
                minWidth: '150px'
              }}>Flex Item</div>
            </div>
          </div>
  
          <pre className="code-block">
  {`<div style="
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  ">
    <div style="flex: 1;">Flex Item</div>
    <div style="flex: 2;">Flex Item (2x)</div>
    <div style="flex: 1;">Flex Item</div>
  </div>`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Sidebar Layout</h2>
          <p>Common sidebar layout pattern.</p>
          
          <div className="component-demo">
            <div style={{ 
              display: 'flex', 
              minHeight: '200px',
              border: '1px solid #eaeaea',
              borderRadius: '0.5rem',
              overflow: 'hidden'
            }}>
              <aside style={{ 
                width: '250px', 
                background: '#f8f9fa', 
                padding: '1.5rem',
                borderRight: '1px solid #eaeaea'
              }}>
                <h4 style={{ margin: '0 0 1rem 0' }}>Sidebar</h4>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <a href="#" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Menu Item 1</a>
                  <a href="#" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Menu Item 2</a>
                  <a href="#" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Menu Item 3</a>
                </nav>
              </aside>
              <main style={{ 
                flex: 1, 
                padding: '1.5rem',
                background: 'white'
              }}>
                <h4 style={{ margin: '0 0 1rem 0' }}>Main Content</h4>
                <p>This is the main content area that adapts to available space.</p>
              </main>
            </div>
          </div>
  
          <pre className="code-block">
  {`<div style="display: flex; min-height: 100vh;">
    <aside style="width: 250px; background: #f8f9fa;">
      <!-- Sidebar content -->
    </aside>
    <main style="flex: 1;">
      <!-- Main content -->
    </main>
  </div>`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Card Grid Layout</h2>
          <p>Responsive grid for card components.</p>
          
          <div className="component-demo">
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '1.5rem'
            }}>
              <div className="ethio-card">
                <div className="ethio-card-header">
                  <h4>Card 1</h4>
                </div>
                <div className="ethio-card-body">
                  <p>Card content with consistent spacing.</p>
                </div>
              </div>
              <div className="ethio-card">
                <div className="ethio-card-header">
                  <h4>Card 2</h4>
                </div>
                <div className="ethio-card-body">
                  <p>Another card in the grid layout.</p>
                </div>
              </div>
              <div className="ethio-card">
                <div className="ethio-card-header">
                  <h4>Card 3</h4>
                </div>
                <div className="ethio-card-body">
                  <p>Third card completing the grid.</p>
                </div>
              </div>
            </div>
          </div>
  
          <pre className="code-block">
  {`<div style="
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  ">
    <div class="ethio-card">...</div>
    <div class="ethio-card">...</div>
    <div class="ethio-card">...</div>
  </div>`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Responsive Breakpoints</h2>
          <p>EthioWDS uses common breakpoints for responsive design:</p>
          
          <div className="component-demo" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ background: 'var(--success)', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.25rem' }}>
                Mobile: &lt; 640px
              </div>
              <div style={{ background: 'var(--warning)', color: 'black', padding: '0.5rem 1rem', borderRadius: '0.25rem' }}>
                Tablet: 640px - 768px
              </div>
              <div style={{ background: 'var(--info)', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.25rem' }}>
                Desktop: 768px - 1024px
              </div>
              <div style={{ background: 'var(--primary)', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.25rem' }}>
                Large: &gt; 1024px
              </div>
            </div>
          </div>
  
          <pre className="code-block">
  {`/* Responsive breakpoints */
  @media (min-width: 640px) {
    /* Tablet styles */
  }
  
  @media (min-width: 768px) {
    /* Desktop styles */
  }
  
  @media (min-width: 1024px) {
    /* Large desktop styles */
  }`}
          </pre>
        </section>
      </div>
    )
  }