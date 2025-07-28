import { domConstants } from '../../enumerations/domConstants';
import { renderNotificationsDrawer } from './renderNotificationsDrawer';

/** @typedef {import('src/@types/jsDocTypes.d').ActionItem} ActionItem */

/**
 * @returns {ActionItem}
 */
export function getNotificationsActionItem() {
  return  {
    //TODO make this notifications badge dynamic
    // badge: {
    //   label: 'Unread Notifications',
    //   value: 2,
    // },
    showTitle: false,
    title: 'Notifications',
    actionFunction: () => {
      renderNotificationsDrawer();
    },
    icon: '<span class="utds-icon-before-alert" aria-hidden="true" />',
    className: domConstants.NOTIFICATIONS__ACTION_ITEM,
  }
}
