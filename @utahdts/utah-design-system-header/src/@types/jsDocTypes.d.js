/* eslint-disable @stylistic/max-len */
/** @module @utahdts/utah-design-system-header */

// Types of Events: https://www.w3schools.com/jsref/obj_events.asp

/** @typedef {HTMLElement} ChildNode */

/** @typedef {(function(MouseEvent | TouchEvent | KeyboardEvent): void)} EventAction */

/** @interface Partial - typescript has "Partial" built-in while JSDoc does not know about "type utilities" */

/**
 * AriaHasPopupType
 * @typedef {'dialog' | 'grid' | 'listbox' | 'menu' | 'tree'} AriaHasPopupType
 */

/**
 * ChildrenMenuTypes
 * @typedef {('flyout' | 'inline' | 'mega-menu' | 'plain')} ChildrenMenuTypes
 */

/**
 * Events
 * @typedef {'utahHeaderLoaded' | 'utahHeaderUnloaded'} Events
 */

/**
 * HeaderApplicationTypes
 * @typedef {'wordpress' | 'static site' | 'salesforce' | 'custom application' | 'microsoft power apps' | 'servicenow'} HeaderApplicationTypes
 */

/**
 * these match the popup's position options
 * PopupPlacement
 * @typedef { 'bottom' | 'bottom-start' | 'bottom-end' |
 *    'left' | 'left-start' | 'left-end' |
 *    'right' | 'right-start' | 'right-end' |
 *    'top' | 'top-start' | 'top-end'
 * } PopupPlacement
 */

/**
 * Size
 * @typedef {'SMALL' | 'MEDIUM' | 'LARGE'} Size
 */

/**
 * UtahIdFetchStyle
 * @typedef {'Automatic' | 'None' | 'Provided'} UtahIdFetchStyle
 */

/**
 * @typedef MainMenuItem {
 *  // this started as a copy of MenuItem but can diverge to be its own thing
 *  // wordpress has the concept of a menu item that is a link AND has children, but when it goes mobile the link is no longer available
 *  // so the wordpress conversion script will take a menu that has a link and children and auto insert the link as the first child
 *  // so this could do that work automatically if it detects that scenario instead of throwing an error
 *
 *  // should be only one of the following three action types
 *  //   actionUrl: an <a> with a url for navigation
 *  //   actionFunction: a <button> that when triggered calls a function
 *  //   actionFunctionUrl: an <a> that when triggered calls a function (for Single Page Apps)
 *  //   actionMenu: a <button> that when triggered exposes a sub menu of options
 *  @property {MenuItemUrlAction} [actionUrl] - link url
 *  @property {EventAction} [actionFunction] - onClick function
 *  @property {MenuItemFunctionUrlAction} [actionFunctionUrl] - single page apps render an <a> but call browser push; you should handle cmd click
 *  @property {MenuItem[]} [actionMenu] - children menus
 *  @property {ChildrenMenuTypes} [childrenMenuType] - default is "flyout"
 *  @property {string} [className] - can be used for `selected` or any other purpose
 *  @property {ChildNode} [icon] - icon to show next to this menu item
 *  @property {boolean} [isAlternatePath] - there are more than one menu paths to this menu item, and this one is no the "source of truth"
 *  @property {boolean} [isDivider] - this menu item is a divider between other menu items
 *  @property {boolean} [isOverviewHidden] - hide the "overview" page from the main menu (top of the list link)
 *  @property {boolean} [isSelected] - is this menu item currently a selected thing (on its page?)
 *  @property {string} title - title for the menu item
 * }
 */

/**
 * @typedef MainMenu {
 *  @property {MainMenuItem[]} menuItems
 *  @property {string} title
 *  @property {string | ((menuItem: MainMenuItem | MenuItem) => string)} [parentMenuLinkSuffix] - when a menu item is a link AND has children, a child item is created for the link with this suffix added to its title
 * }
 */

/**
 * For menu items that are links to other locations
 * @typedef MenuItemUrlAction {
 *  @property {string} url - the url to which to go when interacted with
 *  @property {boolean} [openInNewTab] - true to have the link open in a new window defaults to `false` if not provided
 * }
 */

/**
 * @typedef MenuItemFunctionUrlAction {
 *  // actually going to call this function to do what you want
 *  @property {EventAction} actionFunction - onClick custom function to call when triggered
 *  @property {boolean} [skipHandleEvent] - should handleEvent automatically be used to call your function to stop propagation and prevent default
 *
 *  // trick the user to think it's a normal link; you must set these to the correct values to match your custom function
 *  @property {boolean} [openInNewTab] - true to have the link say it will open in a new window; defaults to `false`
 *  @property {string} url - the url to show when hovered
 * }
 */

