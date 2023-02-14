import { renderDOM } from '../../misc/renderDOM';
import sizes from '../../enumerations/sizes';
import { getUtahHeaderSettings } from '../../settings/settings';
// eslint-disable-next-line import/no-unresolved
import UtahLogoLargeHtml from './html/UtahLogoLarge.html?raw';
// eslint-disable-next-line import/no-unresolved
import UtahLogoMediumHtml from './html/UtahLogoMedium.html?raw';

/**
 * @returns {HTMLCollection | Element}
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
      throw new Error(`Unknown settings size: '${getUtahHeaderSettings().size}`);
  }

  return renderDOM(sizedLogo);
}
