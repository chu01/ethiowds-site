export default function ColorsUtilityPage() {
    return (
      <div className="docs-page">
        <h1>Color Utilities</h1>
        <p className="lead">
          Use color utility classes for quick styling without custom CSS.
        </p>
  
        <section className="docs-section">
          <h2>Text Colors</h2>
          
          <div className="component-demo" style={{ flexDirection: 'column', gap: '0.5rem' }}>
            <div className="ethio-text-primary">.ethio-text-primary</div>
            <div className="ethio-text-secondary">.ethio-text-secondary</div>
            <div className="ethio-text-success">.ethio-text-success</div>
            <div className="ethio-text-warning">.ethio-text-warning</div>
            <div className="ethio-text-error">.ethio-text-error</div>
            <div className="ethio-text-info">.ethio-text-info</div>
          </div>
  
          <pre className="code-block">
  {`<p class="ethio-text-primary">Primary text</p>
  <p class="ethio-text-secondary">Secondary text</p>
  <p class="ethio-text-success">Success text</p>
  <p class="ethio-text-warning">Warning text</p>
  <p class="ethio-text-error">Error text</p>
  <p class="ethio-text-info">Info text</p>`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Background Colors</h2>
          
          <div className="component-demo" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
            <div className="ethio-bg-primary ethio-text-white ethio-p-3">.ethio-bg-primary</div>
            <div className="ethio-bg-secondary ethio-text-white ethio-p-3">.ethio-bg-secondary</div>
            <div className="ethio-bg-success ethio-text-white ethio-p-3">.ethio-bg-success</div>
            <div className="ethio-bg-warning ethio-text-white ethio-p-3">.ethio-bg-warning</div>
            <div className="ethio-bg-error ethio-text-white ethio-p-3">.ethio-bg-error</div>
            <div className="ethio-bg-info ethio-text-white ethio-p-3">.ethio-bg-info</div>
          </div>
  
          <pre className="code-block">
  {`<div class="ethio-bg-primary ethio-text-white">Primary background</div>
  <div class="ethio-bg-secondary ethio-text-white">Secondary background</div>
  <div class="ethio-bg-success ethio-text-white">Success background</div>`}
          </pre>
        </section>
      </div>
    )
  }