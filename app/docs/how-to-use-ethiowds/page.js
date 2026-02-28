import Link from 'next/link'

export default function HowToUse() {
  return (
    <div className="docs-container">
      <div className="docs-content">
        <h1>How to use EthioWDS</h1>
        <p className="lead">
          Learn the fundamental concepts and patterns for working with EthioWDS components.
        </p>

        <h2>Basic component usage</h2>
        <p>
          All EthioWDS components follow a consistent pattern. Use the same structure and class names across your project so that styling and behavior stay consistent. Components are designed to work together—forms, buttons, cards, and navigation share the same tokens and spacing.
        </p>

        <h2>Component variants</h2>
        <p>
          Many components support variants for different visual styles and contexts. For example, buttons can be primary, secondary, or outline; alerts can indicate success, warning, error, or info. Choose the variant that best fits the content and the user&apos;s task.
        </p>

        <h2>Ethiopian localization</h2>
        <p>
          EthioWDS includes support for Ethiopian languages and cultural patterns. Use the appropriate labels, placeholders, and direction settings for Amharic and other local languages. Date and number formatting can follow local conventions where needed.
        </p>

        <h2>Accessibility</h2>
        <p>
          All components are built with accessibility in mind:
        </p>
        <ul>
          <li>Proper semantics and ARIA attributes where needed</li>
          <li>Keyboard navigation support</li>
          <li>Screen reader compatibility</li>
          <li>Focus management</li>
          <li>Color contrast compliance</li>
        </ul>

        <h2>Customization</h2>
        <p>
          Customize components using design tokens—colors, typography, spacing—or by overriding styles. The design system is intended to be adapted to your brand while keeping consistency and accessibility.
        </p>

        <div className="docs-next">
          <h3>Ready for more?</h3>
          <p>
            Explore the <Link href="/components">complete component library</Link> or
            learn about <Link href="/docs/ethiopian-localization">Ethiopian localization features</Link>
            in depth.
          </p>
        </div>
      </div>
    </div>
  )
}
