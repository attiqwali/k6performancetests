import { get } from '../helpers/http.helper.js';
import { checkStatus } from '../helpers/checks.helper.js';
import { ENV } from '../config/env.js';

export function getUsersScenario() {
  const res = get(`${ENV.BASE_URL}/users?page=2`);

  checkStatus(res, 200);

  // extra checks
  res.json('data').length > 0;
}
