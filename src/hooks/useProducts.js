import { useEffect, useState } from 'react';
import { loadProducts } from '../data/loadProducts.js';

// Extract the working Day 4 request logic into a reusable custom Hook.
// Call Hooks only at the top level of a component or another Hook.
export function useProducts(url) {
  // Each call owns its own request state; this Hook does not share state globally.
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');
  const [retryCount, setRetryCount] = useState(0);

  // Synchronize with an HTTP resource after React commits the component.
  useEffect(() => {
    const controller = new AbortController();
    setStatus('loading');
    setError('');

    // An Effect itself must not be async: React expects a cleanup function.
    async function fetchCatalog() {
      try {
        const nextProducts = await loadProducts(url, controller.signal);
        // Also guard continuations if cleanup happens after the request resolves.
        if (controller.signal.aborted) return;
        setProducts(nextProducts);
        setStatus('success');
      } catch (requestError) {
        // A cancelled request is expected during cleanup, not a user-facing error.
        if (controller.signal.aborted) return;
        setError(requestError.message);
        setStatus('error');
      }
    }

    fetchCatalog();
    // Cancel the old request before a retry or when App unmounts.
    return () => controller.abort();
  }, [url, retryCount]); // Refetch only for a new resource URL or a Retry action.

  // Expose values and an action, keeping request implementation inside the Hook.
  function retry() {
    setRetryCount(count => count + 1);
  }
  return { products, status, error, retry };
}
