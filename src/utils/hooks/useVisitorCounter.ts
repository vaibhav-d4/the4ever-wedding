import { useEffect } from 'react';

/**
 * Increment the visitor counter via a serverless endpoint to avoid CORS.
 * This function calls the Netlify function at /.netlify/functions/visitor-counter
 * which performs the Counter API call server-side using a secret token.
 */
const useVisitorCounter = () => {
  useEffect(() => {
    async function incrementCounter() {
      try {
        const res = await fetch('/netlify/functions/visitor-counter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!res.ok) {
          const text = await res.text();
          console.error('V ~ Server error incrementing counter:', res.status, text);
          return null;
        }

        const json = await res.json();
        console.log('V ~ visitor-counter result:', json);
        return json;
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        console.error('V ~ Error calling visitor-counter function:', message);
        return null;
      }
    }

    incrementCounter();
  }, []);

  return 0;
};

export default useVisitorCounter;
