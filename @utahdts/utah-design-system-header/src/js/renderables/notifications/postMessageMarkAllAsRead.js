import { domConstants } from '../../enumerations/domConstants';
import { getIframeUrl } from './getIframeUrl';
import { showDebugMessage } from './showDebugMessage';

export function postMessageMarkAllAsRead() {
  const apiIframe = /** @type {HTMLIFrameElement | null} */ (document.getElementById(domConstants.NOTIFICATIONS__IFRAME));

  // Derive the origin from the iframe's full URL for postMessage security
  const iframeOrigin = getIframeUrl();

  if (apiIframe?.contentWindow) {
    showDebugMessage('Parent: Mark all notifications as read:');
    apiIframe.contentWindow.postMessage({
      request: 'markAllAsRead',
    }, iframeOrigin); // Use the correctly derived iframeOrigin
  } else {
    // eslint-disable-next-line no-console
    console.error('postMessageMarkAllAsRead: Iframe is not ready or not found. Cannot mark notification as read.');
  }
}