/**
 * A menu item in the menu, can have children
 * @typedef MenuItem {
 *  // should be only one of the following three action types
 *  //   actionUrl: an <a> with a url for navigation
 *  //   actionFunction: a <button> that when triggered calls a function
 *  //   actionFunctionUrl: an <a> that when triggered calls a function (for Single Page Apps)
 *  //   actionMenu: a <button> that when triggered exposes a sub menu of options
 *  @property {MenuItemUrlAction} [actionUrl] - link url
 *  @property {EventAction} [actionFunction] - onClick function
 *  @property {MenuItemFunctionUrlAction} [actionFunctionUrl] - single page apps render an <a> but call browser push; you should handle cmd click
 *  @property {MenuItem[]} [actionMenu] - children menus
 *  @property {string} [className] - can be used for `selected` or any other purpose
 *  @property {ChildNode} [icon] - icon to show next to this menu item
 *  @property {boolean} [isAlternatePath] - there are more than one menu paths to this menu item, and this one is no the "source of truth"
 *  @property {boolean} [isOverviewHidden] - hide the "overview" page from the main menu (top of the list link)
 *  @property {boolean} [isDivider] - this menu item is a divider between other menu items
 *  @property {boolean} [isSelected] - is this menu item currently a selected thing (on its page?)
 *  @property {string} title - title for the menu item
 * }
 */

/**
 * @typedef PopupMenu {
 *  @property {string} [className] - className to put on the popupMenu
 *  @property {MenuItem[]} menuItems - the menu items to show in the menu
 *  @property {string | ((menuItem: MainMenuItem | MenuItem) => string)} [parentMenuLinkSuffix] See MainMenu for explanation
 *  @property {string} title - the title of the menu
 * }
 */

/**
 * @typedef MediaSizes {
 *  @property {number} mobile - mobile sized render area
 *  @property {number} tabletLandscape - table landscape sized render area
 *  @property {number} tabletPortrait - table portrait sized render area
 * }
 */

/**
 * @typedef PopupFocusHandlerOptions {
 *  @property {() => boolean} [isPerformPopup] should the popup pop open? Helpful for utahId that doesn't pop until user loaded
 *  @property {function(UIEvent): void} [onClick] custom onclick handler
 *  @property {PopupPlacement} [popupPlacement] which side should the popup place itself (defaults to bottom and Floating UI will place where it can)
 *  @property {boolean} [preventOnClickHandling] turns off click handling for popup invocation
 *  @property {boolean} [shouldFocusOnHover] will perform the popup on hover as well as the focus event
 *  @property {boolean} [doNotClosePopupOnClick] main menu items should not close popup when it's clicked
 * }
 */

/**
 * @typedef RenderPopupOptions {
 *  @property {boolean} [removePopupArrow] allows removing the popup border arrow for flyouts
 * }
 */

/**
 * @typedef RenderPopupMenuOptions {
 *  @property {ChildrenMenuTypes} childrenMenuType
 *   - flyout: children in new popup
 *   - inline: expandable children
 *   - mega-menu: always expanded children
 *  @property {string | ((menuItem: MainMenuItem | MenuItem) => string)} [parentMenuLinkSuffix] See MainMenu for explanation
 *  @property {boolean} [removePopupArrow] allows removing the popup border arrow for flyouts
 * }
 */

/**
 * @typedef Badge {
 *  @property {string} [className] - a class to add to the badge for custom formatting like color
 *  @property {string} label - the label for the screen reader to read describing the badge
 *  @property {number} [value] - the value to show in the badge
 * }
 */

/**
 * @typedef ActionItem {
 *  // should be only one of the following three action types
 *  @property {EventAction} [actionFunction] - func: onClick callback
 *  @property {PopupMenu} [actionPopupMenu] - Object[]: array of MenuItems
 *  @property {function (): HTMLElement | string} [actionDom] - ChildNode: content in a popup.
 *  @property {string} [className] - CSS classes for the action item
 *  @property {Badge} [badge] - the badge to show in the action item's badge icon
 *  @property {HTMLElement | string} icon - DOM or DOM string of icon to show
 *  @property {'left' | 'none' | 'right'} [mobileMenuLocation] - positioned right or left of the Utah ID button? not at all? default is none
 *  @property {boolean} showTitle - Should the title always be visible?
 *  @property {string} title - Title of the action item (required for accessibility)
 * }
 */

/**
 * // must use one and only one of the properties here
 * @typedef DomLocationTarget {
 *  @property {string} [cssSelector] - find a target DOM element by document.querySelector(cssSelector) (throws error if not found)
 *  @property {HTMLElement} [element] - insert the header as a child of this given element
 *  @property {function (): HTMLElement} [elementFunction] - insert the header in to whatever element is returned from this function
 * }
 */

/**
 * @typedef GlobalEventType {
 *  @property {(e: MouseEvent) => void} globalOnClick the current event handler for global on click events
 *  @property {(e: KeyboardEvent) => void} globalOnKeydown tracks when keys are pressed down
 *  @property {(e: KeyboardEvent) => void} globalOnKeyup the current event handler for global on key press events
 * }
 */

/**
 * Partial is a `typescript` utility that takes a type and makes all its properties optional. This works in vs-code IDEs but may
 * be problematic in other IDEs that don't support typescript "out of the box".
 * @typedef {Partial<Settings>} SettingsInput
 */

