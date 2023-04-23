/* eslint-disable no-unused-vars */
const authFetch = (url, data) => fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
}).then((res) => res.json());
