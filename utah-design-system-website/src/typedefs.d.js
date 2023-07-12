// @ts-check
/* eslint-disable max-len */
/**
 * PageUrl - it is an enum, but listing ALL the individual pageUrls and keeping it up to date is impossible
 * @typedef {string} PageUrl
 */
/**
 * WebsiteMainMenuKey
 * @typedef { 'menuMain' | 'menuGuidelinesSecondary' | 'menuLibraryComponentsSecondary' | 'menuLibraryPatternsSecondary' | 'menuResourcesSecondary' } WebsiteMainMenuKey
 */

/**
 * @typedef WebsiteMainMenuItem {
 *  @property {string} [id]
 *  @property {PageUrl} [link]
 *  @property {string} title
 *  @property {PageUrl[]} [parentLinks]
 *  @property {WebsiteMainMenuItem[]} [children]
 *  @property {boolean} [isSelected]
 * }
 */

/**
 * see constructMainMenu() to see a website.WebsiteMainMenu being converted to a header.MainMenu
 * @typedef WebsiteMainMenu {
 *  @property {string} header
 *  @property {string} id
 *  @property {WebsiteMainMenuItem[]} menuItems
 *  @property {boolean} [isSelected]
 * }
 */

/**
 * @typedef {{[key in WebsiteMainMenuKey]: WebsiteMainMenu}} WebsiteAllMenus
 */

export default false;
