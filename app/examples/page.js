import Link from 'next/link'

export default function ExamplesPage() {
  const exampleCategories = [
    {
      title: 'Forms',
      description: 'Form patterns for data entry and validation.',
      examples: [
        { name: 'Forms', path: '/components/forms', description: 'Complete form layouts and field groups' },
        { name: 'Input', path: '/components/input', description: 'Text inputs with labels and validation' },
        { name: 'Select', path: '/components/select', description: 'Dropdowns and multi-select' },
        { name: 'Checkbox & Radio', path: '/components/checkbox', description: 'Checkboxes and radio buttons' },
        { name: 'Textarea', path: '/components/textarea', description: 'Multi-line text input' },
      ]
    },
    {
      title: 'Layout & cards',
      description: 'Layout patterns and card-based content.',
      examples: [
        { name: 'Layout', path: '/components/layout', description: 'Page structure and grid' },
        { name: 'Cards', path: '/components/cards', description: 'Card components and layouts' },
      ]
    },
    {
      title: 'Navigation',
      description: 'Navigation and wayfinding patterns.',
      examples: [
        { name: 'Navigation', path: '/components/navigation', description: 'Header and main nav' },
        { name: 'Breadcrumb', path: '/components/breadcrumb', description: 'Breadcrumb trails' },
        { name: 'Tabs', path: '/components/tabs', description: 'Tabbed content' },
        { name: 'Pagination', path: '/components/pagination', description: 'Page navigation' },
      ]
    },
    {
      title: 'Feedback & overlay',
      description: 'Alerts, modals, and progress indicators.',
      examples: [
        { name: 'Alerts', path: '/components/alerts', description: 'Alert and notification messages' },
        { name: 'Modal', path: '/components/modal', description: 'Modal dialogs' },
        { name: 'Progress', path: '/components/progress', description: 'Progress bars' },
        { name: 'Accordion', path: '/components/accordion', description: 'Collapsible sections' },
      ]
    },
    {
      title: 'Data & search',
      description: 'Displaying data and search patterns.',
      examples: [
        { name: 'Summary', path: '/components/summary', description: 'Summary boxes and highlights' },
        { name: 'Badges', path: '/components/badges', description: 'Badges and tags' },
        { name: 'Avatar', path: '/components/avatar', description: 'Avatar and identity' },
        { name: 'Search', path: '/components/search', description: 'Search input and results' },
      ]
    },
  ]

  return (
    <div className="examples-page" style={{ padding: '2rem 0', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Examples</h1>
      <p className="lead" style={{ fontSize: '1.125rem', color: 'var(--ethio-gray-700)', marginBottom: '2rem' }}>
        Example patterns and component combinations built with EthioWDS. Each link goes to a component page with live examples and usage.
      </p>

      <section style={{ marginBottom: '2rem' }}>
        <p>
          Use these examples as a starting point for forms, layouts, navigation, and more. All components follow the design system tokens and work with Ethiopian localization and accessibility requirements.
        </p>
      </section>

      {exampleCategories.map((category) => (
        <section key={category.title} style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>{category.title}</h2>
          <p style={{ color: 'var(--ethio-gray-700)', marginBottom: '1rem', fontSize: '0.9375rem' }}>
            {category.description}
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {category.examples.map((example) => (
              <li key={example.path} style={{ marginBottom: '0.75rem' }}>
                <Link
                  href={example.path}
                  style={{
                    display: 'block',
                    padding: '0.75rem 1rem',
                    border: '1px solid var(--ethio-gray-200)',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <strong style={{ display: 'block', marginBottom: '0.25rem' }}>{example.name}</strong>
                  <span style={{ fontSize: '0.875rem', color: 'var(--ethio-gray-600)' }}>{example.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section style={{ padding: '1.5rem', background: 'var(--ethio-gray-50)', borderRadius: '8px', marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Browse all components</h2>
        <p style={{ marginBottom: '1rem', fontSize: '0.9375rem' }}>
          See the full list of components with live demos and code.
        </p>
        <Link href="/components" className="eth-button eth-button--primary">
          View all components
        </Link>
      </section>
    </div>
  )
}
