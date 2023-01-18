// @ts-check
import domConstants from '../../enumerations/domConstants';
import { renderDOMSingle } from '../../misc/renderDOM';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import BadgeWrapperHtml from './html/BadgeWrapperHtml.html?raw';

/**
 * @typedef {import('../../misc/jsDocTypes').ActionItem} ActionItem
 */

/**
 * renders a badge on an action item
 * @param {ActionItem} actionItem - the action which may have badge information
 * @param {Element} actionItemElement - the DOM to which to attach the badge DOM
 * @return {void}
 */
export default function renderActionItemBadge(actionItem, actionItemElement) {
  if (actionItem.badge) {
    /** @type HTMLElement */
    const badgeWrapper = /** @type {HTMLElement} */(renderDOMSingle(BadgeWrapperHtml));

    if ((actionItem.badge.value || actionItem.badge.value === 0)) {
      badgeWrapper.appendChild(document.createTextNode(`${actionItem.badge.value}`));
    } else {
      badgeWrapper.classList.add(domConstants.BADGE_WRAPPER__SMALL);
    }

    if (actionItem.badge.className) {
      badgeWrapper.classList.add(actionItem.badge.className);
    }

    actionItemElement.appendChild(badgeWrapper);
  }
}
