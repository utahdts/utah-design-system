import { describe, expect, test } from 'vitest';
import { loadHeader, setUtahHeaderSettings } from '../../../src';

/** @typedef {import('@utahdts/utah-design-system-header').MainMenu} MainMenu */

const A = 'A';
const BUTTON = 'BUTTON';
const DONT_TOUCH = '___     ___    _  _   _   _____     _____    ___    _   _    ___   _  _';
const ACTION_FUNCTION_STRING = 'i-am-function!';
const ACTION_FUNCTION_URL_STRING = 'actionFunctionUrl?.actionFunction';
// eslint-disable-next-line no-console
const ACTION_FUNCTION = () => console.log('i-am-function!');
const URL_MENU_ITEM_1 = '#menu-item-1';

// ======== UTILITIES: Main Menu ======== //
function testHasMainMenuExists() {
  const mainMenu = document.querySelector('.utah-design-system.main-menu__outer');
  expect(mainMenu).toBeTruthy();
}

/** @param {string} functionContainsContents */
function testMainMenuItemIsButton(functionContainsContents) {
  const menuItem1 = /** @type {HTMLElement} */ (document.querySelector('.main-menu__nav .menu-item-1'));

  expect(menuItem1).toBeTruthy();
  expect(menuItem1?.tagName).toBe(BUTTON);
  // has onclick to open popup
  expect(menuItem1?.onclick?.toString()).toContain(functionContainsContents);
}

/**
 * @param {string} href
 * @param {string} [functionContainsContents]
 */
function testMainMenuItemIsA(href, functionContainsContents) {
  const menuItem1 = /** @type {HTMLAnchorElement} */ (document.querySelector('.main-menu__nav .menu-item-1'));

  expect(menuItem1).toBeTruthy();
  expect(menuItem1?.tagName).toBe(A);
  expect(menuItem1?.href).toContain(href);
  if (functionContainsContents) {
    expect(menuItem1?.onclick?.toString()).toContain(functionContainsContents);
  } else {
    expect(menuItem1?.onclick).toBeNull();
  }
}

// ======== UTILITIES: Menu Item Children ======== //
/** @returns {HTMLElement | null} not really nullable but being lazy for testing sake */
function testMainMenuHasChildren() {
  const menuItem1ChildrenMenu = /** @type {HTMLElement | null} */ (document.querySelector('[aria-label="menu-item-1"]'));
  expect(menuItem1ChildrenMenu).not.toBeNull();
  return menuItem1ChildrenMenu;
}

/**
 * @param {HTMLElement | null} menuItem1ChildrenMenu
 * @param {number} menuItemCount
 * @returns {HTMLElement[] | undefined}
 */
function testMainMenuHasChildrenCount(menuItem1ChildrenMenu, menuItemCount) {
  const menuItem1ChildrenMenuItems = menuItem1ChildrenMenu?.querySelectorAll('.vertical-menu__item');
  expect(menuItem1ChildrenMenuItems?.length).toBe(menuItemCount);
  return menuItem1ChildrenMenuItems && /** @type {HTMLElement[]} */ (Array.from(menuItem1ChildrenMenuItems));
}

function testMainMenuHasNoChildren() {
  const menuItem1ChildrenMenu = /** @type {HTMLElement} */ (document.querySelector('[aria-label="menu-item-1"]'));
  expect(menuItem1ChildrenMenu).toBeNull();
}

/**
 * @param {HTMLElement | null | undefined} element
 * @param {string} functionContainsContents
 */
// @ts-ignore
// eslint-disable-next-line no-unused-vars
function testMenuItemIsButton(element, functionContainsContents) {
  expect(element).toBeTruthy();
  expect(element?.tagName).toBe(BUTTON);
  // has onclick to open popup
  expect(element?.onclick?.toString()).toContain(functionContainsContents);
}

/**
 * @param {HTMLElement | null | undefined} menuItemElement
 * @param {string} href
 * @param {string} [functionContainsContents]
 */
function testMenuItemIsA(menuItemElement, href, functionContainsContents) {
  expect(menuItemElement).toBeTruthy();
  const menuItem1ChildrenMenuItemTitle = /** @type {HTMLAnchorElement | null} */ (menuItemElement?.querySelector('.vertical-menu__link-title'));
  expect(menuItem1ChildrenMenuItemTitle).toBeTruthy();
  expect(menuItem1ChildrenMenuItemTitle?.tagName).toBe(A);
  // @ts-ignore
  expect(menuItem1ChildrenMenuItemTitle?.href).toContain(href);
  if (functionContainsContents) {
    expect(menuItem1ChildrenMenuItemTitle?.onclick?.toString()).toContain(functionContainsContents);
  } else if (menuItem1ChildrenMenuItemTitle?.onclick) {
    expect(menuItem1ChildrenMenuItemTitle.onclick.toString()).toContain(' (document.activeElement)?.blur()');
  }
}

