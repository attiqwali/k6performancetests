import { login } from '../helpers/auth.helper.js';

export function loginScenario() {
  const token = login();
  return token;
}
