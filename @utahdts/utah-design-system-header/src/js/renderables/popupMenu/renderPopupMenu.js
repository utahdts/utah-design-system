// @ts-check
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import ChevronIconHtml from '../icons/html/ChevronIcon.html?raw';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import NewTabAccessibility from '../_html/NewTabAccessibility.html?raw';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import PopupMenuHtml from './html/PopupMenu.html?raw';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import PopupMenuItemHtml from './html/PopupMenuItem.html?raw';

import childrenMenuTypes from '../../enumerations/childrenMenuTypes';
import domConstants, { getCssClassSelector } from '../../enumerations/domConstants';
import popupPlacement from '../../enumerations/popupPlacement';
import findRecursive from '../../misc/findRecursive';
import popupFocusHandler from '../../misc/popupFocusHandler';
import renderDOMSingle from '../../misc/renderDOMSingle';
import uuidv4 from '../../misc/uuidv4';
import renderPopup from '../popup/renderPopup';

/**
 * @typedef {import('../../misc/jsDocTypes').ChildrenMenuType} ChildrenMenuType
 * @typedef {import('../../misc/jsDocTypes').MenuItem} MenuItem
 * @typedef {import('../../misc/jsDocTypes').PopupMenu} PopupMenu
 * @typedef {import('../../misc/jsDocTypes').RenderPopupMenuOptions} RenderPopupMenuOptions
 */

/**
 * @param {HTMLElement} element the ul or child of a ul that has uls inside of it that need open/closed
*/
function toggleChildMenuExpansion(element) {
  const parent = element.closest('li');
  if (!parent) {
    // eslint-disable-next-line no-console
    console.error('element', element);
    throw new Error('toggleChildMenuExpansion: parent not found for child');
  }
  parent.querySelectorAll(':scope > ul')
    .forEach((childUl) => {
      // toggle chevron direction class
      const button = childUl.closest('li')?.querySelector(getCssClassSelector(domConstants.POPUP_MENU__BUTTON_TITLE));
      if (!button) {
        throw new Error('toggleChildMenuExpansion: button not found');
      }
      const chevron = button.querySelector(`:scope > ${getCssClassSelector(domConstants.POPUP_MENU__CHEVRON)}`);
      if (!chevron) {
        throw new Error('toggleChildMenuExpansion: chevron not found');
      }
      // toggle child menu items open close
      childUl.classList.toggle(domConstants.VISUALLY_HIDDEN);
      if (childUl.classList.contains(domConstants.VISUALLY_HIDDEN)) {
        button.setAttribute('aria-expanded', 'false');
        chevron.classList.add(domConstants.IS_CLOSED);
        chevron.classList.remove(domConstants.IS_OPEN);
      } else {
        button.setAttribute('aria-expanded', 'true');
        chevron.classList.remove(domConstants.IS_CLOSED);
        chevron.classList.add(domConstants.IS_OPEN);
      }
    });
}

/**
 * @param {HTMLElement} htmlElement the element on which to toggle opening and closing its children
 * @returns {function(this: GlobalEventHandlers, MouseEvent): any} an event handler for toggling open child menus
 */
function handleMenuExpansion(htmlElement) {
  return (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleChildMenuExpansion(htmlElement);
  };
}

/**
 * @returns {HTMLElement}
 */
function renderChevron() {
  const chevron = renderDOMSingle(ChevronIconHtml);
  chevron.classList.add(domConstants.IS_CLOSED);
  return chevron;
}

/**
 * @param {Element} menuUl
 * @param {MenuItem} popupMenuItem
 * @param {RenderPopupMenuOptions} options
 * @return {HTMLElement}
 */
