import renderDOM from '../../../misc/renderDOM';
// eslint-disable-next-line import/no-unresolved
import LogoTitleWrapper from './html/LogoTitleWrapper.html?raw';
import { getSettings } from '../../settings/settings';
import cssClasses, { getCssClassSelector } from '../../enumerations/cssClasses';

export default function LogoTitle() {
  const titleWrapper = renderDOM(LogoTitleWrapper);

  // Render Logo image
  const settingsLogo = getSettings().logo;
  if (settingsLogo) {
    titleWrapper.querySelector(getCssClassSelector(cssClasses.TITLE__LOGO)).appendChild(renderDOM(settingsLogo));
  }

  // Render Title text
  const settingsTitle = getSettings().title;
  if (settingsTitle) {
    const title = document.createTextNode(settingsTitle);
    titleWrapper.querySelector(getCssClassSelector(cssClasses.TITLE__TITLE)).appendChild(title);
  }

  return titleWrapper;
}
