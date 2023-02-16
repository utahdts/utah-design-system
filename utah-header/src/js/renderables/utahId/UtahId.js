// @ts-check
import domConstants, { getCssClassSelector } from '../../enumerations/domConstants';
import events from '../../enumerations/events';
import utahIdUrls from '../../enumerations/utahIdUrls';
import popupFocusHandler from '../../misc/popupFocusHandler';
import { renderDOMSingle } from '../../misc/renderDOM';
import { getUtahHeaderSettings } from '../../settings/settings';
import { fetchUtahIdUserDataAsync, getCurrentUtahIdData } from '../../utahId/utahIdData';
import renderPopupMenu from '../popupMenu/renderPopupMenu';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import UtahIdHtml from './html/UtahIdWrapper.html?raw';

/**
 * @typedef {import('../../misc/jsDocTypes').PopupMenu} PopupMenu
 * @typedef {import('../../misc/jsDocTypes').UtahIdData} UtahIdData
*/

/** @type HTMLElement | null */
let utahIdButton = null;
/** @type UtahIdData | null */
let utahIdData = null;
/** @type HTMLElement | null */
let utahIdPopUpMenu = null;

function authChangedEventHandler(e) {
  /** @type UtahIdData */
  utahIdData = /** @type UtahIdData */(/** @type any */(e).detail);

  // it's ok if utahIdData is not definitive
  // - when it does become definitive it will update the button
  // - maybe it was fetched and got a user and became indeterminate to fetch again but will get same result again
  if (utahIdButton) {
    // kill contents so can be loaded with correct content
    utahIdButton.innerHTML = '';
    if (utahIdData?.userInfo && utahIdData.userInfo?.authenticated) {
      utahIdButton.appendChild(document.createTextNode(`Hello, ${utahIdData.userInfo.first || ''}`));
    } else {
      utahIdButton.appendChild(document.createTextNode('UtahID Sign In'));
    }
    doAriaForUtahId();
  }
}

function doAriaForUtahId() {
  if (utahIdButton && utahIdPopUpMenu) {
    // Is user signed in?
    const userSignedIn = !!utahIdData?.isDefinitive && !!utahIdData?.userInfo?.authenticated;

    // Add aria-haspopup, aria-controls, and aria-expanded to the button to tie in the menu
    // Hide the menu from aria when the user is not signed in
    const menu = utahIdPopUpMenu.querySelector(getCssClassSelector(domConstants.POPUP_MENU));
    if (!menu) {
      throw new Error('UtahId: Utah ID menu not found');
    }
    const menuId = menu.getAttribute('id');
    if (!menuId) {
      throw new Error('UtahId: menuId not found');
    }
    if (userSignedIn) {
      utahIdButton.setAttribute('aria-haspopup', 'menu');
      utahIdButton.setAttribute('aria-controls', menuId);
      utahIdButton.setAttribute('aria-expanded', 'false');
      utahIdPopUpMenu.removeAttribute('aria-hidden');
    } else {
      utahIdButton.removeAttribute('aria-haspopup');
      utahIdButton.removeAttribute('aria-controls');
      utahIdButton.removeAttribute('aria-expanded');
      utahIdPopUpMenu.setAttribute('aria-hidden', 'true');
    }
  }
}

/**
 * @returns {HTMLCollection | Element}
 */
export default function UtahId() {
  const settings = getUtahHeaderSettings();

  const onProfile = (settings.utahId !== false && settings.utahId !== true && settings.utahId.onProfile);
  const onSignIn = (settings.utahId !== false && settings.utahId !== true && settings.utahId.onSignIn);
  const onSignOut = (settings.utahId !== false && settings.utahId !== true && settings.utahId.onSignOut);

  /** @type PopupMenu */
  const popUpMenu = {
    menuItems: [
      {
        actionUrl: onProfile ? undefined : { url: utahIdUrls.PROFILE, openInNewTab: true },
        actionFunction: onProfile || undefined,
        className: 'external-link',
        title: 'UtahID Profile',
      },
      {
        actionUrl: onSignOut ? undefined : { url: utahIdUrls.SIGN_OUT },
        actionFunction: onSignOut || undefined,
        title: 'Sign Out',
      },
    ],
    title: 'Utah Id Menu',
  };

  // create popup content DOM
  utahIdPopUpMenu = renderPopupMenu(popUpMenu);

  // create UtahID wrapper w/ button DOM
  const utahIdWrapper = renderDOMSingle(UtahIdHtml);
  if (!utahIdWrapper) {
    throw new Error('UtahId: utahIdWrapper not found');
  }
  utahIdWrapper.appendChild(utahIdPopUpMenu);

  utahIdButton = /** @type HTMLElement */ (utahIdWrapper.querySelector(getCssClassSelector(domConstants.UTAH_ID__BUTTON)));
  if (!utahIdButton) {
    throw new Error('UtahId: utahIdButton not found');
  }

  doAriaForUtahId();

  popupFocusHandler(
    utahIdWrapper,
    utahIdButton,
    utahIdPopUpMenu,
    {
      isPerformPopup: () => !!utahIdData?.isDefinitive && !!utahIdData?.userInfo?.authenticated,
      onClick: (e) => {
        if (!utahIdData?.isDefinitive || !utahIdData?.userInfo?.authenticated) {
          if (onSignIn) {
            onSignIn(e);
          } else {
            e.preventDefault();
            e.stopPropagation();
            window.location.href = utahIdUrls.SIGN_IN;
          }
        }
      },
    }
  );

  // remove in case already added
  document.removeEventListener(events.AUTH_CHANGED, authChangedEventHandler);
  document.addEventListener(events.AUTH_CHANGED, authChangedEventHandler);

  // fire a fetch event to make sure data gets loaded
  fetchUtahIdUserDataAsync();

  // load previous data so the button doesn't flicker as much
  authChangedEventHandler({ detail: getCurrentUtahIdData() });

  return utahIdWrapper;
}
