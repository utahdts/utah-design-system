// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import UtahOfficialWebsitePopupContentHtml from './html/UtahOfficialWebsitePopupContent.html?raw';

import domConstants, { getCssClassSelector } from '../../enumerations/domConstants';
import renderDOMSingle from '../../misc/renderDOMSingle';
import uuidv4 from '../../misc/uuidv4';

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

  logoButton.onclick = () => {
    officialWebsiteWrapper.classList.toggle(domConstants.VISUALLY_HIDDEN);
    if (officialWebsiteWrapper.classList.contains(domConstants.VISUALLY_HIDDEN)) {
      logoButton.setAttribute('aria-expanded', 'false');
      officialWebsiteWrapper.setAttribute('aria-hidden', 'true');
    } else {
      logoButton.setAttribute('aria-expanded', 'true');
      officialWebsiteWrapper.setAttribute('aria-hidden', 'false');
      officialWebsiteWrapper.focus();
    }

    // hide all tooltips when button is clicked because the popup opens
    const toolTips = document.querySelectorAll(getCssClassSelector(domConstants.TOOLTIP__WRAPPER));
    toolTips?.forEach((tooltip) => {
      tooltip.classList.add(domConstants.TOOLTIP__WRAPPER__HIDDEN);
      tooltip.classList.remove(domConstants.TOOLTIP__WRAPPER__VISIBLE);
    });
  };

  const closeButton = officialWebsiteWrapper.querySelector(getCssClassSelector(domConstants.LOGO_OFFICIAL_CLOSE_BUTTON));
  if (!closeButton) {
    throw new Error('renderOfficialWebsite: closeButton not found');
  }
  closeButton.onclick = () => {
    officialWebsiteWrapper.classList.toggle(domConstants.VISUALLY_HIDDEN);
    logoButton.focus();
    logoButton.setAttribute('aria-expanded', 'false');
    officialWebsiteWrapper.setAttribute('aria-hidden', 'true');
  };

  if (!closeButton.id) {
    closeButton.id = uuidv4();
  }
  if (!officialWebsiteWrapper.id) {
    officialWebsiteWrapper.id = uuidv4();
  }

  // hook up aria
  logoButton.setAttribute('aria-controls', officialWebsiteWrapper.id);
  logoButton.setAttribute('aria-expanded', 'false');
  officialWebsiteWrapper.setAttribute('aria-hidden', 'true');
  officialWebsiteWrapper.setAttribute('aria-labelledby', logoButton.id);

  return officialWebsiteWrapper;
}
