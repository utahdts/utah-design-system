import size from '../enumerations/size';

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

/** @type {Settings} */
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
  return settings;
}