// ======== TESTING ======== //
describe('renderMenu: parentWithLinkAndChildren - does not have both', () => {
  test('main menu has only menu items', () => {
    /** @type {MainMenu} */
    const mainMenu = {
      menuItems: [
        {
          title: 'menu-item-1',
          actionMenu: [
            { title: 'menu-item-1.1', actionUrl: { url: '#menu-item-1.1' } },
          ],
          className: 'menu-item-1',
        },
      ],
      title: 'main-menu',
    };
    setUtahHeaderSettings({ mainMenu });
    loadHeader();

    // main menu construction
    testHasMainMenuExists();
    testMainMenuItemIsButton(DONT_TOUCH);

    // has child
    const menuItem1ChildrenMenu = testMainMenuHasChildren();
    const menuItem1ChildrenMenuItems = testMainMenuHasChildrenCount(menuItem1ChildrenMenu, 1);
    testMenuItemIsA(menuItem1ChildrenMenuItems?.[0], '#menu-item-1.1');
  });

  test('main menu has only action url', () => {
    /** @type {MainMenu} */
    const mainMenu = {
      menuItems: [
        {
          title: 'menu-item-1',
          actionUrl: { url: URL_MENU_ITEM_1 },
          className: 'menu-item-1',
        },
      ],
      title: 'main-menu',
    };
    setUtahHeaderSettings({ mainMenu });
    loadHeader();

    testHasMainMenuExists();
    testMainMenuItemIsA(URL_MENU_ITEM_1);
    testMainMenuHasNoChildren();
  });

  test('main menu has only action function', () => {
    /** @type {MainMenu} */
    const mainMenu = {
      menuItems: [
        {
          title: 'menu-item-1',
          actionFunction: ACTION_FUNCTION,
          className: 'menu-item-1',
        },
      ],
      title: 'main-menu',
    };
    setUtahHeaderSettings({ mainMenu });
    loadHeader();

    testHasMainMenuExists();
    testMainMenuItemIsButton(ACTION_FUNCTION_STRING);
    testMainMenuHasNoChildren();
  });

  test('main menu has only action function url', () => {
    /** @type {MainMenu} */
    const mainMenu = {
      menuItems: [
        {
          title: 'menu-item-1',
          actionFunctionUrl: {
            actionFunction: ACTION_FUNCTION,
            url: URL_MENU_ITEM_1,
          },
          className: 'menu-item-1',
        },
      ],
      title: 'main-menu',
    };
    setUtahHeaderSettings({ mainMenu });
    loadHeader();

    testHasMainMenuExists();
    testMainMenuItemIsA(URL_MENU_ITEM_1, ACTION_FUNCTION_URL_STRING);
    testMainMenuHasNoChildren();
  });
});

