/**
 * Given lists of menuItems, find the a menuItem that matches the current website path.
 *
 * @param menuItemsListsArray [[menuItems], [menuItems], ...] the lists of menuItems in which to search (mainMenu, sidePanel, etc)
 * @param pathname string the current pathname on which to match a menuItem
 * @returns the matching menu item or `undefined` if not found
 */
function findMenuItemInMenuItemsListsByPathname({ menuItemsListsArray, pathname }) {
  return (
    (menuItemsListsArray || []).map((menuItemList) => (
      (menuItemList || []).map((menuItem) => [
        menuItem,
        ...(menuItem.children || []),
      ])
    ))
      .flat(Infinity)
      .find((menuItem) => menuItem.link === pathname)
  );
}

export default findMenuItemInMenuItemsListsByPathname;
