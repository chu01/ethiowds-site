'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function ComponentsSidebar() {
  const pathname = usePathname()
  const [expandedSections, setExpandedSections] = useState({})

  const isActive = (path) => {
    return pathname === path || pathname.startsWith(path + '/')
  }

  const menuItems = [
    {
      title: 'Basic Components',
      items: [
        { name: 'Button', path: '/components/button' },
        { name: 'Input', path: '/components/input' },
        { name: 'Select', path: '/components/select' },
        { name: 'Checkbox', path: '/components/checkbox' },
        { name: 'Radio', path: '/components/radio' },
        { name: 'Textarea', path: '/components/textarea' },
        { name: 'Forms', path: '/components/forms' },
      ]
    },
    {
      title: 'Layout Components',
      items: [
        { name: 'Container', path: '/components/container' },
        { name: 'Grid', path: '/components/grid' },
        { name: 'Layout', path: '/components/layout' },
        { name: 'Cards', path: '/components/cards' },
      ]
    },
    {
      title: 'Navigation Components',
      items: [
        { name: 'Navigation', path: '/components/navigation' },
        { name: 'Pagination', path: '/components/pagination' },
        { name: 'Breadcrumb', path: '/components/breadcrumb' },
        { name: 'Tabs', path: '/components/tabs' },
      ]
    },
    {
      title: 'Overlay Components',
      items: [
        { name: 'Modal', path: '/components/modal' },
        { name: 'Tooltip', path: '/components/tooltip' },
        { name: 'Alerts', path: '/components/alerts' },
      ]
    },
    {
      title: 'Data Display',
      items: [
        { name: 'Table', path: '/components/table' },
        { name: 'List', path: '/components/list' },
        { name: 'Badges', path: '/components/badges' },
        { name: 'Avatar', path: '/components/avatar' },
        { name: 'Summary', path: '/components/summary' },
      ]
    },
    {
      title: 'Feedback & Progress',
      items: [
        { name: 'Spinner', path: '/components/spinner' },
        { name: 'Progress', path: '/components/progress' },
        { name: 'Accordion', path: '/components/accordion' },
        { name: 'Search', path: '/components/search' },
      ]
    }
  ]

  // Initialize expanded sections based on current path
  useEffect(() => {
    const initialExpandedState = {}
    menuItems.forEach((section, index) => {
      // Check if any item in this section is active
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
    return expandedSections[index] !== false // Default to true if not set
  }

  return (
    <aside className="components-sidebar">
      <div className="sidebar-header">
        <h3>Components</h3>
      </div>
      
      <nav className="sidebar-nav">
        <div className="sidebar-section">
          <ul className="sidebar-menu">
            <li className="sidebar-menu-item">
              <Link 
                href="/components"
                className={`sidebar-link ${isActive('/components') && !pathname.includes('/components/') ? 'active' : ''}`}
              >
                All Components
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
      </nav>
    </aside>
  )
}