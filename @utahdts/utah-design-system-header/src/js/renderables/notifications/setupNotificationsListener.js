/* eslint-disable no-console */
import { domConstants, getCssClassSelector } from '../../enumerations/domConstants';
import { getIframeUrl } from './getIframeUrl';
import { globalState } from '../../storage/globalState';
import { notNull } from '../../misc/notNull';
import { renderNotificationCards } from './renderNotificationCards';
import { renderNotificationBadge } from './renderNotificationBadge';
import { MY_UTAH_REGEX } from '../../enumerations/regularExpressions';
import { areDomainsMatching } from '../../misc/areDomainsMatching';
import { showDebugMessage } from './showDebugMessage';
import { SET_DEBUG } from './utahHeaderSetDebug';

export function setupNotificationsListener() {
  const apiIframe = /** @type {HTMLIFrameElement | null} */ (document.getElementById(domConstants.NOTIFICATIONS__IFRAME));

  // Derive the origin from the iframe's full URL for postMessage security
  const iframeOrigin = getIframeUrl();
  const isMyUtah = MY_UTAH_REGEX.test(document.location.hostname);

  /**
   * Requests notifications data by sending a message to the iframe.
   * The iframe is now responsible for its own caching logic.
   * @param {Object} options - Options to pass to the iframe request.
   */
  function requestNotifications(options = {}) {
    if (apiIframe?.contentWindow) {
      showDebugMessage('Parent: Requesting data from iframe with options:', options);
      globalState.setState({isBusy: true});
      apiIframe.contentWindow.postMessage({
        request: 'getNotifications',
        options,
      }, iframeOrigin); // Use the correctly derived iframeOrigin
    } else {
      console.error('Parent: Iframe is not ready or not found. Cannot request notifications.');
    }
  }

  window.addEventListener('message', (event) => {
    // IMPORTANT: For security, always verify event.origin in production.
    // Ensure the message comes from the expected iframe origin
    showDebugMessage('message event:',event);
    if (!areDomainsMatching(event.origin,iframeOrigin)) {
      console.warn(`Parent: Blocking message from untrusted origin: ${event.origin}. Expected: ${iframeOrigin}`);
      return;
    }

    const messageData = event.data;
    // Ensure messageData.request exists and is 'getNotifications'
    if (!messageData || messageData.request !== 'getNotifications') {
      return;
    }

    showDebugMessage('Parent: Received response from iframe:', messageData);

    if (messageData.notifications) {
      const notifications = messageData.notifications;

      // Render notifications
      globalState.setState({notifications: notifications});

      renderNotificationBadge();

      const drawer = /** @type {HTMLElement} */ (
        document.getElementById(domConstants.NOTIFICATIONS__DRAWER_ID)
      );

      if (drawer) {
        const notificationsList = /** @type {HTMLElement} */ (
          notNull(drawer.querySelector(getCssClassSelector(domConstants.NOTIFICATIONS__LIST)), 'setupNotificationsListener: notifications list end not found')
        );
        renderNotificationCards(notifications.edges, notificationsList, notifications.pageInfo, isMyUtah)

        const busySpinner = drawer.querySelector(`.${domConstants.NOTIFY__BUSY_CARD}`);
        if (busySpinner) {
          busySpinner.remove();
        }
      }
      showDebugMessage('Parent: Notifications received from iframe:', notifications);
    } else {
      const error = messageData.notifications?.errors?.[0]?.message || 'An unknown error occurred.';
      console.warn('Parent: Error receiving notifications from iframe:', error);
    }

    globalState.setState({isBusy: false});
  });

  // This listener ensures that `requestNotifications()` is called only after the iframe is fully loaded.
  apiIframe?.addEventListener('load', function() {
    requestNotifications({ hostname: document.location.hostname });
    // @ts-expect-error The iframe should be loaded already
    apiIframe.contentWindow.postMessage({
      request: 'setDebug',
      options: {
        setDebug: localStorage.getItem(SET_DEBUG),
      },
    }, iframeOrigin);
  });
}
