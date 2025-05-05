import { domConstants, getCssClassSelector } from '../../enumerations/domConstants';
import { checkForError } from '../../misc/checkForError';
import { notNull } from '../../misc/notNull';
import { renderDOMSingle } from '../../misc/renderDOMSingle';
import { getUtahHeaderSettings } from '../../settings/getUtahHeaderSettings';
import { renderActionItem } from '../actionItems/renderActionItem';
import drawerHTML from './html/NotificationsDrawer.html?raw';

export function renderNotificationsDrawer() {
  /**
   * @param {HTMLElement} drawer
   */
  function closeNotificationDrawer(drawer) {
    drawer.remove();
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
  drawer.querySelector('.utds-notifications-drawer__header-buttons')?.appendChild(settingsButton);

  //set focus back to the start of the dialog
  drawerEndFocus.addEventListener('focus', (e) => {
    e.preventDefault();
    e.stopPropagation();
    drawerTitle.focus();
  });

  // add drawer to the DOM
  domTarget?.appendChild(drawer);

  //focus on the drawer title
  drawerTitle.focus();
}
