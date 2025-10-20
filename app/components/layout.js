import ComponentsSidebar from '../../components/ComponentsSidebar/ComponentsSidebar'
import './components-layout.scss'

export const metadata = {
  title: 'Components - EthioWDS',
  description: 'Browse all EthioWDS components with examples and usage guidelines',
}

export default function ComponentsLayout({ children }) {
  return (
    <div className="container">
      <div className="components-layout">
        <ComponentsSidebar />
        <div className="components-content">
          {children}
        </div>
      </div>
    </div>
  )
}