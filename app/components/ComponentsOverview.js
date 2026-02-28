'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

/**
 * Flatten category list into a single array with category for keyword filter.
 * @param {Array<{ title: string, components: Array<{ name: string, path: string, description: string }> }>} categories
 * @returns {Array<{ name: string, path: string, description: string, category: string }>}
 */
function flattenComponents(categories) {
  return categories.flatMap((cat) =>
    cat.components.map((c) => ({
      ...c,
      category: cat.title,
    }))
  )
}

export default function ComponentsOverview({ componentCategories }) {
  const [filter, setFilter] = useState('')
  const allComponents = useMemo(
    () => flattenComponents(componentCategories),
    [componentCategories]
  )
  const filtered = useMemo(() => {
    const q = filter.trim().toLowerCase()
    if (!q) return allComponents
    return allComponents.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        (c.description && c.description.toLowerCase().includes(q)) ||
        (c.category && c.category.toLowerCase().includes(q))
    )
  }, [allComponents, filter])

  return (
    <>
      <section className="components-overview__find" aria-labelledby="find-component-heading">
        <h2 id="find-component-heading" className="components-overview__find-title">
          Find an EthioWDS component
        </h2>
        <p className="components-overview__find-hint">Filter by name and keyword</p>
        <input
          type="search"
          className="components-overview__filter"
          placeholder="Filter by name and keyword"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          aria-label="Filter components by name and keyword"
        />
        <p className="components-overview__count" aria-live="polite">
          <strong>{filtered.length}</strong> component{filtered.length !== 1 ? 's' : ''} found
        </p>
        <p className="components-overview__packages-note">
          See the <Link href="/docs/installation">installation guide</Link> to get started using the Design System.
        </p>
      </section>

      <div className="components-overview__grid" role="list">
        {filtered.map((component) => (
          <Link
            key={component.path}
            href={component.path}
            className="components-overview__card"
            role="listitem"
          >
            <h3 className="components-overview__card-title">{component.name}</h3>
            <p className="components-overview__card-description">{component.description}</p>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="components-overview__no-results">No components match your filter. Try a different keyword.</p>
      )}
    </>
  )
}
