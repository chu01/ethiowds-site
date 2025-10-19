export default function GettingStartedPage() {
    return (
      <div className="docs-page">
        <h1>Getting Started</h1>
        <p className="lead">
          Learn how to install and set up EthioWDS in your project in just a few minutes.
        </p>
  
        <section className="docs-section">
          <h2>Quick Installation</h2>
          
          <div className="installation-method">
            <h3>npm</h3>
            <pre className="code-block">npm install @abiyub/ethiowds</pre>
          </div>
  
          <div className="installation-method">
            <h3>yarn</h3>
            <pre className="code-block">yarn add @abiyub/ethiowds</pre>
          </div>
  
          <div className="installation-method">
            <h3>CDN (Quick Start)</h3>
            <pre className="code-block">
  {`<!-- CSS -->
  <link rel="stylesheet" href="https://unpkg.com/@abiyub/ethiowds/dist/css/ethio-wds.css">
  
  <!-- JavaScript -->
  <script src="https://unpkg.com/@abiyub/ethiowds/dist/js/ethio-wds.js"></script>`}
            </pre>
          </div>
        </section>
  
        <section className="docs-section">
          <h2>Basic Usage</h2>
          
          <h3>CSS Only</h3>
          <p>Include the CSS and start using components with class names:</p>
          <pre className="code-block">
  {`<button class="ethio-btn ethio-btn-primary">Click me</button>
  <div class="ethio-card">
    <div class="ethio-card-body">
      <p>This is a card</p>
    </div>
  </div>`}
          </pre>
  
          <h3>With JavaScript</h3>
          <p>For interactive components, include the JavaScript:</p>
          <pre className="code-block">
  {`<script>
  // Initialize EthioWDS
  const ethio = new ethioWDS({
    theme: 'default',
    language: 'am'
  });
  </script>`}
          </pre>
  
          <h3>SCSS Customization</h3>
          <p>For full customization, import the SCSS source:</p>
          <pre className="code-block">
  {`// Your SCSS file
  @use '@abiyub/ethiowds' as *;
  
  // Customize variables
  $primary: #2E86AB;
  $ethio-green: #1B5E20;
  
  // Your custom styles
  .my-component {
    background: $primary;
    color: white;
  }`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Framework Integration</h2>
          
          <h3>React/Next.js</h3>
          <pre className="code-block">
  {`// Import CSS in your layout
  import '@abiyub/ethiowds/dist/css/ethio-wds.css';
  
  // Use in your components
  export default function MyComponent() {
    return (
      <button className="ethio-btn ethio-btn-primary">
        EthioWDS Button
      </button>
    );
  }`}
          </pre>
  
          <h3>Vue.js</h3>
          <pre className="code-block">
  {`<template>
    <button class="ethio-btn ethio-btn-primary">
      EthioWDS Button
    </button>
  </template>
  
  <style>
  @import '@abiyub/ethiowds/dist/css/ethio-wds.css';
  </style>`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Next Steps</h2>
          <div className="next-steps-grid">
            <div className="step-card">
              <h4>🎨 Explore Components</h4>
              <p>Browse all available components with examples and usage guidelines.</p>
              <a href="/docs/components/buttons" className="button button-outline">View Components</a>
            </div>
            <div className="step-card">
              <h4>🎯 Learn Guidelines</h4>
              <p>Understand design principles and best practices for using EthioWDS.</p>
              <a href="/docs/guidance" className="button button-outline">Read Guidelines</a>
            </div>
            <div className="step-card">
              <h4>⚙️ Customize Theme</h4>
              <p>Learn how to customize colors, typography, and other design tokens.</p>
              <a href="/docs/design-tokens" className="button button-outline">Customize</a>
            </div>
          </div>
        </section>
      </div>
    )
  }