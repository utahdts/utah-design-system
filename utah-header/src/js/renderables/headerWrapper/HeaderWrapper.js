// @ts-check
// eslint-disable-next-line import/no-unresolved
import { renderDOM, renderDOMSingle } from '../../misc/renderDOM';
import LogoTitle from '../logoTitle/LogoTitle';
import UtahLogo from '../utahLogo/UtahLogo';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import headerWrapper from './html/HeaderWrapper.html?raw';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import verticalLineHtml from './html/VerticalLine.html?raw';
import appendChildAll from '../../misc/appendChildAll';
import CitizenExperience from '../citizenExperience/CitizenExperience';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import headerLogoWrapper from './html/HeaderLogoWrapper.html?raw';

/**
 * Creates the header wrapper DOM and appends the:
 * Utah logo, flexible space, and action items wrappers to it.
 *
 * @returns {Element}
 */
export default function HeaderWrapper() {
  const header = renderDOMSingle(headerWrapper);

  const logoWrapper = renderDOMSingle(headerLogoWrapper);
  header.appendChild(logoWrapper);

  appendChildAll(logoWrapper, UtahLogo());

  appendChildAll(logoWrapper, renderDOM(verticalLineHtml));

  appendChildAll(logoWrapper, LogoTitle());

  appendChildAll(logoWrapper, CitizenExperience());

  return header;
}
