import { domConstants, getCssClassSelector } from '../../enumerations/domConstants';
import { renderNotificationItem } from './renderNotificationItem';
import { renderZeroUnreadMessages } from './renderZeroUnreadMessages';

/** @typedef {import('src/@types/jsDocTypes.d').NotificationEdge} NotificationEdge */

/**
 * Render an array of notifications into the drawer.
 * @param {NotificationEdge[]} notificationsData
 * @param {null|HTMLElement} [notificationsList=null]
 */
export function renderNotificationCards(notificationsData, notificationsList = null) {
  const notificationsListDom = notificationsList || document.querySelector(getCssClassSelector(domConstants.NOTIFICATIONS__LIST));

  if (notificationsListDom) {
    if (notificationsData.length > 0) {
      notificationsData.map((notificationItem) => {
        notificationsListDom.appendChild(
          renderNotificationItem({
            logoUrl: notificationItem.node.logoUrl,
            logoDescription: notificationItem.node.logoDescription,
            createDate: notificationItem.node.createDate,
            expireDate: notificationItem.node.expireDate,
            icon: String(notificationItem.node.icon).toLowerCase(),
            id: notificationItem.node.id,
            isRead: notificationItem.node.isRead,
            linkText: notificationItem.node.linkText,
            linkUrl: notificationItem.node.linkUrl,
            message: notificationItem.node.message,
            title: notificationItem.node.title,
          })
        );
      });

      const drawerMarkAllRead = /** @type {HTMLButtonElement} */ (
        document.querySelector(`#${domConstants.NOTIFICATIONS__DRAWER_MARK_ALL_READ_ID}`)
      );
      if (drawerMarkAllRead) {
        drawerMarkAllRead.disabled = false;
      }
    } else {
      notificationsListDom.appendChild(renderZeroUnreadMessages());
    }
  } else {
    throw new Error('renderNotificationCards: notificationsListDom not found!');
  }
}