function renderPopupMenuItem(menuUl, popupMenuItem, options) {
  const menuItemWrapper = renderDOMSingle(PopupMenuItemHtml);
  const menuItemTitleWrapper = menuItemWrapper.querySelector(getCssClassSelector(domConstants.POPUP_MENU__TITLE));
  if (!menuItemTitleWrapper) {
    throw new Error('renderPopupMenuItem: menuItemTitleWrapper not found');
  }
  const menuButton = /** @type HTMLElement | null */ (menuItemWrapper.querySelector(getCssClassSelector(domConstants.POPUP_MENU__BUTTON_TITLE)));
  if (!menuButton) {
    throw new Error('renderPopupMenuItem: menuButton not found');
  }
  const menuAHref = /** @type HTMLElement | null */ (menuItemWrapper.querySelector(getCssClassSelector(domConstants.POPUP_MENU__LINK_TITLE)));
  if (!menuAHref) {
    throw new Error('renderPopupMenuItem: aHref not found');
  }
  const plainTitle = /** @type HTMLElement | null */ (menuItemWrapper.querySelector(getCssClassSelector(domConstants.POPUP_MENU__PLAIN_TITLE)));
  if (!plainTitle) {
    throw new Error('renderPopupMenuItem: plainTitle not found');
  }
  const menuDivider = menuItemWrapper.querySelector(getCssClassSelector(domConstants.POPUP_MENU__DIVIDER));
  if (!menuDivider) {
    throw new Error('renderPopupMenuItem: menuDivider not found');
  }
  const titleSpanButton = menuItemWrapper.querySelector(`button ${getCssClassSelector(domConstants.POPUP_MENU__LINK_TEXT)}`);
  if (!titleSpanButton) {
    throw new Error('renderPopupMenuItem: titleSpanButton not found');
  }
  const titleSpanLink = menuItemWrapper.querySelector(`a ${getCssClassSelector(domConstants.POPUP_MENU__LINK_TEXT)}`);
  if (!titleSpanLink) {
    throw new Error('renderPopupMenuItem: titleSpanLink not found');
  }

  // three types of action: parent, custom function, link
  if (popupMenuItem.actionMenu) {
    /** @type {HTMLElement | undefined} */
    let chevron;
    switch (options.childrenMenuType) {
      case childrenMenuTypes.FLYOUT: {
        // flyout: first level is a popup and the sublevels are a flyout
        chevron = renderChevron();
        menuButton.appendChild(chevron);
        menuButton.setAttribute('id', uuidv4());
        const subMenuItemsPopup = renderPopupMenu(
          {
            menuItems: popupMenuItem.actionMenu,
            title: popupMenuItem.title,
          },
          menuButton,
          {
            ...options,
            removePopupArrow: true,
          }
        );
        menuItemWrapper.appendChild(subMenuItemsPopup);
        popupFocusHandler(
          menuItemWrapper,
          menuButton,
          subMenuItemsPopup,
          'menu',
          {
            popupPlacement: popupPlacement.RIGHT_START,
            preventOnClickHandling: true,
            shouldFocusOnHover: true,
          }
        );
        menuAHref.remove();
        plainTitle.remove();
        break;
      }

      case childrenMenuTypes.INLINE: {
        const subMenu = renderMenu(
          popupMenuItem.actionMenu,
          options
        );
        const subMenuId = uuidv4();
        subMenu.setAttribute('id', subMenuId);
        // these are all sub children so hide them initially
        subMenu.classList.add(domConstants.VISUALLY_HIDDEN);
        menuItemWrapper.appendChild(subMenu);
        menuButton.onclick = handleMenuExpansion(menuButton);
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-controls', subMenuId);
        chevron = renderChevron();
        menuButton.appendChild(chevron);

        menuAHref.remove();
        plainTitle.remove();

        // open all parent uls so that this menu item shows
        menuItemWrapper.addEventListener('focusin', (e) => {
          // Do not stop propagation as trickling-up will make parents open
          // if e.target is switched to e.currenttarget then tabbing through child popup menus does not open the children
          for (let childUl = /** @type Element | null | undefined */(e.target)?.closest('ul'); childUl; childUl = childUl.parentElement?.closest('ul')) {
            childUl.classList.remove(domConstants.VISUALLY_HIDDEN);
            menuButton.setAttribute('aria-expanded', 'true');
            // if target is the button then don't expand chevron just yet, wait for a child to be visible
            // (happens when tabbing to the chevron menu item)
            // using e.currentTarget caused the chevron to expand on the parent before the children were tabbed into
            if (e.target !== menuButton) {
              chevron?.classList?.remove(domConstants.IS_CLOSED);
              chevron?.classList?.add(domConstants.IS_OPEN);
            }
          }
        });
        break;
      }

      case childrenMenuTypes.MEGA_MENU: {
        const subMenu = renderMenu(
          popupMenuItem.actionMenu,
          options
        );
        const subMenuId = uuidv4();
        subMenu.setAttribute('id', subMenuId);
        menuItemWrapper.appendChild(subMenu);

        menuAHref.remove();
        menuButton.remove();
        plainTitle.appendChild(document.createTextNode(popupMenuItem.title));
        break;
      }

      default:
        throw new Error(`renderPopupMenuItem: childrenMenuType unknown '${popupMenuItem.actionMenu}'`);
    }
    menuDivider.remove();
  } else if (popupMenuItem.actionFunction) {
    // === on click custom action, so hookup onclick === //
    menuButton.onclick = popupMenuItem.actionFunction;
    menuAHref.remove();
    menuDivider.remove();
    plainTitle.remove();
  } else if (popupMenuItem.actionUrl) {
    // === link object, so hook up href === //
    menuAHref.setAttribute('href', popupMenuItem.actionUrl.url);
    menuButton.remove();
    menuDivider.remove();
    plainTitle.remove();
  } else if (popupMenuItem.actionFunctionUrl) {
    menuAHref.setAttribute('href', popupMenuItem.actionFunctionUrl.url);
    menuAHref.onclick = (e) => {
      if (!popupMenuItem.actionFunctionUrl?.skipHandleEvent) {
        e.stopPropagation();
        e.preventDefault();
      }
      popupMenuItem.actionFunctionUrl?.actionFunction(e);
    };
    menuButton.remove();
    menuDivider.remove();
    plainTitle.remove();
  } else if (popupMenuItem.isDivider) {
    // remove ALL title items by removing the wrapper (instead of individually)
    menuItemTitleWrapper.remove();
    menuItemWrapper.setAttribute('aria-hidden', 'true');
    menuItemWrapper.setAttribute('role', 'separator');
  } else {
    // eslint-disable-next-line no-console
    console.error(popupMenuItem);
    throw new Error(`renderPopupMenuItem: popupMenuItem must have either actionMenu, actionFunction, actionUrl, or isDivider (${'popupMenuItem.title'})`);
  }

  // dividers do not use a title, though title still required in jsDoc for troubleshooting and simplicity of jsDoc
  if (!popupMenuItem.isDivider) {
    titleSpanButton.appendChild(document.createTextNode(popupMenuItem.title));
    titleSpanLink.appendChild(document.createTextNode(popupMenuItem.title));
    if (popupMenuItem.actionUrl?.openInNewTab || popupMenuItem.actionFunctionUrl?.openInNewTab) {
      menuAHref.setAttribute('target', '_blank');
      // Add a message for screen readers
      const externalLinkMessage = renderDOMSingle(NewTabAccessibility);
      titleSpanButton.appendChild(externalLinkMessage);
      titleSpanLink.appendChild(externalLinkMessage);
    }
  }

  // add selected to title if selected (or any children are selected)
  if (popupMenuItem.isSelected || (popupMenuItem.actionMenu && findRecursive(popupMenuItem.actionMenu, ['actionMenu'], (checkMenuItem) => !!checkMenuItem.isSelected))) {
    menuButton.classList.add(domConstants.MENU_ITEM__SELECTED);
    menuAHref.classList.add(domConstants.MENU_ITEM__SELECTED);
  }

  if (popupMenuItem.isSelected) {
    menuItemWrapper.classList.add(domConstants.MENU_ITEM__SELECTED);
  } else {
    menuItemWrapper.classList.remove(domConstants.MENU_ITEM__SELECTED);
  }

  menuUl.appendChild(menuItemWrapper);

  return menuItemWrapper;
}

