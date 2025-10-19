export default function BreadcrumbPage() {
  return (
    <div className="docs-page">
      <h1>Breadcrumb</h1>
      <p className="lead">
        Navigation component showing the current page&apos;s location within a hierarchical structure.
      </p>
  
        <section className="docs-section">
          <h2>Design Principles</h2>
          
          <div className="principles-grid">
            <div className="principle-card">
              <h3>🇪🇹 Ethiopian Identity</h3>
              <p>Create digital experiences that reflect Ethiopian culture, values, and visual identity while maintaining global standards.</p>
              <ul>
                <li>Use Ethiopian color palette and symbols appropriately</li>
                <li>Support Amharic and other Ethiopian languages</li>
                <li>Respect cultural context and local needs</li>
              </ul>
            </div>
  
            <div className="principle-card">
              <h3>♿ Accessibility First</h3>
              <p>Ensure digital services are usable by everyone, including people with disabilities.</p>
              <ul>
                <li>Follow WCAG 2.1 AA standards</li>
                <li>Provide keyboard navigation</li>
                <li>Ensure sufficient color contrast</li>
                <li>Support screen readers</li>
              </ul>
            </div>
  
            <div className="principle-card">
              <h3>📱 Mobile First</h3>
              <p>Design for mobile devices first, then enhance for larger screens.</p>
              <ul>
                <li>Consider limited bandwidth and data usage</li>
                <li>Optimize for touch interactions</li>
                <li>Ensure readability on small screens</li>
                <li>Test on actual mobile devices</li>
              </ul>
            </div>
  
            <div className="principle-card">
              <h3>🎯 Consistency</h3>
              <p>Maintain visual and functional consistency across all government digital services.</p>
              <ul>
                <li>Use standardized components and patterns</li>
                <li>Follow established design tokens</li>
                <li>Maintain consistent interaction patterns</li>
                <li>Use common navigation structures</li>
              </ul>
            </div>
          </div>
        </section>
  
        <section className="docs-section">
        <h2>Content Guidelines</h2>
        
        <h3>Writing for Ethiopian Audiences</h3>
        <div className="content-guidelines">
          <div className="guideline">
            <h4>Clear Communication</h4>
            <p>Use simple, direct language. Avoid bureaucratic jargon. Write in active voice and keep sentences short and clear.</p>
          </div>
        </div>

        <h3>Accessibility in Content</h3>
        <div className="content-guidelines">
          <div className="guideline">
            <h4>Link Text</h4>
            <p>Use descriptive link text that makes sense out of context. Avoid &quot;click here&quot; or &quot;read more&quot;.</p>
          </div>
        </div>
      </section>
  
        <section className="docs-section">
          <h2>Implementation Best Practices</h2>
          
          <h3>Performance</h3>
          <ul>
            <li>Optimize images and assets for faster loading</li>
            <li>Minimize JavaScript bundle size</li>
            <li>Use lazy loading for below-the-fold content</li>
            <li>Implement proper caching strategies</li>
          </ul>
  
          <h3>Browser Support</h3>
          <ul>
            <li>Ensure compatibility with commonly used browsers in Ethiopia</li>
            <li>Test on both desktop and mobile devices</li>
            <li>Provide fallbacks for older browsers</li>
            <li>Consider low-bandwidth scenarios</li>
          </ul>
  
          <h3>Progressive Enhancement</h3>
          <ul>
            <li>Build core functionality that works without JavaScript</li>
            <li>Enhance experience with JavaScript where available</li>
            <li>Provide accessible fallbacks for advanced features</li>
            <li>Test with different technology constraints</li>
          </ul>
        </section>
  
        <section className="docs-section">
          <h2>Ethiopian Digital Standards</h2>
          <p>EthioWDS aligns with emerging Ethiopian digital government standards and international best practices.</p>
          
          <div className="standards-grid">
            <div className="standard-card">
              <h4>Color Usage</h4>
              <p>Follow established color meanings in Ethiopian context while ensuring accessibility compliance.</p>
            </div>
  
            <div className="standard-card">
              <h4>Typography</h4>
              <p>Use Noto Sans Ethiopic for Amharic text with appropriate fallbacks for optimal readability.</p>
            </div>
  
            <div className="standard-card">
              <h4>Data Formats</h4>
              <p>Use Ethiopian calendar and local date formats where appropriate in forms and displays.</p>
            </div>
          </div>
        </section>
      </div>
    )
  }