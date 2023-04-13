// @ts-check
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import UtahLogoLargeHtml from './html/UtahLogoLarge.html?raw';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import UtahLogoMediumHtml from './html/UtahLogoMedium.html?raw';

import sizes from '../../enumerations/sizes';
import renderDOMSingle from '../../misc/renderDOMSingle';
import { getUtahHeaderSettings } from '../../settings/settings';

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

  return renderDOMSingle(sizedLogo);
}
