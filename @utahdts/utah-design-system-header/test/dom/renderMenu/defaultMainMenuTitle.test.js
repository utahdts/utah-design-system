import { describe, expect, test } from 'vitest';
import { loadHeader, setUtahHeaderSettings } from '../../../src';

/** @typedef {import('@utahdts/utah-design-system-header').MainMenu} MainMenu */

// ======== TESTING ======== //
describe('renderMenu: main menu title', () => {
  test('has title', () => {
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

    const mainMenuNav = document.querySelector('.main-menu__nav');
    expect(mainMenuNav).not.toBeFalsy();
    // defaults to Main Menu if a title is not provided
    expect(mainMenuNav?.getAttribute('aria-label')).toBe('main-menu');
  });

  test('undefined title', () => {
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
      // @ts-expect-error intentional for testing
      title: undefined,
    };
    setUtahHeaderSettings({ mainMenu });
    loadHeader();

    const mainMenuNav = document.querySelector('.main-menu__nav');
    expect(mainMenuNav).not.toBeFalsy();
    // defaults to Main Menu if a title is not provided
    expect(mainMenuNav?.getAttribute('aria-label')).toBe('Main Menu');
  });
});
