'use client'

export default function SelectPage() {
  return (
    <div className="docs-page">
      <h1>Select</h1>
      <p className="lead">
        Dropdown selection components for choosing options from a list.
      </p>

      <section className="docs-section">
        <h2>Basic Select</h2>
        <div className="component-demo" style={{ flexDirection: 'column', maxWidth: '400px' }}>
          <div className="ethio-form-group">
            <label className="ethio-form-label">Country</label>
            <select className="ethio-form-select">
              <option>Select a country</option>
              <option>Ethiopia</option>
              <option>Kenya</option>
              <option>Nigeria</option>
              <option>South Africa</option>
            </select>
          </div>
        </div>

        <pre className="code-block">
{`<div className="ethio-form-group">
  <label className="ethio-form-label">Country</label>
  <select className="ethio-form-select">
    <option>Select a country</option>
    <option>Ethiopia</option>
  </select>
</div>`}
        </pre>
      </section>

      <section className="docs-section">
        <h2>Select States</h2>
        <div className="component-demo" style={{ flexDirection: 'column', maxWidth: '400px', gap: '1rem' }}>
          <div className="ethio-form-group">
            <label className="ethio-form-label">Normal Select</label>
            <select className="ethio-form-select">
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>

          <div className="ethio-form-group">
            <label className="ethio-form-label">Disabled Select</label>
            <select className="ethio-form-select" disabled>
              <option>Disabled option</option>
            </select>
          </div>

          <div className="ethio-form-group">
            <label className="ethio-form-label">Required Select</label>
            <select className="ethio-form-select" required>
              <option value="">Choose...</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Multiple Selection</h2>
        <div className="component-demo" style={{ flexDirection: 'column', maxWidth: '400px' }}>
          <div className="ethio-form-group">
            <label className="ethio-form-label">Select Multiple</label>
            <select className="ethio-form-select" multiple style={{ minHeight: '120px' }}>
              <option>JavaScript</option>
              <option>Python</option>
              <option>Java</option>
              <option>React</option>
              <option>Vue</option>
            </select>
            <small>Hold Ctrl (or Cmd on Mac) to select multiple</small>
          </div>
        </div>

        <pre className="code-block">
{`<select className="ethio-form-select" multiple>
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>`}
        </pre>
      </section>
    </div>
  )
}

