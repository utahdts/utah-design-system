import { domConstants, getCssClassSelector } from '../../enumerations/domConstants';
import { notNull } from '../../misc/notNull';
import { getNotificationCardDom } from './getNotificationCardDom';
import { globalState } from '../../storage/globalState';
import { renderNotificationBadge } from './renderNotificationBadge';
import { postMessageMarkAllAsRead } from './postMessageMarkAllAsRead';

export function markAllAsRead() {
  const notificationList = /** @type {HTMLElement[]} */ (
    notNull(Array.from(document.querySelectorAll(getCssClassSelector(domConstants.NOTIFY__LIST_ITEM))), 'renderNotificationItem: Notifications List not found')
  );
  notificationList.forEach((item) => {
    const {
      status,
      title,
    } = getNotificationCardDom(item);

    status.classList.add(domConstants.NOTIFY__LIST_ITEM_STATUS_IS_READ);
    title.classList.add(domConstants.NOTIFY__LIST_ITEM_STATUS_IS_READ);
    item.classList.add(domConstants.NOTIFY__LIST_ITEM_IS_READ);
  });

  const currentState = globalState.getState();
  const notifications = currentState?.notifications;
  if (!notifications || !notifications.edges) {
    throw new Error('No notifications object found in current state!');
  } else {
    const updatedNotifications = notifications.edges.map(notification => {
      if (!notification.node.isRead) {
        const updatedNotificationNode = {
          ...notification.node,
          isRead: true,
        };

        return {
          ...notification,
          node: updatedNotificationNode,
        };
      } else {
        return notification;
      }
    });
    const newUnreadCount = 0;

    globalState.setState({
      notifications: {
        ...notifications,
        edges: updatedNotifications,
        unreadCount: newUnreadCount,
      },
    });
    renderNotificationBadge();

    postMessageMarkAllAsRead();
  }
}
