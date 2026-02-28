import Link from 'next/link'
import ComponentsOverview from './ComponentsOverview'
import './components-layout.scss'

const componentCategories = [
  {
    title: 'Basic Components',
    description: 'Form controls and interactive elements',
    icon: '🛠️',
    components: [
      { name: 'Button', path: '/components/button', description: 'A button draws attention to important actions with a large selectable surface.' },
      { name: 'Input', path: '/components/input', description: 'A text input allows users to enter any combination of letters, numbers, or symbols.' },
      { name: 'Select', path: '/components/select', description: 'A select component allows users to choose one option from a temporary menu.' },
      { name: 'Checkbox', path: '/components/checkbox', description: 'Checkboxes allow users to select one or more options from a list.' },
      { name: 'Radio', path: '/components/radio', description: 'Radio buttons allow users to select exactly one choice from a group.' },
      { name: 'Textarea', path: '/components/textarea', description: 'Multi-line text input for longer content.' },
      { name: 'Forms', path: '/components/forms', description: 'A form allows users to enter information into a page.' },
    ]
  },
  {
    title: 'Layout Components',
    description: 'Structure and container components',
    icon: '📐',
    components: [
      { name: 'Layout', path: '/components/layout', description: 'Overall page layout structures and grid systems.' },
      { name: 'Cards', path: '/components/cards', description: 'Cards contain content and actions about a single subject.' },
    ]
  },
  {
    title: 'Navigation Components',
    description: 'Menus and wayfinding components',
    icon: '🧭',
    components: [
      { name: 'Navigation', path: '/components/navigation', description: 'A header helps users identify where they are and reach main sections of a website.' },
      { name: 'Pagination', path: '/components/pagination', description: 'Pagination is navigation for paginated content.' },
      { name: 'Breadcrumb', path: '/components/breadcrumb', description: 'Breadcrumbs provide secondary navigation to help users understand where they are.' },
      { name: 'Tabs', path: '/components/tabs', description: 'Tabbed navigation to switch between views or sections.' },
    ]
  },
  {
    title: 'Overlay Components',
    description: 'Modal dialogs and notification components',
    icon: '💬',
    components: [
      { name: 'Modal', path: '/components/modal', description: 'A modal disables page content and focuses the user\'s attention on a single task or message.' },
      { name: 'Alerts', path: '/components/alerts', description: 'An alert keeps users informed of important and sometimes time-sensitive changes.' },
    ]
  },
  {
    title: 'Data Display',
    description: 'Components for displaying data and content',
    icon: '📊',
    components: [
      { name: 'Avatar', path: '/components/avatar', description: 'User profile images and identity indicators.' },
      { name: 'Badges', path: '/components/badges', description: 'Badges draw attention to new or categorized content elements.' },
      { name: 'Summary', path: '/components/summary', description: 'A summary box highlights key information from a longer page or displays next steps.' },
    ]
  },
  {
    title: 'Feedback & Progress',
    description: 'User feedback and status components',
    icon: '⚡',
    components: [
      { name: 'Progress', path: '/components/progress', description: 'Progress bars and indicators show completion or loading state.' },
      { name: 'Accordion', path: '/components/accordion', description: 'An accordion is a list of headers that hide or reveal additional content when selected.' },
      { name: 'Search', path: '/components/search', description: 'Search allows users to find specific content by keyword.' },
    ]
  },
]

export default function ComponentsPage() {
  return (
    <div className="components-page components-overview">
      <header className="components-overview__header">
        <h1 className="components-overview__title">Components</h1>
        <p className="components-overview__lead">
          EthioWDS components are simple and consistent solutions to common user-interface needs.
        </p>
      </header>

      <ComponentsOverview componentCategories={componentCategories} />

      <section className="components-overview__cta">
        <h2>Ready to build with EthioWDS?</h2>
        <p>
          Start integrating these components into your Ethiopian web projects. All components are built with accessibility and performance in mind.
        </p>
        <div className="components-overview__cta-buttons">
          <Link href="/docs/installation" className="eth-button eth-button--primary eth-button--large">
            Get started
          </Link>
          <Link href="/docs/how-to-use-ethiowds" className="eth-button eth-button--outline eth-button--large">
            How to use EthioWDS
          </Link>
        </div>
      </section>
    </div>
  )
}
