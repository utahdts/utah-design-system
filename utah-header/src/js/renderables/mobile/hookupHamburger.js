// @ts-check
import domConstants, { getCssClassSelector } from '../../enumerations/domConstants';
import mobileMenuInteractionHandler from './mobileMenuInteractionHandler';

/**
 * @param {string} callerContext what function called this? so the error message can be specific
 * @returns {{ hamburger: HTMLElement, hamburgerIcon: HTMLElement, mobileMenu: HTMLElement }}
 */
function getHamburgerElements(callerContext) {
  const mobileMenu = /** @type {HTMLElement} */ (document.querySelector(getCssClassSelector(domConstants.MOBILE_MENU)));
  if (!mobileMenu) {
    throw new Error(`${callerContext}: mobileMenu not found`);
  }
  const hamburger = document.getElementById(domConstants.MAIN_MENU__HAMBURGER_ID);
  if (!hamburger) {
    throw new Error(`${callerContext}: hamburger not found (🍔 🎶 I will gladly pay you Tuesday for a hamburger today 🎵 🍔)`);
  }
  const hamburgerIcon = /** @type {HTMLElement} */ (document.getElementById(domConstants.MAIN_MENU__HAMBURGER_ICON_ID));
  if (!hamburgerIcon) {
    throw new Error(`${callerContext}: hamburgerIcon not found`);
  }

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

  hideMobileMenu();

  const homeActionItem = document.getElementById(domConstants.MOBILE_MENU_ACTON_BAR__HOME_ID);
  if (!homeActionItem) {
    throw new Error('hookupHamburger: homeActionItem not found');
  }
  const homeActionItemWrapper = /** @type {HTMLElement} */ (
    homeActionItem.closest(getCssClassSelector(domConstants.MOBILE_MENU_ACTION_BAR__ACTION_ITEM_WRAPPER))
  );
  if (!homeActionItemWrapper) {
    throw new Error('hookupHamburger: homeActionItemWrapper not found');
  }

  mobileMenuInteractionHandler(
    hamburger,
    mobileMainMenuContentItem,
    homeActionItemWrapper,
    { ariaHasPopupType: 'menu', shouldOnClickCloseMenu: true }
  );
}
