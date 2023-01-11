import cssClasses, { getCssClassSelector } from '../enumerations/cssClasses';

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
    const popups = document.querySelectorAll(getCssClassSelector(cssClasses.POPUP_WRAPPER));
    Array.from(popups)
      .filter((popup) => !popup.classList.contains(cssClasses.VISUALLY_HIDDEN))
      .forEach((popup) => popup.classList.add(cssClasses.VISUALLY_HIDDEN));
  };
  document.addEventListener('click', globalEventFuncs.globalOnClick);

  document.globalOnKeypress = (e) => {
    switch (e.key) {
      case 'Escape':
        // hide all menus
        Array.from(document.querySelectorAll(getCssClassSelector(cssClasses.POPUP_WRAPPER)))
          .filter((popup) => !popup.classList.contains(cssClasses.VISUALLY_HIDDEN))
          .forEach((popup) => popup.classList.add(cssClasses.VISUALLY_HIDDEN));
        break;
      default:
    }
  };
  document.addEventListener('keyup', globalEventFuncs.globalOnClick);
}
