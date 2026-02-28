'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function DocsSidebar() {
  const pathname = usePathname()

  const isActive = (path) => {
    const normalized = pathname.replace(/\/$/, '') || '/'
    const pathNorm = path.replace(/\/$/, '') || '/'
    if (pathNorm === '/docs') return normalized === '/docs'
    return normalized === pathNorm || normalized.startsWith(pathNorm + '/')
  }

  const menuItems = [
    {
      title: 'Getting Started',
      firstPath: '/docs',
      items: [
        { name: 'Introduction', path: '/docs' },
        { name: 'Installation', path: '/docs/installation' },
        { name: 'How to Use EthioWDS', path: '/docs/how-to-use-ethiowds' },
      ]
    },
    {
      title: 'Foundations',
      firstPath: '/docs/colors',
      items: [
        { name: 'Colors', path: '/docs/colors' },
        { name: 'Typography', path: '/docs/typography' },
        { name: 'Spacing', path: '/docs/spacing' },
        { name: 'Breakpoints', path: '/docs/breakpoints' },
      ]
    },
    {
      title: 'Customization',
      firstPath: '/docs/theming',
      items: [
        { name: 'Theming', path: '/docs/theming' },
        { name: 'CSS Variables', path: '/docs/css-variables' },
        { name: 'Custom Components', path: '/docs/custom-components' },
      ]
    },
    {
      title: 'Guides',
      firstPath: '/docs/accessibility',
      items: [
        { name: 'Accessibility', path: '/docs/accessibility' },
        { name: 'Ethiopian Localization', path: '/docs/ethiopian-localization' },
      ]
    },
    {
      title: 'Development',
      firstPath: '/docs/contributing',
      items: [
        { name: 'Contributing', path: '/docs/contributing' },
        { name: 'Code Standards', path: '/docs/code-standards' },
        { name: 'Testing', path: '/docs/testing' },
        { name: 'Deployment', path: '/docs/deployment' },
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
              href="/docs"
              className={`eth-sidenav__link ${isActive('/docs') ? 'eth-sidenav__link--current' : ''}`}
            >
              Introduction
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
          <li className="eth-sidenav__item">
            <Link
              href="/components"
              className={`eth-sidenav__link ${pathname === '/components' || pathname === '/components/' ? 'eth-sidenav__link--current' : ''}`}
            >
              All Components
            </Link>
          </li>
          <li className="eth-sidenav__item">
            <Link href="/examples" className="eth-sidenav__link">
              Examples
            </Link>
          </li>
          <li className="eth-sidenav__item">
            <a
              href="https://github.com/chu01/ethioWDS"
              className="eth-sidenav__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
