// @ts-ignore
import { sizes } from '@utahdts/utah-design-system-header';
import logoPng from './static/images/designSystemCircleGray.png';

/** @typedef {import('@utahdts/utah-design-system-header').SettingsInput} SettingsInput */

/**
 * These are the base default settings for the Design System Website
 * see Routing.jsx for where the mainMenu gets added
 * @type {SettingsInput} base settings of the header
 */
export const websiteUtahHeaderSettings = {
  footer: {
    showHorizontalRule: true,
    domLocationTarget: {
      cssSelector: '#utah-footer-placeholder',
    },
  },
  logo: { imageUrl: logoPng },
  // mainMenu is set in Routing.jsx
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
  skipLinkUrl: '#main-content',
};
