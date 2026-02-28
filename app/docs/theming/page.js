import Link from 'next/link'

export default function ThemingPage() {
  return (
    <div className="docs-page">
      <h1>Theming</h1>
      <p className="lead">
        Customize EthioWDS to match your brand with design tokens, custom properties, and optional custom components.
      </p>

      <section className="docs-section">
        <h2>Overview</h2>
        <p>
          Theming lets you change colors, typography, spacing, and other design decisions without editing the design system itself. Use design tokens and custom properties (CSS variables) to keep your site consistent while matching your brand.
        </p>
        <p>
          Related guides: <Link href="/docs/css-variables">CSS variables</Link> (how to override variables) and <Link href="/docs/custom-components">Custom components</Link> (how to build your own components with the system).
        </p>
      </section>

      <section className="docs-section">
        <h2>How to theme your project</h2>
        <ol className="docs-ordered-list">
          <li><strong>Add the design system</strong> — Install and include the EthioWDS stylesheet (see <Link href="/docs/installation">Installation</Link>).</li>
          <li><strong>Override variables</strong> — In your own stylesheet, set custom properties (e.g. <code>--primary</code>, <code>--ethio-gray-900</code>) on <code>:root</code> or a wrapper so the design system uses your values. See <Link href="/docs/css-variables">CSS variables</Link> for a list and examples.</li>
          <li><strong>Optional: build custom components</strong> — Use design system class names and tokens to build new components that stay on-brand. See <Link href="/docs/custom-components">Custom components</Link>.</li>
        </ol>
      </section>

      <section className="docs-section">
        <h2>Design tokens and variables</h2>
        <p>
          Override default design tokens—such as primary and secondary colors, typography, and spacing—in your project. Set your brand colors and font choices so that components and utilities use them consistently. The design system exposes these as custom properties you can override; details are in <Link href="/docs/css-variables">CSS variables</Link>.
        </p>
      </section>

      <section className="docs-section">
        <h2>Custom properties (runtime theming)</h2>
        <p>
          EthioWDS uses custom properties for colors, spacing, and typography. Override them in your styles to change the look without recompiling. That’s useful for user preferences, multiple themes, or dark mode. See <Link href="/docs/css-variables">CSS variables</Link> for how to do it.
        </p>
      </section>

      <section className="docs-section">
        <h2>Theme examples</h2>
        <div className="component-demo">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div style={{ background: '#2E86AB', color: 'white', padding: '1rem', borderRadius: '0.5rem' }}>
              <strong>Blue theme</strong>
              <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>Primary: #2E86AB</div>
            </div>
            <div style={{ background: '#1B5E20', color: 'white', padding: '1rem', borderRadius: '0.5rem' }}>
              <strong>Green theme</strong>
              <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>Primary: #1B5E20</div>
            </div>
            <div style={{ background: '#C2185B', color: 'white', padding: '1rem', borderRadius: '0.5rem' }}>
              <strong>Red theme</strong>
              <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>Primary: #C2185B</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
