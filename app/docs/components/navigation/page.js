export default function NavigationPage() {
    return (
      <div className="docs-page">
        <h1>Navigation</h1>
        <p className="lead">
          Flexible navigation components for menus and site structure.
        </p>
  
        <section className="docs-section">
          <h2>Horizontal Navigation</h2>
          <div className="component-demo">
            <nav className="ethio-nav">
              <a href="#" className="ethio-nav-item active">Home</a>
              <a href="#" className="ethio-nav-item">Components</a>
              <a href="#" className="ethio-nav-item">Documentation</a>
              <a href="#" className="ethio-nav-item">About</a>
            </nav>
          </div>
  
          <pre className="code-block">
  {`<nav class="ethio-nav">
    <a href="#" class="ethio-nav-item active">Home</a>
    <a href="#" class="ethio-nav-item">Components</a>
    <a href="#" class="ethio-nav-item">Documentation</a>
  </nav>`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Vertical Navigation</h2>
          <div className="component-demo" style={{ maxWidth: '200px' }}>
            <nav className="ethio-nav ethio-nav-vertical">
              <a href="#" className="ethio-nav-item active">Dashboard</a>
              <a href="#" className="ethio-nav-item">Profile</a>
              <a href="#" className="ethio-nav-item">Settings</a>
              <a href="#" className="ethio-nav-item">Messages</a>
              <a href="#" className="ethio-nav-item">Help</a>
            </nav>
          </div>
  
          <pre className="code-block">
  {`<nav class="ethio-nav ethio-nav-vertical">
    <a href="#" class="ethio-nav-item active">Dashboard</a>
    <a href="#" class="ethio-nav-item">Profile</a>
    <a href="#" class="ethio-nav-item">Settings</a>
  </nav>`}
          </pre>
        </section>
      </div>
    )
  }