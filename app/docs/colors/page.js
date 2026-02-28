import ColorGrid from '../../../components/ColorGrid/ColorGrid'

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
        <p>Use the color variables in your project to keep backgrounds, text, and borders consistent with the design system. Override tokens to match your brand.</p>
        <p>You can also use utility classes for quick styling—for example, primary or secondary backgrounds and text colors—without defining custom styles.</p>
      </section>
    </div>
  )
}