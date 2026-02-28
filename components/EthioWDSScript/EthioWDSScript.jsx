'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function EthioWDSScript() {
  const pathname = usePathname()

  useEffect(() => {
    let cancelled = false
    const loadAndInit = async () => {
      try {
        const mod = await import('@abiyub/ethiowds')
        if (cancelled) return
        const EthioWDS = mod?.default ?? (typeof window !== 'undefined' && window.EthioWDS)
        if (!EthioWDS) return
        if (typeof window !== 'undefined' && !window.ethioWDS) {
          window.ethioWDS = new EthioWDS({
            loadCSS: false,
            loadFonts: false,
            autoInit: false
          })
        }
        if (typeof window !== 'undefined' && window.ethioWDS?.autoInitializeComponents) {
          window.ethioWDS.autoInitializeComponents()
        }
      } catch (err) {
        console.error('Error loading EthioWDS:', err)
      }
    }
    loadAndInit()
    return () => { cancelled = true }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined' || !window.ethioWDS?.autoInitializeComponents) return
    const t = requestAnimationFrame(() => {
      window.ethioWDS.autoInitializeComponents()
    })
    return () => cancelAnimationFrame(t)
  }, [pathname])

  return null
}