export default function ProgressPage() {
    return (
      <div className="docs-page">
        <h1>Progress Bars</h1>
        <p className="lead">
          Visual indicators showing completion status or loading progress.
        </p>
  
        <section className="docs-section">
          <h2>Basic Progress Bars</h2>
          <div className="component-demo" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="ethio-progress">
              <div className="ethio-progress-bar" style={{ width: '25%' }}></div>
            </div>
            <div className="ethio-progress">
              <div className="ethio-progress-bar" style={{ width: '50%' }}></div>
            </div>
            <div className="ethio-progress">
              <div className="ethio-progress-bar" style={{ width: '75%' }}></div>
            </div>
            <div className="ethio-progress">
              <div className="ethio-progress-bar" style={{ width: '100%' }}></div>
            </div>
          </div>
  
          <pre className="code-block">
  {`<div class="ethio-progress">
    <div class="ethio-progress-bar" style="width: 25%"></div>
  </div>
  <div class="ethio-progress">
    <div class="ethio-progress-bar" style="width: 50%"></div>
  </div>
  <div class="ethio-progress">
    <div class="ethio-progress-bar" style="width: 75%"></div>
  </div>`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Progress Variants</h2>
          <div className="component-demo" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="ethio-progress">
              <div className="ethio-progress-bar" style={{ width: '30%' }}></div>
            </div>
            <div className="ethio-progress">
              <div className="ethio-progress-bar secondary" style={{ width: '50%' }}></div>
            </div>
            <div className="ethio-progress">
              <div className="ethio-progress-bar success" style={{ width: '70%' }}></div>
            </div>
            <div className="ethio-progress">
              <div className="ethio-progress-bar warning" style={{ width: '90%' }}></div>
            </div>
            <div className="ethio-progress">
              <div className="ethio-progress-bar error" style={{ width: '100%' }}></div>
            </div>
          </div>
  
          <pre className="code-block">
  {`<div class="ethio-progress">
    <div class="ethio-progress-bar" style="width: 30%"></div>
  </div>
  <div class="ethio-progress">
    <div class="ethio-progress-bar secondary" style="width: 50%"></div>
  </div>
  <div class="ethio-progress">
    <div class="ethio-progress-bar success" style="width: 70%"></div>
  </div>
  <div class="ethio-progress">
    <div class="ethio-progress-bar warning" style="width: 90%"></div>
  </div>
  <div class="ethio-progress">
    <div class="ethio-progress-bar error" style="width: 100%"></div>
  </div>`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Progress Sizes</h2>
          <div className="component-demo" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="ethio-progress ethio-progress-sm">
              <div className="ethio-progress-bar" style={{ width: '33%' }}></div>
            </div>
            <div className="ethio-progress">
              <div className="ethio-progress-bar" style={{ width: '66%' }}></div>
            </div>
            <div className="ethio-progress ethio-progress-lg">
              <div className="ethio-progress-bar" style={{ width: '100%' }}></div>
            </div>
          </div>
  
          <pre className="code-block">
  {`<div class="ethio-progress ethio-progress-sm">
    <div class="ethio-progress-bar" style="width: 33%"></div>
  </div>
  <div class="ethio-progress">
    <div class="ethio-progress-bar" style="width: 66%"></div>
  </div>
  <div class="ethio-progress ethio-progress-lg">
    <div class="ethio-progress-bar" style="width: 100%"></div>
  </div>`}
          </pre>
        </section>
      </div>
    )
  }