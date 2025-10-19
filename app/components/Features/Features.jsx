import './Features.scss'

export default function Features() {
  const features = [
    {
      icon: '🎨',
      title: 'Design tokens',
      description: 'Consistent colors, typography, and spacing built for Ethiopian digital products.',
      link: '/docs/design-tokens'
    },
    {
      icon: '🧩',
      title: 'Components',
      description: '15+ reusable, accessible components for faster development.',
      link: '/docs/components'
    },
    {
      icon: '📱',
      title: 'Responsive',
      description: 'Mobile-first components that work on all screen sizes.',
      link: '/docs/layout'
    },
    {
      icon: '♿',
      title: 'Accessible',
      description: 'Built to WCAG 2.1 standards for inclusive user experiences.',
      link: '/docs/accessibility'
    },
    {
      icon: '🇪🇹',
      title: 'Ethiopian identity',
      description: 'Colors and typography that reflect Ethiopian culture and heritage.',
      link: '/docs/ethiopian-identity'
    },
    {
      icon: '⚡',
      title: 'Fast implementation',
      description: 'Easy to install and integrate with your existing projects.',
      link: '/docs/getting-started'
    }
  ]

  return (
    <section className="features">
      <div className="container">
        <div className="features-header">
          <h2>Everything you need to build better digital services</h2>
          <p>EthioWDS provides the tools and guidance to create consistent, accessible, and beautiful Ethiopian digital experiences.</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <a href={feature.link} className="feature-link">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}