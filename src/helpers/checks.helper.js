import { check } from 'k6';

export function checkStatus(response, expected = 200) {
  check(response, {
    [`status is ${expected}`]: (r) => r.status === expected,
  });
}
