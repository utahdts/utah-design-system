export const SET_DEBUG = 'setDebug';

/**
 * @param {boolean | undefined} on - Do you want the console.log's to be displayed
 */
export function utahHeaderSetDebug(on= undefined) {
  localStorage.removeItem(SET_DEBUG);

  const env = !!['localhost', '127.0.0.1', '::1', '.local','.dev','.at'].find((str) => window.location.hostname.includes(str)) ?
    'true' : 'false';
  const val = typeof on === 'boolean' ? on ? 'true' : 'false' : env;

  localStorage.setItem(SET_DEBUG, val);
}
