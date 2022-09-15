import pages from './pages';

export const menuItemsMain = [
  { link: pages.home.link, title: pages.home.pageTitle },
  { link: pages.guidelines.link, title: pages.guidelines.pageTitle },
  { link: pages.foundation.link, title: pages.foundation.pageTitle },
  { link: pages.library.link, title: pages.library.pageTitle },
  { link: pages.resources.link, title: pages.resources.pageTitle },
];

export const menuItemsLibrarySecondary = [
  {
    isMenuHeader: true,
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
    isMenuHeader: true,
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
    link: pages.forms.link,
    title: pages.forms.pageTitle,
    children: [
      { link: pages.form.link, title: pages.form.pageTitle },
    ],
  },
  // placeholder VVVVVVVVV
  { link: pages.library.link, title: pages.library.pageTitle },
];

export const menuItemsFoundationSecondary = [
  {
    link: '/foundation/',
    title: 'Spacing',
    parentLinks: [pages.foundation.link],
  },
  {
    link: '/foundation/',
    title: 'Typography',
    parentLinks: [pages.foundation.link],
  },
  {
    link: '/foundation/',
    title: 'Depth / Elevation / Shadows',
    parentLinks: [pages.foundation.link],
  },
  {
    link: '/foundation/',
    title: 'Shape (rounded corners)',
    parentLinks: [pages.foundation.link],
  },
  {
    link: '/foundation/',
    title: 'Motion / Timing',
    parentLinks: [pages.foundation.link],
  },
  {
    link: '/foundation/',
    title: 'Color',
    parentLinks: [pages.foundation.link],
  },
  {
    link: '/foundation/',
    title: 'Layout (Flex, Grid System)',
    parentLinks: [pages.foundation.link],
  },
  {
    link: '/foundation/',
    title: 'Opacity',
    parentLinks: [pages.foundation.link],
  },
];
