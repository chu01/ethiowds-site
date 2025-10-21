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
      icon: '🚀',
      items: [
        { name: 'Introduction', path: '/docs', icon: '📖' },
        { name: 'Installation', path: '/docs/installation', icon: '📦' },
        { name: 'Quick Start', path: '/docs/quick-start', icon: '⚡' },
        { name: 'How to Use EthioWDS', path: '/docs/how-to-use-ethiowds', icon: '🔧' },
      ]
    },
    {
      title: 'Foundations',
      icon: '🏗️',
      items: [
        { name: 'Design Principles', path: '/docs/design-principles', icon: '🎯' },
        { name: 'Colors', path: '/docs/colors', icon: '🎨' },
        { name: 'Typography', path: '/docs/typography', icon: '🔤' },
        { name: 'Spacing', path: '/docs/spacing', icon: '📏' },
        { name: 'Breakpoints', path: '/docs/breakpoints', icon: '📱' },
      ]
    },
    {
      title: 'Customization',
      icon: '🎨',
      items: [
        { name: 'Theming', path: '/docs/theming', icon: '🌈' },
        { name: 'CSS Variables', path: '/docs/css-variables', icon: '💄' },
        { name: 'Custom Components', path: '/docs/custom-components', icon: '⚙️' },
      ]
    },
    {
      title: 'Guides',
      icon: '📚',
      items: [
        { name: 'Accessibility', path: '/docs/accessibility', icon: '♿' },
        { name: 'Best Practices', path: '/docs/best-practices', icon: '✅' },
        { name: 'Ethiopian Localization', path: '/docs/ethiopian-localization', icon: '🇪🇹' },
        { name: 'Performance', path: '/docs/performance', icon: '⚡' },
      ]
    },
    {
      title: 'Development',
      icon: '💻',
      items: [
        { name: 'Contributing', path: '/docs/contributing', icon: '🤝' },
        { name: 'Code Standards', path: '/docs/code-standards', icon: '📝' },
        { name: 'Testing', path: '/docs/testing', icon: '🧪' },
        { name: 'Deployment', path: '/docs/deployment', icon: '🚀' },
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
    <aside className="eth-sidebar" style={{ width: '280px', flexShrink: 0 }}>
      {/* Sidebar Header */}
      <div className="eth-sidebar__header">
        <div className="eth-sidebar__brand">
          <span className="eth-sidebar__brand-text">Documentation</span>
        </div>
      </div>
      
      {/* Sidebar Navigation */}
      <nav className="eth-sidebar__nav">
        {/* Overview Link */}
        <div className="eth-sidebar__section">
          <ul className="eth-sidebar__list">
            <li>
              <Link 
                href="/docs"
                className={`eth-sidebar__item ${isActive('/docs') && !pathname.includes('/docs/') ? 'eth-sidebar__item--active' : ''}`}
              >
                <span className="eth-sidebar__item-icon">📖</span>
                <span className="eth-sidebar__item-text">Overview</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Documentation Sections */}
        {menuItems.map((section, index) => {
          const isExpanded = isSectionExpanded(index)
          
          return (
            <div key={index} className="eth-sidebar__section">
              {/* Section Header */}
              <button 
                className={`eth-sidebar__item ${isExpanded ? 'eth-sidebar__item--active' : ''}`}
                onClick={() => toggleSection(index)}
                aria-expanded={isExpanded}
                style={{ 
                  width: '100%', 
                  textAlign: 'left',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer'
                }}
              >
                <span className="eth-sidebar__item-icon">{section.icon}</span>
                <span className="eth-sidebar__item-text">{section.title}</span>
                <span 
                  className="eth-sidebar__item-chevron"
                  style={{ 
                    marginLeft: 'auto',
                    transform: isExpanded ? 'rotate(0deg)' : 'rotate(-90deg)',
                    transition: 'transform 0.2s ease'
                  }}
                >
                  ▾
                </span>
              </button>
              
              {/* Section Items */}
              {isExpanded && (
                <ul className="eth-sidebar__list">
                  {section.items.map((item) => (
                    <li key={item.path}>
                      <Link 
                        href={item.path}
                        className={`eth-sidebar__item ${isActive(item.path) ? 'eth-sidebar__item--active' : ''}`}
                        style={{ paddingLeft: '2.5rem' }}
                      >
                        <span className="eth-sidebar__item-icon" style={{ fontSize: '0.8rem' }}>
                          {item.icon}
                        </span>
                        <span className="eth-sidebar__item-text">{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )
        })}

        {/* Resources Section */}
        <div className="eth-sidebar__section">
          <div className="eth-sidebar__item" style={{ fontWeight: '600', background: 'var(--ethio-gray-50)' }}>
            <span className="eth-sidebar__item-icon">🔗</span>
            <span className="eth-sidebar__item-text">Resources</span>
          </div>
          <ul className="eth-sidebar__list">
            <li>
              <Link href="/components" className="eth-sidebar__item" style={{ paddingLeft: '2.5rem' }}>
                <span className="eth-sidebar__item-icon" style={{ fontSize: '0.8rem' }}>📦</span>
                <span className="eth-sidebar__item-text">All Components</span>
              </Link>
            </li>
            <li>
              <Link href="/examples" className="eth-sidebar__item" style={{ paddingLeft: '2.5rem' }}>
                <span className="eth-sidebar__item-icon" style={{ fontSize: '0.8rem' }}>🎯</span>
                <span className="eth-sidebar__item-text">Examples</span>
              </Link>
            </li>
            <li>
              <a 
                href="https://github.com/chu01/ethioWDS" 
                className="eth-sidebar__item" 
                style={{ paddingLeft: '2.5rem' }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="eth-sidebar__item-icon" style={{ fontSize: '0.8rem' }}>🐙</span>
                <span className="eth-sidebar__item-text">GitHub</span>
                <span className="eth-sidebar__item-icon" style={{ fontSize: '0.7rem', marginLeft: 'auto' }}>↗</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  )
}