import { childrenMenuTypes } from '@utahdts/utah-design-system-header';
import { calculateMenuItemsParents } from '../../util/menuItems/calculateMenuItemsParents';
import { pages } from './pages';

/** @typedef {import('utah-design-system-website').WebsiteMainMenu} WebsiteMainMenu */

/** @type {WebsiteMainMenu} */
export const menuMain = {
  // the header/title for the main menu
  header: 'Main Menu',
  id: 'main-menu',
  menuItems: [
    { link: pages.home.link, title: pages.home.pageTitle },
    { link: pages.guidelines.link, title: pages.guidelines.pageTitle },
    { link: pages.library.link, title: pages.library.pageTitle },
    { link: pages.resources.link, title: pages.resources.pageTitle },
    { link: pages.gettingStarted.link, title: pages.gettingStarted.pageTitle },
  ],
};

/** @type {WebsiteMainMenu} */
export const menuGuidelinesSecondary = {
  header: 'Guidelines and Standards',
  id: 'guidelines',
  menuItems: [
    {
      link: pages.accessibility.link,
      title: pages.accessibility.pageTitle,
      parentLinks: [pages.guidelines.link],
    },
    {
      link: pages.accessibilityTesting.link,
      title: pages.accessibilityTesting.pageTitle,
      parentLinks: [pages.guidelines.link],
    },
    {
      link: pages.colorGuidelines.link,
      title: pages.colorGuidelines.pageTitle,
      parentLinks: [pages.guidelines.link],
    },
    {
      link: pages.dataPrivacy.link,
      title: pages.dataPrivacy.pageTitle,
      parentLinks: [pages.guidelines.link],
    },
    {
      link: pages.dataVisualizations.link,
      title: pages.dataVisualizations.pageTitle,
      parentLinks: [pages.guidelines.link],
    },
    {
      link: pages.depthElevationShadows.link,
      title: pages.depthElevationShadows.pageTitle,
      parentLinks: [pages.guidelines.link],
    },
    {
      link: pages.formGeneralDocumentation.link,
      title: pages.formGeneralDocumentation.pageTitle,
      parentLinks: [pages.guidelines.link],
    },
    {
      // "form validation"
      link: pages.validation.link,
      title: pages.validation.pageTitle,
      parentLinks: [pages.guidelines.link],
    },
    {
      link: pages.images.link,
      title: pages.images.pageTitle,
      parentLinks: [pages.guidelines.link],
    },
    {
      link: pages.layout.link,
      title: pages.layout.pageTitle,
      parentLinks: [pages.guidelines.link],
    },
    {
      link: pages.opacity.link,
      title: pages.opacity.pageTitle,
      parentLinks: [pages.guidelines.link],
    },
    {
      link: pages.shape.link,
      title: pages.shape.pageTitle,
      parentLinks: [pages.guidelines.link],
    },
    {
      link: pages.spacing.link,
      title: pages.spacing.pageTitle,
      parentLinks: [pages.guidelines.link],
    },
    {
      link: pages.typography.link,
      title: pages.typography.pageTitle,
      parentLinks: [pages.guidelines.link],
    },
  ],
};

