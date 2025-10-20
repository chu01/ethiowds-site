export default function FormsPage() {
    return (
      <div className="docs-page">
        <h1>Forms</h1>
        <p className="lead">
          Accessible and customizable form components for user input.
        </p>
  
        <section className="docs-section">
          <h2>Text Inputs</h2>
          <div className="component-demo" style={{ maxWidth: '400px', flexDirection: 'column', alignItems: 'stretch', gap: '1rem' }}>
            <div className="ethio-form-group">
              <label className="ethio-form-label">Full Name</label>
              <input type="text" className="ethio-form-input" placeholder="Enter your full name" />
            </div>
  
            <div className="ethio-form-group">
              <label className="ethio-form-label">Email Address</label>
              <input type="email" className="ethio-form-input" placeholder="you@example.com" />
            </div>
  
            <div className="ethio-form-group">
              <label className="ethio-form-label">Password</label>
              <input type="password" className="ethio-form-input" placeholder="Enter your password" />
            </div>
          </div>
  
          <pre className="code-block">
  {`<div class="ethio-form-group">
    <label class="ethio-form-label">Full Name</label>
    <input type="text" class="ethio-form-input" placeholder="Enter your name">
  </div>`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Textarea</h2>
          <div className="component-demo" style={{ maxWidth: '400px' }}>
            <div className="ethio-form-group">
              <label className="ethio-form-label">Message</label>
              <textarea className="ethio-form-textarea" placeholder="Enter your message" rows="4"></textarea>
            </div>
          </div>
  
          <pre className="code-block">
  {`<div class="ethio-form-group">
    <label class="ethio-form-label">Message</label>
    <textarea class="ethio-form-textarea" rows="4"></textarea>
  </div>`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Checkboxes & Radios</h2>
          <div className="component-demo" style={{ maxWidth: '400px', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
            <div className="ethio-form-check">
              <input type="checkbox" className="ethio-checkbox" id="subscribe" defaultChecked />
              <label htmlFor="subscribe">Subscribe to newsletter</label>
            </div>
  
            <div className="ethio-form-check">
              <input type="checkbox" className="ethio-checkbox" id="terms" />
              <label htmlFor="terms">I agree to the terms and conditions</label>
            </div>
  
            <div className="ethio-form-check">
              <input type="radio" className="ethio-radio" id="option1" name="options" defaultChecked />
              <label htmlFor="option1">Option One</label>
            </div>
  
            <div className="ethio-form-check">
              <input type="radio" className="ethio-radio" id="option2" name="options" />
              <label htmlFor="option2">Option Two</label>
            </div>
          </div>
  
          <pre className="code-block">
  {`<!-- Checkbox -->
  <div class="ethio-form-check">
    <input type="checkbox" class="ethio-checkbox" id="subscribe">
    <label for="subscribe">Subscribe</label>
  </div>
  
  <!-- Radio -->
  <div class="ethio-form-check">
    <input type="radio" class="ethio-radio" id="option1" name="options">
    <label for="option1">Option One</label>
  </div>`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Select Dropdown</h2>
          <div className="component-demo" style={{ maxWidth: '400px' }}>
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
  {`<div class="ethio-form-group">
    <label class="ethio-form-label">Country</label>
    <select class="ethio-form-select">
      <option>Select a country</option>
      <option>Ethiopia</option>
    </select>
  </div>`}
          </pre>
        </section>
      </div>
    )
  }