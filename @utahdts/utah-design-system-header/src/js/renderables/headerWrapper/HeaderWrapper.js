// @ts-check
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import headerLogoWrapper from './html/HeaderLogoWrapper.html?raw';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import headerWrapper from './html/HeaderWrapper.html?raw';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import verticalLineHtml from './html/VerticalLine.html?raw';

import sizes from '../../enumerations/sizes';
import renderDOMSingle from '../../misc/renderDOMSingle';
import { getUtahHeaderSettings } from '../../settings/settings';
import CitizenExperience from '../citizenExperience/CitizenExperience';
import LogoTitle from '../logoTitle/LogoTitle';
import UtahLogo from '../utahLogo/UtahLogo';

/**
 * Creates the header wrapper DOM and appends the:
 * Utah logo, flexible space, Agency Logo, and citizen experience (action items, utah id button) to it.
 *
 * @returns {Element}
 */
export default function HeaderWrapper() {
  const header = renderDOMSingle(headerWrapper);

  header.classList.add(`utds-header--${getUtahHeaderSettings().size?.toLowerCase() || sizes.MEDIUM}`);

  const logoWrapper = renderDOMSingle(headerLogoWrapper);
  header.appendChild(logoWrapper);

  logoWrapper.appendChild(UtahLogo());

  logoWrapper.appendChild(renderDOMSingle(verticalLineHtml));

  logoWrapper.appendChild(LogoTitle());

  header.appendChild(CitizenExperience());

  return header;
}
