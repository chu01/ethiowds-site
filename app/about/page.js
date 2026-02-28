import Link from 'next/link'
import './about-layout.scss'

export default function About() {
  return (
    <div className="about-page">
      <h1>About EthioWDS</h1>
      <p className="lead">
        The Ethiopian Web Design System (EthioWDS) is a design system for Ethiopian government and public-sector digital services. 
        It provides principles, guidance, and code to help teams build accessible, mobile-friendly websites that serve all Ethiopians.
      </p>

      <section id="mission" className="about-page__section" aria-labelledby="mission-heading">
        <h2 id="mission-heading">Our mission</h2>
        <p>
          EthioWDS aims to make it easier to build accessible, mobile-friendly government websites 
          for the Ethiopian people. We do this by providing principles, guidance, and code so 
          teams can deliver consistent, high-quality digital experiences.
        </p>
        <blockquote>
          <p>
            To create consistent, accessible, and culturally relevant digital experiences 
            that serve all Ethiopians.
          </p>
        </blockquote>
      </section>

      <section id="design-principles" className="about-page__section" aria-labelledby="principles-heading">
        <h2 id="principles-heading">Design principles</h2>
        <p>
          Our design principles guide how we create digital services:
        </p>
        <ul>
          <li>
            <strong>Accessibility first:</strong> We prioritize accessibility so digital services 
            work for everyone, including people with disabilities.
          </li>
          <li>
            <strong>Cultural relevance:</strong> Designs reflect Ethiopian cultural heritage 
            while meeting modern usability standards.
          </li>
          <li>
            <strong>Consistency:</strong> Consistent patterns and components create cohesive 
            experiences across government services.
          </li>
          <li>
            <strong>Simplicity:</strong> We keep design and implementation simple so the system 
            is easy to use and maintain.
          </li>
        </ul>
      </section>

      <section id="whats-included" className="about-page__section" aria-labelledby="included-heading">
        <h2 id="included-heading">What&apos;s included</h2>
        <p>
          EthioWDS provides what you need to create accessible, mobile-friendly government websites:
        </p>
        <ul>
          <li>Design principles and guidance</li>
          <li>UI components and patterns</li>
          <li>Design tokens for colors, typography, and spacing</li>
          <li>Accessibility guidance</li>
          <li>Ethiopian localization support</li>
          <li>Documentation and examples</li>
        </ul>
      </section>

      <section id="get-involved" className="about-page__section" aria-labelledby="involved-heading">
        <h2 id="involved-heading">Get involved</h2>
        <p>
          EthioWDS is open source. We welcome contributions from government teams, contractors, and the public. 
          You can help by:
        </p>
        <ul>
          <li>Reporting bugs or suggesting improvements</li>
          <li>Contributing code or documentation</li>
          <li>Sharing feedback or research</li>
        </ul>
        <p>
          <Link href="/docs/contributing" className="about-page__link">Contributing guide</Link>
          {' · '}
          <Link href="/docs/changelog" className="about-page__link">Changelog</Link>
        </p>
      </section>
    </div>
  )
}