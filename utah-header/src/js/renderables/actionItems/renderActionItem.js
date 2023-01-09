// @ts-check
import { createPopper } from '@popperjs/core';
import cssClasses, { getCssClassSelector } from '../../enumerations/cssClasses';
import appendChildAll from '../../misc/appendChildAll';
import { renderDOMSingle } from '../../misc/renderDOM';
import renderPopupMenu from '../popupMenu/renderPopupMenu';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import ActionItemHtml from './html/ActionItem.html?raw';

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
    actionItemWrapper.classList.add(cssClasses.ACTION_ITEM__ICON_BUTTON_TITLE);
  }

  const titleDiv = actionItemWrapper.querySelector(getCssClassSelector(cssClasses.ACTION_ITEM__TITLE));
  if (!titleDiv) {
    throw new Error('renderActionItem: titleDiv not found');
  }
  appendChildAll(titleDiv, titleElement);
  if (actionItem.showTitle) {
    titleDiv.classList.remove(cssClasses.VISUALLY_HIDDEN);
  } else {
    titleDiv.classList.add(cssClasses.VISUALLY_HIDDEN);
  }

  const iconButton = actionItemElement.querySelector(getCssClassSelector(cssClasses.ACTION_ITEM__ICON_BUTTON));
  if (!iconButton) {
    throw new Error('renderActionItem: iconButton not found');
  }
  if (actionItem.className) {
    iconButton.classList.add(actionItem.className);
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
        /* TODO: show child node popup
        *               * aria-haspopup="true"
        *               * aria-controls="ID"
        *               * aria-expanded="true/false"
        */
        iconButton.onclick = () => console.log('Action Item: show child node popup', actionItem.action);
      } else {
        /* TODO: show popup menu
        *               * aria-haspopup="true"
        *               * aria-controls="ID"
        *               * aria-expanded="true/false"
        */
        const popupMenu = renderPopupMenu((/** @type {PopupMenu} */ (actionItem.action)));
        appendChildAll(actionItemElement, popupMenu);

        iconButton.onclick = () => {
          const htmlElement = /** @type {HTMLElement} */(popupMenu);
          createPopper(iconButton, htmlElement, { placement: 'bottom' });
          htmlElement.style.display = 'block';
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
