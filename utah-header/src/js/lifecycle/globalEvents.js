import domConstants, { getCssClassSelector } from '../enumerations/domConstants';

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

export function loadGlobalEvents() {
  if (globalEventFuncs) {
    unloadGlobalEvents();
  }
  globalEventFuncs = {};

  globalEventFuncs.globalOnClick = () => {
    // hide all menus
    const popups = document.querySelectorAll(getCssClassSelector(domConstants.POPUP_WRAPPER));
    Array.from(popups)
      .filter((popup) => !popup.classList.contains(domConstants.VISUALLY_HIDDEN))
      .forEach((popup) => popup.classList.add(domConstants.VISUALLY_HIDDEN));
  };
  document.addEventListener('click', globalEventFuncs.globalOnClick);

  document.globalOnKeypress = (e) => {
    switch (e.key) {
      case 'Escape':
        // hide all menus
        Array.from(document.querySelectorAll(getCssClassSelector(domConstants.POPUP_WRAPPER)))
          .filter((popup) => !popup.classList.contains(domConstants.VISUALLY_HIDDEN))
          .forEach((popup) => popup.classList.add(domConstants.VISUALLY_HIDDEN));
        break;
      default:
    }
  };
  document.addEventListener('keyup', globalEventFuncs.globalOnClick);
}
