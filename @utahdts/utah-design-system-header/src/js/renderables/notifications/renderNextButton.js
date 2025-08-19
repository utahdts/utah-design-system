import { renderDOMSingle } from '../../misc/renderDOMSingle';
import buttonHTML from './html/ButtonNext.html?raw';
import { domConstants } from '../../enumerations/domConstants';
import { getIframeUrl } from './getIframeUrl';
import { renderSpinner } from '../spinner/renderSpinner';

/**
 * @param {string} endCursor
 */
function getNotifications(endCursor) {
  const apiIframe = /** @type {HTMLIFrameElement | null} */ (document.getElementById(domConstants.NOTIFICATIONS__IFRAME));
  const iframeOrigin = getIframeUrl();

  if (apiIframe?.contentWindow) {
    apiIframe.contentWindow.postMessage({
      request: 'getNotifications',
      options: { endCursor },
    }, iframeOrigin);
  }
}

/**
 * @param {string} endCursor
 * @returns {Element}
 */
export function renderNextButton(endCursor) {
  const oldButton = document.getElementById('load-more-notifications');
  if (oldButton) oldButton.parentElement?.remove();

  const buttonCard = renderDOMSingle(buttonHTML);
  const button = buttonCard.children[0];

  if (button) {
    button.addEventListener('click', () => {
      button.innerHTML = '';
      button.appendChild(renderSpinner({size: '24', strokeWidth: '8'}));
      button.ariaDisabled = 'true';
      button.setAttribute('disabled', 'true');
      getNotifications(endCursor);
    });
  }

  return buttonCard;
}