describe('renderMenu: parentWithLinkAndChildren - main menu has children & action', () => {
  test('main menu has children & action url', () => {
    /** @type {MainMenu} */
    const mainMenu = {
      menuItems: [
        {
          title: 'menu-item-1',
          actionUrl: {
            url: URL_MENU_ITEM_1,
          },
          actionMenu: [
            {
              title: 'menu-item-1.1',
              actionMenu: [
                {
                  title: 'menu-item-1.1.1',
                  actionUrl: { url: '#menu-item-1.1.1' },
                  className: 'menu-item-1.1.1',
                },
              ],
              className: 'menu-item-1.1',
            },
          ],
          className: 'menu-item-1',
        },
      ],
      title: 'main-menu',
    };

    setUtahHeaderSettings({ mainMenu });
    loadHeader();

    testHasMainMenuExists();
    testMainMenuItemIsA(URL_MENU_ITEM_1, DONT_TOUCH);

    // has child
    const menuItem1ChildrenMenu = testMainMenuHasChildren();
    // 3 children - main menu 1 -> menu item 1.1 -> menu item 1.1.1
    const menuItem1ChildrenMenuItems = testMainMenuHasChildrenCount(menuItem1ChildrenMenu, 3);
    testMenuItemIsA(menuItem1ChildrenMenuItems?.[0], '#menu-item-1');
  });

  test('main menu has children & action function', () => {
    /** @type {MainMenu} */
    const mainMenu = {
      menuItems: [
        {
          title: 'menu-item-1',
          actionFunctionUrl: {
            actionFunction: ACTION_FUNCTION,
            url: URL_MENU_ITEM_1,
          },
          actionMenu: [
            {
              title: 'menu-item-1.1',
              actionMenu: [
                {
                  title: 'menu-item-1.1.1',
                  actionUrl: { url: '#menu-item-1.1.1' },
                  className: 'menu-item-1.1.1',
                },
              ],
              className: 'menu-item-1.1',
            },
          ],
          className: 'menu-item-1',
        },
      ],
      title: 'main-menu',
    };

    setUtahHeaderSettings({ mainMenu });
    loadHeader();

    testHasMainMenuExists();
    testMainMenuItemIsA(URL_MENU_ITEM_1, DONT_TOUCH);

    // has child
    const menuItem1ChildrenMenu = testMainMenuHasChildren();
    // 3 children - main menu 1 -> menu item 1.1 -> menu item 1.1.1
    const menuItem1ChildrenMenuItems = testMainMenuHasChildrenCount(menuItem1ChildrenMenu, 3);
    testMenuItemIsA(menuItem1ChildrenMenuItems?.[0], '#menu-item-1', ACTION_FUNCTION_URL_STRING);
  });

  test('main menu has children & action function url', () => {
    /** @type {MainMenu} */
    const mainMenu = {
      menuItems: [
        {
          title: 'menu-item-1',
          actionFunctionUrl: {
            actionFunction: ACTION_FUNCTION,
            url: URL_MENU_ITEM_1,
          },
          actionMenu: [
            {
              title: 'menu-item-1.1',
              actionMenu: [
                {
                  title: 'menu-item-1.1.1',
                  actionUrl: { url: '#menu-item-1.1.1' },
                  className: 'menu-item-1.1.1',
                },
              ],
              className: 'menu-item-1.1',
            },
          ],
          className: 'menu-item-1',
        },
      ],
      title: 'main-menu',
    };

    setUtahHeaderSettings({ mainMenu });
    loadHeader();

    testHasMainMenuExists();
    testMainMenuItemIsA(URL_MENU_ITEM_1, DONT_TOUCH);

    // has child
    const menuItem1ChildrenMenu = testMainMenuHasChildren();
    // 3 children - main menu 1 -> menu item 1.1 -> menu item 1.1.1
    const menuItem1ChildrenMenuItems = testMainMenuHasChildrenCount(menuItem1ChildrenMenu, 3);
    testMenuItemIsA(menuItem1ChildrenMenuItems?.[0], '#menu-item-1', ACTION_FUNCTION_URL_STRING);
  });
});

