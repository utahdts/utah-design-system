// @ts-expect-error
// eslint-disable-next-line import/no-unresolved
import UtahLogoLargeHtml from './html/UtahLogoLarge.html?raw';
// @ts-expect-error
// eslint-disable-next-line import/no-unresolved
import UtahLogoMediumHtml from './html/UtahLogoMedium.html?raw';
// @ts-expect-error
// eslint-disable-next-line import/no-unresolved
import UtahOfficialWebsiteHoverContentHtml from './html/UtahOfficialWebsiteHoverContent.html?raw';

import packageJson from '../../../../package.json';
import { domConstants, getCssClassSelector } from '../../enumerations/domConstants';
import { sizes } from '../../enumerations/sizes';
import { renderDOMSingle } from '../../misc/renderDOMSingle';
import { uuidv4 } from '../../misc/uuidv4';
import { getUtahHeaderSettings } from '../../settings/getUtahHeaderSettings';
import { hookupTooltip } from '../tooltip/hookupTooltip';

let isDataCollected = false;
/**
 * @returns {Element}
 */
export function UtahLogo() {
  const settings = getUtahHeaderSettings();
  let sizedLogo;
  switch (settings.size) {
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

  if (
    !isDataCollected
    && (!window.location.hostname || !['localhost', '127.0.0.1', '::1', '.local'].find((local) => window.location.hostname.includes(local)))
  ) {
    isDataCollected = true;
    const dataImage = document.createElement('img');
    dataImage.classList.add('utah-logo-wrapper__data');
    dataImage.classList.add('hidden');
    dataImage.ariaHidden = 'true';
    dataImage.src = `https://uds-data-a234spjofq-wm.a.run.app/${packageJson.version}.png?applicationType=${encodeURIComponent(settings.applicationType || 'unspecified')}`;
    logoWrapper.appendChild(dataImage);
  }

  return logoWrapper;
}
