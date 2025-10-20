import './about-layout.scss'

export default function About() {
  return (
    <div className="about-page">
      <h1>What is EthioWDS?</h1>
      <p className="lead">
        The Ethiopian Web Design System (EthioWDS) is a design system for the Ethiopian government. 
        It provides principles, guidance, and code to help teams create accessible, mobile-friendly 
        government websites and digital services.
      </p>

      <section>
        <h2>Our mission</h2>
        <p>
          EthioWDS aims to make it easier to build accessible, mobile-friendly government websites 
          for the Ethiopian people. We do this by providing principles, guidance, and code to help 
          government teams deliver great digital experiences.
        </p>
        
        <blockquote>
          <p>
            "To create consistent, accessible, and culturally relevant digital experiences 
            that serve all Ethiopians."
          </p>
        </blockquote>
      </section>

      <section>
        <h2>Design principles</h2>
        <p>
          Our design principles guide our approach to creating digital services for the 
          Ethiopian government:
        </p>
        
        <ul>
          <li>
            <strong>Accessibility first:</strong> We prioritize accessibility to ensure 
            our digital services work for everyone, including people with disabilities.
          </li>
          <li>
            <strong>Cultural relevance:</strong> Our designs reflect Ethiopian cultural 
            heritage while maintaining modern usability standards.
          </li>
          <li>
            <strong>Consistency:</strong> We provide consistent patterns and components 
            to create cohesive experiences across government services.
          </li>
          <li>
            <strong>Simplicity:</strong> We strive for simplicity in both design and 
            implementation to make our system easy to use and maintain.
          </li>
        </ul>
      </section>

      <section>
        <h2>What's included</h2>
        <p>
          EthioWDS provides everything you need to create accessible, mobile-friendly 
          government websites:
        </p>
        
        <ul>
          <li>Design principles and guidelines</li>
          <li>UI components and patterns</li>
          <li>Utility classes for layout and spacing</li>
          <li>Accessibility guidance</li>
          <li>Implementation examples</li>
          <li>Research and best practices</li>
        </ul>
      </section>

      <section>
        <h2>Get involved</h2>
        <p>
          EthioWDS is an open source project, and we welcome contributions from 
          government employees, contractors, and the public. You can help us improve 
          EthioWDS by:
        </p>
        
        <ul>
          <li>Reporting bugs or issues</li>
          <li>Suggesting new features or components</li>
          <li>Contributing code or documentation</li>
          <li>Sharing your research or user feedback</li>
        </ul>
        
        <p>
          Visit our <a href="/about/contributing" className="text-link">contributing guide</a> to learn more 
          about how you can help improve EthioWDS.
        </p>
      </section>
    </div>
  )
}