import { domConstants, getCssClassSelector } from '../../enumerations/domConstants';
import { notNull } from '../../misc/notNull';
import { getNotificationCardDom } from './getNotificationCardDom';

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
  });

}
