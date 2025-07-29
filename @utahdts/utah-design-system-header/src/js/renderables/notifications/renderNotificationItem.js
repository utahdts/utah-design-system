import { renderDOMSingle } from '../../misc/renderDOMSingle';
import cardHTML from './html/NotificationCard.html?raw';
import { domConstants } from '../../enumerations/domConstants';
import { timeSince } from '../../misc/timeSince';
import { getNotificationCardDom } from './getNotificationCardDom';
import { markNotificationAsRead } from './markNotificationAsRead';

/** @typedef {import('src/@types/jsDocTypes.d').NotificationNode} NotificationNode */

/**
 * @param {NotificationNode} notificationData
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
      markNotificationAsRead(notificationData.id);

      status.classList.add(domConstants.NOTIFY__LIST_ITEM_STATUS_IS_READ);
      title.classList.add(domConstants.NOTIFY__LIST_ITEM_STATUS_IS_READ);
    }, 2000);
  });
  card.addEventListener('focusout', () => {
    clearTimeout(cardFocusTimeout);
  });

  if (notificationData.isRead) {
    status.classList.add(`${domConstants.NOTIFY__LIST_ITEM_STATUS_IS_READ}`);
    title.classList.add(domConstants.NOTIFY__LIST_ITEM_STATUS_IS_READ);
  }

  icon.className = `utds-icon-before-${notificationData.icon}`;

  title.innerText = notificationData.title;

  time.innerText = notificationData.createDate ? timeSince(notificationData.createDate) : '';

  brand.setAttribute('src',notificationData.logoUrl);
  brand.setAttribute('alt', `logo for ${notificationData.logoUrl}`);

  message.innerText = notificationData.message;

  link.setAttribute('href', notificationData.linkUrl);
  linkText.innerText = notificationData.linkText

  return card;
}
