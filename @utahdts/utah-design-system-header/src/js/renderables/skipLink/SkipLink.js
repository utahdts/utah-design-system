import { domConstants, getCssClassSelector } from '../../enumerations/domConstants';
import { renderDOMSingle } from '../../misc/renderDOMSingle';
import { getUtahHeaderSettings } from '../../settings/getUtahHeaderSettings';
import SkipLinkHtml from './html/SkipLink.html?raw';

/**
 * Renders the skip link if the setting `skipLinkUrl` is set.
 * @returns {Element | null}
 */
export function SkipLink() {
  const { skipLinkUrl } = getUtahHeaderSettings();
  let skipLink;

  if (skipLinkUrl) {
    skipLink = renderDOMSingle(SkipLinkHtml);

    const skipLinkLink = skipLink.querySelector(getCssClassSelector(domConstants.SKIP_LINK_LINK));
    if (!skipLinkLink) {
      throw new Error('Skip Link Link is null');
    }
    skipLinkLink.setAttribute('href', skipLinkUrl);
  } else {
    skipLink = null;
    // eslint-disable-next-line no-console
    console.warn('Utah Design System: It is best practice to provide a skip link url (skipLinkUrl). See: https://designsystem.utah.gov/library/components/navigationLinks/skipLink');
  }

  return skipLink;
}
