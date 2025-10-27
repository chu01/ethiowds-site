'use client'

export default function RadioPage() {
  return (
    <div className="docs-page">
      <h1>Radio</h1>
      <p className="lead">
        Radio button groups for selecting a single option from multiple choices.
      </p>

      <section className="docs-section">
        <h2>Basic Radio</h2>
        <div className="component-demo" style={{ flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
          <div className="ethio-form-check">
            <input type="radio" className="ethio-radio" id="option1" name="options" defaultChecked />
            <label htmlFor="option1">Option One</label>
          </div>

          <div className="ethio-form-check">
            <input type="radio" className="ethio-radio" id="option2" name="options" />
            <label htmlFor="option2">Option Two</label>
          </div>

          <div className="ethio-form-check">
            <input type="radio" className="ethio-radio" id="option3" name="options" />
            <label htmlFor="option3">Option Three</label>
          </div>
        </div>

        <pre className="code-block">
{`<div className="ethio-form-check">
  <input type="radio" className="ethio-radio" id="option1" name="options" />
  <label htmlFor="option1">Option One</label>
</div>`}
        </pre>
      </section>

      <section className="docs-section">
        <h2>Radio States</h2>
        <div className="component-demo" style={{ flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
          <div className="ethio-form-check">
            <input type="radio" className="ethio-radio" id="enabled" name="states" defaultChecked />
            <label htmlFor="enabled">Enabled</label>
          </div>

          <div className="ethio-form-check">
            <input type="radio" className="ethio-radio" id="disabled-radio" name="states" disabled />
            <label htmlFor="disabled-radio">Disabled</label>
          </div>
        </div>
      </section>
    </div>
  )
}

