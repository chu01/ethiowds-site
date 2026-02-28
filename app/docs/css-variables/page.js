import Link from 'next/link'

export default function CssVariablesPage() {
  return (
    <div className="docs-page">
      <h1>CSS variables</h1>
      <p className="lead">
        EthioWDS exposes design tokens as custom properties (CSS variables). Override them in your project to theme your site without changing the design system files.
      </p>

      <section className="docs-section">
        <h2>What are CSS variables?</h2>
        <p>
          Custom properties (often called CSS variables) are values you define once and reuse—for example <code>--primary: #078930;</code>. The design system uses them for colors, spacing, typography, and more. When you override these variables, every component that uses them picks up your values.
        </p>
      </section>

      <section className="docs-section">
        <h2>How to override variables</h2>
        <p>
          Add a stylesheet that loads after the design system (or place your overrides in your main styles). Target <code>:root</code> to apply globally, or a wrapper class for a section or theme.
        </p>
        <h3>Global overrides</h3>
        <p>Apply your theme to the whole page:</p>
        <pre className="code-block">
{`:root {
  --primary: #078930;
  --secondary: #ff6b6b;
  --ethio-green: #1B5E20;
  --ethio-yellow: #FFC107;
  --ethio-red: #C2185B;
  --ethio-blue: #1976D2;
  --font-family-sans: 'Inter', 'Noto Sans Ethiopic', sans-serif;
}`}
        </pre>
        <h3>Scoped overrides (e.g. one section or dark theme)</h3>
        <p>Override only inside a wrapper:</p>
        <pre className="code-block">
{`.my-theme-wrapper {
  --primary: #2E86AB;
  --ethio-gray-900: #0f172a;
}

.dark-theme {
  --primary: #38bdf8;
  --ethio-gray-50: #0f172a;
  --ethio-gray-900: #f8fafc;
}`}
        </pre>
      </section>

      <section className="docs-section">
        <h2>Common variables</h2>
        <p>Variables you can override for theming:</p>
        <h3>Colors</h3>
        <ul>
          <li><code>--primary</code> — Primary brand color (buttons, links, focus)</li>
          <li><code>--secondary</code> — Secondary color</li>
          <li><code>--ethio-green</code>, <code>--ethio-yellow</code>, <code>--ethio-red</code>, <code>--ethio-blue</code> — Palette colors</li>
          <li><code>--ethio-gray-50</code> through <code>--ethio-gray-900</code> — Neutrals for backgrounds, borders, text</li>
        </ul>
        <h3>Typography</h3>
        <ul>
          <li><code>--font-family-sans</code> — Default sans-serif stack (include Noto Sans Ethiopic for Amharic)</li>
          <li><code>--font-size-base</code> — Base font size</li>
        </ul>
        <h3>Spacing and layout</h3>
        <p>Use the design system spacing scale (e.g. spacing-1, spacing-2) if your build exposes them as variables; otherwise rely on the utilities and components. See <Link href="/docs/spacing">Spacing</Link> and <Link href="/docs/design-tokens">Design tokens</Link>.</p>
      </section>

      <section className="docs-section">
        <h2>Step-by-step: theme your site</h2>
        <ol className="docs-ordered-list">
          <li>Install EthioWDS and add its stylesheet (see <Link href="/docs/installation">Installation</Link>).</li>
          <li>Create or open your own stylesheet that loads after the design system.</li>
          <li>Add a <code>:root</code> (or wrapper) block and set the variables you want to change (e.g. <code>--primary</code>, <code>--ethio-gray-900</code>).</li>
          <li>Save and reload; buttons, links, and other components that use those variables will use your values.</li>
        </ol>
      </section>

      <section className="docs-section">
        <h2>See also</h2>
        <p>
          <Link href="/docs/theming">Theming</Link> — Overview of theming options. <Link href="/docs/colors">Colors</Link> — Color palette and usage. <Link href="/docs/custom-components">Custom components</Link> — Build components that use these variables.
        </p>
      </section>
    </div>
  )
}
