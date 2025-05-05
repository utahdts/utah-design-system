import { renderNotificationsDrawer } from './renderNotificationsDrawer';

/** @typedef {import('src/@types/jsDocTypes.d').ActionItem} ActionItem */

/**
 * @returns {ActionItem}
 */
export function getNotificationsActionItem() {
  return  {
    //TODO make this notifications badge dynamic
    badge: {
      label: 'Unread Notifications',
      value: 2,
    },
    showTitle: false,
    title: 'Notifications',
    actionFunction: () => {
      // eslint-disable-next-line no-console
      console.log('click notifications');
      renderNotificationsDrawer();
    },
    icon: '<span class="utds-icon-before-alert" aria-hidden="true" />',
  }
}
