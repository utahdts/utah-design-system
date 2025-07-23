import { domConstants } from '../../enumerations/domConstants';
import { renderDOMSingle } from '../../misc/renderDOMSingle';
import NotificationsIFrame from './html/NotificationsIFrame.html?raw';
import { setupNotificationsListener } from './setupNotificationsListener';

const enableNotifications = true;

export function setupNotifications() {
  if (enableNotifications) {
    if (!document.getElementById(domConstants.NOTIFICATIONS__IFRAME)) {
      // add Notifications iFrame to the document body
      const iframe = renderDOMSingle(NotificationsIFrame);
      document.body.appendChild(iframe);
      setupNotificationsListener();
    }
  }
}
