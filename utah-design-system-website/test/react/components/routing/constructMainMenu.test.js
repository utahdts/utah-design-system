import { describe, expect, test } from 'vitest';
import { pageUrls } from '../../../../src/react/components/routing/pageUrls';
import { constructMainMenu } from '../../../../src/react/components/routing/util/constructMainMenu';

describe('constructMainMenu: isAlternatePath', () => {
  test('constructMainMenu-isAlternatePath: not alternate', () => {
    const mainMenu = constructMainMenu(
      // pageUrls.validation exists twice in the menu, under guidelines and under library
      { link: pageUrls.validation, title: 'Validation page exists in both guidelines and in patterns' },
      () => { /* navigate func */ }
    );
    const selectedMenuItems = mainMenu.menuItems.filter((menuItem) => menuItem.isSelected);
    expect(selectedMenuItems.length).toBe(1);

    // guidelines is selected
    expect(mainMenu.menuItems[1]?.isSelected).toBe(true);

    // library -> patterns -> form validation is selected, but library is not
    expect(mainMenu.menuItems[2]?.actionMenu?.[3]?.actionMenu?.[0]?.title).toBe('Form Validation');
    expect(mainMenu.menuItems[2]?.isSelected).toBe(false);
    expect(mainMenu.menuItems[2]?.actionMenu?.[3]?.actionMenu?.[0]?.isSelected).toBe(true);
  });

  test('constructMainMenu-isAlternatePath: is alternate', () => {
    const mainMenu = constructMainMenu(
      // pageUrls.validation exists twice in the menu, under guidelines and under library
      { link: pageUrls.validation, title: 'Validation page exists in both guidelines and in patterns', isAlternatePath: true },
      () => { /* navigate func */ }
    );
    const selectedMenuItems = mainMenu.menuItems.filter((menuItem) => menuItem.isSelected);
    expect(selectedMenuItems.length).toBe(1);

    // guidelines is selected
    expect(mainMenu.menuItems[1]?.isSelected).toBe(true);

    // library -> patterns -> form validation is selected, but library is not
    expect(mainMenu.menuItems[2]?.actionMenu?.[3]?.actionMenu?.[0]?.title).toBe('Form Validation');
    expect(mainMenu.menuItems[2]?.isSelected).toBe(false);
    expect(mainMenu.menuItems[2]?.actionMenu?.[3]?.actionMenu?.[0]?.isSelected).toBe(true);
  });
});
