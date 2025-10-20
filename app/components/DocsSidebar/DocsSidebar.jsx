'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import './DocsSidebar.scss'

export default function DocsSidebar() {
  const pathname = usePathname()

  const navItems = [
    {
      title: 'Getting Started',
      items: [
        { name: 'Introduction', href: '/docs' },
        { name: 'Installation', href: '/docs/installation' },
        { name: 'Theming', href: '/docs/theming' },
      ]
    },
    {
      title: 'Foundation',
      items: [
        { name: 'Colors', href: '/docs/colors' },
        { name: 'Typography', href: '/docs/typography' },
        { name: 'Spacing', href: '/docs/spacing' },
      ]
    },
    {
      title: 'Components',
      items: [
        { name: 'Accordion', href: '/docs/components/accordion' },
        { name: 'Alerts', href: '/docs/components/alerts' },
        { name: 'Avatar', href: '/docs/components/avatar' },
        { name: 'Badges', href: '/docs/components/badges' },
        { name: 'Breadcrumb', href: '/docs/components/breadcrumb' },
        { name: 'Buttons', href: '/docs/components/buttons' },
        { name: 'Cards', href: '/docs/components/cards' },
        { name: 'Forms', href: '/docs/components/forms' },
        { name: 'Layout', href: '/docs/components/layout' },
        { name: 'Modal', href: '/docs/components/modal' },
        { name: 'Navigation', href: '/docs/components/navigation' },
        { name: 'Pagination', href: '/docs/components/pagination' },
        { name: 'Progress', href: '/docs/components/progress' },
        { name: 'Search', href: '/docs/components/search' },
        { name: 'Summary Box', href: '/docs/components/summary' },
        { name: 'Tabs', href: '/docs/components/tabs' },        
      ]
    },
    {
      title: 'Utilities',
      items: [
        { name: 'Display', href: '/docs/utilities/display' },
        { name: 'Spacing', href: '/docs/utilities/spacing' },
        { name: 'Colors', href: '/docs/utilities/colors' },
      ]
    }
  ]

  return (
    <aside className="docs-sidebar">
      <div className="sidebar-header">
        <Link href="/" className="sidebar-logo">
          <span className="flag">🇪🇹</span>
          <span>EthioWDS</span>
        </Link>
      </div>
      
      <nav className="sidebar-nav">
        {navItems.map((section, index) => (
          <div key={index} className="nav-section">
            <h3 className="section-title">{section.title}</h3>
            <ul className="nav-list">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className={`nav-link ${pathname === item.href ? 'active' : ''}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}