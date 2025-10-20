'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function DocsSidebar() {
  const pathname = usePathname()

  const isActive = (path) => {
    return pathname === path || pathname.startsWith(path + '/')
  }

  const menuItems = [
    {
      title: 'Getting Started',
      items: [
        { name: 'How to use EthioWDS', path: '/docs/how-to-use-ethiowds' },
        { name: 'Installation', path: '/docs/installation' },
      ]
    },
    {
      title: 'Foundation',
      items: [
        { name: 'Colors', path: '/docs/colors' },
        { name: 'Typography', path: '/docs/typography' },
        { name: 'Spacing', path: '/docs/spacing' },
      ]
    },
    {
      title: 'Components',
      items: [
        { name: 'Button', path: '/components/button' },
        { name: 'Modal', path: '/components/modal' },
        { name: 'Input', path: '/components/input' },
        { name: 'Select', path: '/components/select' },
      ]
    },
    {
      title: 'Utilities',
      items: [
        { name: 'Display', path: '/docs/utilities/display' },
        { name: 'Layout', path: '/docs/utilities/layout' },
        { name: 'Spacing', path: '/docs/utilities/spacing' },
      ]
    }
  ]

  return (
    <aside className="docs-sidebar">
      <div className="sidebar-header">
        <h3>Documentation</h3>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((section, index) => (
          <div key={index} className="sidebar-section">
            <h4 className="sidebar-section-title">{section.title}</h4>
            <ul className="sidebar-menu">
              {section.items.map((item) => (
                <li key={item.path} className="sidebar-menu-item">
                  <Link 
                    href={item.path}
                    className={`sidebar-link ${isActive(item.path) ? 'active' : ''}`}
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