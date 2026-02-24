import { domConstants, getCssClassSelector } from '../../enumerations/domConstants';
import { renderDOMSingle } from '../../misc/renderDOMSingle';
import { hookupTooltip } from '../tooltip/hookupTooltip';
import AnchorActionItemHtml from './html/AnchorActionItem.html?raw';
import { renderActionItemBadge } from './renderActionItemBadge';

/** @typedef {import('src/@types/jsDocTypes.d').AnchorActionItem} AnchorActionItem */

/**
 * Renders an Action Item for the action bar area.
 * @param {AnchorActionItem} anchorActionItem - the action item to add
 * @returns {Element}
 */
export function renderAnchorActionItem(anchorActionItem) {
  const actionItemElement = renderDOMSingle(AnchorActionItemHtml);
  const titleElement = document.createTextNode(anchorActionItem.title);

  const actionItemWrapper = /** @type {HTMLElement} */(actionItemElement instanceof HTMLCollection ? actionItemElement[0] : actionItemElement);
  if (anchorActionItem.showTitle) {
    actionItemWrapper.classList.add(domConstants.ACTION_ITEM__ICON_BUTTON_TITLE);
  }

  const titleDiv = actionItemWrapper.querySelector(getCssClassSelector(domConstants.ACTION_ITEM__TITLE));
  if (!titleDiv) {
    throw new Error('renderActionItem: titleDiv not found');
  }
  titleDiv.appendChild(titleElement);
  if (anchorActionItem.showTitle) {
    titleDiv.classList.remove(domConstants.VISUALLY_HIDDEN);
  } else {
    titleDiv.classList.add(domConstants.VISUALLY_HIDDEN);
  }

  const iconAnchor = actionItemElement.querySelector(getCssClassSelector(domConstants.ACTION_ITEM__ICON_BUTTON));
  if (!iconAnchor) {
    throw new Error('renderActionItem: iconAnchor not found');
  }
  if (anchorActionItem.className) {
    iconAnchor.classList.add(anchorActionItem.className);
  }

  const badge = renderActionItemBadge(anchorActionItem.badge);
  if (badge) {
    iconAnchor.appendChild(badge);
  }

  const actionItemIcon = renderDOMSingle(anchorActionItem.icon);
  actionItemIcon.setAttribute('role', 'presentation');
  iconAnchor.appendChild(actionItemIcon);

  if (!(iconAnchor instanceof HTMLElement)) {
    throw new Error('renderActionItem: iconAnchor is not an HTMLElement');
  }

  if (anchorActionItem.actionLink) {
    // @ts-expect-error The element should be a link
    iconAnchor.href = anchorActionItem.actionLink;
  } else {
    // eslint-disable-next-line no-console
    console.error(anchorActionItem);
    throw new Error('Action Item: no defined action; must have an actionLink');
  }

  hookupTooltip(actionItemElement, document.createTextNode(anchorActionItem.title));

  return actionItemElement;
}
