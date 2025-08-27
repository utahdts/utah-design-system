import { globalState } from '../../storage/globalState';
import { domConstants, getCssClassSelector } from '../../enumerations/domConstants';
import { notNull } from '../../misc/notNull';
import { renderDOMSingle } from '../../misc/renderDOMSingle';
import { renderActionItem } from '../actionItems/renderActionItem';
import drawerHTML from './html/NotificationsDrawer.html?raw';
import { markAllAsRead } from './markAllAsRead';
import { renderNotificationCards } from './renderNotificationCards';
import { renderBusyCard } from './renderBusyCard';

export function renderNotificationsDrawer() {
  /**
   * @param {HTMLElement} drawer
   */
  function closeNotificationDrawer(drawer) {
    drawer.remove();
    document.body.style.overflow = 'unset';
  }

  let drawer = renderDOMSingle(drawerHTML);
  let domTarget = document.body;

  const closeButton = /** @type {HTMLElement} */ (
    notNull(drawer.querySelector(getCssClassSelector(domConstants.NOTIFICATIONS__DRAWER_CLOSE_BUTTON)), 'renderNotificationsDrawer: closeButton not found')
  );

  const backdrop = /** @type {HTMLElement} */ (
    notNull(drawer.querySelector(getCssClassSelector(domConstants.NOTIFICATIONS__DRAWER_BACKDROP)), 'renderNotificationsDrawer: backdrop not found')
  );

  const drawerInner = /** @type {HTMLElement} */ (
    notNull(drawer.querySelector(getCssClassSelector(domConstants.NOTIFICATIONS__DRAWER_INNER)), 'renderNotificationsDrawer: drawer inner not found')
  );

  const drawerTitle = /** @type {HTMLElement} */ (
    notNull(drawer.querySelector(getCssClassSelector(domConstants.NOTIFICATIONS__DRAWER_TITLE)), 'renderNotificationsDrawer: drawer title not found')
  );

  const drawerEndFocus = /** @type {HTMLElement} */ (
    notNull(drawer.querySelector(getCssClassSelector(domConstants.NOTIFICATIONS__DRAWER_END_FOCUS)), 'renderNotificationsDrawer: drawer end focus not found')
  );

  const drawerHeaderButtons = /** @type {HTMLElement} */ (
    notNull(drawer.querySelector(getCssClassSelector(domConstants.NOTIFICATIONS__DRAWER_HEADER_BUTTONS)), 'renderNotificationsDrawer: drawer "header buttons" not found')
  );

  const drawerMarkAllRead = /** @type {HTMLButtonElement} */ (
    notNull(drawer.querySelector(`#${domConstants.NOTIFICATIONS__DRAWER_MARK_ALL_READ_ID}`), 'renderNotificationsDrawer: drawer "mark all read" not found')
  );

  const drawerViewAll = /** @type {HTMLElement} */ (
    notNull(drawer.querySelector(`#${domConstants.NOTIFICATIONS__DRAWER_VIEW_ALL_ID}`), 'renderNotificationsDrawer: drawer "mark all read" not found')
  );

  const notificationsList = /** @type {HTMLElement} */ (
    notNull(drawer.querySelector(getCssClassSelector(domConstants.NOTIFICATIONS__LIST)), 'renderNotificationsDrawer: notifications list end not found')
  );

  // close button will close it
  closeButton.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeNotificationDrawer(drawer);
  };

  // backdrop will close it
  backdrop.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeNotificationDrawer(drawer);
  };

  // escape key will close it
  drawer.onkeyup = (e) => {
    if (e.code === 'Escape' || e.key === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      closeNotificationDrawer(drawer);
    }
  };

  // drawer inner stop click through to backdrop
  drawerInner.onclick = (e) => {
    e.stopPropagation();
  };

  // settings button
  const settingsButton = renderActionItem({
    icon: '<span class="utds-icon-before-gear" aria-hidden="true"></span>',
    title: 'Settings',
    showTitle: false,
    actionFunction: () => {
      //TODO Click Settings
      // eslint-disable-next-line no-console
      console.log('click settings');
    },
    className: 'notifications-settings-button',
  });
  drawerHeaderButtons.appendChild(settingsButton);

  // mark all read button
  drawerMarkAllRead.onclick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    markAllAsRead();
  }

  // view all read button
  drawerViewAll.onclick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('click view all');
  }

  // add busy spinner card to drawer
  const { notifications, isBusy } = globalState.getState();
  if (isBusy) {
    notificationsList.appendChild(renderBusyCard());
  }

  if (notifications) {
    renderNotificationCards(notifications.edges, notificationsList, notifications.pageInfo);
  }

  //set focus back to the start of the dialog
  drawerEndFocus.addEventListener('focus', (e) => {
    e.preventDefault();
    e.stopPropagation();
    drawerTitle.focus();
  });

  // add drawer to the DOM
  domTarget?.appendChild(drawer);

  // hack to make the page not have double scroll bars
  document.body.style.overflow = 'hidden';

  //focus on the drawer title
  drawerTitle.focus();
}