/**
 * @param {MenuItem[]} menuItems
 * @param {RenderPopupMenuOptions} options
 * @returns {HTMLElement}
 */
export function renderMenu(menuItems, options) {
  const menuWrapper = renderDOMSingle(PopupMenuHtml);

  menuItems.forEach((menuItem) => renderPopupMenuItem(menuWrapper, menuItem, options));

  return menuWrapper;
}

/**
 * @param {PopupMenu} popupMenu - the menu to display
 * @param {Element} labelledByElement - the triggering component (must have an `id`)
 * @param {RenderPopupMenuOptions} options
 * @returns {HTMLElement}
 */
export default function renderPopupMenu(popupMenu, labelledByElement, options) {
  // create the popup
  const popupWrapper = renderPopup(labelledByElement, { removePopupArrow: options.removePopupArrow });

  // put the menu in the popup
  const popupContentWrapper = popupWrapper.querySelector(getCssClassSelector(domConstants.POPUP_CONTENT_WRAPPER));
  if (!popupContentWrapper) {
    throw new Error('renderPopupMenu: contentWrapper not found');
  }

  // create the menu
  const menuWrapper = renderMenu(popupMenu.menuItems, options);
  menuWrapper.setAttribute('aria-label', popupMenu.title);

  popupContentWrapper.appendChild(menuWrapper);

  return popupWrapper;
}
