// @ts-check
import domConstants from '../../enumerations/domConstants';

/**
 * @param {HTMLElement} mainMenuWrapper
 * @param {HTMLElement} mobileMenuWrapper
 */
export default function hookupHamburger(mainMenuWrapper, mobileMenuWrapper) {
  // get the hamburger icon
  const hamburger = document.getElementById(domConstants.MAIN_MENU__HAMBURGER_ID);
  if (!hamburger) {
    throw new Error('hookupHamburger: hamburger not found (🍔 🎶 I will gladly pay you Tuesday for a hamburger today 🎵 🍔)');
  }
  const hamburgerIcon = /** @type {HTMLElement} */ (document.getElementById(domConstants.MAIN_MENU__HAMBURGER_ICON_ID));
  if (!hamburgerIcon) {
    throw new Error('hookupHamburger: hamburgerIcon not found');
  }

  // hookup aria-controls
  const mobileMenuWrapperId = mobileMenuWrapper.getAttribute('id');
  if (!mobileMenuWrapperId) {
    throw new Error('hookupHamburger: mobileMenuWrapperId not found');
  }
  hamburger.setAttribute('aria-controls', mobileMenuWrapperId);
  hamburger.setAttribute('aria-expanded', 'false');

  // onclick will
  hamburgerIcon.onclick = () => {
    // show/hide the MMAB wrapper
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      // close MMAB
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenuWrapper.classList.remove(domConstants.IS_OPEN);

      // change from an 'X'
      hamburgerIcon.classList.add('utds-icon-before-hamburger');
      hamburgerIcon.classList.remove('utds-icon-before-x-icon');
    } else {
      // open MMAB
      hamburger.setAttribute('aria-expanded', 'true');
      mobileMenuWrapper.classList.add(domConstants.IS_OPEN);

      // change to an 'X'
      hamburgerIcon.classList.remove('utds-icon-before-hamburger');
      hamburgerIcon.classList.add('utds-icon-before-x-icon');
    }

    // TODO:default to the home MMAB menu tab
    // TODO: focus the user in to the modal...?
  };
}
