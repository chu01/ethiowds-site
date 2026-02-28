import Link from 'next/link'

export default function BreakpointsPage() {
  return (
    <div className="docs-page">
      <h1>Breakpoints</h1>
      <p className="lead">
        EthioWDS uses a small set of breakpoints so layouts and components can adapt to different screen sizes in a consistent way.
      </p>

      <section className="docs-section">
        <h2>Default breakpoints</h2>
        <p>
          Use these widths in your media queries so your project aligns with the design system. Layouts typically switch from a single column (mobile) to multi-column or wider spacing at the larger breakpoints.
        </p>
        <table className="docs-table" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--ethio-gray-200)' }}>
              <th style={{ textAlign: 'left', padding: '0.5rem 1rem' }}>Name</th>
              <th style={{ textAlign: 'left', padding: '0.5rem 1rem' }}>Min width</th>
              <th style={{ textAlign: 'left', padding: '0.5rem 1rem' }}>Typical use</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--ethio-gray-200)' }}>
              <td style={{ padding: '0.5rem 1rem' }}>Mobile</td>
              <td style={{ padding: '0.5rem 1rem' }}>—</td>
              <td style={{ padding: '0.5rem 1rem' }}>Default; single column, stacked layout</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--ethio-gray-200)' }}>
              <td style={{ padding: '0.5rem 1rem' }}>Tablet</td>
              <td style={{ padding: '0.5rem 1rem' }}>769px</td>
              <td style={{ padding: '0.5rem 1rem' }}>Larger phones and tablets; can show sidebars or two columns</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--ethio-gray-200)' }}>
              <td style={{ padding: '0.5rem 1rem' }}>Desktop</td>
              <td style={{ padding: '0.5rem 1rem' }}>1025px</td>
              <td style={{ padding: '0.5rem 1rem' }}>Laptops and desktops; full layout and spacing</td>
            </tr>
          </tbody>
        </table>
        <p style={{ marginTop: '1rem', fontSize: '0.9375rem', color: 'var(--ethio-gray-700)' }}>
          In practice, the design system often uses <strong>768px</strong> and <strong>1024px</strong> as max-width or min-width boundaries (e.g. “below 768px” for mobile, “1024px and up” for desktop). Use the same values in your own styles so behavior is consistent.
        </p>
      </section>

      <section className="docs-section">
        <h2>How to use breakpoints</h2>
        <p>
          In your stylesheet, write a media query that applies different layout or spacing when the viewport is at least (or at most) a given width. Prefer mobile-first: define the small-screen layout by default, then add <code>min-width</code> media queries for larger screens.
        </p>
        <h3>Example: show sidebar only on larger screens</h3>
        <pre className="code-block">
{`/* Mobile: single column, no sidebar */
.main { width: 100%; }

/* Tablet and up: sidebar visible */
@media (min-width: 769px) {
  .layout { display: flex; }
  .sidebar { width: 280px; }
}`}
        </pre>
        <h3>Example: stack on mobile, row on desktop</h3>
        <pre className="code-block">
{`/* Mobile first: stacked */
.grid { display: flex; flex-direction: column; gap: 1rem; }

@media (min-width: 769px) {
  .grid { flex-direction: row; }
}`}
        </pre>
      </section>

      <section className="docs-section">
        <h2>See also</h2>
        <p>
          <Link href="/docs/spacing">Spacing</Link> — Spacing scale and responsive spacing. <Link href="/docs/design-tokens">Design tokens</Link> — Overview of tokens. <Link href="/docs/guidance">Guidance</Link> — Mobile-first design principles.
        </p>
      </section>
    </div>
  )
}
