import DocsSidebar from '../components/DocsSidebar/DocsSidebar'
import './docs.scss'

export const metadata = {
  title: 'EthioWDS Documentation',
  description: 'Complete documentation for EthioWDS - Ethiopian Web Design System',
}

export default function DocsLayout({ children }) {
  return (
    <div className="docs-layout">
      <DocsSidebar />
      <main className="docs-main">
        <div className="docs-content">
          {children}
        </div>
      </main>
    </div>
  )
}