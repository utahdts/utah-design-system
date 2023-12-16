import { deleteKeysFromObject } from '../../../util/deleteKeysFromObject';
import {
  menuGuidelinesSecondary,
  menuLibraryComponentsSecondary,
  menuLibraryPatternsSecondary,
  menuLibrarySecondary,
  menuMain,
  menuResourcesSecondary,
} from '../menus';
import { pageUrls } from '../pageUrls';

/** @typedef {import('@utahdts/utah-design-system-header').EventAction} EventAction */
/** @typedef {import('@utahdts/utah-design-system-header').MainMenu} MainMenu */
/** @typedef {import('@utahdts/utah-design-system-header').MainMenuItem} MainMenuItem */
/** @typedef {import('@utahdts/utah-design-system-header').MenuItem} MenuItem */

/** @typedef {import('utah-design-system-website').PageUrl} PageUrl */
/** @typedef {import('utah-design-system-website').WebsiteMainMenu} WebsiteMainMenu */
/** @typedef {import('utah-design-system-website').WebsiteMainMenuItem} WebsiteMainMenuItem */

/**
 * @param {string} url
 * @param {import('react-router-dom').NavigateFunction} navigate
 * @returns {EventAction}
 */
function actionFunctionForUrl(url, navigate) {
  return (
    (e) => {
      if (e.metaKey) {
        window.open(url, '_blank');
      } else {
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
 * @param {import('react-router-dom').NavigateFunction} navigate
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
      isAlternatePath: websiteMainMenuItem.isAlternatePath,
      title: websiteMainMenuItem.title,
    }))
  );
}

/**
 * @param {(MainMenuItem)[]} parentMenus
 * @param {MainMenuItem | MenuItem} draftMenuItem
 * @param {WebsiteMainMenuItem | WebsiteMainMenu | undefined} currentMenuItem
 */
function assignSelectedFromHierarchy(parentMenus, draftMenuItem, currentMenuItem) {
  draftMenuItem.isSelected = (
    draftMenuItem.isSelected
    || (
      // @ts-ignore
      currentMenuItem?.link && (
        // @ts-ignore
        currentMenuItem?.link === draftMenuItem.actionFunctionUrl?.url
        // @ts-ignore
        || currentMenuItem?.link === draftMenuItem?.actionUrl?.url
      )
    )
  );
  // don't set top menu item of the alternate path item (but still set its parents)
  if (draftMenuItem.isSelected && !draftMenuItem.isAlternatePath) {
    parentMenus.forEach((draftParentMenu) => {
      draftParentMenu.isSelected = true;
    });
  }
  if (draftMenuItem.actionMenu) {
    const newParents = [...parentMenus, draftMenuItem];
    draftMenuItem.actionMenu?.forEach((actionMenuItem) => assignSelectedFromHierarchy(newParents, actionMenuItem, currentMenuItem));
  }
}

/**
 * @param {WebsiteMainMenuItem | WebsiteMainMenu | undefined} currentMenuItem
 * @param {import('react-router-dom').NavigateFunction} navigate
 * @returns {MainMenu}
 */
export function constructMainMenu(currentMenuItem, navigate) {
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
        // @ts-ignore
        (mainMenuItem.link && (currentMenuItem?.link === mainMenuItem.link))
        // @ts-ignore
        || (mainMenuItem?.actionFunctionUrl?.url && (currentMenuItem?.link === mainMenuItem?.actionFunctionUrl?.url))
        // @ts-ignore
        || (mainMenuItem.link && currentMenuItem?.parentLinks?.includes(mainMenuItem.link))
      ),
      title: mainMenuItem.title,
    })),
  };

  // get map to each menu in top level
  /** @type {{[key: string]: MainMenuItem}} */
  const mainMenusByLink = mainMenu.menuItems.reduce(
    (draftMainMenusMap, mainMenuItem) => {
      // @ts-ignore
      draftMainMenusMap[mainMenuItem.actionFunctionUrl?.url || 'missing-action-url'] = mainMenuItem;
      return draftMainMenusMap;
    },
    ({})
  );

  // add children to each top level menu
  // @ts-ignore
  mainMenusByLink[pageUrls.guidelines].actionMenu = constructMenuItems(menuGuidelinesSecondary.menuItems, navigate);
  const librarySubMenuInitial = constructMenuItems(menuLibrarySecondary.menuItems, navigate);
  // @ts-ignore
  mainMenusByLink[pageUrls.library].actionMenu = librarySubMenuInitial.concat([
    {
      actionMenu: constructMenuItems(menuLibraryComponentsSecondary.menuItems, navigate),
      title: 'Components',
    },
    {
      actionMenu: constructMenuItems(menuLibraryPatternsSecondary.menuItems, navigate),
      title: 'Patterns',
    },
  ]);
  // @ts-ignore
  mainMenusByLink[pageUrls.resources].actionMenu = constructMenuItems(menuResourcesSecondary.menuItems, navigate);

  // recursive step through children; if child selected then select all its parents too
  Object.values(mainMenusByLink)
    .forEach((menu) => assignSelectedFromHierarchy([menu], menu, currentMenuItem));

  // clear out `isAlternatePath` from all records as it is not a valid header menu object field, but was needed for selected checking
  deleteKeysFromObject(mainMenu, ['isAlternatePath']);
  return mainMenu;
}
