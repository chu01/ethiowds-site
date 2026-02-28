import Link from 'next/link'

export default function DeploymentPage() {
  return (
    <div className="docs-page">
      <h1>Deployment</h1>
      <p className="lead">
        Deploy your site or application that uses EthioWDS by building your project and publishing the output to your hosting environment. The design system is static assets (styles and optional scripts), so it works with common hosting and deployment setups.
      </p>

      <section className="docs-section">
        <h2>Before you deploy</h2>
        <ul>
          <li>EthioWDS is installed and its stylesheet is included (see <Link href="/docs/installation">Installation</Link>).</li>
          <li>Your project builds successfully and looks correct locally at different screen sizes.</li>
          <li>You’ve run any tests or checks you use (see <Link href="/docs/testing">Testing</Link>).</li>
        </ul>
      </section>

      <section className="docs-section">
        <h2>Build your project</h2>
        <p>
          Run your project’s build command so it produces the files you will deploy (e.g. HTML, CSS, and scripts). The build process should bundle or copy the EthioWDS stylesheet and any assets you use. Ensure the paths to the design system files are correct in the built output so they load in production.
        </p>
      </section>

      <section className="docs-section">
        <h2>Static vs dynamic sites</h2>
        <p>
          <strong>Static sites</strong> — If your site is built as static HTML, CSS, and scripts, upload the build output to your host (e.g. via FTP, Git, or a hosting dashboard). Many hosts support static sites and optional redirects or headers for SPA-style routing.
        </p>
        <p>
          <strong>Dynamic or server-rendered sites</strong> — If your project uses a server or framework, deploy using that project’s recommended process (e.g. build step, then run the server or deploy to a platform). The design system remains static assets referenced by your templates or layout.
        </p>
      </section>

      <section className="docs-section">
        <h2>Check after deployment</h2>
        <ul>
          <li>Open the live site and confirm styles load (no missing or broken CSS).</li>
          <li>Test key pages and components on desktop and mobile.</li>
          <li>Verify links, forms, and navigation work on the live URL.</li>
        </ul>
      </section>

      <section className="docs-section">
        <h2>See also</h2>
        <p>
          <Link href="/docs/installation">Installation</Link> — How to add EthioWDS to your project. <Link href="/docs/testing">Testing</Link> — What to test before and after deployment.
        </p>
      </section>
    </div>
  )
}
