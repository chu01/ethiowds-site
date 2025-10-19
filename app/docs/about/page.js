export default function AboutPage() {
    return (
      <div className="docs-page">
        <h1>About EthioWDS</h1>
        <p className="lead">
          EthioWDS is an open-source design system built for the Ethiopian government to create consistent, accessible, and beautiful digital experiences.
        </p>
  
        <section className="docs-section">
          <h2>Our Mission</h2>
          <div className="mission-content">
            <p>
              EthioWDS aims to transform digital government services in Ethiopia by providing 
              a unified design system that ensures consistency, accessibility, and efficiency 
              across all government digital platforms.
            </p>
            <p>
              We believe that every Ethiopian citizen deserves accessible, user-friendly digital 
              services that reflect our cultural identity while meeting international standards 
              of quality and accessibility.
            </p>
          </div>
        </section>
  
        <section className="docs-section">
          <h2>What is a Design System?</h2>
          <div className="design-system-explanation">
            <p>
              A design system is a collection of reusable components, guided by clear standards, 
              that can be assembled together to build any number of applications.
            </p>
            
            <div className="system-components">
              <div className="component">
                <h4>🎨 Design Tokens</h4>
                <p>Colors, typography, spacing, and other visual design elements</p>
              </div>
              <div className="component">
                <h4>🧩 Components</h4>
                <p>Reusable UI elements like buttons, forms, and navigation</p>
              </div>
              <div className="component">
                <h4>📖 Patterns</h4>
                <p>Common user interface patterns and best practices</p>
              </div>
              <div className="component">
                <h4>🎯 Guidelines</h4>
                <p>Documentation and standards for implementation</p>
              </div>
            </div>
          </div>
        </section>
  
        <section className="docs-section">
          <h2>Features & Benefits</h2>
          
          <div className="features-grid">
            <div className="feature">
              <h4>🚀 Faster Development</h4>
              <p>Reusable components and clear documentation help teams build consistent interfaces faster.</p>
            </div>
  
            <div className="feature">
              <h4>🎨 Consistent Experience</h4>
              <p>Ensure all government digital services provide a unified, professional user experience.</p>
            </div>
  
            <div className="feature">
              <h4>♿ Built-in Accessibility</h4>
              <p>All components follow WCAG guidelines, making digital services accessible to everyone.</p>
            </div>
  
            <div className="feature">
              <h4>📱 Mobile Responsive</h4>
              <p>Components work seamlessly across all devices and screen sizes.</p>
            </div>
  
            <div className="feature">
              <h4>🇪🇹 Ethiopian Identity</h4>
              <p>Designed specifically for Ethiopian cultural context and user needs.</p>
            </div>
  
            <div className="feature">
              <h4>🔧 Easy Customization</h4>
              <p>Flexible theming system allows customization while maintaining consistency.</p>
            </div>
          </div>
        </section>
  
        <section className="docs-section">
          <h2>Technology Stack</h2>
          
          <div className="tech-stack">
            <div className="tech-category">
              <h4>Core Technologies</h4>
              <ul>
                <li><strong>CSS/Sass</strong> - Styling and theming system</li>
                <li><strong>JavaScript</strong> - Interactive components</li>
                <li><strong>Web Components</strong> - Framework-agnostic components</li>
              </ul>
            </div>
  
            <div className="tech-category">
              <h4>Compatibility</h4>
              <ul>
                <li>All modern browsers</li>
                <li>React, Vue, Angular, and other frameworks</li>
                <li>Static site generators</li>
                <li>Traditional server-rendered applications</li>
              </ul>
            </div>
  
            <div className="tech-category">
              <h4>Build Tools</h4>
              <ul>
                <li>Webpack for bundling</li>
                <li>Sass for CSS preprocessing</li>
                <li>npm for package management</li>
              </ul>
            </div>
          </div>
        </section>
  
        <section className="docs-section">
          <h2>Contributing</h2>
          <p>
            EthioWDS is an open-source project and we welcome contributions from the community. 
            Whether you're a designer, developer, or content writer, there are many ways to contribute.
          </p>
          
          <div className="contribution-options">
            <div className="contribution">
              <h4>🐛 Report Issues</h4>
              <p>Found a bug or have a suggestion? Create an issue on our GitHub repository.</p>
            </div>
  
            <div className="contribution">
              <h4>💻 Submit Code</h4>
              <p>Help us improve components or add new features through pull requests.</p>
            </div>
  
            <div className="contribution">
              <h4>📖 Improve Documentation</h4>
              <p>Help make our documentation clearer and more comprehensive.</p>
            </div>
  
            <div className="contribution">
              <h4>🎨 Design Contributions</h4>
              <p>Contribute design improvements, new components, or better user flows.</p>
            </div>
          </div>
  
          <div className="cta-section">
            <a 
              href="https://github.com/chu01/ethiowds" 
              className="button button-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit GitHub Repository
            </a>
          </div>
        </section>
  
        <section className="docs-section">
          <h2>License</h2>
          <p>
            EthioWDS is released under the MIT License. This means you can use, modify, 
            and distribute the software freely, including for commercial purposes.
          </p>
          <p>
            We believe in open source and the power of community collaboration to create 
            better digital experiences for all Ethiopians.
          </p>
        </section>
      </div>
    )
  }