import AccordionDemo from './AccordionDemo'

const basicItems = [
  {
    title: 'What is EthioWDS?',
    content: (
      <p>
        EthioWDS is a comprehensive design system for Ethiopian government websites, providing consistent, accessible components with Ethiopian identity.
      </p>
    )
  },
  {
    title: 'How do I install it?',
    content: (
      <p>
        Follow the installation guide to add EthioWDS to your project. You can use a package manager, download the release, or include the design system from a CDN for quick prototyping.
      </p>
    )
  },
  {
    title: 'Is it accessible?',
    content: (
      <p>
        Yes! All EthioWDS components are built with accessibility in mind, following WCAG guidelines.
      </p>
    )
  }
]

const borderedItems = [
  {
    title: 'Bordered Item 1',
    content: <p>This accordion has individual borders around each item.</p>
  },
  {
    title: 'Bordered Item 2',
    content: <p>Perfect for when you need visual separation between items.</p>
  }
]

export default function AccordionPage() {
  return (
    <div className="docs-page">
      <h1>Accordion</h1>
      <p className="lead">
        Collapsible content sections for organizing information in limited space.
      </p>

      <section className="docs-section">
        <h2>Basic Accordion</h2>
        <div className="component-demo">
          <AccordionDemo items={basicItems} />
        </div>

        <pre className="code-block">
          {`<div class="ethio-accordion" data-accordion>
  <div class="ethio-accordion-item" data-accordion-item>
    <button type="button" class="ethio-accordion-header" data-accordion-trigger>
      Section Title
      <span class="ethio-accordion-icon">▼</span>
    </button>
    <div class="ethio-accordion-content" data-accordion-content>
      <p>Section content goes here.</p>
    </div>
  </div>
</div>`}
        </pre>
      </section>

      <section className="docs-section">
        <h2>Bordered Accordion</h2>
        <div className="component-demo">
          <AccordionDemo items={borderedItems} bordered />
        </div>

        <pre className="code-block">
          {`<div class="ethio-accordion ethio-accordion-bordered" data-accordion>
  <!-- Items use data-accordion-item, data-accordion-trigger, data-accordion-content -->
</div>`}
        </pre>
      </section>
    </div>
  )
}
