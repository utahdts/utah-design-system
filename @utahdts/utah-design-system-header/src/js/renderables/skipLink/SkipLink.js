// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import SkipLinkHtml from './html/SkipLink.html?raw';

import renderDOMSingle from '../../misc/renderDOMSingle';
import getUtahHeaderSettings from '../../settings/getUtahHeaderSettings';
import domConstants, { getCssClassSelector } from '../../enumerations/domConstants';

/**
 * Renders the skip link if the setting `skipLinkUrl` is set.
 *
 * @returns {Element | null}
 */
export default function SkipLink() {
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
  }

  return skipLink;
}
