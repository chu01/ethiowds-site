import Link from 'next/link'
import './docs-pages.scss'

export default function DocsHome() {
  return (
    <div className="docs-page">
      <h1>EthioWDS Documentation</h1>
      <p className="lead">
        A comprehensive design system for building Ethiopian digital experiences with consistency and accessibility.
      </p>

      <div className="docs-grid">
        <div className="docs-card">
          <h2>🚀 Getting Started</h2>
          <p>Learn how to install and set up EthioWDS in your project.</p>
          <Link href="/docs/installation" className="ethio-btn ethio-btn-primary">
            Get Started
          </Link>
        </div>

        <div className="docs-card">
          <h2>🎨 Foundation</h2>
          <p>Explore colors, typography, and design tokens that make up the system.</p>
          <Link href="/docs/colors" className="ethio-btn ethio-btn-outline">
            View Foundation
          </Link>
        </div>

        <div className="docs-card">
          <h2>🧩 Components</h2>
          <p>Browse all available components with examples and usage guidelines.</p>
          <Link href="/docs/components/buttons" className="ethio-btn ethio-btn-outline">
            Browse Components
          </Link>
        </div>

        <div className="docs-card">
          <h2>⚡ Utilities</h2>
          <p>Utility classes for layout, spacing, and responsive design.</p>
          <Link href="/docs/utilities/display" className="ethio-btn ethio-btn-outline">
            View Utilities
          </Link>
        </div>
      </div>
    </div>
  )
}