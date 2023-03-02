// @ts-check
import domConstants, { getCssClassSelector } from '../../enumerations/domConstants';
import appendChildAll from '../../misc/appendChildAll';
import { renderDOMSingle } from '../../misc/renderDOM';
import renderPopup from '../popup/renderPopup';
import uuidv4 from '../../misc/uuidv4';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import PopupMenuHtml from './html/PopupMenu.html?raw';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import PopupMenuItemHtml from './html/PopupMenuItem.html?raw';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import ChevronIconHtml from '../icons/html/ChevronIcon.html?raw';
import childrenMenuTypes from '../../enumerations/childrenMenuTypes';

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
      const chevron = button.querySelector(':scope > svg');
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
  const menuAHref = menuItemWrapper.querySelector(getCssClassSelector(domConstants.POPUP_MENU__LINK_TITLE));
  if (!menuAHref) {
    throw new Error('renderPopupMenuItem: aHref not found');
  }
  const menuDivider = menuItemWrapper.querySelector(getCssClassSelector(domConstants.POPUP_MENU__DIVIDER));
  if (!menuDivider) {
    throw new Error('renderPopupMenuItem: menuDivider not found');
  }

  // three types of action: parent, custom function, link
  if (popupMenuItem.actionMenu) {
    switch (options.childrenMenuType) {
      case childrenMenuTypes.FLYOUT_CHILD:
        break;

      case childrenMenuTypes.FLYOUT:
      case childrenMenuTypes.INLINE:
      case childrenMenuTypes.MEGA_MENU: {
        // mega menu & inline
        // flyout: first level is a popup and the sublevels are flyouts
        //  mega menu: always expanded
        //  inline: has toggle arrow to expand/collapse sections

        // === submenu, more menu items! === //
        const subMenu = renderMenu(
          popupMenuItem,
          popupMenuItem.actionMenu,
          {
            ...options,
            childrenMenuType: ((
              options.childrenMenuType === childrenMenuTypes.FLYOUT ? childrenMenuTypes.FLYOUT_CHILD : options.childrenMenuType
            )),
          }
        );
        const subMenuId = uuidv4();
        subMenu.setAttribute('id', subMenuId);
        // these are all sub children so hide them initially
        subMenu.classList.add(domConstants.VISUALLY_HIDDEN);
        menuItemWrapper.appendChild(subMenu);
        menuButton.onclick = handleMenuExpansion(menuButton);
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-controls', subMenuId);
        const chevron = renderDOMSingle(ChevronIconHtml);
        chevron.classList.add(domConstants.IS_CLOSED);
        menuButton.appendChild(chevron);

        menuAHref.remove();

        // open all parent uls so that this menu item shows
        menuItemWrapper.addEventListener('focusin', (e) => {
          // Do not stop propagation as trickling-up will make parents open
          for (let childUl = /** @type Element | null | undefined */(e.target)?.closest('ul'); childUl; childUl = childUl.parentElement?.closest('ul')) {
            childUl.classList.remove(domConstants.VISUALLY_HIDDEN);
            menuButton.setAttribute('aria-expanded', 'true');
            // if target is the button then don't expand chevron just yet, wait for a child to be visible
            // (happens when tabbing to the chevron menu item)
            if (e.target !== menuButton) {
              chevron.classList.remove(domConstants.IS_CLOSED);
              chevron.classList.add(domConstants.IS_OPEN);
            }
          }
        });
      } break;

      default:
        throw new Error(`renderPopupMenuItem: childrenMenuType unknown '${popupMenuItem.actionMenu}'`);
    }
    menuDivider.remove();
  } else if (popupMenuItem.actionFunction) {
    // === on click custom action, so hookup onclick === //
    menuButton.onclick = popupMenuItem.actionFunction;
    menuAHref.remove();
    menuDivider.remove();
  } else if (popupMenuItem.actionUrl) {
    // === link object, so hook up href === //
    menuAHref.setAttribute('href', popupMenuItem.actionUrl.url);
    if (popupMenuItem.actionUrl.openInNewTab) {
      menuAHref.setAttribute('target', '_blank');
    }
    menuButton.remove();
    menuDivider.remove();
  } else if (popupMenuItem.isDivider) {
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
    const titleSpan = menuItemWrapper.querySelector(getCssClassSelector(domConstants.POPUP_MENU__LINK_TEXT));
    if (!titleSpan) {
      throw new Error('renderPopupMenuItem: titleSpan not found');
    }
    titleSpan.appendChild(document.createTextNode(popupMenuItem.title));
    if (popupMenuItem.actionUrl?.openInNewTab) {
      // Add an icon to indicate the external link opens in a new tab
      const externalLinkIcon = document.createElement('span');
      externalLinkIcon.classList.add(domConstants.EXTERNAL_LINK);
      externalLinkIcon.setAttribute('aria-hidden', 'true');

      // Add a message for screen readers
      const externalLinkMessage = document.createElement('span');
      externalLinkMessage.appendChild(document.createTextNode('opens in a new tab'));
      externalLinkMessage.classList.add(domConstants.VISUALLY_HIDDEN);
      titleSpan.appendChild(externalLinkMessage);
      titleSpan.appendChild(externalLinkIcon);
    }
  }

  appendChildAll(menuUl, menuItemWrapper);

  return menuItemWrapper;
}

/**
 * @param {PopupMenu | MenuItem} _parentMenu
 * @param {MenuItem[]} menuItems
 * @param {RenderPopupMenuOptions} options
 * @returns {HTMLElement}
 */
function renderMenu(_parentMenu, menuItems, options) {
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
  const popupWrapper = renderPopup(labelledByElement);

  // put the menu in the popup
  const popupContentWrapper = popupWrapper.querySelector(getCssClassSelector(domConstants.POPUP_CONTENT_WRAPPER));
  if (!popupContentWrapper) {
    throw new Error('renderPopupMenu: contentWrapper not found');
  }

  // create the menu
  const menuWrapper = renderMenu(popupMenu, popupMenu.menuItems, options);
  menuWrapper.setAttribute('aria-label', popupMenu.title);

  popupContentWrapper.appendChild(menuWrapper);

  return popupWrapper;
}
