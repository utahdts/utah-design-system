import domConstants, { getCssClassSelector } from '../../../enumerations/domConstants';
import getHamburgerElements from './getHamburgerElements';

export function hideMobileMenu() {
  const { hamburger, hamburgerIcon, mobileMenu } = getHamburgerElements('hideMobileMenu');
  // close MMAB
  hamburger?.setAttribute('aria-expanded', 'false');
  mobileMenu.classList.remove(domConstants.IS_OPEN);
  hamburger?.setAttribute('aria-label', 'Open the mobile menu');

  // change from an 'X'
  hamburgerIcon?.classList.add('utds-icon-before-hamburger');
  hamburgerIcon?.classList.remove('utds-icon-before-x-icon');

  // reset style - UDS-1236
  document.body.style.position = '';
}

export function showMobileMenu() {
  // remove gap when main menu is missing by adding MAIN_MENU__REMOVED class to menu
  const mainMenuWrapper = document.querySelector(getCssClassSelector(domConstants.MAIN_MENU));
  if (mainMenuWrapper?.classList.contains(domConstants.MOBILE__HIDDEN)) {
    document.querySelector(`${getCssClassSelector(domConstants.UTAH_DESIGN_SYSTEM)}${getCssClassSelector(domConstants.MOBILE_MENU)}`)?.classList.add(domConstants.MAIN_MENU__REMOVED);
  }
  const { hamburger, hamburgerIcon, mobileMenu } = getHamburgerElements('showMobileMenu');
  // open MMAB
  hamburger?.setAttribute('aria-expanded', 'true');
  mobileMenu.classList.add(domConstants.IS_OPEN);
  hamburger?.setAttribute('aria-label', 'Close the mobile menu');

  // change to an 'X'
  hamburgerIcon?.classList.remove('utds-icon-before-hamburger');
  hamburgerIcon?.classList.add('utds-icon-before-x-icon');

  // make sure the <body> is relative - UDS-1236
  document.body.style.position = 'relative';
}
