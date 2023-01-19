// @ts-check
import { createPopper } from '@popperjs/core';
import domConstants, { getCssClassSelector } from '../../enumerations/domConstants';
import appendChildAll from '../../misc/appendChildAll';
import { renderDOMSingle } from '../../misc/renderDOM';
import showHideElement from '../../misc/showHideElement';
import renderPopup from '../popup/renderPopup';
import renderPopupMenu from '../popupMenu/renderPopupMenu';
import uuidv4 from '../../misc/uuidv4';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import ActionItemHtml from './html/ActionItem.html?raw';
import renderActionItemBadge from './renderActionItemBadge';
import popupFocusHandler from '../../misc/popupFocusHandler';

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

  // put an id on the button
  // have popup aria reference the id of the button
  // track if it is expanded or not

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

  // TODO: aria
  //   button: aria-haspopup : menu, dialog, true
  //   popup: role="menu", role="dialog"

  const actionItemIcon = renderDOMSingle(actionItem.icon);
  actionItemIcon.setAttribute('role', 'presentation');
  appendChildAll(iconButton, actionItemIcon);

  if (!(iconButton instanceof HTMLElement)) {
    throw new Error('renderActionItem: iconButton is not an HTMLElement');
  }

  switch (typeof actionItem.action) {
    case 'function':
      iconButton.onclick = actionItem.action;
      break;

    case 'object':
      if (actionItem.action instanceof HTMLElement) {
        // create popup content and make it visually-hidden
        iconButton.setAttribute('aria-haspopup', 'true');
        const popupId = uuidv4();
        iconButton.setAttribute('aria-controls', popupId);
        iconButton.setAttribute('aria-expanded', 'false');

        const popupWrapper = renderPopup();
        popupWrapper.setAttribute('id', popupId);
        const popupContentWrapper = /** @type {HTMLElement} */(popupWrapper.querySelector(getCssClassSelector(domConstants.POPUP_CONTENT_WRAPPER)));
        if (!popupContentWrapper) {
          throw new Error('renderPopupMenu: contentWrapper not found');
        }
        popupContentWrapper.appendChild(actionItem.action);
        actionItemElement.appendChild(popupWrapper);

        // toggle popup content visibility on click
        iconButton.onclick = (e) => {
          e.stopPropagation();
          e.preventDefault();

          iconButton.setAttribute('aria-expanded', 'true');

          if (popupWrapper.classList.contains('utds-popup__wrapper--hidden')) {
            createPopper(iconButton, popupWrapper, {
              placement: 'bottom',
              modifiers: [
                {
                  name: 'offset',
                  options: { offset: [0, 11] },
                },
              ],
            });
            showHideElement(popupWrapper, true, domConstants.POPUP__VISIBLE, domConstants.POPUP__HIDDEN);
          } else {
            showHideElement(popupWrapper, false, domConstants.POPUP__VISIBLE, domConstants.POPUP__HIDDEN);
            iconButton.setAttribute('aria-expanded', 'false');
          }
        };
      } else {
        iconButton.setAttribute('aria-haspopup', 'menu');
        const popupId = uuidv4();
        iconButton.setAttribute('aria-controls', popupId);
        iconButton.setAttribute('aria-expanded', 'false');
        const popupMenu = renderPopupMenu((/** @type {PopupMenu} */ (actionItem.action)));
        popupMenu.setAttribute('id', popupId);
        appendChildAll(actionItemElement, popupMenu);

        popupFocusHandler(actionItemWrapper, iconButton, popupMenu);
      }
      break;

    default:
      // eslint-disable-next-line no-console
      console.error(actionItem.action);
      throw new Error(`Action Item: unknown action type '${typeof actionItem.action}'`);
  }
  return actionItemElement;
}
