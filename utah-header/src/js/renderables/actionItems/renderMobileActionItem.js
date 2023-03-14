// @ts-check
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import MobileActionItemHtml from './html/MobileActionItem.html?raw';

import childrenMenuTypes from '../../enumerations/childrenMenuTypes';
import domConstants, { getCssClassSelector } from '../../enumerations/domConstants';
import appendChildAll from '../../misc/appendChildAll';
import { renderDOMSingle } from '../../misc/renderDOM';
import uuidv4 from '../../misc/uuidv4';
import { renderMenu } from '../popupMenu/renderPopupMenu';
import renderActionItemBadge from './renderActionItemBadge';

/**
 * @typedef {import('../../misc/jsDocTypes').ActionItem} ActionItem
 * @typedef {import('../../misc/jsDocTypes').PopupMenu} PopupMenu
 */

/**
 * Renders an Action Item for the action bar area.
 * @param {ActionItem} actionItem - the action item to add
 * @returns {{actionItemElement: HTMLElement, actionItemContent: HTMLElement | null}}
 */
export default function renderMobileActionItem(actionItem) {
  const actionItemElement = renderDOMSingle(MobileActionItemHtml);
  if (!actionItemElement.getAttribute('id')) {
    actionItemElement.setAttribute('id', uuidv4());
  }
  const titleElement = document.createTextNode(actionItem.title);

  const actionItemWrapper = /** @type {HTMLElement} */(actionItemElement instanceof HTMLCollection ? actionItemElement[0] : actionItemElement);
  if (actionItem.showTitle) {
    actionItemWrapper.classList.add(domConstants.ACTION_ITEM__ICON_BUTTON_TITLE);
  }
  actionItemWrapper.classList.add(domConstants.MOBILE_MENU_ACTION_BAR__ACTION_ITEM_WRAPPER);
  actionItemWrapper.classList.remove(domConstants.ACTION_ITEM);

  const titleDiv = actionItemWrapper.querySelector(getCssClassSelector(domConstants.ACTION_ITEM__TITLE));
  if (!titleDiv) {
    throw new Error('renderActionItem: titleDiv not found');
  }
  appendChildAll(titleDiv, titleElement);
  if (actionItem.showTitle) {
    titleDiv.classList.remove(domConstants.VISUALLY_HIDDEN);
  } else {
    titleDiv.classList.add(domConstants.VISUALLY_HIDDEN);
  }

  const iconButton = /** @type {HTMLElement} */ (actionItemElement.querySelector(getCssClassSelector(domConstants.ACTION_ITEM__ICON_BUTTON)));
  if (!iconButton) {
    throw new Error('renderActionItem: iconButton not found');
  }
  if (actionItem.className) {
    iconButton.classList.add(actionItem.className);
  }

  const badge = renderActionItemBadge(actionItem.badge);
  if (badge) {
    iconButton.appendChild(badge);
  }

  const actionItemIcon = renderDOMSingle(actionItem.icon);
  actionItemIcon.setAttribute('role', 'presentation');
  appendChildAll(iconButton, actionItemIcon);

  /** @type {HTMLElement | null} */
  let actionItemContent = null;
  if (actionItem.actionFunction) {
    iconButton.onclick = actionItem.actionFunction;
  } else if (actionItem.actionDom) {
    const iconButtonId = uuidv4();
    iconButton.setAttribute('id', iconButtonId);
    // make a copy! or else it will steal the content from the header
    actionItemContent = /** @type {HTMLElement} */ (actionItem.actionDom.cloneNode(true));
  } else if (actionItem.actionPopupMenu) {
    // content is a menu
    const iconButtonId = uuidv4();
    iconButton.setAttribute('id', iconButtonId);
    actionItemContent = renderMenu(actionItem.actionPopupMenu.menuItems, { childrenMenuType: childrenMenuTypes.INLINE });
  } else {
    // eslint-disable-next-line no-console
    console.error(actionItem);
    throw new Error('Action Item: no defined action; must have either actionFunction, actionDom, or actionPopupMenu');
  }

  return { actionItemElement, actionItemContent };
}
