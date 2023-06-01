// @ts-check
import {
  menuFoundationSecondary,
  menuGuidelinesSecondary,
  menuLibraryComponentsSecondary,
  menuLibraryPatternsSecondary,
  menuMain,
  menuResourcesSecondary,
} from '../menus';
import pageUrls from '../pageUrls';

/** @typedef {import ('@utahdts/utah-design-system-header/src/js/misc/jsDocTypes').EventAction} EventAction */
/** @typedef {import ('@utahdts/utah-design-system-header/src/js/misc/jsDocTypes').MainMenu} MainMenu */
/** @typedef {import ('@utahdts/utah-design-system-header/src/js/misc/jsDocTypes').MainMenuItem} MainMenuItem */
/** @typedef {import ('@utahdts/utah-design-system-header/src/js/misc/jsDocTypes').MenuItem} MenuItem */
/** @typedef {import ('../../../../typedefs.d').PageUrl} PageUrl */
/** @typedef {import ('../../../../typedefs.d').WebsiteMainMenu} WebsiteMainMenu */
/** @typedef {import ('../../../../typedefs.d').WebsiteMainMenuItem} WebsiteMainMenuItem */

/**
 * @param {string} url
 * @param {import('react-router-dom').NavigateFunction} navigate
 * @returns {EventAction}
 */
function actionFunctionForUrl(url, navigate) {
  return (
    (e) => {
      if (!e.metaKey) {
        e.preventDefault();
        e.stopPropagation();
        // mainMenuItem.link will be there... if not, not my problem
        navigate(url);
      }
    }
  );
}

/**
 * @param {WebsiteMainMenuItem[]} websiteMainMenuItems
 * @returns {MenuItem[]}
 */
function constructMenuItems(websiteMainMenuItems, navigate) {
  return (
    websiteMainMenuItems.map((websiteMainMenuItem) => ({
      actionFunctionUrl: (
        websiteMainMenuItem.children
          ? undefined
          : (
            {
              actionFunction: actionFunctionForUrl(websiteMainMenuItem.link || pageUrls.home, navigate),
              url: websiteMainMenuItem.link || pageUrls.home,
            }
          )
      ),
      actionMenu: (
        websiteMainMenuItem.children
          ? constructMenuItems(websiteMainMenuItem.children, navigate)
          : undefined
      ),
      title: websiteMainMenuItem.title,
    }))
  );
}

/**
 * @param {import('react-router-dom').NavigateFunction} navigate
 * @returns {MainMenu}
 */
export default function constructMainMenu(currentMenuItem, navigate) {
  // create top level main menu
  /** @type {MainMenu} */
  const mainMenu = {
    title: menuMain.header,
    menuItems: menuMain.menuItems.map((mainMenuItem) => ({
      actionFunctionUrl: {
        actionFunction: actionFunctionForUrl(mainMenuItem.link || pageUrls.home, navigate),
        skipHandleEvent: true,
        // mainMenuItem.link will be there... if not, not my problem
        url: mainMenuItem.link || pageUrls.home,
      },
      isSelected: (
        currentMenuItem?.link === mainMenuItem.link
        || currentMenuItem?.parentLinks?.includes(mainMenuItem.link)
      ),
      title: mainMenuItem.title,
    })),
  };

  // get map to each menu in top level
  /** @type {{[key: string]: MainMenuItem}} */
  const mainMenusByLink = mainMenu.menuItems.reduce(
    (draftMainMenusMap, mainMenuItem) => {
      draftMainMenusMap[mainMenuItem.actionFunctionUrl?.url || 'missing-action-url'] = mainMenuItem;
      return draftMainMenusMap;
    },
    ({})
  );

  // add children to each top level menu
  mainMenusByLink[pageUrls.foundation].actionMenu = constructMenuItems(menuFoundationSecondary.menuItems, navigate);
  mainMenusByLink[pageUrls.guidelines].actionMenu = constructMenuItems(menuGuidelinesSecondary.menuItems, navigate);
  mainMenusByLink[pageUrls.library].actionMenu = constructMenuItems(menuLibraryComponentsSecondary.menuItems, navigate);
  mainMenusByLink[pageUrls.resources].actionMenu = constructMenuItems(menuLibraryPatternsSecondary.menuItems, navigate);
  mainMenusByLink[pageUrls.resources].actionMenu = constructMenuItems(menuResourcesSecondary.menuItems, navigate);

  return mainMenu;
}
