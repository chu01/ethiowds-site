import { Inter } from 'next/font/google'
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
    <html lang="en">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Ethiopic:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}