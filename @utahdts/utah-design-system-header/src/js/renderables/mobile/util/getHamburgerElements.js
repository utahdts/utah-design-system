// @ts-check
import domConstants, { getCssClassSelector } from '../../../enumerations/domConstants';
import notNull from '../../../misc/notNull';

/**
 * @param {string} callerContext what function called this? so the error message can be specific
 * @returns {{ hamburger: HTMLElement, hamburgerIcon: HTMLElement, mobileMenu: HTMLElement }}
 */
export default function getHamburgerElements(callerContext) {
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
