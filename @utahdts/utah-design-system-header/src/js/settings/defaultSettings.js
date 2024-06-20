import { sizes } from '../enumerations/sizes';

/** @typedef {import('src/@types/jsDocTypes.d').Settings} Settings */

/**
 * !~! Do not use defaultSettings directly !~!
 * Interact with `settings` using getUtahHeaderSettings() and setUtahHeaderSettings().
 * There is a SettingsInput jsDoc type that allows all settings fields to be undefined.
 * That way, an app can pass in a blank object and still get a header. This `defaultSettings`
 * then are defaults for all the required fields in case they really did pass a blank object
 * to setUtahHeaderSettings. So make sure out all the required fields in this object with sensible
 * default values as a starting place for a new app.
 * @type {Settings} the current settings of the header
 */
export const defaultSettings = {
  onSearch: false,
  mainMenu: false,
  mediaSizes: {
    mobile: 640,
    tabletPortrait: 768,
    tabletLandscape: 1024,
  },
  showTitle: true,
  size: sizes.MEDIUM,
  skipLinkUrl: '#main-content',
  title: 'My Utah.gov Site',
  titleUrl: '/',
  utahId: false,
};
