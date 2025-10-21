import Hero from '../components/Hero/Hero'
import Features from '../components/Features/Features'

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Features />
      {/* Add more full-width sections as needed */}
    </div>
  )
}