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

  const actionItemWrapper = actionItemElement instanceof HTMLCollection ? actionItemElement[0] : actionItemElement;
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
        iconButton.onclick = () => console.log('Action Item: show child node popup', actionItem.action);
        iconButton.setAttribute('aria-haspopup', 'true');
        // TODO: Make a popup and the content inside
        const popupWrapper = renderPopup();
        const popupContentWrapper = popupWrapper.querySelector(getCssClassSelector(domConstants.POPUP_CONTENT_WRAPPER));
        if (!popupContentWrapper) {
          throw new Error('renderPopupMenu: contentWrapper not found');
        }
        popupContentWrapper.appendChild(actionItem.action);
      } else {
        iconButton.setAttribute('aria-haspopup', 'menu');
        const popupId = uuidv4();
        iconButton.setAttribute('aria-controls', popupId);
        iconButton.setAttribute('aria-expanded', 'false');
        const popupMenu = renderPopupMenu((/** @type {PopupMenu} */ (actionItem.action)));
        popupMenu.setAttribute('id', popupId);
        appendChildAll(actionItemElement, popupMenu);

        iconButton.onclick = (e) => {
          e.stopPropagation();
          e.preventDefault();

          iconButton.setAttribute('aria-expanded', 'true');

          if (popupMenu.classList.contains('utds-popup__wrapper--hidden')) {
            const htmlElement = /** @type {HTMLElement} */(popupMenu);
            createPopper(iconButton, htmlElement, {
              placement: 'bottom',
              modifiers: [
                {
                  name: 'offset',
                  options: { offset: [0, 11] },
                },
              ],
            });
            showHideElement(popupMenu, true, domConstants.POPUP__VISIBLE, domConstants.POPUP__HIDDEN);
          } else {
            showHideElement(popupMenu, false, domConstants.POPUP__VISIBLE, domConstants.POPUP__HIDDEN);
            iconButton.setAttribute('aria-expanded', 'false');
          }
        };
      }
      break;

    default:
      // eslint-disable-next-line no-console
      console.error(actionItem.action);
      throw new Error(`Action Item: unknown action type '${typeof actionItem.action}'`);
  }
  return actionItemElement;
}
