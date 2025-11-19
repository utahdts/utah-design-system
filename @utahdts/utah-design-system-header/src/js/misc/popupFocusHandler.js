import { arrow, computePosition, flip, offset, shift } from '@floating-ui/dom';
import { domConstants, getCssClassSelector } from '../enumerations/domConstants';
import { PopupPlacement } from '../enumerations/popupPlacement';
import { hideAllMenus } from '../lifecycle/globalEvents';
import { allowAriaExpanded } from './allowAriaExpanded';
import { checkForError } from './checkForError';
import { isTouchDevice } from './isTouchDevice';
import { showHideElement } from './showHideElement';

/*
   ___     ___    _  _   _   _____     _____    ___    _   _    ___   _  _
  |   \   / _ \  | \| | ( ) |_   _|   |_   _|  / _ \  | | | |  / __| | || |
  | |) | | (_) | | .` | |/    | |       | |   | (_) | | |_| | | (__  | __ |
  |___/   \___/  |_|\_|       |_|       |_|    \___/   \___/   \___| |_||_|

  If you do dare touch this, and you probably should if you need to, here are the testing scenarios to consider:
  * have an action item (divisions) that pops open a menu with children
    * tab through the action item so that the popup opens and tab through children so that they toggle open
    * tabbing out of focus of the action item and children menus should then close the popup
  * have two action items with popups (menu popup and dom content popup)
    * click on one of the action icons to open the popup
    * click on the other action icon to open its popup and close the other popup
    * there was a point in time where the original popup was not closing
  * have a header menu item with at least 3 levels deep of menu items
    * tab to the children at the deepest level and make sure that the sub menus flyout
  * accessibility: have an action item (divisions) that has a popup menu with children
    * without tabbing or clicking, use accessibility (ctrl+opt+right-arrow) to move on top of the divisions action item
    * trigger the menu (ctrl+opt+space) to have the menu toggle open
  * do the same test as above but with the Utah ID button after logging in so that it opens the Utah Id menu
  * have a main menu item whose children flyout and make sure hovering causes those menu items to flyout
  * tab to a child menu in a popup menu that also has children menus (use an "inline" menu)
    * this "middle" menu (has parent and children) when first focused should not have its chevron open nor show its children
    * tabbing again to see this menu's children then opens the children and toggles the chevron

  Notes:
  * mobile devices do not have focus events. This caused issues with putting logic in focus that would work in browser but not
    in mobile and vice/versa.
  * when targeting items via accessibility navigation (not tab key), items do not receive focus, so focus events again were
    problematic.
  * Added a timeout to the open/close because the focusin, mousedown, and onclick were fighting with timing issues
    * sometimes onfocusin would fire first, other times onmousedown would fire first
    * and they would cause each other to see different statuses because one would open and another would close the menu

  !!!!  WARNING  !!!!
  Schrödinger's cat may live here!
           __..--''``---....___   _..._    __
  /// //_.-'    .-/";  `        ``<._  ``.''_ `. / // /
  ///_.-' _..--.'_    \                    `( ) ) // //
  / (_..-' // (< _     ;_..__               ; `' / ///
  / // // //  `-._,_)' // / ``--...____..-' /// / //
 */

/**
 * @typedef {import('src/@types/jsDocTypes.d').AriaHasPopupType} AriaHasPopupType
 * @typedef {import('src/@types/jsDocTypes.d').PopupFocusHandlerOptions} PopupFocusHandlerOptions
 */

/**
 * Tracking focus of a wrapper that has a button for toggling and a popup inside of it
 * for both onClicks AND tabbing to focus is pretty complicated. The idea is that while the
 * button OR menu has focus, the menu is shown. Also global events like clicking off the wrapper
 * or pressing escape should also close the popup.
 * @param {HTMLElement} wrapper the wrapper containing the button and popup
 * @param {HTMLElement} button the button that toggles the popup to open/close
 * @param {HTMLElement} popup the actual popup being opened and closed
 * @param {AriaHasPopupType} ariaHasPopup aria tag for popup type
 * @param {PopupFocusHandlerOptions | undefined} options
 */
