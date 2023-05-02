import { calculateMenuItemsParents } from '@utahdts/utah-design-system';
import pages from './pages';

export const menuMain = {
  // the header/title for the main menu
  header: 'Main Menu',
  id: 'main-menu',
  menuItems: [
    { link: pages.home.link, title: pages.home.pageTitle },
    { link: pages.guidelines.link, title: pages.guidelines.pageTitle },
    { link: pages.foundation.link, title: pages.foundation.pageTitle },
    { link: pages.library.link, title: pages.library.pageTitle },
    { link: pages.resources.link, title: pages.resources.pageTitle },
  ],
};

export const menuFoundationSecondary = {
  header: 'Foundation',
  id: 'foundation',
  menuItems: [
    {
      link: pages.spacing.link,
      title: pages.spacing.pageTitle,
      parentLinks: [pages.foundation.link],
    },
    {
      link: pages.typography.link,
      title: pages.typography.pageTitle,
      parentLinks: [pages.foundation.link],
    },
    {
      link: pages.depthElevationShadows.link,
      title: pages.depthElevationShadows.pageTitle,
      parentLinks: [pages.foundation.link],
    },
    {
      link: pages.shape.link,
      title: pages.shape.pageTitle,
      parentLinks: [pages.foundation.link],
    },
    {
      link: pages.motionTiming.link,
      title: pages.motionTiming.pageTitle,
      parentLinks: [pages.foundation.link],
    },
    {
      link: pages.colorFoundation.link,
      title: pages.colorFoundation.pageTitle,
      parentLinks: [pages.foundation.link],
    },
    {
      link: pages.layout.link,
      title: pages.layout.pageTitle,
      parentLinks: [pages.foundation.link],
    },
    {
      link: pages.opacity.link,
      title: pages.opacity.pageTitle,
      parentLinks: [pages.foundation.link],
    },
  ],
};

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
      link: pages.colorGuidelines.link,
      title: pages.colorGuidelines.pageTitle,
      parentLinks: [pages.guidelines.link],
    },
    {
      link: pages.design.link,
      title: pages.design.pageTitle,
      parentLinks: [pages.guidelines.link],
    },
    {
      link: pages.notifications.link,
      title: pages.notifications.pageTitle,
      parentLinks: [pages.guidelines.link],
    },
    {
      link: pages.principles.link,
      title: pages.principles.pageTitle,
      parentLinks: [pages.guidelines.link],
    },
    {
      link: pages.uxBestPractices.link,
      title: pages.uxBestPractices.pageTitle,
      parentLinks: [pages.guidelines.link],
    },
  ],
};

