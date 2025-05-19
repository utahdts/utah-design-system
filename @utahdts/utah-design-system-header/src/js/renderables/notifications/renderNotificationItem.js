import { renderDOMSingle } from '../../misc/renderDOMSingle';
import cardHTML from './html/NotificationCard.html?raw';
import { domConstants } from '../../enumerations/domConstants';
import { timeSince } from '../../misc/timeSince';
import { getNotificationCardDom } from './getNotificationCardDom';

/** @typedef {import('src/@types/jsDocTypes.d').NotificationItem} NotificationItem */

/**
 * @param {NotificationItem} notificationData
 * @returns {Element}
 */
export function renderNotificationItem(notificationData) {
  let card = renderDOMSingle(cardHTML);

  const {
    status,
    icon,
    title,
    time,
    brand,
    message,
    link,
    linkText,
  } = getNotificationCardDom(card);

  card.id = notificationData.id;

  card.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    card.focus();
  });

  /** @type {number} */
  let cardFocusTimeout = NaN;
  card.addEventListener('focusin', () => {
    clearTimeout(cardFocusTimeout);
    cardFocusTimeout = window.setTimeout(() => {
      // TODO: API - mark the notification as read
      console.log('mark as read');
      status.classList.add(domConstants.NOTIFY__LIST_ITEM_STATUS_IS_READ);
      title.classList.add(domConstants.NOTIFY__LIST_ITEM_STATUS_IS_READ);
    }, 2000);
  });
  card.addEventListener('focusout', () => {
    clearTimeout(cardFocusTimeout);
  });

  if (notificationData.isReadDate) {
    status.classList.add(`${domConstants.NOTIFY__LIST_ITEM_STATUS_IS_READ}`);
  }

  icon.className = `utds-icon-before-${notificationData.icon}`;

  title.innerText = notificationData.title;

  time.innerText = timeSince(notificationData.createDate);

  brand.setAttribute('src',notificationData.agencyDivisionFilename);
  brand.setAttribute('alt', `logo for ${notificationData.agencyDivisionName}`);

  message.innerText = notificationData.message;

  link.setAttribute('href', notificationData.linkUrl);
  linkText.innerText = notificationData.linkText

  return card;
}
