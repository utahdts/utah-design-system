// @ts-check
import { loadHeader } from '../lifecycle/lifecycle';
import defaultSettings from './defaultSettings';

/**
 * @typedef {import('../misc/jsDocTypes').Settings} Settings
 * @typedef {import('../misc/jsDocTypes').SettingsInput} SettingsInput
*/

// don't ever export this `settings` variable, instead use getSettings() and setSettings()
let settings = { ...defaultSettings };

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
  // note that if newSettings has a key/value where the value is undefined it WILL override the value to undefined
  // but if newSettings is missing a key then the `undefined` value of the missing key will not override the default.
  settings = { ...defaultSettings, ...newSettings };
  const existingHeader = document.querySelector('.utah-design-system.utds-header');
  if (existingHeader) {
    // don't call removeHeader because that will trigger an unload event,
    // and setting `settings` probably shouldn't be considered an "unload" event
    existingHeader.remove();
  }
  loadHeader();

  return settings;
}
