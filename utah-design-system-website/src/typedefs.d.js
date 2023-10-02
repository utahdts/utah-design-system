// @ts-check
/* eslint-disable max-len */

/**
 * @template UpdaterT
 * @typedef {import('use-immer').Updater<UpdaterT>} Updater
 */

/** @typedef {import('@utahdts/utah-design-system/react/jsDocTypes').WrapInElement} WrapInElement */

/** @typedef {import('@utahdts/utah-design-system-header').PopupPlacement} PopupPlacement */

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
 *  @property {boolean} [isAlternatePath] there are more than one menu paths to this menu item, and this one is no the "source of truth"
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

/**
 * @typedef AppState {
 *  @property {boolean} isColorPickerShown
 * }
 */

/**
 * @typedef AppContextValue {
 *  @property {Object.<string, WebsiteMainMenu>} allMenus
 *  @property {Object.<string, Page>} pages
 *  @property {Object.<string, PageUrl>} pageUrls
 *  @property {AppState} appState
 *  @property {Updater<AppState>} setAppState
 * }
 */

/**
 * @typedef PaginationExamplePropsShape {
 *  @property {string} className
 *  @property {string} id
 *  @property {string} pageSize
 *  @property {string} totalNumberItems
 *  @property {string} value
 *  @property {WrapInElement | null} wrapInElement
 * }
 */

/**
 * @typedef SpinnersExamplePropsShape {
 *  @property {string} [className]
 *  @property {string} [id]
 *  @property {string} [label]
 *  @property {string} [size]
 *  @property {string} [strokeWidth]
 *  @property {string} [value]
 * }
 */

/**
 * @typedef TooltipsExamplePropsShape {
 *   @property {boolean} isPopperVisible
 *   @property {string} offsetDistance
 *   @property {string} offsetSkidding
 *   @property {PopupPlacement} placement
 *   @property {string} popupText
 * }
 */

/**
 * @typedef TextInputExamplePropsShape {
 * @property {string} className
 * @property {string} errorMessage
 * @property {string} id
 * @property {boolean} isClearable
 * @property {boolean} isDisabled
 * @property {boolean} isRequired
 * @property {string} label
 * @property {string} placeholder
 * @property {string} value
 * }
 */

/**
 * @typedef CharacterCountExamplePropsShape {
 * @property {string} className
 * @property {string} id
 * @property {string} maxLength
 * @property {string} text
 * }
 */

export default false;
