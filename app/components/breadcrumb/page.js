export default function BreadcrumbPage() {
  return (
    <div className="docs-page">
      <h1>Breadcrumb</h1>
      <p className="lead">
        Navigation component showing the current page&apos;s location within a hierarchical structure.
      </p>
  
        <section className="docs-section">
          <h2>Basic Breadcrumb</h2>
          <div className="component-demo">
            <nav className="ethio-breadcrumb">
              <li className="ethio-breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="ethio-breadcrumb-item">
                <a href="#">Documentation</a>
              </li>
              <li className="ethio-breadcrumb-item active">
                <a href="#">Breadcrumb</a>
              </li>
            </nav>
          </div>
  
          <pre className="code-block">
  {`<nav class="ethio-breadcrumb">
    <li class="ethio-breadcrumb-item">
      <a href="#">Home</a>
    </li>
    <li class="ethio-breadcrumb-item">
      <a href="#">Documentation</a>
    </li>
    <li class="ethio-breadcrumb-item active">
      <a href="#">Breadcrumb</a>
    </li>
  </nav>`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Breadcrumb Variants</h2>
          <div className="component-demo" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <nav className="ethio-breadcrumb ethio-breadcrumb-primary">
              <li className="ethio-breadcrumb-item">
                <a href="#">Primary</a>
              </li>
              <li className="ethio-breadcrumb-item active">
                <a href="#">Variant</a>
              </li>
            </nav>
            
            <nav className="ethio-breadcrumb ethio-breadcrumb-secondary">
              <li className="ethio-breadcrumb-item">
                <a href="#">Secondary</a>
              </li>
              <li className="ethio-breadcrumb-item active">
                <a href="#">Variant</a>
              </li>
            </nav>
          </div>
  
          <pre className="code-block">
  {`<nav class="ethio-breadcrumb ethio-breadcrumb-primary">
    <!-- Primary colored links -->
  </nav>
  
  <nav class="ethio-breadcrumb ethio-breadcrumb-secondary">
    <!-- Secondary colored links -->
  </nav>`}
          </pre>
        </section>
      </div>
    )
  }