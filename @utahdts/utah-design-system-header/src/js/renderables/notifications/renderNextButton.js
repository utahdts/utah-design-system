import { renderDOMSingle } from '../../misc/renderDOMSingle';
import buttonHTML from './html/ButtonNext.html?raw';
import { domConstants } from '../../enumerations/domConstants';
import { getIframeUrl } from './getIframeUrl';

/**
 * @param {string} endCursor
 * @returns {Element}
 */
export function renderNextButton(endCursor) {
  const oldButton = document.getElementById('load-more-notifications');
  if (oldButton) oldButton.parentElement?.remove();

  const apiIframe = /** @type {HTMLIFrameElement | null} */ (document.getElementById(domConstants.NOTIFICATIONS__IFRAME));
  const iframeOrigin = getIframeUrl();

  let button = renderDOMSingle(buttonHTML);

  button.addEventListener('click', () => {
    if (apiIframe?.contentWindow) {
      apiIframe.contentWindow.postMessage({
        request: 'getNotifications',
        options: { endCursor },
      }, iframeOrigin);
    }
  });

  return button;
}
