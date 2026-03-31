import { renderDOMSingle } from '../../misc/renderDOMSingle';
import OfficialBanner from './html/OfficialBanner.html?raw';
import OfficialPopupContent from './html/UtahOfficialWebsitePopupContent.html?raw';
import { domConstants, getCssClassSelector } from '../../enumerations/domConstants';
import { uuidv4 } from '../../misc/uuidv4';
import { notNull } from '../../misc/notNull';
import { hideMobileMenu } from '../mobile/util/showHideHamburgerElements';

export function closeOfficialWebsite() {
  const officialBanner = notNull(
    document.querySelector(getCssClassSelector(domConstants.OFFICIAL_BANNER)),
    'closeOfficialWebsite: officialBanner not found'
  );
  const officialPopupContent = notNull(
    document.querySelector(getCssClassSelector(domConstants.OFFICIAL_WRAPPER)),
    'closeOfficialWebsite: officialPopupContent not found'
  );
  const moreButton = notNull(
    officialBanner.querySelector(getCssClassSelector(domConstants.OFFICIAL_BUTTON)),
    'closeOfficialWebsite: moreButton not found'
  );
  officialPopupContent.classList.add(domConstants.VISUALLY_HIDDEN);

  moreButton.setAttribute('aria-expanded', 'false');
  officialPopupContent.setAttribute('aria-hidden', 'true');
  // shift tabbing from mobile menu item content's first action item button would tab in to this
  // hidden "official website" content. setting the tabindex to -1 makes this not happen
  officialPopupContent.setAttribute('tabIndex', '-1');
}

export function openOfficialWebsite() {
  const officialBanner = notNull(
    document.querySelector(getCssClassSelector(domConstants.OFFICIAL_BANNER)),
    'officialBanner: officialBanner not found'
  );
  const officialPopupContent = notNull(
    document.querySelector(getCssClassSelector(domConstants.OFFICIAL_WRAPPER)),
    'openOfficialWebsite: officialPopupContent not found'
  );
  const moreButton = notNull(
    officialBanner.querySelector(getCssClassSelector(domConstants.OFFICIAL_BUTTON)),
    'openOfficialWebsite: moreButton not found'
  );
  officialPopupContent.classList.remove(domConstants.VISUALLY_HIDDEN);

  officialPopupContent.removeAttribute('tabIndex');
  moreButton.setAttribute('aria-expanded', 'true');
  officialPopupContent.setAttribute('aria-hidden', 'false');
  // @ts-expect-error dumb Element vs HTMLElement
  officialPopupContent.focus();

  hideMobileMenu();
}

export function renderOfficialBanner() {
  const officialBanner = renderDOMSingle(OfficialBanner);
  const officialPopupContent = renderDOMSingle(OfficialPopupContent);

  officialBanner.appendChild(officialPopupContent);

  const moreButton = /** @type {HTMLElement} */(officialBanner?.querySelector(getCssClassSelector(domConstants.OFFICIAL_BUTTON)));
  if (!moreButton) {
    throw new Error('renderOfficialWebsite: moreButton not found');
  }
  if (moreButton.onclick) {
    throw new Error('renderOfficialWebsite: moreButton already has an onclick');
  }


  moreButton.onclick = (e) => {
    e.stopPropagation();
    e.preventDefault();

    officialPopupContent.classList.toggle(domConstants.VISUALLY_HIDDEN);
    if (officialPopupContent.classList.contains(domConstants.VISUALLY_HIDDEN)) {
      closeOfficialWebsite();
    } else {
      openOfficialWebsite();
    }

    // Hide all tooltips when button is clicked because the popup opens
    const toolTips = document.querySelectorAll(getCssClassSelector(domConstants.TOOLTIP__WRAPPER));
    toolTips?.forEach((tooltip) => {
      tooltip.classList.add(domConstants.TOOLTIP__WRAPPER__HIDDEN);
      tooltip.classList.remove(domConstants.TOOLTIP__WRAPPER__VISIBLE);
    });
  }

  if (!moreButton.id) {
    moreButton.id = uuidv4();
  }

  if (!officialPopupContent.id) {
    officialPopupContent.id = uuidv4();
  }

  // Hook-up aria
  moreButton.setAttribute('aria-controls', officialPopupContent.id);
  moreButton.setAttribute('aria-expanded', 'false');
  officialPopupContent.setAttribute('aria-hidden', 'true');
  officialPopupContent.setAttribute('aria-labelledby', moreButton.id);

  return officialBanner;
}