describe('renderMenu: parentWithLinkAndChildren - child menu has children & action', () => {
  test('child menu has children & action url', () => {
    /** @type {MainMenu} */
    const mainMenu = {
      menuItems: [
        {
          title: 'menu-item-1',
          actionMenu: [
            {
              title: 'menu-item-1.1',
              className: 'menu-item-1.1',
              actionUrl: { url: '#menu-item-1.1' },
              actionMenu: [
                {
                  title: 'menu-item-1.1.1',
                  actionUrl: { url: '#menu-item-1.1.1' },
                  className: 'menu-item-1.1.1',
                },
              ],
            },
          ],
          className: 'menu-item-1',
        },
      ],
      title: 'main-menu',
    };
    setUtahHeaderSettings({ mainMenu });
    loadHeader();

    // main menu construction
    testHasMainMenuExists();
    testMainMenuItemIsButton(DONT_TOUCH);

    // has child
    const menuItem1ChildrenMenu = testMainMenuHasChildren();
    const menuItem1ChildrenMenuItems = testMainMenuHasChildrenCount(menuItem1ChildrenMenu, 3);
    expect(document.querySelector('.menu-item-1')).toBeTruthy();

    // 1.1 has two menu items, one for the title and one for the (page) entry
    expect(menuItem1ChildrenMenuItems?.[0]?.classList && Array.from(menuItem1ChildrenMenuItems?.[0]?.classList)).contains('menu-item-1.1');
    expect(menuItem1ChildrenMenuItems?.[1]?.classList && Array.from(menuItem1ChildrenMenuItems?.[1]?.classList)).contains('menu-item-1.1');
    expect(menuItem1ChildrenMenuItems?.[2]?.classList && Array.from(menuItem1ChildrenMenuItems?.[2]?.classList)).contains('menu-item-1.1.1');

    testMenuItemIsA(menuItem1ChildrenMenuItems?.[0], '#menu-item-1.1');
    testMenuItemIsA(menuItem1ChildrenMenuItems?.[1], '#menu-item-1.1');
    testMenuItemIsA(menuItem1ChildrenMenuItems?.[2], '#menu-item-1.1.1');
  });

  test('child menu has children & action function', () => {
    /** @type {MainMenu} */
    const mainMenu = {
      menuItems: [
        {
          title: 'menu-item-1',
          actionMenu: [
            {
              title: 'menu-item-1.1',
              className: 'menu-item-1.1',
              actionFunction: ACTION_FUNCTION,
              actionMenu: [
                {
                  title: 'menu-item-1.1.1',
                  actionUrl: { url: '#menu-item-1.1.1' },
                  className: 'menu-item-1.1.1',
                },
              ],
            },
          ],
          className: 'menu-item-1',
        },
      ],
      title: 'main-menu',
    };
    setUtahHeaderSettings({ mainMenu });
    loadHeader();

    // main menu construction
    testHasMainMenuExists();
    testMainMenuItemIsButton(DONT_TOUCH);

    // has child
    const menuItem1ChildrenMenu = testMainMenuHasChildren();
    const menuItem1ChildrenMenuItems = testMainMenuHasChildrenCount(menuItem1ChildrenMenu, 3);
    expect(document.querySelector('.menu-item-1')).toBeTruthy();

    // 1.1 has two menu items, one for the title and one for the (page) entry
    expect(menuItem1ChildrenMenuItems?.[0]?.classList && Array.from(menuItem1ChildrenMenuItems?.[0]?.classList)).contains('menu-item-1.1');
    expect(menuItem1ChildrenMenuItems?.[1]?.classList && Array.from(menuItem1ChildrenMenuItems?.[1]?.classList)).contains('menu-item-1.1');
    expect(menuItem1ChildrenMenuItems?.[2]?.classList && Array.from(menuItem1ChildrenMenuItems?.[2]?.classList)).contains('menu-item-1.1.1');

    testMenuItemIsA(menuItem1ChildrenMenuItems?.[0], '#menu-item-1.1');
    testMenuItemIsButton(menuItem1ChildrenMenuItems?.[1]?.querySelector('button'), 'onClickBlur()');
    testMenuItemIsA(menuItem1ChildrenMenuItems?.[2], '#menu-item-1.1.1');
  });

  test('child menu has children & action function url', () => {
    /** @type {MainMenu} */
    const mainMenu = {
      menuItems: [
        {
          title: 'menu-item-1',
          actionMenu: [
            {
              title: 'menu-item-1.1',
              className: 'menu-item-1.1',
              actionFunctionUrl: {
                actionFunction: ACTION_FUNCTION,
                url: '#menu-item-1.1',
              },
              actionMenu: [
                {
                  title: 'menu-item-1.1.1',
                  actionUrl: { url: '#menu-item-1.1.1' },
                  className: 'menu-item-1.1.1',
                },
              ],
            },
          ],
          className: 'menu-item-1',
        },
      ],
      title: 'main-menu',
    };
    setUtahHeaderSettings({ mainMenu });
    loadHeader();

    // main menu construction
    testHasMainMenuExists();
    testMainMenuItemIsButton(DONT_TOUCH);

    // has child
    const menuItem1ChildrenMenu = testMainMenuHasChildren();
    const menuItem1ChildrenMenuItems = testMainMenuHasChildrenCount(menuItem1ChildrenMenu, 3);
    expect(document.querySelector('.menu-item-1')).toBeTruthy();

    // 1.1 has two menu items, one for the title and one for the (page) entry
    expect(menuItem1ChildrenMenuItems?.[0]?.classList && Array.from(menuItem1ChildrenMenuItems?.[0]?.classList)).contains('menu-item-1.1');
    expect(menuItem1ChildrenMenuItems?.[1]?.classList && Array.from(menuItem1ChildrenMenuItems?.[1]?.classList)).contains('menu-item-1.1');
    expect(menuItem1ChildrenMenuItems?.[2]?.classList && Array.from(menuItem1ChildrenMenuItems?.[2]?.classList)).contains('menu-item-1.1.1');

    testMenuItemIsA(menuItem1ChildrenMenuItems?.[0], '#menu-item-1.1', ACTION_FUNCTION_URL_STRING);
    testMenuItemIsA(menuItem1ChildrenMenuItems?.[1], '#menu-item-1.1', ACTION_FUNCTION_URL_STRING);
    testMenuItemIsA(menuItem1ChildrenMenuItems?.[2], '#menu-item-1.1.1');
  });
});
