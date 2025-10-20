'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AboutSidebar() {
  const pathname = usePathname()

  const isActive = (path) => {
    return pathname === path
  }

  const menuItems = [
    {
      title: 'About',
      items: [
        { name: 'What is EthioWDS?', path: '/about' },
        { name: 'Our mission', path: '/about/mission' },
        { name: 'Design principles', path: '/about/design-principles' },
        { name: 'Release notes', path: '/about/release-notes' },
      ]
    },
    {
      title: 'Community',
      items: [
        { name: 'Contributing', path: '/about/contributing' },
        { name: 'Code of conduct', path: '/about/code-of-conduct' },
        { name: 'Community guidelines', path: '/about/community-guidelines' },
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Research', path: '/about/research' },
        { name: 'Articles', path: '/about/articles' },
        { name: 'Tools', path: '/about/tools' },
      ]
    }
  ]

  return (
    <aside className="about-sidebar">
      <div className="sidebar-header">
        <h3>About EthioWDS</h3>
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