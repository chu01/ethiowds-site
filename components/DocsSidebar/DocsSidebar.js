'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function DocsSidebar() {
  const pathname = usePathname()
  const [expandedSections, setExpandedSections] = useState({})

  const isActive = (path) => {
    return pathname === path || pathname.startsWith(path + '/')
  }

  const menuItems = [
    {
      title: 'Getting Started',
      items: [
        { name: 'Introduction', path: '/docs' },
        { name: 'Installation', path: '/docs/installation' },
        { name: 'Quick Start', path: '/docs/quick-start' },
        { name: 'How to Use EthioWDS', path: '/docs/how-to-use-ethiowds' },
      ]
    },
    {
      title: 'Foundations',
      items: [
        { name: 'Design Principles', path: '/docs/design-principles' },
        { name: 'Colors', path: '/docs/colors' },
        { name: 'Typography', path: '/docs/typography' },
        { name: 'Spacing', path: '/docs/spacing' },
        { name: 'Breakpoints', path: '/docs/breakpoints' },
      ]
    },
    {
      title: 'Customization',
      items: [
        { name: 'Theming', path: '/docs/theming' },
        { name: 'CSS Variables', path: '/docs/css-variables' },
        { name: 'Custom Components', path: '/docs/custom-components' },
      ]
    },
    {
      title: 'Guides',
      items: [
        { name: 'Accessibility', path: '/docs/accessibility' },
        { name: 'Best Practices', path: '/docs/best-practices' },
        { name: 'Ethiopian Localization', path: '/docs/ethiopian-localization' },
        { name: 'Performance', path: '/docs/performance' },
      ]
    },
    {
      title: 'Development',
      items: [
        { name: 'Contributing', path: '/docs/contributing' },
        { name: 'Code Standards', path: '/docs/code-standards' },
        { name: 'Testing', path: '/docs/testing' },
        { name: 'Deployment', path: '/docs/deployment' },
      ]
    }
  ]

  // Initialize expanded sections based on current path
  useEffect(() => {
    const initialExpandedState = {}
    menuItems.forEach((section, index) => {
      const hasActiveItem = section.items.some(item => isActive(item.path))
      initialExpandedState[index] = hasActiveItem
    })
    setExpandedSections(initialExpandedState)
  }, [pathname])

  const toggleSection = (index) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const isSectionExpanded = (index) => {
    return expandedSections[index] !== false
  }

  return (
    <div className="docs-sidebar">
      <div className="sidebar-header">
        <h3>Documentation</h3>
      </div>
      
      <nav className="sidebar-nav">
        <div className="sidebar-section">
          <ul className="sidebar-menu">
            <li className="sidebar-menu-item">
              <Link 
                href="/docs"
                className={`sidebar-link ${isActive('/docs') && !pathname.includes('/docs/') ? 'active' : ''}`}
              >
                Overview
              </Link>
            </li>
          </ul>
        </div>

        {menuItems.map((section, index) => {
          const isExpanded = isSectionExpanded(index)
          
          return (
            <div key={index} className="sidebar-section">
              <button 
                className="sidebar-section-title"
                onClick={() => toggleSection(index)}
                aria-expanded={isExpanded}
              >
                {section.title}
                <span className="section-toggle">
                  {isExpanded ? '−' : '+'}
                </span>
              </button>
              
              {isExpanded && (
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
              )}
            </div>
          )
        })}

        {/* Quick links to components */}
        <div className="sidebar-section">
          <div className="sidebar-section-title">
            Resources
          </div>
          <ul className="sidebar-menu">
            <li className="sidebar-menu-item">
              <Link href="/components" className="sidebar-link">
                All Components
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <Link href="/examples" className="sidebar-link">
                Examples
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <a href="https://github.com/your-username/ethiowds" className="sidebar-link" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}