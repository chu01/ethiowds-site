export default function SearchPage() {
    return (
      <div className="docs-page">
        <h1>Search</h1>
        <p className="lead">
          Search input components with clear functionality and various styles.
        </p>
  
        <section className="docs-section">
          <h2>Basic Search</h2>
          <div className="component-demo">
            <div className="ethio-search">
              <input type="text" className="ethio-search-input" placeholder="Search components..." />
              <span className="ethio-search-icon">🔍</span>
              <button className="ethio-search-clear" style={{ display: 'none' }}>×</button>
            </div>
          </div>
  
          <pre className="code-block">
  {`<div class="ethio-search">
    <input type="text" class="ethio-search-input" placeholder="Search...">
    <span class="ethio-search-icon">🔍</span>
    <button class="ethio-search-clear" style="display: none">×</button>
  </div>`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Search with Button</h2>
          <div className="component-demo">
            <div className="ethio-search ethio-search-with-button">
              <input type="text" className="ethio-search-input" placeholder="Enter search term..." />
              <button className="ethio-btn ethio-btn-primary">Search</button>
            </div>
          </div>
  
          <pre className="code-block">
  {`<div class="ethio-search ethio-search-with-button">
    <input type="text" class="ethio-search-input" placeholder="Search...">
    <button class="ethio-btn ethio-btn-primary">Search</button>
  </div>`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Search Sizes</h2>
          <div className="component-demo" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
            <div className="ethio-search ethio-search-sm">
              <input type="text" className="ethio-search-input" placeholder="Small search..." />
              <span className="ethio-search-icon">🔍</span>
            </div>
            
            <div className="ethio-search">
              <input type="text" className="ethio-search-input" placeholder="Default search..." />
              <span className="ethio-search-icon">🔍</span>
            </div>
            
            <div className="ethio-search ethio-search-lg">
              <input type="text" className="ethio-search-input" placeholder="Large search..." />
              <span className="ethio-search-icon">🔍</span>
            </div>
          </div>
  
          <pre className="code-block">
  {`<div class="ethio-search ethio-search-sm">
    <!-- Small search -->
  </div>
  
  <div class="ethio-search">
    <!-- Default search -->
  </div>
  
  <div class="ethio-search ethio-search-lg">
    <!-- Large search -->
  </div>`}
          </pre>
        </section>
      </div>
    )
  }