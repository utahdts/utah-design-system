// @ts-check

/**
 * Should be Synced with the enumerations/sizes object
 * @typedef {'SMALL' | 'MEDIUM' | 'LARGE'} Size
 *
 * For menu items that are links to other locations
 * @typedef MenuItemUrlAction {
 *  @property {string} url - the url to which to go when interacted with
 *  @property {boolean} [openInNewTab]
 * }
 *
 * A menu item in the menu, can have children
 * @typedef MenuItem {
 *  @property {MenuItemUrlAction | ((e: Event) => void) | MenuItem[]} action - onClick function, link url, children menus
 *  @property {string} [className] - can be used for `selected` or any other purpose
 *  @property {ChildNode} [icon]
 *  @property {string} title
 * }
 *
 * @typedef PopupMenu {
 *  @property {string} [className]
 *  @property {MenuItem[]} menuItems
 *  @property {string} title
 * }
 *
 * @typedef {(this: GlobalEventHandlers, ev: MouseEvent) => any} OnClick
 *
 * @typedef MediaSizes {
 *   @property {number} mobile
 *   @property {number} tabletLandscape
 *   @property {number} tabletPortrait
 * }
 *
 * @typedef ActionItem {
 *  @property {OnClick | PopupMenu | ChildNode } action - function: onClick callback, Object[]: array of MenuItems, ChildNode: content in a popup.
 * // TODO:
 *      notes: if using Menu or ChildNode
 *               * aria-haspopup="true"
 *               * aria-controls="ID"
 *               * aria-expanded="true/false"
 *  @property {string} [className] - CSS classes for the action item
 *  @property {string} icon - Should be an SVG
 *  @property {boolean} showTitle – Should the title always be visible?
 *  @property {string} title - Title of the action item (required for accessibility)
 * }
 *
 * @typedef Settings {
 *  @property {ActionItem[]} [actionItems]
 *  @property {Element | string} [logo] - Must be an image or an SVG
 *  @property {MediaSizes} mediaSizes - sizes for triggering media queries
 *  @property {boolean} showTitle - should the title be shown (it will always be on the page for accessibility)
 *  @property {string} size - size has to be one of the `Size` types
 *  @property {string} title - the title to place at the top of the page (can be hidden) but needs to be there for accessibility
 *  @property {string} titleURL - when the agency title is triggered, the browser navigates to this url
 * }
 *
 * @typedef GlobalEventType {
 *  @property {() => void} globalOnClick
 *  @property {() => void} globalOnKeypress
 * }
 *
 * @typedef {Partial<Settings>} SettingsInput
*/

// without this export, `@typedef import` reports this file 'is not a module'...
export default false;
