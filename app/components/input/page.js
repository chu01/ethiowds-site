'use client'

export default function InputPage() {
  return (
    <div className="docs-page">
      <h1>Input</h1>
      <p className="lead">
        Text input fields for user data collection.
      </p>

      <section className="docs-section">
        <h2>Basic Input</h2>
        <div className="component-demo" style={{ flexDirection: 'column', maxWidth: '400px' }}>
          <div className="ethio-form-group">
            <label className="ethio-form-label">Full Name</label>
            <input type="text" className="ethio-form-input" placeholder="Enter your name" />
          </div>

          <div className="ethio-form-group">
            <label className="ethio-form-label">Email Address</label>
            <input type="email" className="ethio-form-input" placeholder="you@example.com" />
          </div>

          <div className="ethio-form-group">
            <label className="ethio-form-label">Password</label>
            <input type="password" className="ethio-form-input" placeholder="Enter password" />
          </div>
        </div>

        <pre className="code-block">
  {`<div className="ethio-form-group">
    <label className="ethio-form-label">Full Name</label>
    <input type="text" className="ethio-form-input" placeholder="Enter your name" />
  </div>`}
        </pre>
      </section>

      <section className="docs-section">
        <h2>Input States</h2>
        <div className="component-demo" style={{ flexDirection: 'column', maxWidth: '400px', gap: '1rem' }}>
          <div className="ethio-form-group">
            <label className="ethio-form-label">Normal Input</label>
            <input type="text" className="ethio-form-input" placeholder="Default state" />
          </div>

          <div className="ethio-form-group">
            <label className="ethio-form-label">Disabled Input</label>
            <input type="text" className="ethio-form-input" placeholder="Disabled" disabled />
          </div>

          <div className="ethio-form-group">
            <label className="ethio-form-label">Readonly Input</label>
            <input type="text" className="ethio-form-input" value="Read-only value" readOnly />
          </div>

          <div className="ethio-form-group">
            <label className="ethio-form-label">Required Input</label>
            <input type="text" className="ethio-form-input" placeholder="Required field" required />
            <small style={{ color: 'var(--ethio-red)' }}>This field is required</small>
          </div>
        </div>

        <pre className="code-block">
  {`<input type="text" className="ethio-form-input" disabled />
  <input type="text" className="ethio-form-input" readOnly />
  <input type="text" className="ethio-form-input" required />`}
        </pre>
      </section>

      <section className="docs-section">
        <h2>Input Sizes</h2>
        <div className="component-demo" style={{ flexDirection: 'column', maxWidth: '400px', gap: '1rem' }}>
          <input type="text" className="ethio-form-input" style={{ padding: '0.5rem' }} placeholder="Small input" />
          <input type="text" className="ethio-form-input" placeholder="Default input" />
          <input type="text" className="ethio-form-input" style={{ padding: '1rem', fontSize: '1.125rem' }} placeholder="Large input-new" />
        </div>

        <pre className="code-block">
  {`<input type="text" className="ethio-form-input" style={{ padding: '0.5rem' }} />
  <input type="text" className="ethio-form-input" />
  <input type="text" className="ethio-form-input" style={{ padding: '1rem' }} />`}
        </pre>
      </section>

      <section className="docs-section">
        <h2>With Icons</h2>
        <div className="component-demo" style={{ flexDirection: 'column', maxWidth: '400px', gap: '1rem' }}>
          <div style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>🔍</span>
            <input type="text" className="ethio-form-input" style={{ paddingLeft: '3rem' }} placeholder="Search..." />
          </div>
          
          <div style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}>👁️</span>
            <input type="password" className="ethio-form-input" style={{ paddingRight: '3rem' }} placeholder="Password" />
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>API Reference</h2>
        <table className="props-table">
          <thead>
            <tr>
              <th>Class Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>ethio-form-input</code></td>
              <td>Base input field style</td>
            </tr>
            <tr>
              <td><code>ethio-form-label</code></td>
              <td>Label for input fields</td>
            </tr>
            <tr>
              <td><code>ethio-form-group</code></td>
              <td>Container for form input and label</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="docs-section">
        <h2>Accessibility</h2>
        <ul>
          <li>Always use labels with inputs for screen readers</li>
          <li>Use appropriate input types (email, password, etc.)</li>
          <li>Provide clear placeholder text</li>
          <li>Indicate required fields with visual and textual cues</li>
          <li>Ensure sufficient color contrast for input text</li>
        </ul>
      </section>
    </div>
  )
}

