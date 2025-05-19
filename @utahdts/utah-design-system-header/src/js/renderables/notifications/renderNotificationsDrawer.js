import { domConstants, getCssClassSelector } from '../../enumerations/domConstants';
import { notNull } from '../../misc/notNull';
import { renderDOMSingle } from '../../misc/renderDOMSingle';
import { renderActionItem } from '../actionItems/renderActionItem';
import drawerHTML from './html/NotificationsDrawer.html?raw';
import { markAllAsRead } from './markAllAsRead';
import { renderNotificationItem } from './renderNotificationItem';

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

  const drawerMarkAllRead = /** @type {HTMLElement} */ (
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
      console.log('click settings');
    },
    className: 'notifications-settings-button',
  });
  drawerHeaderButtons.appendChild(settingsButton);

  // mark all read button
  drawerMarkAllRead.onclick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log('click mark all read');
    markAllAsRead();
  }

  // view all read button
  drawerViewAll.onclick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log('click view all');
  }

  notificationsList.appendChild(
    renderNotificationItem({
      agencyDivisionFilename: 'http://localhost/cdn-img/dgo-dts.svg',
      agencyDivisionName: 'Division of Technology Services',
      createDate: '2025-05-05T14:48:00.000Z',
      cursor: 'CursorPlaceholder',
      expireDate: '2025-07-05T14:48:00.000Z',
      icon: 'info',
      id: 'b9338920-680e-436c-998d-6699ee3b4911',
      isReadDate: null,
      linkText: 'Read more',
      linkUrl: 'https://www.guidgenerator.com',
      message: '128-bit GUIDs offer extremely low collision probability. Generating 1 billion/sec for a year or 600 million per person on Earth yields only a 50% chance of a duplicate.',
      title: 'GUIDs are cool, you should make a billion or so.',
    })
  );
  notificationsList.appendChild(
    renderNotificationItem({
      agencyDivisionFilename: 'http://localhost/cdn-img/dgo-dts.svg',
      agencyDivisionName: 'Division of Technology Services',
      createDate: '2025-05-05T14:48:00.000Z',
      cursor: 'CursorPlaceholder',
      expireDate: '2025-07-05T14:48:00.000Z',
      icon: 'help',
      id: 'b9338920-680e-436c-998d-6699ee3b4911',
      isReadDate: null,
      linkText: 'Read more',
      linkUrl: 'https://www.guidgenerator.com',
      message: '128-bit GUIDs offer extremely low collision probability. Generating 1 billion/sec for a year or 600 million per person on Earth yields only a 50% chance of a duplicate.',
      title: 'GUIDs are cool, you should make a billion or so.',
    })
  );
  notificationsList.appendChild(
    renderNotificationItem({
      agencyDivisionFilename: 'http://localhost/cdn-img/dgo-dts.svg',
      agencyDivisionName: 'Division of Technology Services',
      createDate: '2025-05-05T14:48:00.000Z',
      cursor: 'CursorPlaceholder',
      expireDate: '2025-07-05T14:48:00.000Z',
      icon: 'error',
      id: 'b9338920-680e-436c-998d-6699ee3b4911',
      isReadDate: null,
      linkText: 'Read more',
      linkUrl: 'https://www.guidgenerator.com',
      message: '128-bit GUIDs offer extremely low collision probability. Generating 1 billion/sec for a year or 600 million per person on Earth yields only a 50% chance of a duplicate.',
      title: 'GUIDs are cool, you should make a billion or so.',
    })
  );
  notificationsList.appendChild(
    renderNotificationItem({
      agencyDivisionFilename: 'http://localhost/cdn-img/dnr-dwr.png',
      agencyDivisionName: 'Division of Wildlife Resources',
      createDate: '2025-05-08T05:48:00.000Z',
      cursor: 'CursorPlaceholder',
      expireDate: '2025-07-05T14:48:00.000Z',
      icon: 'account',
      id: 'ba881982-eccd-4691-bdc9-b97c59a03627',
      isReadDate: null,
      linkText: 'Download here',
      linkUrl: 'https://wildlife.utah.gov/hunting/main-hunting-page/big-game.html',
      message: 'Download the Utah Big Game Application Guidebook to learn more about applying for a Utah big game permit.',
      title: 'Get your big game tag.',
    })
  );
  notificationsList.appendChild(
    renderNotificationItem({
      agencyDivisionFilename: 'http://localhost/cdn-img/dnr-dwr.png',
      agencyDivisionName: 'Division of Wildlife Resources',
      createDate: '2025-05-08T05:48:00.000Z',
      cursor: 'CursorPlaceholder',
      expireDate: '2025-07-05T14:48:00.000Z',
      icon: 'clock',
      id: 'ba881982-eccd-4691-bdc9-b97c59a03627',
      isReadDate: null,
      linkText: 'Download here',
      linkUrl: 'https://wildlife.utah.gov/hunting/main-hunting-page/big-game.html',
      message: 'Download the Utah Big Game Application Guidebook to learn more about applying for a Utah big game permit.',
      title: 'Get your big game tag.',
    })
  );

  //set focus back to the start of the dialog
  drawerEndFocus.addEventListener('focus', (e) => {
    e.preventDefault();
    e.stopPropagation();
    drawerTitle.focus();
  });

  // add drawer to the DOM
  domTarget?.appendChild(drawer);

  document.body.style.overflow = 'hidden';

  //focus on the drawer title
  drawerTitle.focus();
}
