import { domConstants, getCssClassSelector } from '../../enumerations/domConstants';
import { renderNotificationItem } from './renderNotificationItem';
import { renderZeroUnreadMessages } from './renderZeroUnreadMessages';
import { renderNextButton } from './renderNextButton';

/** @typedef {import('src/@types/jsDocTypes.d').NotificationEdge} NotificationEdge */
/** @typedef {import('src/@types/jsDocTypes.d').PageInfo} PageInfo */

/**
 * Render an array of notifications into the drawer.
 * @param {NotificationEdge[]} notificationsData
 * @param {null|HTMLElement} [notificationsList=null]
 * @param {PageInfo} [pageInfo]
 * @param {boolean} [isMyUtah]
 */
export function renderNotificationCards(notificationsData, notificationsList = null, pageInfo, isMyUtah = false) {
  const notificationsListDom = notificationsList || document.querySelector(getCssClassSelector(domConstants.NOTIFICATIONS__LIST));
  if (notificationsListDom) {
    if (notificationsData.length > 0) {
      // Sort notifications by isRead, then by createDate
      notificationsData.sort((a,b) => {
        const aCreateDate = new Date(a.node.createDate).valueOf();
        const bCreateDate = new Date(b.node.createDate).valueOf();
        return (Number(a.node.isRead) - Number(b.node.isRead))
          || (bCreateDate - aCreateDate);
      }).forEach((notificationItem) => {
        // Prevent duplication
        if (!document.getElementById(notificationItem.node.id)) {
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
        }
      });

      const drawerMarkAllRead = /** @type {HTMLButtonElement} */ (
        document.querySelector(`#${domConstants.NOTIFICATIONS__DRAWER_MARK_ALL_READ_ID}`)
      );
      if (drawerMarkAllRead) {
        drawerMarkAllRead.disabled = false;
      }
      if (pageInfo?.hasNextPage) {
        notificationsListDom.appendChild(renderNextButton(pageInfo.endCursor));
      } else {
        document.getElementById(domConstants.NOTIFICATIONS__LOAD_MORE)?.parentElement?.remove();
      }
    } else {
      notificationsListDom.appendChild(renderZeroUnreadMessages(isMyUtah));
    }
  } else {
    throw new Error('renderNotificationCards: notificationsListDom not found!');
  }
}
