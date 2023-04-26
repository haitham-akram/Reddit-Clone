/* eslint-disable no-unused-vars */
const authFetch = (url, data) => fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
}).then((res) => res.json());

const getFetch = (url) => fetch(url).then((res) => res.json());

const sendFetch = (url, data) => fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
}).then((res) => res.json());

const editFetch = (url, data) => fetch(url, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
}).then((res) => res.json());

const deleteFetch = (url) => fetch(url, {
  method: 'DELETE',
  headers: { 'Content-Type': 'application/json' },
}).then((res) => res.json());
