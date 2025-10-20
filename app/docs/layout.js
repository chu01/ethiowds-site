import DocsSidebar from '../../components/DocsSidebar/DocsSidebar'
import './docs.scss'

export default function DocsLayout({ children }) {
  return (
    <div className="container">
      <div className="docs-layout">
        <DocsSidebar />
        <main className="docs-main">
          <div className="docs-content-wrapper">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}