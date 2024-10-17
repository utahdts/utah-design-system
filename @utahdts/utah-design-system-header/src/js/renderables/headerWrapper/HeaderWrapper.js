// @ts-expect-error
import CitizenExperienceWrapperMobile from '../citizenExperience/html/CitizenExperienceWrapperMobile.html?raw';
// @ts-expect-error
import headerLogoWrapper from './html/HeaderLogoWrapper.html?raw';
// @ts-expect-error
import headerWrapper from './html/HeaderWrapper.html?raw';
// @ts-expect-error
import verticalLineHtml from './html/VerticalLine.html?raw';

import { sizes } from '../../enumerations/sizes';
import { renderDOMSingle } from '../../misc/renderDOMSingle';
import { getUtahHeaderSettings } from '../../settings/getUtahHeaderSettings';
import { CitizenExperience } from '../citizenExperience/CitizenExperience';
import { LogoTitle } from '../logoTitle/LogoTitle';
import { UtahLogo } from '../utahLogo/UtahLogo';

/**
 * Creates the header wrapper DOM and appends the:
 * Utah logo, flexible space, Agency Logo, and citizen experience (action items, utah id button) to it.
 * @returns {Element}
 */
export function HeaderWrapper() {
  const header = renderDOMSingle(headerWrapper);

  header.classList.add(`utds-header--${getUtahHeaderSettings().size?.toLowerCase() || sizes.MEDIUM}`);

  const logoWrapper = renderDOMSingle(headerLogoWrapper);
  header.appendChild(logoWrapper);

  logoWrapper.appendChild(UtahLogo());

  logoWrapper.appendChild(renderDOMSingle(verticalLineHtml));

  logoWrapper.appendChild(LogoTitle());

  header.appendChild(CitizenExperience());
  header.appendChild(renderDOMSingle(CitizenExperienceWrapperMobile));

  return header;
}
