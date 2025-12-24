import http from 'k6/http';

export function get(url, params = {}) {
  return http.get(url, params);
}

export function post(url, body, params = {}) {
  return http.post(url, JSON.stringify(body), {
    headers: { 'Content-Type': 'application/json' },
    ...params,
  });
}
