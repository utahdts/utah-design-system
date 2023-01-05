import renderDOM from '../../../misc/renderDOM';
import cssClasses, { getCssClassSelector } from '../../enumerations/cssClasses';
// eslint-disable-next-line import/no-unresolved
import ActionItem from './html/ActionItem.html?raw';

/**
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
*/

/**
 * Renders an Action Item for the action bar area.
 * @param {function | Menu | ChildNode } action - function: onClick callback, Object[]: array of MenuItems, ChildNode: content to show in a popup.
 * @param {string | undefined} className - CSS classes for the action item
 * @param {ChildNode} icon - Should be an SVG
 * @param {boolean} showTitle – Should the title always be visible?
 * @param {string} title - Title of the action item (required for accessibility)
 * @returns {ChildNode}
 */
export default function actionItem({
  action,
  className,
  icon,
  showTitle,
  title,
}) {
  const actionItemElement = renderDOM(ActionItem);
  const titleElement = document.createTextNode(title);

  const titleDiv = actionItemElement.querySelector(getCssClassSelector(cssClasses.ACTION_ITEM__TITLE));
  titleDiv.appendChildAll(titleElement);
  if (showTitle) {
    titleDiv.classList.remove(cssClasses.VISUALLY_HIDDEN);
  } else {
    titleDiv.classList.add(cssClasses.VISUALLY_HIDDEN);
  }

  const iconButton = actionItemElement.querySelector(getCssClassSelector(cssClasses.ACTION_ITEM__ICON_BUTTON));
  if (className) {
    iconButton.classList.add(className);
  }
  // TODO: use title for accessibility
  iconButton.appendChildAll(renderDOM(icon));

  switch (typeof action) {
    case 'function':
      iconButton.onclick = action;
      break;

    case 'object':
      if (action instanceof HTMLElement) {
        iconButton.onclick = () => console.log('Action Item: show child node popup', action);
      } else {
        iconButton.onclick = () => console.log('Action Item: show menu', action);
      }
      break;

    default:
      throw new Error(`Action Item: unknown action type ${typeof action}`, action);
  }
  return actionItemElement;
}
