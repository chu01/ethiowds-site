import Link from 'next/link'
import './Header.scss'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link href="/" className="logo">
            <span className="flag">🇪🇹</span>
            <span>EthioWDS</span>
          </Link>
          
          <nav className="nav">
            <Link href="/docs">Documentation</Link>
            <Link href="/docs/components/buttons">Components</Link>
            <Link href="/docs/colors">Colors</Link>
            <Link href="https://github.com/chu01/ethiowds" className="nav-button">
              GitHub
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}