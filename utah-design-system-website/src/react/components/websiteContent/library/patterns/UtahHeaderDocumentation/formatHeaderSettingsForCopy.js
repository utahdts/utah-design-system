import { FUNCTION_PLACEHOLDER } from './stringifyHeaderSettings';

/**
 * replaces string functions placeholder in to actual function for use in a js file
 * @param {string} settingsString
 * @returns {string}
 */
export function formatHeaderSettingsForCopy(settingsString) {
  return settingsString.replace(`"${FUNCTION_PLACEHOLDER}"`, `() => alert('${FUNCTION_PLACEHOLDER}')`);
}
