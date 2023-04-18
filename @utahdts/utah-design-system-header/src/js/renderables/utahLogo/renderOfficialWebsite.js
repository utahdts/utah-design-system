// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import UtahOfficialWebsitePopupContentHtml from './html/UtahOfficialWebsitePopupContent.html?raw';

import domConstants, { getCssClassSelector } from '../../enumerations/domConstants';
import renderDOMSingle from '../../misc/renderDOMSingle';

/**
 * @param {HTMLElement} logoWrapper
 * @returns {Element}
 */
export default function renderOfficialWebsite() {
  const officialWebsiteWrapper = renderDOMSingle(UtahOfficialWebsitePopupContentHtml);

  const logoWrapper = document.querySelector(getCssClassSelector(domConstants.LOGO));
  const logoButton = /** @type {HTMLElement} */(logoWrapper.querySelector(getCssClassSelector(domConstants.LOGO_SVG)));
  if (!logoButton) {
    throw new Error('renderOfficialWebsite: logoButton not found');
  }
  if (logoButton.onclick) {
    throw new Error('renderOfficialWebsite: logoButton already has an onclick');
  }

  logoButton.onclick = () => officialWebsiteWrapper.classList.toggle(domConstants.VISUALLY_HIDDEN);

  const closeButton = officialWebsiteWrapper.querySelector(getCssClassSelector(domConstants.LOGO_OFFICIAL_CLOSE_BUTTON));
  if (!closeButton) {
    throw new Error('renderOfficialWebsite: closeButton not found');
  }
  closeButton.onclick = () => officialWebsiteWrapper.classList.toggle(domConstants.VISUALLY_HIDDEN);

  return officialWebsiteWrapper;
}
