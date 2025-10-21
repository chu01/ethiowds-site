import Link from 'next/link'
import './components-layout.scss'

export default function ComponentsPage() {
  const componentCategories = [
    {
      title: 'Basic Components',
      description: 'Form controls and interactive elements',
      icon: '🛠️',
      components: [
        { name: 'Button', path: '/components/button', description: 'Interactive buttons for actions', status: 'stable' },
        { name: 'Input', path: '/components/input', description: 'Text input fields', status: 'stable' },
        { name: 'Select', path: '/components/select', description: 'Dropdown selection menus', status: 'stable' },
        { name: 'Checkbox', path: '/components/checkbox', description: 'Checkbox inputs', status: 'stable' },
        { name: 'Radio', path: '/components/radio', description: 'Radio button groups', status: 'stable' },
        { name: 'Textarea', path: '/components/textarea', description: 'Multi-line text inputs', status: 'stable' },
        { name: 'Forms', path: '/components/forms', description: 'Complete form structures and layouts', status: 'stable' },
        { name: 'Switch', path: '/components/switch', description: 'Toggle switches', status: 'stable' },
      ]
    },
    {
      title: 'Layout Components',
      description: 'Structure and container components',
      icon: '📐',
      components: [
        { name: 'Container', path: '/components/container', description: 'Content container with max-width', status: 'stable' },
        { name: 'Grid', path: '/components/grid', description: 'CSS grid layout system', status: 'stable' },
        { name: 'Flex Grid', path: '/components/flex-grid', description: 'Flexbox-based grid system', status: 'stable' },
        { name: 'Layout', path: '/components/layout', description: 'Overall page layout structures', status: 'stable' },
        { name: 'Cards', path: '/components/cards', description: 'Card containers for content', status: 'stable' },
        { name: 'Divider', path: '/components/divider', description: 'Horizontal and vertical dividers', status: 'stable' },
      ]
    },
    {
      title: 'Navigation Components',
      description: 'Menus and wayfinding components',
      icon: '🧭',
      components: [
        { name: 'Navigation', path: '/components/navigation', description: 'Main navigation menus', status: 'stable' },
        { name: 'Sidebar', path: '/components/sidebar', description: 'Collapsible sidebar navigation', status: 'stable' },
        { name: 'Pagination', path: '/components/pagination', description: 'Page navigation', status: 'stable' },
        { name: 'Breadcrumb', path: '/components/breadcrumb', description: 'Hierarchical navigation', status: 'stable' },
        { name: 'Tabs', path: '/components/tabs', description: 'Tabbed navigation and content', status: 'stable' },
        { name: 'Language Switcher', path: '/components/language-switcher', description: 'Multi-language navigation', status: 'stable' },
      ]
    },
    {
      title: 'Overlay Components',
      description: 'Modal dialogs and notification components',
      icon: '💬',
      components: [
        { name: 'Modal', path: '/components/modal', description: 'Dialog boxes and overlays', status: 'stable' },
        { name: 'Tooltip', path: '/components/tooltip', description: 'Contextual information tooltips', status: 'stable' },
        { name: 'Toast', path: '/components/toast', description: 'Temporary notification messages', status: 'stable' },
        { name: 'Alerts', path: '/components/alerts', description: 'Notification messages and alerts', status: 'stable' },
      ]
    },
    {
      title: 'Data Display',
      description: 'Components for displaying data and content',
      icon: '📊',
      components: [
        { name: 'Table', path: '/components/table', description: 'Data tables with sorting', status: 'stable' },
        { name: 'Avatar', path: '/components/avatar', description: 'User profile images and icons', status: 'stable' },
        { name: 'Badges', path: '/components/badges', description: 'Status indicators and labels', status: 'stable' },
        { name: 'Summary', path: '/components/summary', description: 'Data summary and statistics displays', status: 'stable' },
        { name: 'Skeleton', path: '/components/skeleton', description: 'Loading placeholders for content', status: 'stable' },
      ]
    },
    {
      title: 'Feedback & Progress',
      description: 'User feedback and status components',
      icon: '⚡',
      components: [
        { name: 'Progress', path: '/components/progress', description: 'Progress bars and indicators', status: 'stable' },
        { name: 'Accordion', path: '/components/accordion', description: 'Collapsible content sections', status: 'stable' },
        { name: 'Search', path: '/components/search', description: 'Search input and results components', status: 'stable' },
      ]
    },
    {
      title: 'Form Components',
      description: 'Advanced form controls and groups',
      icon: '📝',
      components: [
        { name: 'Radio Group', path: '/components/radio-group', description: 'Grouped radio button controls', status: 'stable' },
        { name: 'Checkbox Group', path: '/components/checkbox-group', description: 'Grouped checkbox controls', status: 'stable' },
        { name: 'Select (Enhanced)', path: '/components/select-enhanced', description: 'Custom select with search', status: 'stable' },
      ]
    },
    {
      title: 'Utility Components',
      description: 'Helper components and utilities',
      icon: '🔧',
      components: [
        { name: 'Display Utilities', path: '/components/display', description: 'Display and visibility helpers', status: 'stable' },
        { name: 'Spacing Utilities', path: '/components/spacing', description: 'Margin and padding utilities', status: 'stable' },
        { name: 'Color Utilities', path: '/components/color-utilities', description: 'Color and background helpers', status: 'stable' },
        { name: 'Layout Utilities', path: '/components/layout-utilities', description: 'Position and layout helpers', status: 'stable' },
      ]
    }
  ]

  const totalComponents = componentCategories.reduce((total, category) => total + category.components.length, 0)

  return (
    <div className="components-page">
      <div className="page-header">
        <div className="header-content">
          <h1 className="page-title">EthioWDS Components</h1>
          <p className="page-subtitle">
            A comprehensive collection of {totalComponents}+ components designed for modern Ethiopian web applications. 
            Each component is built with accessibility, performance, and cultural relevance in mind.
          </p>
          <div className="component-stats">
            <div className="stat">
              <span className="stat-number">{totalComponents}+</span>
              <span className="stat-label">Components</span>
            </div>
            <div className="stat">
              <span className="stat-number">6</span>
              <span className="stat-label">Categories</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Accessible</span>
            </div>
          </div>
        </div>
      </div>

      <div className="components-grid">
        {componentCategories.map((category, index) => (
          <div key={index} className="category-card">
            <div className="category-header">
              <div className="category-icon-wrapper">
                <span className="category-icon">{category.icon}</span>
              </div>
              <div className="category-title-wrapper">
                <h2 className="category-title">{category.title}</h2>
                <span className="component-count">{category.components.length} components</span>
              </div>
            </div>
            <p className="category-description">{category.description}</p>
            
            <div className="components-list">
              {category.components.map((component, compIndex) => (
                <Link key={compIndex} href={component.path} className="component-link">
                  <div className="component-info">
                    <div className="component-header">
                      <h3 className="component-name">{component.name}</h3>
                      {component.status && (
                        <span className={`status-badge status-${component.status}`}>
                          {component.status}
                        </span>
                      )}
                    </div>
                    <p className="component-description">{component.description}</p>
                  </div>
                  <span className="component-arrow">→</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="components-cta">
        <div className="cta-content">
          <h2>Ready to Build with EthioWDS?</h2>
          <p>
            Start integrating these components into your Ethiopian web projects today. 
            All components are production-ready and optimized for performance.
          </p>
          <div className="cta-buttons">
            <Link href="/docs/installation" className="eth-button eth-button--primary eth-button--large">
              Get Started
            </Link>
            <Link href="/docs/components" className="eth-button eth-button--outline eth-button--large">
              View Documentation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}