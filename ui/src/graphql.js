export default async function graphql(query, variables = {}) {
    const response = await fetch(window.ENV.UI_API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, variables }),
    });

      const body = await response.text();
      const result = JSON.parse(body);
      return result.data;
}