export const menuLibraryComponentsSecondary = {
  header: 'Components',
  id: 'library-components',
  menuItems: [
    {
      id: 'components__accordion',
      title: 'Accordion',
      link: pages.accordion.link,
      parentLinks: [pages.library.link],
    },
    {
      id: 'components__basic-atomic',
      title: 'Basic Atomic',
      parentLinks: [pages.library.link],
      children: [
        { link: pages.anchors.link, title: pages.anchors.pageTitle },
        { link: pages.horizontalRule.link, title: pages.horizontalRule.pageTitle },
        { link: pages.links.link, title: pages.links.pageTitle },
        { link: pages.tags.link, title: pages.tags.pageTitle },
        { link: pages.type.link, title: pages.type.pageTitle },
      ],
    },
    {
      id: 'components__buttons',
      title: 'Buttons',
      parentLinks: [pages.library.link],
      children: [
        { link: pages.button.link, title: pages.button.pageTitle },
        { link: pages.buttonGroup.link, title: pages.buttonGroup.pageTitle },
        { link: pages.confirmationButton.link, title: pages.confirmationButton.pageTitle },
        { link: pages.iconButton.link, title: pages.iconButton.pageTitle },
        { link: pages.segmentedButton.link, title: pages.segmentedButton.pageTitle },
      ],
    },
    {
      id: 'components__card',
      title: 'Card',
      link: pages.card.link,
      parentLinks: [pages.library.link],
    },
    {
      id: 'components__dialogs',
      link: pages.dialog.link,
      title: 'Dialog',
      parentLinks: [pages.library.link],
    },
    {
      id: 'components__elevations',
      link: pages.elevation.link,
      title: 'Elevation',
      parentLinks: [pages.library.link],
    },
    {
      id: 'components__forms',
      title: 'Forms',
      parentLinks: [pages.library.link],
      children: [
        { link: pages.checkbox.link, title: pages.checkbox.pageTitle },
        { link: pages.comboBox.link, title: pages.comboBox.pageTitle },
        { link: pages.dateInput.link, title: pages.dateInput.pageTitle },
        { link: pages.multiSelect.link, title: pages.multiSelect.pageTitle },
        { link: pages.radioButton.link, title: pages.radioButton.pageTitle },
        { link: pages.select.link, title: pages.select.pageTitle },
        { link: pages.switch.link, title: pages.switch.pageTitle },
        { link: pages.textArea.link, title: pages.textArea.pageTitle },
        { link: pages.textInput.link, title: pages.textInput.pageTitle },
      ],
    },
    {
      id: 'components__lists',
      title: 'Lists',
      link: pages.lists.link,
      parentLinks: [pages.library.link],
    },
    {
      id: 'components__navigation',
      title: 'Navigation',
      parentLinks: [pages.library.link],
      children: [
        { link: pages.pagination.link, title: pages.pagination.pageTitle },
        { link: pages.sidePanelNavigation.link, title: pages.sidePanelNavigation.pageTitle },
        { link: pages.verticalMenu.link, title: pages.verticalMenu.pageTitle },
      ],
    },
    {
      id: 'components__popups',
      title: 'Popups',
      parentLinks: [pages.library.link],
      children: [
        { link: pages.modals.link, title: pages.modals.pageTitle },
        { link: pages.popups.link, title: pages.popups.pageTitle },
      ],
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
        { link: pages.banners.link, title: pages.banners.pageTitle },
        { link: pages.progressBars.link, title: pages.progressBars.pageTitle },
        { link: pages.skeletons.link, title: pages.skeletons.pageTitle },
        { link: pages.spinners.link, title: pages.spinners.pageTitle },
        { link: pages.stepIndicator.link, title: pages.stepIndicator.pageTitle },
        { link: pages.textIndicators.link, title: pages.textIndicators.pageTitle },
        { link: pages.tooltips.link, title: pages.tooltips.pageTitle },
      ],
    },
  ],
};

export const menuLibraryPatternsSecondary = {
  header: 'Patterns',
  id: 'library-patterns',
  menuItems: [
    {
      title: 'Utah Footer',
      link: pages.utahFooter.link,
      parentLinks: [pages.library.link],
    },
    {
      title: 'Utah Header',
      link: pages.utahHeader.link,
      parentLinks: [pages.library.link],
    },
    { link: pages.validation.link, title: pages.validation.pageTitle, parentLinks: [pages.library.link] },
  ],
};

export const menuLibraryTemplatesSecondary = {
  header: 'Templates',
  id: 'library-templates',
  menuItems: [
    {
      title: '404 Page',
      link: pages.errorPage404.link, // wrong!
      parentLinks: [pages.library.link],
    },
  ],
};

export const menuResourcesSecondary = {
  header: 'Resources',
  id: 'resources',
  menuItems: [
    {
      link: pages.gettingStarted.link,
      title: pages.gettingStarted.pageTitle,
      parentLinks: [pages.resources.link],
    },
    {
      link: pages.github.link,
      title: pages.github.pageTitle,
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
      link: pages.colorPicker.link,
      title: pages.colorPicker.pageTitle,
      parentLinks: [pages.resources.link],
    },
    {
      link: pages.icons.link,
      title: pages.icons.pageTitle,
      parentLinks: [pages.resources.link],
    },
    {
      link: pages.contributeCommunity.link,
      title: pages.contributeCommunity.pageTitle,
      parentLinks: [pages.resources.link],
    },
    {
      link: pages.help.link,
      title: pages.help.pageTitle,
      parentLinks: [pages.resources.link],
    },
  ],
};

// add parent link to all the menus and export them in an object
// this allows the menus to be grabbed by name and to all be formatted the same way all at once
// though you do have to do dot notation to access them after importing
export default Object.fromEntries(
  Object.entries({
    menuMain,
    menuFoundationSecondary,
    menuGuidelinesSecondary,
    menuLibraryComponentsSecondary,
    menuLibraryPatternsSecondary,
    menuLibraryTemplatesSecondary,
    menuResourcesSecondary,
  })
    .map(([menuKey, menu]) => [menuKey, {
      ...menu,
      menuItems: calculateMenuItemsParents({ menuItems: menu.menuItems }),
    }])
);
