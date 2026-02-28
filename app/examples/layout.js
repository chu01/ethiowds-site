import PageContainer from '../../components/PageContainer'
import '@abiyub/ethiowds/dist/css/ethio-wds.css'
import './examples.scss'

export const metadata = {
  title: 'Examples - EthioWDS',
  description: 'Example patterns and component combinations using the Ethiopian Web Design System',
}

export default function ExamplesLayout({ children }) {
  return (
    <PageContainer className="examples-page-container">
      {children}
    </PageContainer>
  )
}
