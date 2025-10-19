import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'

export default function Home() {
  return (
    <main className="home-page">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </main>
  )
}