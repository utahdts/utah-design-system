import domConstants, { getCssClassSelector } from '../../enumerations/domConstants';
import checkForError from '../../misc/checkForError';
import notNull from '../../misc/notNull';
import getUtahHeaderSettings from '../../settings/getUtahHeaderSettings';
import renderActionItemBadge from '../actionItems/renderActionItemBadge';
import { closeOfficialWebsite } from '../utahLogo/renderOfficialWebsite';
import mobileMenuInteractionHandler from './mobileMenuInteractionHandler';
import getHamburgerElements from './util/getHamburgerElements';
import { hideMobileMenu } from './util/showHideHamburgerElements';

/**
 * @param {HTMLElement} mobileMainMenuContentItem
 */
export default function hookupHamburger(mobileMainMenuContentItem) {
  const { hamburger } = getHamburgerElements('hookupHamburger');
  const hamburgerNotNull = /** @param {string} context */ (context) => notNull(hamburger, `hookupHamburger: hamburger required but is null: ${context}`);

  const settings = getUtahHeaderSettings();
  const actionItemHasBadge = settings.actionItems?.some((actionItem) => !!actionItem.badge);
  if (actionItemHasBadge) {
    const badge = renderActionItemBadge({ label: 'Home Badge' });
    if (badge) {
      hamburgerNotNull('home badge').appendChild(badge);
    }
  }

  hideMobileMenu();

  function firstBarActionItem() {
    const actionItem = notNull(
      /** @type {HTMLElement} */(document.querySelectorAll(`.${domConstants.MOBILE_MENU__ACTION_BAR} .${domConstants.MOBILE_MENU_ACTION_BAR__ACTION_ITEM_WRAPPER}`)[0]),
      'hookupHamburger: no action items to select on mobile hamburger open'
    );
    const iconButton = actionItem.querySelector('button');
    const contentWrapperId = iconButton?.getAttribute('aria-controls');
    return { actionItem, actionItemWrapper: contentWrapperId ? document.getElementById(contentWrapperId) : null };
  }

  // hookup aria to home menu (can't in mobile menu interaction handler because it maybe removed later)
  const actionItem = notNull(
    /** @type {HTMLElement} */(document.querySelectorAll(`.${domConstants.MOBILE_MENU__ACTION_BAR} .${domConstants.MOBILE_MENU_ACTION_BAR__ACTION_ITEM_WRAPPER}`)[0]),
    'hookupHamburger: no action items to select on mobile hamburger open'
  );
  const actionItemButton = actionItem.querySelector?.('button');
  const actionItemId = (actionItemButton || actionItem).getAttribute('id');
  if (!actionItemId) {
    throw new Error('mobileMenuInteractionHandler: actionItemId not found');
  }
  if (mobileMainMenuContentItem) {
    const mobileMainMenuContentItemId = mobileMainMenuContentItem.getAttribute('id');
    if (!mobileMainMenuContentItemId) {
      throw new Error('mobileMenuInteractionHandler: mobileMainMenuContentItemId not found');
    }
    (actionItemButton || actionItem).setAttribute('aria-controls', mobileMainMenuContentItemId);
    mobileMainMenuContentItem.setAttribute('aria-labelledby', actionItemId);
  }

  if (hamburger) {
    mobileMenuInteractionHandler(
      hamburger,
      () => firstBarActionItem().actionItemWrapper,
      () => firstBarActionItem().actionItem,
      {
        additionalOnClick: () => closeOfficialWebsite(),
        ariaHasPopupType: 'menu',
        shouldOnClickCloseMenu: true,
      }
    );
  }

  // when hamburger is in an "open" state (mobile menu is open) and the hamburger loses focus (tabbed off of)
  // then move focus to the first action item in the mobile action item bar. UDS-234
  if (hamburger) {
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

  // if no bar, move hamburger to mobile citizen experience UDS-564
  if (((settings.mainMenu || settings.actionItems) && !settings.onSearch && settings.utahId === false)) {
    const citizenExperienceMobile = notNull(
      document.querySelector(getCssClassSelector(domConstants.CITIZEN_EXPERIENCE_MOBILE)),
      'hookupHamburger: citizen experience mobile not found'
    );
    citizenExperienceMobile.appendChild(hamburgerNotNull('adding to citizen experience'));
    const mainMenu = notNull(
      document.querySelector(getCssClassSelector(domConstants.MAIN_MENU)),
      'hookupHamburger: main menu not found'
    );
    mainMenu.classList.add(domConstants.MOBILE__HIDDEN);
  }

  if (settings.onSearch && !settings.mainMenu) {
    const mainMenu = notNull(
      document.querySelector(getCssClassSelector(domConstants.MAIN_MENU)),
      'renderMainMenu: main menu not found'
    );
    mainMenu.classList.add(domConstants.DESKTOP__HIDDEN);
  }
}
