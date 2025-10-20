import Link from 'next/link'
import './components-layout.scss'

export default function ComponentsPage() {
  const componentCategories = [
    {
      title: 'Basic Components',
      description: 'Form controls and interactive elements',
      icon: '🛠️',
      components: [
        { name: 'Button', path: '/components/button', description: 'Interactive buttons for actions' },
        { name: 'Input', path: '/components/input', description: 'Text input fields' },
        { name: 'Select', path: '/components/select', description: 'Dropdown selection menus' },
        { name: 'Checkbox', path: '/components/checkbox', description: 'Checkbox inputs' },
        { name: 'Radio', path: '/components/radio', description: 'Radio button groups' },
        { name: 'Textarea', path: '/components/textarea', description: 'Multi-line text inputs' },
        { name: 'Forms', path: '/components/forms', description: 'Complete form structures and layouts' },
      ]
    },
    {
      title: 'Layout Components',
      description: 'Structure and container components',
      icon: '📐',
      components: [
        { name: 'Container', path: '/components/container', description: 'Content container with max-width' },
        { name: 'Grid', path: '/components/grid', description: 'CSS grid layout system' },
        { name: 'Layout', path: '/components/layout', description: 'Overall page layout structures' },
        { name: 'Cards', path: '/components/cards', description: 'Card containers for content' },
      ]
    },
    {
      title: 'Navigation Components',
      description: 'Menus and wayfinding components',
      icon: '🧭',
      components: [
        { name: 'Navigation', path: '/components/navigation', description: 'Main navigation menus' },
        { name: 'Pagination', path: '/components/pagination', description: 'Page navigation' },
        { name: 'Breadcrumb', path: '/components/breadcrumb', description: 'Hierarchical navigation' },
        { name: 'Tabs', path: '/components/tabs', description: 'Tabbed navigation and content' },
      ]
    },
    {
      title: 'Overlay Components',
      description: 'Modal dialogs and notification components',
      icon: '💬',
      components: [
        { name: 'Modal', path: '/components/modal', description: 'Dialog boxes and overlays' },
        { name: 'Tooltip', path: '/components/tooltip', description: 'Contextual information tooltips' },
        { name: 'Alerts', path: '/components/alerts', description: 'Notification messages and alerts' },
      ]
    },
    {
      title: 'Data Display',
      description: 'Components for displaying data and content',
      icon: '📊',
      components: [
        { name: 'Table', path: '/components/table', description: 'Data tables' },
        { name: 'List', path: '/components/list', description: 'List layouts' },
        { name: 'Badges', path: '/components/badges', description: 'Status indicators and labels' },
        { name: 'Avatar', path: '/components/avatar', description: 'User profile images and icons' },
        { name: 'Summary', path: '/components/summary', description: 'Data summary and statistics displays' },
      ]
    },
    {
      title: 'Feedback & Progress',
      description: 'User feedback and status components',
      icon: '⚡',
      components: [
        { name: 'Spinner', path: '/components/spinner', description: 'Loading indicators' },
        { name: 'Progress', path: '/components/progress', description: 'Progress bars and indicators' },
        { name: 'Accordion', path: '/components/accordion', description: 'Collapsible content sections' },
        { name: 'Search', path: '/components/search', description: 'Search input and results components' },
      ]
    }
  ]

  return (
    <div className="container">
      <div className="components-page">
        <div className="page-header">
          <h1>Components</h1>
          <p className="lead">
            Browse all available EthioWDS components with examples, usage guidelines, and code snippets. 
            Each component is designed for accessibility, performance, and Ethiopian cultural relevance.
          </p>
        </div>

        <div className="components-grid">
          {componentCategories.map((category, index) => (
            <div key={index} className="category-card">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h2>{category.title}</h2>
              </div>
              <p className="category-description">{category.description}</p>
              
              <div className="components-list">
                {category.components.map((component, compIndex) => (
                  <Link key={compIndex} href={component.path} className="component-link">
                    <div className="component-info">
                      <h3>{component.name}</h3>
                      <p>{component.description}</p>
                    </div>
                    <span className="component-arrow">→</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="components-cta">
          <h2>Get Started with Components</h2>
          <p>
            Ready to use these components in your project? Check out our installation guide 
            and start building accessible Ethiopian digital experiences today.
          </p>
          <div className="cta-buttons">
            <Link href="/docs/installation" className="ethio-btn ethio-btn-primary">
              Installation Guide
            </Link>
            <Link href="/docs/how-to-use-ethiowds" className="ethio-btn ethio-btn-outline">
              How to Use EthioWDS
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}