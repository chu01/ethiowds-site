'use client'
import { useEffect } from 'react'

export default function EthioWDSScript() {
  useEffect(() => {
    const loadEthioWDS = async () => {
      try {
        // Check if EthioWDS is already loaded and initialized
        if (window.ethioWDS && window.ethioInitialized) {
          console.log('✅ EthioWDS already initialized');
          return;
        }

        // Check if EthioWDS is available but not initialized
        if (window.ethioWDS && !window.ethioInitialized) {
          console.log('🔄 EthioWDS available, marking as initialized');
          window.ethioInitialized = true;
          return;
        }

        // Check if EthioWDS constructor is available
        if (window.EthioWDS && typeof window.EthioWDS === 'function') {
          console.log('🚀 Initializing EthioWDS with constructor');
          window.ethioWDS = new window.EthioWDS();
          window.ethioInitialized = true;
          console.log('✅ EthioWDS initialized successfully');
          return;
        }

        // If EthioWDS isn't available yet, wait for it
        console.log('⏳ Waiting for EthioWDS to load...');
        
        const checkInterval = setInterval(() => {
          if (window.EthioWDS && typeof window.EthioWDS === 'function') {
            clearInterval(checkInterval);
            console.log('🚀 Initializing EthioWDS after wait');
            window.ethioWDS = new window.EthioWDS();
            window.ethioInitialized = true;
            console.log('✅ EthioWDS initialized successfully after wait');
          }
        }, 100);

        // Timeout after 5 seconds
        setTimeout(() => {
          clearInterval(checkInterval);
          if (!window.ethioInitialized) {
            console.warn('⚠️ EthioWDS initialization timeout');
          }
        }, 5000);

      } catch (error) {
        console.error('❌ Error initializing EthioWDS:', error);
      }
    }

    loadEthioWDS();

    // Cleanup function
    return () => {
      // Optional: Cleanup if needed
    }
  }, [])

  return null
}