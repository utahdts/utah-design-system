// @ts-check
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import MainMenuItem from './html/MainMenuItem.html?raw';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import MainMenuWrapper from './html/MainMenuWrapper.html?raw';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import NewTabAccessibility from '../_html/NewTabAccessibility.html?raw';

import childrenMenuTypes from '../../enumerations/childrenMenuTypes';
import domConstants, { getCssClassSelector } from '../../enumerations/domConstants';
import findRecursive from '../../misc/findRecursive';
import popupFocusHandler from '../../misc/popupFocusHandler';
import renderDOMSingle from '../../misc/renderDOMSingle';
import uuidv4 from '../../misc/uuidv4';
import { getUtahHeaderSettings } from '../../settings/settings';
import renderPopupMenu from '../popupMenu/renderPopupMenu';
import showSearchModal from '../search/showSearchModal';
import hookupToolTip from '../tooltip/hookupTooltip';
import { renderUtahIdForMobile } from '../utahId/UtahId';

/**
 * @typedef {import('../../misc/jsDocTypes').PopupMenu} PopupMenu
 */

/**
 * @returns {{mainMenuWrapper: HTMLElement, utahIdPopup: HTMLElement | null}}
 */
export default function renderMainMenu() {
  const settings = getUtahHeaderSettings();
  /** @type {HTMLElement} */
  const mainMenuWrapper = renderDOMSingle(MainMenuWrapper);

  const mainMenuNav = mainMenuWrapper.querySelector(getCssClassSelector(domConstants.MAIN_MENU__NAV));
  if (!mainMenuNav) {
    throw new Error('renderMainMenu(): mainMenu not created');
  }

  const titleTag = mainMenuNav.querySelector(getCssClassSelector(domConstants.MAIN_MENU__TITLE));
  if (!titleTag) {
    throw new Error('renderMainMenu(): titleTag not found');
  }

  const mainMenuId = 'main-menu__nav';
  mainMenuNav.setAttribute('aria-labelledby', mainMenuId);
  titleTag.setAttribute('id', mainMenuId);
  titleTag.innerHTML = settings.mainMenu.title;

  const mainMenuTop = mainMenuNav.querySelector(getCssClassSelector(domConstants.MAIN_MENU__MENU_TOP));
  if (!mainMenuTop) {
    throw new Error('renderMainMenu(): mainMenuTop not found');
  }

  // render top level menu items with popups for their children
  settings.mainMenu.menuItems.forEach((menuItem) => {
    const mainMenuItem = renderDOMSingle(MainMenuItem);
    mainMenuTop.appendChild(mainMenuItem);

    const mainMenuItemTitle = mainMenuItem.querySelector(getCssClassSelector(domConstants.MENU_ITEM__TITLE));
    if (!mainMenuItemTitle) {
      throw new Error(`renderMainMenu(): sub menu title not found for ${menuItem.title}`);
    }

    const mainMenuItemButtonTitle = /** @type {HTMLElement} */ (
      mainMenuItemTitle.querySelector(getCssClassSelector(domConstants.MENU_ITEM__BUTTON_TITLE))
    );
    if (!mainMenuItemButtonTitle) {
      throw new Error(`renderMainMenu(): button title not found for ${menuItem.title}`);
    }
    mainMenuItemButtonTitle.setAttribute('id', `${domConstants.MENU_ITEM__BUTTON_TITLE}__${menuItem.title}-${uuidv4()}`);

    const mainMenuItemLinkTitle = /** @type {HTMLElement} */ (
      mainMenuItemTitle.querySelector(getCssClassSelector(domConstants.MENU_ITEM__LINK_TITLE))
    );
    if (!mainMenuItemLinkTitle) {
      throw new Error(`renderMainMenu(): link title not found for ${menuItem.title}`);
    }

    // add selected to title if selected (or any children are selected)
    if (menuItem.isSelected || (menuItem.actionMenu && findRecursive(menuItem.actionMenu, ['actionMenu'], (checkMenuItem) => !!checkMenuItem.isSelected))) {
      mainMenuItemButtonTitle.classList.add(domConstants.MENU_ITEM__SELECTED);
      mainMenuItemLinkTitle.classList.add(domConstants.MENU_ITEM__SELECTED);
    }

    if (menuItem.actionMenu) {
      // render children menu items
      mainMenuItemButtonTitle.innerHTML = menuItem.title;
      mainMenuItemLinkTitle.remove();

      /** @type {PopupMenu} */
      const popupMenu = {
        menuItems: menuItem.actionMenu,
        title: menuItem.title,
      };
      const subMenuPopup = renderPopupMenu(
        popupMenu,
        mainMenuItemButtonTitle,
        {
          childrenMenuType: menuItem.childrenMenuType || childrenMenuTypes.FLYOUT,
        }
      );
      mainMenuItem.appendChild(subMenuPopup);
      popupFocusHandler(mainMenuItem, mainMenuItemButtonTitle, subMenuPopup, 'menu', { shouldFocusOnHover: true });
      /** @type {string} */
      let menuClass;
      switch (menuItem.childrenMenuType) {
        case childrenMenuTypes.INLINE:
          menuClass = domConstants.MENU_ITEM__INLINE;
          break;
        case childrenMenuTypes.MEGA_MENU:
          menuClass = domConstants.MENU_ITEM__MEGA_MENU;
          break;
        case childrenMenuTypes.FLYOUT:
        default:
          menuClass = domConstants.MENU_ITEM__FLY_OUT;
          break;
      }
      mainMenuItem.classList.add(menuClass);
    } else if (menuItem.actionFunction) {
      // custom function when triggered
      mainMenuItemButtonTitle.innerHTML = menuItem.title;
      mainMenuItemButtonTitle.onclick = menuItem.actionFunction;
      mainMenuItemLinkTitle.remove();
    } else if (menuItem.actionFunctionUrl) {
      mainMenuItemLinkTitle.innerHTML = menuItem.title;
      mainMenuItemLinkTitle.setAttribute('href', menuItem.actionFunctionUrl.url);

      mainMenuItemLinkTitle.onclick = (e) => {
        if (!menuItem.actionFunctionUrl?.skipHandleEvent) {
          e.stopPropagation();
          e.preventDefault();
        }
        menuItem.actionFunctionUrl?.actionFunction(e);
      };
      mainMenuItemButtonTitle.remove();
    } else if (menuItem.actionUrl) {
      // go to url when triggered
      mainMenuItemLinkTitle.innerHTML = menuItem.title;
      mainMenuItemLinkTitle.setAttribute('href', menuItem.actionUrl.url);
      mainMenuItemButtonTitle.remove();
    } else {
      throw new Error(`renderMainMenu(): menuItem is missing an action: ${menuItem.title}`);
    }

    if (menuItem.actionUrl?.openInNewTab || menuItem.actionFunctionUrl?.openInNewTab) {
      mainMenuItemLinkTitle.setAttribute('target', '_blank');
      mainMenuItemLinkTitle.appendChild(renderDOMSingle(NewTabAccessibility));
    }
  });

  let utahIdPopup = null;
  if (settings.utahId) {
    const { button: utahIdButton, menu } = renderUtahIdForMobile();
    utahIdPopup = menu;
    const utahIdButtonWrapper = mainMenuWrapper.querySelector(getCssClassSelector(domConstants.MOBILE__UTAH_ID));
    if (!utahIdButtonWrapper) {
      throw new Error('renderMainMenu: utahIdButtonWrapper not found');
    }
    utahIdButtonWrapper.appendChild(utahIdButton);
  }

  // search icon
  const searchIcon = mainMenuWrapper.querySelector(getCssClassSelector(domConstants.MAIN_MENU__SEARCH));
  if (!searchIcon || !(searchIcon instanceof HTMLElement)) {
    throw new Error('renderMainMenu: searchIcon not found');
  }
  if (settings.onSearch) {
    hookupToolTip(searchIcon, 'Search');
    if (searchIcon.onclick) {
      throw new Error('searchIcon already has onclick');
    }
    searchIcon.onclick = () => showSearchModal();
  } else {
    // add a blank div to consume space
    searchIcon.parentElement?.insertBefore(renderDOMSingle('<div class="main-menu__search-placeholder">'), searchIcon);
    searchIcon.remove();
  }

  return { mainMenuWrapper, utahIdPopup };
}
