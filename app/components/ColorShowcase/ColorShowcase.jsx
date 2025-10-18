export default function ComponentsShowcase() {
    return (
      <section id="components" className="components-showcase">
        <div className="container">
          <h2 className="section-title">Components</h2>
          <p className="section-description">
            Ready-to-use components built with Ethiopian design principles. Just add the class names!
          </p>
  
          <div className="components-grid">
            {/* Buttons Section */}
            <div className="component-section">
              <h3>Buttons</h3>
              <p className="component-description">Multiple button styles and sizes</p>
              <div className="component-demo">
                <button className="ethio-btn ethio-btn-primary">Primary</button>
                <button className="ethio-btn ethio-btn-secondary">Secondary</button>
                <button className="ethio-btn ethio-btn-outline">Outline</button>
                <button className="ethio-btn ethio-btn-ghost">Ghost</button>
              </div>
              <div className="component-demo" style={{ marginTop: '1rem' }}>
                <button className="ethio-btn ethio-btn-primary ethio-btn-sm">Small</button>
                <button className="ethio-btn ethio-btn-primary">Default</button>
                <button className="ethio-btn ethio-btn-primary ethio-btn-lg">Large</button>
              </div>
            </div>
  
            {/* Cards Section */}
            <div className="component-section">
              <h3>Cards</h3>
              <p className="component-description">Flexible card components for content</p>
              <div className="component-demo" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                <div className="ethio-card">
                  <div className="ethio-card-header">
                    <h4>Basic Card</h4>
                  </div>
                  <div className="ethio-card-body">
                    <p>Simple card with default styling. Perfect for general content.</p>
                  </div>
                </div>
                
                <div className="ethio-card ethio-card-primary">
                  <div className="ethio-card-header">
                    <h4>Primary Card</h4>
                  </div>
                  <div className="ethio-card-body">
                    <p>Card with primary accent border for important content.</p>
                  </div>
                  <div className="ethio-card-footer">
                    <button className="ethio-btn ethio-btn-primary">Learn More</button>
                  </div>
                </div>
  
                <div className="ethio-card ethio-card-elevated">
                  <div className="ethio-card-header">
                    <h4>Elevated Card</h4>
                  </div>
                  <div className="ethio-card-body">
                    <p>Card with enhanced shadow for emphasis.</p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Alerts Section */}
            <div className="component-section">
              <h3>Alerts</h3>
              <p className="component-description">Notification and feedback messages</p>
              <div className="component-demo" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="ethio-alert ethio-alert-success">
                  <strong>Success!</strong> Your action was completed successfully.
                </div>
                <div className="ethio-alert ethio-alert-warning">
                  <strong>Warning!</strong> Please check your input and try again.
                </div>
                <div className="ethio-alert ethio-alert-error">
                  <strong>Error!</strong> Something went wrong. Please try again.
                </div>
                <div className="ethio-alert ethio-alert-info">
                  <strong>Info:</strong> This is an informational message.
                </div>
              </div>
            </div>
  
            {/* Forms Section */}
            <div className="component-section">
              <h3>Form Elements</h3>
              <p className="component-description">Accessible form components</p>
              <div className="component-demo" style={{ maxWidth: '400px' }}>
                <div className="ethio-form-group">
                  <label className="ethio-form-label">Full Name</label>
                  <input type="text" className="ethio-form-input" placeholder="Enter your name" />
                </div>
                
                <div className="ethio-form-group">
                  <label className="ethio-form-label">Email Address</label>
                  <input type="email" className="ethio-form-input" placeholder="Enter your email" />
                </div>
                
                <div className="ethio-form-group">
                  <label className="ethio-form-label">Message</label>
                  <textarea className="ethio-form-textarea" placeholder="Enter your message" rows="4"></textarea>
                </div>
                
                <div className="ethio-form-check">
                  <input type="checkbox" className="ethio-checkbox" id="newsletter" />
                  <label htmlFor="newsletter">Subscribe to newsletter</label>
                </div>
                
                <div className="ethio-form-check">
                  <input type="radio" className="ethio-radio" id="option1" name="options" defaultChecked />
                  <label htmlFor="option1">Option One</label>
                </div>
                
                <div className="ethio-form-check">
                  <input type="radio" className="ethio-radio" id="option2" name="options" />
                  <label htmlFor="option2">Option Two</label>
                </div>
  
                <button className="ethio-btn ethio-btn-primary" style={{ marginTop: '1rem' }}>
                  Submit Form
                </button>
              </div>
            </div>
  
            {/* Navigation Section */}
            <div className="component-section">
              <h3>Navigation</h3>
              <p className="component-description">Clean navigation components</p>
              <div className="component-demo">
                <nav className="ethio-nav">
                  <a href="#" className="ethio-nav-item active">Home</a>
                  <a href="#" className="ethio-nav-item">Components</a>
                  <a href="#" className="ethio-nav-item">Documentation</a>
                  <a href="#" className="ethio-nav-item">About</a>
                </nav>
              </div>
              
              <p className="component-description" style={{ marginTop: '2rem' }}>Vertical Navigation</p>
              <div className="component-demo" style={{ maxWidth: '200px' }}>
                <nav className="ethio-nav ethio-nav-vertical">
                  <a href="#" className="ethio-nav-item active">Dashboard</a>
                  <a href="#" className="ethio-nav-item">Profile</a>
                  <a href="#" className="ethio-nav-item">Settings</a>
                  <a href="#" className="ethio-nav-item">Help</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }