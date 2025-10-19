import { Inter } from 'next/font/google'
import EthioWDSScript from './components/EthioWDSScript/EthioWDSScript'
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
      <head>
        {/* Remove the Google Fonts link since we're using next/font */}
        {/* Next.js will automatically inject the font CSS */}
      </head>
      <body>
        <EthioWDSScript />
        {children}
      </body>
    </html>
  )
}