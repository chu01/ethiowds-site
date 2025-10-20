export default function BadgesPage() {
    return (
      <div className="docs-page">
        <h1>Badges</h1>
        <p className="lead">
          Small labels and status indicators for highlighting information.
        </p>
  
        <section className="docs-section">
          <h2>Badge Variants</h2>
          <div className="component-demo">
            <span className="ethio-badge ethio-badge-primary">Primary</span>
            <span className="ethio-badge ethio-badge-secondary">Secondary</span>
            <span className="ethio-badge ethio-badge-success">Success</span>
            <span className="ethio-badge ethio-badge-warning">Warning</span>
            <span className="ethio-badge ethio-badge-error">Error</span>
          </div>
  
          <pre className="code-block">
  {`<span class="ethio-badge ethio-badge-primary">Primary</span>
  <span class="ethio-badge ethio-badge-secondary">Secondary</span>
  <span class="ethio-badge ethio-badge-success">Success</span>
  <span class="ethio-badge ethio-badge-warning">Warning</span>
  <span class="ethio-badge ethio-badge-error">Error</span>`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Badge Sizes</h2>
          <div className="component-demo">
            <span className="ethio-badge ethio-badge-primary ethio-badge-sm">Small</span>
            <span className="ethio-badge ethio-badge-primary">Default</span>
            <span className="ethio-badge ethio-badge-primary ethio-badge-lg">Large</span>
          </div>
  
          <pre className="code-block">
  {`<span class="ethio-badge ethio-badge-primary ethio-badge-sm">Small</span>
  <span class="ethio-badge ethio-badge-primary">Default</span>
  <span class="ethio-badge ethio-badge-primary ethio-badge-lg">Large</span>`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Usage Examples</h2>
          <div className="component-demo" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
            <div>
              <h3>Notifications <span className="ethio-badge ethio-badge-error">3</span></h3>
            </div>
            <div>
              <button className="ethio-btn ethio-btn-primary">
                Messages <span className="ethio-badge ethio-badge-secondary">5</span>
              </button>
            </div>
            <div>
              <span>Status: </span>
              <span className="ethio-badge ethio-badge-success">Active</span>
            </div>
          </div>
  
          <pre className="code-block">
  {`<h3>Notifications <span class="ethio-badge ethio-badge-error">3</span></h3>
  
  <button class="ethio-btn ethio-btn-primary">
    Messages <span class="ethio-badge ethio-badge-secondary">5</span>
  </button>
  
  <span>Status: </span>
  <span class="ethio-badge ethio-badge-success">Active</span>`}
          </pre>
        </section>
      </div>
    )
  }