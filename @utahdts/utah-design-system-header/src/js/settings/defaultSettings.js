// @ts-check
import sizes from '../enumerations/sizes';

/**
 * @typedef {import('../misc/jsDocTypes').Settings} Settings
*/

/**
 * !~! Do not use defaultSettings directly !~!
 * Interact with `settings` using getUtahHeaderSettings() and setUtahHeaderSettings().
 * @type {Settings} the current settings of the header
 */
export default {
  footer: {
    showHorizontalRule: true,
    domLocationTarget: {
      cssSelector: '#utah-footer-placeholder',
    },
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
  mainMenu: {
    menuItems: [
      {
        actionUrl: { url: '/' },
        title: 'Home',
      },
    ],
    title: 'Utah Design System Main Menu',
  },
};
