import Link from 'next/link'

export default function ChangelogPage() {
  return (
    <div className="docs-page">
      <h1>Changelog</h1>
      <p className="lead">
        Notable changes and releases for EthioWDS.
      </p>

      <section className="docs-section">
        <h2>Current version</h2>
        <p>
          For the latest release notes and a full history of changes, see the repository&apos;s releases and commit history on GitHub.
        </p>
        <p>
          <a href="https://github.com/chu01/ethioWDS/releases" target="_blank" rel="noopener noreferrer">View releases on GitHub</a>
        </p>
      </section>

      <section className="docs-section">
        <h2>Version 1.x</h2>
        <p>
          EthioWDS is actively maintained. Check the GitHub repo for up-to-date version numbers and release notes.
        </p>
      </section>
    </div>
  )
}
