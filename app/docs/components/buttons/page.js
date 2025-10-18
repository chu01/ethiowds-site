export default function ButtonsPage() {
    return (
      <div className="docs-page">
        <h1>Buttons</h1>
        <p className="lead">
          Use buttons to perform actions, submit forms, or navigate to other pages.
        </p>
  
        <section className="docs-section">
          <h2>Variants</h2>
          <p>EthioWDS provides multiple button styles for different use cases.</p>
          
          <div className="component-demo">
            <button className="ethio-btn ethio-btn-primary">Primary Button</button>
            <button className="ethio-btn ethio-btn-secondary">Secondary Button</button>
            <button className="ethio-btn ethio-btn-outline">Outline Button</button>
            <button className="ethio-btn ethio-btn-ghost">Ghost Button</button>
          </div>
  
          <pre className="code-block">
  {`<button class="ethio-btn ethio-btn-primary">Primary</button>
  <button class="ethio-btn ethio-btn-secondary">Secondary</button>
  <button class="ethio-btn ethio-btn-outline">Outline</button>
  <button class="ethio-btn ethio-btn-ghost">Ghost</button>`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Sizes</h2>
          <p>Buttons come in three sizes: small, default, and large.</p>
          
          <div className="component-demo">
            <button className="ethio-btn ethio-btn-primary ethio-btn-sm">Small</button>
            <button className="ethio-btn ethio-btn-primary">Default</button>
            <button className="ethio-btn ethio-btn-primary ethio-btn-lg">Large</button>
          </div>
  
          <pre className="code-block">
  {`<button class="ethio-btn ethio-btn-primary ethio-btn-sm">Small</button>
  <button class="ethio-btn ethio-btn-primary">Default</button>
  <button class="ethio-btn ethio-btn-primary ethio-btn-lg">Large</button>`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Disabled State</h2>
          <p>Use the disabled attribute for non-interactive buttons.</p>
          
          <div className="component-demo">
            <button className="ethio-btn ethio-btn-primary" disabled>Disabled Button</button>
            <button className="ethio-btn ethio-btn-outline" disabled>Disabled Outline</button>
          </div>
  
          <pre className="code-block">
  {`<button class="ethio-btn ethio-btn-primary" disabled>
    Disabled Button
  </button>`}
          </pre>
        </section>
      </div>
    )
  }