/**
 * // User fields from the UtahId authority
 * @typedef UserInfo {
 *  @property {boolean} authenticated - the current information is ratified with the authority
 *  @property {boolean | null | undefined} [disabled]
 *  @property {string | undefined} [env] - the UtahId environment
 *  @property {string | null | undefined} first - the name shown on the UtahId button when logged in
 *  @property {string | null | undefined} [id]
 *  @property {string | null | undefined} [last]
 *  @property {string[] | null | undefined} [mail]
 *  @property {string | null | undefined} [middle]
 *  @property {string | null | undefined} [status]
 *  @property {string | undefined} [type]
 *  @property {string | null | undefined} [username]
 * }
 */

/**
 * @typedef UtahIdData {
 *  @property {boolean | null} isDefinitive - true when the user's state is known, false while the ajax request is inflight
 *  @property {string | null} lastError - true when the user's state is known, false while the ajax request is inflight
 *  @property {UserInfo | null} userInfo - the current logged in user info or null if not found
 * }
 */

/**
 * // only fill in what you want to change, the rest will be defaults
 * // The UtahID header will auto fetch the user from UtahID if it is not told that your application will be controlling the signed in user
 * // This may cause the header to jump as data comes from UtahID and your application gets data from its data source.
 * // To prevent this jankiness, your application should call setUtahHeaderSettings with a userInfo.currentUser value of `null`. This way
 * // the header knows not to fetch the user and your application can later call setSettings again with the current user.
 * @typedef UtahIDSettings {
 *  @property {UserInfo | undefined | null} currentUser - null: app controls the user, undefined: header will fetch current user
 *  @property {function(UtahIdData): void | undefined} [onAuthChanged] - auth user changes, eg (newUserData) => { ... do something ... }
 *  @property {function(UIEvent): void | undefined} [onProfile] - when the UtahId's menu item for the user's profile is triggered: (e) => { }
 *  @property {function(UIEvent): void | undefined} [onSignIn] - when the UtahId button is pressed to sign in: (e) => { }
 *  @property {function(UIEvent): void | undefined} [onSignOut] - when the UtahId's menu item for sign out is triggered: (e) => { }
 *  @property {MenuItem[] | undefined} [menuItems] - menu items to add to the UtahId menu (user must be logged in to open the menu): (e) => { }
 * }
 */

/**
 * @typedef Logo {
 *  @property {HTMLElement | function(): HTMLElement} [element] an HTML Element to render
 *  @property {string | function(): string} [htmlString] string containing html that will be rendered
 *  @property {string | function(): string} [imageUrl] url to an image
 * }
 */

/**
 * @typedef FooterSettings {
 *  @property {string | null} [copyrightYear] - the year to show next to the copy right symbol in the footer (default is none)
 *  @property {DomLocationTarget} [domLocationTarget] - where in the DOM should the footer be inserted? (defaults to the bottom of the body)
 *  @property {string | null} [linkPrivacyPolicy] - a custom link to a privacy policy
 *  @property {string | null} [linkTermsOfUse] - a custom link to a terms of use
 *  @property {boolean} [showHorizontalRule] - true to have a dividing horizontal rule placed at the top of the footer for dividing footer content
 * }
 */

/**
 * @typedef TitleUrl {
 *  @property {string} [url]
 *  @property {EventAction} [onClick]
 */

/**
 * // !! Make sure to update SettingsShape in the library if this changes !!
 * @typedef Settings {
 *  @property {ActionItem[]} [actionItems] - action items to show in the header
 *  @property {HeaderApplicationTypes} applicationType - what type of application are you deploying?
 *  @property {DomLocationTarget} [domLocationTarget] - where in the DOM should the header be inserted? (defaults to the top of the body)
 *  @property {FooterSettings | null} [footer] - null means to not show the footer
 *  @property {Logo} [logo] - the logo to show
 *  @property {MainMenu | false} [mainMenu] - the main menu to show on a line below the citizen experience/unbrand line
 *  @property {MediaSizes} mediaSizes - sizes for triggering media queries
 *  @property {((search: string) => void) | false} [onSearch] - if onSearch is provided, the search icon will show in the main menu bar
 *  @property {boolean} showTitle - should the title be shown (it will always be on the page for accessibility)
 *  @property {string} size - size has to be one of the `Size` types
 *  @property {string} [skipLinkUrl] - the URL that the skip link will go to
 *  @property {string} title - the title to place at the top of the page (can be hidden) but needs to be there for accessibility
 *  @property {EventAction} [titleFunction] - a function to call when the title is clicked
 *  @property {string} [titleUrl] - the url to link to in the title
 *  @property {UtahIDSettings | boolean} [utahId] - settings for the utahId button; true = turned on, false = turned off, object = custom
 *  === Deprecated Properties ===
 *  {string} [titleURL] - this property was replaced by titleUrl. (is backwards compatible)
 * }
 */

export default false;
