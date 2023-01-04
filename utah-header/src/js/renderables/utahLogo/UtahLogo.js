import renderDOM from '../../../misc/renderDOM';
import size from '../../enumerations/size';
import { getSettings } from '../../settings/settings';
// eslint-disable-next-line import/no-unresolved
import UtahLogoLargeHtml from './html/UtahLogoLarge.html?raw';
// eslint-disable-next-line import/no-unresolved
import UtahLogoMediumHtml from './html/UtahLogoMedium.html?raw';

export default function UtahLogo() {
  let sizedLogo;
  switch (getSettings().size) {
    case size.LARGE: sizedLogo = UtahLogoLargeHtml; break;

    case size.SMALL:
    case size.MEDIUM:
      sizedLogo = UtahLogoMediumHtml;
      break;

    default:
      throw new Error(`Unknown settings size: '${getSettings().size}`);
  }
  return renderDOM(sizedLogo);
}
