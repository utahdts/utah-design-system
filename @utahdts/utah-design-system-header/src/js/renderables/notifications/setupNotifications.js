import { domConstants } from '../../enumerations/domConstants';
import { renderDOMSingle } from '../../misc/renderDOMSingle';
import { getIframeUrl } from './getIframeUrl';
import NotificationsIFrame from './html/NotificationsIFrame.html?raw';
import { setupNotificationsListener } from './setupNotificationsListener';
import { utahHeaderSetDebug } from './utahHeaderSetDebug';

// a way to possibly turn off notifications
const enableNotifications = true;

export function setupNotifications() {
  if (enableNotifications) {
    if (!document.getElementById(domConstants.NOTIFICATIONS__IFRAME)) {
      // add Notifications iFrame to the document body
      const iframe = renderDOMSingle(NotificationsIFrame);
      iframe.setAttribute('src', getIframeUrl());
      document.body.appendChild(iframe);
      // @ts-expect-error Create the global function
      window.utahHeaderSetDebug = utahHeaderSetDebug;
      utahHeaderSetDebug();
      setupNotificationsListener();
    }
  }
}
