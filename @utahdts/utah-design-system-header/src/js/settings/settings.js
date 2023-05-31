// @ts-check
import events from '../enumerations/events';
import { loadHeader, removeHeader } from '../lifecycle/lifecycle';
import defaultSettings from './defaultSettings';

/**
 * @typedef {import('../misc/jsDocTypes').FooterSettings} FooterSettings
 * @typedef {import('../misc/jsDocTypes').Settings} Settings
 * @typedef {import('../misc/jsDocTypes').SettingsInput} SettingsInput
*/

// don't ever export this `settings` variable, instead use getUtahHeaderSettings() and setUtahHeaderSettings()
let settings = { ...defaultSettings };

/**
 * @returns {Settings} the current settings information
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

function doLoadHeader() {
  removeHeader(false);

  loadHeader();
}

// Trigger a custom event ('utahHeaderLoaded') that developers can listen for
// in their applications.
// The event needs to wait for the UMD library to load the global window.utahHeader
// module. Use setTimeout to wait for this script to finish running before firing
// the `utahHeaderLoaded` event.
let isSetUtahHeaderSettingsCalled = false;
const MAX_EVENT_FIRES = 15000;
let numberEventFires = 0;

const intervalId = setInterval(
  () => {
    numberEventFires += 1;
    if (numberEventFires >= MAX_EVENT_FIRES || isSetUtahHeaderSettingsCalled) {
      clearInterval(intervalId);
    } else {
      document.dispatchEvent(new Event(events.HEADER_LOADED));
    }
  },
  2
);

/**
 * @param {SettingsInput} newSettings
 * @returns {Settings}
 */
export function setUtahHeaderSettings(newSettings) {
  // note that if newSettings has a key/value where the value is undefined it WILL override the value to undefined
  // but if newSettings is missing a key then the `undefined` value of the missing key will not override the default.
  // this is only a shallow copy, so merging nested settings does not happen.
  settings = { ...defaultSettings, ...getUtahHeaderSettings(), ...newSettings };
  validateSettings(settings);

  isSetUtahHeaderSettingsCalled = true;

  if (document?.body) {
    doLoadHeader();
  } else {
    window.addEventListener('load', () => doLoadHeader());
  }

  return settings;
}

/**
 * @param {FooterSettings} [footerSettings]
 * @returns {FooterSettings | undefined}
 */
export function setUtahFooterSettings(footerSettings) {
  return setUtahHeaderSettings({ ...defaultSettings, ...getUtahHeaderSettings(), footer: footerSettings });
}
