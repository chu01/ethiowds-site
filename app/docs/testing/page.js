import Link from 'next/link'

export default function TestingPage() {
  return (
    <div className="docs-page">
      <h1>Testing</h1>
      <p className="lead">
        Test your design system implementation and custom components so they work correctly across devices, browsers, and for all users, including those using assistive technologies.
      </p>

      <section className="docs-section">
        <h2>What to test</h2>
        <ul>
          <li><strong>Visual consistency</strong> — Components and pages look correct and match the design system. Spacing, colors, and typography use the right tokens.</li>
          <li><strong>Responsive behavior</strong> — Layouts adapt at the design system breakpoints (e.g. 768px, 1024px). No horizontal scroll on small screens; content is readable and usable. See <Link href="/docs/breakpoints">Breakpoints</Link>.</li>
          <li><strong>Accessibility</strong> — Keyboard navigation, focus order, and focus visibility work. Screen readers can understand the content. Color contrast meets requirements. See <Link href="/docs/accessibility">Accessibility</Link>.</li>
          <li><strong>Localization</strong> — If you support Amharic or other languages, text displays correctly and direction is set where needed. See <Link href="/docs/ethiopian-localization">Ethiopian localization</Link>.</li>
        </ul>
      </section>

      <section className="docs-section">
        <h2>How to test</h2>
        <h3>Manual checks</h3>
        <ul>
          <li>Resize the browser window or use device emulation to verify layouts at different widths.</li>
          <li>Use only the keyboard (Tab, Enter, Escape) to navigate and activate controls.</li>
          <li>Test with a screen reader (e.g. built-in or browser extension) to ensure labels and structure are announced correctly.</li>
          <li>Check contrast with a contrast checker; fix any failing combinations.</li>
        </ul>
        <h3>Browsers and devices</h3>
        <p>
          Test in the browsers and devices your users actually use. Include at least one desktop and one mobile browser. Ensure forms, buttons, and navigation work in all of them.
        </p>
      </section>

      <section className="docs-section">
        <h2>Before submitting a contribution</h2>
        <p>
          If you’re contributing to EthioWDS:
        </p>
        <ol className="docs-ordered-list">
          <li>Run the project locally and confirm your changes don’t break existing pages or components.</li>
          <li>Test new or changed components at different viewport sizes and with keyboard and screen reader.</li>
          <li>Update documentation if you add or change a component or token.</li>
        </ol>
        <p>
          See <Link href="/docs/contributing">Contributing</Link> for the full process.
        </p>
      </section>

      <section className="docs-section">
        <h2>See also</h2>
        <p>
          <Link href="/docs/accessibility">Accessibility</Link> — Accessibility requirements. <Link href="/docs/contributing">Contributing</Link> — How to contribute. <Link href="/docs/code-standards">Code standards</Link> — Standards for contributions.
        </p>
      </section>
    </div>
  )
}
