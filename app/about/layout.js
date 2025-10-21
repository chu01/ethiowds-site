import AboutSidebar from '../../components/AboutSidebar/AboutSidebar'
import PageContainer from '../../components/PageContainer'
import '@abiyub/ethiowds/dist/css/ethio-wds.css'
import './about-layout.scss'

export const metadata = {
  title: 'About - EthioWDS',
  description: 'Learn about the Ethiopian Web Design System',
}

export default function AboutLayout({ children }) {
  return (
    <PageContainer className="about-page-container">
      <div className="about-layout">
        <AboutSidebar />
        <div className="about-content">
          {children}
        </div>
      </div>
    </PageContainer>
  )
}