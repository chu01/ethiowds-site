import './Features.scss'

export default function Features() {
  const features = [
    {
      icon: '🎨',
      title: 'Ethiopian Design',
      description: 'Built with Ethiopian colors, typography, and cultural patterns'
    },
    {
      icon: '♿',
      title: 'Accessible',
      description: 'WCAG compliant components for inclusive user experiences'
    },
    {
      icon: '📱',
      title: 'Responsive',
      description: 'Works perfectly on all devices and screen sizes'
    },
    {
      icon: '⚡',
      title: 'Fast & Lightweight',
      description: 'Optimized for performance with minimal bundle size'
    },
    {
      icon: '🔧',
      title: 'Easy to Use',
      description: 'Simple integration with React, Vue, and plain HTML/CSS'
    },
    {
      icon: '🌍',
      title: 'Localized',
      description: 'Support for Ethiopian languages and RTL layouts'
    }
  ]

  return (
    <section className="features-section">
      <div className="eth-container">
        <div className="features-header">
          <h2 className="features-title">Why Choose EthioWDS?</h2>
          <p className="features-subtitle">
            Built specifically for Ethiopian digital products with modern web standards
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}