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
            <Link href="#colors">Colors</Link>
            <Link href="#components">Components</Link>
            <Link href="#usage">Usage</Link>
            <Link href="#get-started" className="nav-button">
              Get Started
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}