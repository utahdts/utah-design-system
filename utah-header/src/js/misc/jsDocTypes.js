// @ts-check

/**
 * Should be Synced with the enumerations/sizes object
 * @typedef {'SMALL' | 'MEDIUM' | 'LARGE'} Size
 *
 * For menu items that are links to other locations
 * @typedef MenuItemUrlAction {
 *  @property {string} url - the url to which to go when interacted with
 *  @property {boolean} openInNewTab;
 * }
 *
 * A menu item in the menu, can have children
 * @typedef MenuItem {
 *  @property {MenuItemUrlAction | function | MenuItem[]} action - onClick function, link url, children menus
 *  @property {string | undefined} className - can be used for `selected` or any other purpose
 *  @property {ChildNode} icon
 *  @property {string} title
 * }
 *
 * @typedef Menu {
 *  @property {string | undefined} className;
 *  @property {MenuItem[] | undefined} menuItems;
 *  @property {string} title;
 * }
 *
 * @typedef {(this: GlobalEventHandlers, ev: MouseEvent) => any} OnClick
 *
 * @typedef ActionItem {
 *  @property {OnClick | Menu | ChildNode } action - function: onClick callback, Object[]: array of MenuItems, ChildNode: content to show in a popup.
 *  @property {string} [className] - CSS classes for the action item
 *  @property {string} icon - Should be an SVG
 *  @property {boolean} showTitle – Should the title always be visible?
 *  @property {string} title - Title of the action item (required for accessibility)
 * }
 *
 * @typedef Settings {
 *  @property {ActionItem[]} [actionItems]
 *  @property {Element | string} [logo]
 *  @property {Size | string} size - // TODO: remove `| string` so size has to be one of the `Size` types #justgototypescriptalready
 *  @property {string | null} title
 * }
 *
 * @typedef {Partial<Settings>} SettingsInput
*/

// without this export, `@typedef import` reports this file 'is not a module'... #justgototypescriptalready
export default false;
