import './docs.scss'

export const metadata = {
  title: 'EthioWDS Documentation - Ethiopian Web Design System',
  description: 'Comprehensive documentation for EthioWDS design system',
}

export default function DocsLayout({ children }) {
  return (
    <div className="container">
      <div className="docs-layout">
        {/* Temporarily remove DocsSidebar to fix build */}
        <div style={{ width: '280px' }}></div>
        <div className="docs-content">
          {children}
        </div>
      </div>
    </div>
  )
}