/** @type {WebsiteMainMenu} */
export const menuLibraryComponentsSecondary = {
  header: 'Components',
  id: 'library-components',
  menuItems: [
    {
      id: 'components__text-layout',
      title: 'Text & Layout',
      parentLinks: [pages.library.link],
      children: [
        // Basic and Semantic Text
        { link: pages.paragraphs.link, title: pages.paragraphs.pageTitle },
        { link: pages.blockquote.link, title: pages.blockquote.pageTitle },
        { link: pages.codeBlock.link, title: pages.codeBlock.pageTitle },
        { link: pages.dividers.link, title: pages.dividers.pageTitle },
        { link: pages.headings.link, title: pages.headings.pageTitle },
        { link: pages.lists.link, title: pages.lists.pageTitle },
      ],
      childrenMenuType: childrenMenuTypes.INLINE,
    },
    {
      id: 'components__buttons-tags',
      title: 'Buttons & Tags',
      parentLinks: [pages.library.link],
      children: [
        { link: pages.button.link, title: pages.button.pageTitle },
        { link: pages.confirmationButton.link, title: pages.confirmationButton.pageTitle },
        { link: pages.iconButton.link, title: pages.iconButton.pageTitle },
        { link: pages.segmentedButton.link, title: pages.segmentedButton.pageTitle },
        { link: pages.tags.link, title: pages.tags.pageTitle },
        { link: pages.iconBar.link, title: pages.iconBar.pageTitle },
      ],
      childrenMenuType: childrenMenuTypes.INLINE,
    },
    {
      id: 'components__containers',
      title: 'Containers',
      parentLinks: [pages.library.link],
      children: [
        { link: pages.accordion.link, title: pages.accordion.pageTitle },
        { link: pages.card.link, title: pages.card.pageTitle },
        { link: pages.drawers.link, title: pages.drawers.pageTitle },
        { link: pages.tabs.link, title: pages.tabs.pageTitle },
      ],
      childrenMenuType: childrenMenuTypes.INLINE,
    },
    {
      id: 'components__forms',
      title: 'Forms',
      parentLinks: [pages.library.link],
      children: [
        { link: pages.checkbox.link, title: pages.checkbox.pageTitle },
        { link: pages.comboBox.link, title: pages.comboBox.pageTitle },
        { link: pages.dateInput.link, title: pages.dateInput.pageTitle },
        { link: pages.infoBox.link, title: pages.infoBox.pageTitle },
        { link: pages.fileInput.link, title: pages.fileInput.pageTitle },
        { link: pages.multiSelect.link, title: pages.multiSelect.pageTitle },
        { link: pages.radioButton.link, title: pages.radioButton.pageTitle },
        { link: pages.select.link, title: pages.select.pageTitle },
        { link: pages.switch.link, title: pages.switch.pageTitle },
        { link: pages.characterCount.link, title: pages.characterCount.pageTitle },
        { link: pages.textInput.link, title: pages.textInput.pageTitle },
        { link: pages.textArea.link, title: pages.textArea.pageTitle },
        { link: pages.timeInput.link, title: pages.timeInput.pageTitle },
      ],
      childrenMenuType: childrenMenuTypes.INLINE,
    },
    {
      id: 'components__navigation-links',
      title: 'Navigation & Links',
      parentLinks: [pages.library.link],
      children: [
        { link: pages.breadcrumb.link, title: pages.breadcrumb.pageTitle },
        { link: pages.hamburger.link, title: pages.hamburger.pageTitle },
        { link: pages.mainMenu.link, title: pages.mainMenu.pageTitle },
        { link: pages.megaMenu.link, title: pages.megaMenu.pageTitle },
        { link: pages.links.link, title: pages.links.pageTitle },
        { link: pages.skipLink.link, title: pages.skipLink.pageTitle },
        { link: pages.backTopTop.link, title: pages.backTopTop.pageTitle },
        { link: pages.pagination.link, title: pages.pagination.pageTitle },
        { link: pages.sidePanelNavigation.link, title: pages.sidePanelNavigation.pageTitle },
        { link: pages.verticalMenu.link, title: pages.verticalMenu.pageTitle },
      ],
      childrenMenuType: childrenMenuTypes.INLINE,
    },
    {
      id: 'components__popups',
      title: 'Popups',
      parentLinks: [pages.library.link],
      children: [
        { link: pages.banners.link, title: pages.banners.pageTitle },
        { link: pages.modals.link, title: pages.modals.pageTitle },
        { link: pages.popups.link, title: pages.popups.pageTitle },
        { link: pages.tooltips.link, title: pages.tooltips.pageTitle },
      ],
      childrenMenuType: childrenMenuTypes.INLINE,
    },
    {
      id: 'components__sliders-carousels',
      title: 'Sliders & Carousels',
      parentLinks: [pages.library.link],
      children: [
        { link: pages.carousel.link, title: pages.carousel.pageTitle },
      ],
      childrenMenuType: childrenMenuTypes.INLINE,
    },
    {
      id: 'components__table',
      title: 'Table',
      link: pages.table.link,
      parentLinks: [pages.library.link],
    },
    {
      id: 'components__widgets-indicators',
      title: 'Widgets & Indicators',
      parentLinks: [pages.library.link],
      children: [
        { link: pages.badges.link, title: pages.badges.pageTitle },
        { link: pages.processList.link, title: pages.processList.pageTitle },
        { link: pages.progressBars.link, title: pages.progressBars.pageTitle },
        { link: pages.skeletons.link, title: pages.skeletons.pageTitle },
        { link: pages.spinners.link, title: pages.spinners.pageTitle },
        { link: pages.stepIndicator.link, title: pages.stepIndicator.pageTitle },
        { link: pages.statusIndicator.link, title: pages.statusIndicator.pageTitle },
      ],
      childrenMenuType: childrenMenuTypes.INLINE,
    },
  ],
};

