import { SET_DEBUG } from './utahHeaderSetDebug';

export function showDebugMessage() {
  const debug = localStorage.getItem(SET_DEBUG);
  if (debug === 'true') {
    // eslint-disable-next-line no-console
    console.log(...arguments);
  }
}
