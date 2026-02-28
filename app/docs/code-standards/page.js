import Link from 'next/link'

export default function CodeStandardsPage() {
  return (
    <div className="docs-page">
      <h1>Code standards</h1>
      <p className="lead">
        Follow these standards when contributing to EthioWDS or building with it so that the design system stays consistent, accessible, and maintainable.
      </p>

      <section className="docs-section">
        <h2>Naming and structure</h2>
        <ul>
          <li><strong>Class names</strong> — Use the design system’s existing class names (e.g. <code>eth-button</code>, <code>eth-button--primary</code>). For custom components, use a clear prefix and consistent naming (e.g. <code>my-card</code>, <code>my-card__title</code>).</li>
          <li><strong>Files and folders</strong> — Organize styles and assets in a predictable way. Keep component-related files together and use names that describe the component or feature.</li>
          <li><strong>Variables and tokens</strong> — Reuse design system tokens (e.g. <code>--primary</code>, <code>--ethio-gray-100</code>) instead of hard-coding colors or spacing. See <Link href="/docs/css-variables">CSS variables</Link> and <Link href="/docs/design-tokens">Design tokens</Link>.</li>
        </ul>
      </section>

      <section className="docs-section">
        <h2>Accessibility</h2>
        <p>
          All contributions should keep or improve accessibility:
        </p>
        <ul>
          <li>Use semantic structure (headings, lists, landmarks) so the page makes sense to assistive technologies.</li>
          <li>Provide visible focus styles and ensure keyboard navigation works.</li>
          <li>Use sufficient color contrast and don’t rely on color alone to convey information.</li>
          <li>Associate labels with form controls and use ARIA only when necessary.</li>
        </ul>
        <p>
          See <Link href="/docs/accessibility">Accessibility</Link> for more.
        </p>
      </section>

      <section className="docs-section">
        <h2>Consistency with the design system</h2>
        <ul>
          <li>Use the same spacing scale (see <Link href="/docs/spacing">Spacing</Link>) and breakpoints (see <Link href="/docs/breakpoints">Breakpoints</Link>) as the rest of the system.</li>
          <li>Reuse existing components and patterns before adding new ones.</li>
          <li>Document new components or tokens so others know how to use them.</li>
        </ul>
      </section>

      <section className="docs-section">
        <h2>Commit messages</h2>
        <p>
          Write clear commit messages so the project history stays readable. Use a short summary line; add more detail in the body if needed. Examples:
        </p>
        <ul>
          <li><code>feat: add new button variant</code></li>
          <li><code>fix: improve contrast in dark theme</code></li>
          <li><code>docs: update installation guide</code></li>
        </ul>
      </section>

      <section className="docs-section">
        <h2>See also</h2>
        <p>
          <Link href="/docs/contributing">Contributing</Link> — How to contribute. <Link href="/docs/guidance">Guidance</Link> — Design principles and best practices. <Link href="/docs/testing">Testing</Link> — How to test your changes.
        </p>
      </section>
    </div>
  )
}
