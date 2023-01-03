import renderDOM from '../../misc/renderDOM';
// eslint-disable-next-line import/no-unresolved
import UtahLogoLargeHtml from './html/UtahLogoLarge.html?raw';
// eslint-disable-next-line import/no-unresolved
import UtahLogoMediumHtml from './html/UtahLogoMedium.html?raw';

export default function UtahLogo() {
  // TODO: Check size of header in settings() and render the correct logo
  return renderDOM(UtahLogoMediumHtml || UtahLogoLargeHtml);
}
