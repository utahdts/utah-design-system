// @ts-check
import domConstants, { getCssClassSelector } from '../../enumerations/domConstants';
import appendChildAll from '../../misc/appendChildAll';
import popupFocusHandler from '../../misc/popupFocusHandler';
import { renderDOMSingle } from '../../misc/renderDOM';
import uuidv4 from '../../misc/uuidv4';
import renderPopup from '../popup/renderPopup';
import renderPopupMenu from '../popupMenu/renderPopupMenu';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import ActionItemHtml from './html/ActionItem.html?raw';
import renderActionItemBadge from './renderActionItemBadge';

/**
 * @typedef {import('../../misc/jsDocTypes').ActionItem} ActionItem
 * @typedef {import('../../misc/jsDocTypes').PopupMenu} PopupMenu
 */

/**
 * Renders an Action Item for the action bar area.
 * @param {ActionItem} actionItem - the action item to add
 * @returns {Element}
 */
export default function renderActionItem(actionItem) {
  const actionItemElement = renderDOMSingle(ActionItemHtml);
  const titleElement = document.createTextNode(actionItem.title);

  const actionItemWrapper = /** @type {HTMLElement} */(actionItemElement instanceof HTMLCollection ? actionItemElement[0] : actionItemElement);
  if (actionItem.showTitle) {
    actionItemWrapper.classList.add(domConstants.ACTION_ITEM__ICON_BUTTON_TITLE);
  }

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

  const iconButton = actionItemElement.querySelector(getCssClassSelector(domConstants.ACTION_ITEM__ICON_BUTTON));
  if (!iconButton) {
    throw new Error('renderActionItem: iconButton not found');
  }
  if (actionItem.className) {
    iconButton.classList.add(actionItem.className);
  }

  const badge = renderActionItemBadge(actionItem);
  if (badge) {
    iconButton.appendChild(badge);
  }

  const actionItemIcon = renderDOMSingle(actionItem.icon);
  actionItemIcon.setAttribute('role', 'presentation');
  appendChildAll(iconButton, actionItemIcon);

  if (!(iconButton instanceof HTMLElement)) {
    throw new Error('renderActionItem: iconButton is not an HTMLElement');
  }

  if (actionItem.actionFunction) {
    iconButton.onclick = actionItem.actionFunction;
  } else if (actionItem.actionDom) {
    // create popup content and make it visually-hidden
    const iconButtonId = uuidv4();
    iconButton.setAttribute('id', iconButtonId);
    iconButton.setAttribute('aria-haspopup', 'dialog');
    const popupId = uuidv4();
    iconButton.setAttribute('aria-controls', popupId);
    iconButton.setAttribute('aria-expanded', 'false');

    const popupWrapper = renderPopup();
    popupWrapper.setAttribute('id', popupId);
    popupWrapper.setAttribute('aria-labelledby', iconButtonId);
    const popupContentWrapper = /** @type {HTMLElement} */(popupWrapper.querySelector(getCssClassSelector(domConstants.POPUP_CONTENT_WRAPPER)));
    if (!popupContentWrapper) {
      throw new Error('renderPopupMenu: contentWrapper not found');
    }
    popupContentWrapper.appendChild(actionItem.actionDom);
    actionItemElement.appendChild(popupWrapper);

    popupFocusHandler(actionItemWrapper, iconButton, popupWrapper, undefined);
  } else if (actionItem.actionPopupMenu) {
    const iconButtonId = uuidv4();
    iconButton.setAttribute('id', iconButtonId);
    iconButton.setAttribute('aria-haspopup', 'menu');
    const popupId = uuidv4();
    iconButton.setAttribute('aria-controls', popupId);
    iconButton.setAttribute('aria-expanded', 'false');
    const popupMenu = renderPopupMenu((/** @type {PopupMenu} */ (actionItem.actionPopupMenu)));
    popupMenu.setAttribute('id', popupId);
    popupMenu.setAttribute('aria-labelledby', iconButtonId);
    appendChildAll(actionItemElement, popupMenu);

    popupFocusHandler(actionItemWrapper, iconButton, popupMenu, undefined);
  } else {
    // eslint-disable-next-line no-console
    console.error(actionItem);
    throw new Error('Action Item: no defined action; must have either actionFunction, actionDom, or actionPopupMenu');
  }

  return actionItemElement;
}
