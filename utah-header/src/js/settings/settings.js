// @ts-check
import { loadHeader, removeHeader } from '../lifecycle/lifecycle';
import baseSettings from './baseSettings';
import defaultSettings from './defaultSettings';

/**
 * @typedef {import('../misc/jsDocTypes').Settings} Settings
 * @typedef {import('../misc/jsDocTypes').SettingsInput} SettingsInput
*/

// don't ever export this `settings` variable, instead use getUtahHeaderSettings() and setUtahHeaderSettings()
let settings = { ...defaultSettings };

/**
 * @returns {Settings} settings The current settings information
 */
export function getUtahHeaderSettings() {
  return settings;
}

/**
 * @param {SettingsInput} settingsToValidate
 */
function validateSettings(settingsToValidate) {
  if (!settingsToValidate.showTitle && !settingsToValidate.logo) {
    throw new Error('validateSettings: A title must be shown if there is no logo. Please change the `showTitle` setting to be `true` or provide a logo image.');
  }
}

/**
 * @param {SettingsInput} newSettings
 * @returns Settings
 */
export function setUtahHeaderSettings(newSettings) {
  // note that if newSettings has a key/value where the value is undefined it WILL override the value to undefined
  // but if newSettings is missing a key then the `undefined` value of the missing key will not override the default.
  // this is only a shallow copy, so merging nested settings does not happen.
  settings = { ...baseSettings, ...newSettings };
  validateSettings(settings);

  removeHeader(false);

  loadHeader();

  return settings;
}
