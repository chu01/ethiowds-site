import Link from 'next/link'

export default function InstallationGuide() {
  return (
    <div className="docs-container">
      <div className="docs-content">
        <h1>Installation</h1>
        <p className="lead">
          Get started using the Design System by installing, compiling, and customizing our code.
        </p>

        <div className="installation-steps">
          <div className="installation-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Download or install the design system</h3>
              <p>Obtain the EthioWDS code using your preferred method—package manager, download, or CDN—so it is available to your project.</p>
              <h4>Install command (Linux and Windows)</h4>
              <p>From your project folder, open a terminal (on Windows: Command Prompt, PowerShell, or Windows Subsystem for Linux) and run:</p>
              <pre className="code-block">
npm install @abiyub/ethiowds
              </pre>
              <p>On Linux or macOS, use the same command in your terminal. To use Yarn instead, run:</p>
              <pre className="code-block">
yarn add @abiyub/ethiowds
              </pre>
            </div>
          </div>

          <div className="installation-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Add styles and assets to your project</h3>
              <p>Include the design system styles in your project so that components and tokens are available. Add the main stylesheet in your app’s main layout or entry file so it loads on every page.</p>
              <h4>Import the stylesheet</h4>
              <p>In your main layout or root file, add:</p>
              <pre className="code-block">
{`import '@abiyub/ethiowds/dist/css/ethio-wds.css';`}
              </pre>
              <p>If your project does not use a bundler, add a link tag in the <code>&lt;head&gt;</code> of your HTML:</p>
              <pre className="code-block">
{`<link rel="stylesheet" href="node_modules/@abiyub/ethiowds/dist/css/ethio-wds.css" />`}
              </pre>
              <p>On Linux or Windows, the path is the same; the stylesheet is inside the <code>node_modules</code> folder after you run the install command from step 1.</p>
            </div>
          </div>

          <div className="installation-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Use components and customize</h3>
              <p>Use the design system components and patterns in your pages. Override tokens or customize themes as needed for your brand or product.</p>
              <h4>Use components</h4>
              <p>Use the design system class names on your elements. For example, a primary button:</p>
              <pre className="code-block">
{`<button class="eth-button eth-button--primary">Click me</button>`}
              </pre>
              <p>Browse the <Link href="/components">Components</Link> section for all available components and class names.</p>
              <h4>Customize (optional)</h4>
              <p>To match your brand, override design tokens such as colors and typography. Add your overrides in your own stylesheet, or use the variables provided by the design system. See the <Link href="/docs/theming">Theming</Link> guide for details.</p>
            </div>
          </div>
        </div>

        <h2>Configuration</h2>
        <p>Depending on how you integrate the design system, you may need to adjust your build or project configuration so that styles compile correctly and assets resolve. Refer to your tooling documentation for including third-party design system files.</p>

        <h2>Manual inclusion</h2>
        <p>If you prefer to include the design system files manually, add the stylesheet and any scripts to your project and link to them from your templates or entry point.</p>

        <div className="docs-next">
          <h3>What&apos;s next?</h3>
          <p>
            Now that you have EthioWDS set up, check out the{' '}
            <Link href="/docs/how-to-use-ethiowds">usage guide</Link> to learn how to
            make the most of the components and features.
          </p>
        </div>
      </div>
    </div>
  )
}
