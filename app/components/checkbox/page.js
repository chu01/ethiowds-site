'use client'

export default function CheckboxPage() {
  return (
    <div className="docs-page">
      <h1>Checkbox</h1>
      <p className="lead">
        Checkbox inputs for selecting multiple options from a list.
      </p>

      <section className="docs-section">
        <h2>Basic Checkbox</h2>
        <div className="component-demo" style={{ flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
          <div className="ethio-form-check">
            <input type="checkbox" className="ethio-checkbox" id="agree" defaultChecked />
            <label htmlFor="agree">I agree to the terms</label>
          </div>

          <div className="ethio-form-check">
            <input type="checkbox" className="ethio-checkbox" id="newsletter" />
            <label htmlFor="newsletter">Subscribe to newsletter</label>
          </div>
        </div>

        <pre className="code-block">
{`<div className="ethio-form-check">
  <input type="checkbox" className="ethio-checkbox" id="agree" />
  <label htmlFor="agree">I agree to the terms</label>
</div>`}
        </pre>
      </section>

      <section className="docs-section">
        <h2>Checkbox States</h2>
        <div className="component-demo" style={{ flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
          <div className="ethio-form-check">
            <input type="checkbox" className="ethio-checkbox" id="checked" defaultChecked />
            <label htmlFor="checked">Checked</label>
          </div>

          <div className="ethio-form-check">
            <input type="checkbox" className="ethio-checkbox" id="unchecked" />
            <label htmlFor="unchecked">Unchecked</label>
          </div>

          <div className="ethio-form-check">
            <input type="checkbox" className="ethio-checkbox" id="disabled" disabled />
            <label htmlFor="disabled">Disabled</label>
          </div>
        </div>
      </section>
    </div>
  )
}

