// @ts-check
import domConstants, { getCssClassSelector } from '../../enumerations/domConstants';
import events from '../../enumerations/events';
import popupFocusHandler from '../../misc/popupFocusHandler';
import { renderDOMSingle } from '../../misc/renderDOM';
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

function authChangedEventHandler(e) {
  /** @type UtahIdData */
  utahIdData = /** @type UtahIdData */(/** @type any */(e).detail);
  if (utahIdButton && utahIdData.isDefinitive) {
    // kill contents so can be loaded with correct content
    utahIdButton.innerHTML = '';

    if (utahIdData.userInfo && utahIdData.userInfo?.authenticated) {
      utahIdButton.appendChild(document.createTextNode(`Hello, ${utahIdData.userInfo.first || ''}`));
    } else {
      utahIdButton.appendChild(document.createTextNode('UtahID Sign In'));
    }
  }
}

/**
 * @returns {HTMLCollection | Element}
 */
export default function UtahId() {
  /** @type PopupMenu */
  const popUpMenu = {
    menuItems: [
      {
        actionUrl: {
          url: 'https://id.utah.gov/',
          openInNewTab: true,
        },
        className: 'external-link',
        title: 'UtahID Profile',
      },
      {
        actionUrl: {
          url: `https://id.utah.gov/logout?goto=${window.location}`,
        },
        title: 'Sign Out',
      },
    ],
    title: 'Utah Id Menu',
  };

  // create popup content DOM
  const utahIdPopUpMenu = renderPopupMenu(popUpMenu);

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
  popupFocusHandler(
    utahIdWrapper,
    utahIdButton,
    utahIdPopUpMenu,
    {
      isPerformPopup: () => !!utahIdData?.isDefinitive && !!utahIdData?.userInfo?.authenticated,
      onClick: (e) => {
        if (!utahIdData?.isDefinitive || !utahIdData?.userInfo?.authenticated) {
          e.preventDefault();
          e.stopPropagation();
          window.location.href = `https://id.utah.gov/login?goto=${window.location}`;
        }
      },
    }
  );

  // remove in case already added
  document.removeEventListener(events.AUTH_CHANGED, authChangedEventHandler);
  document.addEventListener(events.AUTH_CHANGED, authChangedEventHandler);

  return utahIdWrapper;
}
