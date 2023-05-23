// @ts-check
import { sizes } from '@utahdts/utah-design-system-header';
// @ts-ignore
import logoPng from './static/images/designSystemCircleGray.png';

/**
 * @typedef {import('@utahdts/utah-design-system-header/src/js/misc/jsDocTypes').SettingsInput} SettingsInput
*/

// here are the pieces that effect how rendered, separated out for easier testing
// const mainMenuOn = { menuItems: [{ actionUrl: { url: '/' }, title: 'Home' }], title: 'Main Menu' };
// const mainMenuOff = undefined;
// const actionItemsOn = [{
//   badge: { label: 'test badge' },
//   showTitle: false,
//   title: 'Help',
//   actionDom: () => /** @type {HTMLElement} */(/** @type {any} */ (document.createTextNode('Hello'))),
//   icon: '<span class="utds-icon-before-help" aria-hidden="true" />',
// }];
// const actionItemsOff = undefined;
// const utahIdOn = true;
// const utahIdOff = false;
// const searchOn = (search) => alert(`${search}!`);
// const searchOff = undefined;

// if (false) {
//   // trick eslint that these variables are used
//   console.log(mainMenuOn, mainMenuOff, actionItemsOn, actionItemsOff, utahIdOn, utahIdOff, searchOn, searchOff);
// }
// const mainMenu = mainMenuOn;
// const actionItems = actionItemsOn;
// const utahId = utahIdOff;
// const onSearch = searchOn;

// [ ] TODO: action items stay after interactive header is removed... should remove them! (and all other custom config)

/**
 * These are the base default settings for the Design System Website
 * see Routing.jsx for where the mainMenu gets added
 * @type {SettingsInput} base settings of the header
 */
export default {
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

  // === TESTING ===
  // mainMenu,
  // actionItems,
  // utahId,
  // onSearch,
};
