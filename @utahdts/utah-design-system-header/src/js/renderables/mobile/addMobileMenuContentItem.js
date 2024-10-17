import { domConstants, getCssClassSelector } from '../../enumerations/domConstants';
import { renderDOMSingle } from '../../misc/renderDOMSingle';
import { uuidv4 } from '../../misc/uuidv4';
import MobileMenuContentItemWrapper from './html/MobileMenuContentItemWrapper.html?raw';

/**
 * @param {HTMLElement} mobileMenuContentItem
 * @returns {HTMLElement} the already added element
 */
export function addMobileMenuContentItem(mobileMenuContentItem) {
  const mobileMenuWrapper = document.querySelector(getCssClassSelector(domConstants.MOBILE_MENU__WRAPPER));
  if (!mobileMenuWrapper) {
    throw new Error('addMobileMenuContentItem: mobileMenuWrapper not found');
  }

  const mobileContentWrapper = mobileMenuWrapper.querySelector(getCssClassSelector(domConstants.MOBILE_MENU__CONTENT));
  if (!mobileContentWrapper) {
    throw new Error('addMobileMenuContentItem: mobileContentWrapper not found');
  }

  // wrap the mobileMenuContentItem in a content_item div
  const contentItemWrapper = renderDOMSingle(MobileMenuContentItemWrapper);

  // put content in the div
  contentItemWrapper.appendChild(mobileMenuContentItem);

  // put content_item div in mobile menu content area
  mobileContentWrapper.appendChild(contentItemWrapper);

  // always have an ID for easier aria hookup
  contentItemWrapper.setAttribute('id', uuidv4());
  return contentItemWrapper;
}
