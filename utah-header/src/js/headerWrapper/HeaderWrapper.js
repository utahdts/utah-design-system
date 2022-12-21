// eslint-disable-next-line import/no-unresolved
import actionItemsWrapper from './html/ActionItemsWrapper.html?raw';
// eslint-disable-next-line import/no-unresolved
import logoTitleWrapper from './html/LogoTitleWrapper.html?raw';
import renderDOM from '../../misc/renderDOM';
import UtahLogo from '../utahLogo/UtahLogo';
// eslint-disable-next-line import/no-unresolved
import headerWrapper from './html/HeaderWrapper.html?raw';
// eslint-disable-next-line import/no-unresolved
import verticalLineHtml from './html/VerticalLine.html?raw';
// eslint-disable-next-line import/no-unresolved
import headerLogoWrapper from './html/HeaderLogoWrapper.html?raw';
// eslint-disable-next-line import/no-unresolved
import headerCitizenExperienceWrapper from './html/HeaderCitizenExperienceWrapper.html?raw';

/**
 * Creates the header wrapper DOM and appends the:
 * Utah logo, flexible space, and action items wrappers to it.
 * These are just the wrappers and not the content in the wrappers
 * @returns {ChildNode}
 */
export default function HeaderWrapper() {
  const header = renderDOM(headerWrapper);

  const logoWrapper = renderDOM(headerLogoWrapper);
  header.appendChild(logoWrapper);

  // logo isn't a wrapper...
  logoWrapper.appendChildAll(UtahLogo());

  logoWrapper.appendChildAll(renderDOM(verticalLineHtml));
  logoWrapper.appendChildAll(renderDOM(logoTitleWrapper));

  const citizenExperienceWrapper = renderDOM(headerCitizenExperienceWrapper);
  header.appendChild(citizenExperienceWrapper);
  citizenExperienceWrapper.appendChildAll(renderDOM(actionItemsWrapper));

  return header;
}
