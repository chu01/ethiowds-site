import Link from 'next/link'

export default function CustomComponentsPage() {
  return (
    <div className="docs-page">
      <h1>Custom components</h1>
      <p className="lead">
        Build your own components using EthioWDS class names and design tokens so they look and behave consistently with the rest of the design system.
      </p>

      <section className="docs-section">
        <h2>What are custom components?</h2>
        <p>
          Custom components are pieces of UI you build for your project—cards, panels, forms, or patterns—that are not part of the core EthioWDS set. By using the same class names, spacing, and colors as the design system, your custom components fit visually and stay maintainable.
        </p>
      </section>

      <section className="docs-section">
        <h2>How to build custom components</h2>
        <h3>1. Use design system class names</h3>
        <p>
          Reuse existing component classes where they fit. For example, use <code>eth-button</code> and <code>eth-button--primary</code> for buttons inside your component so they match the rest of the site. Browse <Link href="/components">Components</Link> for available classes.
        </p>
        <h3>2. Use design tokens for spacing and color</h3>
        <p>
          Use the same spacing scale and colors the design system uses. That usually means using the same custom properties (e.g. <code>var(--primary)</code>, <code>var(--ethio-gray-100)</code>) or utility classes for margins, padding, and backgrounds. See <Link href="/docs/css-variables">CSS variables</Link> and <Link href="/docs/spacing">Spacing</Link>.
        </p>
        <h3>3. Keep structure and naming consistent</h3>
        <p>
          Name your own classes in a clear, consistent way (e.g. a prefix for your project or section). Reuse the same patterns for focus states, hover states, and responsive behavior so custom components feel like part of the system.
        </p>
      </section>

      <section className="docs-section">
        <h2>Example: custom card</h2>
        <p>
          A simple custom card that uses design system tokens and a button:
        </p>
        <pre className="code-block">
{`<div class="my-card" style="padding: 1rem; border: 1px solid var(--ethio-gray-200); border-radius: 0.5rem; background: white;">
  <h3 style="margin: 0 0 0.5rem 0; color: var(--ethio-gray-900);">Card title</h3>
  <p style="margin: 0 0 1rem 0; color: var(--ethio-gray-700);">Card content goes here.</p>
  <button class="eth-button eth-button--primary">Action</button>
</div>`}
        </pre>
        <p>
          Here, spacing and colors use the same variables as the design system; the button uses the standard EthioWDS button classes.
        </p>
      </section>

      <section className="docs-section">
        <h2>Step-by-step: create a custom component</h2>
        <ol className="docs-ordered-list">
          <li>Make sure EthioWDS is installed and its stylesheet is loaded (see <Link href="/docs/installation">Installation</Link>).</li>
          <li>Choose the right building blocks: use existing components (e.g. buttons, inputs) and design tokens (colors, spacing) from <Link href="/docs/css-variables">CSS variables</Link> and <Link href="/docs/design-tokens">Design tokens</Link>.</li>
          <li>Build your markup and apply design system classes where they fit; use variables like <code>var(--primary)</code> or <code>var(--ethio-gray-200)</code> for any custom styling.</li>
          <li>Test focus, hover, and keyboard behavior so the component is accessible and consistent with the rest of the site.</li>
        </ol>
      </section>

      <section className="docs-section">
        <h2>See also</h2>
        <p>
          <Link href="/components">Components</Link> — All EthioWDS components and class names. <Link href="/docs/theming">Theming</Link> — Theming overview. <Link href="/docs/guidance">Guidance</Link> — Design principles and best practices.
        </p>
      </section>
    </div>
  )
}
