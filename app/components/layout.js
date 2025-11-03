import ComponentsSidebar from '../../components/ComponentsSidebar/ComponentsSidebar'
import PageContainer from '../../components/PageContainer'
import '@abiyub/ethiowds/dist/css/ethio-wds.css';
import './components-layout.scss'

export const metadata = {
  title: 'Components - EthioWDS',
  description: 'Browse all EthioWDS components with examples and usage guidelines',
}

export default function ComponentsLayout({ children }) {
  return (
    <PageContainer className="components-page-container" >
      <div className="components-layout-inner">
        <ComponentsSidebar />
        <main className="components-main">
          <div className="components-content">
            {children}
          </div>
        </main>
      </div>
    </PageContainer>
  )
}