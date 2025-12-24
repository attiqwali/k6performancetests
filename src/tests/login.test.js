import { loginScenario } from '../scenarios/login.scenario.js';
import { smokeOptions } from '../config/options.js';

export const options = smokeOptions;

export default function () {
  loginScenario();
}
