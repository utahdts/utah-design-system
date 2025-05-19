import { domConstants, getCssClassSelector } from '../../enumerations/domConstants';
import { notNull } from '../../misc/notNull';

/**
 * @param {HTMLElement} card
* @returns {{
  * status: HTMLElement,
  * icon: HTMLElement,
  * title: HTMLElement,
  * time: HTMLElement,
  * brand: HTMLElement,
  * message: HTMLElement,
  * link: HTMLElement,
  * linkText: HTMLElement,
  * }}
 */
export function getNotificationCardDom (card) {
  const status = /** @type {HTMLElement} */ (
    notNull(card.querySelector(getCssClassSelector(domConstants.NOTIFY__LIST_ITEM_STATUS)), 'renderNotificationItem: status not found')
  );

  const icon = /** @type {HTMLElement} */ (
    notNull(card.querySelector(`.${domConstants.NOTIFY__LIST_ITEM_ICON} span`), 'renderNotificationItem: icon not found')
  );

  const title = /** @type {HTMLElement} */ (
    notNull(card.querySelector(getCssClassSelector(domConstants.NOTIFY__LIST_ITEM_TITLE)), 'renderNotificationItem: title not found')
  );

  const time = /** @type {HTMLElement} */ (
    notNull(card.querySelector(getCssClassSelector(domConstants.NOTIFY__LIST_ITEM_TIME)), 'renderNotificationItem: time not found')
  );

  const brand = /** @type {HTMLElement} */ (
    notNull(card.querySelector(getCssClassSelector(domConstants.NOTIFY__LIST_ITEM_BRAND)), 'renderNotificationItem: brand not found')
  );

  const message = /** @type {HTMLElement} */ (
    notNull(card.querySelector(getCssClassSelector(domConstants.NOTIFY__LIST_ITEM_MESSAGE)), 'renderNotificationItem: message not found')
  );

  const link = /** @type {HTMLElement} */ (
    notNull(card.querySelector(getCssClassSelector(domConstants.NOTIFY__LIST_ITEM_LINK)), 'renderNotificationItem: link not found')
  );

  const linkText = /** @type {HTMLElement} */ (
    notNull(card.querySelector(getCssClassSelector(domConstants.NOTIFY__LIST_ITEM_LINK_TEXT)), 'renderNotificationItem: link text not found')
  );

  return {
    status,
    icon,
    title,
    time,
    brand,
    message,
    link,
    linkText,
  }
}
