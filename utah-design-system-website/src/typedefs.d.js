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
 * ColorRating
 * @typedef {'AA' | 'AAA' | 'X'} ColorRating
 */
/**
 * LayoutTemplate
 * @typedef {'documentation-template' | 'landing-template'} LayoutTemplate
 */
/**
 * NamedMenus
 * @typedef {'main-menu' | 'secondary-menu-guidelines' | 'secondary-menu-library' | 'secondary-menu-resources'} NamedMenus
 */

/**
 * ColorInfo
 * @typedef {{ hexColor: string, isLight: boolean, title: string }} ColorInfo
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

/**
 * @typedef Page {
 *  @property {() => JSX.Element} content
 *  @property {string[]} [legacyLinks] old links for this component that now redirect to link
 *  @property {string} link !! when this changes, put the old value in legacyLinks !!
 *  @property {NamedMenus} [menuSecondary]
 *  @property {string} pageTitle
 *  @property {LayoutTemplate} template
 * }
 */

export default false;
