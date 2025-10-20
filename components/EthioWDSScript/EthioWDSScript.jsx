'use client'

import { useEffect } from 'react'

export default function EthioWDSScript() {
  useEffect(() => {
    // Load and initialize EthioWDS
    const loadEthioWDS = async () => {
      try {
        // Check if already loaded
        if (window.ethioWDS && window.ethioInitialized) {
          return;
        }

        // Load the script
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@abiyub/ethiowds/dist/js/ethio-wds.js';
        script.async = true;
        
        script.onload = () => {
          if (window.ethioWDS) {
            // Initialize EthioWDS
            new window.ethioWDS();
            window.ethioInitialized = true;
            console.log('✅ EthioWDS initialized successfully');
          }
        };

        script.onerror = () => {
          console.error('❌ Failed to load EthioWDS script');
        };

        document.head.appendChild(script);
      } catch (error) {
        console.error('Error loading EthioWDS:', error);
      }
    };

    loadEthioWDS();
  }, []);

  return null; // This component doesn't render anything
}