import './ColorShowcase.scss'

export default function ColorShowcase() {
  const colors = [
    { name: 'Primary', variable: '$primary', value: '#2E86AB', class: 'primary' },
    { name: 'Secondary', variable: '$secondary', value: '#FF6B6B', class: 'secondary' },
    { name: 'Ethio Green', variable: '$ethio-green', value: '#1B5E20', class: 'green' },
    { name: 'Ethio Yellow', variable: '$ethio-yellow', value: '#FFC107', class: 'yellow' },
    { name: 'Ethio Red', variable: '$ethio-red', value: '#C2185B', class: 'red' },
    { name: 'Ethio Blue', variable: '$ethio-blue', value: '#1976D2', class: 'blue' },
  ]

  return (
    <section id="colors" className="color-showcase">
      <div className="container">
        <h2 className="section-title">Color System</h2>
        <p className="section-description">
          Customizable color palette that reflects Ethiopian identity
        </p>
        
        <div className="colors-grid">
          {colors.map((color, index) => (
            <div key={index} className={`color-card ${color.class}`}>
              <div className="color-swatch"></div>
              <div className="color-info">
                <div className="color-name">{color.name}</div>
                <div className="color-variable">{color.variable}</div>
                <div className="color-value">{color.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}