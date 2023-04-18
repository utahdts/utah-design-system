// @ts-check
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import UtahLogoLargeHtml from './html/UtahLogoLarge.html?raw';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import UtahLogoMediumHtml from './html/UtahLogoMedium.html?raw';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import UtahOfficialWebsiteHoverContentHtml from './html/UtahOfficialWebsiteHoverContent.html?raw';

import domConstants, { getCssClassSelector } from '../../enumerations/domConstants';
import sizes from '../../enumerations/sizes';
import popupFocusHandler from '../../misc/popupFocusHandler';
import renderDOMSingle from '../../misc/renderDOMSingle';
import { getUtahHeaderSettings } from '../../settings/settings';
import renderPopup from '../popup/renderPopup';
import uuidv4 from '../../misc/uuidv4';

/**
 * @returns {Element}
 */
export default function UtahLogo() {
  let sizedLogo;
  switch (getUtahHeaderSettings().size) {
    case sizes.LARGE:
      sizedLogo = UtahLogoLargeHtml;
      break;

    case sizes.SMALL:
    case sizes.MEDIUM:
      sizedLogo = UtahLogoMediumHtml;
      break;

    default:
      throw new Error(`Unknown settings size: '${getUtahHeaderSettings().size}'`);
  }

  const logoWrapper = renderDOMSingle(sizedLogo);
  const logoButton = /** @type {HTMLElement} */(logoWrapper.querySelector(getCssClassSelector(domConstants.LOGO_SVG)));
  if (!logoButton) {
    throw new Error('UtahLogo: logoButton not found');
  }

  logoWrapper.setAttribute('id', uuidv4());
  const logoPopupWrapper = renderPopup(logoWrapper);

  const popupContentWrapper = /** @type {HTMLElement} */(logoPopupWrapper.querySelector(getCssClassSelector(domConstants.POPUP_CONTENT_WRAPPER)));
  if (!popupContentWrapper) {
    throw new Error('UtahLogo: contentWrapper not found');
  }
  const popupContent = renderDOMSingle(UtahOfficialWebsiteHoverContentHtml);
  popupContent.setAttribute('id', uuidv4());
  popupContentWrapper.appendChild(popupContent);
  logoWrapper.appendChild(logoPopupWrapper);
  popupFocusHandler(logoWrapper, logoButton, logoPopupWrapper, 'dialog', { shouldFocusOnHover: true, preventOnClickHandling: true });

  return logoWrapper;
}
