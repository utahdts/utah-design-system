// @ts-check
import { renderDOMSingle } from '../../misc/renderDOM';
import cssClasses, { getCssClassSelector } from '../../enumerations/cssClasses';
import { getSettings } from '../../settings/settings';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import LogoTitleWrapper from './html/LogoTitleWrapper.html?raw';
import appendChildAll from '../../misc/appendChildAll';
import isString from '../../misc/isString';

/**
 * @returns {HTMLCollection | Element}
 */
export default function LogoTitle() {
  const logoTitleWrapper = renderDOMSingle(LogoTitleWrapper);
  if (!logoTitleWrapper) {
    throw new Error('LogoTitle: titleWrapper is null');
  }

  // Render Logo image
  const logoWrapper = logoTitleWrapper.querySelector(getCssClassSelector(cssClasses.TITLE__LOGO));
  if (!logoWrapper) {
    throw new Error('LogoTitle: logoWrapper is null');
  }

  const settingsLogo = getSettings().logo;
  const settingsShowTitle = getSettings().showTitle;
  const settingsTitle = getSettings().title;
  if (settingsLogo) {
    /** @type {HTMLCollection | Element} */
    let settingsLogoElement;
    if (isString(settingsLogo)) {
      settingsLogoElement = renderDOMSingle(/** @type {string} */(settingsLogo));
    } else {
      settingsLogoElement = /** @type {Element} */ (settingsLogo);
    }
    settingsLogoElement.setAttribute('role', 'presentation');
    appendChildAll(logoWrapper, settingsLogoElement);
  }

  // Render Title text
  const title = document.createTextNode(settingsTitle);
  const titleWrapper = logoTitleWrapper.querySelector(getCssClassSelector(cssClasses.TITLE__TITLE));
  titleWrapper?.appendChild(title);
  if (!settingsShowTitle && settingsLogo) {
    titleWrapper?.classList.add(cssClasses.VISUALLY_HIDDEN);
  }

  return logoTitleWrapper;
}
