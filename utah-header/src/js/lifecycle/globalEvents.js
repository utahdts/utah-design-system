import domConstants, { getCssClassSelector } from '../enumerations/domConstants';
import showHideElement from '../misc/showHideElement';

/**
 * @typedef {import('../misc/jsDocTypes').GlobalEventType} GlobalEventType
*/

/** @type {GlobalEventType} */
let globalEventFuncs;

export function unloadGlobalEvents() {
  document.removeEventListener('click', globalEventFuncs.globalOnClick);
  document.removeEventListener('keyup', globalEventFuncs.globalOnClick);

  globalEventFuncs = null;
}

function hideAllMenus() {
  const popups = document.querySelectorAll(getCssClassSelector(domConstants.POPUP_WRAPPER));
  Array.from(popups)
    .filter((popup) => !popup.classList.contains(domConstants.POPUP__HIDDEN))
    .forEach((popup) => showHideElement(popup, false, domConstants.POPUP__VISIBLE, domConstants.POPUP__HIDDEN));
}

export function loadGlobalEvents() {
  if (globalEventFuncs) {
    unloadGlobalEvents();
  }
  globalEventFuncs = {};

  globalEventFuncs.globalOnClick = hideAllMenus;

  document.addEventListener('click', globalEventFuncs.globalOnClick);

  document.globalOnKeypress = (e) => {
    switch (e.key) {
      case 'Escape':
        hideAllMenus();
        break;
      default:
        // any other key is ignored
    }
  };
  document.addEventListener('keyup', globalEventFuncs.globalOnClick);
}
