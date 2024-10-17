import { domConstants, getCssClassSelector } from '../../enumerations/domConstants';
import { notNull } from '../../misc/notNull';
import { renderDOMSingle } from '../../misc/renderDOMSingle';
import { uuidv4 } from '../../misc/uuidv4';
import { hideMobileMenu } from '../mobile/util/showHideHamburgerElements';
// @ts-expect-error
import UtahOfficialWebsitePopupContentHtml from './html/UtahOfficialWebsitePopupContent.html?raw';

export function closeOfficialWebsite() {
  const officialWebsiteWrapper = notNull(
    document.querySelector(getCssClassSelector(domConstants.LOGO_OFFICIAL_WRAPPER)),
    'openOfficialWebsite: official wrapper not found'
  );
  const logoWrapper = notNull(
    document.querySelector(getCssClassSelector(domConstants.LOGO)),
    'openOfficialWebsite: logoWrapper not found'
  );
  const logoButton = notNull(
    logoWrapper.querySelector(getCssClassSelector(domConstants.LOGO_SVG)),
    'openOfficialWebsite: logoButton not found'
  );
  const closeButton = notNull(
    officialWebsiteWrapper.querySelector(getCssClassSelector(domConstants.LOGO_OFFICIAL_CLOSE_BUTTON)),
    'openOfficialWebsite: official close button not found'
  );
  officialWebsiteWrapper.classList.add(domConstants.VISUALLY_HIDDEN);

  logoButton.setAttribute('aria-expanded', 'false');
  officialWebsiteWrapper.setAttribute('aria-hidden', 'true');
  // shift tabbing from mobile menu item content's first action item button would tab in to this
  // hidden "official website" content. setting the tabindex to -1 makes this not happen
  closeButton.setAttribute('tabIndex', '-1');
  officialWebsiteWrapper.setAttribute('tabIndex', '-1');

  // hide all tooltips when button is clicked because the popup opens
  const toolTips = document.querySelectorAll(getCssClassSelector(domConstants.TOOLTIP__WRAPPER));
  toolTips?.forEach((tooltip) => {
    tooltip.classList.add(domConstants.TOOLTIP__WRAPPER__HIDDEN);
    tooltip.classList.remove(domConstants.TOOLTIP__WRAPPER__VISIBLE);
  });
}

export function openOfficialWebsite() {
  const officialWebsiteWrapper = notNull(
    document.querySelector(getCssClassSelector(domConstants.LOGO_OFFICIAL_WRAPPER)),
    'openOfficialWebsite: official wrapper not found'
  );
  const logoWrapper = notNull(
    document.querySelector(getCssClassSelector(domConstants.LOGO)),
    'openOfficialWebsite: logoWrapper not found'
  );
  const logoButton = notNull(
    logoWrapper.querySelector(getCssClassSelector(domConstants.LOGO_SVG)),
    'openOfficialWebsite: logoButton not found'
  );
  const closeButton = notNull(
    officialWebsiteWrapper.querySelector(getCssClassSelector(domConstants.LOGO_OFFICIAL_CLOSE_BUTTON)),
    'openOfficialWebsite: official close button not found'
  );
  officialWebsiteWrapper.classList.remove(domConstants.VISUALLY_HIDDEN);

  closeButton.removeAttribute('tabIndex');
  officialWebsiteWrapper.removeAttribute('tabIndex');
  logoButton.setAttribute('aria-expanded', 'true');
  officialWebsiteWrapper.setAttribute('aria-hidden', 'false');
  // @ts-expect-error
  officialWebsiteWrapper.focus();

  // hide all tooltips when button is clicked because the popup opens
  const toolTips = document.querySelectorAll(getCssClassSelector(domConstants.TOOLTIP__WRAPPER));
  toolTips?.forEach((tooltip) => {
    tooltip.classList.add(domConstants.TOOLTIP__WRAPPER__HIDDEN);
    tooltip.classList.remove(domConstants.TOOLTIP__WRAPPER__VISIBLE);
  });

  hideMobileMenu();
}

/**
 * @returns {Element}
 */
export function renderOfficialWebsite() {
  const officialWebsiteWrapper = renderDOMSingle(UtahOfficialWebsitePopupContentHtml);

  const logoWrapper = document.querySelector(getCssClassSelector(domConstants.LOGO));
  const logoButton = /** @type {HTMLElement} */(logoWrapper?.querySelector(getCssClassSelector(domConstants.LOGO_SVG)));
  if (!logoButton) {
    throw new Error('renderOfficialWebsite: logoButton not found');
  }
  if (logoButton.onclick) {
    throw new Error('renderOfficialWebsite: logoButton already has an onclick');
  }

  const closeButton = officialWebsiteWrapper.querySelector(getCssClassSelector(domConstants.LOGO_OFFICIAL_CLOSE_BUTTON));
  if (!closeButton) {
    throw new Error('renderOfficialWebsite: closeButton not found');
  }

  logoButton.onclick = () => {
    officialWebsiteWrapper.classList.toggle(domConstants.VISUALLY_HIDDEN);
    if (officialWebsiteWrapper.classList.contains(domConstants.VISUALLY_HIDDEN)) {
      closeOfficialWebsite();
    } else {
      openOfficialWebsite();
    }

    // hide all tooltips when button is clicked because the popup opens
    const toolTips = document.querySelectorAll(getCssClassSelector(domConstants.TOOLTIP__WRAPPER));
    toolTips?.forEach((tooltip) => {
      tooltip.classList.add(domConstants.TOOLTIP__WRAPPER__HIDDEN);
      tooltip.classList.remove(domConstants.TOOLTIP__WRAPPER__VISIBLE);
    });
  };

  // @ts-expect-error
  closeButton.onclick = () => {
    officialWebsiteWrapper.classList.toggle(domConstants.VISUALLY_HIDDEN);
    logoButton.focus();
    logoButton.setAttribute('aria-expanded', 'false');
    officialWebsiteWrapper.setAttribute('aria-hidden', 'true');
  };

  if (!closeButton.id) {
    closeButton.id = uuidv4();
  }
  if (!officialWebsiteWrapper.id) {
    officialWebsiteWrapper.id = uuidv4();
  }

  // hook up aria
  logoButton.setAttribute('aria-controls', officialWebsiteWrapper.id);
  logoButton.setAttribute('aria-expanded', 'false');
  officialWebsiteWrapper.setAttribute('aria-hidden', 'true');
  officialWebsiteWrapper.setAttribute('aria-labelledby', logoButton.id);

  return officialWebsiteWrapper;
}
