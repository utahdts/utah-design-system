import { domConstants } from '../../enumerations/domConstants';
import { notNull } from '../../misc/notNull';
import { globalState } from '../../storage/globalState';
import { renderActionItemBadge } from '../actionItems/renderActionItemBadge';

/** @typedef {import('src/@types/jsDocTypes.d').Badge} Badge */

/**
 * Render notifications badges based on data or preset value - desktop and mobile
 * If there are no notifications then remove the badge
 * @param {number} [count]
 */
export function renderNotificationBadge(count = NaN) {
  const appState = globalState.getState();

  const notificationsActionItems = /** @type {HTMLCollection} */ (
    notNull(document.getElementsByClassName(domConstants.NOTIFICATIONS__ACTION_ITEM), 'renderNotificationBadge: notifications' +
      ' action item not found')
  );

  const mobileHamburgerMenu = /** @type {HTMLElement} */ (
    notNull(document.getElementById(domConstants.MAIN_MENU__HAMBURGER_ID), 'renderNotificationBadge: notifications' +
      ' hamburger menu item not found')
  );

  const arrayOfItems = Array.from(notificationsActionItems);
  if (mobileHamburgerMenu) arrayOfItems.push(mobileHamburgerMenu);

  arrayOfItems.forEach((notificationsActionItem) => {
    let badgeDOM = notificationsActionItem.querySelector(`.${domConstants.NOTIFICATIONS__ACTION_ITEM_BADGE}`);

    if (count || (appState.notifications?.unreadCount && appState.notifications.unreadCount > 0)) {
      // render a notifications badge
      const badge = /** @type {Badge} */ {
        label: 'Notifications',
        value: appState.notifications?.unreadCount || count,
        className: domConstants.NOTIFICATIONS__ACTION_ITEM_BADGE,
      }

      if (badgeDOM) {
        badgeDOM.remove();
      }

      badgeDOM = /** @type {HTMLElement} */ (
        notNull(renderActionItemBadge(badge), 'renderNotificationBadge: notifications badge not found')
      )

      notificationsActionItem.appendChild(badgeDOM);

    } else {
      // remove the notifications badge
      if (badgeDOM) {
        badgeDOM.remove();
      }
    }
  })
}
