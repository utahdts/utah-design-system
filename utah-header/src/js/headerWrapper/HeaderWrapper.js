// eslint-disable-next-line import/no-unresolved
import renderDOM from '../../misc/renderDOM';
import LogoTitle from '../logoTitle/LogoTitle';
import UtahLogo from '../utahLogo/UtahLogo';
// eslint-disable-next-line import/no-unresolved
import headerWrapper from './html/HeaderWrapper.html?raw';
// eslint-disable-next-line import/no-unresolved
import verticalLineHtml from './html/VerticalLine.html?raw';
// eslint-disable-next-line import/no-unresolved
import headerLogoWrapper from './html/HeaderLogoWrapper.html?raw';
import CitizenExperience from '../citizenExperience/CitizenExperience';

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

  logoWrapper.appendChildAll(UtahLogo());

  logoWrapper.appendChildAll(renderDOM(verticalLineHtml));

  logoWrapper.appendChildAll(LogoTitle());

  logoWrapper.appendChildAll(CitizenExperience());

  return header;
}
