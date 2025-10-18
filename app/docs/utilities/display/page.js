export default function DisplayPage() {
    return (
      <div className="docs-page">
        <h1>Display Utilities</h1>
        <p className="lead">
          Control the display of elements with responsive display utilities.
        </p>
  
        <section className="docs-section">
          <h2>Display Classes</h2>
          
          <div className="component-demo" style={{ flexDirection: 'column', gap: '1rem' }}>
            <div className="ethio-d-block ethio-bg-primary ethio-text-white ethio-p-2">.ethio-d-block</div>
            <div className="ethio-d-inline ethio-bg-secondary ethio-text-white ethio-p-2">.ethio-d-inline</div>
            <div className="ethio-d-inline-block ethio-bg-success ethio-text-white ethio-p-2">.ethio-d-inline-block</div>
            <div className="ethio-d-flex ethio-bg-warning ethio-p-2" style={{ gap: '0.5rem' }}>
              <span>.ethio-d-flex</span>
              <span>Item 2</span>
            </div>
          </div>
  
          <pre className="code-block">
  {`<div class="ethio-d-block">Block display</div>
  <div class="ethio-d-inline">Inline display</div>
  <div class="ethio-d-inline-block">Inline block</div>
  <div class="ethio-d-flex">Flex container</div>
  <div class="ethio-d-none">Hidden element</div>`}
          </pre>
        </section>
      </div>
    )
  }