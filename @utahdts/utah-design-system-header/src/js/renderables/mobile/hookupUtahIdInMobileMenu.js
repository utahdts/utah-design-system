import { domConstants, getCssClassSelector } from '../../enumerations/domConstants';
import { doUtahIdOnSignIn } from '../../renderables/utahId/utahIdCommon';
import { addMobileMenuContentItem } from './addMobileMenuContentItem';
import { mobileMenuInteractionHandler } from './mobileMenuInteractionHandler';

export function removeUtahIdInMobileMenu() {
  const profileActionItem = document.getElementById(domConstants.MOBILE_MENU_ACTON_BAR__PROFILE_ID);
  if (!profileActionItem) {
    throw new Error('removeUtahIdInMobileMenu: profileActionItem not found');
  }
  const profileActionItemWrapper = /** @type {HTMLElement} */ (
    profileActionItem.closest(getCssClassSelector(domConstants.MOBILE_MENU_ACTION_BAR__ACTION_ITEM_WRAPPER))
  );
  if (!profileActionItemWrapper) {
    throw new Error('removeUtahIdInMobileMenu: profileActionItemWrapper not found');
  }
  profileActionItemWrapper.remove();
}

/**
 * @param {HTMLElement} mobileMenuWrapper
 * @param {HTMLElement} utahIdPopup
 */
export function hookupUtahIdInMobileMenu(mobileMenuWrapper, utahIdPopup) {
  // get utahIdButton in the Mobile Menu
  const utahIdWrapper = document.querySelector(getCssClassSelector(domConstants.MOBILE__UTAH_ID));
  if (!utahIdWrapper) {
    throw new Error('hookupUtahIdInMobileMenu: utahIdWrapper not found');
  }
  const utahIdButton = /** @type {HTMLElement} */ (utahIdWrapper.querySelector(getCssClassSelector(domConstants.UTAH_ID__BUTTON)));
  if (!utahIdButton) {
    throw new Error('hookupUtahIdInMobileMenu: utahIdButton not found');
  }
  const mobileContentWrapper = mobileMenuWrapper.querySelector(getCssClassSelector(domConstants.MOBILE_MENU__CONTENT));
  if (!mobileContentWrapper) {
    throw new Error('hookupUtahIdInMobileMenu: mobileContentWrapper not found');
  }
  const profileActionItem = document.getElementById(domConstants.MOBILE_MENU_ACTON_BAR__PROFILE_ID);
  if (!profileActionItem) {
    throw new Error('hookupUtahIdInMobileMenu: profileActionItem not found');
  }
  const profileActionItemWrapper = /** @type {HTMLElement} */ (
    profileActionItem.closest(getCssClassSelector(domConstants.MOBILE_MENU_ACTION_BAR__ACTION_ITEM_WRAPPER))
  );
  if (!profileActionItemWrapper) {
    throw new Error('hookupHamburger: profileActionItemWrapper not found');
  }
  // clicking button goes to mobile menu content menu
  const utahIdPopupContentWrapper = addMobileMenuContentItem(utahIdPopup);
  mobileMenuInteractionHandler(
    utahIdButton,
    utahIdPopupContentWrapper,
    profileActionItemWrapper,
    {
      ariaHasPopupType: 'menu',
      onClickHandler: (e) => {
        doUtahIdOnSignIn(e);
        return false;
      },
      shouldOnClickCloseMenu: true,
    }
  );
}