export function popupFocusHandler(wrapper, button, popup, ariaHasPopup, options) {
  let delayPopupTimeoutId = NaN;
  let delayHideTimeoutId = NaN;
  const TIMEOUT_MS_LONG = 350;
  const TIMEOUT_MS_MEDIUM = 150;
  const TIMEOUT_MS_SHORT = 50;

  if (allowAriaExpanded(button)) {
    button.setAttribute('aria-expanded', 'false');
  }
  button.setAttribute('aria-haspopup', ariaHasPopup);

  /*
     ___     ___    _  _   _   _____     _____    ___    _   _    ___   _  _
    |   \   / _ \  | \| | ( ) |_   _|   |_   _|  / _ \  | | | |  / __| | || |
    | |) | | (_) | | .` | |/    | |       | |   | (_) | | |_| | | (__  | __ |
    |___/   \___/  |_|\_|       |_|       |_|    \___/   \___/   \___| |_||_|
  */
  /**
   * @param {number} delayMS
   */
  function performPopup(delayMS) {
    clearTimeout(delayPopupTimeoutId);
    clearTimeout(delayHideTimeoutId);

    if (!options?.isPerformPopup || options?.isPerformPopup()) {
      delayPopupTimeoutId = window.setTimeout(
        () => {
          const tooltipArrow = popup.querySelector(getCssClassSelector(domConstants.POPUP_ARROW));
          const middleware = [
            offset(11),
            flip(),
            shift(),
          ]
          if (tooltipArrow) {
            middleware.push(arrow({element: tooltipArrow}));
          }
          computePosition(
            button,
            popup,
            {
              placement: options?.popupPlacement || PopupPlacement.BOTTOM,
              middleware,
            }
          ).then(({x, y, middlewareData}) => {
            popup.setAttribute('data-popup-placement', options?.popupPlacement || PopupPlacement.BOTTOM);
            Object.assign(popup.style, {
              left: `${x}px`,
              top: `${y}px`,
            });
            if(tooltipArrow) {
              // @ts-expect-error Position the arrow
              Object.assign(tooltipArrow.style, {
                left: x != null ? `${middlewareData?.arrow?.x}px` : '',
                top: y != null ? `${middlewareData?.arrow?.y}px` : '',
              });
            }
          });
          showHideElement(popup, true, domConstants.POPUP__VISIBLE, domConstants.POPUP__HIDDEN);
          if (allowAriaExpanded(button)) {
            button.setAttribute('aria-expanded', 'true');
          }

          // hide all tooltips
          document.querySelectorAll(getCssClassSelector(domConstants.TOOLTIP__WRAPPER))
            .forEach((tooltip) => tooltip.classList.add(domConstants.TOOLTIP__WRAPPER__HIDDEN));
        },
        delayMS
      );
    }
  }

  /*
     ___     ___    _  _   _   _____     _____    ___    _   _    ___   _  _
    |   \   / _ \  | \| | ( ) |_   _|   |_   _|  / _ \  | | | |  / __| | || |
    | |) | | (_) | | .` | |/    | |       | |   | (_) | | |_| | | (__  | __ |
    |___/   \___/  |_|\_|       |_|       |_|    \___/   \___/   \___| |_||_|
  */
  /**
   * @param {number} delayMS
   */
  function hidePopup(delayMS) {
    clearTimeout(delayPopupTimeoutId);
    clearTimeout(delayHideTimeoutId);
    if (!options?.isPerformPopup || options.isPerformPopup()) {
      delayHideTimeoutId = window.setTimeout(
        () => {
          showHideElement(popup, false, domConstants.POPUP__VISIBLE, domConstants.POPUP__HIDDEN);
          if (allowAriaExpanded(button)) {
            button.setAttribute('aria-expanded', 'false');
          }
        },
        delayMS
      );
    }
  }

  /*
     ___     ___    _  _   _   _____     _____    ___    _   _    ___   _  _
    |   \   / _ \  | \| | ( ) |_   _|   |_   _|  / _ \  | | | |  / __| | || |
    | |) | | (_) | | .` | |/    | |       | |   | (_) | | |_| | | (__  | __ |
    |___/   \___/  |_|\_|       |_|       |_|    \___/   \___/   \___| |_||_|
  */
  if (options?.preventOnClickHandling) {
    checkForError(!!wrapper.onclick, 'popupFocusHandler: wrapper already has an onclick');
    // eslint-disable-next-line no-param-reassign
    wrapper.onclick = (e) => {
      // for menus that are both a link and have children menus, when doing a popup, prevent clicking
      // from doing anything so that the popup menu doesn't go away on the click. The link for the
      // menu will be a separate menu item.
      e.stopPropagation();
    };
  }

  wrapper.addEventListener('focusin', () => performPopup(TIMEOUT_MS_MEDIUM));
  wrapper.addEventListener('focusout', () => hidePopup(TIMEOUT_MS_MEDIUM));
  wrapper.addEventListener('keyup', (e) => {
    // When the user hits escape, we send the focus back to the main button
    // then we close the popup
    if (e.code === 'Escape' || e.key === 'Escape') {
      button.focus();
      hidePopup(TIMEOUT_MS_SHORT);
    }
  });

  if (options?.shouldFocusOnHover) {
    wrapper.addEventListener('mouseenter', () => performPopup(TIMEOUT_MS_LONG));
    wrapper.addEventListener('mouseleave', () => hidePopup(TIMEOUT_MS_LONG));
  }

  /*
     ___     ___    _  _   _   _____     _____    ___    _   _    ___   _  _
    |   \   / _ \  | \| | ( ) |_   _|   |_   _|  / _ \  | | | |  / __| | || |
    | |) | | (_) | | .` | |/    | |       | |   | (_) | | |_| | | (__  | __ |
    |___/   \___/  |_|\_|       |_|       |_|    \___/   \___/   \___| |_||_|
  */

  if (!options?.preventOnClickHandling) {
    if (button.onclick) {
      throw new Error('popupFocusHandler: button already has onclick');
    }
    // eslint-disable-next-line no-param-reassign
    button.onclick = (e) => {
      const wasAlreadyOpen = button.getAttribute('aria-expanded') === 'true';
      // for click popups
      if (!options?.isPerformPopup || options.isPerformPopup()) {
        e.stopPropagation();
        e.preventDefault();
        /*
           ___     ___    _  _   _   _____     _____    ___    _   _    ___   _  _
          |   \   / _ \  | \| | ( ) |_   _|   |_   _|  / _ \  | | | |  / __| | || |
          | |) | | (_) | | .` | |/    | |       | |   | (_) | | |_| | | (__  | __ |
          |___/   \___/  |_|\_|       |_|       |_|    \___/   \___/   \___| |_||_|
        */

        // if !wasAlreadyOpen but aria-expanded is "true" then the 'focusin' opened it (tabbed to it?)
        if (wasAlreadyOpen && button.getAttribute('aria-expanded') === 'true') {
          if (!options?.doNotClosePopupOnClick) {
            hidePopup(TIMEOUT_MS_SHORT);
            /** @type {HTMLElement | null} */(document.activeElement)?.blur();
          }
        } else {
          if (isTouchDevice()) {
            hideAllMenus();
          }
          performPopup(TIMEOUT_MS_SHORT);
        }
      }
      if (options?.onClick) {
        options.onClick(e);
      }
    };
  }
}
/*
   ___     ___    _  _   _   _____     _____    ___    _   _    ___   _  _
  |   \   / _ \  | \| | ( ) |_   _|   |_   _|  / _ \  | | | |  / __| | || |
  | |) | | (_) | | .` | |/    | |       | |   | (_) | | |_| | | (__  | __ |
  |___/   \___/  |_|\_|       |_|       |_|    \___/   \___/   \___| |_||_|

  -- see top for details --
*/
