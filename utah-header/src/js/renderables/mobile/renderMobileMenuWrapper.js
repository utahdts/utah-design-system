// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import MobileMenuWrapper from './html/MobileMenuWrapper.html?raw';

import domConstants, { getCssClassSelector } from '../../enumerations/domConstants';
import { renderDOMSingle } from '../../misc/renderDOM';

export default function renderMobileMenuWrapper(utahIdPopup) {
  const mobileMenuWrapper = renderDOMSingle(MobileMenuWrapper);
  const mobileMenuContent = mobileMenuWrapper.querySelector(getCssClassSelector(domConstants.MOBILE_MENU_CONTENT));
  if (!mobileMenuContent) {
    throw new Error('renderMobileMenuWrapper: mobileMenuContent not found');
  }

  mobileMenuContent.appendChild(utahIdPopup);

  return mobileMenuWrapper;
}
