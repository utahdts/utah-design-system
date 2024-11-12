import { childrenMenuTypes } from '../../enumerations/childrenMenuTypes';
import { domConstants, getCssClassSelector } from '../../enumerations/domConstants';
import { popupFocusHandler } from '../../misc/popupFocusHandler';
import { renderDOMSingle } from '../../misc/renderDOMSingle';
import { uuidv4 } from '../../misc/uuidv4';
import { renderPopup } from '../popup/renderPopup';
import { renderPopupMenu } from '../popupMenu/renderPopupMenu';
import { hookupTooltip } from '../tooltip/hookupTooltip';
import ActionItemHtml from './html/ActionItem.html?raw';
import { renderActionItemBadge } from './renderActionItemBadge';

/** @typedef {import('src/@types/jsDocTypes.d').ActionItem} ActionItem */
/** @typedef {import('src/@types/jsDocTypes.d').PopupMenu} PopupMenu */

/**
 * Renders an Action Item for the action bar area.
 * @param {ActionItem} actionItem - the action item to add
 * @returns {Element}
 */
export function renderActionItem(actionItem) {
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
  titleDiv.appendChild(titleElement);
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

  const badge = renderActionItemBadge(actionItem.badge);
  if (badge) {
    iconButton.appendChild(badge);
  }

  const actionItemIcon = renderDOMSingle(actionItem.icon);
  actionItemIcon.setAttribute('role', 'presentation');
  iconButton.appendChild(actionItemIcon);

  if (!(iconButton instanceof HTMLElement)) {
    throw new Error('renderActionItem: iconButton is not an HTMLElement');
  }

  if (actionItem.actionFunction) {
    iconButton.onclick = actionItem.actionFunction;
  } else if (actionItem.actionDom) {
    // create popup content and make it visually-hidden
    const iconButtonId = uuidv4();
    iconButton.setAttribute('id', iconButtonId);

    const popupWrapper = renderPopup(iconButton);
    const popupContentWrapper = /** @type {HTMLElement} */(popupWrapper.querySelector(getCssClassSelector(domConstants.POPUP_CONTENT_WRAPPER)));
    if (!popupContentWrapper) {
      throw new Error('renderPopupMenu: contentWrapper not found');
    }
    popupContentWrapper.appendChild(renderDOMSingle(typeof actionItem.actionDom === 'function' ? actionItem.actionDom() : actionItem.actionDom));
    actionItemElement.appendChild(popupWrapper);
    popupFocusHandler(actionItemWrapper, iconButton, popupWrapper, 'dialog', undefined);
  } else if (actionItem.actionPopupMenu) {
    // content is a menu
    const iconButtonId = uuidv4();
    iconButton.setAttribute('id', iconButtonId);
    const popupMenu = renderPopupMenu(
      (/** @type {PopupMenu} */ (actionItem.actionPopupMenu)),
      iconButton,
      {
        childrenMenuType: childrenMenuTypes.INLINE,
        parentMenuLinkSuffix: actionItem.actionPopupMenu.parentMenuLinkSuffix,
      }
    );
    actionItemElement.appendChild(popupMenu);

    popupFocusHandler(actionItemWrapper, iconButton, popupMenu, 'menu', undefined);
  } else {
    // eslint-disable-next-line no-console
    console.error(actionItem);
    throw new Error('Action Item: no defined action; must have either actionFunction, actionDom, or actionPopupMenu');
  }

  hookupTooltip(actionItemElement, document.createTextNode(actionItem.title));

  return actionItemElement;
}
