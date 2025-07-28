import { globalState } from '../../storage/globalState';
import { renderNotificationBadge } from './renderNotificationBadge';

/**
 * Marks a single notification as read
 * @param {string} notificationId
 */
export function markNotificationAsRead(notificationId) {
  // TODO: API - mark the notification as read
  const currentState = globalState.getState();
  const notifications = currentState?.notifications;
  if (!notifications || !notifications.edges) {
    throw new Error('renderNotificationsItem: No notifications object found in current state!');
  } else {
    //Loop through the notifications and find the matching ID and change its isRead value to true
    const existingNotification = notifications.edges.find(
      (edge) => edge.node.id === notificationId
    );

    if (existingNotification && !existingNotification.node.isRead) {
      // 1. Create a new NotificationNode with isRead set to true
      const updatedNotificationNode = {
        ...existingNotification.node,
        isRead: true,
      };

      // 2. Create a new NotificationEdge with the updated node
      const updatedNotification = {
        ...existingNotification,
        node: updatedNotificationNode,
      };

      // 3. Create a new 'edges' array with the updated notification
      const newNotificationsList = notifications.edges.map((edge) =>
        edge.node.id === notificationId ? updatedNotification : edge
      );

      const newUnreadCount = Math.max(0, notifications.unreadCount - 1);

      globalState.setState({
        notifications: {
          ...notifications,
          edges: newNotificationsList,
          unreadCount: newUnreadCount,
        },
      });
      renderNotificationBadge();
    }
  }
}
