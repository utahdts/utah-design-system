import { domConstants } from '../../enumerations/domConstants';
import { getIframeUrl } from './getIframeUrl';
import { showDebugMessage } from './showDebugMessage';

/**
 * Post a message to the iFrame to mark a notification as read.
 * @param {string} notificationId
 */
export function postMessageMarkAsRead(notificationId) {
  const apiIframe = /** @type {HTMLIFrameElement | null} */ (document.getElementById(domConstants.NOTIFICATIONS__IFRAME));

  // Derive the origin from the iframe's full URL for postMessage security
  const iframeOrigin = getIframeUrl();

  if (apiIframe?.contentWindow) {
    showDebugMessage('Parent: Mark a notification as read:', notificationId);
    apiIframe.contentWindow.postMessage({
      request: 'markAsRead',
      options: { id: notificationId },
    }, iframeOrigin); // Use the correctly derived iframeOrigin
  } else {
    // eslint-disable-next-line no-console
    console.error('postMessageMarkAsRead: Iframe is not ready or not found. Cannot mark notification as read.');
  }
}
