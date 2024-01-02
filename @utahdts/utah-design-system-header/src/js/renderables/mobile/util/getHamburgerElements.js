import { domConstants, getCssClassSelector } from '../../../enumerations/domConstants';
import { notNull } from '../../../misc/notNull';

/**
 * @param {string} callerContext what function called this? so the error message can be specific
 * @returns {{ hamburger: HTMLElement | null, hamburgerIcon: HTMLElement | null, mobileMenu: HTMLElement }}
 */
export function getHamburgerElements(callerContext) {
  const mobileMenu = /** @type {HTMLElement} */ (notNull(
    document.querySelector(getCssClassSelector(domConstants.MOBILE_MENU)),
    `${callerContext}: mobileMenu not found`
  ));
  const hamburger = document.getElementById(domConstants.MAIN_MENU__HAMBURGER_ID);
  const hamburgerIcon = document.getElementById(domConstants.MAIN_MENU__HAMBURGER_ICON_ID);

  return {
    hamburger,
    hamburgerIcon,
    mobileMenu,
  };
}
