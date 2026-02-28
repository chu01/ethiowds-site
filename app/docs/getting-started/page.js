import Link from 'next/link'

export default function GettingStartedPage() {
  return (
    <div className="docs-page">
      <h1>Getting started</h1>
      <p className="lead">
        Get started using the Design System by installing, compiling, and customizing our code.
      </p>

      <section className="docs-section">
        <h2>Install the design system</h2>
        <p>Obtain the EthioWDS code and add it to your project using your preferred method. The design system can be installed via a package manager, downloaded as a release, or included from a CDN for quick prototyping.</p>
      </section>

      <section className="docs-section">
        <h2>Add styles and assets</h2>
        <p>Include the design system styles in your project so that components and design tokens are available. You can use the compiled styles as-is or customize variables and themes to match your brand.</p>
      </section>

      <section className="docs-section">
        <h2>Use components</h2>
        <p>Use the design system components and patterns in your pages. All components follow consistent naming and structure. Many support variants for different visual styles and contexts.</p>
      </section>

      <section className="docs-section">
        <h2>Customize as needed</h2>
        <p>Override design tokens—colors, typography, spacing—to align with your product. The design system is built to be customized while keeping accessibility and consistency.</p>
      </section>

      <section className="docs-section">
        <h2>Next steps</h2>
        <div className="next-steps-grid">
          <div className="step-card">
            <h4>Explore components</h4>
            <p>Browse all available components with examples and usage guidelines.</p>
            <a href="/components" className="eth-button eth-button--outline">View components</a>
          </div>
          <div className="step-card">
            <h4>Learn guidelines</h4>
            <p>Understand design principles and best practices for using EthioWDS.</p>
            <a href="/docs/guidance" className="eth-button eth-button--outline">Read guidelines</a>
          </div>
          <div className="step-card">
            <h4>Customize theme</h4>
            <p>Learn how to customize colors, typography, and other design tokens.</p>
            <a href="/docs/theming" className="eth-button eth-button--outline">Customize</a>
          </div>
        </div>
      </section>
    </div>
  )
}
