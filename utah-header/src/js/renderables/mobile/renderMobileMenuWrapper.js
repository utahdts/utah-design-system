// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import MobileMenuWrapper from './html/MobileMenuWrapper.html?raw';

import domConstants, { getCssClassSelector } from '../../enumerations/domConstants';
import { renderDOMSingle } from '../../misc/renderDOM';

/**
 * @param {HTMLElement} mobileContentItem the content to put in the mobile menu content area with a wrapper around it
 * @returns {HTMLElement|} the wrapper around the passed in context
 */
export default function renderMobileMenuWrapper(mobileContentItem) {
  const mobileMenuWrapper = renderDOMSingle(MobileMenuWrapper);
  const mobileMenuContent = mobileMenuWrapper.querySelector(getCssClassSelector(domConstants.MOBILE_MENU__CONTENT));
  if (!mobileMenuContent) {
    throw new Error('renderMobileMenuWrapper: mobileMenuContent not found');
  }

  mobileMenuContent.appendChild(mobileContentItem);

  return mobileMenuWrapper;
}
