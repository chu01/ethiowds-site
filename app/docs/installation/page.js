import Link from 'next/link'
import { CodeBlock } from '../../../components/CodeBlock/CodeBlock'

export default function InstallationGuide() {
  return (
    <div className="docs-container">
      <div className="docs-content">
        <h1>Installation Guide</h1>
        <p className="lead">
          Get EthioWDS up and running in your React project with these simple steps.
        </p>

        <div className="installation-steps">
          <div className="installation-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Install Package</h3>
              <p>Install EthioWDS using npm or yarn:</p>
              <CodeBlock language="bash">
                npm install ethiowds
              </CodeBlock>
              <CodeBlock language="bash">
                yarn add ethiowds
              </CodeBlock>
            </div>
          </div>

          <div className="installation-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Import CSS</h3>
              <p>Import the main CSS file in your application:</p>
              <CodeBlock language="javascript">
                {`// In your main App.js or index.js
import 'ethiowds/dist/styles.css';`}
              </CodeBlock>
            </div>
          </div>

          <div className="installation-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Start Using Components</h3>
              <p>Import and use components in your React components:</p>
              <CodeBlock language="javascript">
                {`import { Button, Input } from 'ethiowds';

function MyComponent() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Input placeholder="Enter text..." />
    </div>
  );
}`}
              </CodeBlock>
            </div>
          </div>
        </div>

        <h2>Next.js Setup</h2>
        <p>For Next.js projects, you might need to configure CSS imports:</p>
        
        <CodeBlock language="javascript">
          {`// next.config.js
const nextConfig = {
  // ... your existing config
  transpilePackages: ['ethiowds'],
}

module.exports = nextConfig`}
        </CodeBlock>

        <h2>Manual Setup</h2>
        <p>If you prefer to include the CSS manually, add this to your HTML:</p>
        
        <CodeBlock language="html">
          {`<link rel="stylesheet" href="path/to/ethiowds/styles.css" />`}
        </CodeBlock>

        <div className="docs-next">
          <h3>What's Next?</h3>
          <p>
            Now that you have EthioWDS installed, check out the{' '}
            <Link href="/docs/how-to-use-ethiowds">usage guide</Link> to learn how to 
            make the most of the components and features.
          </p>
        </div>
      </div>
    </div>
  )
}