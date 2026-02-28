import Link from 'next/link'

export default function ContributingPage() {
  return (
    <div className="docs-page">
      <h1>Contributing</h1>
      <p className="lead">
        Thank you for your interest in contributing to EthioWDS. We welcome contributions from the community to help improve the design system for Ethiopian government digital services.
      </p>

      <section className="docs-section">
        <h2>How to Contribute</h2>
        <ol className="docs-ordered-list">
          <li>
            <strong>Fork the repository</strong> on GitHub and clone it locally.
          </li>
          <li>
            <strong>Create a branch</strong> for your change: <code>git checkout -b feature/your-feature-name</code> or <code>fix/your-fix-name</code>.
          </li>
          <li>
            <strong>Make your changes</strong> following our <Link href="/docs/code-standards">code standards</Link> and <Link href="/docs/guidance">design guidelines</Link>.
          </li>
          <li>
            <strong>Test your changes</strong> — see our <Link href="/docs/testing">testing guide</Link>.
          </li>
          <li>
            <strong>Commit with clear messages</strong>, e.g. <code>feat: add new button variant</code> or <code>fix: contrast in dark theme</code>.
          </li>
          <li>
            <strong>Push to your fork</strong> and open a Pull Request against the main repository.
          </li>
        </ol>
      </section>

      <section className="docs-section">
        <h2>What We Welcome</h2>
        <ul>
          <li>New components that align with the design system</li>
          <li>Accessibility improvements (WCAG 2.1 AA)</li>
          <li>Ethiopian localization (Amharic, other languages)</li>
          <li>Documentation and examples</li>
          <li>Bug fixes and performance improvements</li>
          <li>Design token or theme enhancements</li>
        </ul>
      </section>

      <section className="docs-section">
        <h2>Reporting Issues</h2>
        <p>
          Before opening an issue, check existing issues and discussions. When reporting bugs, please include:
        </p>
        <ul>
          <li>Steps to reproduce</li>
          <li>Expected vs actual behavior</li>
          <li>Browser and OS (and version if relevant)</li>
          <li>Screenshots or code samples when helpful</li>
        </ul>
        <p>
          <a href="https://github.com/chu01/ethioWDS/issues" target="_blank" rel="noopener noreferrer">Open an issue on GitHub</a>.
        </p>
      </section>

      <section className="docs-section">
        <h2>Code of Conduct</h2>
        <p>
          Be respectful and inclusive. We aim to maintain a welcoming environment for everyone contributing to Ethiopian digital government standards.
        </p>
      </section>

      <section className="docs-section">
        <h2>Questions?</h2>
        <p>
          Use <a href="https://github.com/chu01/ethioWDS/discussions" target="_blank" rel="noopener noreferrer">GitHub Discussions</a> for questions, ideas, or feedback.
        </p>
      </section>
    </div>
  )
}
