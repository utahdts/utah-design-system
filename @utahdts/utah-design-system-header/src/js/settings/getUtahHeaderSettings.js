import settingsKeeper from './settingsKeeper';

/**
 * @typedef {import('src/@types/jsDocTypes.d').Settings} Settings
*/

/**
 * an easy to use function, this is what the world expects.
 * the functional world isn't ready for objects. it tried.
 * it didn't stick. back to functions.
 * @returns {Settings} the current settings information
 */
export default function getUtahHeaderSettings() {
  return settingsKeeper.getSettings();
}
