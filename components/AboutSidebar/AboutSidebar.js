'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AboutSidebar() {
  const pathname = usePathname()
  const [hash, setHash] = useState('')

  useEffect(() => {
    setHash(window.location.hash)
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const isActive = (path) => {
    if (pathname === path) return true
    if (path.includes('#')) {
      const [base, hashPart] = path.split('#')
      return pathname === base && `#${hashPart}` === hash
    }
    return false
  }

  const menuItems = [
    {
      title: 'About',
      items: [
        { name: 'About EthioWDS', path: '/about' },
        { name: 'Our mission', path: '/about#mission' },
        { name: 'Design principles', path: '/about#design-principles' },
        { name: "What's included", path: '/about#whats-included' },
        { name: 'Get involved', path: '/about#get-involved' },
      ]
    },
    {
      title: 'Community & docs',
      items: [
        { name: 'Contributing', path: '/docs/contributing' },
        { name: 'Changelog', path: '/docs/changelog' },
      ]
    },
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