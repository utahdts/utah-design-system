import { domConstants, getCssClassSelector } from '../../enumerations/domConstants';
import { notNull } from '../../misc/notNull';

/**
 * @param {Element} footerElement the DOM Element for the footer so far (probably already added to page)
 * @param {string | null | undefined} copyrightYear
 */
export function renderFooterCopyrightYear(footerElement, copyrightYear) {
  const copyrightYearSpan = notNull(
    footerElement.querySelector(getCssClassSelector(domConstants.FOOTER_COPYRIGHT_YEAR)),
    'renderFooterCopyrightYear: copyrightYearSpan not found'
  );
  copyrightYearSpan.innerHTML = copyrightYear ?? '';
}
