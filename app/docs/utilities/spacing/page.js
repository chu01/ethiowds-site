export default function SpacingPage() {
    return (
      <div className="docs-page">
        <h1>Spacing Utilities</h1>
        <p className="lead">
          Control spacing with margin and padding utility classes.
        </p>
  
        <section className="docs-section">
          <h2>Margin Utilities</h2>
          
          <div className="component-demo" style={{ flexDirection: 'column', gap: '1rem' }}>
            <div className="ethio-bg-light ethio-p-2">
              <div className="ethio-bg-primary ethio-text-white ethio-m-1 ethio-p-1">.ethio-m-1</div>
            </div>
            <div className="ethio-bg-light ethio-p-2">
              <div className="ethio-bg-primary ethio-text-white ethio-m-2 ethio-p-1">.ethio-m-2</div>
            </div>
            <div className="ethio-bg-light ethio-p-2">
              <div className="ethio-bg-primary ethio-text-white ethio-m-3 ethio-p-1">.ethio-m-3</div>
            </div>
          </div>
  
          <pre className="code-block">
  {`<div class="ethio-m-1">Margin 1 (0.25rem)</div>
  <div class="ethio-m-2">Margin 2 (0.5rem)</div>
  <div class="ethio-m-3">Margin 3 (1rem)</div>
  <div class="ethio-mt-2">Margin top 2</div>
  <div class="ethio-mb-3">Margin bottom 3</div>`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Padding Utilities</h2>
          
          <div className="component-demo" style={{ flexDirection: 'column', gap: '1rem' }}>
            <div className="ethio-bg-primary ethio-text-white ethio-p-1">.ethio-p-1</div>
            <div className="ethio-bg-primary ethio-text-white ethio-p-2">.ethio-p-2</div>
            <div className="ethio-bg-primary ethio-text-white ethio-p-3">.ethio-p-3</div>
          </div>
  
          <pre className="code-block">
  {`<div class="ethio-p-1">Padding 1 (0.25rem)</div>
  <div class="ethio-p-2">Padding 2 (0.5rem)</div>
  <div class="ethio-p-3">Padding 3 (1rem)</div>
  <div class="ethio-pt-2">Padding top 2</div>
  <div class="ethio-pb-3">Padding bottom 3</div>`}
          </pre>
        </section>
      </div>
    )
  }