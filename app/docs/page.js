import Link from 'next/link'
import './docs.scss'

export default function DocsIntroduction() {
  return (
    <div className="docs-container">
      <div className="docs-content">
        <h1>EthioWDS Documentation</h1>
        <p className="lead">
          A comprehensive design system and component library built specifically for Ethiopian digital products, 
          focusing on accessibility, cultural relevance, and modern web standards.
        </p>

        <div className="docs-grid">
          <div className="docs-card">
            <div className="docs-card-icon">🎯</div>
            <h3>Ethiopian Focused</h3>
            <p>Designed with Ethiopian languages, cultural patterns, and user behaviors in mind.</p>
          </div>
          
          <div className="docs-card">
            <div className="docs-card-icon">♿</div>
            <h3>Accessible</h3>
            <p>WCAG 2.1 compliant components that work for all users, including those with disabilities.</p>
          </div>
          
          <div className="docs-card">
            <div className="docs-card-icon">⚡</div>
            <h3>Modern & Fast</h3>
            <p>Built with modern React, TypeScript, and optimized for performance.</p>
          </div>
        </div>

        <h2>Getting Started</h2>
        <p>
          Choose your path to start using EthioWDS in your project:
        </p>

        <div className="cta-cards">
          <Link href="/docs/installation" className="cta-card">
            <h3>Quick Installation</h3>
            <p>Get started immediately with our installation guide</p>
            <span className="cta-arrow">→</span>
          </Link>
          
          <Link href="/components" className="cta-card">
            <h3>Browse Components</h3>
            <p>Explore all available components and their usage</p>
            <span className="cta-arrow">→</span>
          </Link>
          
          <Link href="/docs/how-to-use-ethiowds" className="cta-card">
            <h3>Learn Basics</h3>
            <p>Understand the fundamentals and best practices</p>
            <span className="cta-arrow">→</span>
          </Link>
        </div>

        <h2>What's Included</h2>
        <ul>
          <li><strong>40+ React Components</strong> - Pre-built, accessible UI components</li>
          <li><strong>Ethiopian Typography</strong> - Support for Amharic and other local languages</li>
          <li><strong>Cultural Color Palette</strong> - Colors inspired by Ethiopian heritage</li>
          <li><strong>Responsive Layouts</strong> - Mobile-first responsive design system</li>
          <li><strong>Accessibility Features</strong> - Full keyboard navigation and screen reader support</li>
          <li><strong>Customization</strong> - Easy theming and customization options</li>
        </ul>

        <div className="docs-next-steps">
          <h3>Next Steps</h3>
          <div className="next-steps-grid">
            <Link href="/docs/installation" className="next-step-card">
              <h4>Installation Guide</h4>
              <p>Learn how to install and set up EthioWDS in your project</p>
            </Link>
            <Link href="/docs/design-principles" className="next-step-card">
              <h4>Design Principles</h4>
              <p>Understand the philosophy behind EthioWDS</p>
            </Link>
            <Link href="/components/button" className="next-step-card">
              <h4>First Component</h4>
              <p>Start with the Button component basics</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}