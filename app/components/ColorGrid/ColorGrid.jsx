import './ColorGrid.scss'

export default function ColorGrid({ colors }) {
  return (
    <section className="color-grid">
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
    </section>
  )
}