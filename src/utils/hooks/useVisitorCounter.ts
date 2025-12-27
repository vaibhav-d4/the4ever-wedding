import { useEffect } from 'react';

/**
 * Increment the visitor counter via a serverless endpoint to avoid CORS.
 * This function calls the Netlify function at /.netlify/functions/visitor-counter
 * which performs the Counter API call server-side using a secret token.
 */

const SESSION_KEY = 'visitor-counter-incremented';
const useVisitorCounter = () => {
  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) {
      // Already incremented in this session/tab
      return;
    }

    async function incrementCounter() {
      try {
        const res = await fetch('/.netlify/functions/visitor-counter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!res.ok) {
          // const text = await res.text();
          // console.error('V ~ Server error incrementing counter:', res.status, text);
          return null;
        }

        const json = await res.json();
        // console.log('V ~ visitor-counter result:', json);
        // Mark as incremented for this session
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(true));
        return json;
      } catch (error: unknown) {
        // const message = error instanceof Error ? error.message : String(error);
        // console.error('V ~ Error calling visitor-counter function:', message);
        return String(error);
      }
    }

    incrementCounter();
  }, []);

  return 0;
};

export default useVisitorCounter;
