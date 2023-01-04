import size from '../enumerations/size';
import { loadHeader } from '../lifecycle/lifecycle';

/**
 * @typedef {import('../enumerations/size').Size} Size
 */

/**
 * !! make sure to add fields both here and in SettingsInput (w/ additional undefined option) !!
 * @typedef Settings {
 *  @property {Size} size;
 *  @property {string | null} title;
 * }
*/

/**
 * !! make sure to add fields both here and in Settings (w/o undefined option) !!
 * @typedef SettingsInput {
 *  @property {Size | undefined} size;
 *  @property {string | null | undefined} title;
 * }
 */

/**
 * !~! Do not export settings !~!
 * Interact with `settings` using getSettings() and setSettings().
 * @type {Settings} the current settings of the header
 * */
let settings = {
  size: size.MEDIUM,
  title: null,
};

/**
 * @returns {Settings} settings The current settings information
 */
export function getSettings() {
  return settings;
}

/**
 * @param {SettingsInput} newSettings
 * @returns Settings
 */
export function setSettings(newSettings) {
  settings = { ...settings || {}, ...newSettings };
  const existingHeader = document.querySelector('.utah-design-system.utds-header');
  if (existingHeader) {
    // don't call removeHeader because that will trigger an unload event,
    // but setting `settings` probably shouldn't be considered an "unload" event
    existingHeader.remove();
  }
  loadHeader();

  return settings;
}
