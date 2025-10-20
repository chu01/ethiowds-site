export default function AccordionPage() {
    return (
      <div className="docs-page">
      <h1>Accordion</h1>
      <p className="lead">
        Collapsible content sections for organizing information in limited space.
      </p>

      <section className="docs-section">
        <h2>Basic Accordion</h2>
        <div className="component-demo">
          <div className="ethio-accordion">
            <div className="ethio-accordion-item">
              <button className="ethio-accordion-header">
                What is EthioWDS?
                <span className="ethio-accordion-icon">▼</span>
              </button>
              <div className="ethio-accordion-content">
                <p>EthioWDS is a comprehensive design system for Ethiopian government websites, providing consistent, accessible components with Ethiopian identity.</p>
              </div>
            </div>
            <div className="ethio-accordion-item">
              <button className="ethio-accordion-header">
                How do I install it?
                <span className="ethio-accordion-icon">▼</span>
              </button>
              <div className="ethio-accordion-content">
                <p>You can install EthioWDS via npm: <code>npm install @abiyub/ethiowds</code> or use the CDN for quick prototyping.</p>
              </div>
            </div>
            <div className="ethio-accordion-item">
              <button className="ethio-accordion-header">
                Is it accessible?
                <span className="ethio-accordion-icon">▼</span>
              </button>
              <div className="ethio-accordion-content">
                <p>Yes! All EthioWDS components are built with accessibility in mind, following WCAG guidelines.</p>
              </div>
            </div>
          </div>
        </div>
  
          <pre className="code-block">
  {`<div class="ethio-accordion">
    <div class="ethio-accordion-item">
      <button class="ethio-accordion-header">
        Section Title
        <span class="ethio-accordion-icon">▼</span>
      </button>
      <div class="ethio-accordion-content">
        <p>Section content goes here.</p>
      </div>
    </div>
  </div>`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Bordered Accordion</h2>
          <div className="component-demo">
            <div className="ethio-accordion ethio-accordion-bordered">
              <div className="ethio-accordion-item">
                <button className="ethio-accordion-header">
                  Bordered Item 1
                  <span className="ethio-accordion-icon">▼</span>
                </button>
                <div className="ethio-accordion-content">
                  <p>This accordion has individual borders around each item.</p>
                </div>
              </div>
              <div className="ethio-accordion-item">
                <button className="ethio-accordion-header">
                  Bordered Item 2
                  <span className="ethio-accordion-icon">▼</span>
                </button>
                <div className="ethio-accordion-content">
                  <p>Perfect for when you need visual separation between items.</p>
                </div>
              </div>
            </div>
          </div>
  
          <pre className="code-block">
  {`<div class="ethio-accordion ethio-accordion-bordered">
    <!-- Items with individual borders -->
  </div>`}
          </pre>
        </section>
      </div>
    )
  }