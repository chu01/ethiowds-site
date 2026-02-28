import Link from 'next/link'
import './docs.scss'

export default function DocsLandingPage() {
  return (
    <div className="docs-container docs-landing">
      <div className="docs-content">
        <h1 className="docs-landing__title">How to use EthioWDS</h1>
        <p className="docs-landing__lead">
          EthioWDS provides principles, guidance, and code to help you design and build accessible, mobile-friendly government websites and digital services for Ethiopia.
        </p>

        {/* Get started with EthioWDS */}
        <section className="docs-landing__section" aria-labelledby="get-started-heading">
          <h2 id="get-started-heading" className="docs-landing__section-title">Get started with EthioWDS</h2>
          <div className="docs-landing__get-started">
            <Link href="/docs/installation" className="docs-landing__card">
              <h3 className="docs-landing__card-title">Getting started</h3>
              <p className="docs-landing__card-desc">
                Get started using the Design System by installing, compiling, and customizing our code.
              </p>
            </Link>
            <Link href="/docs/guidance" className="docs-landing__card">
              <h3 className="docs-landing__card-title">Design guidance</h3>
              <p className="docs-landing__card-desc">
                Use our design principles, colors, typography, and spacing tokens for wireframes and prototypes.
              </p>
            </Link>
            <Link href="/docs/how-to-use-ethiowds" className="docs-landing__card">
              <h3 className="docs-landing__card-title">Documentation</h3>
              <p className="docs-landing__card-desc">
                Find detailed information about our design and development processes and how to use the system.
              </p>
            </Link>
          </div>
        </section>

        {/* Before getting started */}
        <section className="docs-landing__section" aria-labelledby="before-getting-started-heading">
          <h2 id="before-getting-started-heading" className="docs-landing__section-title">Before getting started with EthioWDS</h2>
          <p className="docs-landing__body">
            EthioWDS includes accessible, mobile-friendly components out of the box, ensuring consistency and saving teams the need to build everything from scratch for government and public-sector web projects in Ethiopia.
          </p>
          <p className="docs-landing__body">
            EthioWDS also provides tools and guidance—including design tokens for colors and typography, Amharic and local language support, and components built for accessibility—to make it easier to deliver inclusive digital services that meet user needs and align with emerging Ethiopian digital standards.
          </p>
        </section>

        {/* Key concepts and tools */}
        <section className="docs-landing__section" aria-labelledby="key-concepts-heading">
          <h2 id="key-concepts-heading" className="docs-landing__section-title">Key concepts and tools</h2>
          <p className="docs-landing__body">
            You don&apos;t need to understand the following concepts to install the design system, but you will need to know them to build with it:
          </p>
          <ul className="docs-landing__concepts">
            <li><strong>Design tokens:</strong> Design tokens are predefined units of color, spacing, typography, and more that form the building blocks of the design system. See <Link href="/docs/design-tokens">Design tokens</Link> and <Link href="/docs/colors">Colors</Link>, <Link href="/docs/typography">Typography</Link>, <Link href="/docs/spacing">Spacing</Link>.</li>
            <li><strong>Components:</strong> Components are simple, consistent solutions to common user interface needs, like buttons, forms, and navigation. If tokens are the building blocks of the design system, components are the building blocks of a site or service. Browse <Link href="/components">Components</Link>.</li>
            <li><strong>Utilities:</strong> Utilities are single-purpose classes mapped to EthioWDS tokens. They let you prototype and style layouts quickly. See <Link href="/docs/utilities/display">Display</Link>, <Link href="/docs/utilities/colors">Colors</Link>, <Link href="/docs/utilities/spacing">Spacing</Link>.</li>
            <li><strong>Guidance:</strong> Our guidance covers design principles, accessibility, and best practices so components behave the way users expect. See <Link href="/docs/guidance">Guidance</Link> and <Link href="/docs/accessibility">Accessibility</Link>.</li>
          </ul>
          <p className="docs-landing__body">
            We&apos;ve created these resources to help teams start quickly and use a shared language when customizing and updating content. The EthioWDS community is also a resource—reach out with questions or ideas before, during, or after getting started.
          </p>
        </section>

        {/* Adopt EthioWDS incrementally */}
        <section className="docs-landing__section" aria-labelledby="adopt-incrementally-heading">
          <h2 id="adopt-incrementally-heading" className="docs-landing__section-title">Adopt EthioWDS incrementally</h2>
          <p className="docs-landing__body">
            EthioWDS helps Ethiopian government and public-sector teams design and build better digital experiences. As a toolkit for government and civic websites, the design system provides:
          </p>
          <ol className="docs-landing__adopt-list">
            <li><strong>Principles:</strong> EthioWDS design principles support consistency, accessibility, and Ethiopian identity. See <Link href="/docs/guidance">Guidance</Link>.</li>
            <li><strong>Guidance:</strong> UX and content guidance helps ensure components do what users expect. See <Link href="/docs/guidance">Guidance</Link>.</li>
            <li><strong>Code:</strong> EthioWDS code provides an accessible, mobile-friendly experience. Teams can extend and contribute back. See <Link href="/docs/installation">Installation</Link> and <Link href="/docs/contributing">Contributing</Link>.</li>
          </ol>
          <p className="docs-landing__body">
            The design system is flexible—we expect you to adapt it as you adopt it. Start by applying our design principles, then add tokens and components incrementally to best meet your agency&apos;s or project&apos;s needs.
          </p>
        </section>

        {/* Latest updates */}
        <section className="docs-landing__section" aria-labelledby="latest-updates-heading">
          <h2 id="latest-updates-heading" className="docs-landing__section-title">Latest updates</h2>
          <p className="docs-landing__body">
            Meaningful code and documentation updates are listed in the changelog. For the full release history, see <Link href="/docs/changelog">Changelog</Link> and the project&apos;s <a href="https://github.com/chu01/ethioWDS/releases" target="_blank" rel="noopener noreferrer">releases on GitHub</a>.
          </p>
        </section>

        {/* Become part of the community */}
        <section className="docs-landing__section docs-landing__community" aria-labelledby="community-heading">
          <h2 id="community-heading" className="docs-landing__section-title">Become part of the community</h2>
          <p className="docs-landing__body docs-landing__community-intro">
            EthioWDS is an open-source community building digital services for Ethiopia. Contributors support government sites, civic tech, and public-sector projects.
          </p>
          <div className="docs-landing__community-grid">
            <div className="docs-landing__community-item">
              <h3 className="docs-landing__community-item-title">Have an idea or an issue?</h3>
              <p><a href="https://github.com/chu01/ethioWDS/issues" target="_blank" rel="noopener noreferrer">Reach out on GitHub</a></p>
            </div>
            <div className="docs-landing__community-item">
              <h3 className="docs-landing__community-item-title">Engage with the community</h3>
              <p><a href="https://github.com/chu01/ethioWDS/discussions" target="_blank" rel="noopener noreferrer">GitHub Discussions</a></p>
            </div>
            <div className="docs-landing__community-item">
              <h3 className="docs-landing__community-item-title">Contribute</h3>
              <p><Link href="/docs/contributing">Contributing guide</Link></p>
            </div>
            <div className="docs-landing__community-item">
              <h3 className="docs-landing__community-item-title">Get support</h3>
              <p><a href="https://github.com/chu01/ethioWDS" target="_blank" rel="noopener noreferrer">GitHub repository</a></p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
