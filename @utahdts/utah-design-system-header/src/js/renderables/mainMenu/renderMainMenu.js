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
import notNull from '../../misc/notNull';
import popupFocusHandler from '../../misc/popupFocusHandler';
import renderDOMSingle from '../../misc/renderDOMSingle';
import uuidv4 from '../../misc/uuidv4';
import getUtahHeaderSettings from '../../settings/getUtahHeaderSettings';
import renderPopupMenu from '../popupMenu/renderPopupMenu';
import showSearchModal from '../search/showSearchModal';
import hookupTooltip from '../tooltip/hookupTooltip';
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

  let mainMenuNav = mainMenuWrapper.querySelector(getCssClassSelector(domConstants.MAIN_MENU__NAV));
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
  if (settings.mainMenu) {
    titleTag.innerHTML = settings.mainMenu.title;
  } else {
    mainMenuNav.remove();
    mainMenuNav = null;
  }

  if (settings.mainMenu) {
    const mainMenuTop = mainMenuNav?.querySelector(getCssClassSelector(domConstants.MAIN_MENU__MENU_TOP));
    if (!mainMenuTop) {
      throw new Error('renderMainMenu(): mainMenuTop not found');
    }

    // render top level menu items with popups for their children
    settings.mainMenu.menuItems.forEach((menuItem) => {
      const mainMenuItem = renderDOMSingle(MainMenuItem);
      mainMenuTop.appendChild(mainMenuItem);

      const mainMenuItemTitle = notNull(
        mainMenuItem.querySelector(getCssClassSelector(domConstants.MENU_ITEM__TITLE)),
        `renderMainMenu(): sub menu title not found for ${menuItem.title}`
      );

      const mainMenuItemButtonTitle = notNull(
        /** @type {HTMLElement} */(
          mainMenuItemTitle.querySelector(getCssClassSelector(domConstants.MENU_ITEM__BUTTON_TITLE))
        ),
        `renderMainMenu(): button title not found for ${menuItem.title}`
      );
      mainMenuItemButtonTitle.setAttribute('id', `${domConstants.MENU_ITEM__BUTTON_TITLE}__${menuItem.title}-${uuidv4()}`);

      const mainMenuItemLinkTitle = notNull(
        /** @type {HTMLElement} */(
          mainMenuItemTitle.querySelector(getCssClassSelector(domConstants.MENU_ITEM__LINK_TITLE))
        ),
        `renderMainMenu(): link title not found for ${menuItem.title}`
      );
      mainMenuItemLinkTitle.setAttribute('id', `${domConstants.MENU_ITEM__LINK_TITLE}__${menuItem.title}-${uuidv4()}`);

      let menuItemTitleElement;
      if (menuItem.actionFunctionUrl || menuItem.actionUrl) {
        menuItemTitleElement = mainMenuItemLinkTitle;
        mainMenuItemButtonTitle.remove();
      } else if (menuItem.actionMenu || menuItem.actionFunction) {
        menuItemTitleElement = mainMenuItemButtonTitle;
        mainMenuItemLinkTitle.remove();
      } else {
        throw new Error(`renderMainMenu(): menuItem is missing an action: ${menuItem.title}`);
      }

      // add selected to title if selected (or any children are selected)
      if (menuItem.isSelected || (menuItem.actionMenu && findRecursive(menuItem.actionMenu, ['actionMenu'], (checkMenuItem) => !!checkMenuItem.isSelected))) {
        menuItemTitleElement.classList.add(domConstants.MENU_ITEM__SELECTED);
      }

      if (menuItem.actionMenu) {
        // render children menu items
        menuItemTitleElement.innerHTML = menuItem.title;

        /** @type {PopupMenu} */
        const popupMenu = {
          menuItems: menuItem.actionMenu,
          title: menuItem.title,
        };
        const subMenuPopup = renderPopupMenu(
          popupMenu,
          menuItemTitleElement,
          {
            childrenMenuType: menuItem.childrenMenuType || childrenMenuTypes.FLYOUT,
          }
        );
        mainMenuItem.appendChild(subMenuPopup);
        popupFocusHandler(mainMenuItem, menuItemTitleElement, subMenuPopup, 'menu', { shouldFocusOnHover: true });
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
      }

      if (menuItem.actionFunction) {
        // custom function when triggered
        menuItemTitleElement.innerHTML = menuItem.title;
        menuItemTitleElement.onclick = menuItem.actionFunction;
      } else if (menuItem.actionFunctionUrl) {
        menuItemTitleElement.innerHTML = menuItem.title;
        menuItemTitleElement.setAttribute('href', menuItem.actionFunctionUrl.url);

        menuItemTitleElement.onclick = (e) => {
          if (!menuItem.actionFunctionUrl?.skipHandleEvent) {
            e.stopPropagation();
            e.preventDefault();
          }
          menuItem.actionFunctionUrl?.actionFunction(e);
        };
      } else if (menuItem.actionUrl) {
        // go to url when triggered
        menuItemTitleElement.innerHTML = menuItem.title;
        menuItemTitleElement.setAttribute('href', menuItem.actionUrl.url);
      }

      if (menuItem.actionUrl?.openInNewTab || menuItem.actionFunctionUrl?.openInNewTab) {
        menuItemTitleElement.setAttribute('target', '_blank');
        menuItemTitleElement.appendChild(renderDOMSingle(NewTabAccessibility));
      }
    });
  }

  // ===== UTAH ID ===== //
  let utahIdPopup = null;
  if (settings.utahId) {
    const { button: utahIdButton, menu } = renderUtahIdForMobile();
    utahIdPopup = menu;
    const utahIdButtonWrapper = notNull(
      mainMenuWrapper.querySelector(getCssClassSelector(domConstants.MOBILE__UTAH_ID)),
      'renderMainMenu: utahIdButtonWrapper not found'
    );
    utahIdButtonWrapper.appendChild(utahIdButton);
  }

  // ===== SEARCH ICON ===== //
  const searchIcon = notNull(
    /** @type {HTMLElement} */(
      mainMenuWrapper.querySelector(getCssClassSelector(domConstants.MAIN_MENU__SEARCH))
    ),
    'renderMainMenu: searchIcon not found'
  );
  if (settings.onSearch) {
    hookupTooltip(searchIcon, document.createTextNode('Search'));
    if (searchIcon.onclick) {
      throw new Error('searchIcon already has onclick');
    }
    searchIcon.onclick = () => showSearchModal();

    if (!settings.mainMenu) {
      const citizenExperienceWrapper = notNull(
        document.querySelector(getCssClassSelector(domConstants.CITIZEN_EXPERIENCE)),
        'renderMainMenu: citizen experience wrapper not found'
      );
      // if actions AND search, but not utahId nor menu
      // Desktop: the search is with the action icons
      // mobile: the search is on main menu bar with hamburger
      // so make a copy of the menu bar search so it can be mobile and citizen
      const mobileSearchIcon = renderDOMSingle(searchIcon.outerHTML);
      hookupTooltip(mobileSearchIcon, document.createTextNode('Search'));
      mobileSearchIcon.onclick = () => showSearchModal();
      searchIcon.classList.add(domConstants.DESKTOP__HIDDEN);

      // search icon is the far right item in the citizen experience (no utahid button)
      // there is no main menu, so move search in to top header by utahID button UDS-564
      if (settings.utahId !== false) {
        // place search icon just to left of utahId button
        const utahIdWrapper = notNull(document.querySelector(getCssClassSelector(domConstants.UTAH_ID)), 'renderMainMenu: utahId wrapper not found');
        citizenExperienceWrapper.insertBefore(mobileSearchIcon, utahIdWrapper);
      } else {
        citizenExperienceWrapper.appendChild(mobileSearchIcon);
      }
    }

    // UDS-564 - move search top top right if no main menu
    if (!settings.mainMenu && !settings.actionItems && settings.utahId === false) {
      // create search clone
      const searchIconMobile = renderDOMSingle(/** @type {HTMLElement} */(searchIcon).outerHTML);
      // run same hookup stuff above
      hookupTooltip(searchIconMobile, document.createTextNode('Search'));
      if (searchIconMobile.onclick) {
        throw new Error('searchIconMobile already has onclick');
      }
      searchIconMobile.onclick = () => showSearchModal();

      // place in mobile citizen experience
      const citizenExperienceMobile = notNull(
        document.querySelector(getCssClassSelector(domConstants.CITIZEN_EXPERIENCE_MOBILE)),
        'renderMainMenu: citizen-experience--mobile not found'
      );
      // move search to top right citizen experience because main menu is toast
      citizenExperienceMobile.appendChild(searchIconMobile);
    }
  }
  if (!settings.onSearch) {
    if (settings.mainMenu || (!settings.mainMenu && settings.utahId)) {
      // add a blank div to consume space (only if there is a main menu)
      searchIcon.parentElement?.insertBefore(renderDOMSingle('<div class="main-menu__search-placeholder">'), searchIcon);
    }
    searchIcon.remove();
  }

  return { mainMenuWrapper, utahIdPopup };
}
