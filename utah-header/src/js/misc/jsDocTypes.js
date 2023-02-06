// @ts-check

/**
 *
 * JsDoc types for the utah header. Types help lower the mental load of object properties as well as
 * helps find "bugs" from invalid typings scenarios.
 *
 * @typedef {Element} ChildNode
 *
 * @typedef {(function(Event): void)} EventAction
 *
 * @interface Partial - typescript has "Partial" built-in while JSDoc does not know about "type utilities"
 *
 * @typedef {'SMALL' | 'MEDIUM' | 'LARGE'} Size
 * Should be Synced with the enumerations/sizes object
 *
 * For menu items that are links to other locations
 * @typedef MenuItemUrlAction {
 *  @property {string} url - the url to which to go when interacted with
 *  @property {boolean} [openInNewTab] - true to have the link open in a new window defaults to `false` if not provided
 * }
 *
 * A menu item in the menu, can have children
 * @typedef MenuItem {
 *  // should be only one of the following three action types
 *  @property {MenuItemUrlAction} [actionUrl] - link url
 *  @property {EventAction} [actionFunction] - onClick function
 *  @property {MenuItem[]} [actionMenu] - children menus
 *
 *  @property {string} [className] - can be used for `selected` or any other purpose
 *  @property {ChildNode} [icon] - icon to show next to this menu item
 *  @property {string} title - title for the menu item
 * }
 *
 * @typedef PopupMenu {
 *  @property {string} [className] - className to put on the popupMenu
 *  @property {MenuItem[]} menuItems - the menu items to show in the menu
 *  @property {string} title - the title of the menu
 * }
 *
 * @typedef MediaSizes {
 *   @property {number} mobile - mobile sized render area
 *   @property {number} tabletLandscape - table landscape sized render area
 *   @property {number} tabletPortrait - table portrait sized render area
 * }
 *
 * @typedef Badge {
 *  @property {string} [className] - a class to add to the badge for custom formatting like color
 *  @property {string} label - the label for the screen reader to read describing the badge
 *  @property {number} [value] - the value to show in the badge
 * }
 *
 * @typedef ActionItem {
 *  // should be only one of the following three action types
 *  @property {EventAction} [actionFunction] - func: onClick callback
 *  @property {PopupMenu} [actionPopupMenu] - Object[]: array of MenuItems
 *  @property {ChildNode} [actionDom] - ChildNode: content in a popup.
 *
 *  @property {string} [className] - CSS classes for the action item
 *  @property {Badge} [badge] - the badge to show in the action item's badge icon
 *  @property {string} icon - Should be an SVG
 *  @property {boolean} showTitle – Should the title always be visible?
 *  @property {string} title - Title of the action item (required for accessibility)
 * }
 *
 * @typedef Settings {
 *  @property {ActionItem[]} [actionItems] - action items to show in the header
 *  @property {Element | string} [logo] - Must be an image or an SVG as a string
 *  @property {MediaSizes} mediaSizes - sizes for triggering media queries
 *  @property {boolean} showTitle - should the title be shown (it will always be on the page for accessibility)
 *  @property {string} size - size has to be one of the `Size` types
 *  @property {string} title - the title to place at the top of the page (can be hidden) but needs to be there for accessibility
 *  @property {string} titleURL - when the agency title is triggered, the browser navigates to this url
 * }
 *
 * @typedef GlobalEventType {
 *  @property {function(): void} globalOnClick the current event handler for global on click events
 *  @property {function(): void} globalOnKeypress the current event handler for global on key press events
 * }
 *
 * Partial is a `typescript` utility that takes a type and makes all its properties optional. This works in vs-code IDEs but may
 * be problematic in other IDEs that don't support typescript "out of the box".
 // eslint-disable-next-line jsdoc/no-undefined-types
 * @typedef {Partial<Settings>} SettingsInput
 *
 * // UtahId Data types
 * @typedef UserInfoUrls {
 *  @property {string} profile
 *  @property {string} signin
 *  @property {string} signout
 * }
 *
 * @typedef UserInfo {
 *  @property {boolean} authenticated
 *  @property {boolean | null | undefined} disabled
 *  @property {string} env
 *  @property {string | null | undefined} first
 *  @property {string | null | undefined} id
 *  @property {string | null | undefined} last
 *  @property {[string] | null | undefined} mail
 *  @property {string | null | undefined} middle
 *  @property {string | null | undefined} status
 *  @property {string | undefined} type
 *  @property {UserInfoUrls} urls
 *  @property {string | null | undefined} username
 * }
 * @typedef UtahIdData {
 *  @property {boolean | null} isDefinitive - true when the user's state is known, false while the ajax request is inflight
 *  @property {string | null} lastError - true when the user's state is known, false while the ajax request is inflight
 *  @property {UserInfo | null} userInfo - the current logged in user info or null if not found
 *  @property {number} userInfoHash - hash of the userInfo for detecting changes
 * }
 */

// without this export, `@typedef import` reports this file 'is not a module'...
export default false;
