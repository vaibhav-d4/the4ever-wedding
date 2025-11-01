import { Counter } from 'counterapi';

/**
 * Netlify Function: visitor-counter
 * POST /.netlify/functions/visitor-counter
 *
 * This function performs the Counter API increment server-side to avoid CORS
 * and to keep the access token secret. Configure the following environment
 * variables in Netlify:
 *  - COUNTER_WORKSPACE (e.g. 'the4ever')
 *  - COUNTER_TOKEN (your counterapi access token)
 */

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { Allow: 'POST' },
      body: 'Method Not Allowed',
    };
  }

  const workspace = import.meta.env.COUNTER_WORKSPACE;
  const token = import.meta.env.COUNTER_TOKEN;

  if (!workspace || !token) {
    console.error(
      'visitor-counter: missing COUNTER_WORKSPACE or COUNTER_TOKEN env vars'
    );
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Counter workspace/token not configured on server',
      }),
    };
  }

  try {
    const counter = new Counter({
      workspace,
      accessToken: token,
      timeout: 5000,
    });
    const result = await counter.up('api-usage');
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (err) {
    console.error('visitor-counter: error calling Counter API', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: String(err) }),
    };
  }
}