// sort forms sub-menu alphabetically
menuLibraryComponentsSecondary.menuItems.find((item) => (item.id === 'components__forms'))?.children?.sort((a, b) => a.title.localeCompare(b.title));

/** @type {WebsiteMainMenu} */
export const menuLibraryPatternsSecondary = {
  header: 'Patterns',
  id: 'library-patterns',
  menuItems: [
    {
      title: 'Form Validation',
      link: pages.validation.link,
      parentLinks: [pages.guidelines.link],
      isAlternatePath: true,
    },
  ],
};

export const menuLibrarySecondary = {
  header: 'Library',
  id: 'library-menu',
  menuItems: [
    {
      title: 'Utah Header',
      link: pages.utahHeader.link,
      parentLinks: [pages.library.link],
    },
    {
      title: 'Utah Footer',
      link: pages.utahFooter.link,
      parentLinks: [pages.library.link],
    },
  ],
};

/** @type {WebsiteMainMenu} */
export const menuResourcesSecondary = {
  header: 'Resources',
  id: 'resources',
  menuItems: [
    {
      link: pages.gettingStartedDesigner.link,
      title: pages.gettingStartedDesigner.pageTitle,
      parentLinks: [pages.resources.link],
    },
    {
      link: pages.gettingStartedDeveloper.link,
      title: pages.gettingStartedDeveloper.pageTitle,
      parentLinks: [pages.resources.link],
    },

    {
      link: pages.mockups.link,
      title: pages.mockups.pageTitle,
      parentLinks: [pages.resources.link],
    },

    {
      link: pages.demo.link,
      title: pages.demo.pageTitle,
      parentLinks: [pages.resources.link],
    },

    {
      link: pages.showcase.link,
      title: pages.showcase.pageTitle,
      parentLinks: [pages.resources.link],
    },

    {
      link: pages.icons.link,
      title: pages.icons.pageTitle,
      parentLinks: [pages.resources.link],
    },

    {
      link: pages.wordPressHeaderPlugin.link,
      title: pages.wordPressHeaderPlugin.pageTitle,
      parentLinks: [pages.wordPressHeaderPlugin.link],
    },
    {
      link: pages.accessibilityTestingPage.link,
      title: pages.accessibilityTestingPage.pageTitle,
      parentLinks: [pages.resources.link],
    },
  ],
};

/**
 * @param {{title: string}} a
 * @param {{title: string}} b
 * @returns {number}
 */
function sorter(a, b) {
  return a.title.localeCompare(b.title);
}

// sort menu items alphabetically
menuGuidelinesSecondary.menuItems.sort(sorter);
menuLibraryComponentsSecondary.menuItems.sort(sorter);
menuLibraryComponentsSecondary.menuItems.forEach((item) => item.children?.sort(sorter));
menuLibraryPatternsSecondary.menuItems.sort(sorter);
menuResourcesSecondary.menuItems.sort(sorter);

// add parent link to all the menus and export them in an object
// this allows the menus to be grabbed by name and to all be formatted the same way all at once
// though you do have to do dot notation to access them after importing
export const allMenus = Object.fromEntries(
  Object.entries({
    menuMain,
    menuGuidelinesSecondary,
    menuLibraryComponentsSecondary,
    menuLibraryPatternsSecondary,
    menuLibrarySecondary,
    menuResourcesSecondary,
  })
    .map(([menuKey, menu]) => [
      menuKey,
      {
        ...menu,
        menuItems: calculateMenuItemsParents({ menuItems: menu.menuItems }),
      },
    ])
);
