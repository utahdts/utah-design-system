import calculateMenuItemsParents from '@utahdts/utah-design-system/react/util/menuItems/calculateMenuItemsParents';
import pages from './pages';

const menuMain = {
  // the header for the main menu never gets rendered
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

const menuFoundationSecondary = {
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

const menuGuidelinesSecondary = {
  header: 'Guidelines and Standards',
  id: 'guidelines',
  menuItems: [
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
  ],
};

const menuLibraryComponentsSecondary = {
  header: 'Components',
  id: 'library-components',
  menuItems: [
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
      id: 'components__forms',
      title: 'Forms',
      parentLinks: [pages.library.link],
      children: [
        { link: pages.switch.link, title: pages.switch.pageTitle },
      ],
    },
    {
      id: 'components__table',
      title: 'Table',
      link: pages.table.link,
      parentLinks: [pages.library.link],
    },
  ],
};

const menuLibraryPatternsSecondary = {
  header: 'Patterns',
  id: 'library-patterns',
  menuItems: [
    {
      title: 'Headers',
      link: pages.anchors.link, // wrong!
      parentLinks: [pages.library.link],
    },
    {
      title: 'Buttons',
      link: pages.anchors.link, // wrong!
      parentLinks: [pages.library.link],
    },
  ],
};

const menuLibraryTemplatesSecondary = {
  header: 'Templates',
  id: 'library-templates',
  menuItems: [
    {
      title: '404 Page',
      link: pages.anchors.link, // wrong!
      parentLinks: [pages.library.link],
    },
  ],
};

const menuResourcesSecondary = {
  header: 'Resources',
  id: 'resources',
  menuItems: [
    {
      link: pages.github.link,
      title: pages.github.pageTitle,
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
