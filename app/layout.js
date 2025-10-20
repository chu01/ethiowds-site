import { Inter } from 'next/font/google'
import EthioWDSScript from '../components/EthioWDSScript/EthioWDSScript'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './globals.scss'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'EthioWDS - Ethiopian Web Design System',
  description: 'A comprehensive design system for Ethiopian government websites',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <EthioWDSScript />
        <Header />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}