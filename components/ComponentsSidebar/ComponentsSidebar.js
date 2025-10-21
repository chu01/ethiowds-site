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
      icon: '🛠️',
      items: [
        { name: 'Button', path: '/components/button', icon: '🔘' },
        { name: 'Input', path: '/components/input', icon: '📝' },
        { name: 'Select', path: '/components/select', icon: '📋' },
        { name: 'Checkbox', path: '/components/checkbox', icon: '☑️' },
        { name: 'Radio', path: '/components/radio', icon: '🔘' },
        { name: 'Textarea', path: '/components/textarea', icon: '📄' },
        { name: 'Forms', path: '/components/forms', icon: '📊' },
      ]
    },
    {
      title: 'Layout Components',
      icon: '📐',
      items: [
        { name: 'Container', path: '/components/container', icon: '📦' },
        { name: 'Grid', path: '/components/grid', icon: '🔳' },
        { name: 'Layout', path: '/components/layout', icon: '🏗️' },
        { name: 'Cards', path: '/components/cards', icon: '🎴' },
      ]
    },
    {
      title: 'Navigation Components',
      icon: '🧭',
      items: [
        { name: 'Navigation', path: '/components/navigation', icon: '🍔' },
        { name: 'Pagination', path: '/components/pagination', icon: '🔢' },
        { name: 'Breadcrumb', path: '/components/breadcrumb', icon: '🍞' },
        { name: 'Tabs', path: '/components/tabs', icon: '📑' },
      ]
    },
    {
      title: 'Overlay Components',
      icon: '💬',
      items: [
        { name: 'Modal', path: '/components/modal', icon: '💬' },
        { name: 'Tooltip', path: '/components/tooltip', icon: '💡' },
        { name: 'Alerts', path: '/components/alerts', icon: '⚠️' },
      ]
    },
    {
      title: 'Data Display',
      icon: '📊',
      items: [
        { name: 'Table', path: '/components/table', icon: '📋' },
        { name: 'List', path: '/components/list', icon: '📜' },
        { name: 'Badges', path: '/components/badges', icon: '🎯' },
        { name: 'Avatar', path: '/components/avatar', icon: '👤' },
        { name: 'Summary', path: '/components/summary', icon: '📈' },
      ]
    },
    {
      title: 'Feedback & Progress',
      icon: '⚡',
      items: [
        { name: 'Spinner', path: '/components/spinner', icon: '⏳' },
        { name: 'Progress', path: '/components/progress', icon: '📊' },
        { name: 'Accordion', path: '/components/accordion', icon: '📖' },
        { name: 'Search', path: '/components/search', icon: '🔍' },
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
          <span className="eth-sidebar__brand-text">Components</span>
        </div>
      </div>
      
      {/* Sidebar Navigation */}
      <nav className="eth-sidebar__nav">
        {/* All Components Link */}
        <div className="eth-sidebar__section">
          <ul className="eth-sidebar__list">
            <li>
              <Link 
                href="/components"
                className={`eth-sidebar__item ${isActive('/components') && !pathname.includes('/components/') ? 'eth-sidebar__item--active' : ''}`}
              >
                <span className="eth-sidebar__item-icon">📦</span>
                <span className="eth-sidebar__item-text">All Components</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Component Sections */}
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
      </nav>
    </aside>
  )
}