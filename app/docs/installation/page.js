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
          <h2>Usage</h2>
          
          <h3>SCSS Import</h3>
          <p>For full customization, import EthioWDS in your SCSS:</p>
          <pre className="code-block">
  {`// Import EthioWDS
  @use '@abiyub/ethiowds' as *;
  
  // Optional: Customize variables
  $primary: #2E86AB;
  $ethio-green: #1B5E20;
  
  // Your custom styles
  .my-component {
    background: $primary;
    color: white;
  }`}
          </pre>
  
          <h3>CSS Only</h3>
          <p>If you're using the compiled CSS:</p>
          <pre className="code-block">
  {`/* Import compiled CSS */
  @import '@abiyub/ethiowds/dist/css/ethio-wds.css';
  
  /* Or in your HTML */
  <link rel="stylesheet" href="node_modules/@abiyub/ethiowds/dist/css/ethio-wds.css">`}
          </pre>
  
          <h3>JavaScript Initialization</h3>
          <pre className="code-block">
  {`// Initialize EthioWDS
  import EthioWDS from '@abiyub/ethiowds';
  
  const ethio = new EthioWDS({
    theme: 'default',
    language: 'am',
    loadCSS: true
  });`}
          </pre>
        </section>
      </div>
    )
  }