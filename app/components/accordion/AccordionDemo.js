'use client'

import { useState } from 'react'

/**
 * Client-side accordion that uses @abiyub/ethiowds CSS classes.
 * Does not rely on the package's JS so it works reliably in Next.js.
 */
export default function AccordionDemo({ items, bordered = false }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  const wrapperClass = bordered
    ? 'ethio-accordion ethio-accordion-bordered'
    : 'ethio-accordion'

  return (
    <div className={wrapperClass}>
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={index} className="ethio-accordion-item">
            <button
              type="button"
              className={`ethio-accordion-header${isOpen ? ' active' : ''}`}
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${index}`}
              id={`accordion-trigger-${index}`}
            >
              {item.title}
              <span className="ethio-accordion-icon">▼</span>
            </button>
            <div
              id={`accordion-content-${index}`}
              role="region"
              aria-labelledby={`accordion-trigger-${index}`}
              className={`ethio-accordion-content${isOpen ? ' active' : ''}`}
            >
              {item.content}
            </div>
          </div>
        )
      })}
    </div>
  )
}
