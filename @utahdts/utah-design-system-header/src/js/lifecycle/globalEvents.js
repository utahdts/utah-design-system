import domConstants, { getCssClassSelector } from '../enumerations/domConstants';
import showHideElement from '../misc/showHideElement';

/**
 * @typedef {import('../misc/jsDocTypes').GlobalEventType} GlobalEventType
*/

/** @type {GlobalEventType} */
let globalEventFuncs;
export const globalKeyStatus = {};
export const globalKeyModifiers = {
  SHIFT: 'shift-key',
};

export function unloadGlobalEvents() {
  if (globalEventFuncs) {
    document.removeEventListener('click', globalEventFuncs.globalOnClick);
    document.removeEventListener('keyup', globalEventFuncs.globalOnKeyup);
    document.removeEventListener('keydown', globalEventFuncs.globalOnKeydown);

    globalEventFuncs = null;
  }
}

export function hideAllMenus() {
  const popups = document.querySelectorAll(
    `${getCssClassSelector(domConstants.UTAH_DESIGN_SYSTEM)} ${getCssClassSelector(domConstants.POPUP_WRAPPER)}`
  );
  Array.from(popups)
    .filter((popup) => !popup.classList.contains(domConstants.POPUP__HIDDEN))
    .forEach((popup) => {
      // set aria-expanded on the controller
      const popupId = popup.getAttribute('id');
      if (popupId) {
        const controllingElement = document.querySelector(`[aria-controls="${popupId}"]`);
        if (controllingElement) {
          controllingElement.setAttribute('aria-expanded', 'false');
        }
      }

      // hide the menu
      showHideElement(popup, false, domConstants.POPUP__VISIBLE, domConstants.POPUP__HIDDEN);
    });
}

export function loadGlobalEvents() {
  if (globalEventFuncs) {
    unloadGlobalEvents();
  }
  globalEventFuncs = {};

  globalEventFuncs.globalOnClick = hideAllMenus;
  document.addEventListener('click', globalEventFuncs.globalOnClick);

  globalEventFuncs.globalOnKeyup = (e) => {
    if (e.key === 'Escape') {
      hideAllMenus();
    }
    if (!e.shiftKey) {
      globalKeyStatus[globalKeyModifiers.SHIFT] = false;
    }
    globalKeyStatus[e.key] = false;
  };
  document.addEventListener('keyup', globalEventFuncs.globalOnKeyup);

  globalEventFuncs.globalOnKeydown = (e) => {
    if (e.shiftKey) {
      globalKeyStatus[globalKeyModifiers.SHIFT] = true;
    }
    globalKeyStatus[e.key] = true;
  };
  document.addEventListener('keydown', globalEventFuncs.globalOnKeydown);
}
