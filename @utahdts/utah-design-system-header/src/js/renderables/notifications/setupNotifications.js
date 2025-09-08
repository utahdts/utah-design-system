import { domConstants } from '../../enumerations/domConstants';
import { renderDOMSingle } from '../../misc/renderDOMSingle';
import { getIframeUrl } from './getIframeUrl';
import NotificationsIFrame from './html/NotificationsIFrame.html?raw';
import { setupNotificationsListener } from './setupNotificationsListener';

export function setupNotifications() {
  if (!document.getElementById(domConstants.NOTIFICATIONS__IFRAME)) {
    // add Notifications iFrame to the document body
    const iframe = renderDOMSingle(NotificationsIFrame);
    iframe.setAttribute('src', getIframeUrl());
    document.body.appendChild(iframe);
    setupNotificationsListener();
  }
}
