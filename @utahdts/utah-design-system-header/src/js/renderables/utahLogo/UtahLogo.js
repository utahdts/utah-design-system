// @ts-expect-error
// eslint-disable-next-line import/no-unresolved
import UtahLogoLargeHtml from './html/UtahLogoLarge.html?raw';
// @ts-expect-error
// eslint-disable-next-line import/no-unresolved
import UtahLogoMediumHtml from './html/UtahLogoMedium.html?raw';
// @ts-expect-error
// eslint-disable-next-line import/no-unresolved
import UtahOfficialWebsiteHoverContentHtml from './html/UtahOfficialWebsiteHoverContent.html?raw';

import { domConstants, getCssClassSelector } from '../../enumerations/domConstants';
import { sizes } from '../../enumerations/sizes';
import { renderDOMSingle } from '../../misc/renderDOMSingle';
import { uuidv4 } from '../../misc/uuidv4';
import { getUtahHeaderSettings } from '../../settings/getUtahHeaderSettings';
import { hookupTooltip } from '../tooltip/hookupTooltip';

/**
 * @returns {Element}
 */
export function UtahLogo() {
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
  hookupTooltip(logoWrapper, renderDOMSingle(UtahOfficialWebsiteHoverContentHtml));

  return logoWrapper;
}
