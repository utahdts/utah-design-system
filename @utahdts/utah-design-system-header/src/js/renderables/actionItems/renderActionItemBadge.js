import { domConstants, getCssClassSelector } from '../../enumerations/domConstants';
import { renderDOMSingle } from '../../misc/renderDOMSingle';
import BadgeWrapperHtml from './html/BadgeWrapperHtml.html?raw';

/** @typedef {import('src/@types/jsDocTypes.d').Badge} Badge */

/**
 * renders a badge on an action item
 * @param {Badge | undefined} badge - the action's badge information
 * @returns {HTMLElement | null}
 */
export function renderActionItemBadge(badge) {
  let badgeWrapper = null;
  if (badge) {
    /** @type {HTMLElement} */
    badgeWrapper = /** @type {HTMLElement} */(renderDOMSingle(BadgeWrapperHtml));
    badgeWrapper.classList.add(domConstants.BADGE_WRAPPER__ACTION_ITEM);

    // add badge label to badge
    const badgeLabel = badgeWrapper.querySelector(getCssClassSelector(domConstants.BADGE__LABEL));
    if (!badgeLabel) {
      throw new Error('renderActionItemBadge: badgeLabel not found');
    }
    badgeLabel.appendChild(document.createTextNode(badge.label));

    // show value in badge if there is one
    if ((badge.value || badge.value === 0)) {
      const badgeValue = badgeWrapper.querySelector(getCssClassSelector(domConstants.BADGE__VALUE));
      if (!badgeValue) {
        throw new Error('renderActionItemBadge: badgeValue not found');
      }
      badgeValue.appendChild(document.createTextNode(`${badge.value}`));
    } else {
      // no value so make it smaller
      badgeWrapper.classList.add(domConstants.BADGE_WRAPPER__SMALL);
    }

    // apply class name
    if (badge.className) {
      badgeWrapper.classList.add(badge.className);
    }
  }

  return badgeWrapper;
}
