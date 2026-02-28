import Link from 'next/link'

export default function EthiopianLocalizationPage() {
  return (
    <div className="docs-page">
      <h1>Ethiopian localization</h1>
      <p className="lead">
        Use EthioWDS to build interfaces that support Amharic and other Ethiopian languages, right-to-left (RTL) text, and local formats for dates and numbers.
      </p>

      <section className="docs-section">
        <h2>Why localization matters</h2>
        <p>
          Government and public-sector sites in Ethiopia serve users who read and write in Amharic, Oromo, Tigrinya, and other languages. Localization improves clarity, trust, and accessibility. EthioWDS provides typography, direction, and patterns that work for Ethiopian languages.
        </p>
      </section>

      <section className="docs-section">
        <h2>Languages and script</h2>
        <p>
          EthioWDS supports the Ethiopic script used for Amharic, Tigrinya, and other languages. Use a font that includes Ethiopic glyphs—for example Noto Sans Ethiopic—and set it in your theme so that body text and headings render correctly. See <Link href="/docs/typography">Typography</Link> and <Link href="/docs/css-variables">CSS variables</Link> for <code>--font-family-sans</code>.
        </p>
        <ul>
          <li>Include Noto Sans Ethiopic (or similar) in your font stack for Amharic and other Ethiopic script.</li>
          <li>Ensure line height and letter spacing work well for the script.</li>
        </ul>
      </section>

      <section className="docs-section">
        <h2>Text direction (RTL)</h2>
        <p>
          Amharic and other Ethiopic script are left-to-right (LTR). If you support Arabic or other RTL languages in the same product, use the <code>dir</code> attribute on the document or on a wrapper so layout and text align correctly. EthioWDS components respect <code>dir="rtl"</code> when set on a parent.
        </p>
        <p>
          Set <code>dir="ltr"</code> or <code>dir="rtl"</code> on the <code>html</code> element or on a section wrapper so that alignment, margins, and icons flip as expected.
        </p>
      </section>

      <section className="docs-section">
        <h2>Labels and content</h2>
        <p>
          Use localized labels for buttons, form fields, errors, and navigation. Keep placeholder and label text in the user’s language. Avoid hard-coded English strings in the UI when the audience is Amharic or another local language. If you use a language switcher, link to the localized version of the page or trigger a locale change.
        </p>
      </section>

      <section className="docs-section">
        <h2>Dates and numbers</h2>
        <p>
          Where relevant, support the Ethiopian calendar and local date formats. Format numbers (currency, decimals, percentages) according to local conventions (e.g. grouping, decimal separator). EthioWDS does not prescribe a single format—use your project’s i18n or formatting library and keep formats consistent across the site.
        </p>
      </section>

      <section className="docs-section">
        <h2>See also</h2>
        <p>
          <Link href="/docs/guidance">Guidance</Link> — Design principles and writing for Ethiopian audiences. <Link href="/docs/typography">Typography</Link> — Fonts and type scale. <Link href="/docs/accessibility">Accessibility</Link> — Accessible content and structure.
        </p>
      </section>
    </div>
  )
}
