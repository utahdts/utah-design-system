import { camelCase } from 'lodash';
import { describe, expect, test } from 'vitest';
import { pageUrls } from '../../../../src/react/components/routing/pageUrls';
import { constructMainMenu } from '../../../../src/react/components/routing/util/constructMainMenu';

/** @typedef {import('@utahdts/utah-design-system-header').MenuItem} MenuItem */
/** @typedef {import('utah-design-system-website').PageUrl} PageUrl */

/**
 * @param {string[] | undefined} existingPaths
 * @param {string[]} newPaths
 * @returns {string[]}
 */
function combinePaths(existingPaths, newPaths) {
  return (existingPaths || []).concat(newPaths);
}

const pageUrlReverseLookup = (
  Object.entries(pageUrls)
    .reduce(
      (draftReverseLookup, [pageUrlKey, pageUrl]) => {
        draftReverseLookup[pageUrl] = pageUrlKey;
        return draftReverseLookup;
      },
      /** @type {{[key: string]: string}} */({})
    )
);

/**
 * the title path has spaces slashes uppercase and all sorts of tom-foolery
 * convert it to the pageUrl format so it can match the pageUrl path
 * @param {string} menuItemTitlePath
 * @returns {string}
 */
function cleanMenuItemTitlePath(menuItemTitlePath) {
  let resultPath = menuItemTitlePath;
  // uppercase items after ( and spaces; note: " ?" is for the case of ' (a' where 'a' needs capitalized
  resultPath = resultPath.replace(/ ?[ (](.)/g, (lowercase) => lowercase.toUpperCase());

  // remove whitespace, &, (, ), /
  resultPath = resultPath.replace(/[\s,&\\(\\)\\/]/g, '');

  // /home is just /
  resultPath = resultPath.replace(/home/gi, '');

  // camelCase
  resultPath = resultPath.split('/').map((uppercase) => camelCase(uppercase)).join('/');

  return resultPath;
}

/**
 * @param {MenuItem[]} menuItems
 * @param {string} basePath
 * @returns {{[key: string]: string[]}}
 */
function deconstructMainMenuPaths(menuItems, basePath = '') {
  /** @type {{[key: string]: string[]}} */
  const pagePaths = {};

  menuItems.forEach((menuItem) => {
    const pageUrl = (
      menuItem.actionUrl?.url
      || menuItem.actionFunctionUrl?.url
    );

    // add entry for menuItem
    const menuItemPath = `${basePath}/${cleanMenuItemTitlePath(menuItem.title)}`;
    if (pageUrl) {
      // @ts-ignore
      pagePaths[pageUrlReverseLookup[pageUrl]] = combinePaths(pagePaths[pageUrl], [menuItemPath]);
    }

    // add menuItem's children to the object
    if (menuItem.actionMenu) {
      // !recurse! on children
      const childrenPaths = deconstructMainMenuPaths(menuItem.actionMenu, menuItemPath);
      // combine children in to result
      Object.entries(childrenPaths)
        .forEach(([singlePageUrlKey, singlePagePaths]) => {
          pagePaths[singlePageUrlKey] = combinePaths(pagePaths[singlePageUrlKey], singlePagePaths);
        });
    }
  });
  return pagePaths;
}

describe('pageUrls - match menu path', () => {
  const mainMenu = constructMainMenu(undefined, () => { });
  const menuPaths = deconstructMainMenuPaths(mainMenu.menuItems);

  /*
   *** !!!!!! PUT OLD LINKS IN pages.[pageBeingChanged].legacyLinks !!! so that links aren't broken !!!!!! ***
   *
   *
   * When a test fails this check it means that the pageUrls object's path for the page
   * does not match the path to the page in menus.js
   *
   *
   *** !!!!!! PUT OLD LINKS IN pages.[pageBeingChanged].legacyLinks !!! so that links aren't broken !!!!!! ***
   *
   *
   * This first builds the main menu like how the website builds the main menu.
   * It then uses the built main menu's menu titles and children to reconstruct menu paths
   * It translates the menu paths to rip out non-url safe characters and camelCases the titles
   * It then compares the transformed menu title path with the path in pageUrls to make sure they match
   *
   *
   *** !!!!!! PUT OLD LINKS IN pages.[pageBeingChanged].legacyLinks !!! so that links aren't broken !!!!!! ***
   *
   *
   * Feel free to not match the menu path with the pageUrl path, just update this test code
   * to account for the change. eg '/home' gets changed to just '/', but be ready to explain yourself.
   *
   *
   *** !!!!!! PUT OLD LINKS IN pages.[pageBeingChanged].legacyLinks !!! so that links aren't broken !!!!!! ***
  */
  test.each(
    /** @type {[[string, string, string[] | undefined]]} */(
      Object.entries(pageUrls)
        .map(([pageUrlKey, pageUrlPath]) => [pageUrlKey, pageUrlPath, menuPaths[pageUrlKey]])
        // remove pages that are not in the menu
        .filter(([, , menuPathsForPageUrl]) => menuPathsForPageUrl?.length)
    )
  )(
    'pageUrls - match menu path: %s, %s, %s',
    (_pageUrlKey, pageUrlPath, menuPathsForPageUrl) => {
      expect(menuPathsForPageUrl?.includes(pageUrlPath)).toBeTruthy();
    }
  );
});
