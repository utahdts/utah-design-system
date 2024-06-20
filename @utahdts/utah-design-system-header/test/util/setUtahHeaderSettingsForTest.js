import { getUtahHeaderSettings, setUtahHeaderSettings } from '../../src';
import { settingsKeeper } from '../../src/js/settings/settingsKeeper';

/** @typedef {import('@utahdts/utah-design-system-header').SettingsInput} SettingsInput */

/**
 * sets settings and then puts them back
 * @param {Partial<SettingsInput>} utahHeaderSettings
 * @param {() => void} fn
 */
export function setUtahHeaderSettingsForTest(utahHeaderSettings, fn) {
  // store previous settings
  const currentSettings = getUtahHeaderSettings();

  // clear settings
  settingsKeeper.clearSettings();

  // set to passed in settings
  setUtahHeaderSettings(utahHeaderSettings);

  // run test
  fn();

  // put back to what the settings were before
  setUtahHeaderSettings(currentSettings);
}
