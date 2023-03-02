// @ts-check
import { createPopper } from '@popperjs/core';
import { popperPlacement } from '@utahdts/utah-design-system';
import domConstants from '../enumerations/domConstants';
import showHideElement from './showHideElement';

/**
 * @typedef {import('../misc/jsDocTypes').AriaHasPopupType} AriaHasPopupType
 * @typedef {import('../misc/jsDocTypes').PopupFocusHandlerOptions} PopupFocusHandlerOptions
 */

/**
 * Tracking focus of a wrapper that has a button for toggling and a popup inside of it
 * for both onClicks AND tabbing to focus is pretty complicated. The idea is that while the
 * button OR menu has focus, the menu is shown. Also global events like clicking off the wrapper
 * or pressing escape should also close the popup.
 *
 * @param {HTMLElement} wrapper the wrapper containing the button and popup
 * @param {HTMLElement} button the button that toggles the popup to open/close
 * @param {HTMLElement} popup the actual popup being opened and closed
 * @param {AriaHasPopupType} ariaHasPopup aria tag for popup type
 * @param {PopupFocusHandlerOptions | undefined} options
 */
export default function popupFocusHandler(wrapper, button, popup, ariaHasPopup, options) {
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-haspopup', ariaHasPopup);

  function performPopup() {
    if (!options?.isPerformPopup || (options?.isPerformPopup && options.isPerformPopup())) {
      createPopper(button, popup, {
        placement: options?.popupPlacement || popperPlacement.BOTTOM,
        modifiers: [
          {
            name: 'offset',
            options: { offset: [0, 11] },
          },
        ],
      });
      showHideElement(popup, true, domConstants.POPUP__VISIBLE, domConstants.POPUP__HIDDEN);
      button.setAttribute('aria-expanded', 'true');
    }
  }

  function hidePopup() {
    if (!options?.isPerformPopup || options.isPerformPopup()) {
      showHideElement(popup, false, domConstants.POPUP__VISIBLE, domConstants.POPUP__HIDDEN);
      button.setAttribute('aria-expanded', 'false');
    }
  }

  wrapper.addEventListener('focusin', () => performPopup());
  wrapper.addEventListener('focusout', () => hidePopup());
  if (options?.shouldFocusOnHover) {
    let delayPopupTimeoutId = NaN;
    let delayHideTimeoutId = NaN;
    wrapper.addEventListener('mouseenter', () => {
      clearTimeout(delayHideTimeoutId);
      clearTimeout(delayPopupTimeoutId);
      delayPopupTimeoutId = window.setTimeout(performPopup, 200);
    });
    wrapper.addEventListener('mouseleave', () => {
      clearTimeout(delayHideTimeoutId);
      clearTimeout(delayPopupTimeoutId);
      delayHideTimeoutId = window.setTimeout(hidePopup, 200);
    });
  }

  let isButtonFocusedBeforeClick = null;

  // eslint-disable-next-line no-param-reassign
  button.onmousedown = () => {
    if (!options?.isPerformPopup || options.isPerformPopup()) {
      // remember if is focused BEFORE click to know if menu needs shown or hidden during onclick
      // the loop checks if the WRAPPER has something focused in it instead of just checking if the button is focused
      isButtonFocusedBeforeClick = false;
      for (let parent = document.activeElement; parent && !isButtonFocusedBeforeClick; parent = parent.parentElement) {
        isButtonFocusedBeforeClick = parent === wrapper;
      }
    }
  };

  if (!options?.preventOnClickHandling) {
    // eslint-disable-next-line no-param-reassign
    button.onclick = (e) => {
      // for click popups
      if (!options?.isPerformPopup || options.isPerformPopup()) {
        e.stopPropagation();
        e.preventDefault();

        button.setAttribute('aria-expanded', 'true');

        if (!isButtonFocusedBeforeClick && button === document.activeElement) {
          createPopper(
            button,
            popup,
            {
              placement: 'bottom',
              modifiers: [
                {
                  name: 'offset',
                  options: { offset: [0, 10] },
                },
              ],
            }
          );
          showHideElement(popup, true, domConstants.POPUP__VISIBLE, domConstants.POPUP__HIDDEN);
        } else if (isButtonFocusedBeforeClick) {
          showHideElement(popup, false, domConstants.POPUP__VISIBLE, domConstants.POPUP__HIDDEN);
          button.setAttribute('aria-expanded', 'false');
          /** @type {HTMLElement | null} */(document.activeElement)?.blur();
        }
      }
      if (options?.onClick) {
        options.onClick(e);
      }
    };
  }
}
