import { post } from './http.helper.js';
import { ENV } from '../config/env.js';

export function login() {
  const res = post(`${ENV.BASE_URL}/login`, {
    username: ENV.USERNAME,
    password: ENV.PASSWORD,
  });

  return res.json('token');
}
