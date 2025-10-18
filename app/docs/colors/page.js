import ColorGrid from '../../components/ColorGrid/ColorGrid'

export default function ColorsPage() {
  const colors = [
    { name: 'Primary', variable: '$primary', value: '#2E86AB', class: 'primary' },
    { name: 'Secondary', variable: '$secondary', value: '#FF6B6B', class: 'secondary' },
    { name: 'Ethio Green', variable: '$ethio-green', value: '#1B5E20', class: 'green' },
    { name: 'Ethio Yellow', variable: '$ethio-yellow', value: '#FFC107', class: 'yellow' },
    { name: 'Ethio Red', variable: '$ethio-red', value: '#C2185B', class: 'red' },
    { name: 'Ethio Blue', variable: '$ethio-blue', value: '#1976D2', class: 'blue' },
  ]

  return (
    <div className="docs-page">
      <h1>Colors</h1>
      <p className="lead">
        EthioWDS uses a carefully curated color palette that reflects Ethiopian identity while ensuring accessibility and visual harmony.
      </p>

      <ColorGrid colors={colors} />

      <section className="docs-section">
        <h2>Usage</h2>
        <p>Use the color variables in your SCSS:</p>
        <pre className="code-block">
{`// In your SCSS file
@use '@abiyub/ethiowds' as *;

.my-component {
  background: $primary;
  color: white;
  
  &:hover {
    background: darken($primary, 10%);
  }
}`}
        </pre>

        <p>Or use utility classes in your HTML:</p>
        <pre className="code-block">
{`<div class="ethio-bg-primary ethio-text-white">
  This has a primary background
</div>

<button class="ethio-btn ethio-btn-secondary">
  Secondary button
</button>`}
        </pre>
      </section>
    </div>
  )
}