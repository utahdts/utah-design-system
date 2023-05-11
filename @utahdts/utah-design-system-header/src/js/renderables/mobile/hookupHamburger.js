// @ts-check
import domConstants, { getCssClassSelector } from '../../enumerations/domConstants';
import checkForError from '../../misc/checkForError';
import notNull from '../../misc/notNull';
import { getUtahHeaderSettings } from '../../settings/settings';
import renderActionItemBadge from '../actionItems/renderActionItemBadge';
import mobileMenuInteractionHandler from './mobileMenuInteractionHandler';

/**
 * @param {string} callerContext what function called this? so the error message can be specific
 * @returns {{ hamburger: HTMLElement, hamburgerIcon: HTMLElement, mobileMenu: HTMLElement }}
 */
function getHamburgerElements(callerContext) {
  const mobileMenu = /** @type {HTMLElement} */ (notNull(
    document.querySelector(getCssClassSelector(domConstants.MOBILE_MENU)),
    `${callerContext}: mobileMenu not found`
  ));
  const hamburger = notNull(
    document.getElementById(domConstants.MAIN_MENU__HAMBURGER_ID),
    `${callerContext}: hamburger not found (🍔 🎶 I will gladly pay you Tuesday for a hamburger today 🎵 🍔)`
  );
  const hamburgerIcon = /** @type {HTMLElement} */ (notNull(
    document.getElementById(domConstants.MAIN_MENU__HAMBURGER_ICON_ID),
    `${callerContext}: hamburgerIcon not found`
  ));

  return {
    hamburger,
    hamburgerIcon,
    mobileMenu,
  };
}

export function hideMobileMenu() {
  const { hamburger, hamburgerIcon, mobileMenu } = getHamburgerElements('hideMobileMenu');
  // close MMAB
  hamburger.setAttribute('aria-expanded', 'false');
  mobileMenu.classList.remove(domConstants.IS_OPEN);

  // change from an 'X'
  hamburgerIcon.classList.add('utds-icon-before-hamburger');
  hamburgerIcon.classList.remove('utds-icon-before-x-icon');
}

export function showMobileMenu() {
  const { hamburger, hamburgerIcon, mobileMenu } = getHamburgerElements('showMobileMenu');
  // open MMAB
  hamburger.setAttribute('aria-expanded', 'true');
  mobileMenu.classList.add(domConstants.IS_OPEN);

  // change to an 'X'
  hamburgerIcon.classList.remove('utds-icon-before-hamburger');
  hamburgerIcon.classList.add('utds-icon-before-x-icon');
}

/**
 * @param {HTMLElement} mobileMainMenuContentItem the menu content in the mobile main menu
 */
export function hookupHamburger(mobileMainMenuContentItem) {
  const { hamburger } = getHamburgerElements('hookupHamburger');

  const settings = getUtahHeaderSettings();
  const actionItemHasBadge = settings.actionItems?.some((actionItem) => !!actionItem.badge);
  if (actionItemHasBadge) {
    const badge = renderActionItemBadge({ label: 'Home Badge' });
    if (badge) {
      hamburger.appendChild(badge);
    }
  }

  hideMobileMenu();

  const homeActionItem = notNull(
    document.getElementById(domConstants.MOBILE_MENU_ACTON_BAR__HOME_ID),
    'hookupHamburger: homeActionItem not found'
  );

  const homeActionItemWrapper = /** @type {HTMLElement} */ (notNull(
    homeActionItem?.closest(getCssClassSelector(domConstants.MOBILE_MENU_ACTION_BAR__ACTION_ITEM_WRAPPER)),
    'hookupHamburger: homeActionItemWrapper not found'
  ));

  mobileMenuInteractionHandler(
    hamburger,
    mobileMainMenuContentItem,
    homeActionItemWrapper,
    { ariaHasPopupType: 'menu', shouldOnClickCloseMenu: true }
  );

  // when hamburger is in an "open" state (mobile menu is open) and the hamburger loses focus (tabbed off of)
  // then move focus to the first action item in the mobile action item bar. UDS-234
  checkForError(!!hamburger.onblur, 'hookupHamburger: hamburger already has an onblur event');
  hamburger.onblur = () => {
    const { mobileMenu } = getHamburgerElements('showMobileMenu');
    if (mobileMenu.classList.contains(domConstants.IS_OPEN)) {
      const actionBarClass = getCssClassSelector(domConstants.MOBILE_MENU__ACTION_BAR);
      const actionItemWrapperClass = getCssClassSelector(domConstants.MOBILE_MENU_ACTION_BAR__ACTION_ITEM_WRAPPER);
      const actionItemButtonClass = getCssClassSelector(domConstants.ICON_BUTTON);
      const firstMobileActionItem = (
        /** @type {HTMLElement | null} */
        (document.querySelector(`${actionBarClass} ${actionItemWrapperClass}:first-child ${actionItemButtonClass}`))
      );
      firstMobileActionItem?.focus();
    }
  };
}
