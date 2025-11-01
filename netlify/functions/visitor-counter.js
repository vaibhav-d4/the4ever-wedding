import { Counter } from 'counterapi';

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { Allow: 'POST' },
      body: 'Method Not Allowed',
    };
  }

  const workspace = process.env.COUNTER_WORKSPACE;
  const token = process.env.COUNTER_TOKEN;
  // const workspace = 'the4ever';
  // const token = 'ut_dpsmbEuxP969g3XR7jhWt9sZSxWWreywJllkWy4j';

  try {
    const counter = new Counter({
      workspace,
      accessToken: token,
      timeout: 5000,
    });
    const result = await counter.up('total-visitors-v1');
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
