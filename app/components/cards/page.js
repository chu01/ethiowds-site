export default function CardsPage() {
    return (
      <div className="docs-page">
        <h1>Cards</h1>
        <p className="lead">
          Flexible card components for displaying content and actions.
        </p>
  
        <section className="docs-section">
          <h2>Basic Card</h2>
          <div className="component-demo">
            <div className="ethio-card" style={{ maxWidth: '300px' }}>
              <div className="ethio-card-header">
                <h4>Card Title</h4>
              </div>
              <div className="ethio-card-body">
                <p>This is a basic card with some sample text content.</p>
              </div>
            </div>
          </div>
  
          <pre className="code-block">
  {`<div class="ethio-card">
    <div class="ethio-card-header">
      <h4>Card Title</h4>
    </div>
    <div class="ethio-card-body">
      <p>Card content goes here.</p>
    </div>
  </div>`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Card Variants</h2>
          <div className="component-demo" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            <div className="ethio-card ethio-card-primary">
              <div className="ethio-card-header">
                <h4>Primary Card</h4>
              </div>
              <div className="ethio-card-body">
                <p>Card with primary accent border.</p>
              </div>
            </div>
  
            <div className="ethio-card ethio-card-secondary">
              <div className="ethio-card-header">
                <h4>Secondary Card</h4>
              </div>
              <div className="ethio-card-body">
                <p>Card with secondary accent border.</p>
              </div>
            </div>
  
            <div className="ethio-card ethio-card-elevated">
              <div className="ethio-card-header">
                <h4>Elevated Card</h4>
              </div>
              <div className="ethio-card-body">
                <p>Card with enhanced shadow effect.</p>
              </div>
            </div>
          </div>
  
          <pre className="code-block">
  {`<div class="ethio-card ethio-card-primary">
    <!-- Primary variant -->
  </div>
  
  <div class="ethio-card ethio-card-secondary">
    <!-- Secondary variant -->
  </div>
  
  <div class="ethio-card ethio-card-elevated">
    <!-- Elevated variant -->
  </div>`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Card with Footer</h2>
          <div className="component-demo">
            <div className="ethio-card" style={{ maxWidth: '300px' }}>
              <div className="ethio-card-header">
                <h4>Product Card</h4>
              </div>
              <div className="ethio-card-body">
                <p>Amazing product description goes here with all the features.</p>
              </div>
              <div className="ethio-card-footer">
                <button className="ethio-btn ethio-btn-primary">Buy Now</button>
                <button className="ethio-btn ethio-btn-ghost">Learn More</button>
              </div>
            </div>
          </div>
  
          <pre className="code-block">
  {`<div class="ethio-card">
    <div class="ethio-card-header">
      <h4>Product Card</h4>
    </div>
    <div class="ethio-card-body">
      <p>Product description.</p>
    </div>
    <div class="ethio-card-footer">
      <button class="ethio-btn ethio-btn-primary">Buy Now</button>
    </div>
  </div>`}
          </pre>
        </section>
      </div>
    )
  }