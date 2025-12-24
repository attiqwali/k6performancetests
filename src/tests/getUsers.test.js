import { getUsersScenario } from '../scenarios/getUsers.scenario.js';
import { smokeOptions } from '../config/options.js';

export const options = smokeOptions;

export default function () {
  getUsersScenario();
}
