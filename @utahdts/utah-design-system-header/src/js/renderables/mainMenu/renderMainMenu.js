// @ts-expect-error
import MainMenuItem from './html/MainMenuItem.html?raw';
// @ts-expect-error
import MainMenuWrapper from './html/MainMenuWrapper.html?raw';
// @ts-expect-error
import NewTabAccessibility from '../_html/NewTabAccessibility.html?raw';

import { childrenMenuTypes } from '../../enumerations/childrenMenuTypes';
import { domConstants, getCssClassSelector } from '../../enumerations/domConstants';
import { notNull } from '../../misc/notNull';
import { popupFocusHandler } from '../../misc/popupFocusHandler';
import { renderDOMSingle } from '../../misc/renderDOMSingle';
import { uuidv4 } from '../../misc/uuidv4';
import { getUtahHeaderSettings } from '../../settings/getUtahHeaderSettings';
import { renderPopupMenu } from '../popupMenu/renderPopupMenu';
import { setupSearchModal, showSearchModal } from '../search/searchModal';
import { hookupTooltip } from '../tooltip/hookupTooltip';
import { renderUtahIdForMobile } from '../utahId/UtahId';
import { suffixForMenuItemTitle } from './suffixForMenuItemTitle';

/** @typedef {import('src/@types/jsDocTypes.d').MainMenu} MainMenu */
/** @typedef {import('src/@types/jsDocTypes.d').PopupMenu} PopupMenu */

/**
 * @returns {{mainMenuWrapper: HTMLElement, utahIdPopup: HTMLElement | null}}
 */
export function renderMainMenu() {
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
    titleTag.innerHTML = settings.mainMenu.title || 'Main Menu';
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
      if (menuItem.className) {
        mainMenuItemButtonTitle.classList.add(menuItem.className);
      }

      const mainMenuItemLinkTitle = notNull(
        /** @type {HTMLElement} */(
          mainMenuItemTitle.querySelector(getCssClassSelector(domConstants.MENU_ITEM__LINK_TITLE))
        ),
        `renderMainMenu(): link title not found for ${menuItem.title}`
      );
      mainMenuItemLinkTitle.setAttribute('id', `${domConstants.MENU_ITEM__LINK_TITLE}__${menuItem.title}-${uuidv4()}`);
      if (menuItem.className) {
        mainMenuItemLinkTitle.classList.add(menuItem.className);
      }

      let menuItemTitleElement;
      if (menuItem.actionMenu || menuItem.actionFunction) {
        menuItemTitleElement = mainMenuItemButtonTitle;
        mainMenuItemLinkTitle.remove();
      } else if (menuItem.actionFunctionUrl || menuItem.actionUrl) {
        menuItemTitleElement = mainMenuItemLinkTitle;
        mainMenuItemButtonTitle.remove();
      } else {
        throw new Error(`renderMainMenu(): menuItem is missing an action: ${menuItem.title}`);
      }
      const menuItemTitleSpanElement = notNull(
        menuItemTitleElement.querySelector(getCssClassSelector(domConstants.MENU_ITEM__LINK_TITLE_SPAN)),
        `renderMainMenu(): main menu item title span not found for: ${menuItem.title}`
      );

      if (menuItem.isSelected) {
        menuItemTitleElement.classList.add(domConstants.MENU_ITEM__SELECTED);
      }

      if (menuItem.actionMenu) {
        const mainMenu = /** @type {MainMenu} */ (settings.mainMenu);

        // render children menu items
        menuItemTitleSpanElement.innerHTML = menuItem.title;

        const menuItems = [...menuItem.actionMenu];
        // if have both an action url and menu items, show a page link since the menu can't be both clicked to open
        // the sub menu AND clicked to got to the link
        if (
          (menuItem.actionFunction
            || menuItem.actionUrl
            || menuItem.actionFunctionUrl)
          && !menuItem.isOverviewHidden
        ) {
          // add `parentMenuLinkSuffix` menu item to top of children menu
          menuItems.unshift({
            actionFunction: menuItem.actionFunction,
            actionFunctionUrl: menuItem.actionFunctionUrl,
            actionUrl: menuItem.actionUrl,
            className: menuItem.className,
            icon: menuItem.icon,
            title: `${menuItem.title}${suffixForMenuItemTitle(menuItem, mainMenu.parentMenuLinkSuffix)}`,
          });
        }

        /** @type {PopupMenu} */
        const popupMenu = { menuItems, title: menuItem.title };
        const subMenuPopup = renderPopupMenu(
          popupMenu,
          menuItemTitleElement,
          {
            childrenMenuType: menuItem.childrenMenuType || childrenMenuTypes.FLYOUT,
            parentMenuLinkSuffix: mainMenu.parentMenuLinkSuffix,
          }
        );
        mainMenuItem.appendChild(subMenuPopup);
        popupFocusHandler(mainMenuItem, menuItemTitleElement, subMenuPopup, 'menu', { shouldFocusOnHover: true, doNotClosePopupOnClick: true });
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
      } else {
        const mainMenuItemArrow = notNull(
          menuItemTitleElement.querySelector(getCssClassSelector(domConstants.MENU_ITEM__ARROW)),
          `renderMainMenu(): menu arrow not found for ${menuItem.title}`
        );
        mainMenuItemArrow.remove();
      }

      if (menuItem.actionFunction) {
        // custom function when triggered
        menuItemTitleSpanElement.innerHTML = menuItem.title;
        // if have children, then the action is moved to the `parentMenuLinkSuffix` menu item and not here
        if (!menuItem.actionMenu) {
          menuItemTitleElement.onclick = menuItem.actionFunction;
        }
      } else if (menuItem.actionFunctionUrl) {
        menuItemTitleSpanElement.innerHTML = menuItem.title;
        menuItemTitleElement.setAttribute('href', menuItem.actionFunctionUrl.url);

        // if have children, then the action is moved to the `parentMenuLinkSuffix` menu item and not here
        if (!menuItem.actionMenu) {
          menuItemTitleElement.onclick = (e) => {
            if (!menuItem.actionFunctionUrl?.skipHandleEvent) {
              e.stopPropagation();
              e.preventDefault();
            }
            menuItem.actionFunctionUrl?.actionFunction(e);
          };
        }
      } else if (menuItem.actionUrl) {
        // go to url when triggered
        menuItemTitleSpanElement.innerHTML = menuItem.title;
        menuItemTitleElement.setAttribute('href', menuItem.actionUrl.url);
      }

      if (
        !menuItem.actionMenu
        && (menuItem.actionUrl?.openInNewTab || menuItem.actionFunctionUrl?.openInNewTab)
      ) {
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
    setupSearchModal();

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

    // UDS-564 - move search to top right if no main menu
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
