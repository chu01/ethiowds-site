import Link from 'next/link'

export default function DesignTokensPage() {
  return (
    <div className="docs-page">
      <h1>Design Tokens</h1>
      <p className="lead">
        EthioWDS uses design tokens for colors, typography, spacing, and more so you can keep visual consistency and theme your apps easily.
      </p>

      <section className="docs-section">
        <h2>Overview</h2>
        <p>
          Design tokens are named variables that define the design decisions of the system. They can be overridden for theming.
        </p>
      </section>

      <section className="docs-section">
        <h2>Token Categories</h2>
        <ul>
          <li><Link href="/docs/colors">Colors</Link> — palette, semantic colors, contrast</li>
          <li><Link href="/docs/typography">Typography</Link> — font families, sizes, weights, line heights</li>
          <li><Link href="/docs/spacing">Spacing</Link> — margins, padding, gaps</li>
          <li>Breakpoints — responsive breakpoints (see <Link href="/docs/breakpoints">Breakpoints</Link>)</li>
          <li>Border radius, shadows, transitions — see component and theme documentation</li>
        </ul>
      </section>

      <section className="docs-section">
        <h2>Using Tokens</h2>
        <p>
          Add the design system to your project to get all tokens. Override in your own styles or via <Link href="/docs/theming">theming</Link> and <Link href="/docs/css-variables">custom properties</Link>.
        </p>
      </section>
    </div>
  )
}
