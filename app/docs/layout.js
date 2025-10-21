import DocsSidebar from '../../components/DocsSidebar/DocsSidebar'
import PageContainer from '../../components/PageContainer'
import '@abiyub/ethiowds/dist/css/ethio-wds.css'
import './docs.scss'

export default function DocsLayout({ children }) {
  return (
    <PageContainer className="docs-page-container"> {/* Remove fullWidth */}
      <div className="docs-layout">
        <DocsSidebar />
        <main className="docs-main">
          <div className="docs-content-wrapper">
            {children}
          </div>
        </main>
      </div>
    </PageContainer>
  )
}