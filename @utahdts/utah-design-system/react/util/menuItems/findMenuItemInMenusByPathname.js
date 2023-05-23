// @ts-check
function flattenChildren(parent) {
  return [
    parent,
    ...(parent?.children?.map(flattenChildren) || []),
  ];
}

/** @typedef {import ('../../jsDocTypes').MenuItem} MenuItem */

/**
 * Given lists of menuItems, find the a menuItem that matches the current website path.
 *
 * @param {object} props
 * @param {{menuItems: MenuItem[]}[]} props.menus menus in which to search (mainMenu, sidePanel, etc) (see menus.js)
 * @param {string} props.pathname string the current pathname on which to match a menuItem
 * @returns {MenuItem} the matching menu item or `undefined` if not found
 */
function findMenuItemInMenusByPathname({ menus, pathname }) {
  return (
    (menus || []).map((menu) => (
      (menu?.menuItems || []).map(flattenChildren)
    ))
      .flat(Infinity)
      .find((menuItem) => menuItem.link === pathname)
  );
}

export default findMenuItemInMenusByPathname;
