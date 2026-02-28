import Link from 'next/link'

export default function AccessibilityPage() {
  return (
    <div className="docs-page">
      <h1>Accessibility</h1>
      <p className="lead">
        EthioWDS is built with accessibility in mind. We aim for WCAG 2.1 Level AA so government digital services are usable by everyone.
      </p>

      <section className="docs-section">
        <h2>Our Commitment</h2>
        <ul>
          <li>Keyboard navigation and focus management</li>
          <li>Sufficient color contrast and non-color-dependent cues</li>
          <li>Screen reader–friendly markup and ARIA where needed</li>
          <li>Resizable text and responsive layouts</li>
        </ul>
      </section>

      <section className="docs-section">
        <h2>Using Components Accessibly</h2>
        <p>
          Use semantic structure and the recommended attributes for labels and associations. Avoid removing focus outlines unless you replace them with a visible focus style.
        </p>
      </section>

      <section className="docs-section">
        <h2>Resources</h2>
        <p>
          See our <Link href="/docs/guidance">guidance</Link> for accessibility in content and implementation. When contributing, please follow our <Link href="/docs/contributing">contributing</Link> guidelines and test with keyboard and screen readers.
        </p>
      </section>
    </div>
  )
}
