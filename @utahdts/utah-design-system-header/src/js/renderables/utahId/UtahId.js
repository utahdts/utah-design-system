// @ts-check
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import UtahIdButtonHtml from './html/UtahIdButton.html?raw';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import UtahIdWrapperHtml from './html/UtahIdWrapper.html?raw';

import childrenMenuTypes from '../../enumerations/childrenMenuTypes';
import domConstants, { getCssClassSelector } from '../../enumerations/domConstants';
import utahIdUrls from '../../enumerations/utahIdUrls';
import popupFocusHandler from '../../misc/popupFocusHandler';
import renderDOMSingle from '../../misc/renderDOMSingle';
import uuidv4 from '../../misc/uuidv4';
import getUtahHeaderSettings from '../../settings/getUtahHeaderSettings';
import renderMenuWithTitle from '../menu/renderMenuWithTitle';
import renderPopup from '../popup/renderPopup';
import { renderMenu } from '../popupMenu/renderPopupMenu';

/**
 * @typedef {import('src/@types/jsDocTypes.d').MenuItem} MenuItem
 * @typedef {import('src/@types/jsDocTypes.d').PopupMenu} PopupMenu
 * @typedef {import('src/@types/jsDocTypes.d').UtahIdData} UtahIdData
*/

/** @type UtahIdData | null */
let utahIdData = null;

/**
 * @param {UtahIdData} newUtahIdData
 */
export function authChangedEventHandler(newUtahIdData) {
  utahIdData = newUtahIdData;
  // it's ok if utahIdData is not definitive
  // - when it does become definitive it will update the button
  // - maybe it was fetched and got a user and became indeterminate to fetch again but will get same result again

  // get utahIdButtons (at least two: mobile button (center in menu bar) & non-mobile (top right))
  const utahIdButtons = document.querySelectorAll(getCssClassSelector(domConstants.UTAH_ID__BUTTON));
  utahIdButtons.forEach((utahIdButton) => {
    if (utahIdButton) {
      // kill contents so can be loaded with correct content
      // eslint-disable-next-line no-param-reassign
      utahIdButton.innerHTML = '';

      // make button behave appropriately for logged in user status
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

      // hook up aria
      const popupId = utahIdButton.getAttribute('aria-controls');
      if (!popupId) {
        throw new Error(`authChangedEventHandler: popup id for button not found - ${popupId}`);
      }
      const utahIdPopupMenu = document.getElementById(popupId);
      if (utahIdPopupMenu) {
        // popup menu does not exist if the user is not logged in
        doAriaForUtahId(utahIdButton, utahIdPopupMenu);
      }
    }
  });
}

/**
 * @param {Element} utahIdButton
 * @param {Element} utahIdPopupMenu
 */
function doAriaForUtahId(utahIdButton, utahIdPopupMenu) {
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
 * @returns {HTMLElement}
 */
export function renderUtahIdButton() {
  // create UtahID wrapper w/ button DOM
  const utahIdButton = renderDOMSingle(UtahIdButtonHtml);
  utahIdButton.setAttribute('id', uuidv4());

  // set utah id user name change immediately to current value so that the button does not flicker
  if (utahIdData) {
    authChangedEventHandler(utahIdData);
  }
  return utahIdButton;
}

/**
 * @param {boolean} shouldAddMenuTitle
 * @returns {HTMLElement}
 */
export function renderUtahIdMenu(shouldAddMenuTitle) {
  const settings = getUtahHeaderSettings();

  const onProfile = (settings.utahId !== false && settings.utahId !== true && settings.utahId?.onProfile);
  const onSignOut = (settings.utahId !== false && settings.utahId !== true && settings.utahId?.onSignOut);

  const customUtahIdMenuItems = [...(settings.utahId !== true && settings.utahId !== false && settings.utahId?.menuItems) || []];
  if (customUtahIdMenuItems.length) {
    customUtahIdMenuItems.push({
      isDivider: true,
      title: '--divider--',
    });
  }
  /** @type MenuItem[] */
  const popupMenuItems = [
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
  ];

  const utahIdPopupMenu = renderMenu(popupMenuItems, { childrenMenuType: childrenMenuTypes.INLINE });
  const returnMenu = shouldAddMenuTitle ? renderMenuWithTitle(utahIdPopupMenu, 'Utah ID Menu') : utahIdPopupMenu;

  returnMenu.setAttribute('aria-label', 'Utah Id Menu');
  returnMenu.setAttribute('id', uuidv4());
  return returnMenu;
}

/**
 * @returns {HTMLElement}
 */
export function renderUtahIdForDesktop() {
  const utahIdWrapper = renderDOMSingle(UtahIdWrapperHtml);

  const utahIdButton = renderUtahIdButton();
  utahIdButton.setAttribute('id', uuidv4());
  utahIdWrapper.appendChild(utahIdButton);

  const utahIdMenu = renderUtahIdMenu(false);
  const utahIdPopupMenu = renderPopup(utahIdButton);
  const popupContentWrapper = /** @type {HTMLElement} */(utahIdPopupMenu.querySelector(getCssClassSelector(domConstants.POPUP_CONTENT_WRAPPER)));
  if (!popupContentWrapper) {
    throw new Error('renderUtahIdForDesktop: contentWrapper not found');
  }
  popupContentWrapper.appendChild(utahIdMenu);

  utahIdWrapper.appendChild(utahIdPopupMenu);

  doAriaForUtahId(utahIdButton, utahIdPopupMenu);

  // hook up menu to be a popup
  const settings = getUtahHeaderSettings();
  const onSignIn = (settings.utahId !== false && settings.utahId !== true && settings.utahId?.onSignIn);

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

  return utahIdWrapper;
}

/**
 * @returns {{ button: HTMLElement, menu: HTMLElement}} the button and the menu
 */
export function renderUtahIdForMobile() {
  const utahIdWrapper = renderDOMSingle(UtahIdWrapperHtml);

  const utahIdButton = renderUtahIdButton();
  const utahIdButtonId = utahIdButton.getAttribute('id');
  if (!utahIdButtonId) {
    throw new Error('renderUtahIdForMobile: utahIdButton has no id');
  }
  utahIdWrapper.appendChild(utahIdButton);

  const utahIdPopupMenu = renderUtahIdMenu(true);
  const utahIdPopupMenuId = utahIdPopupMenu.getAttribute('id');
  if (!utahIdPopupMenuId) {
    throw new Error('renderUtahIdForMobile: utahIdPopupMenu has no id');
  }
  utahIdWrapper.appendChild(utahIdPopupMenu);

  utahIdButton.setAttribute('aria-controls', utahIdPopupMenuId);
  utahIdPopupMenu.setAttribute('aria-labelledby', utahIdButtonId);
  doAriaForUtahId(utahIdButton, utahIdPopupMenu);

  return { button: utahIdButton, menu: utahIdPopupMenu };
}
