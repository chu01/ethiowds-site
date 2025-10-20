'use client'

export default function ButtonPage() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="components-page">
      <h1>Button</h1>
      <p className="lead">
        Buttons allow users to take actions and make choices with a single tap.
      </p>

      <section>
        <h2>Examples</h2>
        
        <div className="component-demo">
          <h3>Button Variants</h3>
          <div className="demo-grid">
            <button className="ethio-btn ethio-btn-primary" onClick={handleClick}>
              Primary Button
            </button>
            <button className="ethio-btn ethio-btn-secondary" onClick={handleClick}>
              Secondary Button
            </button>
            <button className="ethio-btn ethio-btn-outline" onClick={handleClick}>
              Outline Button
            </button>
            <button className="ethio-btn ethio-btn-ghost" onClick={handleClick}>
              Ghost Button
            </button>
          </div>
        </div>

        <div className="component-demo">
          <h3>Button Sizes</h3>
          <div className="demo-grid">
            <button className="ethio-btn ethio-btn-primary ethio-btn-sm" onClick={handleClick}>
              Small Button
            </button>
            <button className="ethio-btn ethio-btn-primary" onClick={handleClick}>
              Default Button
            </button>
            <button className="ethio-btn ethio-btn-primary ethio-btn-lg" onClick={handleClick}>
              Large Button
            </button>
          </div>
        </div>

        <div className="component-demo">
          <h3>Disabled State</h3>
          <div className="demo-grid">
            <button className="ethio-btn ethio-btn-primary" disabled onClick={handleClick}>
              Disabled Primary
            </button>
            <button className="ethio-btn ethio-btn-outline" disabled onClick={handleClick}>
              Disabled Outline
            </button>
          </div>
        </div>
      </section>

      <section>
        <h2>Usage</h2>
        
        <div className="code-block">
          <div className="code-header">
            <span>HTML</span>
            <button className="copy-btn">Copy</button>
          </div>
          <pre><code>{`<!-- Primary Button -->
<button class="ethio-btn ethio-btn-primary">
  Primary Button
</button>

<!-- Secondary Button -->
<button class="ethio-btn ethio-btn-secondary">
  Secondary Button
</button>

<!-- Outline Button -->
<button class="ethio-btn ethio-btn-outline">
  Outline Button
</button>

<!-- Button Sizes -->
<button class="ethio-btn ethio-btn-primary ethio-btn-sm">
  Small Button
</button>
<button class="ethio-btn ethio-btn-primary">
  Default Button
</button>
<button class="ethio-btn ethio-btn-primary ethio-btn-lg">
  Large Button
</button>

<!-- Disabled Button -->
<button class="ethio-btn ethio-btn-primary" disabled>
  Disabled Button
</button>`}</code></pre>
        </div>
      </section>

      <section>
        <h2>Props</h2>
        <table className="props-table">
          <thead>
            <tr>
              <th>Class</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>ethio-btn-primary</code></td>
              <td>Variant</td>
              <td>Primary action button</td>
            </tr>
            <tr>
              <td><code>ethio-btn-secondary</code></td>
              <td>Variant</td>
              <td>Secondary action button</td>
            </tr>
            <tr>
              <td><code>ethio-btn-outline</code></td>
              <td>Variant</td>
              <td>Outline style button</td>
            </tr>
            <tr>
              <td><code>ethio-btn-ghost</code></td>
              <td>Variant</td>
              <td>Ghost style button</td>
            </tr>
            <tr>
              <td><code>ethio-btn-sm</code></td>
              <td>Size</td>
              <td>Small button size</td>
            </tr>
            <tr>
              <td><code>ethio-btn-lg</code></td>
              <td>Size</td>
              <td>Large button size</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Accessibility</h2>
        <ul>
          <li>Buttons should have clear, actionable text</li>
          <li>Use appropriate color contrast ratios</li>
          <li>Ensure buttons are keyboard accessible</li>
          <li>Provide focus states for keyboard navigation</li>
          <li>Use <code>aria-label</code> for icon-only buttons</li>
        </ul>
      </section>
    </div>
  )
}