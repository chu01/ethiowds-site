export default function InstallationPage() {
    return (
      <div className="docs-page">
        <h1>Installation</h1>
        <p className="lead">
          Get started with EthioWDS in your project using npm, yarn, or CDN.
        </p>
  
        <section className="docs-section">
          <h2>Package Managers</h2>
          
          <div className="installation-method">
            <h3>npm</h3>
            <pre className="code-block">npm install @abiyub/ethiowds</pre>
          </div>
  
          <div className="installation-method">
            <h3>yarn</h3>
            <pre className="code-block">yarn add @abiyub/ethiowds</pre>
          </div>
  
          <div className="installation-method">
            <h3>pnpm</h3>
            <pre className="code-block">pnpm add @abiyub/ethiowds</pre>
          </div>
        </section>
  
        <section className="docs-section">
          <h2>CDN</h2>
          <p>For quick prototyping, include EthioWDS via CDN:</p>
          
          <pre className="code-block">
  {`<!-- CSS -->
  <link rel="stylesheet" href="https://unpkg.com/@abiyub/ethiowds/dist/css/ethio-wds.css">
  
  <!-- JavaScript (optional) -->
  <script src="https://unpkg.com/@abiyub/ethiowds/dist/js/ethio-wds.js"></script>`}
          </pre>
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