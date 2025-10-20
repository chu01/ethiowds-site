import Link from 'next/link'
import { CodeBlock } from '../../../components/CodeBlock/CodeBlock'

export default function HowToUse() {
  return (
    <div className="docs-container">
      <div className="docs-content">
        <h1>How to Use EthioWDS</h1>
        <p className="lead">
          Learn the fundamental concepts and patterns for working with EthioWDS components.
        </p>

        <h2>Basic Component Usage</h2>
        <p>
          All EthioWDS components follow a consistent API pattern. Here's a basic example:
        </p>

        <CodeBlock language="javascript">
          {`import { Button, Card, Input } from 'ethiowds';

function UserProfile() {
  return (
    <Card>
      <h3>User Profile</h3>
      <Input 
        label="Name" 
        placeholder="Enter your name"
        required 
      />
      <Input 
        label="Email" 
        type="email"
        placeholder="email@example.com"
      />
      <Button variant="primary">
        Save Profile
      </Button>
    </Card>
  );
}`}
        </CodeBlock>

        <h2>Component Variants</h2>
        <p>
          Many components support variants for different visual styles:
        </p>

        <CodeBlock language="javascript">
          {`// Button variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Alert variants
<Alert variant="success">Success message</Alert>
<Alert variant="warning">Warning message</Alert>
<Alert variant="error">Error message</Alert>
<Alert variant="info">Info message</Alert>`}
        </CodeBlock>

        <h2>Ethiopian Localization</h2>
        <p>
          EthioWDS includes built-in support for Ethiopian languages and cultural patterns:
        </p>

        <CodeBlock language="javascript">
          {`import { DatePicker, Input } from 'ethiowds';

function EthiopianForm() {
  return (
    <div>
      <Input 
        label="ስም" // Name in Amharic
        placeholder="ስምዎን ያስገቡ"
        dir="auto" // Automatic text direction
      />
      <DatePicker 
        label="ቀን" // Date in Amharic
        calendar="ethiopian" // Ethiopian calendar support
      />
    </div>
  );
}`}
        </CodeBlock>

        <h2>Accessibility Features</h2>
        <p>
          All components are built with accessibility in mind:
        </p>

        <ul>
          <li>Proper ARIA attributes</li>
          <li>Keyboard navigation support</li>
          <li>Screen reader compatibility</li>
          <li>Focus management</li>
          <li>Color contrast compliance</li>
        </ul>

        <CodeBlock language="javascript">
          {`// Accessible modal example
<Modal 
  isOpen={isOpen}
  onClose={handleClose}
  title="User Settings"
  aria-labelledby="modal-title"
>
  <h2 id="modal-title">User Settings</h2>
  {/* Modal content */}
</Modal>`}
        </CodeBlock>

        <h2>Customization</h2>
        <p>
          Customize components using CSS variables or props:
        </p>

        <CodeBlock language="javascript">
          {`// Using CSS variables
<div style={{ 
  '--ethio-primary': '#1a365d',
  '--ethio-font-family': 'Noto Sans Ethiopic'
}}>
  <Button variant="primary">Custom Styled</Button>
</div>

// Using component props
<Button 
  variant="primary"
  size="lg"
  rounded="full"
  disabled={isLoading}
>
  {isLoading ? 'Loading...' : 'Submit'}
</Button>`}
        </CodeBlock>

        <div className="docs-next">
          <h3>Ready for More?</h3>
          <p>
            Explore the <Link href="/components">complete component library</Link> or 
            learn about <Link href="/docs/ethiopian-localization">Ethiopian localization features</Link> 
            in depth.
          </p>
        </div>
      </div>
    </div>
  )
}