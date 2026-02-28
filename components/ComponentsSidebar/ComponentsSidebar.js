'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ComponentsSidebar() {
  const pathname = usePathname()

  const isActive = (path) => {
    const normalized = pathname.replace(/\/$/, '') || '/'
    const pathNorm = path.replace(/\/$/, '') || '/'
    return normalized === pathNorm || normalized.startsWith(pathNorm + '/')
  }

  const menuItems = [
    {
      title: 'Basic Components',
      firstPath: '/components/button',
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
      firstPath: '/components/layout',
      items: [
        { name: 'Layout', path: '/components/layout' },
        { name: 'Cards', path: '/components/cards' },
      ]
    },
    {
      title: 'Navigation Components',
      firstPath: '/components/navigation',
      items: [
        { name: 'Navigation', path: '/components/navigation' },
        { name: 'Pagination', path: '/components/pagination' },
        { name: 'Breadcrumb', path: '/components/breadcrumb' },
        { name: 'Tabs', path: '/components/tabs' },
      ]
    },
    {
      title: 'Overlay Components',
      firstPath: '/components/modal',
      items: [
        { name: 'Modal', path: '/components/modal' },
        { name: 'Alerts', path: '/components/alerts' },
      ]
    },
    {
      title: 'Data Display',
      firstPath: '/components/avatar',
      items: [
        { name: 'Avatar', path: '/components/avatar' },
        { name: 'Badges', path: '/components/badges' },
        { name: 'Summary', path: '/components/summary' },
      ]
    },
    {
      title: 'Feedback & Progress',
      firstPath: '/components/progress',
      items: [
        { name: 'Progress', path: '/components/progress' },
        { name: 'Accordion', path: '/components/accordion' },
        { name: 'Search', path: '/components/search' },
      ]
    }
  ]

  const sectionHasActive = (section) =>
    section.items.some((item) => isActive(item.path))

  return (
    <div className="eth-sidenav-wrapper">
      <nav aria-label="Side navigation">
        <ul className="eth-sidenav">
          <li className="eth-sidenav__item">
            <Link
              href="/components"
              className={`eth-sidenav__link ${pathname === '/components' || pathname === '/components/' ? 'eth-sidenav__link--current' : ''}`}
            >
              All Components
            </Link>
          </li>
          {menuItems.map((section) => {
            const showSublist = sectionHasActive(section)
            return (
              <li key={section.title} className="eth-sidenav__item">
                <Link
                  href={section.firstPath}
                  className={`eth-sidenav__link ${showSublist ? 'eth-sidenav__link--current' : ''}`}
                >
                  {section.title}
                </Link>
                {showSublist && (
                  <ul className="eth-sidenav__sublist">
                    {section.items.map((item) => (
                      <li key={item.path} className="eth-sidenav__item">
                        <Link
                          href={item.path}
                          className={`eth-sidenav__link ${isActive(item.path) ? 'eth-sidenav__link--current' : ''}`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
