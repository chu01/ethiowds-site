import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import ColorShowcase from './components/ColorShowcase/ColorShowcase'
import './globals.scss'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ColorShowcase />
      
      <section style={{ padding: '4rem 0', textAlign: 'center', background: '#f8f9fa' }}>
        <div className="container">
          <h2>More Components Coming Soon</h2>
          <p>Buttons, forms, navigation, and more Ethiopian-styled components</p>
        </div>
      </section>
    </main>
  )
}