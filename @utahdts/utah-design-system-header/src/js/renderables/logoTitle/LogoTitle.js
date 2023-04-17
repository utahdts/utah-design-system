// @ts-check
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import LogoTitleWrapper from './html/LogoTitleWrapper.html?raw';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import LogoTitleWrapperLink from './html/LogoTitleWrapperLink.html?raw';

import domConstants, { getCssClassSelector } from '../../enumerations/domConstants';
import isString from '../../misc/isString';
import renderDOMSingle from '../../misc/renderDOMSingle';
import { getUtahHeaderSettings } from '../../settings/settings';

/**
 * @returns {Element}
 */
export default function LogoTitle() {
  const logoTitleURL = getUtahHeaderSettings().titleURL;
  const logoTitleWrapper = !logoTitleURL ? renderDOMSingle(LogoTitleWrapper) : renderDOMSingle(LogoTitleWrapperLink);
  if (!logoTitleWrapper) {
    throw new Error('LogoTitle: titleWrapper is null');
  }
  if (logoTitleURL) {
    logoTitleWrapper.setAttribute('href', logoTitleURL);
  }

  // Render Logo image
  const logoWrapper = logoTitleWrapper.querySelector(getCssClassSelector(domConstants.TITLE__LOGO));
  if (!logoWrapper) {
    throw new Error('LogoTitle: logoWrapper is null');
  }

  const settingsLogo = getUtahHeaderSettings().logo;
  const settingsShowTitle = getUtahHeaderSettings().showTitle;
  const settingsTitle = getUtahHeaderSettings().title;
  if (settingsLogo) {
    /** @type {HTMLCollection | Element} */
    let settingsLogoElement;
    if (isString(settingsLogo)) {
      settingsLogoElement = renderDOMSingle(/** @type {string} */(settingsLogo));
    } else {
      settingsLogoElement = /** @type {Element} */ (settingsLogo);
    }
    settingsLogoElement.setAttribute('role', 'presentation');
    logoWrapper.appendChild(settingsLogoElement);
  } else {
    logoTitleWrapper.removeChild(logoWrapper);
  }

  // Render Title text
  const title = document.createTextNode(settingsTitle);
  const titleWrapper = logoTitleWrapper.querySelector(getCssClassSelector(domConstants.TITLE__TITLE));
  titleWrapper?.appendChild(title);
  if (!settingsShowTitle && settingsLogo) {
    titleWrapper?.classList.add(domConstants.VISUALLY_HIDDEN);
  }

  return logoTitleWrapper;
}
