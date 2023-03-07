// @ts-check
import childrenMenuTypes from '../../enumerations/childrenMenuTypes';
import domConstants, { getCssClassSelector } from '../../enumerations/domConstants';
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
let utahIdPopupMenu = null;

/**
 * @param {UtahIdData} newUtahIdData
 */
export function authChangedEventHandler(newUtahIdData) {
  utahIdData = newUtahIdData;
  // it's ok if utahIdData is not definitive
  // - when it does become definitive it will update the button
  // - maybe it was fetched and got a user and became indeterminate to fetch again but will get same result again
  if (utahIdButton) {
    // kill contents so can be loaded with correct content
    utahIdButton.innerHTML = '';
    if (utahIdData?.userInfo && utahIdData.userInfo?.authenticated) {
      // text in the button for screen readers
      const utahIDText = document.createElement('span');
      utahIDText.appendChild(document.createTextNode('UtahID Account:'));
      utahIDText.classList.add(domConstants.VISUALLY_HIDDEN);
      utahIdButton.appendChild(utahIDText);
      // visible text in the button
      utahIdButton.appendChild(document.createTextNode(`Hello, ${utahIdData.userInfo.first || ''}`));
    } else {
      utahIdButton.appendChild(document.createTextNode('UtahID Sign In'));
    }
    doAriaForUtahId();
  }
}

function doAriaForUtahId() {
  if (utahIdButton && utahIdPopupMenu) {
    // Is user signed in?
    const userSignedIn = !!utahIdData?.isDefinitive && !!utahIdData?.userInfo?.authenticated;

    // Add aria-haspopup, aria-controls, and aria-expanded to the button to tie in the menu
    // Hide the menu from aria when the user is not signed in
    if (userSignedIn) {
      utahIdButton.setAttribute('aria-haspopup', 'menu');
      utahIdButton.setAttribute('aria-expanded', 'false');
      utahIdPopupMenu.removeAttribute('aria-hidden');
    } else {
      utahIdButton.removeAttribute('aria-haspopup');
      utahIdButton.removeAttribute('aria-expanded');
      utahIdPopupMenu.setAttribute('aria-hidden', 'true');
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

  const customUtahIdMenuItems = (settings.utahId !== true && settings.utahId !== false && settings.utahId?.menuItems) || [];
  if (customUtahIdMenuItems.length) {
    customUtahIdMenuItems.push({
      isDivider: true,
      title: '--divider--',
    });
  }
  /** @type PopupMenu */
  const popupMenu = {
    menuItems: [
      ...customUtahIdMenuItems,
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

  // create UtahID wrapper w/ button DOM
  const utahIdWrapper = renderDOMSingle(UtahIdHtml);
  if (!utahIdWrapper) {
    throw new Error('UtahId: utahIdWrapper not found');
  }

  utahIdButton = /** @type HTMLElement */ (utahIdWrapper.querySelector(getCssClassSelector(domConstants.UTAH_ID__BUTTON)));
  if (!utahIdButton) {
    throw new Error('UtahId: utahIdButton not found');
  }

  // create popup content DOM
  utahIdPopupMenu = renderPopupMenu(popupMenu, utahIdButton, { childrenMenuType: childrenMenuTypes.INLINE });
  utahIdWrapper.appendChild(utahIdPopupMenu);

  doAriaForUtahId();

  popupFocusHandler(
    utahIdWrapper,
    utahIdButton,
    utahIdPopupMenu,
    'menu',
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

  // fire a fetch event to make sure data gets loaded
  fetchUtahIdUserDataAsync();

  // load previous data so the button doesn't flicker as much
  authChangedEventHandler(getCurrentUtahIdData());

  return utahIdWrapper;
}
