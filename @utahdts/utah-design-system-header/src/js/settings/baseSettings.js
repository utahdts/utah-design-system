// @ts-check
import sizes from '../enumerations/sizes';

/**
 * @typedef {import('../misc/jsDocTypes').Settings} Settings
*/

/**
 * These are the base default settings in case the caller does not pass in all required base fields
 * @type {Settings} base settings of the header
 */
export default {
  mainMenu: {
    menuItems: [
      { title: 'Home', actionUrl: { url: '/' } },
    ],
    title: 'Main Menu',
  },
  mediaSizes: {
    mobile: 640,
    tabletPortrait: 768,
    tabletLandscape: 1024,
  },
  showTitle: true,
  size: sizes.MEDIUM,
  title: 'Utah Design System',
  titleURL: '/',
  utahId: true,
};
