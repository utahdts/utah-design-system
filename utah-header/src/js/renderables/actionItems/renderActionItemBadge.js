// @ts-check
import domConstants, { getCssClassSelector } from '../../enumerations/domConstants';
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
 * @return {HTMLElement | null}
 */
export default function renderActionItemBadge(actionItem) {
  let badgeWrapper = null;
  if (actionItem.badge) {
    /** @type HTMLElement */
    badgeWrapper = /** @type {HTMLElement} */(renderDOMSingle(BadgeWrapperHtml));
    badgeWrapper.classList.add(domConstants.BADGE_WRAPPER__ACTION_ITEM);

    // add badge label to badge
    const badgeLabel = badgeWrapper.querySelector(getCssClassSelector(domConstants.BADGE__LABEL));
    if (!badgeLabel) {
      throw new Error('renderActionItemBadge: badgeLabel not found');
    }
    badgeLabel.appendChild(document.createTextNode(actionItem.badge.label));

    // show value in badge if there is one
    if ((actionItem.badge.value || actionItem.badge.value === 0)) {
      const badgeValue = badgeWrapper.querySelector(getCssClassSelector(domConstants.BADGE__VALUE));
      if (!badgeValue) {
        throw new Error('renderActionItemBadge: badgeValue not found');
      }
      badgeValue.appendChild(document.createTextNode(`${actionItem.badge.value}`));
    } else {
      // no value so make it smaller
      badgeWrapper.classList.add(domConstants.BADGE_WRAPPER__SMALL);
    }

    // apply class name
    if (actionItem.badge.className) {
      badgeWrapper.classList.add(actionItem.badge.className);
    }
  }

  return badgeWrapper;
}
