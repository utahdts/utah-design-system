import { domConstants } from '../../enumerations/domConstants';
import { renderNotificationsDrawer } from './renderNotificationsDrawer';

/** @typedef {import('src/@types/jsDocTypes.d').ActionItem} ActionItem */

/**
 * @returns {ActionItem}
 */
export function getNotificationsActionItem() {
  return  {
    showTitle: false,
    title: 'Notifications',
    actionFunction: () => {
      renderNotificationsDrawer();
    },
    icon: '<span class="utds-icon-before-alert" aria-hidden="true" />',
    className: domConstants.NOTIFICATIONS__ACTION_ITEM,
  }
}
