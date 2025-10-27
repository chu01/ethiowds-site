'use client'

export default function TextareaPage() {
  return (
    <div className="docs-page">
      <h1>Textarea</h1>
      <p className="lead">
        Multi-line text input fields for longer content like comments or messages.
      </p>

      <section className="docs-section">
        <h2>Basic Textarea</h2>
        <div className="component-demo" style={{ flexDirection: 'column', maxWidth: '600px' }}>
          <div className="ethio-form-group">
            <label className="ethio-form-label">Message</label>
            <textarea className="ethio-form-textarea" placeholder="Enter your message" rows="4"></textarea>
          </div>
        </div>

        <pre className="code-block">
{`<div className="ethio-form-group">
  <label className="ethio-form-label">Message</label>
  <textarea className="ethio-form-textarea" rows="4"></textarea>
</div>`}
        </pre>
      </section>

      <section className="docs-section">
        <h2>Textarea Variations</h2>
        <div className="component-demo" style={{ flexDirection: 'column', gap: '1rem', maxWidth: '600px' }}>
          <div className="ethio-form-group">
            <label className="ethio-form-label">Default (4 rows)</label>
            <textarea className="ethio-form-textarea" rows="4" placeholder="Default textarea"></textarea>
          </div>

          <div className="ethio-form-group">
            <label className="ethio-form-label">Small (2 rows)</label>
            <textarea className="ethio-form-textarea" rows="2" placeholder="Small textarea"></textarea>
          </div>

          <div className="ethio-form-group">
            <label className="ethio-form-label">Large (6 rows)</label>
            <textarea className="ethio-form-textarea" rows="6" placeholder="Large textarea"></textarea>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Character Count</h2>
        <div className="component-demo" style={{ flexDirection: 'column', maxWidth: '600px' }}>
          <div className="ethio-form-group">
            <label className="ethio-form-label">Description</label>
            <textarea className="ethio-form-textarea" rows="4" placeholder="Max 500 characters" maxLength={500}></textarea>
            <small style={{ color: 'var(--ethio-gray-500)' }}>0 / 500 characters</small>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Disabled & Readonly</h2>
        <div className="component-demo" style={{ flexDirection: 'column', gap: '1rem', maxWidth: '600px' }}>
          <div className="ethio-form-group">
            <label className="ethio-form-label">Disabled Textarea</label>
            <textarea className="ethio-form-textarea" rows="3" disabled placeholder="Cannot edit this"></textarea>
          </div>

          <div className="ethio-form-group">
            <label className="ethio-form-label">Readonly Textarea</label>
            <textarea className="ethio-form-textarea" rows="3" readOnly value="This is a read-only textarea content."></textarea>
          </div>
        </div>
      </section>
    </div>
  )
}

