// @ts-check
import { renderDOM, renderDOMSingle } from '../../misc/renderDOM';
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
  const titleWrapper = renderDOMSingle(LogoTitleWrapper);
  if (!titleWrapper) {
    throw new Error('LogoTitle: titleWrapper is null');
  }

  // Render Logo image
  const logoWrapper = titleWrapper.querySelector(getCssClassSelector(cssClasses.TITLE__LOGO));
  if (!logoWrapper) {
    throw new Error('LogoTitle: logoWrapper is null');
  }

  const settingsLogo = getSettings().logo;
  if (settingsLogo) {
    /** @type {HTMLCollection | Element} */
    let settingsLogoElement;
    if (isString(settingsLogo)) {
      settingsLogoElement = renderDOM(/** @type {string} */(settingsLogo));
    } else {
      settingsLogoElement = /** @type {Element} */ (settingsLogo);
    }
    appendChildAll(logoWrapper, settingsLogoElement);
  }

  // Render Title text
  const settingsTitle = getSettings().title;
  if (settingsTitle) {
    const title = document.createTextNode(settingsTitle);
    titleWrapper.querySelector(getCssClassSelector(cssClasses.TITLE__TITLE))?.appendChild(title);
  }

  return titleWrapper;
}
