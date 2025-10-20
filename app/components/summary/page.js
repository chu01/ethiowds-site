export default function SummaryPage() {
    return (
      <div className="docs-page">
        <h1>Summary Box</h1>
        <p className="lead">
          Highlight important information, statistics, or key points in a prominent container.
        </p>
  
        <section className="docs-section">
          <h2>Basic Summary Box</h2>
          <div className="component-demo">
            <div className="ethio-summary">
              <div className="ethio-summary-header">
                <div>
                  <h3 className="ethio-summary-title">Project Overview</h3>
                  <p className="ethio-summary-subtitle">Last updated: Today</p>
                </div>
              </div>
              <div className="ethio-summary-content">
                <p>This is a summary box that can be used to highlight important information, key metrics, or project overviews. It provides a clear visual hierarchy for important content.</p>
              </div>
              <div className="ethio-summary-footer">
                <button className="ethio-btn ethio-btn-primary">View Details</button>
                <button className="ethio-btn ethio-btn-ghost">Edit</button>
              </div>
            </div>
          </div>
  
          <pre className="code-block">
  {`<div class="ethio-summary">
    <div class="ethio-summary-header">
      <div>
        <h3 class="ethio-summary-title">Project Overview</h3>
        <p class="ethio-summary-subtitle">Last updated: Today</p>
      </div>
    </div>
    <div class="ethio-summary-content">
      <p>Summary content goes here.</p>
    </div>
    <div class="ethio-summary-footer">
      <button class="ethio-btn ethio-btn-primary">Action</button>
    </div>
  </div>`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Summary Variants</h2>
          <div className="component-demo" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            <div className="ethio-summary ethio-summary-primary">
              <div className="ethio-summary-header">
                <h3 className="ethio-summary-title">Primary Summary</h3>
              </div>
              <div className="ethio-summary-content">
                <p>With primary accent border.</p>
              </div>
            </div>
            
            <div className="ethio-summary ethio-summary-success">
              <div className="ethio-summary-header">
                <h3 className="ethio-summary-title">Success Summary</h3>
              </div>
              <div className="ethio-summary-content">
                <p>With success accent border.</p>
              </div>
            </div>
            
            <div className="ethio-summary ethio-summary-elevated">
              <div className="ethio-summary-header">
                <h3 className="ethio-summary-title">Elevated Summary</h3>
              </div>
              <div className="ethio-summary-content">
                <p>With enhanced shadow effect.</p>
              </div>
            </div>
          </div>
  
          <pre className="code-block">
  {`<div class="ethio-summary ethio-summary-primary">
    <!-- Primary variant -->
  </div>
  
  <div class="ethio-summary ethio-summary-success">
    <!-- Success variant -->
  </div>
  
  <div class="ethio-summary ethio-summary-elevated">
    <!-- Elevated variant -->
  </div>`}
          </pre>
        </section>
      </div>
    )
  }