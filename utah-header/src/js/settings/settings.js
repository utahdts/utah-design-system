// @ts-check
import domConstants, { getCssClassSelector } from '../enumerations/domConstants';
import { loadHeader } from '../lifecycle/lifecycle';
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
  const existingHeader = document.querySelector(getCssClassSelector([domConstants.UTAH_DESIGN_SYSTEM, domConstants.HEADER]));
  const existingMainMenu = document.querySelector(getCssClassSelector([domConstants.UTAH_DESIGN_SYSTEM, domConstants.MAIN_MENU__OUTER]));
  if (existingHeader) {
    // don't call removeHeader because that will trigger an unload event,
    // and setting `settings` probably shouldn't be considered an "unload" event
    existingHeader.remove();
    existingMainMenu?.remove();
  }
  loadHeader();

  return settings;
}
