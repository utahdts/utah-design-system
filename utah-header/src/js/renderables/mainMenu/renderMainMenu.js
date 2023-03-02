// @ts-check
import domConstants, { getCssClassSelector } from '../../enumerations/domConstants';
import popupFocusHandler from '../../misc/popupFocusHandler';
import { renderDOMSingle } from '../../misc/renderDOM';
import { getUtahHeaderSettings } from '../../settings/settings';
import renderPopupMenu from '../popupMenu/renderPopupMenu';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import MainMenuItem from './html/MainMenuItem.html?raw';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import MainMenuWrapper from './html/MainMenuWrapper.html?raw';

/**
 * @typedef {import('../../misc/jsDocTypes').PopupMenu} PopupMenu
 */

/**
 * @returns {HTMLElement | null}
 */
export default function renderMainMenu() {
  const settings = getUtahHeaderSettings();
  /** @type {HTMLElement | null} */
  let mainMenuWrapper = null;

  if (settings.mainMenu) {
    mainMenuWrapper = renderDOMSingle(MainMenuWrapper);

    const mainMenuNav = mainMenuWrapper.querySelector(getCssClassSelector(domConstants.MAIN_MENU__NAV));
    if (!mainMenuNav) {
      throw new Error('renderMainMenu(): mainMenu not created');
    }

    const titleTag = mainMenuNav.querySelector(getCssClassSelector(domConstants.MAIN_MENU__TITLE));
    if (!titleTag) {
      throw new Error('renderMainMenu(): titleTag not found');
    }

    const mainMenuId = `main-menu__${settings.mainMenu.title}`;
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
      mainMenuItemTitle.setAttribute('id', 'main-menu');

      const mainMenuItemButtonTitle = /** @type {HTMLElement} */ (
        mainMenuItemTitle.querySelector(getCssClassSelector(domConstants.MENU_ITEM__BUTTON_TITLE))
      );
      if (!mainMenuItemButtonTitle) {
        throw new Error(`renderMainMenu(): button title not found for ${menuItem.title}`);
      }
      const mainMenuItemLinkTitle = mainMenuItemTitle.querySelector(getCssClassSelector(domConstants.MENU_ITEM__LINK_TITLE));
      if (!mainMenuItemLinkTitle) {
        throw new Error(`renderMainMenu(): link title not found for ${menuItem.title}`);
      }

      if (menuItem.actionMenu) {
        mainMenuItemButtonTitle.innerHTML = menuItem.title;
        mainMenuItemLinkTitle.remove();

        /** @type {PopupMenu} */
        const popupMenu = {
          menuItems: menuItem.actionMenu,
          title: menuItem.title,
        };
        const subMenuPopup = renderPopupMenu(popupMenu, mainMenuItemTitle);
        mainMenuItem.appendChild(subMenuPopup);
        popupFocusHandler(mainMenuItem, mainMenuItemButtonTitle, subMenuPopup, 'menu', { shouldFocusOnHover: true });
      } else if (menuItem.actionFunction) {
        mainMenuItemButtonTitle.innerHTML = menuItem.title;
        mainMenuItemLinkTitle.remove();
      } else if (menuItem.actionUrl) {
        mainMenuItemLinkTitle.innerHTML = menuItem.title;
        mainMenuItemButtonTitle.remove();
      } else {
        throw new Error(`renderMainMenu(): menuItem is missing an action: ${menuItem.title}`);
      }
    });
  }

  /*
  <!-- <button aria-expanded="true" aria-labelledby="menu-item-components__popups-menuHeader::Popups"
      class="menu-item__button-title" id="menu-item-components__popups-menuHeader::Popups" type="button">Popups</button>
    <button class="button icon-button menu-item__chevron menu-item__chevron--open icon-button--borderless" type="button"
      aria-labelledby="menu-item-components__popups-menuHeader::Popups" aria-expanded="true">
      <svg viewBox="0 0 10.75 6.834" class="icon-svg icon-chevron ">
        <g>
          <path d="M5.375,6.834L0,1.438,1.437,0l3.938,3.938L9.313,0l1.437,1.438L5.375,6.834Z"></path>
        </g>
      </svg>
      <span class="visually-hidden">expand sub-menu</span></button></span>
  <ul class="menu-item__sub-menu--open" role="menu">
    <li class="menu-item"><span class="menu-item__title"><a aria-current="page" class="menu-item--selected"
          href="/library/components/navigation/popups">Popups</a></span></li>
  </ul> -->
  */

  return mainMenuWrapper;
}
