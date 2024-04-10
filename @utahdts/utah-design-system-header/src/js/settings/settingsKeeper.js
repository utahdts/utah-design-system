import { defaultSettings } from './defaultSettings';

/** @typedef {import('src/@types/jsDocTypes.d').FooterSettings} FooterSettings */
/** @typedef {import('src/@types/jsDocTypes.d').Settings} Settings */
/** @typedef {import('src/@types/jsDocTypes.d').SettingsInput} SettingsInput */

/**
 * @param {Settings} settingsToValidate
 */
function validateSettings(settingsToValidate) {
  if (!settingsToValidate.showTitle && !settingsToValidate.logo) {
    throw new Error('validateSettings: A title must be shown if there is no logo. Please change the `showTitle` setting to be `true` or provide a logo image.');
  }
}

/**
 * settings had to be stored external to settings.js
 * and they had to be global
 * and they couldn't/shouldn't be put on the window variable
 * so wrapped them in an class object
 */
class SettingsKeeper {
  constructor() {
    this.settings = { ...defaultSettings };
  }

  /**
   * @param {SettingsInput} settings
   */
  setSettings(settings) {
    const newSettings = { ...defaultSettings, ...this.settings, ...settings };
    validateSettings(newSettings);
    this.settings = newSettings;
  }

  /**
   * @returns {Settings}
   */
  getSettings() {
    return this.settings;
  }
}

export const settingsKeeper = new SettingsKeeper();
